import { db } from "@/db";
import React from "react";
import { notFound } from "next/navigation";
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
  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="gap-4 flex">
          <button className="p-2 border rounded">Edit</button>
          <button className="p-2 border rounded">Delete</button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-300">{snippet.code}</pre>
      {snippet.title}
    </div>
  );
}
