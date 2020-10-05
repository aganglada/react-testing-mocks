import React from 'react'
import { render, screen, userEvent } from '@test/utils'
import App from './App'

it('App functions corretly', async () => {
  render(<App />)

  expect(await screen.findByRole('list')).toBeInTheDocument()

  userEvent.type(screen.getByRole('textbox'), 'Header')
  userEvent.click(screen.getByRole('button'))

  expect(await screen.findByText(/header/i)).toBeInTheDocument()
  expect(screen.getByRole('textbox')).toHaveAttribute('value', '')
})
