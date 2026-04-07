import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  details?: string[];
  ctaUrl?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  metric: string;
  image?: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  content: React.ReactNode;
  author?: string;
  readTime?: string;
}

export interface Tool {
  id: string;
  title: string;
  description: string;
  url: string;
  icon?: string;
}

export interface Playbook {
  id: string;
  title: string;
  description: string;
}
