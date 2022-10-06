import '@testing-library/jest-dom'
import '@testing-library/react'

import ButtonComponent from '../components/button'
import { render } from '@testing-library/react'

test('testButton', () => {
  const { getByText } = render(<ButtonComponent />)

  expect(getByText('tes')).toBeTruthy()
})