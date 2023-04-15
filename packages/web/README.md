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
