
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





  <div className="container mx-auto flex items-start">

  <div className="flex flex-col items-start gap-2">
  <nav className="sticky top-1">
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
                <h1 className=" text-2xl">To do</h1>
          </li>
          <li className="mt-6">
              {todos.map(todo => (
                <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
              ))}

          </li>
      </ul>
  </nav>
  </div>

  <div className="mt-20 min-h-screen flex-grow border-x">

  <div className="flex min-h-screen border-x gap-2 border-b py-2">
    <div className="flex flex-col w-full text-center">
      <h1 className="text-2xl">Recent Posts</h1>
      <div className="flex flex-col gap-2 mt-4">
      <Pic />
      <PostComment postContent={postContent}/>
        {postContent.map((post) => (
          <span key={post.id}>
            <ul className="flex w-full my-4 text-center text-2x1 border-b">
              <li>
                <p className="py-4 px-40">{post.content}</p>
              </li>
     
            </ul>
          
          </span>
        ))}
      </div>

    </div>


</div>
               
</div>

</div>


  </>
  )
}

/*

 <PostComment postContent={postContent}/>

function RecentPosts() {


  const  postContent = [] 

  return <InfinitePostList postContent={postContent}/>

}
 
*/