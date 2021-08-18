import React from 'react'

// import './custom-button.styles.scss'

import {CustomButtonContainer} from "./custom-button.styles";

const CustomButton = ({children, ...props}) => (  //children:pass the onsubmit method to here, so for here children = submit
    // <button className= {`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : '' } custom-button `}{...otherprops}>
    //     {children}
    // </button>
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;
