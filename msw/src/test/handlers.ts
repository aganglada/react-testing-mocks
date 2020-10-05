import { graphql } from 'msw'

import * as db from './data'

const handlers = [
  graphql.query('GetComponents', (req, res, ctx) => {
    return res(
      ctx.data({
        components: db.components.all(),
      })
    )
  }),
  graphql.mutation('CreateComponent', (req, res, ctx) => {
    const { component } = req.variables
    db.components.add(component)

    return res(ctx.data({ component }))
  }),
]

export default handlers
