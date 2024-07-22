
import { db } from "@/db";
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as action from "@/actions";

interface snippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function snippetShowPage(props: snippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });
  
  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = action.deleteSnippet.bind(null, snippet.id);
  
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction} method="POST">
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
            >
              Delete
            </button>
          </form>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <pre className="whitespace-pre-wrap overflow-x-auto text-sm text-gray-800">
          {snippet.code}
        </pre>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    };
  });
}
