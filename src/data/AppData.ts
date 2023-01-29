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
      'Inspired by the work done by Mike Golus on a periodic table, I decided to further expand his project and make an HTML 5 variation.',
      url: '/projects/HTML5-Periodic/index.html',
    },
    {
      imgSrc: AtomicDesign,
      avatarSrc: AtomicDesignAvatar,
      title: 'Atomic design principles',
      description:
      'The principles of Atomic design has taught the value in building scalable solutions from the start',
    },
    {
      imgSrc: UXEassessment,
      avatarSrc: UXEassessmentAvatar,
      title: 'UXE assessment',
      description:
        'I was tasked to build a web page as an assessment for a job interview. Here I taught myself some new libraries.',
      // url: '/projects/UXE-assessment/index.html',
    },
  ];
