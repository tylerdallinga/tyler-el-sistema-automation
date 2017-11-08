module.exports = {
    navigationTabs: {
        top: {
            home: 'a[href="/home"]',
            calandar: 'a[href="/calendar"]',
            aboutUs: 'a[href="/about"]',
            media: 'a[href="/media"]',
            blog: 'a[href="/blog"]',
            supportUs: 'a[href="/support"]'
            // tag: 'a',
            // text: {
            //     home: 'Home',
            //     calandar: 'Calendar',
            //     aboutUs: 'About Us',
            //     media: 'Media',
            //     blog: 'Blog',
            //     supportUs: 'Support Us'
        },
        bottom: {
            bottomOfPage:'div[class=footer-container]',
            secondChildTag:'li:nth-child(2)',
            tag:'li',
            text: {
                home: 'Home',
                calandar: 'Calendar',
                aboutUs: 'About Us',
                ourTeam: 'Our Team',
                volunteer: 'Volunteer',
                donate: 'Donate'
            },
        },
    },
    contactUs: {
        button: 'input[class=contact-us]'
    },
    stayConnected: {
        phoneNumberBox: 'input[type=tel]',
        signUpBox: 'input[value=Sign-Up]'
    },
    socialMediaTabs: {
        homeScreenTabs: {
            faceBook: 'img[alt=Facebook Icon]',
            twitter: 'img[alt=Twitter Icon]',
            linkedin: 'img[alt=Linkedin Icon]'
        },
        bottomScreentabs: {
            faceBook: 'img[alt=Facebook Icon]',
            twitter: 'img[alt=Twitter Icon]',
            linkedin: 'img[alt=Linkedin Icon]'
        }
    },
    homeScreen: {
        seeMore: 'input[value="See More"]',
        supportUsButton: 'input[value="Support Us"]',
        readMore: 'input[value="Read More"]',
        regestrationBox: 'div[class=registration-card]'
    },
    notifications: {
        signUpButton: 'input[value="Sign up"]',
        phoneNumber: 'input[type=tel]',
        classDropDown: 'div[class=downwards-arrow]',
        classOptions: {
            jazzViolin: 'label[for="jazz-violin"]',
            strings: 'label[for="strings"]',
            bucketBand: 'label[for="bucket-band"]'
        },
        performances: 'label[for="performances"]',
        events: 'label[for="events"]',
        all: 'label[for="all"]',
        xButton: 'div[class=exit-button]',
        submit: 'input[type=submit]'

    },
    aboutUsScreen: {
        loadMorePhotos: {
            whoWeAre: 'div[class=who-we-are-header]',
            missionStatment: 'div[class=mission-header]',
            curriculum: 'div[class=curriculum-header]',
            becomeVolunteer: 'div[class=connect-volunteer]',
            connectButton: {
                tag: 'img',
                text: 'Connect'
            },
            button: 'img[class="readmore"]'
        },
        volunteers: {
            tag: 'div[class=volunteer-name]',
            volunteer1: 'Charlie Brown',
            volunteer2: 'Peppermint Patty',
            volunteer3: 'Lucy van Pelt',
            volunteer4: 'Franklin',
            volunteer5: 'Snoopy',
            volunteer6: 'Linus van Pelt'
        },
    },
    mediaScreen: {
        photoVideoSwitch: 'img[class=switch-button]',
        loadMorePhotos: 'li[class=load-more-button]',
        returnToTop: 'li[class=back-to-top]',
        photos: {
            oddPhotos: {
                tag: 'div[class=media-blocks col-md-2]',
                text: '7 Days'
            },
            evenPhotos: {
                tag: 'div[class=media-blocks col-md-4]',
                text: '25 Days'
            }
        },

    },
    blogScreen: {
        blog: {
            tag: 'div[class=box-link]',
            text: 'El Sistema Brings The Heat'
        }
    },
    assersionTabs: {
        home:'div[class="home-page"]',
        calandar:'section[class="notification-hero"]',
        aboutUs:'div[class="who-we-are-header"]',
        media:'div[class="media-header-container"]',
        blog:'div[class="blog-nav-header"]',
        supportUs:'div[class="donate-page-header"]'

    },
    supportUsScreen: {
        donate:{
           email:'input[class="donate-money-email"]',
           emailError:'div[class="donate-error-message"]',
           enterAmount:'input[type="number"]',
           amountError:'div[class="donate-error-message"',
           creditCard:'input[class="donate-money-card"]',
           creditError:'div[class="donate-error-message"',
           cvc:'input[class="donate-money-cvc"]',
           cvcError:'div[class="donate-error-message"',
           expiration:'input[type="date"]',
           expirationError:'div[class="donate-error-message"',
           submit:'button[class="donate-btn"]',
           payPal:'div[class="paypal-btn"]'             
        },
        donateInstrument:{
            address:'p[class="donate-instrument-paragraph"]',
        },
        VolunteerSignUp:{
            name:'input[type=text]',
            email:'input[type="email":nth-child(2]',
            submit:'button[class="volunteer-donate-btn"]'

        }

    }
}
