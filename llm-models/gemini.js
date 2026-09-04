import "dotenv/config";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    
  apiKey: process.env.GEMINI_KEY,
});

export default async function geminiresponse(query) {

    const response = await ai.interactions.create({
    model: process.env.LLM_MODEL,
    input: query,
    tools: [
            {
                type: "google_search"
            }
        ],
    stream:true
    });

    console.log(response);

    return response;
}

