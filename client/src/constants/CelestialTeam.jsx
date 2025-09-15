import { FaFacebook, FaGithub } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import delapeña from '@/assets/dela-peña.webp';
import florida from '@/assets/florida.webp';
import mariano from '@/assets/mariano.webp';
import masculino from '@/assets/masculino.webp';

export const CelestialTeam = [
  {
    image: florida,
    title: 'Rj Jack A. Florida',
    subtitle: 'Chief Executive Officer',
    social: [
      {
        icon: <FaGithub />,
        link: 'https://github.com/Rjjackflorida',
        label: 'Github',
      },
      {
        icon: <IoMail />,
        link: 'mailto:rjjackflorida7@gmail.com',
        label: 'Email',
      },
      {
        icon: <FaFacebook />,
        link: 'https://www.facebook.com/sh.izu.355138',
        label: 'Facebook',
      },
    ],
    borderColor: '#3B82F6',
    gradient: 'linear-gradient(145deg, #3B82F6, #000)',
  },
  {
    image: mariano,
    title: 'Cedrick Joseph H. Mariano',
    subtitle: 'Project Manager',
    social: [
      {
        icon: <FaGithub />,
        link: 'https://github.com/icodecedd',
        label: 'Github',
      },
      {
        icon: <IoMail />,
        link: 'mailto:marianocedrick3@gmail.com',
        label: 'Email',
      },
      {
        icon: <FaFacebook />,
        link: 'https://www.facebook.com/cedrickjosephmariano',
        label: 'Facebook',
      },
    ],
    borderColor: '#10B981',
    gradient: 'linear-gradient(180deg, #10B981, #000)',
  },
  {
    image: masculino,
    title: 'Paulo D. Masculino',
    subtitle: 'Creative Director',
    social: [
      {
        icon: <FaGithub />,
        link: 'https://github.com/paulomscln',
        label: 'Github',
      },
      {
        icon: <IoMail />,
        link: 'mailto:paulomasculino1022@gmail.com',
        label: 'Email',
      },
      {
        icon: <FaFacebook />,
        link: 'https://www.facebook.com/paulomscln',
        label: 'Facebook',
      },
    ],
    borderColor: '#F59E0B',
    gradient: 'linear-gradient(165deg, #F59E0B, #000)',
  },
  {
    image: delapeña,
    title: 'Harold Prince E. dela Peña',
    subtitle: 'IT Specialist',
    social: [
      {
        icon: <FaGithub />,
        link: 'https://github.com/Harowwld',
        label: 'Github',
      },
      {
        icon: <IoMail />,
        link: 'mailto:harolddelapena.11@gmail.com',
        label: 'Email',
      },
      {
        icon: <FaFacebook />,
        link: 'https://www.facebook.com/harold.delapena.927',
        label: 'Facebook',
      },
    ],
    borderColor: '#EF4444',
    gradient: 'linear-gradient(195deg, #EF4444, #000)',
  },
];
