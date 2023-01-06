import React from 'react'
import titleImg from '../images/Fill213.png'

export default function titleBar() {
    return(
        <div className="--title_bar">
            <img src={titleImg} />
            <p>my travel journal.</p>
        </div>
    )
};