import Link from "next/link";
import {RiYoutubeLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiGithubLine,
  RiLinkedinLine
} from 'react-icons/ri';

const Socials = () => {
  return(
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href= {'https://github.com/LAZREG14'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href= {'https://www.linkedin.com/in/mustapha-lazreg/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href= {'https://twitter.com/LazregMustapha'} className='hover:text-accent transition-all duration-300'>
        <RiTwitterXLine />
      </Link>
      <Link href= {'https://www.youtube.com/@safatmachine'} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href= {'https://www.instagram.com/safatmachine/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
