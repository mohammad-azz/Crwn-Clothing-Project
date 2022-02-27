import React from 'react';
import './menu-item.style.scss';
const MenuItem= ({title,imageurl,size}) => (

    <div  className={`${size} menu-item`}>
        <div className='background-image' style={
        {
            backgroundImage:`url(${imageurl})`
        }
    } ></div>
    <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>new hat</span>
    </div>
</div>

)
export default MenuItem;