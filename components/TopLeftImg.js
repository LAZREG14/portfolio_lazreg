//next image
import Image from "next/image";

const TopLeftImg = () => {
  return (
  <div className='absolute left-O top-0 w-[200px] xl:w-[400px] opacity-50'>
    <Image src='/top_left.png' width={400} height={400} alt=''></Image>

  </div>
  );
};

export default TopLeftImg;
