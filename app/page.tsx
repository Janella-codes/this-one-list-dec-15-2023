
import { UserButton } from "@clerk/nextjs";
import { TodoItem } from "./components/TodoItems";
import { prisma } from "./db";
import Link from "next/link";
import Image from "next/image";
import Pic from "./Postpic";
import { Button } from "./components/Button";
import PostComment from "./components/PostComment";

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update( {where: { id }, data: { complete } })
}



export default async function Home() {
  const todos = await prisma.todo.findMany()

  const postContent = await prisma.post.findMany()

  return ( <>
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2xl">To dos</h1>
      <Link 
        className="border border-slate-300 text-slate-800 px-2 py-1 rounded
        hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        href="/new"
        >
          New
        </Link>
    </header>
    <UserButton />
    <ul className="p1-4 p-32">
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
      ))}
    </ul>

    <PostComment postContent={postContent}/>
               <Button className="p-4"/>

               <Pic />

               
  </>
  )
}



 
