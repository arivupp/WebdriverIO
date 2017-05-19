import BaseComponent from './BaseComponent';

class DropdownSelect extends BaseComponent {

  // Actions
  select(selector, attribute, value) {
    browser.waitForVisible(selector);
    browser.selectByAttribute(selector, attribute, value);
    return this;
  }

  selectByIndex(selector, index) {
    browser.waitForVisible(selector);
    browser.selectByIndex(selector, index);
    return this;
  }

  selectByValue(selector, value) {
    browser.waitForVisible(selector);
    browser.selectByValue(selector, value);
    return this;
  }

  selectByVisibleText(selector, text) {
    browser.waitForVisible(selector);
    browser.selectByVisibleText(selector, text);
    return this;
  }
}

module.exports = new DropdownSelect();
