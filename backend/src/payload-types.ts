/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    projects: Project;
  };
  globals: {};
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Project {
  id: string;
  title: string;
  slug: string;
  year: string;
  type: 'Site web' | 'API';
  status: 'Actif' | 'Terminé';
  scope: ('Design' | 'Design System' | 'Intégration' | 'Front-End' | 'Back-End' | 'API' | 'Hébergement')[];
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
  updatedAt: string;
  createdAt: string;
}
