// import Link from "next/link";
// import { db } from "@/db";

// export default async function Home() {
//   const snippets = await db.snippet.findMany();

//   const renderedSnippets = snippets.map((snippet:any) => {
//     return (
//       <Link
//         key={snippet.id}
//         href={`/snippets/${snippet.id}`}
//         className="flex justify-between items-center p-2 border rounded"
//       >
//         <div>{snippet.title}</div>
//         <div>View</div>
//       </Link>
//     );
//   });

//   return (
//     <div>
//       <div className="flex m-2 justify-between items-center">
//         <h1 className="text-xl font-bold">Snippets</h1>
//         <Link href="/snippets/new" className="border p-2 rounded">
//           New
//         </Link>
//       </div>
//       <div className="flex flex-col gap-2">{renderedSnippets}</div>
//     </div>
//   );
// }
import Link from "next/link";
import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet: any) => {
    return (
      <Link
        key={snippet.id}
        href={`/snippets/${snippet.id}`}
        className="flex justify-between items-center p-4 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        <div className="text-gray-800 font-semibold">{snippet.title}</div>
        <div className="text-blue-500 font-medium">View</div>
      </Link>
    );
  });

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-gray-900">Snippets</h1>
        <Link href="/snippets/new" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
          New
        </Link>
      </div>
      <div className="space-y-4">
        {renderedSnippets}
      </div>
    </div>
  );
}
