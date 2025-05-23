
class LoginPage{
    constructor(page){
        this.page = page;
        this.loginLink = "#login2";
        this.userNameField = "#loginusername";
        this.passwordField = "#loginpassword";
        this.loginBtn = '//button[normalize-space()="Log in"]'
    }

    async gotoLoginPage(URL_str){
        await this.page.goto(URL_str);
    }

    async login(username, password){
        await this.page.click(this.loginLink);
        await this.page.fill(this.userNameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.locator(this.loginBtn).click();        
    }

    
}

module.exports = LoginPage;