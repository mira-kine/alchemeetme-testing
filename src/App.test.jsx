import { render, screen } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)
  // render header img get by alt text
  const logo = screen.getByAltText(/Alchemy Logo/i)
  expect(logo).toBeInTheDocument()
  // profile static Meet - getByText
  const header = screen.getByText(/Meet/i)
  expect(header).toBeInTheDocument()
  // profile name findbyText
  const name = await screen.findByText(/Vonta/i)
  expect(name).toBeInTheDocument()
})
