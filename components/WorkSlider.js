// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'lieux de Paris',
          path: '/spacy.jpg',
          link: 'https://github.com/LAZREG14/Memoire/blob/main/Union_lieux_chansons_françaises/Lieux_Paris_chansons_françaises.ipynb',
        },
        {
          title: 'Ratp twitter',
          path: '/ratp.jpg',
          link: 'https://github.com/LAZREG14/Project-RATPgroup',
        },
        {
          title: 'faq project',
          path: '/faq.jpg',
          link: 'https://github.com/LAZREG14/FAQ-Project',
        },
      ]
    }
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//icons

import {BsArrowRight} from 'react-icons/bs'

// image
import Image from 'next/image';

//import required modules
import {Pagination} from 'swiper';


const WorkSlider = () => {
  return (
    <Swiper
    spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
        return <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, index)=>{
              return (
              <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                <a
                    href={image.link || '#'} // Utilisez le lien spécifié ou '#' s'il est manquant
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                  <div className='flex items-center justify-center relative overflow-hidden group'>
                    {/* image */}
                    <Image src={image.path} width={500} height={300} alt='' />
                    {/* overlay gradient */}
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#4FABE3] to-[#FF1616] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                    {/* title */}
                    <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                      <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                        {/* title part 1 */}
                        <div className='delay-100'>Code</div>
                        {/* title part 2 */}
                        <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'> Source</div>
                        {/* icon */}
                        <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-allduration-300 delay-200'><BsArrowRight /></div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              );
            })}
          </div>
        </SwiperSlide>;
      })}
    </Swiper>
  );
};

export default WorkSlider;