import Button from './Button'
import { TEST_IDS } from './constants'
import { renderWithTheme } from '../../helpers/tests'
import { fireEvent } from '@testing-library/react-native'

const handlePressMock = jest.fn()
const labelMock = 'test'

describe('Button:', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render and not be disabled', async () => {
    const screen = renderWithTheme(<Button label={labelMock} handlePress={handlePressMock} />)
    const button = screen.getByTestId(TEST_IDS.BUTTON)
    const buttonLabel = screen.getByTestId(TEST_IDS.BUTTON_LABEL)

    fireEvent.press(button)
    fireEvent.press(buttonLabel)
    expect(handlePressMock).toBeCalledTimes(2)
    expect(screen.getByText(labelMock)).toBeTruthy()
    expect(screen.toJSON()).toMatchSnapshot()
  })

  it('should render and be disabled', async () => {
    const screen = renderWithTheme(<Button label={labelMock} handlePress={handlePressMock} disabled />)
    const button = screen.getByTestId(TEST_IDS.BUTTON)
    const buttonLabel = screen.getByTestId(TEST_IDS.BUTTON_LABEL)

    fireEvent.press(button)
    fireEvent.press(buttonLabel)
    expect(handlePressMock).not.toBeCalled()
    expect(screen.toJSON()).toMatchSnapshot()
  })

  it('should render and be a part of the list', () => {
    const screen = renderWithTheme(<Button label={labelMock} handlePress={handlePressMock} isPartOfList />)
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
