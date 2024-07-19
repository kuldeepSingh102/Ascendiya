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
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="gap-4 flex">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-300">
        {snippet.code}
      </pre>
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
