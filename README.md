<img src="https://user-images.githubusercontent.com/75351671/104306468-50014e80-5511-11eb-900a-8ff023fdcd95.png">

# リンクWA

リンクWAはオーストラリアのパースへ留学に興味がある方達に、現地留学生の生活を見て**留学への一歩を後押しするサービス**です。

TwitterやInstagram等の大きなSNSとは違い投稿者の自身の生活や活動をより身近に感じてもらう事をコンセプトにしました。

[リンクWA URL](https://study-perth-app01.herokuapp.com)

# 制作背景
このアプリは西オーストラリアと日本の留学エージェント会社のさらなる**顧客の獲得を目的**に開発を行いました。

以前オーストラリアのエージェント会社でインターンシップを行なっている際、現地の語学学校、日本人留学生へのインタビュー、日本の高校や大学への西オーストラリア留学の需要の調査を行い、その中でさらなるビジネスの拡大の為の２つの大きな課題が見つかりました（下記参照）。

* 西オーストラリアの知名度の低さ
* スタートアップ企業の信頼度の低さ

WA（西オーストラリア）の首都であるパースは5年連続世界の住みたいランキングトップ10にノミネートされているにも関わらず、メルボルンやシドニーに比べると留学ビジネスの規模が小さいのが現実です。その背景には日本人の**WAに対する知識の少なさ**が寄与しています。より多くのWAの情報を日本人に提供できれば留学生の母数は増加すると考えます。

又、ビジネスの拡大にはいかに**留学生の不安感を払拭できるか**が鍵になります。インターンシップを通じて留学エージェントを決定する際多くの方々がそれにかかる費用よりも会社の規模、知名度等の信頼性を大切にする傾向があると実感しました。そのような中でスタートアップ企業が他のエージェントと差別化を図り、**顧客から信頼度**を獲得する事が必要になってきます。

上記２点の問題点を解決する為にリンクWAをの制作を行い、実際に企業の１サービスとして使用する事を目的にしました。


# ユーザーにどんな価値を提供できるか

### 留学への不安感の払拭
* 複数枚の写真を見ながらWA留学のイメージを掴む事が出来ます。さらに、投稿者は全て当社を使用して留学を行なっている学生なので、より投稿者に親しみや信頼感を持つ事が出来ます。
* 留学前で不安な事を質問する事が出来ます。投稿者に対して気軽に質問する事が出来、留学準備を悩まず行う事が出来ます。

### WAへの興味関心
* WAの行きたい所を事前に調べる事が出来ます。投稿の周辺のおすすめ施設を投稿と一緒に見る事が出来、新しい発見をする事が出来ます。
* WAの美しさを実感する事が出来ます。説明だけではWAの本当の素晴らしさはわかりません。留学者の投稿を自分の目で見て本当に行きたい場所かを考える事が出来ます。


# 工夫した点

### ページ移動のストレスの削減
すべての投稿をページ移動なし見れるようにしました。又、投稿への良いね機能、コメント、質問、ソート機能を非同期通信で行う事でユーザーが空いている時間**に気軽に使える**使用にしました。

### 投稿の周辺おすすめ施設提案
より多くのWAに関する情報をユーザーに提供する為に投稿に周辺おすすめ施設提案機能を実装しました。又、おすすめ施設の写真（10枚）、評価、ホームページのURLを表示する事でユーザに投稿だけではなく周辺施設にも興味を持って頂けるデザインにしました。

### 投稿者とユーザーのインタラクティブな関係性
一方的に投稿者が発信するのではなく、コメント機能を実装する事でユーザーからも発信を行えるようにしました。又、コメント機能の他にQ＆A機能を実装し**対話形式でユーザーと投稿者が関われる**使用にしました。


### 人を惹きつけるデザイン性
留学エージェントのオーナーのビジネスに対する考えが「私たちは留学を売るのではなく、WAを売っている」という事で、WAの魅力を十分に見せれるデザイン性にしました。又、アニメーションなどを実装する事でユーザが**視覚的に楽しめる**ようにしました。


<img width="50%" height="350px" src="https://user-images.githubusercontent.com/75351671/104306563-69a29600-5511-11eb-9cbe-648d26ae3f76.png"><img height="350px" width="50%" src="https://user-images.githubusercontent.com/75351671/104307253-5512cd80-5512-11eb-9233-da34c61b8060.png">
<img width="50%" src="https://user-images.githubusercontent.com/75351671/104306591-72936780-5511-11eb-9ebb-9c46a576512f.png"><img width="50%" src="https://user-images.githubusercontent.com/75351671/104306618-7c1ccf80-5511-11eb-9bbb-3325021c8305.png">

# 機能一覧
### ユーザー管理機能

* ユーザー登録・編集・削除（devise）
* Twitter, Google APIを使用したSNS承認ログイン
* プロフィール画像の登録・編集（Active Storage)
* マイページに投稿の一覧アニメーションなどを使用する事でより視覚的にユーザーに楽しんで頂けるデザインを心がけました表示
* 投稿数、いいね数、質問回答数の可視化

### 投稿機能

* 投稿、編集、削除
* 一覧表示・詳細表示(Ajax処理）
* いいね付け(Ajax処理)・いいね数に応じてトレンド一覧表示
* 投稿のソート機能(Ajax処理）
* サブイメージとメインイメージの切替(Ajax処理）
* コメントと対話形式Q＆A機能(Ajax処理）
　
### 投稿周辺のおすすめ提案
* 投稿周辺施設のおすすめ機能(Maps JavaScript, APIGeocoding API,Places API)

### レスポンシブデザイン

# 使用技術
### フロントエンド

* HTML
* CSS(SCSS)
* JavaScript
* Bootstrap
### バックエンド

* Ruby 2.4.10
* Rails 5.2.4.4

### 本番環境
* heroku
* S3
* Postgres

# ER図
![images](https://user-images.githubusercontent.com/75351671/104400184-7c5eae80-5595-11eb-9918-3c5fc91a8bf6.png)

# 最後に
大変お忙しい中、最後までご覧いただき誠にありがとうございました。

ご興味を持っていただけましたら、下記リンクもご覧頂けると幸いです。

[Twitter](https://twitter.com/99eeem99):日々の学習を投稿しています。

[stand fm](https://stand.fm/channels/5ff064561f63b1cf68487a30):プログラミングの気づきやエラーを解決した方法等を発信しています（全て英語）。
