import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const selectTopArticles = async (articles) => {
  const articleSummaries = articles.map(article => ({
    id: article._id.toString(),
    title: article.title,
    summary: article.summary || article.description,
    publishDate: article.publishDate,
  }));

  const validIds = articleSummaries.map(a => a.id);
  const prompt = `
    You are an AI assistant tasked with selecting EXACTLY 15 most significant articles from a list of ${articles.length}.
    Criteria for significance: relevance, recency, and impact (based on title, summary, and publishDate).
    You MUST return EXACTLY 15 unique article IDs from the provided list. Do NOT include IDs not in the input.
    If you cannot select exactly 15, randomly select additional articles from the provided IDs to reach 15 or trim excess.

    Articles:
    ${JSON.stringify(articleSummaries, null, 2)}

    Output in JSON format:
    {
      "selectedArticleIds": ["id1", "id2", ..., "id15"]
    }
  `;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
    });

    console.log('OpenAI selectTopArticles response:', response.choices[0].message.content);

    let result;
    try {
      result = JSON.parse(response.choices[0].message.content);
    } catch (parseError) {
      console.error('Failed to parse OpenAI response:', parseError);
      throw new Error('Invalid JSON response from OpenAI');
    }

    if (!result.selectedArticleIds || !Array.isArray(result.selectedArticleIds)) {
      throw new Error('OpenAI response missing or invalid selectedArticleIds');
    }

    // Filter only valid IDs and ensure uniqueness
    let selectedIds = [...new Set(result.selectedArticleIds.filter(id => validIds.includes(id)))];
    if (selectedIds.length > 15) {
      selectedIds = selectedIds.slice(0, 15);
    } else if (selectedIds.length < 15) {
      const remainingIds = validIds.filter(id => !selectedIds.includes(id));
      const needed = 15 - selectedIds.length;
      selectedIds = selectedIds.concat(
        remainingIds.sort(() => Math.random() - 0.5).slice(0, needed)
      );
    }

    if (selectedIds.length !== 15) {
      throw new Error(`Failed to ensure exactly 15 articles. Got ${selectedIds.length}`);
    }

    return selectedIds;
  } catch (error) {
    console.error('Error in selectTopArticles:', error);
    throw error;
  }
};

export const analyzeArticlesForTopics = async (articles) => {
  const articleSummaries = articles.map(article => ({
    id: article._id.toString(),
    title: article.title,
    summary: article.summary || article.description,
  }));

  const prompt = `
    You are an AI assistant that analyzes a list of articles and groups them into logical topics.
    Given the following articles (each with ID, title, and summary), group them into 3-5 topics.
    For each topic, provide:
    - A concise, engaging title for the topic in VIETNAMESE (Tiếng Việt) that reflects the content of the articles.
    - A list of article IDs that belong to this topic.
    
    Ensure topics are coherent, and no article appears in more than one topic.
    If an article doesn't fit well, you can leave it out or create a miscellaneous topic with a Vietnamese title.
    
    Articles:
    ${JSON.stringify(articleSummaries, null, 2)}
    
    Output in JSON format:
    {
      "topics": [
        {
          "title": "Tên chủ đề bằng tiếng Việt",
          "articleIds": ["id1", "id2"]
        },
        ...
      ]
    }
  `;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
    });

    console.log('OpenAI analyzeArticlesForTopics response:', response.choices[0].message.content);

    let result;
    try {
      result = JSON.parse(response.choices[0].message.content);
    } catch (parseError) {
      console.error('Failed to parse OpenAI response:', parseError);
      throw new Error('Invalid JSON response from OpenAI');
    }

    if (!result.topics || !Array.isArray(result.topics)) {
      throw new Error('OpenAI response missing or invalid topics');
    }

    // Validate that topic titles are non-empty
    result.topics.forEach((topic, index) => {
      if (!topic.title || typeof topic.title !== 'string') {
        console.warn(`Invalid topic title at index ${index}:`, topic);
        topic.title = `Chủ đề phụ ${index + 1}`; // Fallback title in Vietnamese
      }
    });

    return result.topics;
  } catch (error) {
    console.error('Error in analyzeArticlesForTopics:', error);
    throw error;
  }
};