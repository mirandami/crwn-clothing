import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems //the function that will return the value we want out of the selector
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden

);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItems) => accumulatedQuantity + cartItems.quantity,
            0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedPrice, cartItems) => accumulatedPrice + cartItems.quantity * cartItems.price,
            0
        )
);
