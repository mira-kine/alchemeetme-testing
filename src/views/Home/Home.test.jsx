import { findByText, render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(<Home user={user} />)

  const { name, color, motto, likes } = user
  // name - heading
  const profileName = await screen.findByRole('heading', { name })
  expect(profileName).toBeInTheDocument()
  // motto - getByRole async/await
  const userMotto = screen.getByText(motto)
  expect(userMotto).toBeInTheDocument()
  // interests heading - getByRole heading
  const interests = screen.getByRole('heading', { name: /interests/i })
  expect(interests).toBeInTheDocument()
  // avatar - alt text
  const avatar = screen.getByAltText(/avatar/i)
  expect(avatar).toBeInTheDocument()
  // header image - alt text
  const headerImg = screen.getByAltText(/header/i)
  expect(headerImg).toBeInTheDocument()
  // list of user likes - list item
  const likesList = screen.getByRole('list')
  expect(likesList.children.length).toEqual(likes.length)
  // color of name
  const favColor = screen.getByText(color)
  expect(favColor).toBeInTheDocument()
})
