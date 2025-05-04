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
    path: '/lucid/',
    component: ComponentCreator('/lucid/', '584'),
    exact: true
  },
  {
    path: '/lucid/',
    component: ComponentCreator('/lucid/', '574'),
    routes: [
      {
        path: '/lucid/',
        component: ComponentCreator('/lucid/', '182'),
        routes: [
          {
            path: '/lucid/',
            component: ComponentCreator('/lucid/', 'a6c'),
            routes: [
              {
                path: '/lucid/category/tutorial---basics',
                component: ComponentCreator('/lucid/category/tutorial---basics', 'b1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/category/tutorial---extras',
                component: ComponentCreator('/lucid/category/tutorial---extras', '05f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/intro',
                component: ComponentCreator('/lucid/intro', 'b0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/test',
                component: ComponentCreator('/lucid/test', 'cc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/tutorial-basics/congratulations',
                component: ComponentCreator('/lucid/tutorial-basics/congratulations', '718'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/lucid/tutorial-basics/create-a-blog-post', '1cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/tutorial-basics/create-a-document',
                component: ComponentCreator('/lucid/tutorial-basics/create-a-document', '3ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/tutorial-basics/create-a-page',
                component: ComponentCreator('/lucid/tutorial-basics/create-a-page', '5b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/lucid/tutorial-basics/deploy-your-site', '9b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/tutorial-basics/markdown-features',
                component: ComponentCreator('/lucid/tutorial-basics/markdown-features', 'ff1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/lucid/tutorial-extras/manage-docs-versions', '3dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lucid/tutorial-extras/translate-your-site',
                component: ComponentCreator('/lucid/tutorial-extras/translate-your-site', 'ef8'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
