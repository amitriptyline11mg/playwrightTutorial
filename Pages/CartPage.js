

class CartPage {
    constructor(page) {
        this.page = page;
        this.listOfProducts = '//tbody[@id="tbodyid"]//tr//td[2]'
    }

    async verifyProductInCart(productName) {

        const productsInCart = await this.page.$$(this.listOfProducts);

        for (const pd of productsInCart) {

            if (productName === await pd.textContent()) {
                return true;
                break;
            }
        }
    }
    // This will return true if the product was added to the cart

}


module.exports = CartPage;