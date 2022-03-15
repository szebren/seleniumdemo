const { Builder, By, until } = require("selenium-webdriver");
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
    //Navigate to Home page

    await driver.findElement(By.xpath('//a[@title="home"]')).click();

    //Fill out input

    await driver.findElement(By.id("select2-hotels_city-container")).click();
    await driver
      .findElement(
        By.xpath('//input[@aria-controls="select2-hotels_city-results"]')
      )
      .sendKeys("Budapest");
    await driver.wait(until.elementLocated(By.className("flag hu"))).click();

    //Click on Submit button

    await driver.findElement(By.id("submit")).click();

    //Close browsers

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
}
loginCustomer();
