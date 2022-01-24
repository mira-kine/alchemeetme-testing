import { render, screen } from '@testing-library/react'
import App from './App'

test.only('Should render the header', async () => {
  render(<App />)
  // render header img get by alt text
  const logo = await screen.findByAltText(/Alchemy Logo/i)
  expect(logo).toBeInTheDocument()
  // profile name - get by text
  const header = screen.getByText(/Meet/i)
  expect(header).toBeInTheDocument()

  const name = await screen.findByText(/Vonta/i)
  expect(name).toBeInTheDocument()
})
