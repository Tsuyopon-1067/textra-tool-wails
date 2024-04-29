# commit-strategy

## コミットメッセージの書き方

[]の文字自体は無視．[絵文字]は 🎉 などを意味する．詳細が無いときは 2 行目の空行は無し．

```
1: [絵文字] タイトル
2: [空行]
3: 詳細（省略可）
```

## 絵文字の使い方

[gitmoji.dev](https://gitmoji.dev/)を参照．

### 基本的なもの

- 🎉 最初のコミット
- ✨ 新機能を追加
- 🔥 ファイルやコードを削除
- 📝 ドキュメントの追加・更新
- 🚚 ファイルやディレクトリの移動

### git 関係

- ⏪️ git revert した
- 🔀 git merge した
- 🙈 gitignore を追加・更新

### バグ修正等

- 🐛 バグの修正
- 🩹 軽微なバグの修正
- 🚑️ クリティカルなバグ修正
- 💄 UI やスタイルファイルを追加や更新
- 🚨 コンパイラやリンターのエラーを修正

### リファクタリングなど

- ♻️ リファクタリング
- 🎨 コードの構造やフォーマットを改善
- ✏️ 誤字脱字の修正
- 💡 コメントを追加・更新
- 💬 テキストやリテラルを追加・更新

### ライブラリ関係

- ➕ 依存関係の追加
- ➖ 依存関係の削除
- ⬇️ パッケージのバージョンを下げた
- ⬆️ パッケージのバージョンを上げた

### その他

- 🚀 デプロイ
- 🤡 モックを追加・更新
- 🚧 WIP（Work In Progress）状態