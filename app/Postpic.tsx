import Image from 'next/image';
import hedgehog from './1.jpg';
import v1 from './veronica1.jpg';
import v2 from './veronica2.jpg';
import v3 from './dq_girls3.jpg';
import v4 from './sweeter_dress_12_28_2021.png';
import Link from 'next/link';

export default function Pic() {
    return (
   
           <div>
     
        <h3>my profile</h3>
        

    <div>
        
        <div className='mb-4'>

                <Image
                    src={hedgehog}
                    width={300}
                    height={300}
                    object-fit='cover'
                    alt="Picture of the author"
                />  

        </div>
    </div>
    </div>
    )
}   