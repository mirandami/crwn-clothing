import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {connect} from "react-redux";
import { selectCollection} from "../../redux/shop/shop.selectors";
import {logger} from "redux-logger/src";
import './collection.styles.scss'

const CollectionPage = ({ collection }) => {
    const { title, items} = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                        <CollectionItem key={item.id} item={item}/>
                        ))}
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
    //unlike others, this selector needs part of the state depending on the URL parameter
});


//ownProps: the props of the component that were wrapping in our connect, gives us all of the props that we're getting on our CollectionPage component

export default connect(mapStateToProps)(CollectionPage)
