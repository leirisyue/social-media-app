import { menu } from '@/app/share/constant';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';

function SideNav() {
  return (
    <>
      <div className='p-5 background-image shadow-sm border h-screen'>
        <Image src="/next.svg" alt="logo" width={170} height={80} />
        <hr className='mt-7' />
        <div className='mt-5'>
          {menu.map((item, index) => {
            return(<div className='
                group
                flex gap-3 mt-2 p-3 
                text-[18px] 
                items-scenter 
                text-black 
                cursor-pointer 
                hover:bg-primary
                hover:text-white
                rounded-md
                transition-all
                ease-in-out
                duration-300
            '>
              <item.icon className='group-hover:animate-bounce' />
              <h2>{item.name}</h2>
            </div>)
          })}
        </div>
      </div>
    </>
  )
}

export default SideNav