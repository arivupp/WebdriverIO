/* eslint-disable class-methods-use-this */
import { Component } from '../components/BaseComponent';
import DimensionPage from './DimensionPage';
import DashboardPage from '../pages/DashboardPage';
import InternalPage from '../pages/InternalPage';

const elementLocators = {
  Menu: 'i[name="bars"]',
  Dashboard: 'a[title=Dashboard]',
  Dimension: 'div=Dimensions',
  Campaign: 'span=Campaign',
  BusinessDimension: 'span=Business Dimension',
  Channel: 'span=Channel',
  Demographic: 'span=Demographic',
  Internal: 'a[title=Internal]',
  MarketingPersonas: 'a[title*=Marketing]',
  BasePersonalization: 'a[title*=Personalization]',
  Sandbox: 'button=Sandbox',
  quoteBindURLEdit: '.gw-quote-bind-url'
};

class CoreLayoutPage {
  verifyPageLoad() {
    Component.waitForVisible(elementLocators.Menu);
  }

  goToCampaignPage() {
    // Click Left Navigation Menu => Dimensions => Campaign
    Component.click(elementLocators.Menu);
    Component.click(elementLocators.Dimension);
    Component.click(elementLocators.Campaign);
    return DimensionPage;
  }

  goToBusinessDimensionPage() {
    // Click Left Navigation Menu => Dimensions => Business Dimension
    Component.click(elementLocators.Menu);
    Component.click(elementLocators.Dimension);
    Component.click(elementLocators.BusinessDimension);
    return DimensionPage;
  }

  goToDemographicPage() {
    // Click Left Navigation Menu => Dimensions => Demographic
    Component.click(elementLocators.Menu);
    Component.click(elementLocators.Dimension);
    Component.click(elementLocators.Demographic);
    return DimensionPage;
  }

  goToChannelPage() {
    // Click Left Navigation Menu => Dimensions => Channel
    Component.click(elementLocators.Menu);
    Component.click(elementLocators.Dimension);
    Component.click(elementLocators.Channel);
    return DimensionPage;
  }

  goToDashboardPage() {
    Component.click(elementLocators.Dashboard);
    return DashboardPage;
  }

  goToInternalPage() {
    Component.click(elementLocators.Internal);
    return InternalPage;
  }

  goToMarketingPersonasPage() {
    Component.click(elementLocators.MarketingPersonas);
    return PersonasPage;
  }

  goToBasePersonalizationPage() {
    Component.click(elementLocators.BasePersonalization);
    return this;
  }
}

module.exports = new CoreLayoutPage();
