import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import store from '../../../redux/ConfigureStore';

const MockedHome = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>
);

describe('Home Component', () => {
  it('renders succesfully', () => {
    render(<MockedHome />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toMatchInlineSnapshot(`
<div
  class="lds-dual-ring"
  data-testid="spinner"
/>
`);
  });

  it('waits for fetch data and then displays everything', async () => {
    render(<MockedHome />);
    const headingElement = await screen.findByText('Air Quality levels:');

    expect(headingElement).toMatchInlineSnapshot(`
<h1
  class="title"
>
  Air Quality levels:
</h1>
`);
  });
});
