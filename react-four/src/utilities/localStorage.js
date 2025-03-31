/*
    * to get something from local storage, you will get it as a string
    *  convert this to javascript object/array
*/

const getCartFromLocal = ()=>{
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        const storedCart = JSON.parse(storedCartString)
        return storedCart
    }
    return [];
}

const addItemToCartLocal = (id)=>{
    const cart = getCartFromLocal()
    const newCart = [...cart,id];
    saveCart(newCart)
}


const saveCart = (cart)=>{
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringify)
}


export {getCartFromLocal as getCart,addItemToCartLocal as addCart}