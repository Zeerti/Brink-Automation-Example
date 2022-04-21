import LoginLocators from "../locators/loginLocators"
import { t } from "testcafe"

const data = require("../data/data.json")
const locators = new LoginLocators();

class LoginPage {
    constructor() {
        this.loginUrl = String(data.pages.admin1.url)
    }

    async login(t) {
        await t
            .typeText(locators.usernameField, "Username")
            .typeText(locators.passwordField, "ThisIsSomeNuttyLongPassword1!")
            .click(locators.signInButton)
            .wait(2000)
    }

    async forgotPasswordFlow(t) {
        await t
            .click(locators.forgotPasswordLink)
            .typeText(locators.forgotPasswordInput, "Username42")
            .click(locators.forgotPasswordSubmitButton)
            .click(locators.returnToLoginLink)
            .wait(2000)
    }
}

export default LoginPage;