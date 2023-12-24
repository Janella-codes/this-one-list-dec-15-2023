
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
  <nav className="mt-5 sticky top-0 px-2 py-4">
        <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
          <li>
              <Link 
                  className="mt-5 bg-pink-100 border-slate-300 text-slate-800 px-2 py-1 rounded-full
                  hover:bg-pink-200 focus-within:bg-slate-200 outline-none"
                  href="/new"
                  >
                    New
                  </Link>
          </li>
          <li>
                <h1 className="mt-6 text-2xl">To do</h1>
          </li>
          <li className="mt-6">
              {todos.map(todo => (
                <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
              ))}

          </li>
      </ul>
  </nav>

    <Pic />

  
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