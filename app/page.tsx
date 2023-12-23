
import { UserButton } from "@clerk/nextjs";
import { TodoItem } from "./components/TodoItems";
import { prisma } from "./db";
import Link from "next/link";
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

  const postContent = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

 

  return ( <>
  <UserButton />
    <header className="flex justify-between items-center mb-4">
    
   
    <ul className="flex-1 p1-4 p-2 sticky top-0 px-2 py-4">
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
      ))}
    </ul>

      
      <Link 
        className="border bg-pink-100 border-slate-300 text-slate-800 px-2 py-1 rounded-full
        hover:bg-pink-200 focus-within:bg-slate-200 outline-none"
        href="/new"
        >
          New
        </Link>
    </header>
    <PostComment postContent={postContent}/>
    

   

               <Pic />
        
               
  </>
  )
}

/*

function RecentPosts() {


  const  postContent = [] 

  return <InfinitePostList postContent={postContent}/>

}
 
*/