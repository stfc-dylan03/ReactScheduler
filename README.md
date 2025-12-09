[![Issues][issues-shield]][issues-url]

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
        <a href="#getting-started">Getting Started</a>
    </li>
    <li>
      <a href="#findings">Findings</a>
      <ul>
        <li><a href="#hot-reload">Hot Reload</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This repo was created to house a mock up of the scheduler made in Next.js (a React framework) using Typescript.

This was created as part of the RSS try it out day, where we take a day away from normal work to trial and test new technologies that could be beneficial to the team/division now or in the future.

Currently each commit highlights a new feature added and shows how to do something. This is subject to change in the future.

### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]


<!-- GETTING STARTED -->
## Getting Started

1. Clone the repo
2. Navigate to `/react-scheduler-test`
3. Run the command `npm run dev`


<!-- FINDINGS -->
## Findings

### Hot Reload

Hot reload is a feature where the web page updates instantly when a change is made to the code without requiring a full refresh/rebuild. It allows code to change whilst the app is still running.

This allows for much faster development which is extremely beneficial.

Due to the tech stack being relatively simple, hot reload works seamlessley (except when there are build errors, then hot reload pauses until these errors are resolved). However, when more complex technologies and languages are introduced there is a possibility of hot reload no longer working, or at least not as well/efficiently.

<!-- MARKDOWN LINKS & IMAGES -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[issues-shield]: https://img.shields.io/github/issues/stfc-dylan03/ReactScheduler.svg?style=for-the-badge
[issues-url]: https://github.com/stfc-dylan03/ReactScheduler/issues
