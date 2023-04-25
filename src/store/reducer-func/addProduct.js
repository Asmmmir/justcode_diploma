export const addProduct = (state, id, price) => {
    let array = [...state]

    let hasThisProduct = false
    for (let i = 0;  i < array.length; i++) {
        const element = array[i]
        if (element.id === id) { 
            array[i].quantity += 1
            hasThisProduct = true
        }
    }
    if (!hasThisProduct) array.push({
        id: id,
        quantity: 1,
        price: price
    })
    return array
}