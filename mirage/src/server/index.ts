import { createServer, Factory, Model } from 'miragejs'
import { createGraphQLHandler } from '@miragejs/graphql'

const graphQLSchema = `
  type Component {
    id: ID!
    name: String!
  }

  type Query {
    components: [Component]
  }

  input ComponentInput {
    name: String!
  }

  type Mutation {
    createComponent(input: ComponentInput!): Component
  }
`

export default (environment: string = 'development') =>
  createServer({
    environment,
    models: {
      component: Model.extend({
        name: '',
      }),
    },
    factories: {
      component: Factory.extend({ name: '' }),
    },

    routes() {
      this.post('/query', createGraphQLHandler(graphQLSchema, this.schema))
    },

    seeds(server) {
      server.create('component', { name: 'Header' })
      server.create('component', { name: 'Product' })
      server.create('component', { name: 'Footer' })
    },
  })
