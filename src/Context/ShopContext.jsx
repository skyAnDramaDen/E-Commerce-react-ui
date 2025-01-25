import React, { createContext } from 'react';
import all_products from '../../src/Components/Assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = function(props) {
    const contextValue = {all_products};

    return (
        <ShopContext.Provider value={contextValue}>
            { props.children }
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;