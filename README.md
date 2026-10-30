# Pithyx app: blank

The smallest [Pithyx](https://github.com/pithyx/pithyx) app: plain TypeScript with Vite and `@pithyx/sdk`, no backend.
It greets the signed-in user in their language. Use it as the start of your own app ("Use this template" on GitHub).

Part of Pithyx by Schecher1 (https://github.com/Schecher1).

When the app grows a user interface, follow the [design guidelines](https://pithyx.org/docs/developers/apps/design/)
and build it from the components and patterns of [`@pithyx/ui`](https://pithyx.org/docs/sdk/ui/) (the showcase
template shows each of them), so it looks and behaves like the rest of the desktop.

## Start

You need Node.js 24 or newer.

```sh
npm install
npm run dev     # the app in the mock desktop of pithyx dev, with hot reload
npm test        # build, pithyx validate and the unit tests
npm run pack    # writes <id>-<version>.pithyxapp
```

Install the `.pithyxapp` on your box in the Store (**Installed**, **Install from file**).

## Make it yours

1. Pick an id in `pithyx.json`: your domain reversed plus the app's name, such as `com.example.notes`.
2. Set the name, description, author and window size there.
3. Replace `icon.svg` (square, at most 64 KB, the important part inside the inner 80 percent).
4. Write your app in `src/`; texts go to `i18n/en.json` (and other languages).

## Layout

- `pithyx.json`: the manifest, checked against `@pithyx/sdk/schema/manifest.v2.schema.json`.
- `icon.svg`: the app's icon.
- `index.html`, `src/`: the frontend; `npm run build` writes it to `dist/`.
- `i18n/`: the app's texts per language.
- `.github/workflows/ci.yaml`: tests and packs on every push, and attaches the package to a GitHub release.

## Bring it to a box

There are two ways:

- **A catalog**, for everybody else's boxes: open a pull request that adds the app's source as `apps/<id>/` to a
  catalog repository, for example `pithyx/apps-community` (see its CONTRIBUTING.md), with `pithyx` (the Pithyx
  versions it runs on) and `license` in `pithyx.json` and your GitHub login in `maintainers.json`. After the review, the
  catalog's CI builds the app from the merged commit and publishes it; boxes install it from the Store and get its
  updates. You never publish a package or an image yourself.
- **A sideload**, for your own box and for testing: `npm run pack` writes the `.pithyxapp`; install it in the Store
  (**Installed**, **Install from file**). A sideload is marked unverified and gets no updates unless a catalog has the same id.

## License

MIT
