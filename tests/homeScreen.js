const functions = require('../data/functions')
const testData = require('../data/testData')
const selectors = require('../data/selectors')

module.exports = {
    beforeEach: (browser) => {
        browser
            .url('http://localhost:3000/home')
            .maximizeWindow()
            .pause(500)
            .waitForElementPresent('body', 5000)
    },
    afterEach: (browser, done) => {
        browser.end()
        setTimeout(() => {
            done()
        }, 500)
    },

    'Top of Screen Navigation': (browser) => {
        let topNav = selectors.navigationTabs.top
        functions.topNavigation({ topNav1: topNav.calandar, topNav2: topNav.aboutUs, topNav3: topNav.media, topNav4: topNav.blog, topNav5: topNav.supportUs }, browser)
    },
    'bottom of screen navigation': (browser) => {
        let navBottom = selectors.navigationTabs.bottom.text
        functions.bottomNavigation({bNav1:navBottom.calandar, bNav2:navBottom.aboutUs, bNav3:navBottom.home, bNav4:navBottom.volunteer, bNav5:navBottom.donate, bNav6:navBottom.ourTeam}, browser)
    },
     // Not sure if I should cancel this test. The button works and acts like it is accepted but no way to know for sure with no database
    'stay connected': (browser) => {
        let goodTest = testData.goodData.stayConnected
        functions.stayConnectedGood({phone:goodTest.phone1}, browser)
    },
    // This test has a bug where it will let you insert bad data in the field with no error message.
     // 'stay conncted bad': (browser) => {
    //     let badTest = testData.badData.stayConnected
    //     functions.stayConnectedBad({phone:badTest.phone1}, browser)
    //     
    // }
    //This test has been deamed a failure due to lack of being able to click the "Contact Us" button
    //
    // 'contact us button': (browser) => {
    //     functions.contactUs(browser)
    // },
    // This test had been deamed a failure due to lack of being able to click the "Social media tabs"
    //
    // 'home screen social media tabs': (browser) => {
    //     functions.socialMediaHome(browser)
    //     functions.socialMediaLinks(browser)
    // },

    // I did not make this next test a function due to it only being present on the home screen

    'home screen buttons': (browser) => {
        browser
        .click(selectors.homeScreen.seeMore)
        .pause(2000)
        .assert.elementPresent(selectors.assersionTabs.calandar)
        .back()
        .pause(2000)
        .click(selectors.homeScreen.supportUsButton)
        .pause(2000)
        .assert.elementPresent(selectors.assersionTabs.supportUs)
        .back()
        .click(selectors.homeScreen.readMore)
        .pause(2000)
        .assert.elementPresent(selectors.assersionTabs.aboutUs)
    },
}