import { fireEvent, render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting', () => {
  it('should render "Hello World"', () => {
    render(<Greeting/>);

    expect(screen.getByText('Hello World', { exact: false })).toBeInTheDocument();
  });
});