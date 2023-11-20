import react, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaJava,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiGnubash,
  SiCplusplus,
  SiPython,
  SiMongodb,
  SiNeo4J,
  SiLatex,
  SiApachesolr,
} from "react-icons/si";

import { Icon } from '@iconify/react';

//  data
const aboutData = [
  {
    title: 'compétences',
    info: [

      {
        title: 'Data Science',
        icons: [ <Icon icon="simple-icons:scikitlearn" width="40" height="40" />,
                 <Icon icon="simple-icons:spacy" width="40" height="40" />,
                 <Icon icon="simple-icons:pandas" />,
                 <Icon icon="simple-icons:numpy"  />,
                 //<Icon icon="simple-icons:nltk" width="40" height="40" />,
                 <Icon icon="simple-icons:pytorch"  />,
                 <Icon icon="devicon-plain:matplotlib"  />,
                 <Icon icon="devicon-plain:keras-wordmark" color="white" width="40" height="40" />,
                 <SiMongodb />,
                 <SiNeo4J/>]
      },
      {
        title: 'Programmation',
        icons: [ <SiPython />,
                 <FaJava/>,
                 <SiGnubash />,
                 <SiCplusplus />,
                 <FaJs />,
                 <FaHtml5 />,
                 <FaCss3 />,
                ]
      },
      /*
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />
        ],
      },
      
      {
        title: 'SGBD',
        icons: [ <SiMongodb />,
                 <SiNeo4J/>,]
      },
      */
      {
        title: 'Autres',
        icons: [ <SiLatex />,
                 <SiApachesolr/>,
]
      },
    ],
  },
  {
    title: 'recherche',
    info: [
      { 
      title: 'Analyse Automatique de Texte Coranique',
      stage: 'Depuis 2023',
      },
      {
        title: 'Analyse de Sentiments sur X (Twitter)',
        stage: 'Depuis 2022',
      },
      {
        title: 'Détection des Lieux de Paris dans la Chanson Française',
        stage: '2021',
      },
    ],
  },
  {
    title: 'expérience',
    info: [
      {
        title: 'Data Scientist - RATP group',
        stage: '2022 - 2023',
      },
      {
        title: 'Moniteur Informatique - INHA',
        stage: '2019 - 2021',
      },
      {
        title: 'Gestionnaire Ordonnancement - TRUSK',
        stage: '2018 - 2019',
      },
    ],
  },
  {
    title: 'diplômes',
    info: [
      {
        title: 'Langue et Informatique - Sorbonne Université - Master',
        stage: '2022',
      },
      {
        title: 'Langue et Techniques Informatiques - Sorbonne Université - Licence',
        stage: '2019',
      },
      {
        title: 'Psychologie du Développement - Université Paris Nanterre - BAC+2',
        stage: '2017',
      },
      /*
      {
        title: 'Langues Françaises - Université Djillali Liabès - Licence',
        stage: '2016',
      },
      */
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='w-full h-full max-w-[537px] max-h-[478px] absolute -bottom-32 lg:bottom-0 lg:right-[85%]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Un Aperçu de Mon  <span className='text-accent'>Parcours</span>.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            Titulaire d'un Master en Data Science de Sorbonne Université, je possède une expertise variée, allant de l'analyse multilingue du texte à la gestion de projets complexes, tout en privilégiant une approche éthique et innovante.          </motion.p>
          
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${ index === itemIndex && "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300" } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={()=> setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex)=>{
                      return <div className='text-4xl text-white'>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div> 
        </motion.div>
      </div>
    </div>
  );
};

export default About;
