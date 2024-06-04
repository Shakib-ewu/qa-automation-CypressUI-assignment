import CartDrawerPage from '../PageObjects/CartDrawerPage';
describe("Verifying Cart Drawer", () => {
    const cartDrawerPage = new CartDrawerPage();

    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit('/');
        cartDrawerPage.acceptCookies();
        cy.wait(4000);
    });

    it('Cart Drawer Tests', () => {
        cartDrawerPage.openCartDrawer();
        cartDrawerPage.verifyCartDrawerIsEmpty();

        cartDrawerPage.addItemToCart();
        cartDrawerPage.deleteItemFromCart();

        cartDrawerPage.navigateToTopRight();
        cartDrawerPage.openCartDrawer();
        cartDrawerPage.clickFirstItemInCart();

        cartDrawerPage.navigateToBreadcrumbLink();
    });
});
