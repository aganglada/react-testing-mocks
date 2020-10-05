import React from 'react'
import { render, screen, userEvent, waitFor } from '@test/utils'
import App from './App'

it('App functions corretly', async () => {
  render(<App />)

  expect(await screen.findByRole('list')).toBeInTheDocument()

  userEvent.type(screen.getByRole('textbox'), 'product')
  userEvent.click(screen.getByRole('button'))

  expect(await screen.findByText(/product/i)).toBeInTheDocument()

  await waitFor(() => {
    expect(screen.getByRole('textbox')).toHaveAttribute('value', '')
  })
})
