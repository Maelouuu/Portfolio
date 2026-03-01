/* ============================
   SHARED DATA — projects + experiences
   ============================ */

// ---- Image imports ----
import starwarspanoImg from '../../assets/starwarspano.jpg';
import cinemaImg from '../../assets/cinema.png';
import lacImg from '../../assets/lac.png';
import gojoImg from '../../assets/gojo.png';
import tojiImg from '../../assets/toji.png';
import yujiImg from '../../assets/yuji.png';
import pulpImg from '../../assets/pulp.png';
import porcoImg from '../../assets/porco.png';
import mononokeImg from '../../assets/mononoké.png';
import onizukaImg from '../../assets/onizuka.png';
import grenouilleImg from '../../assets/grenouille.jpg';
import borne1Img from '../../assets/pixels/borne1.png';
import borne2Img from '../../assets/pixels/borne2.png';
import borne3Img from '../../assets/pixels/borne3.png';
import borne4Img from '../../assets/pixels/borne4.png';
import borne5Img from '../../assets/pixels/borne5.png';
import borne6Img from '../../assets/pixels/borne6.png';
import chateauImg from '../../assets/pixels/chateauCopie.png';

// ---- Types ----
export interface Project {
  title: string;
  description: string;
  longDesc: string;
  techs: string[];
  duration: string;
  year: string;
  status: string;
  featured: boolean;
  images: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  status: 'completed' | 'active';
  description: string;
  techs: string[];
  progress: number;
  steps: { label: string; done: boolean }[];
}

// ---- Projects ----
// Images: 3 per project, no duplicate at same carousel position
export const projects: Project[] = [
  {
    title: 'Portfolio Interactif',
    description: 'Portfolio a double identite visuelle avec systeme de themes dynamique, frame CRT et animations CSS avancees. Le projet que vous regardez en ce moment.',
    longDesc: 'Un portfolio construit de A a Z en React + TypeScript, explorant deux identites visuelles distinctes — un theme Piltover/Zaun inspire de l\'univers Arcane, et ce theme editorial dark avec accents vert sapin. Chaque detail visuel est code a la main : frame CRT fixe avec contenu qui scrolle dedans, orbe verte animee en parallaxe inversee, film strip, marquee CSS, animations au scroll...',
    techs: ['React', 'TypeScript', 'CSS Modules', 'Vite'],
    duration: '2 mois',
    year: '2025',
    status: 'En cours',
    featured: true,
    images: [starwarspanoImg, cinemaImg, lacImg],
  },
  {
    title: 'E-Commerce Platform',
    description: 'Plateforme de vente en ligne complete avec panier, paiement Stripe, gestion des stocks et dashboard admin.',
    longDesc: 'Application full-stack e-commerce comprenant une interface client moderne avec panier persistant, integration de Stripe pour les paiements securises, un systeme de gestion des stocks en temps reel et un dashboard administrateur avec statistiques de vente et gestion des commandes. Deploye sur un VPS avec Docker.',
    techs: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    duration: '3 mois',
    year: '2024',
    status: 'Termine',
    featured: false,
    images: [borne1Img, borne2Img, borne3Img],
  },
  {
    title: 'Chat Temps Reel',
    description: 'Application de messagerie en temps reel avec WebSockets, salons, messages prives et partage de fichiers.',
    longDesc: 'Messagerie instantanee full-stack avec Socket.io : salons publics, messages prives chiffres, indicateur de frappe, historique persistant en PostgreSQL et partage de fichiers images/documents jusqu\'a 10 Mo. Interface responsive avec notifications push.',
    techs: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    duration: '2 mois',
    year: '2024',
    status: 'Termine',
    featured: false,
    images: [borne4Img, borne5Img, borne6Img],
  },
  {
    title: 'API REST Blog',
    description: 'API RESTful complete pour un blog avec CRUD, authentification JWT, pagination et documentation Swagger.',
    longDesc: 'Backend complet pour une plateforme de blog : endpoints CRUD pour articles, categories et commentaires, authentification et autorisation via JWT avec refresh tokens, pagination cursor-based pour les performances, tests unitaires avec Jest et documentation interactive Swagger/OpenAPI.',
    techs: ['Node.js', 'Express', 'PostgreSQL', 'Swagger'],
    duration: '6 semaines',
    year: '2023',
    status: 'Termine',
    featured: false,
    images: [gojoImg, onizukaImg, tojiImg],
  },
  {
    title: 'Weather Dashboard',
    description: 'Dashboard meteo interactif avec visualisations, previsions 7 jours et geolocalisation automatique.',
    longDesc: 'Application meteo avec geolocalisation automatique et recherche par ville. Affiche les conditions actuelles, previsions horaires sur 24h et journalieres sur 7 jours via l\'API OpenWeather. Visualisations avec Chart.js : courbes de temperature, graphes de precipitation, rose des vents. Mode sombre/clair avec animations de transitions.',
    techs: ['React', 'Chart.js', 'OpenWeather API'],
    duration: '3 semaines',
    year: '2023',
    status: 'Termine',
    featured: false,
    images: [chateauImg, grenouilleImg, yujiImg],
  },
  {
    title: 'Task Manager Pro',
    description: 'Gestionnaire de taches avec drag & drop, categories, priorites, deadlines et stats de productivite.',
    longDesc: 'Gestionnaire de taches avance avec drag & drop fluide via DnD Kit, systeme de categories colorees, niveaux de priorite, deadlines avec alertes, sous-taches et commentaires. Tableau de bord de productivite avec graphes Recharts : taux de completion, temps moyen par tache, streaks.',
    techs: ['React', 'TypeScript', 'DnD Kit', 'Recharts'],
    duration: '5 semaines',
    year: '2024',
    status: 'Termine',
    featured: false,
    images: [mononokeImg, pulpImg, porcoImg],
  },
];

// ---- Experiences ----
export const experiences: Experience[] = [
  {
    title: 'Stage Developpeur Web',
    company: 'WebStudio Pro — Marseille',
    period: 'Avril — Juin 2024',
    status: 'completed',
    description: "Developpement d'une interface client pour la gestion de projets internes. Integration API REST et systeme de notifications.",
    techs: ['React', 'TypeScript', 'Figma', 'REST API'],
    progress: 100,
    steps: [
      { label: 'Onboarding & decouverte', done: true },
      { label: 'Maquettage & prototypage', done: true },
      { label: 'Developpement frontend', done: true },
      { label: 'Integration API & tests', done: true },
      { label: 'Livraison & soutenance', done: true },
    ],
  },
  {
    title: 'Alternance Full-Stack',
    company: 'TechNova Solutions — Arles',
    period: 'Sept 2024 — Aout 2025',
    status: 'active',
    description: "Conception et developpement d'une plateforme SaaS de gestion documentaire. Travail en equipe agile avec sprints et code reviews.",
    techs: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Git'],
    progress: 60,
    steps: [
      { label: 'Integration equipe & setup', done: true },
      { label: "Module d'authentification", done: true },
      { label: 'Dashboard & visualisation', done: true },
      { label: 'Systeme de notifications', done: false },
      { label: 'Optimisation & deploiement', done: false },
    ],
  },
];

// ---- Tech details (for About modal) ----
export interface TechDetail {
  mastery: number;
  projectCount: number;
  deviconClass: string; // empty string → fallback text badge
}

export const techDetails: Record<string, TechDetail> = {
  'Java':        { mastery: 75, projectCount: 4,  deviconClass: 'devicon-java-plain colored' },
  'Python':      { mastery: 65, projectCount: 3,  deviconClass: 'devicon-python-plain colored' },
  'JavaScript':  { mastery: 88, projectCount: 8,  deviconClass: 'devicon-javascript-plain colored' },
  'TypeScript':  { mastery: 82, projectCount: 5,  deviconClass: 'devicon-typescript-plain colored' },
  'HTML / CSS':  { mastery: 92, projectCount: 10, deviconClass: 'devicon-html5-plain colored' },
  'SQL':         { mastery: 72, projectCount: 5,  deviconClass: 'devicon-mysql-plain colored' },
  'Git':         { mastery: 85, projectCount: 12, deviconClass: 'devicon-git-plain colored' },
  'React':       { mastery: 90, projectCount: 6,  deviconClass: 'devicon-react-original colored' },
  'Node.js':     { mastery: 78, projectCount: 4,  deviconClass: 'devicon-nodejs-plain colored' },
  'Unity':       { mastery: 68, projectCount: 2,  deviconClass: 'devicon-unity-original' },
  'WebGL':       { mastery: 58, projectCount: 1,  deviconClass: '' },
  'Figma':       { mastery: 70, projectCount: 5,  deviconClass: 'devicon-figma-plain colored' },
  'Vite':        { mastery: 80, projectCount: 4,  deviconClass: 'devicon-vitejs-plain colored' },
  'OpenGL':      { mastery: 55, projectCount: 1,  deviconClass: '' },
};
