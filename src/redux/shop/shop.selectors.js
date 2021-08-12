import {createSelector} from 'reselect'

// const COLLECTION_ID_MAP = {
//     hats:1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
// };

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections,
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
    //gets us all of the key of the object that we pass into it, and give us an array format
)

// export const selectCollection = collectionUrlParam =>
//     createSelector(
//         [selectCollections],
//         collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
//     );
//curried function, a function that returns another function

//storing lists of elements inside of an object instead of an array is called data normalization
export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );
