import Button from './Button'
import { renderWithTheme } from '../../helpers/tests'
import { fireEvent } from '@testing-library/react-native'
import { ReactTestInstance } from 'react-test-renderer'

const buttonTestId = 'button'
const handlePressMock = jest.fn()
const labelMock = 'test'

describe('Button:', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render and not be disabled', async () => {
    const screen = renderWithTheme(<Button label={labelMock} handlePress={handlePressMock} testId={buttonTestId} />)
    const button = screen.getByTestId(buttonTestId)
    const buttonLabel = button.children[0] as ReactTestInstance

    fireEvent.press(button)
    fireEvent.press(buttonLabel)
    expect(handlePressMock).toBeCalledTimes(2)
    expect(screen.getByText(labelMock)).toBeTruthy()
    expect(screen.toJSON()).toMatchSnapshot()
  })

  it('should render and be disabled', async () => {
    const screen = renderWithTheme(
      <Button label={labelMock} handlePress={handlePressMock} disabled testId={buttonTestId} />,
    )
    const button = screen.getByTestId(buttonTestId)
    const buttonLabel = button.children[0] as ReactTestInstance

    fireEvent.press(button)
    fireEvent.press(buttonLabel)
    expect(handlePressMock).not.toBeCalled()
    expect(screen.toJSON()).toMatchSnapshot()
  })

  it('should render and be a part of the list', () => {
    const screen = renderWithTheme(
      <Button label={labelMock} handlePress={handlePressMock} isPartOfList testId={buttonTestId} />,
    )
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
