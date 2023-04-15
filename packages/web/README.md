# web

TODO アプリ フロントエンド

## 開発環境セットアップ

1.  .env.local に下記環境変数を追加する。

```
DOMAIN=http://localhost:3000
AUTH0_SECRET='xxxxx'
AUTH0_AUDIENCE=https://hasura.io/learn
AUTH0_DOMAIN=xxxxx
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL=xxxxx
AUTH0_CLIENT_ID=xxxxx
AUTH0_CLIENT_SECRET=xxxxx
NEXT_PUBLIC_APP_HOST="http://localhost:3000"
NEXT_PUBLIC_API_DOMAIN="http://localhost:8080"
REDIRECT_URI="http://localhost:3000/api/auth/callback"
POST_LOGOUT_REDIRECT_URI=http://localhost:3000/
SESSION_COOKIE_SECRET='xxxxx'
```

## 開発メモ

Auth0 のログイン時に走る Action (Create DB User) のテストをしたい時。

1. local の 8080 番ポートを公開する。

```
npx ngrok http 8080
```

2. Actions コールバック関数内の localhost:8080 を、Forwarding の URL https://hogehoge.jp.ngrok.io に置き換える。
