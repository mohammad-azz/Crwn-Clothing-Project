import React from 'react';
import './menu-item.style.scss';
const MenuItem= ({title,imageurl,size}) => (

    <div style={
        {
            backgroundImage:`url(${imageurl})`
        }
    } className={`${size} menu-item`}>
    <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>new hat</span>
    </div>
</div>

)
export default MenuItem;