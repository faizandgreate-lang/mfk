import { NextApiRequest, NextApiResponse } from "next";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");

const SYSTEM_PROMPT = `
You are Faizan AI, a helpful assistant on Mohammad Faizan Khan's portfolio. 
Respond like ChatGPT. Use Markdown.
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { message, history } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    // Enable streaming for faster response perception
    const result = await model.generateContentStream({
      contents: [
        { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
        { role: "model", parts: [{ text: "Understood." }] },
        ...(history || []).map((h: any) => ({
          role: h.role === "user" ? "user" : "model",
          parts: h.parts,
        })),
        { role: "user", parts: [{ text: message }] },
      ],
    });

    // Set headers for streaming
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      res.write(chunkText);
    }

    res.end();
  } catch (error: any) {
    console.error("Streaming Error:", error);
    res.status(500).end("Error generating response.");
  }
}
