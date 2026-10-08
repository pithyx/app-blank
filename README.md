# Pithyx app: blank

The smallest [Pithyx](https://github.com/pithyx/pithyx) app: plain TypeScript with Vite and `@pithyx/sdk`, no backend.
It greets the signed-in user in their language. Use it as the start of your own app ("Use this template" on GitHub).

## Start

```sh
npm install
npm run dev     # the app in the mock desktop of pithyx dev, with hot reload
npm test        # build, pithyx validate and the unit tests
npm run pack    # writes <id>-<version>.pithyxapp
```

Install the `.pithyxapp` on your box in the Store with "Install from file".

## Make it yours

1. Pick an id in `pithyx.json`: your domain reversed plus the app's name, such as `com.example.notes`.
2. Set the name, description, author and window size there.
3. Replace `icon.svg` (square, at most 64 KB, the important part inside the inner 80 percent).
4. Write your app in `src/`; texts go to `i18n/en.json` (and other languages).

## Layout

- `pithyx.json`: the manifest, checked against `@pithyx/sdk/schema/manifest.v1.schema.json`.
- `icon.svg`: the app's icon.
- `index.html`, `src/`: the frontend; `npm run build` writes it to `dist/`.
- `i18n/`: the app's texts per language.
- `.github/workflows/ci.yml`: tests and packs on every push, and attaches the package to a GitHub release.

## License

MIT
