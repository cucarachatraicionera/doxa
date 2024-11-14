// lib/prismic.ts
import * as prismic from '@prismicio/client';
import { PrismicDocument } from '@prismicio/types';

export const repositoryName = 'tu-repo-prismic';

export const client = prismic.createClient(repositoryName, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});

// Modifica el tipo BlogPost
export type BlogPost = PrismicDocument<
  {
    title: prismic.RichTextField;
    content: prismic.RichTextField;
  },
  string,  // Modificamos aquí el segundo y tercer argumento para aceptar cadenas
  string   // Aceptamos strings genéricos para fechas u otras identificaciones
>;
