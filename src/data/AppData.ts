import HTML5PeriodicTable from '../assets/images/HTML5-periodic-table.png';
import HTML5PeriodicTableAvatar from '../assets/images/avatars/HTML5.png';
import UXEassessment from '../assets/images/UXE-assessment.png';
import UXEassessmentAvatar from '../assets/images/avatars/assessment.png';
import AtomicDesign from '../assets/images/atomic-design.png';
import AtomicDesignAvatar from '../assets/images/avatars/atom.png';

export const contactButtonsData = [
    {
      buttonIcon: 'awethentique-mail',
      buttonTitle: 'Send me an email',
      buttonUrl: 'mailto:ritesh.makan@gmail.com',
      popOverContent: 'ritesh.makan@gmail.com',
      copyContent:'ritesh.makan@gmail.com'
    },
    {
      buttonIcon: 'awethentique-linkedin-rect',
      buttonTitle: 'Find me on LinkedIn',
      buttonUrl: 'https://www.linkedin.com/in/riteshmakan/',
      popOverContent: 'in/riteshmakan',
      copyContent:'https://www.linkedin.com/in/riteshmakan/'
    },
  ];

  export const profileInfo = {
    linkUrl:"https: //awethentique.github.io /projects",
    userName:"Ritesh Makan",
    role:"Ui/Ux Engineer/Architect",
    msg:"Passionate about user experience!",
  }
  
  export const contentInfo =[
    {
      imgSrc: HTML5PeriodicTable,
      avatarSrc: HTML5PeriodicTableAvatar,
      title: 'Periodic table of HTML5 elements',
      description:
      'Inspired by the work done by Mike Golus on a periodic table and other references on the internet. I decided to expand on his project and make my own variation, showing all the HTML 5 elements in a periodic table format. The elements are grouped based on the developer.mozilla.org HTML elements reference. This project is mostly done using styling with very little javascript.',
      url: '/projects/HTML5-Periodic/index.html',
    },
    {
      imgSrc: AtomicDesign,
      avatarSrc: AtomicDesignAvatar,
      title: 'Atomic design methodology',
      description:
      'The methodology of Atomic design has taught me the value of building scalable solutions from the start. I use this methodology in my design thinking to help bridge the gap between the design and development teams I work with. Using this methodology, I allow the developers to build web pages as though they were "playing with lego bricks". I decided to start this project to help demonstrate the power and effectiveness of Atomic design in many projects (currently a work in progress)',
    },
    {
      imgSrc: UXEassessment,
      avatarSrc: UXEassessmentAvatar,
      title: 'UXE assessment',
      description:
        'I was tasked to build a pixel-perfect web page as an assessment for a job interview. Here I taught myself some new libraries while doing the assessment. The task was only to "build as you see" for a web-only desktop application. I got carried away with presenting my passion for building useful interfaces and including responsive, fluidly adaptive layouts across all mobile devices as well. ',
      url: '/projects/UXE-assessment/index.html',
    },
  ];
