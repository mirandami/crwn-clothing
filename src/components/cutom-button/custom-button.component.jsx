import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherprops}) => (  //children:pass the onsubmit method to here, so for here children = submit
    <button className= {`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : '' } custom-button `}{...otherprops}>
        {children}
    </button>
);

export default CustomButton;
