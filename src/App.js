import React, { useState } from 'react'
import Search from './components/Search'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from "./components/Route"
import Header from './components/Header'

const items = [
    {
        title: 'What is JSX?',
        content: 'JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.',
    },
    {
        title: 'What is the virtual DOM?',
        content: 'React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects'
    },
    {
        title: 'What are the components in React?',
        content: 'Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately.'
    }
];

const options = [
    {
        label: 'the color red',
        value: 'red'
    },
    {
        label: 'the color blue',
        value: 'blue'
    },
    {
        label: 'the color yellow',
        value: 'yellow'
    }
]

export default () => { 
    
    const [selected, setSelected] = useState(options[0]);

    return (<div>
        <Header />
        <Route path='/list'>
            <Search />
        </Route>
        <Route path='/translate'>
            <Translate />
        </Route>
        <Route path='/dropdown'>
            <Dropdown
            selected={selected}
            onSelectedChange={setSelected} 
            options={options}
            />
        </Route>
        <Route path='/'>
            <Accordion items={items} />  
        </Route>
        
        
    </div>)
}