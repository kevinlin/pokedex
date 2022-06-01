import { render, screen } from '@testing-library/react';
import PokeListEntry from './PokeListEntry';

describe('PokeListEntry', () => {
  it('should render "Bulbasaur" with no props', () => {
    render(<PokeListEntry/>);

    expect(screen.getByText('Bulbasaur', { exact: false })).toBeInTheDocument();
  });

  it('should render the name from props', () => {
    render(<PokeListEntry name="TestingName"/>);

    expect(screen.getByText('TestingName', { exact: false })).toBeInTheDocument();
  });

  test.each([
    [undefined, "Bulbasaur"],
    ["Pikachu", "Pikachu"],
    ["Alpha Acres", "Alpha Acres"],
  ])('PokeListEntry with name: %s should render %s', (name, expected) => {
    render(<PokeListEntry name={name}/>);
    expect(screen.getByText(expected, { exact: false })).toBeInTheDocument();
  });

});