const path = require("path");
const fs = require("fs");

let special;

const WriteReadMe = async () => {
  //Get ReadMe path
  const ReadMe = path.join(__dirname, "..", "README.md");
  const date = new Date();

  mm = date.getMonth() + 1;

  if (mm === 12) special = ["⛄", "❄", "🎄"];

  //Creating the text what we gonna save on ReadMe file
  const text = `## Hi there 👋 <img align="right" src="https://avatars.githubusercontent.com/u/54510753?s=400&u=e4d15ddfcc5587e3c7f12391bd15dd0d03cc0090&v=4" width="200" />
I'm **Birahe**, A developer from Turkey. I like to code back-end applications and games with Unity. Some of my open source projects are in my profile. Make sure to check them out.
  
Thanks for visiting my github profile. Have a great day ahead!
  
<h2 align="center"> ${special ? special[0] : "✨"} About Me ${
    special ? special[0] : "✨"
  }</h2>

\`\`\`js
const Birahe = {
    FavoriteLanguage: "Typescript/Javascript",
    OpenedIssues: {{ ISSUES }},
    OpenedPullRequests: {{ PULL_REQUESTS }},
    TotalCommits: {{ COMMITS }},
    Stars: {{ STARS }},
    Repositories: {
       Created: {{ REPOSITORIES }},
       Contributed: {{ REPOSITORIES_CONTRIBUTED_TO }}
    },
}; // What an awesome object, huh?
\`\`\`
  
<h2 align="center"> ${special ? special[1] : "🚀"} My Stats ${
    special ? special[1] : "🚀"
  }</h2>
<p align="center">
<img src="https://github-readme-streak-stats.herokuapp.com/?user=Birahe&theme=tokyonight">
</p>
<details>
  <summary>
      Even more stats
  </summary>
  <p align="center">
    <img src="https://github-profile-trophy.vercel.app/?username=Birahe&theme=dracula">
    <img src="https://github-readme-stats.vercel.app/api?username=Birahe&theme=tokyonight&count_private=true&show_icons=true&include_all_commits=true">
    <img src="https://github-readme-stats.vercel.app/api/wakatime?username=Birahe&theme=synthwave">
  </p>
</details>
  
<!-- Last updated on ${date.toString()} ;-;-->
<i>Last updated on ${date.getDate()}${
    date.getDate() === 1
      ? "st"
      : date.getDate() === 2
      ? "nd"
      : date.getDate() === 3
      ? "rd"
      : "th"
  } ${
    [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][date.getMonth()]
  } ${date.getFullYear()} using magic</i> ${special ? special[2] : "✨"}`;

  //Saving on readme.md
  fs.writeFileSync(ReadMe, text);
};

(() => {
  WriteReadMe();
})();
