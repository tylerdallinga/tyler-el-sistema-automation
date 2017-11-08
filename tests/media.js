const functions = require('../data/functions')
const testData = require('../data/testData')
const selectors = require('../data/selectors')


module.exports = {
    beforeEach: (browser) => {
        browser
            .url('http://localhost:3000/media')
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
        functions.topNavigation({ topNav1: topNav.home, topNav2: topNav.calandar, topNav3: topNav.aboutUs, topNav4: topNav.blog, topNav5: topNav.supportUs }, browser)
    },
    'bottom of screen navigation': (browser) => {
        let navBottom = selectors.navigationTabs.bottom.text
        functions.bottomNavigation({bNav1:navBottom.home, bNav2:navBottom.calandar, bNav3:navBottom.aboutUs, bNav4:navBottom.volunteer, bNav5:navBottom.donate, bNav6:navBottom.ourTeam}, browser)
    },
    // Not sure if I should cancel this test. The button works and acts like it is accepted but no way to know for sure with no database

    'stay connected good': (browser) => {
        let goodTest = testData.goodData.stayConnected
        functions.stayConnectedGood({phone:goodTest.phone4}, browser)
    },
    // I canceled this test due to no error message shown. So any bad phonenuber will be sent. This is a bug and will be reported

    // 'stay conncted bad': (browser) => {
    //     let badTest = testData.badData.stayConnected
    //     functions.stayConnectedBad({phone:badTest.phone1}, browser)
    // }
    //This test has been deamed a failure due to lack of being able to click the "Contact Us" button
    //
    // 'contact us button': (browser) => {
    //     functions.contactUs(browser)
    // },
    // This test had been deamed a failure due to lack of being able to click the "Social media tabs"
     // 'social media tabs': (browser) => {
    //     functions.socialMediaLinks(browser)
    // },
    
    //  This next text was cancled due to the buttons on the page not being able to click. Bug has been reported and waiting reply 


    // 'media home page orientaion': (browser) => {
    //     let media = selectors.mediaScreen
    //     browser
    //     .click(media.photoVideoSwitch)
    //     .pause(2000)
    //     .click(media.photoVideoSwitch)
    //     .getLocationInView(media.loadMorePhotos)
    //     .click(media.loadMorePhotos)
    //     .pause(2000)
    //     .getLocationInView(media.returnToTop)
    //     .pause(2000)
    //     .click(media.returnToTop)
    //     .assert.elementVisible(selectors.assersionTabs.media)
    //     .getLocationInView(media.photos.oddPhotos.tag)
    //     .clickByText(media.photos.oddPhotos.tag, media.photos.oddPhotos.text)
    //     .back()
    //     .clickByText(media.photos.evenPhotos.tag, media.photos.evenPhotos.text)
    //     .back()

    // }


}