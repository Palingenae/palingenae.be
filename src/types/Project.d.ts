export interface Project {
  id: string;
  title: string;
  slug: string;
  year: string;
  type: 'Site web' | 'API';
  status: 'Actif' | 'Terminé';
  scope: (
    | 'Design'
    | 'Design System'
    | 'Intégration'
    | 'Front-End'
    | 'Back-End'
    | 'API'
    | 'Hébergement'
  )[];
  stack: (
    | 'Figma'
    | 'Astro'
    | 'PayloadCMS'
    | 'Sass'
    | 'JavaScript'
    | 'TypeScript'
    | 'React'
    | 'PHP'
    | 'Symfony'
    | 'MySQL'
    | 'MongoDB'
    | 'Docker'
  )[];
  article: {
    [k: string]: unknown;
  }[];
  coverImage?: string | Media;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
