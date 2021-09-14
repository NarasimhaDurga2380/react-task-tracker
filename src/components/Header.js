import React from 'react'
import { Button } from './Button'
import { Title } from './Title'

export const Header = ({onAddOrClose,showAdd}) => {
    return (
        <div className="Header">
            <Title />
            <Button onAddOrClose={onAddOrClose} text={showAdd ? 'Close' : 'Add'} backgroundColor={showAdd ? 'red' : ''}/>
        </div>
    )
}
