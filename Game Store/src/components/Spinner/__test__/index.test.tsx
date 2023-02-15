import { render, screen } from '@utils/testUtils'
import { Spinner } from '..'

describe('Testing component Spinner', () => {
  it('should render a spinner with the correct styles', () => {
    render(<Spinner />)

    const spinner = screen.getByTestId('spinner')

    expect(spinner).toBeInTheDocument()
  })
})
