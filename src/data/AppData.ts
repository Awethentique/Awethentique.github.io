import AtomicDesign from '../assets/images/atomic-design.png';
import UXEassessmentAvatar from '../assets/images/avatars/assessment.png';
import AtomicDesignAvatar from '../assets/images/avatars/atom.png';
import HTML5PeriodicTableAvatar from '../assets/images/avatars/HTML5.png';
import StorybookAvatar from '../assets/images/avatars/storybook.png';
import HTML5PeriodicTable from '../assets/images/HTML5-periodic-table.png';
import Storybook from '../assets/images/storybook.png';
import UXEassessment from '../assets/images/UXE-assessment.png';

export const contactButtonsData = [
  {
    buttonIcon: 'awethentique-mail',
    buttonTitle: 'Send me an email',
    buttonUrl: 'mailto:ritesh.makan@gmail.com',
    popOverContent: 'ritesh.makan@gmail.com',
    copyContent: 'ritesh.makan@gmail.com',
  },
  {
    buttonIcon: 'awethentique-linkedin-rect',
    buttonTitle: 'Find me on LinkedIn',
    buttonUrl: 'https://www.linkedin.com/in/riteshmakan/',
    popOverContent: 'in/riteshmakan',
    copyContent: 'https://www.linkedin.com/in/riteshmakan/',
  },
];

export const profileInfo = {
  linkUrl: 'https: //awethentique.github.io /projects',
  userName: 'Ritesh Makan',
  role: 'Ui/Ux Engineer/Architect',
  msg: 'Passionate about user experience!',
};

export const contentInfo = [
  {
    imgSrc: HTML5PeriodicTable,
    avatarSrc: HTML5PeriodicTableAvatar,
    title: 'Periodic table of HTML5 elements',
    description: [
      'Expanding on the work done by Mike Golus and other periodic table inspired initiatives, I used the information from developer.mozilla.org and created a Periodic table based on the latest HTML 5 elements.',
      'Using CSS styling and minimal Javascript, the elements are grouped in an easy to understand format.',
    ],
    url: '/projects/HTML5-Periodic/index.html',
  },
  {
    imgSrc: Storybook,
    avatarSrc: StorybookAvatar,
    title: 'Storybook Design system',
    description: [
      'To build this portfolio, I decided to host all the storybook components.',
      "This helped me build UI components in isolation from my app's business logic, data, and context. That makes it easy to develop hard-to-reach states and allows for much better scaling as the ecosystem grows.",
      '(Currently a work in progress)',
    ],
    url: '/projects/storybook-static/index.html?path=/story/components-organisms-header--default',
  },
  {
    imgSrc: AtomicDesign,
    avatarSrc: AtomicDesignAvatar,
    title: 'Atomic design methodology',
    description: [
      'The value of building scalable solutions is crucial to the technological success of a business.',
      'Based on a similar concept of Lego, I use Atomic design methodology in design thinking to create components that are interchangeable and agile.',
      'Because my skills bridge the gap between design and development, the efficiency this creates within a team leads to faster turnaround, deployment and minimal errors as the components are pre-tested.',
      '(Currently a work in progress)',
    ],
  },
  {
    imgSrc: UXEassessment,
    avatarSrc: UXEassessmentAvatar,
    title: 'UXE assessment',
    description: [
      'Assessments are a regular requirement for recruiters and hiring teams.',
      'Having researched and tested the best code, designs and user experience for this particular application, I created a responsive layout for web and mobile interfaces, even though the requirement was for web only.',
      'No additional time was taken to do so as all my work is fully adaptive using my decades of experience.',
    ],
    url: '/projects/UXE-assessment/index.html',
  },
];
