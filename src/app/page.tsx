import { db } from "@/db";
import Image from "next/image";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => {
    return <div key={snippet.id}>{snippet.title}</div>;
  });
  return <div>{renderedSnippets }</div>;
}
