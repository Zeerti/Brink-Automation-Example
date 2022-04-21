import { Selector, t } from "testcafe"
import LoginPage from "../pages/loginPage"

const loginPage = new LoginPage();

fixture("Login Screen")
    .page(loginPage.loginUrl)
    .beforeEach(async (t) => {
        console.log(`Executing Test: ${t.testRun.test.name}`);
    });

test("Login", async (t) => {
    await loginPage.login(t);
});

test("Forgot Password", async (t) => {
    await loginPage.forgotPasswordFlow(t);
});

test("All Together", async (t) => {
    await loginPage.forgotPasswordFlow(t);
    await loginPage.login(t);
})