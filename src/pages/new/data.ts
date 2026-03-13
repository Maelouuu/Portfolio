/* ============================
   SHARED DATA — projects + experiences
   ============================ */

// ---- Image imports ----
import encyflone1Img from '../../assets/encyflone1.png';
import encyflone2Img from '../../assets/encyflone2.png';
import encyflone3Img from '../../assets/encyflone3.png';
import encyflone4Img from '../../assets/encyflone4.png';
import encyflone5Img from '../../assets/encyflone5.png';
import encyflone6Img from '../../assets/encyflone6.png';
import ms06_1Img from '../../assets/ms061.png';
import ms06_2Img from '../../assets/ms062.png';
import ms06_3Img from '../../assets/ms063.png';
import afdec1Img from '../../assets/afdec1.png';
import afdec2Img from '../../assets/afdec2.png';
import afdec3Img from '../../assets/afdec3.png';
import liseuse1Img from '../../assets/liseuse1.png';
import liseuse2Img from '../../assets/liseuse2.png';
import liseuse3Img from '../../assets/liseuse3.png';
import afdecApp1Img from '../../assets/afdecApp1.png';
import afdecApp2Img from '../../assets/afdecApp2.png';
import afdecApp3Img from '../../assets/afdecApp3.png';
import afdecApp4Img from '../../assets/afdecApp4.png';

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
  link?: string;
  vertical?: boolean; // portrait images (mobile app)
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  status: 'completed' | 'active';
  description: string;
  techs?: string[];
  progress?: number;
  steps?: { label: string; done: boolean }[];
}

// ---- Projects ----
export const projects: Project[] = [
  {
    title: 'Encyflone',
    description: 'Application interactive dédiée à l\'exploration de la biodiversité mondiale — visualisation d\'espèces sur globe 3D, données scientifiques en temps réel et expérience mobile immersive.',
    longDesc: 'Application de visualisation de la biodiversité mondiale développée pour l\'AFDEC. Les espèces animales et végétales sont géolocalisées et affichées sur un globe 3D interactif (Globe.gl / Three.js). L\'application interroge l\'API GBIF pour récupérer des données scientifiques en temps réel, avec des filtres par taxonomie, région et période. Développée en React Native pour une expérience mobile native, avec un backend FastAPI/Python pour le traitement et la mise en cache des données.',
    techs: ['React Native', 'Three.js', 'FastAPI', 'Python', 'PostgreSQL'],
    duration: '2 mois',
    year: '2025-2026',
    status: 'En cours',
    featured: true,
    images: [encyflone1Img, encyflone2Img, encyflone3Img, encyflone4Img, encyflone5Img, encyflone6Img],
    vertical: true,
  },
  {
    title: 'MS06',
    description: 'Application web permettant de modéliser les activités, rôles et compétences d\'une organisation. Visualisation des relations et évaluation des performances collaborateurs.',
    longDesc: 'MS06 est une application web de gestion des compétences développée dans le cadre du BUT Informatique. Elle permet de cartographier les activités et les rôles d\'une organisation, d\'évaluer les compétences des collaborateurs par axe et d\'analyser les performances associées. L\'outil vise à rendre visible le capital humain pour aider les organisations à piloter leur transformation. Projet de groupe en méthodologie agile, avec architecture MVC Python/Flask et base de données PostgreSQL.',
    techs: ['Python', 'Flask', 'PostgreSQL', 'JavaScript', 'HTML / CSS'],
    duration: '3 mois',
    year: '2025',
    status: 'Terminé',
    featured: false,
    images: [ms06_1Img, ms06_2Img, ms06_3Img],
  },
  {
    title: 'Application AFDEC',
    description: 'Outil interne de modélisation organisationnelle pour l\'AFDEC. Cartographie des activités, évaluation des compétences et génération de synthèses décisionnelles, déployé sur Google Cloud.',
    longDesc: 'Application web complète développée durant mon stage pour implémenter les méthodes de modélisation organisationnelle de l\'AFDEC. L\'outil permet de cartographier les activités, rôles et compétences d\'une organisation, d\'évaluer les performances et de générer des synthèses décisionnelles exportables. Il facilite l\'expérimentation des modèles de transformation organisationnelle développés par l\'association. Backend Python/Flask, base PostgreSQL, déploiement conteneurisé sur Google Cloud Run.',
    techs: ['Python', 'Flask', 'PostgreSQL', 'JavaScript', 'Google Cloud Run'],
    duration: '4 mois',
    year: '2025-2026',
    status: 'En cours',
    featured: false,
    images: [afdecApp1Img, afdecApp2Img, afdecApp3Img, afdecApp4Img],
  },
  {
    title: 'Site vitrine AFDEC',
    description: 'Site vitrine de l\'AFDEC présentant les travaux et domaines de recherche de l\'association autour du développement des compétences et de la transformation organisationnelle.',
    longDesc: 'Conception et développement du site vitrine de l\'AFDEC (Association Française de Développement des Compétences). Présentation claire des missions, des méthodes de modélisation et des projets menés autour de la transformation des organisations. Interface sobre et accessible, optimisée pour tous les appareils, avec mise en valeur des initiatives de recherche appliquée de l\'association.',
    techs: ['HTML / CSS', 'JavaScript', 'Responsive Design'],
    duration: '6 semaines',
    year: '2025',
    status: 'Terminé',
    featured: false,
    images: [afdec1Img, afdec2Img, afdec3Img],
    link: 'https://www.afdec.fr/',
  },
  {
    title: 'Liseuse BD / Manga',
    description: 'Application desktop Java permettant de lire des mangas et bandes dessinées. Navigation par chapitres, bibliothèque locale, chargement dynamique d\'images et interface graphique JavaFX.',
    longDesc: 'Application de lecture de mangas et bandes dessinées développée en Java dans le cadre du BUT Informatique. L\'utilisateur peut importer des répertoires d\'images organisés en chapitres, naviguer page par page, changer de chapitre et gérer sa bibliothèque locale. Le projet a permis de mettre en pratique la programmation orientée objet, le pattern MVC, la création d\'interfaces graphiques avec JavaFX et la gestion du système de fichiers en Java. Architecture propre avec séparation modèle / vue / contrôleur.',
    techs: ['Java', 'JavaFX', 'MVC', 'POO'],
    duration: '3 mois',
    year: '2023',
    status: 'Terminé',
    featured: false,
    images: [liseuse1Img, liseuse2Img, liseuse3Img],
  },
];

// ---- Experiences ----
export const experiences: Experience[] = [
  {
    title: 'Alternance Full-Stack',
    company: 'A.F.D.E.C — Paris',
    period: 'Octobre 2025 — Juin 2026',
    status: 'active',
    description: "Reprise du développement de l'application de modélisation organisationnelle. Déployement de 8 nouvelles extensions de l'app, allant de la gestion du temps au sein d'une entreprise, d'une activité, voir d'une tâche, à la notation des compétences des employés dans leurs différents rôles. De plus, mise en place d'un site vitrine concernant l'entreprise.",
    techs: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Git'],
    progress: 60,
    steps: [
      { label: "Modélisation OPTIQ d'une structure", done: true },
      { label: "Insertion carto + extraction des données", done: true },
      { label: 'Dashboard & visualisation', done: true },
      { label: "Identité visuelle de l'app et du site vitrine", done: false },
      { label: 'Optimisation & déploiement large', done: false },
    ],
  },
  {
    title: 'SARL de vente de solutions',
    company: 'Entrepreneuriat',
    period: 'Juin 2025 — actuel',
    status: 'active',
    description: "On développe des solutions pour des petites entreprises. Ils viennent nous voir avec une problématique, une mauvaise vision de leurs stock, ou une gestion des plannings houleuse. On propose une solution en échange avec les clients pour leurs proposer quelque chose de visuellement agréable, de techniquement pro et tout cela à prix réduit en comparaison à des entreprises plus massives.",
  },
  {
    title: 'Stage Développeur Web',
    company: 'A.F.D.E.C — Paris',
    period: 'Avril — Juin 2025',
    status: 'completed',
    description: "Initialisation du développement de l'application interne de modélisation organisationnelle de l'AFDEC. 2 extensions mise en place.",
    techs: ['Python', 'Flask', 'React Native', 'FastAPI', 'PostgreSQL'],
    progress: 100,
    steps: [
      { label: 'Restructuration architecture', done: true },
      { label: 'Maquettage & prototypage', done: true },
      { label: 'Développement frontend', done: true },
      { label: "Intégration API et modèle d'IA", done: true },
      { label: 'Mise en place de tests (intégration, fonctionnel, unitaire)', done: true },
    ],
  },
];

// ---- Tech details (for About modal / sphere) ----
export interface TechDetail {
  mastery: number;
  projectCount: number;
  deviconClass: string; // empty string → fallback text badge
}

export const techDetails: Record<string, TechDetail> = {
  // ---- Langages ----
  'Java':         { mastery: 75, projectCount: 4,  deviconClass: 'devicon-java-plain colored' },
  'Python':       { mastery: 72, projectCount: 5,  deviconClass: 'devicon-python-plain colored' },
  'JavaScript':   { mastery: 88, projectCount: 8,  deviconClass: 'devicon-javascript-plain colored' },
  'TypeScript':   { mastery: 82, projectCount: 5,  deviconClass: 'devicon-typescript-plain colored' },
  'HTML / CSS':   { mastery: 92, projectCount: 10, deviconClass: 'devicon-html5-plain colored' },
  'SQL':          { mastery: 72, projectCount: 5,  deviconClass: 'devicon-azuresqldatabase-plain colored' },
  'C#':           { mastery: 65, projectCount: 3,  deviconClass: 'devicon-csharp-plain colored' },
  'C++':          { mastery: 55, projectCount: 2,  deviconClass: 'devicon-cplusplus-plain colored' },
  'bash':         { mastery: 60, projectCount: 4,  deviconClass: 'devicon-bash-plain colored' },
  // ---- Frameworks & Librairies ----
  'React':        { mastery: 90, projectCount: 6,  deviconClass: 'devicon-react-original colored' },
  'React Native': { mastery: 60, projectCount: 1,  deviconClass: 'devicon-react-original colored' },
  'Node.js':      { mastery: 78, projectCount: 4,  deviconClass: 'devicon-nodejs-plain-wordmark colored' },
  'Flask':        { mastery: 68, projectCount: 3,  deviconClass: 'devicon-flask-original' },
  'FastAPI':      { mastery: 62, projectCount: 2,  deviconClass: 'devicon-fastapi-plain colored' },
  'Three.js':     { mastery: 55, projectCount: 1,  deviconClass: 'devicon-threejs-original' },
  'JavaFX':       { mastery: 60, projectCount: 1,  deviconClass: '' },
  // ---- Bases de données ----
  'PostgreSQL':   { mastery: 70, projectCount: 3,  deviconClass: 'devicon-postgresql-plain colored' },
  'MongoDB':      { mastery: 58, projectCount: 1,  deviconClass: 'devicon-mongodb-plain colored' },
  // ---- Outils & DevOps ----
  'Git':          { mastery: 85, projectCount: 12, deviconClass: 'devicon-git-plain colored' },
  'Docker':       { mastery: 62, projectCount: 3,  deviconClass: 'devicon-docker-plain colored' },
  'Vite':         { mastery: 80, projectCount: 4,  deviconClass: 'devicon-vitejs-plain colored' },
  'Linux':        { mastery: 70, projectCount: 5,  deviconClass: 'devicon-linux-plain colored' },
  'CI/CD':        { mastery: 55, projectCount: 2,  deviconClass: 'devicon-githubactions-plain colored' },
  'REST APIs':    { mastery: 78, projectCount: 5,  deviconClass: '' },
  'Figma':        { mastery: 70, projectCount: 5,  deviconClass: 'devicon-figma-plain colored' },
  'Agile':        { mastery: 72, projectCount: 4,  deviconClass: '' },
  // ---- Graphique & 3D ----
  'Unity':        { mastery: 68, projectCount: 2,  deviconClass: 'devicon-unity-original' },
  'WebGL':        { mastery: 58, projectCount: 1,  deviconClass: '' },
  'OpenGL':       { mastery: 55, projectCount: 1,  deviconClass: '' },
  'AR/VR':        { mastery: 52, projectCount: 1,  deviconClass: '' },
};
