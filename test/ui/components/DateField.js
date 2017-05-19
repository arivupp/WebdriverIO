import BaseComponent from './BaseComponent';

class DateField extends BaseComponent {

  // Actions
  setDate(selector, value) {
    const date = value.split('-');
    browser.waitForVisible(selector);

    browser.addValue(selector, date[1]); // month
    browser.addValue(selector, date[2]); // date
    browser.addValue(selector, date[0]); // year

    browser.waitForValue(selector);
    return this;
  }
}

module.exports = new DateField();
