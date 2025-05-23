
class HomePage {
    constructor(page) {
        this.page = page;
        this.allProducts = '//div[@id="tbodyid"]//h4//a';
        this.AddToCartBtn = '//a[normalize-space()="Add to cart"]'
        this.cartLink = '#cartur'
    }

    async addProductToCart(productName) {
        const productList = await this.page.$$(this.allProducts);

        for (const pd of productList) {
            if (productName === await pd.textContent()) {
                await pd.click();
                break;
            }
        }

        // await this.page.pause()

        await this.page.once('dialog', async (dialog) => {
            if (dialog.message().includes('added')) {
                await dialog.accept();
            }
        });

        await this.page.locator(this.AddToCartBtn).click();
    }



    async gotoCart() {
        await this.page.locator(this.cartLink).click();
    }
}

module.exports = HomePage;