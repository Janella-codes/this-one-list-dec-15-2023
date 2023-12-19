import Image from "next/image";
import hedgehog from './1.jpg';

type ProfileImageProps = {
    src?: string | null;
    className?: string; 
};

export function ProfileImage({ src, className = ""}: ProfileImageProps) {
    return (
    <div className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`} >
    
        (
            <Image
                    src={hedgehog}
                    width={300}
                    height={300}
                    object-fit='cover'
                    alt="Picture of the author"
                />  
        )
    </div>
    );
}