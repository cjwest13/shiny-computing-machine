const {By, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example(email) {

  // Url of site
  const url = '';

  //To wait for browser to build and launch properly
  //Using chrome via chromedriver 
  let driver = await new Builder().forBrowser("chrome").build();

   //To fetch url from the browser with our code.
  await driver.get(url);

  // divs had same class name and no unqiue ids so grab them all
  const elements = await driver.findElements(By.className('qp_a'))
  // i want to select the last element always so pop it off the last and click it
  await elements.pop().click();

  //A sleep to allow the broswer to load the next page
  await driver.sleep(1000);

  //Find unique email input by classname and enter email 
  await driver.findElement(By.className('enter_class')).sendKeys(email);

  // divs had same class name and no unqiue ids so grab them all
  const pageTwoElements = await driver.findElements(By.className('enter_class'))
  // i want to select the last element always so pop it off the last and click it
  await pageTwoElements.pop().click();

  //It is always a safe practice to quit the browser after execution
  await driver.quit();
}

async function sleep(msec) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

// Entry Function. Goes through list of emails and executes function one by one
const survey = async () => {
  for (let i = 0; i < list.length; i++) {
    await example(list[i]);
    sleep(4000); //
  }
}

// const list = [
//   'fakeemail@blah.com'
// ]

const list = [
  'cliftonwestjr@gmail.com',
  'clifton.west@blmseacoast.com'
]


survey();
