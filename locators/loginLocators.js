import {t, Selector} from "testcafe"

class LoginLocators {
    constructor() {
        this.usernameField = Selector("input#Username");
        this.passwordField = Selector("input#Password");
        this.forgotPasswordLink = Selector("div.form-group").find("a").withExactText("Forgot password?");// Case sensitive
        this.signInButton = this.forgotPasswordLink.sibling("button").withExactText("Sign in"); 

        // Forgot Password Page
        this.forgotPasswordInput = Selector("input#Username")
        this.returnToLoginLink = Selector("a").withExactText("Return to Login")
        this.forgotPasswordSubmitButton = Selector("button").withExactText("Submit")
    }
}

export default LoginLocators;