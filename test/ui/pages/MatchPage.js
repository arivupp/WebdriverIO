/* eslint-disable class-methods-use-this */
import path from 'path';
import { Component } from '../components/BaseComponent';
import Button from '../components/Button';

const elementLocators = {
  AddCriterion: 'button[name=addCriterion]',
  readOnlyField: '//div[contains(@class,"criteria-row-field")]',
  typeSelectValue: 'div',
  conditionRow: '.gw-data-row',
  readOnlyConditionValue: './/div[contains(@class,"criteria-row-value")]',
  conditionValue: 'input[name=value]',
  delete: 'button[name=delete]',
  ProductTargeting: 'a=Product Targeting',
  UXTargeting: 'a*=UX Targeting',
  SelectFile: 'button=Select File',
  ImageUploadInput: 'input[type=file]',
  UploadedImage: '//img[@class="image-preview" and starts-with(@src,"https://")]'
};

class MatchPage {
  verifyPageLoad() {
    Button.waitForVisible(elementLocators.ProductTargeting);
  }

  clickAddCriterion() {
    Button.click(elementLocators.AddCriterion);
    return this;
  }

  removeAllCriterion() {
    const elements = $$(elementLocators.delete);
    elements.forEach(element => element.click());
    return this;
  }

  selectConditonField(value, rowIndex = 0) {
    browser.waitForVisible(elementLocators.conditionRow);
    const row = browser.elements(elementLocators.conditionRow).value[rowIndex];

    // This click enables the field
    row.waitForVisible(elementLocators.readOnlyField);
    row.click(elementLocators.readOnlyField);

    // This click opens up all available options on the drop down
    row.click(elementLocators.readOnlyField);

    // This selects the value
    row.waitForVisible(`${elementLocators.typeSelectValue}=${value}`);
    row.click(`${elementLocators.typeSelectValue}=${value}`);

    // To save the selected value, Tab key is pressed so
    browser.keys('\uE004');
    return this;
  }

  setConditonValue(value, rowIndex = 0) {
    browser.waitForVisible(elementLocators.conditionRow);
    const row = browser.elements(elementLocators.conditionRow).value[rowIndex];

    // This click enables the field
    row.waitForVisible(elementLocators.readOnlyConditionValue);
    row.click(elementLocators.readOnlyConditionValue);

    row.waitForVisible(elementLocators.conditionValue);
    row.setValue(elementLocators.conditionValue, value);

    // To save the selected value, Tab key is pressed so
    browser.keys('\uE007');
    return this;
  }

  clickProductTargetingTab() {
    Component.click(elementLocators.ProductTargeting);
    return this;
  }

  UXTargetingTab() {
    Component.click(elementLocators.UXTargeting);
    return this;
  }

  uploadImage() {
    const imagePath = path.resolve('test/ui/data/wedding.jpeg');
    browser.waitForExist(elementLocators.ImageUploadInput);
    browser.chooseFile(elementLocators.ImageUploadInput, imagePath);
    return this;
  }

  getUploadedImageId() {
    browser.waitForVisible(elementLocators.UploadedImage);
    const imageURL = browser.getAttribute(elementLocators.UploadedImage, 'src');
    return imageURL.split('/').pop();
  }
}

module.exports = new MatchPage();
