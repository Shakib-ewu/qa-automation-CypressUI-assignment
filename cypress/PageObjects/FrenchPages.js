class Frenchpage {
    acceptCookies() {
        cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click();
      }
    
      openLanguageSwitcher() {
        cy.get('.items-center > .flex > .text-black').eq(4).click({ force: true });
        cy.get("div[class='text-black text-sm 2xl:text-[14px] font-extrabold font-Mulish leading-[120%]']").click({ force: true });
      }
    
      //HeroBanner
      clickHeroBanner() {
        cy.get('.swiper-slide-active > .relative > .absolute').click();
      }
    
      navigateToFrenchPage() {
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click();
      }
    
      navigateToSlide(slideNumber) {
        cy.get('.swiper-pagination > :nth-child(' + slideNumber + ')').click();
      }
    
      clickProductInCarousel(index) {
        cy.get('.swiper-slide-active > .relative > .absolute > .flex-col > .flex > .inline-flex').eq(index).click();
      }

      clickShopNowbutton() {
        cy.scrollTo(0, 1000);
        cy.get("button[type='button']", { timeout: 3000 }).eq(0).contains('Magasiner').click({ force: true });
      }


    // Verify Shop Now button for Trending section
      verifySaleText() {
        cy.get('.h-full > .text-center').should('have.text', 'SALE');
      }
    
      clickNextButtonMultipleTimes(clickCount) {
        for (let i = 0; i < clickCount; i++) {
          cy.xpath("(//button[@aria-label='Next'])[1]").should('be.visible').click({ force: true });
          cy.wait(500);
        }
      }
    
      clickPreviousButtonMultipleTimes(clickCount) {
        for (let i = 0; i < clickCount; i++) {
          cy.xpath("(//button[@aria-label='Previous'])[1]").should('be.visible').click({ force: true });
          cy.wait(500);
        }
      }


      // Carosoul slider
    scrollToSlider() {
        cy.scrollTo(0, 2000);
    }

    verifySliderTitle() {
        cy.get('h1').contains("SOYEZ PRÊT POUR L'ÉTÉ AVEC MICHAEL KORS").should('exist');
    }

    clickShopNowButton() {
        cy.get("a:contains('Achetez maintenant')").click({ force: true });
    }

    verifyProductTitle() {
        cy.get("h3").should('have.text', 'FEMMES - MICHAEL KORS');
    }

    navigateToFrenchPage() {
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click();
    }
}
  
  export default Frenchpage;
  