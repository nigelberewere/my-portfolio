import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiReact,
  SiSpringboot,
  SiMysql,
  SiGit,
} from 'react-icons/si';
import { FaCoffee } from 'react-icons/fa';

// Add or remove skills here
// "level" is a value from 0-100 used for the progress bar

export const skills = [
  {
    name: 'Java',
    icon: <FaCoffee />,
    level: 90,
  },
  {
    name: 'Spring Boot',
    icon: <SiSpringboot />,
    level: 80,
  },
  {
    name: 'Flutter',
    icon: <SiFlutter />,
    level: 95,
  },
  {
    name: 'Dart',
    icon: <SiDart />,
    level: 95,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
    level: 85,
  },
  {
    name: 'React.js',
    icon: <SiReact />,
    level: 80,
  },
  {
    name: 'HTML5',
    icon: <SiHtml5 />,
    level: 95,
  },
  {
    name: 'CSS3',
    icon: <SiCss3 />,
    level: 90,
  },
  {
    name: 'Firebase',
    icon: <SiFirebase />,
    level: 85,
  },
  {
    name: 'SQL (MySQL)',
    icon: <SiMysql />,
    level: 95,
  },
  {
    name: 'Git & GitHub',
    icon: <SiGit />,
    level: 100,
  },
];