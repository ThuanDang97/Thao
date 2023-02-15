import { AppProvider } from '@contexts/AppContext'
import Books, { BooksProps } from '@pages/Home/components/Books'
import { render } from '@utils/testUtils'

const mockProps: BooksProps = {
  isGridView: true,
  onSetSelectedBookId: jest.fn(),
}

describe('Avatar render', () => {
  test('Ensure image avatar render correctly', () => {
    render(
      <AppProvider>
        <Books {...mockProps} />
      </AppProvider>,
    )
  })
})
