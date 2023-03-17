describe('Auth:', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should register, login and logout successfully', async () => {
    const data = {
      name: `login-${Date.now().toString()}`,
      password: 'p',
    }

    await element(by.text('Register')).tap()
    await element(by.id('register-name')).typeText(data.name)
    await element(by.id('register-password')).typeText(data.password)
    await element(by.id('register-button')).tap()

    await element(by.id('login-password')).typeText(data.password)
    await element(by.id('login-button')).tap()

    await element(by.text('Logout')).tap()
    await expect(element(by.id('login-password'))).toBeVisible()
  })
})
