import Button from '../components/Button';

const elementLocators = {
  Deploy: 'button*=Deploy (revision',
  NothingToDeploy: 'button*=Nothing',
  GenericDeploy: 'button*=eploy'
};

class DashboardPage {
  verifyPageLoad() {
    Button.waitForVisible(elementLocators.GenericDeploy);
  }

  clickDeploy() {
    Button.click(elementLocators.Deploy);
    Button.waitForVisible(elementLocators.NothingToDeploy);
    return this;
  }

  verifyDeploymentSuccessfull(){
    Button.isExisting(elementLocators.NothingToDeploy);
  }
}

module.exports = new DashboardPage();
