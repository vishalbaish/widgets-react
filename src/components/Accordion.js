import React, { useState } from 'react'

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    const RenderedList = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '' ;
        return <div>
            <div onClick={() => onTitleClick(index)} className={`title ${active}`}>
                <i className='dropdown icon'></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </div>
    })

    return (
        <div className='ui styled accordion'> 
            {RenderedList}
        </div>
    )
}

export default Accordion
