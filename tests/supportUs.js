const functions = require('../data/functions')
const testData = require('../data/testData')
const selectors = require('../data/selectors')

module.exports = {
    beforeEach: (browser) => {
        browser
            .url('http://localhost:3000')
            .maximizeWindow()
            .waitForElementPresent('body', 5000)
    },
    afterEach: (browser, done) => {
        browser.end()
        setTimeout(() => {
            done()
        }, 500)
    },
    // 'Top of Screen Navigation': (browser) => {
    //     browser.click(selectors.navigationTabs.top.supportUs)
    //     let assert = selectors.assersionTabs
    //     let topNav = selectors.navigationTabs.top
    //     functions.topNavigation({ assertStart:assert.supportUs, topNav1: topNav.home, assert1:assert.home, topNav2: topNav.calandar, assert2:assert.calandar, topNav3: topNav.aboutUs,assert3:assert.aboutUs, topNav4: topNav.media, assert4:assert.media, topNav5: topNav.blog, assert5:assert.blog }, browser)
    // },
    'bottom of screen navigation': (browser) => {
        browser.click(selectors.navigationTabs.top.supportUs)
        let navBottom = selectors.navigationTabs.bottom.text
        let assert = selectors.assersionTabs
        functions.bottomNavigation({bNav1:navBottom.calandar, assert1:assert.calandar,bNav2:navBottom.aboutUs, assert2:assert.aboutUs, bNav3:navBottom.home, assert3:assert.home,bNav4:navBottom.volunteer,assert4:assert.aboutUs, bNav5:navBottom.donate, assert5:assert.supportUs, bNav6:navBottom.ourTeam, assert6:assert.aboutUs}, browser)
    }
    // // Not sure if I could cancle this test. The button works and acts like it is accepted but no way to know for sure with no database

    // 'stay connected good': (browser) => {
    //     browser.click(selectors.navigationTabs.top.supportUs)
    //     let goodTest = testData.goodData.stayConnected
    //     functions.stayConnectedGood({ phone: goodTest.phone6 }, browser)
    // },
    // // I canceled this test due to no error message shown. So any bad phonenuber will be sent. This is a bug and will be reported

    // // 'stay conncted bad': (browser) => {
    // //     browser.click(selectors.navigationTabs.top.supportUs)
    // //     let badTest = testData.badData.stayConnected
    // //     functions.stayConnectedBad({phone:badTest.phone3}, browser)
    // // }
    // //This test has been deamed a failure due to lack of being able to click the "Contact Us" button
    // //
    // // 'contact us button': (browser) => {
    // //     browser.click(selectors.navigationTabs.top.supportUs)
    // //     functions.contactUs(browser)
    // // },
    // // 'social media tabs': (browser) => {
    // //     browser.click(selectors.navigationTabs.top.supportUs)
    // //     functions.socialMediaLinks(browser)
    // // },
    // 'testing the donate box': (browser) => {
    //    browser.click(selectors.navigationTabs.top.supportUs)
    //     let donate = testData.goodData.donate
    //     functions.donateGood({ email: donate.email.email1, amount: donate.amount.amount1, card: donate.creditCard.card1, cvc: donate.cvc.cvc1, date: donate.expiration.ex1 }, browser)
    // }
    // // I have decieded to cancel out this test to extream amount of bugs present. Buttons dont
    // // work and error messages don't show properly.  

    // // 'test donate box with bad data to produse error message': (browser) => {
    // //     let donate = testData.badData.donate
    // //     browser.click(selectors.navigationTabs.top.supportUs)
    // //     functions.donateBad({email:donate.email.email1, eEmail:donate.email.errorMessage, amount:donate.amount.amount1, eAmount:donate.amount.errorMessage, card:donate.creditCard.card1, eCard:donate.creditCard.errorMessage, cvc:donate.cvc.cvc1, eCvc:donate.cvc.errorMessage, date:donate.expiration.ex1, eDate:donate.expiration.errorMessage}, browser)
    // // }
    // // test was cancled due selectors using same names. submit button also didn't work. Bugs have been reported

    // // 'test to enter volunteer data': (browser) => {
    // //     let signup = testData.goodData.volunteerSign
    // //     browser.click(selectors.navigationTabs.top.supportUs)
    // //     functions.volunteerSignUpGood({signName:signup.name.name1, email:signup.email.email1}, browser)
    // //     functions.volunteerSignUpGood({signName:signup.name.name2, email:signup.email.email2}, browser)    
    // // }
    // // No bad test for the volunteer page will be writen due to no error messeges shown. Bug has been sent.
    // // this test was canced to to bug in text. Once fixed the test will assert that text is correct on the screen
    
    // // 'test to check address instrument donation': (browser) => {
    // //     let donte = selectors.supportUsScreen.donateInstrument.address
    // //     let address = testData.goodData.donateInstrament
    // //     browser
    // //     .click(selectors.navigationTabs.top.supportUs)
    // //     .waitForElementPresent(selectors.assersionTabs.supportUs, 2000)
    // //     .assert.containsText(donte, address.line1)
    // //     .assert.containsText(donte, address.line2)
    // //     .assert.containsText(donte, address.line3)
        
    // // }
}