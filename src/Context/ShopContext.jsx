import React, { createContext , useState,useEffect, useContext} from 'react'
import all_products from '../components/Assets/all-products/All_products'
// import Product from '../pages/Product';
export const ShopContext = createContext(null);


const getdefaultcart = () => {
    let cart = {};
    all_products.forEach((product) => {
        cart[product.id] = 0;
    });
    return cart;
};

const ShopContextProvider = (props) =>{
    const [cartItems, setcartItems] = useState(getdefaultcart());
    useEffect(() => {
        // console.log("Cart Updated:", cartItems);
    }, [cartItems]);
 
    // console.log(cartItems);
    const addToCart = (itemId)=>{
        alert('Item added');
        console.log(itemId)
        setcartItems((prev) => ({
            
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1 // Ensures value exists before incrementing
            
        }));
        // console.log(cartItems)
    }
    const removeFromCart=(itemId)=>{
        setcartItems((prev) => ({
            ...prev,
            [itemId]:Math.max((prev[itemId] || 0) - 1, 0)// Ensures value exists before incrementing
        }));
        // console.log(cartItems)
    }
    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((Product) => Product.id === Number(item));
                if (itemInfo) {
                    total += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return total;
    };
    
    // const [contextValue, setcontextValue] = useState({all_products,cartItems, addToCart, removeFromCart,getdefaultcart})

    return(
        <ShopContext.Provider value={{all_products, cartItems,getTotalCartAmount,addToCart, removeFromCart}}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;