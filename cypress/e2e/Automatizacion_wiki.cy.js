describe('Wiki Test', () => {
  const textToSearch = 'automatización';
  const urlWiki = 'https://es.wikipedia.org/wiki/Automatizaci%C3%B3n';
  const targetText = 'en 1975, convirtiéndose en el primer proceso industrial completamente automatizado';

  it('Wikipedia search', () => {
      cy.visit('https://www.google.es/');
      cy.get('#L2AGLb').click();
      cy.get('#APjFqb').type(textToSearch);
      cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
      //cy.get(':nth-child(3) > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click();
      cy.get('a[href="https://es.wikipedia.org/wiki/Automatizaci%C3%B3n"]').first().scrollIntoView().click()
  })
     
  
  it('Comprobamos que estamos en Wikipedia',()=>{
     //cy.origin('https://es.wikipedia.org/', () => {
         cy.visit('/wiki/Automatizaci%C3%B3n')
          cy.url().should('eq', 'https://es.wikipedia.org/wiki/Automatizaci%C3%B3n');  
      //})
      
  })

  
  it('Buscamos el párrafo que contiene el año', () => {
      cy.visit('/wiki/Automatizaci%C3%B3n')
      cy.get('p').contains('1785').screenshot('Primera_Automatizacion');;
      
  })
})