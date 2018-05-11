describe('Game Play', () => {
  const startMessage = 'Press Start to Play';
  const gameOverMessage = 'Game Over';

  before(() => {
    cy.visitApp();
  });

  it('should assert that <title> is correct', () => {
    cy.title().should('include', 'Dots Game');
  });

  it('should have start game message', () => {
    cy.get(`#root`).should($app => {
      expect($app).to.contain(startMessage);
    });
  });

  it('should start game message on pressing start button', () => {
    cy.get(`img[alt="play"]`).click();

    cy.get(`#root`).should($app => {
      expect($app).to.not.contain(startMessage);
    });
  });

  it('should update the score after clicking a dot', () => {
    cy.wait(1500);

    cy
      .get(`button[data-testid="dot"]`)
      .first()
      .click();

    cy.get(`div[data-testid="score"]`).should($score => {
      expect($score).to.not.contain('0');
    });
  });

  it('should disable clicking on dot if game is paused', () => {
    cy.wait(1500);
    cy.get(`img[alt="pause"]`).click();

    cy
      .get(`button[data-testid="dot"]`)
      .first()
      .should('be.disabled');

    cy.get(`img[alt="play"]`).click();
  });

  it('should display game over after a while', () => {
    cy.wait(10 * 1000);

    cy.get(`#root`).should($app => {
      expect($app).to.contain(gameOverMessage);
    });
  });

  it('should not display game over after restart and also reset score', () => {
    cy.get(`img[alt="restart"]`).click();

    cy.get(`#root`).should($app => {
      expect($app).to.not.contain(gameOverMessage);
    });

    cy.get(`div[data-testid="score"]`).should($score => {
      expect($score).to.contain('0');
    });

    cy.wait(2 * 1000);

    cy.get(`img[alt="pause"]`).click();
  });
});
