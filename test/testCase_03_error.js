const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");
const { it } = require("mocha");
var should = require("chai").should();

describe("seleniumTests", function () {
  it("validate error message", async function () {
    //launch browser
    let driver = new Builder().forBrowser("firefox").build();
    //navigate to unauthorized page
    await driver.get("https://www.phptravels.net/account/bookings");

    let todoText = await driver
      .findElement(By.xpath('//h1[@class="animated fadeInDown"]'))
      .getText()
      .then(function (value) {
        return value;
      });

    todoText.should.equal("404 Error");
    await driver.quit();
  });
});
