import React, { useRef, useEffect, useState } from 'react'

const Dropdown = ({ options, label, selected, onSelectedChange }) => {

    const [open, setOpen] = useState(false);

    const ref = useRef();

    const RenderedOptions = options.map((option) => {
        if (selected.value === option.value) {
            return null;
        }

        return (
            <div
            onClick={() => onSelectedChange(option)} 
            key={option.value} 
            className='item'>
                {option.label}
            </div>
        )
    })

    useEffect(() => {
        document.addEventListener("click", (event) => {
            if (ref.current && ref.current.contains(event.target)){
                return;
            }

            setOpen(false)
        })

    }, [])

    return (<div ref={ref} className='ui form'>
        <div className='field'>
            <label className='label'>{label}</label>
            <div 
            onClick={() => setOpen(!open)} 
            className={`ui selection dropdown ${ open ? "visible active" : '' }`}
            >
                <i className='dropdown icon'></i>
                <div className='text'>{selected.label}</div>
                <div className={`menu ${ open ? 'visible transition' : ''}`}>{RenderedOptions}</div>
            </div>
        </div>
    </div>);
}

export default Dropdown