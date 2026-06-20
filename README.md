# School

オンライン英語学習サービス向けのランディングページです。Astro と Tailwind CSS を使い、トップページをセクション単位のコンポーネントに分けて構成しています。

## 技術スタック

- Astro 6.3.3
- Tailwind CSS 4.3.0
- @tailwindcss/vite 4.3.0
- Node.js 22.12.0 以上
- npm

## ファイル構成

```text
.
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Contact.astro
│   │   ├── Courses.astro
│   │   ├── Curriculum.astro
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Recommend.astro
│   │   ├── Results.astro
│   │   ├── ServiceIcons.astro
│   │   ├── Teachers.astro
│   │   ├── Voice.astro
│   │   ├── WhyUs.astro
│   │   └── Youtube.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

## 主な役割

- `src/pages/index.astro`: トップページ。各セクションコンポーネントを読み込んで表示順を管理します。
- `src/layouts/Layout.astro`: 共通HTML、メタ情報、favicon、共通スタイルの読み込みを管理します。
- `src/components/`: ヘッダー、ヒーロー、講師紹介、コース、FAQ、問い合わせなどのページセクションを管理します。
- `src/styles/global.css`: Tailwind CSS の読み込みとテーマカラー、フォント設定を管理します。
- `public/`: favicon など、ビルド時にそのまま公開される静的ファイルを配置します。

## 開発コマンド

```sh
npm install
```

依存関係をインストールします。

```sh
npm run dev
```

開発サーバーを起動します。通常は `http://localhost:4321/` で確認できます。

```sh
npm run build
```

本番用ファイルを `dist/` に生成します。

```sh
npm run preview
```

ビルド済みの `dist/` をローカルでプレビューします。

## Cloudflare Workersで公開する

このプロジェクトは Cloudflare Workers Static Assets にデプロイし、独自ドメイン `s-global.co.jp` で公開する想定です。

1. Cloudflare に `s-global.co.jp` を追加します。
2. ドメイン管理会社側で、Cloudflare が指定するネームサーバーへ変更します。
3. Cloudflare の `Workers & Pages` から Workers プロジェクトを作成します。
4. GitHub リポジトリを接続します。
5. ビルド設定を以下にします。

```text
Framework preset: Astro
Build command: npm run build
Deploy command: npm run deploy
Root directory: /
Node.js version: 22.12.0 以上
```

デプロイ先とドメインは `wrangler.jsonc` で明示しています。

```jsonc
{
  "name": "s-global",
  "assets": {
    "directory": "./dist"
  },
  "routes": [
    {
      "pattern": "s-global.co.jp",
      "custom_domain": true
    }
  ]
}
```

ローカルから手動デプロイする場合は以下を実行します。

```sh
npm run build
npm run deploy
```

必要に応じて `www.s-global.co.jp` から `s-global.co.jp` へのリダイレクトを Cloudflare の Redirect Rules で設定します。

Astro の `site` は `https://s-global.co.jp` に設定しています。

## 編集メモ

- ページの表示順を変更する場合は `src/pages/index.astro` を編集します。
- 各セクションの文言やレイアウトは `src/components/` 配下の対応ファイルを編集します。
- サイト全体のタイトルやdescriptionは `src/layouts/Layout.astro` のデフォルト値を編集します。
- 共通カラーは `src/styles/global.css` の `@theme` で管理しています。
