// app/dashboard/Documentation.jsx
"use client";

import React from "react";

const Documentation = () => {
  const features = [
    {
      title: "AI Chatbot",
      description:
        "Real-time, AI-powered customer support with context-aware responses. Manage multiple chatbots per department or use case.",
    },
    {
      title: "Dashboard",
      description:
        "Admin panel to manage chatbots, view analytics, dynamic routes using server components, and conversation history.",
    },
    {
      title: "Subscription & Payments",
      description:
        "Stripe integration with multiple subscription tiers: Starter, Pro, Enterprise.",
    },
    {
      title: "DOCX Export",
      description:
        "Export chat transcripts and reports as professional Word documents using the docx library.",
    },
  ];

  const techStack = [
    { layer: "Frontend", tech: "React, Next.js 13+, Tailwind CSS" },
    { layer: "Backend/API", tech: "Next.js API Routes, TypeScript" },
    { layer: "AI Engine", tech: "ScaleKit AI" },
    { layer: "Payments", tech: "Stripe" },
    { layer: "DOCX Export", tech: "docx library" },
  ];

  const envVariables = [
    { name: "STRIPE_SECRET_KEY", description: "Stripe secret key for checkout" },
    { name: "NEXT_PUBLIC_URL", description: "Public URL of your app" },
    { name: "SCALEKIT_API_KEY", description: "ScaleKit AI API key" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 text-gray-900 rounded-xl shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-center">
        AI Powered Customer Support Chatbot
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
        <p className="text-gray-700">
          This full-stack application provides intelligent AI-driven customer
          support, a dashboard to manage multiple chatbots, subscription-based
          plans via Stripe, and DOCX export of chat transcripts for reporting
          and analysis.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {techStack.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold">{item.layer}</h3>
              <p className="text-gray-700">{item.tech}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Environment Variables</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2 font-semibold">Variable</th>
                <th className="p-2 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {envVariables.map((env, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-2 font-medium">{env.name}</td>
                  <td className="p-2">{env.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">DOCX Export Example</h2>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          {`import { Document, Packer, Paragraph, TextRun } from "docx";
import fs from "fs";

const doc = new Document({
  sections: [{
    properties: {},
    children: [
      new Paragraph({
        children: [
          new TextRun("AI Customer Support Chat Transcript"),
          new TextRun({ text: "User: Hello, I need assistance.", break: 1 }),
          new TextRun({ text: "Bot: Sure! How can I help you today?" }),
        ],
      }),
    ],
  }],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("chat_transcript.docx", buffer);
});`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Deployment & Usage</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Clone the repo and install dependencies: <code>npm install</code></li>
          <li>Setup environment variables in <code>.env.local</code></li>
          <li>Run dev server: <code>npm run dev</code></li>
          <li>Build production: <code>npm run build && npm start</code></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Use lowercase for file names to avoid casing issues.</li>
          <li>Use named exports consistently (e.g., <code>export function getStripe()</code>).</li>
          <li>Mark dynamic pages with <code>export const dynamic = "force-dynamic"</code> if they use server-only APIs like cookies.</li>
          <li>Keep sensitive API keys in environment variables, never in code.</li>
        </ul>
      </section>
    </div>
  );
};

export default Documentation;