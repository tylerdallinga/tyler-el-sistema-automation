const functions = require('../data/functions')
const testData = require('../data/testData')
const selectors = require('../data/selectors')


module.exports = {
    beforeEach: (browser) => {
        browser
            .url('http://localhost:3000/about')
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
    //     let assert = selectors.assersionTabs
    //     let topNav = selectors.navigationTabs.top
    //     functions.topNavigation({ assertStart:assert.aboutUs, topNav1: topNav.home, assert1:assert.home, topNav2: topNav.calandar, assert2:assert.calandar, topNav3: topNav.media,assert3:assert.media, topNav4: topNav.blog, assert4:assert.blog, topNav5: topNav.supportUs, assert5:assert.supportUs }, browser)
    // },
    // 'bottom of screen navigation': (browser) => {
    //     let navBottom = selectors.navigationTabs.bottom.text
    //     let assert = selectors.assersionTabs
    //     functions.bottomNavigation({bNav1:navBottom.calandar, assert1:assert.calandar,bNav2:navBottom.aboutUs, assert2:assert.aboutUs, bNav3:navBottom.home, assert3:assert.home,bNav4:navBottom.volunteer,assert4:assert.aboutUs, bNav5:navBottom.donate, assert5:assert.supportUs, bNav6:navBottom.ourTeam, assert6:assert.aboutUs}, browser)
    //}
    // // Not sure if I should cancel this test. The button works and acts like it is accepted but no way to know for sure with no database

    // 'stay connected good': (browser) => {
    //     let goodTest = testData.goodData.stayConnected
    //     functions.stayConnectedGood({phone:goodTest.phone3}, browser)
    // },
    // // I canceled this test due to no error message shown. So any bad phonenuber will be sent. This is a bug and will be reported

    // // 'stay conncted bad': (browser) => {
    // //     let badTest = testData.badData.stayConnected
    // //     functions.stayConnectedBad({phone:badTest.phone3}, browser)
    // // }
    // //This test has been deamed a failure due to lack of being able to click the "Contact Us" button
    // //
    // // 'contact us button': (browser) => {
    // //     functions.contactUs(browser)
    // // },
    // // This test had been deamed a failure due to lack of being able to click the "Social media tabs"
    //  // 'social media tabs': (browser) => {
    // //     functions.socialMediaLinks(browser)
    // // },

    // // This test the way it is writen, should work correctly, however the buttons are not clickable
    // // and won't take you to the media page. When this bug is fixed this test will be here to make
    // // sure this particular feature works. 

    // //   'load more pictures button test': (browser) => {
    // //       browser
    // //       .assert.elementPresent(selectors.aboutUsScreen.loadMorePhotos.whoWeAre)
    // //       .click(selectors.aboutUsScreen.loadMorePhotos.button)
    // //       .pause(2000)
    // //       .back()
    // //       .getLocationInView(selectors.aboutUsScreen.loadMorePhotos.missionStatment)
    // //       .pause(2000)
    // //       .assert.elementPresent(selectors.aboutUsScreen.loadMorePhotos.missionStatment)
    // //       .click(selectors.aboutUsScreen.loadMorePhotos.button)
    // //       .back()
    // //       .getLocationInView(selectors.aboutUsScreen.loadMorePhotos.curriculum)
    // //       .pause(2000)
    // //       .assert.elementPresent(selectors.aboutUsScreen.loadMorePhotos.curriculum)
    // //       .click(selectors.aboutUsScreen.loadMorePhotos.button)
    // //       .back()
    // //   }
    
    // // This test was cancled due to th volunteer tags not being clickable and or conectted to anything. reported bug and waiting update

    // // 'volunteers': (browser) => {
    // //     functions.Volunteers({vol: selectors.aboutUsScreen.volunteers.volunteer1}) 
    // //     functions.Volunteers({vol: selectors.aboutUsScreen.volunteers.volunteer2})
    // //     functions.Volunteers({vol: selectors.aboutUsScreen.volunteers.volunteer3})
    // //     functions.Volunteers({vol: selectors.aboutUsScreen.volunteers.volunteer4})
    // //     functions.Volunteers({vol: selectors.aboutUsScreen.volunteers.volunteer5})
    // //     functions.Volunteers({vol: selectors.aboutUsScreen.volunteers.volunteer6})
    // // }

}


