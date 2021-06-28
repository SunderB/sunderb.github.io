const events = [
    {
        "datetime": "2021-06-27 16:00",
        "name": "Opening Ceremony",
        "url": "http://twitch.tv/mlh"
    },
    {
        "datetime": "2021-06-27 18:00",
        "name": "The Future of Tech Education Panel",
        "url": "https://organize.mlh.io/participants/events/7111-the-future-of-tech-education-panel"
    },
    {
        "datetime": "2021-06-27 20:00",
        "name": "Create a Starter Pack for Someone Else",
        "url": "https://organize.mlh.io/participants/events/7048-create-a-starter-pack-for-someone-else"
    },
    {
        "datetime": "2021-06-28 00:00",
        "name": "Sketchful.io ",
        "url": "https://organize.mlh.io/participants/events/7078-sketchful-mini-event"
    },
    {
        "datetime": "2021-06-28 06:30",
        "name": "Intro to Threat Hunting using Elastic Security",
        "url": "https://organize.mlh.io/participants/events/7097-introduction-to-threat-hunting-using-elastic-security"
    },
    {
        "datetime": "2021-06-28 09:00",
        "name": "Sketchful.io",
        "url": "https://organize.mlh.io/participants/events/7080-sketchful-mini-event"
    },
    {
        "datetime": "2021-06-28 13:00",
        "name": "Build a Calculator",
        "url": "https://organize.mlh.io/participants/events/7049-build-a-calculator"
    },
    {
        "datetime": "2021-06-28 16:00",
        "name": "Leaderboard Update",
        "url": "http://twitch.tv/mlh"
    },
    {
        "datetime": "2021-06-28 17:00",
        "name": "!Light",
        "url": "https://organize.mlh.io/participants/events/7081-light"
    },
    {
        "datetime": "2021-06-28 18:00",
        "name": "Build and Deploy a Full Stack Web App with AWS",
        "url": "https://organize.mlh.io/participants/events/7098-build-and-deploy-a-full-stack-web-app-with-aws"
    },
    {
        "datetime": "2021-06-28 23:00",
        "name": "Former Hacker Panel",
        "url": "https://organize.mlh.io/participants/events/7114-advice-from-former-hackers"
    },
    {
        "datetime": "2021-06-29 00:00",
        "name": "Create a Reminder App",
        "url": "https://organize.mlh.io/participants/events/7050-create-a-reminder-application"
    },
    {
        "datetime": "2021-06-29 06:30",
        "name": "Create a Health App",
        "url": "https://organize.mlh.io/participants/events/7051-create-a-health-app"
    },
    {
        "datetime": "2021-06-29 13:00",
        "name": "!Light",
        "url": "https://organize.mlh.io/participants/events/7082-light"
    },
    {
        "datetime": "2021-06-29 16:00",
        "name": "Leaderboard Update",
        "url": "http://twitch.tv/mlh"
    },
    {
        "datetime": "2021-06-29 17:00",
        "name": "Keynote from MLH CEO and Co-Founder Swift ",
        "url": "https://organize.mlh.io/participants/events/7150-keynote-from-mlh-ceo-and-co-founder-swift"
    },
    {
        "datetime": "2021-06-29 18:00",
        "name": "Create a Hack to Help you Travel",
        "url": "https://organize.mlh.io/participants/events/7074-create-a-hack-to-help-you-travel"
    },
    {
        "datetime": "2021-06-29 22:00",
        "name": "Chrome Dino",
        "url": "https://organize.mlh.io/participants/events/7083-chrome-dino"
    },
    {
        "datetime": "2021-06-30 01:00",
        "name": "Introduction to Threat Hunting using Elastic Security",
        "url": "https://organize.mlh.io/participants/events/7100-introduction-to-threat-hunting-using-elastic-security"
    },
    {
        "datetime": "2021-06-30 15:00",
        "name": "MLH Fellowship Q&A",
        "url": "https://organize.mlh.io/participants/events/7112-mlh-fellowship-q-a-with-the-team"
    },
    {
        "datetime": "2021-06-30 06:30",
        "name": "Chrome Dino",
        "url": "https://organize.mlh.io/participants/events/7084-chrome-dino"
    },
    {
        "datetime": "2021-06-30 13:00",
        "name": "Rickroll Someone using Tech",
        "url": "https://organize.mlh.io/participants/events/7052-rickroll-someone-using-your-favorite-tech"
    },
    {
        "datetime": "2021-06-30 16:00",
        "name": "Leaderboard Update",
        "url": "http://twitch.tv/mlh"
    },
    {
        "datetime": "2021-06-30 18:00",
        "name": "Cup Stacking",
        "url": "https://organize.mlh.io/participants/events/7094-cup-stacking"
    },
    {
        "datetime": "2021-06-30 22:00",
        "name": "Redesign your portfolio",
        "url": "https://organize.mlh.io/participants/events/7053-develop-or-redesign-your-portfolio-website"
    },
    {
        "datetime": "2021-07-01 00:00",
        "name": "Create a graphic about a misconception in tech",
        "url": "https://organize.mlh.io/participants/events/7055-create-a-graphic-about-a-misconception-in-tech"
    },
    {
        "datetime": "2021-07-01 07:30",
        "name": "Cup Stacking",
        "url": "https://organize.mlh.io/participants/events/7095-cup-stacking"
    },
    {
        "datetime": "2021-07-01 10:00",
        "name": "Build and Deploy a Full Stack Web App with AWS",
        "url": "https://organize.mlh.io/participants/events/7099-build-and-deploy-a-full-stack-web-app-with-aws"
    },
    {
        "datetime": "2021-07-01 15:00",
        "name": "Diversity in Tech Panel",
        "url": "https://organize.mlh.io/participants/events/7115-diversity-in-tech-panel"
    },
    {
        "datetime": "2021-07-01 16:00",
        "name": "Leaderboard Update",
        "url": "http://twitich.tv/mlh"
    },
    {
        "datetime": "2021-07-01 18:00",
        "name": "Create a Twitch Bot",
        "url": "https://organize.mlh.io/participants/events/7063-create-a-twitch-bot"
    },
    {
        "datetime": "2021-07-01 23:00",
        "name": "Telestrations",
        "url": "https://organize.mlh.io/participants/events/7085-telestrations"
    },
    {
        "datetime": "2021-07-02 08:00",
        "name": "Telestrations",
        "url": "https://organize.mlh.io/participants/events/7086-telestrations"
    },
    {
        "datetime": "2021-07-02 13:00",
        "name": "Create a 3D model",
        "url": "https://organize.mlh.io/participants/events/7057-create-a-3d-model"
    },
    {
        "datetime": "2021-07-02 15:00",
        "name": "Women and Diverse Genders in Tech Panel",
        "url": "https://organize.mlh.io/participants/events/7113-women-and-diverse-genders-in-tech-panel"
    },
    {
        "datetime": "2021-07-02 16:00",
        "name": "Leaderboard Update",
        "url": "http://twitch.tv/mlh"
    },
    {
        "datetime": "2021-07-02 19:00",
        "name": "INIT Party",
        "url": "https://organize.mlh.io/participants/events/7087-init-party"
    },
    {
        "datetime": "2021-07-02 20:00",
        "name": "Use Web Scraping",
        "url": "https://organize.mlh.io/participants/events/7059-use-web-scraping"
    },
    {
        "datetime": "2021-07-03 00:00",
        "name": "INIT Party",
        "url": "https://organize.mlh.io/participants/events/7088-init-party"
    },
    {
        "datetime": "2021-07-03 16:00",
        "name": "Leaderboard Update",
        "url": "http://twitch.tv/mlh"
    },
    {
        "datetime": "2021-07-03 19:00",
        "name": "Explore a Buzzword Topic",
        "url": "https://organize.mlh.io/participants/events/7058-explore-a-buzzword-topic"
    },
    {
        "datetime": "2021-07-03 21:00",
        "name": "Hacker Trivia ",
        "url": "https://organize.mlh.io/participants/events/7089-hacker-trivia"
    },
    {
        "datetime": "2021-07-04 00:00",
        "name": "Try a Technology you\u00e2\u0080\u0099ve been intimidated by",
        "url": "https://organize.mlh.io/participants/events/7060-try-a-technology-you-ve-been-intimidated-by"
    },
    {
        "datetime": "2021-07-04 05:00",
        "name": "Hacker Trivia ",
        "url": "https://organize.mlh.io/participants/events/7090-hacker-trivia"
    },
    {
        "datetime": "2021-07-04 16:00",
        "name": "Leaderboard Update",
        "url": "http://twitch.tv/mlh"
    },
    {
        "datetime": "2021-07-04 20:00",
        "name": "Design an outfit for the new season mascot",
        "url": "https://organize.mlh.io/participants/events/7091-design-an-outfit-for-the-new-season-mascot"
    },
    {
        "datetime": "2021-07-04 21:00",
        "name": "Create a Browser Extension",
        "url": "https://organize.mlh.io/participants/events/7061-create-a-browser-extension"
    },
    {
        "datetime": "2021-07-05 01:00",
        "name": "Explore a new Language",
        "url": "https://organize.mlh.io/participants/events/7062-explore-a-new-language"
    },
    {
        "datetime": "2021-07-05 14:00",
        "name": "Design an Outfit for the New Season Mascot",
        "url": "https://organize.mlh.io/participants/events/7116-design-an-outfit-for-the-new-season-mascot"
    },
    {
        "datetime": "2021-07-05 16:00",
        "name": "Closing Ceremony",
        "url": "http://twitch.tv/mlh"
    }
]

function populate_calendar() {
  var calendar = document.getElementsByClassName("calendar")[0];
  console.log(calendar);
}

window.addEventListener('load', populate_calendar);
//
// console.log(result.crawler.pageData.queryResults);
// var data = {};
// var embed = [];
//
// for (let i = 0; i < result.crawler.pageData.queryResults[0].length; i += 1) {
//   var htmlDoc = new JSDOM(result.crawler.pageData.queryResults[0][i].html);
//
//   var date = htmlDoc.window.document.getElementsByClassName("sub-head-2 white")[0].innerHTML;
//
//   var activities = []
//   var list = htmlDoc.window.document.getElementsByClassName("schedule-cms-item");
//   for (let j = 0; j < list.length; j += 1) {
//     var time = list[j].getElementsByClassName("schedule-cms-time")[0].innerHTML;
//     var activity = list[j].getElementsByClassName("sch-link")[0];
//     activities.push(`${time} - [${activity.innerHTML}](${activity.href})`);
//   }
//   data[date] = activities
//
//   embed.push({
//     name: `${date}`,
//     value: activities.join("\n"),
//   });
//
// }
