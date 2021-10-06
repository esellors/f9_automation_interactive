const { By } = require('selenium-webdriver')
const empInfo = require('./employeeInfo');

async function empVerify(driver, empNumber) {
    await driver.findElement(By.xpath(`//*[text()="${empInfo[empNumber].name}"]`)).click();

    let empName = await driver.findElement(By.name('nameEntry'));
    let empPhone = await driver.findElement(By.name('phoneEntry'));
    let empTitle = await driver.findElement(By.name('titleEntry'));

    let name = await empName.getAttribute('value')
    let phone = await empPhone.getAttribute('value')
    let title = await empTitle.getAttribute('value')

    expect(name).toBe(empInfo[empNumber].name)
    expect(phone).toBe(empInfo[empNumber].phone)
    expect(title).toBe(empInfo[empNumber].title)
}

module.exports = empVerify;