import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button 
        //Conditionally renders button
        className={`
            ${inverted ? 'inverted' : ''}
            ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
            {...otherProps}
    >
        {children}
    </button>
)

export default CustomButton;