"use client";

import { useFormState } from "react-dom";
import * as actions from "@/actions";
import { db } from "@/db";

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form
        action={action}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-6 text-gray-900">
          Create a Snippet
        </h3>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="title"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-semibold" htmlFor="code">
              Code
            </label>
            <textarea
              name="code"
              className="border border-gray-300 rounded-lg p-3 w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="code"
            />
          </div>

          {formState.message ? (
            <div className="my-2 p-4 bg-red-100 border border-red-300 rounded-lg text-red-700">
              {formState.message}
            </div>
          ) : null}

          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-800 transition"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
