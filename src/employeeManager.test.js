const { Builder, Capabilities, By } = require("selenium-webdriver");

require('chromedriver');

const empInfo = require('./employeeInfo');

const empVerify = require('./empVerify');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async function() {
    await driver.get('http://localhost:3000')
});

afterAll(async function() {
    await driver.quit();
});

test('can click employee', async () => {
    const theresaEmp = await driver.findElement(By.name('employee4'))

    await driver.sleep(3000)

    await theresaEmp.click();

    await driver.sleep(3000)

})


test('verify each employee', async () => {
    for (let i = 0; i < empInfo.length; i++) {
        await empVerify(driver, i)
    }
})