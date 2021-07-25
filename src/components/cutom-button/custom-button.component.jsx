import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, ...otherprops}) => (  //children:pass the onsubmit method to here, so for here children = submit
    <button className= {`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button `}{...otherprops}>
        {children}
    </button>
);

export default CustomButton;
