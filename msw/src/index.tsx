import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./devServer')
  worker.start()
}

const client = new ApolloClient({
  uri: 'http://localhost:3000/query',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
