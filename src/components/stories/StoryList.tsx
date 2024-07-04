import Image from 'next/image'

const StoryList = () => {
  return (
    <>
      <div
        className="flex flex-col items-center gap-2 cursor-pointer"
      
      >
        <Image
          src="https://images.pexels.com/photos/20831561/pexels-photo-20831561/free-photo-of-beautiful-bride-posing-by-the-moonlight-at-a-beach.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
          width={80}
          height={80}
          className="w-20 h-20 rounded-full ring-2"
        />
        <span className="font-medium">
          test
        </span>
      </div>
    </>
  )
}

export default StoryList