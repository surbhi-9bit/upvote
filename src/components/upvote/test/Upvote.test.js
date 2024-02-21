import { render, screen, fireEvent } from '@testing-library/react';
import Upvote from '../Upvote';

//jest.mock('../Upvote.js', () => props => <div {...props} data-testid={'upvote-button'} toggleSelected={props.toggleSelected}>Upvote button</div>)
const onClick = jest.fn()

describe('Upvote component', () => {
  render(<Upvote toggleSelected={onClick} />)
  it('should be rendered', () => {
    const upvoteComponent = screen.getByTestId('upvote-button')
    expect(upvoteComponent).toBeDefined()
  })

  it('should fire click event and set Selected to true', () => {
    const { container } = render(<Upvote toggleSelected={onClick} />)
    const button = screen.getByTestId('upvote-button')
    console.log('**** button ', button)
    fireEvent.click(button)
    expect(container.getElementsByClassName('upvoteSelected').length).toBe(1);
    
    //expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.click(button)
    expect(container.getElementsByClassName('upvoteUnSelected').length).toBe(1);
  })
})