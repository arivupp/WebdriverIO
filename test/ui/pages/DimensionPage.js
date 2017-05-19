/* eslint-disable class-methods-use-this */
import { Component } from '../components/BaseComponent';
import MatchPage from '../pages/MatchPage';

const elementLocators = {
  MatchTableBody: '.gw-data-table__body',
  MatchTableRow: '.gw-data-row',
  DeleteButton: 'button[name="delete"]'
};

class DimensionPage {
  verifyPageLoad() {
    Component.waitForVisible(elementLocators.MatchTableBody);
  }

  clickMatch(row) {
    browser.waitForVisible(elementLocators.MatchTableBody);

    browser
      .$(elementLocators.MatchTableBody)
      .$(elementLocators.MatchTableRow)
      .click();

    return MatchPage;
  }

  deleteMatch(row) {
    browser.waitForVisible(elementLocators.MatchTableBody);

    browser
        .$(elementLocators.MatchTableBody)
        .$(elementLocators.MatchTableRow)
        .$(elementLocators.DeleteButton)
        .click();

    return MatchPage;
  }
}

module.exports = new DimensionPage();
