// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  sourceLink?: string;
  featured?: boolean;
}

// Skill Types
export interface Skill {
  name: string;
  icon: string;
  category: 'language' | 'framework' | 'tool' | 'other';
}

// Education/Experience Types
export interface TimelineItem {
  id: string;
  title: string;
  location: string;
  description: string;
  date: string;
  icon: string;
  category: 'education' | 'experience';
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Theme Types
export type Theme = 'dark' | 'light';

// Section IDs for navigation
export enum SectionId {
  Home = 'home',
  About = 'about',
  Skills = 'skills',
  Projects = 'projects',
  Contact = 'contact',
}