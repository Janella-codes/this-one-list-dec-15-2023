

import { useFormStatus } from "react-dom";



export default function PostButton() {
    
    const { pending } = useFormStatus();

    return (
        <button disabled={pending}
        className='mt-5 hover:bg-pink-200 self-end px-2 py-2 w-20 bg-cyan-200 text-black rounded-full'>
            { pending ? 'Creating...' : 
            'smash it' }
        
        </button>
    )
}   
