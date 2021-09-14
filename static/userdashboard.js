let feedCreateBtn = document.getElementById('feedCreateBtn');
let feedForm = document.getElementById('feedForm');

// function to submit rss feed
feedCreateBtn.addEventListener('click', () => {
    feedForm.submit();
    feedForm.reset();
});

// avoids form resubmission
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// application theme
let themeChecker = localStorage.getItem('theme');
let leftSideBar = document.getElementById('leftSideBar');
let centerContainer = document.getElementById('centerContainer');
let rightSideBar = document.getElementById('rightSideBar');
let upper = document.getElementById('upper');
let lower = document.getElementById('lower');
let logo = document.getElementById('Logo');

// function to apply theme on devices having width greater than 992px
const applicationTheme = () => {
    let card = document.querySelectorAll('#card');
    let feedTitle = document.querySelectorAll("#feedTitle");
    let newsChannelsSectors = document.querySelectorAll("#newsChannelsSectors");
    if (themeChecker === "true") {
        // white theme
        logo.style.cssText = "color:rgb(246, 246, 246)";
        leftSideBar.style.cssText = "background-color:#f6f6f6";
        centerContainer.style.cssText = "background-color:#ffffff; color:#111111;";
        Array.from(card).forEach((element) => {
            element.style.backgroundImage = "linear-gradient(to bottom left, rgba(134,122,233,1), rgba(134,122,233,0))";
        });
        Array.from(feedTitle).forEach((element) => {
            element.style.cssText = "background:linear-gradient(rgb(81,18,129), rgb(121, 82, 179)); background-clip:text; -webkit-background-clip:text; -webkit-textfill-color:transparent;";
        });
        Array.from(newsChannelsSectors).forEach((element) => {
            element.style.cssText = "background:linear-gradient(rgb(81,18,129), rgb(121, 82, 179)); background-clip:text; -webkit-background-clip:text; -webkit-textfill-color:transparent;";
        });
        rightSideBar.style.backgroundColor = "#f6f6f6";
        lower.style.backgroundColor = "#f6f6f6";
        upper.style.backgroundColor = "#222222";
        themeChecker = "false";
        localStorage.setItem('theme', themeChecker);
    } else {
        // dark theme
        logo.style.cssText = "color:rgb(81, 18, 129)";
        leftSideBar.style.backgroundColor = "#222222";
        centerContainer.style.cssText = "background-color:#111111; color:#f6f6f6";
        Array.from(card).forEach((element) => {
            element.style.backgroundImage = "linear-gradient(to bottom left, rgba(51, 50, 50, 1), rgba(51, 51, 50, 1))";
        });
        Array.from(feedTitle).forEach((element) => {
            element.style.cssText = "background:linear-gradient(rgb(245, 245, 245), rgb(246, 246, 246)); background-clip:text; -webkit-background-clip:text; -webkit-text-fill-color:transparent";
        });
        Array.from(newsChannelsSectors).forEach((element) => {
            element.style.cssText = "background:linear-gradient(rgb(245, 245, 245), rgb(246, 246, 246)); background-clip:text; -webkit-background-clip:text; -webkit-text-fill-color:transparent";
        });
        rightSideBar.style.backgroundColor = "#222222";
        lower.style.backgroundColor = "#222222";
        upper.style.backgroundColor = "#511281";
        themeChecker = "true";
        localStorage.setItem('theme', themeChecker);
    }
}

// function to display user preferred theme on devices having width greater than 992px
function userApplicationTheme() {
    let card = document.querySelectorAll('#card');
    let feedTitle = document.querySelectorAll("#feedTitle");
    let newsChannelsSectors = document.querySelectorAll("#newsChannelsSectors");
    if (themeChecker === "false") {
        // white theme
        logo.style.cssText = "color:rgb(246, 246, 246)";
        leftSideBar.style.backgroundColor = "#f6f6f6";
        centerContainer.style.cssText = "background-color:#ffffff; color:#111111";
        Array.from(card).forEach((element) => {
            element.style.backgroundImage = "linear-gradient(to bottom left, rgba(134,122,233,1), rgba(134,122,233,0))";
        });
        Array.from(feedTitle).forEach((element) => {
            element.style.cssText = "background:linear-gradient(rgb(81,18,129), rgb(121, 82, 179)); background-clip:text; -webkit-background-clip:text; -webkit-textfill-color:transparent;";
        });
        Array.from(newsChannelsSectors).forEach((element) => {
            element.style.cssText = "background:linear-gradient(rgb(81,18,129), rgb(121, 82, 179)); background-clip:text; -webkit-background-clip:text; -webkit-textfill-color:transparent;";
        });
        rightSideBar.style.backgroundColor = "#f6f6f6";
        lower.style.backgroundColor = "#f6f6f6";
        upper.style.backgroundColor = "#222222";
    } else {
        // dark theme
        logo.style.cssText = "color:rgb(81, 18, 129)";
        leftSideBar.style.backgroundColor = "#222222";
        centerContainer.style.cssText = "background-color:#111111; color:#f6f6f6";
        Array.from(card).forEach((element) => {
            element.style.backgroundImage = "linear-gradient(to bottom left, rgba(51, 50, 50, 1), rgba(51, 51, 50, 1))";
        });
        Array.from(feedTitle).forEach((element) => {
            element.style.cssText = "background:linear-gradient(rgb(245, 245, 245), rgb(246, 246, 246)); background-clip:text; -webkit-background-clip:text; -webkit-text-fill-color:transparent";
        });
        Array.from(newsChannelsSectors).forEach((element) => {
            element.style.cssText = "background:linear-gradient(rgb(245, 245, 245), rgb(246, 246, 246)); background-clip:text; -webkit-background-clip:text; -webkit-text-fill-color:transparent";
        });
        rightSideBar.style.backgroundColor = "#222222";
        lower.style.backgroundColor = "#222222";
        upper.style.backgroundColor = "#511281";
    }
}

// function to apply theme on devices having width greater than 992px
if (screen.width >= 992) {
    userApplicationTheme();
}

// for mobile devices having width less than 992px
let mobileThemeChecker = localStorage.getItem('mobileTheme');
let mobileFeedBarButton = document.getElementById('mobileFeedBarButton');
let mobileMainContentContainer = document.getElementById('mobileMainContentContainer');
let mobileDarkThemeBtn = document.getElementById('mobileDarkThemeBtn');
let mobileHeader = document.getElementById('mobileHeader');
let mobileEnterFeedBar = document.getElementById('mobileEnterFeedBar');

// function to apply theme on devices having width less than 992px
function mobileApplicationTheme() {
    let card = document.querySelectorAll('#card');
    let feedTitle = document.querySelectorAll("#feedTitle");
    let newsChannelsSectors = document.querySelectorAll("#newsChannelsSectors");
    let applicationName = document.getElementById('applicationName');

    if (mobileThemeChecker === "true") {
        //white theme
        logo.style.cssText = "color:rgb(246, 246, 246)";
        mobileDarkThemeBtn.innerHTML = `
         <i class="fas fa-moon"></i>
        `;
        mobileMainContentContainer.style.cssText = "background-color:#ffffff; color:#111111";
        mobileHeader.style.backgroundColor = "rgb(120 25 184)";
        applicationName.style.color = "#f6f6f6";
        mobileEnterFeedBar.style.cssText = "background-color:#f6f6f6; color:rgba(81, 18, 129, 1); border-left-color:rgb(120, 25, 184);";
        mobileFeedBarButton.style.backgroundImage = "linear-gradient(to bottom left, rgba(81, 18, 129,1), rgba(81, 18, 129,1))";
        Array.from(card).forEach((element) => {
            element.style.backgroundImage = "linear-gradient(to bottom left, rgba(134,122,233,1), rgba(134,122,233,0))";
        });
        Array.from(feedTitle).forEach((element) => {
            element.style.cssText = "background:linear-gradient(rgb(81,18,129), rgb(121, 82, 179)); background-clip:text; -webkit-background-clip:text; -webkit-textfill-color:transparent;";
        });
        Array.from(newsChannelsSectors).forEach((element) => {
            element.style.cssText = "background:linear-gradient(rgb(81,18,129), rgb(121, 82, 179)); background-clip:text; -webkit-background-clip:text; -webkit-textfill-color:transparent;";
        });
        mobileThemeChecker = "false";
        localStorage.setItem('mobileTheme', mobileThemeChecker);
    } else {
        //dark theme
        logo.style.cssText = "color:rgb(81, 18, 129)";
        mobileDarkThemeBtn.innerHTML = `
         <i class="fas fa-sun"></i>
        `;
        mobileMainContentContainer.style.cssText = "background-color:#111111; color:#f6f6f6";
        mobileHeader.style.backgroundColor = "#222222";
        applicationName.style.color = "rgb(81, 18, 129)";
        mobileEnterFeedBar.style.cssText = "background-color:rgb(81, 18, 129); color:#f6f6f6; border-left-color:#222222";
        mobileFeedBarButton.style.backgroundImage = "linear-gradient(to bottom left, rgba(51, 50, 50, 1), rgba(51, 51, 50, 1))";
        Array.from(card).forEach((element) => {
            element.style.backgroundImage = "linear-gradient(to bottom left, rgba(51, 50, 50, 1), rgba(51, 51, 50, 1))";
        });
        Array.from(feedTitle).forEach((element) => {
            element.style.cssText = "background:linear-gradient(rgb(245, 245, 245), rgb(246, 246, 246)); background-clip:text; -webkit-background-clip:text; -webkit-text-fill-color:transparent";
        });
        Array.from(newsChannelsSectors).forEach((element) => {
            element.style.cssText = "background:linear-gradient(rgb(245, 245, 245), rgb(246, 246, 246)); background-clip:text; -webkit-background-clip:text; -webkit-text-fill-color:transparent";
        });
        mobileThemeChecker = "true";
        localStorage.setItem('mobileTheme', mobileThemeChecker);
    }
}

// function to apply user preferred theme on devices having width 992px
function mobileUserApplicationTheme() {
    let card = document.querySelectorAll('#card');
    let feedTitle = document.querySelectorAll("#feedTitle");
    let newsChannelsSectors = document.querySelectorAll("#newsChannelsSectors");
    let applicationName = document.getElementById('applicationName');
    if (mobileThemeChecker === "false") {
        // white theme
        logo.style.cssText = "color:rgb(246, 246, 246)";
        mobileDarkThemeBtn.innerHTML = `
         <i class="fas fa-moon"></i>
        `;
        mobileMainContentContainer.style.cssText = "background-color:#ffffff; color:#111111";
        mobileHeader.style.backgroundColor = "rgb(120 25 184)";
        applicationName.style.color = "#f6f6f6";
        mobileEnterFeedBar.style.cssText = "background-color:#f6f6f6; color:rgba(81, 18, 129, 1); border-left-color:rgb(120, 25, 184);";
        mobileFeedBarButton.style.backgroundImage = "linear-gradient(to bottom left, rgba(81, 18, 129,1), rgba(81, 18, 129,1))";
        Array.from(card).forEach((element) => {
            element.style.backgroundImage = "linear-gradient(to bottom left, rgba(134,122,233,1), rgba(134,122,233,0))";
        });
        Array.from(feedTitle).forEach((element) => {
            element.style.cssText = "background:linear-gradient(rgb(81,18,129), rgb(121, 82, 179)); background-clip:text; -webkit-background-clip:text; -webkit-textfill-color:transparent;";
        });
        Array.from(newsChannelsSectors).forEach((element) => {
            element.style.cssText = "background:linear-gradient(rgb(81,18,129), rgb(121, 82, 179)); background-clip:text; -webkit-background-clip:text; -webkit-textfill-color:transparent;";
        });
    } else {
        // dark theme
        logo.style.cssText = "color:rgb(81, 18, 129)";
        mobileDarkThemeBtn.innerHTML = `
         <i class="fas fa-sun"></i>
        `;
        mobileMainContentContainer.style.cssText = "background-color:#111111; color:#f6f6f6";
        mobileHeader.style.backgroundColor = "#222222";
        applicationName.style.color = "rgb(81, 18, 129)";
        mobileEnterFeedBar.style.cssText = "background-color:rgb(81, 18, 129); color:#f6f6f6; border-left-color:#222222";
        mobileFeedBarButton.style.backgroundImage = "linear-gradient(to bottom left, rgba(51, 50, 50, 1), rgba(51, 51, 50, 1))";
        Array.from(card).forEach((element) => {
            element.style.backgroundImage = "linear-gradient(to bottom left, rgba(51, 50, 50, 1), rgba(51, 51, 50, 1))";
        });
        Array.from(feedTitle).forEach((element) => {
            element.style.cssText = "background:linear-gradient(rgb(245, 245, 245), rgb(246, 246, 246)); background-clip:text; -webkit-background-clip:text; -webkit-text-fill-color:transparent";
        });
        Array.from(newsChannelsSectors).forEach((element) => {
            element.style.cssText = "background:linear-gradient(rgb(245, 245, 245), rgb(246, 246, 246)); background-clip:text; -webkit-background-clip:text; -webkit-text-fill-color:transparent";
        });
    }
}

// function to apply user preferred theme on devices having width less than 992px
if (screen.width < 992) {
    mobileUserApplicationTheme();
}

// to check whether input feed bar is open or not
let mobileInputBarDisplayChecker = true;

let mobileFeedForm = document.getElementById('mobileFeedForm');
mobileFeedBarButton.addEventListener('click', () => {
    if (screen.width < 576) {
        if (mobileInputBarDisplayChecker) {
            // checking application theme
            if (mobileThemeChecker === "false") {
                // for white theme
                mobileEnterFeedBar.style.cssText =
                    "animation: inputBarAnimation 1s linear 1 normal forwards; background-color:#f6f6f6; color:rgb(81, 18, 129); border-left-color:rgb(120, 25, 184)";
                mobileInputBarDisplayChecker = false;
            } else {
                // for dark theme
                mobileEnterFeedBar.style.cssText =
                    "animation: inputBarAnimation 1s linear 1 normal forwards; background-color:rgb(81, 18, 129); color:#f6f6f6; border-left-color:#222222";
                mobileInputBarDisplayChecker = false;
            }
        } else {
            // checking application theme
            if (mobileThemeChecker === "false") {
                // for white theme
                mobileEnterFeedBar.style.cssText = "animation: inputBarAnimationReverse 1s linear 1 reverse forwards; background-color:#f6f6f6; color:rgb(81, 18, 129); border-left-color:rgb(120, 25, 184)";
                mobileInputBarDisplayChecker = true;
            } else {
                // for dark theme
                mobileEnterFeedBar.style.cssText = "animation: inputBarAnimationReverse 1s linear 1 reverse forwards; background-color:rgb(81, 18, 129); color:#f6f6f6; border-left-color:#222222";
                mobileInputBarDisplayChecker = true;
            }
        }
    }
    // statements to submit rss feed
    if (mobileEnterFeedBar.value !== "") {
        mobileFeedForm.submit();
        mobileFeedForm.reset();
    }
});