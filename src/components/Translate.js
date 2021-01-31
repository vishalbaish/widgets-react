import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
    {
        label: 'African',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]

const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [input, setInput] = useState('');

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter text</label>
                    <input value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
            </div>
            <Dropdown label="Select a Language" options={options} selected={language} onSelectedChange={setLanguage}/>
            <hr />
            <h3 className='ui header'>OUTPUT</h3>
            <Convert language={language} input={input} />
        
        
        </div>
    )
}

export default Translate