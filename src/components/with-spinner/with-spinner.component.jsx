import React from "react";

import { SpinnerContainer, SpinnerOverlay} from "./with-spinner.styles";

const WithSpinner = WrappedComponent => {
    const  Spinner = ({isLoading, ...otherProps}) => {
        //a function that takes some component that we want to wrap with the functionality of our spiner loading feature
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps}/>
        )
    };
    return Spinner
};

export default WithSpinner
