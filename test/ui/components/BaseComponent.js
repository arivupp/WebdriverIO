/* eslint-disable no-undef */

export default class BaseComponent {

  // State methods
  isVisible(selector) {
    return browser.isVisible(selector);
  }

  isEnabled(selector) {
    return browser.isEnabled(selector);
  }

  isExisting(selector) {
    return browser.isExisting(selector);
  }

  isSelected(selector) {
    browser.waitForVisible(selector);
    return browser.isSelected(selector);
  }

  isRequired(selector) {
    return Element.isExisting(selector);
  }

  isReadOnly(selector) {
    browser.waitForVisible(selector);
    return browser.isExisting(selector);
  }

  isEditable(selector) {
    browser.waitForVisible(selector);
    return browser.isExisting(selector);
  }

  // Property methods
  getText(selector) {
    browser.waitForVisible(selector);
    return browser.getText(selector);
  }

  getAttribute(selector, attribute) {
    browser.waitForVisible(selector);
    return browser.getAttribute(selector, attribute);
  }

  getCssProperty(selector, cssProperty) {
    browser.waitForVisible(selector);
    return browser.getCssProperty(selector, cssProperty);
  }

  getValue(selector) {
    browser.waitForVisible(selector);
    return browser.getValue(selector);
  }

  getHTML(selector) {
    browser.waitForVisible(selector);
    return browser.getHTML(selector);
  }

  getLabelClassName(selector) {
    browser.waitForVisible(selector);
    return ComponentBase.getAttribute(selector, 'class');
  }

  // Action methods
  click(selector) {
    browser.waitForVisible(selector);
    browser.click(selector);
    return this;
  }

  backSpace(count) {
    this.iteratePerCount(count, 'Back space');
    return this;
  }

  clear(selector) {
    browser.waitForVisible(selector);
    browser.clearElement(selector);
    return this;
  }

  tab(count) {
    this.iteratePerCount(count, 'Tab');
    return this;
  }

  iteratePerCount(count = 1, value) {
    for (let i = 0; i < count; i++) {
      browser.keys(value);
    }
  }

  scroll(selector) {
    browser.waitForVisible(selector);
    const element = browser.element(selector);
    element.scroll();
    return this;
  }

  moveToElement(selector, xoffset, yoffset) {
    browser.moveToObject(selector, xoffset, yoffset);
    return this;
  }

  // wait methods
  waitForVisible(selector, time) {
    browser.waitForVisible(selector, time);
    return this;
  }

  waitForInvisible(selector, time) {
    browser.waitForVisible(selector, time, true); // set reverse flag to true
    return this;
  }

  waitForEnabled(selector, time) {
    browser.waitForEnabled(selector, time);
    return this;
  }

  waitForDisabled(selector, time) {
    browser.waitForEnabled(selector, time, true); // set reverse flag to true
    return this;
  }

  waitForExist(selector, time) {
    browser.waitForExist(selector, time);
    return this;
  }

  waitForNotExist(selector, time) {
    browser.waitForExist(selector, time, true); // set reverse flag to true
    return this;
  }

  waitForSelected(selector, time) {
    browser.waitForSelected(selector, time);
    return this;
  }

  waitForUnselected(selector, time) {
    browser.waitForSelected(selector, time, true); // set reverse flag to true
    return this;
  }

  waitForText(selector, time) {
    browser.waitForText(selector, time);
    return this;
  }

  waitForValue(selector, time) {
    browser.waitForValue(selector, time);
    return this;
  }

  // Platinum(screenshot library) related methods
  validateRecordings() {
    browser.validateRecordings();
    return this;
  }

  // General methods
  locateElement(selector) {
    return browser.element(selector);
  }

  takeScreenshot() {
    browser.takeScreenshot();
    return this;
  }

}

const Component = new BaseComponent();
export { Component };
