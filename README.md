# Welcome to the source code of [Bhen.be](https://bhen.be)

This website is developped with [Astro](https://astro.build) using [DatoCMS](https://www.datocms.com/) as CMS and hosted by [Netlify](https://netlify.com)

## 🚀 Project Structure

```
/
├── public (for everything that doesn't need to be processed)
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── queries/
│   └── styles/
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
|:----------------|:--------------------------------------------|
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://github.com/snowpackjs/astro) or jump into our [Discord server](https://astro.build/chat).
