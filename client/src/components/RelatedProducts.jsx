import React, {} from 'react';
// import axios from 'axios';
import RelatedProductsList from './RelatedProductsSubFolder/RelatedProductsList.jsx';
import OutfitList from './RelatedProductsSubFolder/OutfitList.jsx';

const RelatedProducts = ({ products, setModalStatus, setCompaired }) => (
  <div id="relpro">
    <h5 id="rel-prod-title">RELATED PRODUCTS</h5>
    <RelatedProductsList
      setModalStatus={setModalStatus}
      products={products}
      setCompaired={setCompaired}
    />
    <br />
    <OutfitList />
  </div>
);
export default RelatedProducts;
