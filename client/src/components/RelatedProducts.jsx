import React, {} from 'react';
// import axios from 'axios';
import RelatedProductsList from './RelatedProductsSubFolder/RelatedProductsList.jsx';
import OutfitList from './RelatedProductsSubFolder/OutfitList.jsx';

const RelatedProducts = () => (
    <div id='relpro'>
      <RelatedProductsList />
        <br/>
        <OutfitList />
    </div>
);
export default RelatedProducts;
