# react-native + firebaseでのグループチャットアプリ

## 概要
  * ソースコード
    * 場所 https://github.com/ming-cho/react-native-demo/compare/features/chat?expand=1
  * Pepperoni starter-kitを使っています。
  * http://qiita.com/imaimiami/items/2bf9e47f68d0e791586b 記事を参考していた reduxに変更した
  * react-nativeコンポネントを使えば、基本的にjsでios, android両方を開発できる　(phonegapなど)
  * データストレージはfirebaseのdatabaseを使っています。一つチャットグループは一つkeyになる.
  * ログインなど、未完成　今固定している。ios ユーザー　/ androidユーザ

## 感想
  * 簡単にdebugできるが、web開発と大体同じです。エラーの表示はもうちょっとです
  * react-native自身、libraryの更新が早いです。使い方は結構変わります
  * 同じマーシンにandroid simulator と ios simulator同時に立ち上がらない。おそらくdebug portを被っている？

## TODO
  * ログイン機能(firebaseを使う)
  * 他のコンポネントサンプルを追加する
  * テストコードの追加
