import Home from '@pages/Home'
import { render } from '@utils/testUtils'

describe('Home Page render', () => {
  test('Ensure image Home Page render correctly', () => {
    render(<Home />)
  })
})
