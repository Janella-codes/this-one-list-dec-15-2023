'use client'


import { useOptimistic, useRef } from "react";
import { addPost } from "@/actions/action";
import PostButton from "./PostButton";

type Post = {
    id: number;
    content: string;
}


type PostComponentProps = {
    postContent: Post[];
}

export default function PostedContent({
    postContent }: PostComponentProps) {
        const ref = useRef<HTMLFormElement>(null);
        const [optimisticContent, addOptimisticContent] 
        = useOptimistic(postContent, (state, newTodo: Post) => {
            return [...state, newTodo];
        });

    return (
        <><form ref={ref} action={async formData =>{
            ref.current?.reset();

            addOptimisticContent({ 
                id: Math.random(),
                content: formData.get('content') as string,
            });
            // input validation here
           await addPost(formData);
        }} className='flex flex-col w-[300px] m-16 gap-2 border-b px-4 py-2'>
                <textarea 
                 className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
                  name="content"
                  placeholder='Todo name'
                  required 
                />
                
                <PostButton/>
            </form>

<ul className='list-disc'>
{optimisticContent.map((post) => (
    <li key={post.id}>
       
        <p>{post.content}</p>
    </li>
))}

</ul>
</>
    )
}