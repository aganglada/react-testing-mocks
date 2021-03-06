import * as React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import server from '../server'

server('test')

const client = new ApolloClient({
  uri: '/query',
  cache: new InMemoryCache(),
})

const TestApp: React.FC = (props) => {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}

function customRender(
  ui: React.ReactElement<any>,
  options?: Pick<RenderOptions, Exclude<keyof RenderOptions, 'queries'>>
) {
  return render(ui, { wrapper: TestApp, ...options })
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'

export { customRender as render }
