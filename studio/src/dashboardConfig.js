export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e6b5e89d3ad70659ad06dac',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-dcygvut3',
                  apiId: '9612618b-739f-471f-8615-552b83e65def'
                },
                {
                  buildHookId: '5e6b5e8adfdb9baba334f0c6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-95jc2cys',
                  apiId: '208b1a3c-3409-455e-8a6e-2bf206542d7d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicholasklem/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-95jc2cys.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
