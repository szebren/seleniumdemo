const { Builder, By, Key } = require("selenium-webdriver");
const driver = new Builder().forBrowser("firefox").build();
driver.manage().window().maximize();

async function fillForm() {
  try {
    await driver.get(
      "https://docs.google.com/forms/d/e/1FAIpQLSdg6RPsq6HVai6-aOSkOQdtIfXoXQiFlMH55ufwOph86PiCZg/viewform"
    );
    await driver.actions().sendKeys(Key.TAB).perform();
    await driver.actions().sendKeys(Key.TAB).perform();
    await driver.actions().sendKeys(Key.TAB).perform();
    await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();

    await driver.actions().sendKeys(Key.TAB).perform();
    await driver.actions().sendKeys(Key.TAB).perform();
    await driver.actions().sendKeys(Key.SPACE).perform();
    await driver.actions().sendKeys(Key.TAB).perform();
    await driver.actions().sendKeys(Key.TAB).perform();
    await driver.actions().sendKeys(Key.TAB).perform();
    await driver.actions().sendKeys(Key.ENTER).perform();
    await driver
      .actions()
      .sendKeys(Key.chord(Key.ARROW_DOWN, Key.ARROW_DOWN))
      .perform();

    await driver.actions().sendKeys(Key.ENTER).perform();

    await driver.actions().sendKeys(Key.chord(Key.TAB, "05")).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, "15")).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, "1991")).perform();
    await driver
      .actions()
      .sendKeys(Key.chord(Key.TAB, "Hello World"))
      .perform();
    await driver.actions().sendKeys(Key.TAB).perform();
    await driver.actions().sendKeys(Key.ENTER).perform();
  } catch (error) {
    console.log(error);
  }
}
fillForm();
