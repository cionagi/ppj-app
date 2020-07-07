export const updateCartServices = (product, cart) => {
  const { products } = cart;
  let productsUpdate = [];
  if (productIsInCart(products, product.tail)) {
    const cartDump = products.map((productItem) => {
      if (productItem.tail === product.tail) {
        return { ...productItem, quantity: productItem.quantity + 1 };
      }
      return productItem;
    });
    productsUpdate = [...cartDump];
  } else {
    productsUpdate = [...cart.products, { ...product, quantity: 1 }];
  }

  const totalCartUpdate = totalCart(productsUpdate);

  return {
    ...cart,
    products: [...productsUpdate],
    total: totalCartUpdate,
  };
};

export const subtractProductCartServices = (product, cart) => {
  const { products } = cart;
  if (productIsInCart(products, product.tail)) {
    const cartDump = products
      .map((productItem) => {

        // if product is distinc by id return
        if (productItem.tail !== product.tail) return productItem;

        // if quantiry update if Zero return false (0 cart)
        const acQuantity = productItem.quantity - 1;
        if (acQuantity === 0) return false;
        return { ...productItem, quantity: acQuantity };
      })
      .filter((product) => product !== false);

    const totalCartUpdate = totalCart(cartDump);

    return {
      ...cart,
      products: [...cartDump],
      total: totalCartUpdate,
    };
  }
  return false;
};

const productIsInCart = (products, tail) => {
  return products.some((productItem) => {
    return productItem.tail === tail;
  });
};

const totalCart = (products) => {
  return products.reduce((acc, product) => {
    return acc + product.quantity * product.price;
  }, 0);
};
