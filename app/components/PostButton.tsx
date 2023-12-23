

import { useFormStatus } from "react-dom";



export default function PostButton() {
    
    const { pending } = useFormStatus();

    return (
        <button disabled={pending}
        className='self-end px-2 py-2 w-20 bg-cyan-200 text-black rounded-md'>
            { pending ? 'Creating...' : 
            'smash it' }
        
        </button>
    )
}   
