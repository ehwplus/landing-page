# EHW+, Ihre ZΓ€hlerstands-App fΓΌr iOS/Android

<p align="center">
  <a href="https://creativedesignsguru.com/demo/nextjs-landing-page/"><img src="public/assets/images/nextjs-landing-page-banner.png?raw=true" alt="Next js starter banner"></a>
</p>

π Landing Page theme written in Next.js, Tailwind CSS and TypeScript β‘οΈ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, VSCode, Netlify, PostCSS, Tailwind CSS.

Clone this project and use it to create your own [Next.js](https://nextjs.org) project. You can check a [Next js templates demo](https://creativedesignsguru.com/demo/nextjs-landing-page/).

### DEMO

[![Nextjs Landing Page Template Screenshot](public/assets/images/nextjs-landing-page-screenshot.png?raw=true)](https://creativedesignsguru.com/demo/nextjs-landing-page/)

Check out our [live demo](https://creativedesignsguru.com/demo/nextjs-landing-page/).

### Features

Developer experience first:

- π₯ [Next.js](https://nextjs.org) for Static Site Generator
- π¨ Integrate with [Tailwind CSS](https://tailwindcss.com)
- π PostCSS for processing Tailwind CSS and integrated to `styled-jsx`
- π Type checking [TypeScript](https://www.typescriptlang.org)
- β Strict Mode for TypeScript and React 17
- βοΈ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- π  Code Formatter with [Prettier](https://prettier.io)
- π¦ Husky for Git Hooks
- π« Lint-staged for running linters on Git staged files
- π VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- π€ SEO metadata, JSON-LD and Open Graph tags with Next SEO
- βοΈ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- π±οΈ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- π Include a FREE theme
- π― Maximize lighthouse score

Built-in feature from Next.js:

- β Minify HTML & CSS
- π¨ Live reload
- β Cache busting

### Included Components

- Navbar
- Hero
- Features
- CTA banner
- Footer

Find more components in our [premium NextJS themes](https://creativedesignsguru.com/category/nextjs/).

### Philosophy

- Minimal code
- SEO-friendly
- π Production-ready

### Nextless.js SaaS Boilerplate

Build your SaaS product faster with [React SaaS Boilerplate](https://nextlessjs.com).

[![React SaaS Boilerplate Next.js](https://creativedesignsguru.com/assets/images/themes/next-js-saas-starter-kit.jpg)](https://nextlessjs.com)

### Premium Themes

| [Green Nextjs Landing Page Template](https://creativedesignsguru.com/landing-green-modern-nextjs-theme/) | [Purple Saas Nextjs Theme](https://creativedesignsguru.com/landing-purple-modern-react-theme/) |
| --- | --- |
| [![Green Nextjs Landing Page Template](https://creativedesignsguru.com/assets/images/themes/landing-green-modern-nextjs-theme-xs.png)](https://creativedesignsguru.com/landing-green-modern-nextjs-theme/) | [![Blue Landing Page Nextjs Theme](https://creativedesignsguru.com/assets/images/themes/landing-blue-modern-nextjs-theme-xs.png)](https://creativedesignsguru.com/landing-blue-modern-react-theme/) |

Find more [Nextjs Templates](https://creativedesignsguru.com/category/nextjs/).

### Requirements

- Node.js and npm

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project. For your information, Next JS need to take some time to compile the project for your first time.

```
.
βββ README.md            # README file
βββ next.config.js       # Next JS configuration
βββ public               # Public folder
β   βββ assets
β       βββ images       # Image used by default template
βββ src
β   βββ background       # Atomic background component
β   βββ button           # Atomic button component
β   βββ cta              # Atomic cta component
β   βββ feature          # Atomic feature component
β   βββ footer           # Atomic footer component
β   βββ hero             # Atomic hero component
β   βββ layout           # Atomic layout component
β   βββ navigation       # Atomic navigation component
β   βββ pages            # Next JS pages
β   βββ styles           # PostCSS style folder with Tailwind
β   βββ templates        # Default template
β   βββ utils            # Utility folder
βββ tailwind.config.js   # Tailwind CSS configuration
βββ tsconfig.json        # TypeScript configuration
```

### Customization

You can easily configure the theme. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/global.css`: your CSS file using Tailwind CSS
- `utils/AppConfig.ts`: configuration file
- `src/pages/index.tsx`: the index page of the theme that uses the `Base` component
- `src/template/Base.tsx`: the `Base` component using component blocks
- `src/templates/*`: the list of component blocks
- `src/*`: other folders in src are the atomic components used by components blocks

Here is the layer:

- the entry point: `index.tsx` in `src/pages`
- the `Base` template: `Base.tsx` in `src/templates`
- use component blocks from `src/templates/*`
- use atomic components from `src/*`

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

Now, your theme is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template)

### Deploy to Vercel

Deploy this Next JS Boilerplate on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fixartz%2FNext-JS-Landing-Page-Starter-Template)

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright Β© 2022

See [LICENSE](LICENSE) for more information.