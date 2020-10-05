type Component = {
  name: string
}

const data = [{ name: 'Header' }, { name: 'Footer' }]

const components = new Set<Component>(data)

function add(component: Component) {
  components.add(component)
}

function all() {
  return [...components]
}

export { add, all }
