import { Component } from '../components/BaseComponent';
import Button from '../components/Button';

/* eslint-disable class-methods-use-this */

const elementLocators = {
  Campaign: 'h4=Campaign',
  Button: 'button='
};

class GeneralTargetingPage {
  verifyPageLoad() {
    Component.waitForVisible(elementLocators.Campaign);
  }

  clickCampaign(name) {
    Button.click(`${elementLocators.Button}${name}`);
    return this;
  }
}

module.exports = new GeneralTargetingPage();
