import React from 'react';
import { useNavigate, withRouter } from 'react-router-dom';

import './menu-item.style.scss';

const MenuItem= ({title,imageUrl,size,linkUrl}) => {
    const navigate = useNavigate();
   return( <div  className={`${size} menu-item`} 
    onClick={()=> navigate(linkUrl)}
    >
        <div className='background-image' style={
        {
            backgroundImage:`url(${imageUrl})`
        }
    } ></div>
    <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>new hat</span>
    </div>
</div>
   )
}
export default MenuItem;