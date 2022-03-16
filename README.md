# Todoアプリ（練習用）

## Setup

開発は Docker 環境で行う．

### 初回実行時

```bash
# 開発環境用のサービスを起動する
$ docker-compose up -d

# Node.js サービスに接続する
$ docker-compose exec node sh
# >>> コンテナに接続されます

# 依存関係のインストール
~/app $ npm install

# 開発環境モードでサーバを起動
# ブラウザのURLに localhost:3000 を入力し，アクセス
~/app $ npm run dev

# 終了時
# [Ctrl] + [C]
~/app $ exit
# >>> コンテナ環境から抜け出します
# Docker サービスを終了する
$ docker-compose down
```

### 二回目以降

```bash
# 開発環境用のサービスを起動する
$ docker-compose up -d

# Node.js サービスに接続する
$ docker-compose exec node sh
# >>> コンテナに接続されます

# 開発環境モードでサーバを起動
# ブラウザのURLに localhost:3000 を入力し，アクセス
~/app $ npm run dev

# 終了時
# [Ctrl] + [C]
~/app $ exit
# >>> コンテナ環境から抜け出します
# Docker サービスを終了する
$ docker-compose down
```
