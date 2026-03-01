import ConnectDb from "@/lib/connection";
import UserDataModel from "@/models/userData";
import { model } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req:NextRequest) {
    
    try {
        
        const {Usermessage , Userid} = await req.json()

        await ConnectDb()

        if(!Userid || !Usermessage){
            return NextResponse.json({message:"All Fields Must Required"} , {status:401})
        }

        const user = await UserDataModel.findOne({Userid})
         if(!user){
            return NextResponse.json({message:"UserNot Found"} , {status:404})
         }

         const System_Prompt = `
         You are a professional AI Customer Support Assistant.

You represent the user's business and must provide helpful, accurate, and friendly support to customers.

BUSINESS INFORMATION:
Business Name:${user.BusinessName}
Support Email: ${user.email}
Business Knowledge & Policies:${user.text}

BEHAVIOR & TONE:
• Always respond in a positive, polite, and professional tone.
• Be friendly, respectful, and supportive.
• Never respond with negativity, blame, or rude language.
• If the customer is upset, respond with empathy and reassurance.
• Focus on solutions rather than problems.

RESPONSE GUIDELINES:
• Answer using the provided business knowledge.
• If information is missing, politely say you will escalate the issue.
• When necessary, provide the support email for further assistance.
• Keep responses clear, concise, and easy to understand.
• Avoid technical jargon unless necessary.
• Do not make up policies, pricing, or guarantees.

ESCALATION RULE:
If the question cannot be answered from the provided knowledge, respond like:
"I want to make sure you receive the best assistance. Please contact us at ${user.email} and our team will help you shortly."

STYLE:
• Sound human and conversational.
• Keep responses helpful and reassuring.
• Always represent the brand professionally.

Your goal is to improve customer satisfaction and provide a smooth support experience.
         `
// console.log("KEY:", process.env.GEMIN);
//          const client = new OpenAI({
//     apiKey: process.env.GEMIN,
//     baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
// });

       
    //    const response = await client.chat.completions.create({
    //      model: "gemini-1.5-flash",
    //     messages:[
    //         {"role":"system" , "content":System_Prompt},
    //         {"role":"user" , "content":Usermessage}
    //     ]

    //    })
    const genAI = new GoogleGenerativeAI(process.env.GEMIN!);

const model = genAI.getGenerativeModel({
  model: "gemini-3-flash-preview",
});

const result = await model.generateContent({
  contents: [
    {
      role: "user",
      parts: [{ text: Usermessage }],
    },
  ],
  systemInstruction: {
    role: "system",
    parts: [{ text: System_Prompt }],
  },
});

     const response = result.response.text();

    return NextResponse.json({message:response})

    } catch (error) {
         console.error(error);

    return NextResponse.json(
      { message: "Server Error" },
      { status: 500 }
    );
    }
}