"use client";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import * as actions from "@/actions";
import Editor from "react-monaco-editor";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await actions.editSnippet(snippet.id, code);
    } catch (error) {
      console.error("Failed to save snippet:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Edit Your Snippet</h2>
      <Editor
        height="60vh"
        theme="vs-dark"
        language="javascript"
        value={code}
        options={{ minimap: { enabled: false }, scrollBeyondLastLine: false }}
        onChange={handleEditorChange}
        className="rounded-lg border border-gray-300"
      />
      <form onSubmit={handleSubmit} className="mt-4 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 font-semibold rounded-lg shadow-md transition ${
            isSubmitting ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {isSubmitting ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
}
