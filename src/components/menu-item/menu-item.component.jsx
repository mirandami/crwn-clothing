import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss'

const MenuItem = ({title,imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        {/*用history.push可以实现dynamically control，因为可以将他用在componentdidmount这样的functional call里面，*/}
        {/*但是link的话就不行（link不可以写在function里面，match.url是where url actually match，linkurl是想要去到的地方*/}
        <div className='background-image'  style ={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
