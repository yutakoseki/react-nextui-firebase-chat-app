# 内容
* フロントエンド：react
* フレームワーク：NEXT UI
* バックエンド：firebase
* デプロイ先：firebase

## 
### firebaseアカウント
```sh
developsolt@gmail.com
```

## アプリの作成
### テンプレートファイル作成
```sh
npx create-react-app react-chat-app --template typescript
```

## NextUIのインポート
```sh
npm i @nextui-org/react
```

## Routerのインポート
```sh
npm install react-router-dom
```

## build
```sh
npm run build
```

## firebaseの作成
* webでAuthとfirestoreとストレージを作成

※firebaseはエラー出まくるけどできるまでやる。

### Firebaseのインポート
```sh
npm install firebase
```

### login
```sh
firebase login
```

### 初期化（firebase.json）の作成
```sh
firebase init
```
* 一旦HostingのみでOK
* 既存のアプリを選択
「? What do you want to use as your public directory? (public) 」はbuild
「? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) 」はy
「? Set up automatic builds and deploys with GitHub? (y/N) 」はN（これはyにしたいところだが接続がむずかしそうだったので一旦Nとしておく）

### deploy
```sh
firebase deploy
```

### loginエラーの場合
```sh
? Enter authorization code: 
4/0AbUR2VMciaK3kOQZsQHTNMjkuOW84_EfIo1sT-D9-PH4BoSf9X45_HltBXh2fleWQIMlpA
```

