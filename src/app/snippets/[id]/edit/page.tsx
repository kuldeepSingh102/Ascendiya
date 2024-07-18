import SnippetEditForm from '@/component/snippet-edit-form';
import { db } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react'


interface SnippetEditPageProps {
    params: {
        id:string
    }
}
export default async function SnippetEditPage(props: SnippetEditPageProps) {
    const id = parseInt(props.params.id);
    const snippet =await db.snippet.findFirst({
        where:{id}
    })
    if (!snippet) {
        return notFound();
    }
    return ( 
        <>
            {snippet.code}
      <SnippetEditForm snippet={snippet}/>
      </>
    )
}

