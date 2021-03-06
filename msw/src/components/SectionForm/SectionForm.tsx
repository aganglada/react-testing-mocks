import { useMutation, gql } from '@apollo/client'
import * as React from 'react'
import { COMPONENTS } from '../SectionList/SectionList'

const CREATE_COMPONENT = gql`
  mutation CreateComponent($component: Component) {
    createComponent(component: $component) {
      name
    }
  }
`

export const SectionForm = () => {
  const [createComponent, { loading }] = useMutation(CREATE_COMPONENT)
  const [componentName, setComponentName] = React.useState('')

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        createComponent({
          refetchQueries: [{ query: COMPONENTS }],
          variables: { component: { name: componentName } },
        }).then(() => {
          setComponentName('')
        })
      }}
    >
      <input
        type="text"
        value={componentName}
        onChange={({ target }) => setComponentName(target.value)}
      />
      <button disabled={loading}>Add</button>
    </form>
  )
}
