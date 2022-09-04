class Home
{
    constructor()
    {
        this.productName = ''
        this.locators = {
            searchBox:'#twotabsearchtextbox',
            searchButton: '#nav-search-submit-button'
        }
    }
    //Search for product with ProductName passed, and click on Search button
    searchProduct(productName)
    {
        cy
        .get(this.locators.searchBox)
        .type(productName)
        cy
        .get(this.locators.searchButton)
        .click()
        return this;
    }
    //Click on First Product from the result page
    clickProduct()
    {
        cy
        .get("div[cel_widget_id*='MAIN-SEARCH_RESULTS']")
        .first()
        .find('a')
        .first()
        .invoke('removeAttr', 'target') //Remove redirect to handle the product detail page
        .click()     
        return this;
    }
    //Click on Add Cart button from Product detail page
    clickAddToCart()
    {
        cy
        .get("#add-to-cart-button")
        .click()
        return this;
    }
}
export default Home;