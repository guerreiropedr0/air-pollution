import {
  render, screen, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Continents from '../Continents';
import store from '../../../redux/ConfigureStore';

const MockedContinents = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Continents />
    </BrowserRouter>
  </Provider>
);

describe('Continents', () => {
  it('renders succesfully', async () => {
    render(<MockedContinents />);
    const africa = await screen.findByText('Africa');
    const asia = await screen.findByText('Asia');
    const southamerica = await screen.findByText('South America');
    const northamerica = await screen.findByText('North America');
    const europe = await screen.findByText('Europe');
    const oceania = await screen.findByText('Oceania');
    expect(africa).toMatchSnapshot();
    expect(asia).toMatchSnapshot();
    expect(southamerica).toMatchSnapshot();
    expect(northamerica).toMatchSnapshot();
    expect(europe).toMatchSnapshot();
    expect(oceania).toMatchSnapshot();
  });

  it('populates countries', async () => {
    render(<MockedContinents />);
    await waitFor(() => screen.getByText('58 countries'), {
      timeout: 4000,
    });
    const africaCountries = await screen.findByText('58 countries');
    expect(africaCountries.innerHTML).toBe('58 countries');
    expect(africaCountries).toMatchSnapshot();
  });
});
