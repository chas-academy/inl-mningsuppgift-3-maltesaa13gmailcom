let htmlProductName = document.getElementById("productInput")
let htmlProductPrice = document.getElementById("priceInput")
let htmlAddToCart = document.getElementById("addButton")
let htmlCart = document.getElementById("cartList")

let cart = []

htmlAddToCart.addEventListener("click", () => {
    let price = Number(htmlProductPrice.value)
    let name = htmlProductName.value

    let isInCart = false

    if (name !== "") {
        for (product of cart) {
            if (name === product.productName) {
                product.price += price
                product.quantity += 1
                isInCart = true
            }
        }
        if (!isInCart) {
            cart.push({productName: name, price: price, quantity: 1})
        }
    }

    // Rensa input och cart
    htmlProductName.value = ""
    htmlProductPrice.value = ""
    htmlCart.innerHTML = ""

    // Rendera
    for (item of cart) {
        console.log(item)
        const listItem = document.createElement("li")
        listItem.innerHTML = `${item.productName} - ${item.price}kr (x${item.quantity})`
        htmlCart.appendChild(listItem)
    }
})