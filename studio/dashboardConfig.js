export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e29b23d3e46c84a5c72c537',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jy259v7f',
                  apiId: '2c3f64b9-f5d1-4503-867a-bef0732f57c3'
                },
                {
                  buildHookId: '5e29b23d5b6b7a1e9188fcfb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-v1pifr9h',
                  apiId: 'd8e86a9c-17fb-454f-bd32-2ea1a5013a95'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickonometry/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-v1pifr9h.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
