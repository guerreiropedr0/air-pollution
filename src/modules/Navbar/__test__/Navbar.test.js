import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

const MockedNavbar = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

describe('Navbar component', () => {
  it('renders succesfully', () => {
    render(<MockedNavbar />);
    const listedItem = screen.getByText('2022 stats');
    expect(listedItem).toMatchSnapshot();
  });

  it('theme icon changes theme', () => {
    render(<MockedNavbar />);
    const listedItem = screen.getByTestId('icon');
    fireEvent.click(listedItem);
    const button = screen.getByRole('button', 'Change Theme To Blue');
    fireEvent.click(button);
    expect(button.innerHTML).toBe('Change Theme To Pink');
  });
});
