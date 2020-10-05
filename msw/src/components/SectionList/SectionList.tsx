import { useQuery, gql } from '@apollo/client'
import * as React from 'react'

export const COMPONENTS = gql`
  query GetComponents {
    components {
      name
    }
  }
`

type Component = {
  name: string
}

export const SectionList = () => {
  const { loading, error, data } = useQuery(COMPONENTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <ul>
      {data.components.map((component: Component) => {
        return <li key={component.name}>{component.name}</li>
      })}
    </ul>
  )
}
