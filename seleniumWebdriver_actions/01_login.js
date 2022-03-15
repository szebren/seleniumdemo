const { Builder, By } = require("selenium-webdriver");
const driver = new Builder().forBrowser("firefox").build();
driver.manage().window().maximize();

async function loginCustomer() {
  try {
    await driver.get("https://www.phptravels.net/login");
    await driver
      .findElement(By.xpath('//input[@type="email"]'))
      .sendKeys("user@phptravels.com");
    await driver
      .findElement(By.xpath('//input[@type="password"]'))
      .sendKeys("demouser");
    await driver.findElement(By.xpath('//button[@type="submit"]')).click();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
}
loginCustomer();
