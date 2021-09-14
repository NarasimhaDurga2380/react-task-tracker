import React from 'react'

export const Button = ({text, backgroundColor, onAddOrClose}) => {
    return (
        <div>
            <button className="btn" onClick={onAddOrClose} style={{ backgroundColor }}>{text}</button>
        </div>
    )
}
