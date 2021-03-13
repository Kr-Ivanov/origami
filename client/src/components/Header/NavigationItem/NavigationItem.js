import React from 'react'
import style from './NavigationItem.module.css';

function NavigationItem(props) {
    return (

        <li className="listItem">
            <a href="#">{props.children}</a>
        </li>

    )
}

export default NavigationItem
