![electron-vite-template-github-card](https://user-images.githubusercontent.com/43225384/196135599-585afdc5-9905-4400-bb02-ab0e7720da50.png)


# Electron + Vite + React + TypeScript Template

A template for using electron quickly.<br/>
Please understand that the code and explanation are mainly written in Korean. ๐ฅฒ

<br />

## ํน์ง๋ค ๋๋ฌ๋ณด๊ธฐ
- electron & vite๋ฅผ ์ฌ์ฉํด ๋น ๋ฅธ ๊ฐ๋ฐ, ๋น๋๊ฐ ๊ฐ๋ฅํ TypeScript ํ๊ฒฝ
- ์ฑ์ ํ์์ ์ธ ์์ ์๋ ์๋ฐ์ดํธ, ์ ์ฅ์, ๋ก๊ทธ ๋ฑ ์ฌ์ ๊ตฌ์ฑ
- ํ์ผ ์์คํ ๋ผ์ฐํ ๊ธฐ๋ฅ (Next.js์์ ์ฌ์ฉํ๋ ๋ฐฉ์)
- electron ๊ธฐ๋ฅ ๊ฐ๋ฐ์ modules๋ก ๋ถ๋ฆฌ ๊ฐ๋ฐ ๊ฐ๋ฅํ๋๋ก ๊ตฌ์ฑ (๊ด์ฌ์ฌ ๋ถ๋ฆฌ ๋ฐ ์ฑ์ ์ฌ๋ฌ ์ํ๋ค์ ๊ณต์ ํ๊ธฐ ์ํด modules๋ก ์ฒ๋ฆฌ) (autoload ์ฒ๋ฆฌ)
- deeplink ์ฒ๋ฆฌ (`modules/deepLink/resolvers` ์์) (autoload ์ฒ๋ฆฌ)
- ๋น ๋ฅธ ๊ฐ๋ฐ์ ์ํ ํ์ผ ์์ฑ๊ธฐ (`yarn g` ๋ช๋ น์ด๋ก ์ฌ์ฉ๊ฐ๋ฅ)
- Windows, MacOS ํฌ๋ก์คํ๋ซํผ์ ๊ณ ๋ คํ ๊ฐ๋ฐ

<br />

## ์ฌ์ฉํ ํ๋ ์์ํฌ, ๋ผ์ด๋ธ๋ฌ๋ฆฌ

- App framework: [`electron`](https://www.electronjs.org/)
- App build tool: [`electron-builder`](https://www.electron.build/)
- App storage: [`electron-store`](https://github.com/sindresorhus/electron-store)
- App auto updater: [`electron-updater`](https://www.electron.build/auto-update)
- Bundle tool: [`vite`](https://vitejs.dev/)
- Frontend framework: `react` + `typescript`
- Code style: `eslint` + `prettier` + [`@trivago/prettier-plugin-sort-imports`](https://github.com/trivago/prettier-plugin-sort-imports)
- File system based router: [`react-router-dom v6`](https://reactrouter.com/docs/en/v6) + custom (src/components/FileSystemRoutes)
- CSS: [`styled-components`](https://styled-components.com/)
- State management library: [`recoil`](https://hookstate.js.org/)
- Date: [`dayjs`](https://day.js.org/)
- Form value handle: [`formik`](https://formik.org/)

<br />

## ์์ํ๊ธฐ

> ์ฌ์ฉํ๊ธฐ ์  ๋ ์ด์์์ด๋ ํน์  ํจํค์ง๋ค์ด ํ์์๋ค๋ฉด ์ ๊ฑฐํ๊ณ  ์์ํ์๋ ๋ฉ๋๋ค.

#### dev mode

```bash
yarn dev
```

#### vite & electron build (ํ์ฌ OS๊ธฐ์ค)

```bash
yarn build
```

#### vite & electron build (๋ชจ๋  OS๊ธฐ์ค)

```bash
yarn build:all
```

<br />

## ์คํฌ๋ฆฐ์ท๋ค
<img width="1718" alt="image" src="https://user-images.githubusercontent.com/43225384/196127143-2fd2fb65-5858-4bda-87a8-97c6e0487d8f.png">
<img width="1718" alt="image" src="https://user-images.githubusercontent.com/43225384/196126603-388acf2c-760b-45f2-8738-5c1d2a4b4892.png">
<img width="1718" alt="image" src="https://user-images.githubusercontent.com/43225384/196126770-08f75a7c-653d-4264-8c38-eb147c55193d.png">

