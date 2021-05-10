export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '609911027d651b462e885443',
                  title: 'Sanity Studio',
                  name: 'wwztesting-studio',
                  apiId: 'a9dee582-91d6-4846-b9b5-756cf91776dc'
                },
                {
                  buildHookId: '609911026d24e840a67a8522',
                  title: 'Portfolio Website',
                  name: 'wwztesting',
                  apiId: 'ea54b665-eb0c-44fc-884a-e2ab98e4abeb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sri-softscripts/wwztesting',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://wwztesting.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
