import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Provider } from 'react-redux'

import store from '../app/store'
import Counter from '../features/Counter'

describe('<Counter />', () => {
  it('renders the component', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )

    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('increments the value', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )

    user.click(screen.getByRole('button', { name: /increment value/i }))
  })

  it('decrements the value', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )

    user.click(screen.getByRole('button', { name: /decrement value/i }))
  })
})
