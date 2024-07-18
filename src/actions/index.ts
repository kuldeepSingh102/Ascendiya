'use server';

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnipet(id: number, code: string) {
    console.log(id, code)
    await db.snippet.update({
        where: { id },
        data: { code }
    })
    redirect(`/snippets/${id}`)
}

export async function deletesSnippet(id: number) {
    await db.snippet.delete({
        where:{id}
    })
    redirect(`/`)

}