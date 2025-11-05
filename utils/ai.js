// utils/ai.js
import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function callChatGPT(prompt) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini", // hoặc "gpt-4.1-mini"
    messages: [
      { role: "system", content: "Bạn là trợ lý chọn lọc tin tức." },
      { role: "user", content: prompt },
    ],
    temperature: 0.3,
  });

  return completion.choices[0].message.content;
}
