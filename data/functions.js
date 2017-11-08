const selectors = require('./selectors')
const testData = require('./testData')


module.exports = {
    //the purpose of this function is to cycle through the top navigaion tabs to dedermine that navigaion works on ALL pages and that they return you to the origanial 
    //page you strted with. Note: there is a bug reported that when clicked back in hisory the tab still shows that you are on the previous tag. bug has been reported  
    //and awating update
    topNavigation: (data, browser) => {
        browser
            .click(data.topNav1)
            .pause(2000)
            .back()
            .pause(2000)
            .click(data.topNav2)
            .pause(2000)
            .back()
            .pause(2000)
            .click(data.topNav3)
            .pause(2000)
            .back()
            .pause(2000)
            .click(data.topNav4)
            .pause(2000)
            .back()
            .pause(2000)
            .click(data.topNav5)
            .pause(2000)
            .back()
    },
    //the purpose of this function is to cycle through the bottom navigaion tabs to dedermine that navigaion works on ALL pages succesfully.    

    bottomNavigation: (data, browser) => {
        let bottomNav = selectors.navigationTabs.bottom.tag
        browser
            .getLocationInView(selectors.navigationTabs.bottom.bottomOfPage)
            .pause(3000)
            .clickByText(bottomNav, data.bNav1)
            .pause(3000)
            .back()
            .pause(2000)
            .clickByText(bottomNav, data.bNav2)
            .pause(2000)
            .back()
            .pause(2000)
            .clickByText(bottomNav, data.bNav3)
            .pause(2000)
            .back()
            .pause(2000)
            .clickByText(bottomNav, data.bNav4)
            .pause(2000)
            .back()
            .pause(2000)
            .clickByText(bottomNav, data.bNav5)
            .pause(2000)
            .back()
            .clickByText(bottomNav, data.bNav6)
            .pause(2000)
            .back()
    },
    // this function is used to click the contact us button on ALL pages 
    contactUs: (data, browser) => {
        browser
            .getLocationInView(selectors.contactUs.button)
            .pause(2000)
            .assert.containsText('Contact Us')
            .click(selectors.contactUs.button)
            .assert.elementVisible//(unknown element)
    },
    // this function, only useful on the home page, determans if the links attached will direct you to social media sits 
    socialMediaHome: (data, browser) => {
        let socailHome = selectors.socialMediaTabs.homeScreenTabs
        browser
            .assert.attributeContains(socailHome.faceBook, 'herf', 'facebook.com')
            .assert.attributeContains(socailHome.twitter, 'herf', 'twitter.com')
            .assert.attributeContains(socailHome.linkedin, 'herf', 'linkedin.com')


    },
    // identical to the last function, this funcition helps determen if the social media links at the bottom of the page will direct you to social media sites from
    // all pages
    socialMediaLinks: (data, browser) => {
        let socialTabs = selectors.socialMediaTabs.bottomScreentabs
        browser
            .getLocationInView(socialTabs.linkedin)
            .assert.attributeContains(socialTabs.faceBook, 'herf', 'facebook.com')
            .assert.attributeContains(socialTabs.twitter, 'herf', 'twitter.com')
            .assert.attributeContains(socialTabs.linkedin, 'herf', 'linkedin.com')

    },
    // this function allows you to insert data, good, into stay connected field and get a notification 
    stayConnectedGood: (data, browser) => {
        browser
            .getLocationInView(selectors.stayConnected.phoneNumberBox)
            .pause(2000)
            .setValue(selectors.stayConnected.phoneNumberBox, data.phone)
            .click(selectors.stayConnected.signUpBox)
            .pause(2000)
    },
    // this function allows you to insert data, bad, into stay connected field and get am error message
    stayConnectedBad: (data, browser) => {
        browser
            .getLocationInView(selectors.stayConnected.phoneNumberBox)
            .pause(2000)
            .setValue(selectors.stayConnected.phoneNumberBox, data.phone)
            .click(selectors.stayConnected.signUpBox)
            .pause(2000)
            .assert.containsText('error/message')
    },
    // this function allows you insert data into required field, good and bad, and get the repected result

    notificationBox: (data, browser) => {
        let classes = selectors.notifications.classOptions
        browser
            .click(selectors.notifications.signUpButton)
            .pause(2000)
            .setValue(selectors.notifications.phoneNumber, data.phone)
            .click(selectors.notifications.classDropDown)
            .pause(2000)
            .click(classes.jazzViolin)
            .click(classes.strings)
            .click(classes.bucketBand)
            .pause(1000)
            .click(selectors.notifications.classDropDown)
            .pause(2000)
            .click(selectors.notifications.performances)
            .click(selectors.notifications.events)
            .click(selectors.notifications.all)
            .pause(2000)
            .click(selectors.notifications.submit)
            .pause(2000)
            .click(selectors.notifications.signUpButton)
            .pause(2000)
            .click(selectors.notifications.xButton)
            .pause(3000)
    },
    // this function allows you to select mulipule volunteers and see there profiles.   

    Volunteers: (data, browser) => {
        let volunteers = selectors.aboutUsScreen.volunteers
        browser
            .getLocationInView(volunteers.tag)
            .pause(2000)
            .clickByText(volunteers.tag, data.vol)
            .pause(2000)
            .back()
    },

    donateGood: (data, browser) => {
        let donate = selectors.supportUsScreen.donate
        browser
            .getLocationInView(donate.submit)
            .pause(2000)
            .setValue(donate.email, data.email)
            .setValue(donate.enterAmount, data.amount)
            .setValue(donate.creditCard, data.card)
            .setValue(donate.cvc, data.cvc)
            .setValue(donate.expiration, data.date)
            .click(donate.submit)
            .pause(2000)
            .back()
            .pause(2000)
            // there is no attribute in PayPal selecotr nor able to click. so cut function
            // .assert.attributeContains(donate.payPal, 'herf', 'paypal.com')
            // .pause(1000)
            // .click(donate.payPal)
            // .pause(2000)
    },
    donateBad: (data, browser) => {
        let donate = selectors.supportUsScreen.donate
        browser
            .setValue(donate.email, data.email)
            .pause(1000)
            .setValue(donate.enterAmount, data.amount)
            .pause(1000)
            .setValue(donate.creditCard, data.card)
            .pause(1000)
            .setValue(donate.cvc, data.cvc)
            .pause(1000)
            .setValue(donate.expiration, data.date)
            .pause(1000)
            .click(donate.submit)
            .assert.elementPresent(donate.emailError)
            .assert.elementPresent(donate.amountError)
            .assert.containsText(donate.creditError)
            .assert.containsText(donate.cvcError)
            .assert.containsText(donate.expirationError)



    },
    volunteerSignUpGood: (data, browser) => {
        let signUp = selectors.supportUsScreen.VolunteerSignUp
        browser
            .setValue(signUp.name, data.signName)
            .pause(2000)
            .setValue(signUp.email, data.email)
            .pause(2000)
            .click(signUp.submit)
    },
    volunteerSignUpBad: (data, browser) => {
        let signUp = selectors.supportUsScreen.VolunteerSignUp
        browser
            .setValue(signUp.name, data.name)
            .pause(2000)
            .setValue(signUp.email, data.email)
            .pause(2000)
            .click(signUp.submit)

    }
}