'use client'


import { useCallback, useLayoutEffect, useOptimistic, useRef, useState } from "react";
import { GetPosts, addPost } from "@/actions/action";
import PostButton from "./PostButton";
import React from "react";




function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
    if (textArea == null) return
    textArea.style.height = "0"
    textArea.style.height = `${textArea.scrollHeight}px`
}

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
        const [inputValue, setInputValue] = useState("");
        const textAreaRef = useRef<HTMLTextAreaElement>();
        const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
            updateTextAreaSize(textArea);
            
            textAreaRef.current = textArea
        }, []);
        useLayoutEffect(() => {
            updateTextAreaSize(ref.current?.elements.namedItem("content") as HTMLTextAreaElement)
        }, [inputValue])
        const [optimisticContent, addOptimisticContent] 
        = useOptimistic(postContent, (state, newTodo: Post) => {
            return [...state, newTodo];

           
        });
    return (
        <>
            <div className="flex  gap-2 border-b px-4">
                <div className="flex">
            <form 
                className="flex flex-col gap-2 px-4"
                ref={ref} 
                action= {async formData => {
                        ref.current?.reset();
                        addOptimisticContent({ 
                            id: Math.random(),
                            content: formData.get('content') as string,
                        });
                        // input validation here
                        await addPost(formData);
                        }
                    } 
                >
                <textarea 
                    className=" resize-none overflow-hidden p-4 text-lg outline-none"
                    ref={inputRef}
                    name="content"
                    placeholder='Todo name'
                    style={{ height: 0 }}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required 
                />
                <PostButton/>
            </form>
        </div>
            </div>
        </>
    )
}


