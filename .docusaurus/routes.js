import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/lucid/markdown-page',
    component: ComponentCreator('/lucid/markdown-page', '92b'),
    exact: true
  },
  {
    path: '/lucid/search',
    component: ComponentCreator('/lucid/search', 'e84'),
    exact: true
  },
  {
    path: '/lucid/docs',
    component: ComponentCreator('/lucid/docs', 'bd4'),
    routes: [
      {
        path: '/lucid/docs',
        component: ComponentCreator('/lucid/docs', 'f07'),
        routes: [
          {
            path: '/lucid/docs',
            component: ComponentCreator('/lucid/docs', '622'),
            routes: [
              {
                path: '/lucid/docs/category/tutorial---basics',
                component: ComponentCreator('/lucid/docs/category/tutorial---basics', 'c57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/docs/category/tutorial---extras',
                component: ComponentCreator('/lucid/docs/category/tutorial---extras', '3d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/docs/intro',
                component: ComponentCreator('/lucid/docs/intro', '0f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/lucid/docs/tutorial-basics/congratulations', 'fcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/lucid/docs/tutorial-basics/create-a-blog-post', 'f7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/lucid/docs/tutorial-basics/create-a-document', 'a56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/lucid/docs/tutorial-basics/create-a-page', 'bd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/lucid/docs/tutorial-basics/deploy-your-site', 'b16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/lucid/docs/tutorial-basics/markdown-features', 'c31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/lucid/docs/tutorial-extras/manage-docs-versions', 'f79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/lucid/docs/tutorial-extras/translate-your-site', '7cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/lucid/',
    component: ComponentCreator('/lucid/', '584'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
