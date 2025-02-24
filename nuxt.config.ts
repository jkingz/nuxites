import { repositoryName } from './slicemachine.config.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  app: {
    head: {
      title: 'Prismic + Nuxt Minimal Starter',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }],
    },
  },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/prismic',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxthub/core',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-visitors',
  ],
  nitro: {
    experimental: {
      websocket: true,
    },
  },

  site: {
    url: 'https://king.nuxt.dev',
    name: 'King Portfolio',
    gzip: true,
    routes: ['/'],
  },

  robots: {
    allow: ['/'],
    sitemap: 'https://king.nuxt.dev',
  },

  prismic: {
    endpoint: repositoryName,
    preview: '/api/preview',
    clientConfig: {
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
        {
          type: 'page',
          uid: 'home',
          path: '/',
        },
        {
          type: 'content_detail',
          path: '/content-detail/:uid',
        },
      ],
    },
  },

  compatibilityDate: '2025-01-06',
});
