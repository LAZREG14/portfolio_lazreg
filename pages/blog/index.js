import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';

const Blog = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text*/}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className='h1'>
          En Route vers l'<span className='text-accent'>Inspiration</span>:  <br /> Le<span className='text-accent'> Blog </span> est en Cours de Construction!
          </motion.h1>
          {/* subtitle */}
          <motion.p variants={fadeIn('up', 0.3)} initial='hidden' animate='show' exit='hidden' className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
             Bonjour à tous ! Nous sommes impatients de vous annoncer l'arrivée prochaine d'un blog dédié au passionnant monde du Natural Language Processing (NLP) et de la Data Science. Ce blog sera une source riche d'articles captivants et de contenus informatifs dans ces domaines fascinants. Restez à l'affût : nous travaillons avec enthousiasme pour vous offrir une expérience de lecture enrichissante et divertissante. En attendant son lancement, explorez les autres sections de notre site. Merci pour votre soutien et votre intérêt!
          </motion.p>
        </div>
      </div>
    </div>
  )
  };
  
  export default Blog;