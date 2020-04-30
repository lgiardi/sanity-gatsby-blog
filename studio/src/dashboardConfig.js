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
                  buildHookId: '5eab467da0ab90b308584d89',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2mchkfk6',
                  apiId: 'bb6b7d58-71ea-4185-8bed-a9568a1688f3'
                },
                {
                  buildHookId: '5eab467d9311a78e5b03ed7a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-v9c862fr',
                  apiId: 'e23357d3-54bb-4a84-bceb-07226f59b5b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lgiardi/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-v9c862fr.netlify.app', category: 'apps' }
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
