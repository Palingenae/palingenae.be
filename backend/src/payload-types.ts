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
  status: 'active' | 'done';
  scope: ('design' | 'design_system' | 'integration' | 'front_end' | 'back_mono' | 'back_api' | 'hosting')[];
  stack: (
    | 'figma'
    | 'astro'
    | 'payload_cms'
    | 'sass'
    | 'javascript'
    | 'typescript'
    | 'react'
    | 'php'
    | 'symfony'
    | 'mysql'
    | 'mongodb'
    | 'docker'
  )[];
  article?: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
