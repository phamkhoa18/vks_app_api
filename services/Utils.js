import dotenv from 'dotenv';
dotenv.config();
import slugify from 'slugify';
import mongoose from 'mongoose'; // Bạn cần import mongoose để dùng connect

import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }); // Assumes GEMINI_API_KEY is set

const Utils = {

    ai_summary: async (content) => {
    const prompt = `
    Bạn hãy tóm tắt nội dung dưới đây dành cho app tin tức, với yêu cầu:

    - Tóm tắt thành một danh sách 3-5 ý chính, mỗi ý là một câu ngắn, rõ ràng, dễ hiểu.
    - Mỗi ý bắt đầu bằng "- " (gạch ngang + dấu cách).
    - Nội dung tóm tắt phải đủ ý, giúp người đọc nắm nhanh được điểm chính của bài báo mà không cần đọc hết.
    - Phần cuối cùng, viết một đoạn **bài văn tóm tắt tổng thể dài, mạch lạc, đầy đủ và dễ hiểu**, viết liền mạnh không xuống dòng ,như một bài viết ngắn, bọc trong thẻ div với class="summary".
    - Đặt dấu phân cách 3 gạch ngang "---" trước đoạn tóm tắt tổng thể để dễ phân biệt.

    Nội dung gốc:
    """${content}"""

    Kết quả trả về đúng định dạng:

    - Ý chính 1
    - Ý chính 2
    - Ý chính 3
    ---
    <div class="summary">Đoạn bài văn tóm tắt tổng thể dài, đầy đủ các ý chính, được viết mạch lạc, dễ nghe như một bài báo ngắn.</div>
    `;
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemma-3-27b-it', // ✅ Đã thay đổi từ gemma-3-4b-it sang gemma-3-27b-it
            contents: prompt,
        });

        const text = response.text.trim();

        // Tách phần ý chính và phần tóm tắt tổng thể theo dấu phân cách ---
        const parts = text.split('---');

        // Phần ý chính (mảng các dòng bắt đầu '- ')
        const summaryArray = (parts[0] || '')
          .split('\n')
          .map(line => line.trim())
          .filter(line => line.startsWith('- '))
          .map(line => line.substring(2)); // loại bỏ '- '

        // Phần tóm tắt tổng thể bên trong <div class="summary">...</div>
        let summary = '';
        if (parts[1]) {
          const match = parts[1].match(/<div\s+class=["']summary["']>([\s\S]*?)<\/div>/i);
          if (match && match[1]) {
            summary = match[1].trim();
          }
        }

        console.log('📝 Summary Array:', summaryArray);
        console.log('📄 Summary Text:', summary);
        
        // Trả về object chứa 2 trường
        return {
          summaryArray: summaryArray,
          summary: summary,
        };
        
    } catch (error) {
        console.error('❌ Lỗi khi gọi AI summary:', error.message);
        
        // Fallback: trả về summary đơn giản nếu AI call fail
        return {
          summaryArray: ['Nội dung được tóm tắt tự động'],
          summary: content.substring(0, 200) + '...',
        };
    }
},

  // Database connection function
  connectDB: async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error connecting to MongoDB: ${error.message}`);
      process.exit(1); // Exit process with failure
    }
  },


  // generateSlug ramdom 3 key, output ( slug + 3 key ramdom )
  generateSlug: (text) => {
    // Tạo slug cơ bản
    const baseSlug = slugify(text, {
      lower: true,      // chuyển thành chữ thường
      strict: true,     // chỉ cho phép chữ, số, dấu '-'
      remove: /[*+~.()'"!:@]/g  // loại bỏ ký tự đặc biệt
    });
    
    // Tạo 3 ký tự random (chữ và số)
    const randomSuffix = Math.random()
      .toString(36)      // chuyển sang base36 (0-9, a-z)
      .substring(2, 5);  // lấy 3 ký tự từ vị trí 2-4
    
    // Kết hợp slug với random suffix
    return `${baseSlug}-${randomSuffix}`;
  }
};

export default Utils;
