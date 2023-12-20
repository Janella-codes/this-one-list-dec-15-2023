import Image from 'next/image';
import hedgehog from './1.jpg';
import v1 from './veronica1.jpg';
import v2 from './veronica2.jpg';
import v3 from './dq_girls3.jpg';
import v4 from './sweeter_dress_12_28_2021.png';

export default function Pic() {
    return (
        <div className='flex flex-col'>
            <h1 className='flex z-0'>My Homepage</h1>


            
                <h3 className='mt-4'>my name is dingdong</h3>
       
         
        <div className='p-4 space-y-4'>

            <Image
                src={hedgehog}
                width={300}
                height={300}
                object-fit='cover'
                alt="Picture of the author"
            />  

            <Image
                src={v1}
                width={100}
                height={100}
                object-fit='cover'
                alt="Picture of the author"
            />  
            <Image
                src={v2}
                width={100}
                height={100}
                object-fit='cover'
                alt="Picture of the author"
            />  
            <Image
                src={v3}
                width={100}
                height={100}
                object-fit='cover'
                alt="Picture of the author"
            />
            <Image
                src={v4}
                width={100}
                height={100}
                object-fit='cover'
                alt="Picture of the author"
            />
        </div>

        </div>
    )
}