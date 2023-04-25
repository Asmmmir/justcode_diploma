export const increment = (state, id) => {
    return [...state].map((product) => {
        if(product.id === id) return {...product, quantity: product.quantity + 1}
        return product
    })
};

export const decrement = (state, id) => {
return [...state].map((product) => {
    if(product.id === id) return {...product, quantity: product.quantity - 1}
    return product
}).filter(product => product.quantity > 0)
};
