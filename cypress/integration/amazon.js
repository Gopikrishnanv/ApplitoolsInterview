import Home from '../../helpers/pages/home'

describe('Amazon Interview Assignment', () => {
  const home = new Home();
  let addedProductName = ''
  beforeEach(() => {
    
    cy.eyesOpen({
      appName: 'Amazon interview',                       // The name of the app under test
      testName: Cypress.currentTest.title,        // The name of the test case
    })
  })

  it('search Product', () => {
    cy.visit('https://amazon.in')
    
    cy.eyesCheckWindow({
      tag: "home page",
      target: 'window',
      fully: true
    });
    
    home.searchProduct("sunglasses under 2000")
    cy.eyesCheckWindow({
      tag: "search page",
      target: 'window',
      fully: true
    });
    
    home.clickProduct()
    cy.eyesCheckWindow({
      tag: "Product detail page",
      target: 'window',
      fully: true
    });

    home.clickAddToCart()

    cy.eyesCheckWindow({
      tag: "After added cart page",
      target: 'window',
      fully: true
    });
  })

  afterEach(() => {

    // Close Eyes to tell the server it should display the results.
    cy.eyesClose()
  })

})