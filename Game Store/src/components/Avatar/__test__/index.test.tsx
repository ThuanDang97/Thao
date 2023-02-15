import { THUMBNAIL } from '../../../constants/mockData'

import Avatar from '..'
import { render, screen } from '@utils/testUtils'

const mockProps = {
  width: 201,
  height: 202,
  borderRadius: 5,
  alt: 'avatar',
  url: THUMBNAIL,
}

describe('Avatar render', () => {
  test('Ensure image avatar render correctly', () => {
    render(<Avatar {...mockProps} />)
    const imageAvatar = screen.getByRole('img')

    expect(imageAvatar.getAttribute('src')).toBe(THUMBNAIL)
    expect(imageAvatar.getAttribute('alt')).toBe('avatar')
  })
})
