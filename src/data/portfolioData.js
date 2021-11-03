import img1 from '../media/projet-1.png';
import img2 from '../media/projet-2.png';
import img3 from '../media/projet-3.png';

export const portfolioData = [

  {
    id: 1,
    name: 'Kartina',
    languages: ['javascript','php', 'sql', 'sass'],
    languagesIcons: ['fab fa-js','fab fa-php','fab fa-sass'],
    source: 'http://www.github.com',
    info: 'Kartina est un site de photographies d\'art en édition limitée il est inspiré du site de YellowKorner.',
    picture: img1
  },
  {
    id: 2,
    name: 'Saint-Aybert',
    languages: ['wordpress','sass'],
    languagesIcons: ['fab fa-wordpress','fab fa-sass'],
    source: 'http://ntotest.fr',
    info: 'Saint-aybert est une petite commune frontalière de la belgique, le maire m\'ayant pris en stage durant ma formation pour réaliser ce site en WP.',
    picture: img2
  },
  {
    id: 3,
    name: 'Portfolio-react',
    languages: ['sass','react'],
    languagesIcons: ['fab fa-js','fab fa-react','fab fa-sass'],
    source: 'http://www.github.com',
    info: 'Projet portfolio fait en React',
    picture: img3
  },
  
]