export const addItem = (itemToAdd, cartItems) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  )

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const deleteItem = (itemToDelete, cartItems) =>
  cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id)

export const removeUnity = (itemToRemove, cartItems) => {
  const existingItem = cartItems.find((item) => item.id === itemToRemove.id)
  console.log(existingItem)
  if (existingItem.quantity === 1) {
    return cartItems
  }

  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  )
}
