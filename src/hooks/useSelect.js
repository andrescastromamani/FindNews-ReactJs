import React, { useState } from 'react'

export const useSelect = (stateInitial, options) => {
    console.log(options);
    const [state, setState] = useState(stateInitial);
    const SelectNews = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setState(e.target.value)}
        >
            {options.map(option => {
                return (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                );
            })}
        </select>
    );
    return [state, SelectNews];
}
