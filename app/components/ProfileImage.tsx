import Image from "next/image";
import hedgehog from './1.jpg';
import v1 from './veronica1.jpg';

type ProfileImageProps = {
    src?: string | null;
    className?: string; 
};

export function ProfileImage({ src, className = ""}: ProfileImageProps) {
    return (
    <div className={`px-4 h-5 w-2 overflow-hidden rounded-full ${className}`} >
    
        (
            <Image className="rounded-full justify-center"
                    src={hedgehog}
                    width={300}
                    height={300}
                    object-fit='cover'
                    alt="Picture of the author"
                />  
                 <Image
                    src={v1}
                    width={300}
                    height={300}
                    object-fit='cover'
                    alt="Picture of the author"
                />  
        )
    </div>
    );
}