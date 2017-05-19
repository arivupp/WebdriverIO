import BaseComponent from './BaseComponent';

class InputField extends BaseComponent {
  // Actions
  type(selector, value) {
    browser.waitForVisible(selector);
    browser.setValue(selector, value);
    return this;
  }

  typeOnActiveElement(value) {
    const element = browser.elementActive();
    element.setValue(value);
    return this;
  }

  clearAndType(selector, value) {
    browser.waitForVisible(selector);
    browser.clearElement(selector);
    browser.setValue(selector, value);
    return this;
  }
}

module.exports = new InputField();
