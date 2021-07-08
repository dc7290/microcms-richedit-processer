# microcms-richedit-processer

microCMSのリッチエディタから取得できるHTMLデータを自動処理します。

# Feature

## HTML データの加工機能について

- img タグ
  - 遅延読み込み(現在、遅延読み込みライブラリの`lazysizes`のクラス名をサポート)
  - レスポンシブ画像のサポート(srcSet, sizes 属性によってウインドウ幅に合わせて最適な画像を配信する技術)
  - placeholder 画像の設定
  - imgix パラメータの追加
  - width, height 属性の自動設定
- iframe タグ
  - 遅延読み込み(現在、遅延読み込みライブラリの`lazysizes`のクラス名をサポート)
  - レスポンシブ対応
- pre タグ内の code タグ
  - シンタックスハイライトのためにクラス名の追加(現在、`highlight.js`をサポート)
- 共通
  - クラス名の追加
  - 任意の属性値の追加

## HTML データから別データの自動作成機能について

- 目次リストの作成

# Usage

```bash
npm i microcms-richedit-processer
# yarn add microcms-richedit-processer
```

Next.jsの場合

```typescript
import { GetStaticProps, NextPage } from "next";

import { createTableOfContents, processer } from "microcms-richedit-processer";

type Props = {
  body: string;
  toc: {
    id: string;
    text: string;
    name: string;
  }[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { contents } = await fetch(
    "https://{サービスID}.microcms.io/api/v1/{エンドポイント}",
    {
      headers: {
        "X-API-KEY": "{APIキー}",
      },
    }
  ).then((res) => res.json());

  // contents.bodyにHTMLデータが取得できる想定です。

  return {
    props: {
      body: await processer(contents.body),
      // オプションを渡す場合
      // body: processer(contents.body, {}),
      toc: createTableOfContents(contents.body),
      // オプションを渡す場合
      // toc: createTableOfContents(contents.body, {}),
    },
  };
};
```

詳しい使い方はZennの記事に書いています！
https://zenn.dev/d_suke/articles/e18352797bbe00bdabb6


