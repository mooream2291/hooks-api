import React from 'react';
import '@testing-library/jest-dom';
import App from '../app';
import { render, screen, waitfor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('form', () => {
    test('can add na item to the list', async() => {
        render(<App />)
        userEvent.type(screen.getByTestId('todo item'), 'new item');
        userEvent.type(screen.getbyTestId('assignAsignee'), 'name and name');
        userEvent.click(screen.getByTestId)};
        let item = await waitfor(() => {
            screen.getAllByRoll('listitem')
        })
        expect(items[items.length-1]).toHaveTextContent('new item')
    });
})

//to use the same test ID, start by changing list js
//somewhere on list idem add data-test

//jest.mock("react-select", () => ({ options, value, onChange }) => {
    // function handleChange(event) {
    //     const option = options.find(
    //       option => option.value === event.currentTarget.value
    //     );
    //     onChange(option);
    //   }
    //   return (
    //     <select data-testid="select" value={value} onChange={handleChange}>
    //       {options.map(({ label, value }) => (
    //         <option key={value} value={value}>
    //           {label}
    //         </option>
    //       ))}
    //     </select>
    //   );