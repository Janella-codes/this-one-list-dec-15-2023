import { create } from "domain";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "../db";

async function createTodo(data: FormData) {
    "use server"

    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length ===0) {
        throw new Error ("Invalid title")
    }

    await prisma.todo.create({ data: { title, complete: 
    false } })
    redirect("/")
}

export default function Home() {
    return (
    <>
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2xl">new</h1>
      <Link 
        className="border border-slate-300 text-slate-800 px-2 py-1 rounded
        hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        href="..">to dos</Link>
      </header>
      <form action={createTodo}className="flex gape-2 flex-col">
        <input 
        type="text" 
        name="title" 
        className= "border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end sticky top-0 px-2 py-4">
            <Link 
            href=".."
            className="border border-slate-300 text-slate-600 px-2 py-1 rounded
            hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            >
                Cancel</Link>
            <button 
            type="submit" 
            className="border border-slate-300 text-slate-800 px-2 py-1 rounded
            hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            >
                Create
            </button>
        </div>
      </form>   
  </>
    )
  }

