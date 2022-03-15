const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");
const { it } = require("mocha");

describe("seleniumTests", function () {
  it("validate string of head of bookings", async function () {
    //launch browser
    let driver = new Builder().forBrowser("firefox").build();
    await driver.get("https://www.phptravels.net/login");

    //Login
    await driver
      .findElement(By.xpath('//input[@type="email"]'))
      .sendKeys("user@phptravels.com");
    await driver
      .findElement(By.xpath('//input[@type="password"]'))
      .sendKeys("demouser");
    await driver.findElement(By.xpath('//button[@type="submit"]')).click();
    //navigate to My bookings

    await driver
      .findElement(By.css(".sidebar-menu > li:nth-child(2) > a:nth-child(1)"))
      .click();

    //get Text of My Bookings
    let todoText = await driver
      .findElement(By.xpath('//h3[@class="title"]'))
      .getText()
      .then(function (value) {
        return value;
      });

    //asserting he text of head
    assert.strictEqual(todoText, "My Bookings");

    //close drivern
    await driver.quit();
  });
});
