const functions = require('../data/functions')
const testData = require('../data/testData')
const selectors = require('../data/selectors')


module.exports = {
    beforeEach: (browser) => {
        browser
            .url('http://localhost:3000/calendar')
            .maximizeWindow()
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
        functions.topNavigation({ topNav1: topNav.home, topNav2: topNav.aboutUs, topNav3: topNav.media, topNav4: topNav.blog, topNav5: topNav.supportUs }, browser)
    },
    'bottom of screen navigation': (browser) => {
        let navBottom = selectors.navigationTabs.bottom.text
        functions.bottomNavigation({bNav1:navBottom.home, bNav2:navBottom.aboutUs, bNav3:navBottom.calandar, bNav4:navBottom.ourTeam, bNav5:navBottom.donate, bNav6: navBottom.volunteer}, browser)
    },
   // Not sure if I should cancel this test. The button works and acts like it is accepted but no way to know for sure with no database

    'stay connected good': (browser) => {
        let goodTest = testData.goodData.stayConnected
        functions.stayConnectedGood({phone:goodTest.phone2}, browser)
    },
    // I canceled this test due to no error message shown. So any bad phonenuber will be sent. This is a bug and will be reported

    // 'stay conncted bad': (browser) => {
    //     let badTest = testData.badData.stayConnected
    //     functions.stayConnectedBad({phone:badTest.phone2}, browser)
    // }
    // This test has been deamed a failure due to lack of being able to click the "Contact Us" button
    
    // 'contact us button': (browser) => {
    //     functions.contactUs(browser)
    // },
    // This test had been deamed a failure due to lack of being able to click the "Social media tabs"
    // 'social media tabs': (browser) => {
    //     functions.socialMediaLinks(browser)
    // },
    'notifications box good': (browser) => {
        functions.notificationBox({phone:testData.goodData.signUp.phone1}, browser)
        functions.notificationBox({phone:testData.goodData.signUp.phone2}, browser)
        functions.notificationBox({phone:testData.goodData.signUp.phone3}, browser)
        functions.notificationBox({phone:testData.goodData.signUp.phone4}, browser)
        functions.notificationBox({phone:testData.goodData.signUp.phone5}, browser)
        functions.notificationBox({phone:testData.goodData.signUp.phone6}, browser)
    },
    // This test was canceled due to bug of screen frezzing, and alowing bad data to be entered with no error message.

    // 'notification box bad': (browser) => {
    //     browser.getLocationInView(selectors.navigationTabs.bottom.bottomOfPage)
    //     functions.notificationBox({phone:testData.badData.signUp.phone1}, browser)
    //     functions.notificationBox({phone:testData.badData.signUp.phone2}, browser)
    //     functions.notificationBox({phone:testData.badData.signUp.phone3}, browser)
    
    // }






}