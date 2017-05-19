const path = require('path');
const fs = require('fs');

function getPersonalizationURL(){
  var env;
  try {
    env = JSON.parse(fs.readFileSync(path.join(__dirname, './../build/deployment.json')));
  }
  catch (err) {
    console.log("Error reading Personalization URL from personalization/build/deployment.json");
    console.log("Did you deploy Personalization?");
    throw err;
  }
  return env.ConfigUiURL;
}

exports.config = {
  // define specific suites
  specs: [
    'test/ui/functional/**'
  ],
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    chromeOptions: {

    }}],
  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: './logs/errorShots',
  baseUrl: 'http://test-dev-p13n-configuibucket-16ukq55jkl2mq.s3-website-us-west-2.amazonaws.com',
  waitforTimeout: 20000, //TODO:Fix this once pages are optimized to render fast
  framework: 'mocha',
  reporter: 'spec',
  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:babel-core/register'],
    //TODO:Fix this once pages are optimized to render fast
    timeout: 5000000 //overwriting mocha's default test timeout which is 2000 ms.
  },
};
