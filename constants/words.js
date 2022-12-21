const words = [
  { kanji: '周り', reading: 'まわり' },
  { kanji: '学校', reading: 'がっこう' },
  { kanji: '眼鏡', reading: 'めがね' },
  { kanji: '煙草', reading: 'たばこ' },
  { kanji: '仕事', reading: 'しごと' },
  { kanji: '英語', reading: 'えいご' },
  { kanji: '問題', reading: 'もんだい' },
  { kanji: '部屋', reading: 'へや' },
  { kanji: '子供', reading: 'こども' },
  { kanji: '時間', reading: 'じかん' },
  { kanji: '先生', reading: 'せんせい' },
  { kanji: '手紙', reading: 'てがみ' },
  { kanji: '電話', reading: 'でんわ' },
  { kanji: '病気', reading: 'びょうき' },
  { kanji: '上げる', reading: 'あげる' },
  { kanji: '結婚', reading: 'けっこん' },
  { kanji: '言葉', reading: 'ことば' },
  { kanji: '走る', reading: 'はしる' },
  { kanji: '名前', reading: 'なまえ' },
  { kanji: '旅行', reading: 'りょこう' },
  { kanji: '飛行機', reading: 'ひこうき' },
  { kanji: '映画', reading: 'えいが' },
  { kanji: '音楽', reading: 'おんがく' },
  { kanji: '大学', reading: 'だいがく' },
  { kanji: '時計', reading: 'とけい' },
  { kanji: '家族', reading: 'かぞく' },
  { kanji: '毎日', reading: 'まいにち' },
  { kanji: '宿題', reading: 'しゅくだい' },
  { kanji: '動物', reading: 'どうぶつ' },
  { kanji: '料理', reading: 'りょうり' },
  { kanji: '新聞', reading: 'しんぶん' },
  { kanji: '公園', reading: 'こうえん' },
  { kanji: '意味', reading: 'いみ' },
  { kanji: '自転車', reading: 'じてんしゃ' },
  { kanji: '電車', reading: 'でんしゃ' },
  { kanji: '散歩', reading: 'さんぽ' },
  { kanji: '帽子', reading: 'ぼうし' },
  { kanji: '授業', reading: 'じゅぎょう' },
  { kanji: '銀行', reading: 'ぎんこう' },
  { kanji: '写真', reading: 'しゃしん' },
  { kanji: '病院', reading: 'びょういん' },
  { kanji: '図書館', reading: 'としょかん' },
  { kanji: '買い物', reading: 'かいもの' },
  { kanji: '椅子', reading: 'いす' },
  { kanji: '自動車', reading: 'じどうしゃ' },
  { kanji: '風邪', reading: 'かぜ' },
  { kanji: '掃除', reading: 'そうじ' },
  { kanji: '雑誌', reading: 'ざっし' },
  { kanji: '切符', reading: 'きっぷ' },
  { kanji: '外国人', reading: 'がいこくじん' },
  { kanji: '財布', reading: 'さいふ' },
  { kanji: '鉛筆', reading: 'えんぴつ' },
  { kanji: '大人', reading: 'おとな' },
  { kanji: '地図', reading: 'ちず' },
  { kanji: '砂糖', reading: 'さとう' },
  { kanji: '夏休み', reading: 'なつやすみ' },
  { kanji: '郵便局', reading: 'ゆうびんきょく' },
  { kanji: '教室', reading: 'きょうしつ' },
  { kanji: '切手', reading: 'きって' },
  { kanji: '台所', reading: 'だいどころ' },
  { kanji: '電気', reading: 'でんき' },
  { kanji: '作文', reading: 'さくぶん' },
  { kanji: '紅茶', reading: 'こうちゃ' },
  { kanji: '家庭', reading: 'かてい' },
  { kanji: '野菜', reading: 'やさい' },
  { kanji: '風呂', reading: 'ふろ' },
  { kanji: '玄関', reading: 'げんかん' },
  { kanji: '地下鉄', reading: 'ちかてつ' },
  { kanji: '洗濯', reading: 'せんたく' },
  { kanji: '冷蔵庫', reading: 'れいぞうこ' },
  { kanji: '火曜日', reading: 'かようび' },
  { kanji: '茶色', reading: 'ちゃいろ' },
  { kanji: '喫茶店', reading: 'きっさてん' },
  { kanji: '靴下', reading: 'くつした' },
  { kanji: '封筒', reading: 'ふうとう' },
  { kanji: '黄色', reading: 'きいろ' },
  { kanji: '映画館', reading: 'えいがかん' },
  { kanji: '食堂', reading: 'しょくどう' },
  { kanji: '牛肉', reading: 'ぎゅうにく' },
  { kanji: '交差点', reading: 'こうさてん' },
  { kanji: '漢字', reading: 'かんじ' },
  { kanji: '茶碗', reading: 'ちゃわん' },
  { kanji: '曇り', reading: 'くもり' },
  { kanji: '背広', reading: 'せびろ' },
  { kanji: '豚肉', reading: 'ぶたにく' },
  { kanji: '交番', reading: 'こうばん' },
  { kanji: '飲む', reading: 'のむ' },
  { kanji: '日曜日', reading: 'にちようび' },
  { kanji: '誕生日', reading: 'たんじょうび' },
  { kanji: '可愛い', reading: 'かわいい' },
  { kanji: '土曜日', reading: 'どようび' },
  { kanji: '月曜日', reading: 'げつようび' },
  { kanji: '金曜日', reading: 'きんようび' },
  { kanji: '花瓶', reading: 'かびん' },
  { kanji: '本棚', reading: 'ほんだな' },
  { kanji: '木曜日', reading: 'もくようび' },
  { kanji: '石鹸', reading: 'せっけん' },
  { kanji: '水曜日', reading: 'すいようび' },
  { kanji: '八百屋', reading: 'やおや' },
  { kanji: '人形', reading: 'にんぎょう' },
  { kanji: '文化', reading: 'ぶんか' },
  { kanji: '海岸', reading: 'かいがん' },
  { kanji: '産業', reading: 'さんぎょう' },
  { kanji: '動物園', reading: 'どうぶつえん' },
  { kanji: '美術館', reading: 'びじゅつかん' },
  { kanji: '飛行場', reading: 'ひこうじょう' },
  { kanji: '水道', reading: 'すいどう' },
  { kanji: '事故', reading: 'じこ' },
  { kanji: '息子', reading: 'むすこ' },
  { kanji: '生活', reading: 'せいかつ' },
  { kanji: '注意', reading: 'ちゅうい' },
  { kanji: '生きる', reading: 'いきる' },
  { kanji: '女性', reading: 'じょせい' },
  { kanji: '説明', reading: 'せつめい' },
  { kanji: '警察', reading: 'けいさつ' },
  { kanji: '危険', reading: 'きけん' },
  { kanji: '世界', reading: 'せかい' },
  { kanji: '戦争', reading: 'せんそう' },
  { kanji: '小説', reading: 'しょうせつ' },
  { kanji: '関係', reading: 'かんけい' },
  { kanji: '研究', reading: 'けんきゅう' },
  { kanji: '会議', reading: 'かいぎ' },
  { kanji: '普通', reading: 'ふつう' },
  { kanji: '空港', reading: 'くうこう' },
  { kanji: '数学', reading: 'すうがく' },
  { kanji: '教育', reading: 'きょういく' },
  { kanji: '自由', reading: 'じゆう' },
  { kanji: '法律', reading: 'ほうりつ' },
  { kanji: '気分', reading: 'きぶん' },
  { kanji: '田舎', reading: 'いなか' },
  { kanji: '男性', reading: 'だんせい' },
  { kanji: '地震', reading: 'じしん' },
  { kanji: '故障', reading: 'こしょう' },
  { kanji: '人口', reading: 'じんこう' },
  { kanji: '残念', reading: 'ざんねん' },
  { kanji: '歴史', reading: 'れきし' },
  { kanji: '教会', reading: 'きょうかい' },
  { kanji: '社会', reading: 'しゃかい' },
  { kanji: '住所', reading: 'じゅうしょ' },
  { kanji: '工場', reading: 'こうじょう' },
  { kanji: '趣味', reading: 'しゅみ' },
  { kanji: '経済', reading: 'けいざい' },
  { kanji: '台風', reading: 'たいふう' },
  { kanji: '卒業', reading: 'そつぎょう' },
  { kanji: '贈り物', reading: 'おくりもの' },
  { kanji: '科学', reading: 'かがく' },
  { kanji: '政治', reading: 'せいじ' },
  { kanji: '特別', reading: 'とくべつ' },
  { kanji: '水泳', reading: 'すいえい' },
  { kanji: '講義', reading: 'こうぎ' },
  { kanji: '生産', reading: 'せいさん' },
  { kanji: '会話', reading: 'かいわ' },
  { kanji: '季節', reading: 'きせつ' },
  { kanji: '玩具', reading: 'おもちゃ' },
  { kanji: '翻訳', reading: 'ほんやく' },
  { kanji: '文学', reading: 'ぶんがく' },
  { kanji: '交通', reading: 'こうつう' },
  { kanji: '遊び', reading: 'あそび' },
  { kanji: '道具', reading: 'どうぐ' },
  { kanji: '背中', reading: 'せなか' },
  { kanji: '入学', reading: 'にゅうがく' },
  { kanji: '発音', reading: 'はつおん' },
  { kanji: '医学', reading: 'いがく' },
  { kanji: '漫画', reading: 'まんが' },
  { kanji: '校長', reading: 'こうちょう' },
  { kanji: '国際', reading: 'こくさい' },
  { kanji: '手袋', reading: 'てぶくろ' },
  { kanji: '日記', reading: 'にっき' },
  { kanji: '文法', reading: 'ぶんぽう' },
  { kanji: '神社', reading: 'じんじゃ' },
  { kanji: '小学校', reading: 'しょうがっこう' },
  { kanji: '駐車場', reading: 'ちゅうしゃじょう' },
  { kanji: '先輩', reading: 'せんぱい' },
  { kanji: '西洋', reading: 'せいよう' },
  { kanji: '注射', reading: 'ちゅうしゃ' },
  { kanji: '乗り物', reading: 'のりもの' },
  { kanji: '旅館', reading: 'りょかん' },
  { kanji: '布団', reading: 'ふとん' },
  { kanji: '中学校', reading: 'ちゅうがっこう' },
  { kanji: '柔道', reading: 'じゅうどう' },
  { kanji: '花見', reading: 'はなみ' },
  { kanji: '辞典', reading: 'じてん' },
  { kanji: '喧嘩', reading: 'けんか' },
  { kanji: '押入れ', reading: 'おしいれ' },
  { kanji: '味噌', reading: 'みそ' },
  { kanji: '正直', reading: 'しょうじき' },
  { kanji: '一致', reading: 'いっち' },
  { kanji: '博物館', reading: 'はくぶつかん' },
  { kanji: '舞台', reading: 'ぶたい' },
  { kanji: '寄付', reading: 'きふ' },
  { kanji: '平等', reading: 'びょうどう' },
  { kanji: '左右', reading: 'さゆう' },
  { kanji: '金属', reading: 'きんぞく' },
  { kanji: '商人', reading: 'しょうにん' },
  { kanji: '国境', reading: 'こっきょう' },
  { kanji: '集団', reading: 'しゅうだん' },
  { kanji: '一番', reading: 'いちばん' },
  { kanji: '計画', reading: 'けいかく' },
  { kanji: '少年', reading: 'しょうねん' },
  { kanji: '列車', reading: 'れっしゃ' },
  { kanji: '健康', reading: 'けんこう' },
  { kanji: '人間', reading: 'にんげん' },
  { kanji: '結果', reading: 'けっか' },
  { kanji: '理解', reading: 'りかい' },
  { kanji: '少女', reading: 'しょうじょ' },
  { kanji: '事実', reading: 'じじつ' },
  { kanji: '食事', reading: 'しょくじ' },
  { kanji: '人生', reading: 'じんせい' },
  { kanji: '母親', reading: 'ははおや' },
  { kanji: '父親', reading: 'ちちおや' },
  { kanji: '行動', reading: 'こうどう' },
  { kanji: '太陽', reading: 'たいよう' },
  { kanji: '幸福', reading: 'こうふく' },
  { kanji: '政府', reading: 'せいふ' },
  { kanji: '経験', reading: 'けいけん' },
  { kanji: '責任', reading: 'せきにん' },
  { kanji: '我慢', reading: 'がまん' },
  { kanji: '道路', reading: 'どうろ' },
  { kanji: '機械', reading: 'きかい' },
  { kanji: '地球', reading: 'ちきゅう' },
  { kanji: '偶然', reading: 'ぐうぜん' },
  { kanji: '秘密', reading: 'ひみつ' },
  { kanji: '情報', reading: 'じょうほう' },
  { kanji: '現在', reading: 'げんざい' },
  { kanji: '昼食', reading: 'ちゅうしょく' },
  { kanji: '期待', reading: 'きたい' },
  { kanji: '運動', reading: 'うんどう' },
  { kanji: '大統領', reading: 'だいとうりょう' },
  { kanji: '演説', reading: 'えんぜつ' },
  { kanji: '読書', reading: 'どくしょ' },
  { kanji: '知識', reading: 'ちしき' },
  { kanji: '都市', reading: 'とし' },
  { kanji: '収入', reading: 'しゅうにゅう' },
  { kanji: '財産', reading: 'ざいさん' },
  { kanji: '発見', reading: 'はっけん' },
  { kanji: '勇気', reading: 'ゆうき' },
  { kanji: '患者', reading: 'かんじゃ' },
  { kanji: '学者', reading: 'がくしゃ' },
  { kanji: '解決', reading: 'かいけつ' },
  { kanji: '存在', reading: 'そんざい' },
  { kanji: '言語', reading: 'げんご' },
  { kanji: '信頼', reading: 'しんらい' },
  { kanji: '海外', reading: 'かいがい' },
  { kanji: '作家', reading: 'さっか' },
  { kanji: '平和', reading: 'へいわ' },
  { kanji: '希望', reading: 'きぼう' },
  { kanji: '調査', reading: 'ちょうさ' },
  { kanji: '気候', reading: 'きこう' },
  { kanji: '地域', reading: 'ちいき' },
  { kanji: '実験', reading: 'じっけん' },
  { kanji: '国民', reading: 'こくみん' },
  { kanji: '権利', reading: 'けんり' },
  { kanji: '義務', reading: 'ぎむ' },
  { kanji: '釣り', reading: 'つり' },
  { kanji: '利益', reading: 'りえき' },
  { kanji: '過去', reading: 'かこ' },
  { kanji: '物価', reading: 'ぶっか' },
  { kanji: '植物', reading: 'しょくぶつ' },
  { kanji: '教授', reading: 'きょうじゅ' },
  { kanji: '発明', reading: 'はつめい' },
  { kanji: '痛み', reading: 'いたみ' },
  { kanji: '石油', reading: 'せきゆ' },
  { kanji: '進歩', reading: 'しんぽ' },
  { kanji: '物語', reading: 'ものがたり' },
  { kanji: '感情', reading: 'かんじょう' },
  { kanji: '議長', reading: 'ぎちょう' },
  { kanji: '恐怖', reading: 'きょうふ' },
  { kanji: '否定', reading: 'ひてい' },
  { kanji: '商品', reading: 'しょうひん' },
  { kanji: '費用', reading: 'ひよう' },
  { kanji: '作品', reading: 'さくひん' },
  { kanji: '価格', reading: 'かかく' },
  { kanji: '留学', reading: 'りゅうがく' },
  { kanji: '犯罪', reading: 'はんざい' },
  { kanji: '意志', reading: 'いし' },
  { kanji: '評価', reading: 'ひょうか' },
  { kanji: '正午', reading: 'しょうご' },
  { kanji: '家具', reading: 'かぐ' },
  { kanji: '職業', reading: 'しょくぎょう' },
  { kanji: '不安', reading: 'ふあん' },
  { kanji: '首相', reading: 'しゅしょう' },
  { kanji: '自然', reading: 'しぜん' },
  { kanji: '意識', reading: 'いしき' },
  { kanji: '自殺', reading: 'じさつ' },
  { kanji: '逮捕', reading: 'たいほ' },
  { kanji: '爆発', reading: 'ばくはつ' },
  { kanji: '論文', reading: 'ろんぶん' },
  { kanji: '記録', reading: 'きろく' },
  { kanji: '頭痛', reading: 'ずつう' },
  { kanji: '世紀', reading: 'せいき' },
  { kanji: '契約', reading: 'けいやく' },
  { kanji: '精神', reading: 'せいしん' },
  { kanji: '記憶', reading: 'きおく' },
  { kanji: '俳優', reading: 'はいゆう' },
  { kanji: '優勝', reading: 'ゆうしょう' },
  { kanji: '独立', reading: 'どくりつ' },
  { kanji: '公平', reading: 'こうへい' },
  { kanji: '強盗', reading: 'ごうとう' },
  { kanji: '生命', reading: 'せいめい' },
  { kanji: '輸入', reading: 'ゆにゅう' },
  { kanji: '記事', reading: 'きじ' },
  { kanji: '命令', reading: 'めいれい' },
  { kanji: '医師', reading: 'いし' },
  { kanji: '合図', reading: 'あいず' },
  { kanji: '計算', reading: 'けいさん' },
  { kanji: '宇宙', reading: 'うちゅう' },
  { kanji: '友情', reading: 'ゆうじょう' },
  { kanji: '握手', reading: 'あくしゅ' },
  { kanji: '現実', reading: 'げんじつ' },
  { kanji: '訓練', reading: 'くんれん' },
  { kanji: '企業', reading: 'きぎょう' },
  { kanji: '方向', reading: 'ほうこう' },
  { kanji: '生物', reading: 'せいぶつ' },
  { kanji: '香り', reading: 'かおり' },
  { kanji: '攻撃', reading: 'こうげき' },
  { kanji: '芸術', reading: 'げいじゅつ' },
  { kanji: '服装', reading: 'ふくそう' },
  { kanji: '流れ', reading: 'ながれ' },
  { kanji: '宗教', reading: 'しゅうきょう' },
  { kanji: '役割', reading: 'やくわり' },
  { kanji: '個人', reading: 'こじん' },
  { kanji: '署名', reading: 'しょめい' },
  { kanji: '無料', reading: 'むりょう' },
  { kanji: '広告', reading: 'こうこく' },
  { kanji: '王様', reading: 'おうさま' },
  { kanji: '宝石', reading: 'ほうせき' },
  { kanji: '現金', reading: 'げんきん' },
  { kanji: '証明', reading: 'しょうめい' },
  { kanji: '出版', reading: 'しゅっぱん' },
  { kanji: '博士', reading: 'はかせ' },
  { kanji: '話題', reading: 'わだい' },
  { kanji: '芝居', reading: 'しばい' },
  { kanji: '保証', reading: 'ほしょう' },
  { kanji: '競技', reading: 'きょうぎ' },
  { kanji: '離婚', reading: 'りこん' },
  { kanji: '診察', reading: 'しんさつ' },
  { kanji: '軍隊', reading: 'ぐんたい' },
  { kanji: '投票', reading: 'とうひょう' },
  { kanji: '販売', reading: 'はんばい' },
  { kanji: '年寄り', reading: 'としより' },
  { kanji: '心臓', reading: 'しんぞう' },
  { kanji: '衝突', reading: 'しょうとつ' },
  { kanji: '輸出', reading: 'ゆしゅつ' },
  { kanji: '平均', reading: 'へいきん' },
  { kanji: '永遠', reading: 'えいえん' },
  { kanji: '冒険', reading: 'ぼうけん' },
  { kanji: '表情', reading: 'ひょうじょう' },
  { kanji: '未来', reading: 'みらい' },
  { kanji: '制度', reading: 'せいど' },
  { kanji: '小屋', reading: 'こや' },
  { kanji: '改善', reading: 'かいぜん' },
  { kanji: '青年', reading: 'せいねん' },
  { kanji: '通学', reading: 'つうがく' },
  { kanji: '女王', reading: 'じょおう' },
  { kanji: '収穫', reading: 'しゅうかく' },
  { kanji: '観客', reading: 'かんきゃく' },
  { kanji: '中心', reading: 'ちゅうしん' },
  { kanji: '文字', reading: 'もじ' },
  { kanji: '鉄道', reading: 'てつどう' },
  { kanji: '信号', reading: 'しんごう' },
  { kanji: '建設', reading: 'けんせつ' },
  { kanji: '国家', reading: 'こっか' },
  { kanji: '化学', reading: 'かがく' },
  { kanji: '睡眠', reading: 'すいみん' },
  { kanji: '節約', reading: 'せつやく' },
  { kanji: '教科書', reading: 'きょうかしょ' },
  { kanji: '座席', reading: 'ざせき' },
  { kanji: '郵便', reading: 'ゆうびん' },
  { kanji: '単位', reading: 'たんい' },
  { kanji: '常識', reading: 'じょうしき' },
  { kanji: '労働', reading: 'ろうどう' },
  { kanji: '誕生', reading: 'たんじょう' },
  { kanji: '学習', reading: 'がくしゅう' },
  { kanji: '食欲', reading: 'しょくよく' },
  { kanji: '数字', reading: 'すうじ' },
  { kanji: '失業', reading: 'しつぎょう' },
  { kanji: '観光', reading: 'かんこう' },
  { kanji: '婚約', reading: 'こんやく' },
  { kanji: '分析', reading: 'ぶんせき' },
  { kanji: '知恵', reading: 'ちえ' },
  { kanji: '毛布', reading: 'もうふ' },
  { kanji: '首都', reading: 'しゅと' },
  { kanji: '引用', reading: 'いんよう' },
  { kanji: '武器', reading: 'ぶき' },
  { kanji: '書斎', reading: 'しょさい' },
  { kanji: '砂漠', reading: 'さばく' },
  { kanji: '位置', reading: 'いち' },
  { kanji: '硬貨', reading: 'こうか' },
  { kanji: '異常', reading: 'いじょう' },
  { kanji: '監督', reading: 'かんとく' },
  { kanji: '予算', reading: 'よさん' },
  { kanji: '瞬間', reading: 'しゅんかん' },
  { kanji: '対象', reading: 'たいしょう' },
  { kanji: '拍手', reading: 'はくしゅ' },
  { kanji: '絶滅', reading: 'ぜつめつ' },
  { kanji: '酸素', reading: 'さんそ' },
  { kanji: '速度', reading: 'そくど' },
  { kanji: '穀物', reading: 'こくもつ' },
  { kanji: '感覚', reading: 'かんかく' },
  { kanji: '物質', reading: 'ぶっしつ' },
  { kanji: '祭り', reading: 'まつり' },
  { kanji: '奨学金', reading: 'しょうがくきん' },
  { kanji: '農業', reading: 'のうぎょう' },
  { kanji: '農家', reading: 'のうか' },
  { kanji: '黒板', reading: 'こくばん' },
  { kanji: '独身', reading: 'どくしん' },
  { kanji: '議会', reading: 'ぎかい' },
  { kanji: '石炭', reading: 'せきたん' },
  { kanji: '批評', reading: 'ひひょう' },
  { kanji: '日付', reading: 'ひづけ' },
  { kanji: '活用', reading: 'かつよう' },
  { kanji: '知事', reading: 'ちじ' },
  { kanji: '大陸', reading: 'たいりく' },
  { kanji: '文明', reading: 'ぶんめい' },
  { kanji: '吸収', reading: 'きゅうしゅう' },
  { kanji: '建築', reading: 'けんちく' },
  { kanji: '体温', reading: 'たいおん' },
  { kanji: '消費', reading: 'しょうひ' },
  { kanji: '信仰', reading: 'しんこう' },
  { kanji: '金融', reading: 'きんゆう' },
  { kanji: '学期', reading: 'がっき' },
  { kanji: '大臣', reading: 'だいじん' },
  { kanji: '外交', reading: 'がいこう' },
  { kanji: '助手', reading: 'じょしゅ' },
  { kanji: '理想', reading: 'りそう' },
  { kanji: '筋肉', reading: 'きんにく' },
  { kanji: '現状', reading: 'げんじょう' },
  { kanji: '人種', reading: 'じんしゅ' },
  { kanji: '神経', reading: 'しんけい' },
  { kanji: '絵画', reading: 'かいが' },
  { kanji: '火災', reading: 'かさい' },
  { kanji: '営業', reading: 'えいぎょう' },
  { kanji: '伝統', reading: 'でんとう' },
  { kanji: '作業', reading: 'さぎょう' },
  { kanji: '組合', reading: 'くみあい' },
  { kanji: '悪魔', reading: 'あくま' },
  { kanji: '恋人', reading: 'こいびと' },
  { kanji: '食品', reading: 'しょくひん' },
  { kanji: '資源', reading: 'しげん' },
  { kanji: '現象', reading: 'げんしょう' },
  { kanji: '哲学', reading: 'てつがく' },
  { kanji: '温度', reading: 'おんど' },
  { kanji: '呼吸', reading: 'こきゅう' },
  { kanji: '骨折', reading: 'こっせつ' },
  { kanji: '印刷', reading: 'いんさつ' },
  { kanji: '登山', reading: 'とざん' },
  { kanji: '代理', reading: 'だいり' },
  { kanji: '知能', reading: 'ちのう' },
  { kanji: '航空', reading: 'こうくう' },
  { kanji: '大使', reading: 'たいし' },
  { kanji: '渋滞', reading: 'じゅうたい' },
  { kanji: '相続', reading: 'そうぞく' },
  { kanji: '弁当', reading: 'べんとう' },
  { kanji: '歩道', reading: 'ほどう' },
  { kanji: '栄養', reading: 'えいよう' },
  { kanji: '医療', reading: 'いりょう' },
  { kanji: '衛星', reading: 'えいせい' },
  { kanji: '模様', reading: 'もよう' },
  { kanji: '免許', reading: 'めんきょ' },
  { kanji: '会計', reading: 'かいけい' },
  { kanji: '地下', reading: 'ちか' },
  { kanji: '差別', reading: 'さべつ' },
  { kanji: '道徳', reading: 'どうとく' },
  { kanji: '国語', reading: 'こくご' },
  { kanji: '資本', reading: 'しほん' },
  { kanji: '体育', reading: 'たいいく' },
  { kanji: '作曲', reading: 'さっきょく' },
  { kanji: '土産', reading: 'みやげ' },
  { kanji: '電子', reading: 'でんし' },
  { kanji: '熱帯', reading: 'ねったい' },
  { kanji: '菓子', reading: 'かし' },
  { kanji: '儀式', reading: 'ぎしき' },
  { kanji: '職人', reading: 'しょくにん' },
  { kanji: '南極', reading: 'なんきょく' },
  { kanji: '北極', reading: 'ほっきょく' },
  { kanji: '新幹線', reading: 'しんかんせん' },
  { kanji: '昼寝', reading: 'ひるね' },
  { kanji: '大通り', reading: 'おおどおり' },
  { kanji: '木材', reading: 'もくざい' },
  { kanji: '運河', reading: 'うんが' },
  { kanji: '遊園地', reading: 'ゆうえんち' },
  { kanji: '天皇', reading: 'てんのう' },
  { kanji: '蛇口', reading: 'じゃぐち' },
  { kanji: '溶岩', reading: 'ようがん' },
  { kanji: '武士', reading: 'ぶし' },
  { kanji: '馬鹿', reading: 'ばか' },
  { kanji: '屡々', reading: 'しばしば' },
  { kanji: '退屈', reading: 'たいくつ' },
  { kanji: '流れる', reading: 'ながれる' },
  { kanji: '暗記', reading: 'あんき' },
  { kanji: '莫大', reading: 'ばくだい' },
  { kanji: '連想', reading: 'れんそう' },
  { kanji: '地平線', reading: 'ちへいせん' },
  { kanji: '動詞', reading: 'どうし' },
  { kanji: '苗字', reading: 'みょうじ' },
  { kanji: '有る', reading: 'ある' },
  { kanji: '其の', reading: 'その' },
  { kanji: '言う', reading: 'いう' },
  { kanji: '出来る', reading: 'できる' },
  { kanji: '良い', reading: 'よい' },
  { kanji: '下さい', reading: 'ください' },
  { kanji: '見る', reading: 'みる' },
  { kanji: '此の', reading: 'この' },
  { kanji: '自分', reading: 'じぶん' },
  { kanji: '知る', reading: 'しる' },
  { kanji: '持つ', reading: 'もつ' },
  { kanji: '話す', reading: 'はなす' },
  { kanji: '今日', reading: 'きょう' },
  { kanji: '買う', reading: 'かう' },
  { kanji: '読む', reading: 'よむ' },
  { kanji: '新しい', reading: 'あたらしい' },
  { kanji: '明日', reading: 'あした' },
  { kanji: '昨日', reading: 'きのう' },
  { kanji: '出る', reading: 'でる' },
  { kanji: '勉強', reading: 'べんきょう' },
  { kanji: '取る', reading: 'とる' },
  { kanji: 'お金', reading: 'おかね' },
  { kanji: '使う', reading: 'つかう' },
  { kanji: '大変', reading: 'たいへん' },
  { kanji: '待つ', reading: 'まつ' },
  { kanji: '作る', reading: 'つくる' },
  { kanji: '後ろ', reading: 'うしろ' },
  { kanji: '少し', reading: 'すこし' },
  { kanji: '貴方', reading: 'あなた' },
  { kanji: '欲しい', reading: 'ほしい' },
  { kanji: '行く', reading: 'いく' },
  { kanji: '乗る', reading: 'のる' },
  { kanji: '大きな', reading: 'おおきな' },
  { kanji: '医者', reading: 'いしゃ' },
  { kanji: '終わる', reading: 'おわる' },
  { kanji: '学生', reading: 'がくせい' },
  { kanji: '長い', reading: 'ながい' },
  { kanji: '何の', reading: 'どの' },
  { kanji: '高い', reading: 'たかい' },
  { kanji: '余り', reading: 'あまり' },
  { kanji: '難しい', reading: 'むずかしい' },
  { kanji: '友達', reading: 'ともだち' },
  { kanji: '一つ', reading: 'ひとつ' },
  { kanji: '本当', reading: 'ほんとう' },
  { kanji: '寝る', reading: 'ねる' },
  { kanji: '生徒', reading: 'せいと' },
  { kanji: '忙しい', reading: 'いそがしい' },
  { kanji: '両親', reading: 'りょうしん' },
  { kanji: '泳ぐ', reading: 'およぐ' },
  { kanji: '出す', reading: 'だす' },
  { kanji: '立つ', reading: 'たつ' },
  { kanji: '早い', reading: 'はやい' },
  { kanji: '楽しい', reading: 'たのしい' },
  { kanji: '面白い', reading: 'おもしろい' },
  { kanji: '女の子', reading: 'おんなのこ' },
  { kanji: '着る', reading: 'きる' },
  { kanji: '上手', reading: 'じょうず' },
  { kanji: '古い', reading: 'ふるい' },
  { kanji: '強い', reading: 'つよい' },
  { kanji: '全部', reading: 'ぜんぶ' },
  { kanji: '呼ぶ', reading: 'よぶ' },
  { kanji: '午後', reading: 'ごご' },
  { kanji: '掛ける', reading: 'かける' },
  { kanji: '辞書', reading: 'じしょ' },
  { kanji: '天気', reading: 'てんき' },
  { kanji: '大きい', reading: 'おおきい' },
  { kanji: '夕べ', reading: 'ゆうべ' },
  { kanji: '質問', reading: 'しつもん' },
  { kanji: '有名', reading: 'ゆうめい' },
  { kanji: '歌う', reading: 'うたう' },
  { kanji: '上る', reading: 'のぼる' },
  { kanji: '時々', reading: 'ときどき' },
  { kanji: '二つ', reading: 'ふたつ' },
  { kanji: '頼む', reading: 'たのむ' },
  { kanji: '今朝', reading: 'けさ' },
  { kanji: '遅い', reading: 'おそい' },
  { kanji: '借りる', reading: 'かりる' },
  { kanji: '外国', reading: 'がいこく' },
  { kanji: '小さい', reading: 'ちいさい' },
  { kanji: '元気', reading: 'げんき' },
  { kanji: '今年', reading: 'ことし' },
  { kanji: '男の子', reading: 'おとこのこ' },
  { kanji: '飛ぶ', reading: 'とぶ' },
  { kanji: '売る', reading: 'うる' },
  { kanji: '静か', reading: 'しずか' },
  { kanji: '休む', reading: 'やすむ' },
  { kanji: '食べ物', reading: 'たべもの' },
  { kanji: '大切', reading: 'たいせつ' },
  { kanji: '警官', reading: 'けいかん' },
  { kanji: '来週', reading: 'らいしゅう' },
  { kanji: '建物', reading: 'たてもの' },
  { kanji: '暖かい', reading: 'あたたかい' },
  { kanji: '降りる', reading: 'おりる' },
  { kanji: '止まる', reading: 'とまる' },
  { kanji: '一緒', reading: 'いっしょ' },
  { kanji: '切り', reading: 'きり' },
  { kanji: '先週', reading: 'せんしゅう' },
  { kanji: '白い', reading: 'しろい' },
  { kanji: '少ない', reading: 'すくない' },
  { kanji: '赤い', reading: 'あかい' },
  { kanji: '洗う', reading: 'あらう' },
  { kanji: '嫌い', reading: 'きらい' },
  { kanji: '立派', reading: 'りっぱ' },
  { kanji: 'お茶', reading: 'おちゃ' },
  { kanji: '広い', reading: 'ひろい' },
  { kanji: '去年', reading: 'きょねん' },
  { kanji: '大好き', reading: 'だいすき' },
  { kanji: '多分', reading: 'たぶん' },
  { kanji: '切る', reading: 'きる' },
  { kanji: '毎朝', reading: 'まいあさ' },
  { kanji: '荷物', reading: 'にもつ' },
  { kanji: '番号', reading: 'ばんごう' },
  { kanji: '返す', reading: 'かえす' },
  { kanji: '来年', reading: 'らいねん' },
  { kanji: '明るい', reading: 'あかるい' },
  { kanji: '近い', reading: 'ちかい' },
  { kanji: '向こう', reading: 'むこう' },
  { kanji: '始め', reading: 'はじめ' },
  { kanji: '痛い', reading: 'いたい' },
  { kanji: '休み', reading: 'やすみ' },
  { kanji: '練習', reading: 'れんしゅう' },
  { kanji: '先月', reading: 'せんげつ' },
  { kanji: '上着', reading: 'うわぎ' },
  { kanji: '結構', reading: 'けっこう' },
  { kanji: '兄弟', reading: 'きょうだい' },
  { kanji: '来月', reading: 'らいげつ' },
  { kanji: '飲み物', reading: 'のみもの' },
  { kanji: '牛乳', reading: 'ぎゅうにゅう' },
  { kanji: '弱い', reading: 'よわい' },
  { kanji: '大丈夫', reading: 'だいじょうぶ' },
  { kanji: '黒い', reading: 'くろい' },
  { kanji: '半分', reading: 'はんぶん' },
  { kanji: '押す', reading: 'おす' },
  { kanji: '勤める', reading: 'つとめる' },
  { kanji: '熱い', reading: 'あつい' },
  { kanji: '三つ', reading: 'みっつ' },
  { kanji: '果物', reading: 'くだもの' },
  { kanji: '今週', reading: 'こんしゅう' },
  { kanji: '甘い', reading: 'あまい' },
  { kanji: '大勢', reading: 'おおぜい' },
  { kanji: '階段', reading: 'かいだん' },
  { kanji: '張る', reading: 'はる' },
  { kanji: '夕方', reading: 'ゆうがた' },
  { kanji: '低い', reading: 'ひくい' },
  { kanji: '毎週', reading: 'まいしゅう' },
  { kanji: '下手', reading: 'へた' },
  { kanji: '午前', reading: 'ごぜん' },
  { kanji: '渡す', reading: 'わたす' },
  { kanji: '便利', reading: 'べんり' },
  { kanji: '丸い', reading: 'まるい' },
  { kanji: '今月', reading: 'こんげつ' },
  { kanji: '浴びる', reading: 'あびる' },
  { kanji: '洋服', reading: 'ようふく' },
  { kanji: '撮る', reading: 'とる' },
  { kanji: '締める', reading: 'しめる' },
  { kanji: '文章', reading: 'ぶんしょう' },
  { kanji: '薄い', reading: 'うすい' },
  { kanji: '四つ', reading: 'よっつ' },
  { kanji: '丈夫', reading: 'じょうぶ' },
  { kanji: '毎晩', reading: 'まいばん' },
  { kanji: '五つ', reading: 'いつつ' },
  { kanji: '晴れ', reading: 'はれ' },
  { kanji: '細い', reading: 'ほそい' },
  { kanji: '廊下', reading: 'ろうか' },
  { kanji: '太い', reading: 'ふとい' },
  { kanji: '留学生', reading: 'りゅうがくせい' },
  { kanji: '九つ', reading: 'ここのつ' },
  { kanji: '七つ', reading: 'ななつ' },
  { kanji: '一昨年', reading: 'おととし' },
  { kanji: '居る', reading: 'いる' },
  { kanji: '会う', reading: 'あう' },
  { kanji: '好き', reading: 'すき' },
  { kanji: '分かる', reading: 'わかる' },
  { kanji: '聞く', reading: 'きく' },
  { kanji: '書く', reading: 'かく' },
  { kanji: '沢山', reading: 'たくさん' },
  { kanji: '入る', reading: 'はいる' },
  { kanji: '置く', reading: 'おく' },
  { kanji: '住む', reading: 'すむ' },
  { kanji: '食べる', reading: 'たべる' },
  { kanji: '歩く', reading: 'あるく' },
  { kanji: '働く', reading: 'はたらく' },
  { kanji: '着く', reading: 'つく' },
  { kanji: '悪い', reading: 'わるい' },
  { kanji: '教える', reading: 'おしえる' },
  { kanji: '降る', reading: 'ふる' },
  { kanji: '死ぬ', reading: 'しぬ' },
  { kanji: '帰る', reading: 'かえる' },
  { kanji: '忘れる', reading: 'わすれる' },
  { kanji: '多い', reading: 'おおい' },
  { kanji: '若い', reading: 'わかい' },
  { kanji: '掛かる', reading: 'かかる' },
  { kanji: '同じ', reading: 'おなじ' },
  { kanji: '起きる', reading: 'おきる' },
  { kanji: '座る', reading: 'すわる' },
  { kanji: '入れる', reading: 'いれる' },
  { kanji: '疲れる', reading: 'つかれる' },
  { kanji: '開ける', reading: 'あける' },
  { kanji: '何故', reading: 'なぜ' },
  { kanji: '一日', reading: 'いちにち' },
  { kanji: '寒い', reading: 'さむい' },
  { kanji: '見せる', reading: 'みせる' },
  { kanji: '違う', reading: 'ちがう' },
  { kanji: '付ける', reading: 'つける' },
  { kanji: '覚える', reading: 'おぼえる' },
  { kanji: '困る', reading: 'こまる' },
  { kanji: '初めて', reading: 'はじめて' },
  { kanji: '始まる', reading: 'はじまる' },
  { kanji: '貸す', reading: 'かす' },
  { kanji: '綺麗', reading: 'きれい' },
  { kanji: '幾ら', reading: 'いくら' },
  { kanji: '弾く', reading: 'ひく' },
  { kanji: '暑い', reading: 'あつい' },
  { kanji: '遊ぶ', reading: 'あそぶ' },
  { kanji: '然し', reading: 'しかし' },
  { kanji: '無くす', reading: 'なくす' },
  { kanji: '色々', reading: 'いろいろ' },
  { kanji: '渡る', reading: 'わたる' },
  { kanji: '暗い', reading: 'くらい' },
  { kanji: '此方', reading: 'こちら' },
  { kanji: '重い', reading: 'おもい' },
  { kanji: '今晩', reading: 'こんばん' },
  { kanji: '消す', reading: 'けす' },
  { kanji: '易しい', reading: 'やさしい' },
  { kanji: '閉める', reading: 'しめる' },
  { kanji: '安い', reading: 'やすい' },
  { kanji: '遠い', reading: 'とおい' },
  { kanji: '短い', reading: 'みじかい' },
  { kanji: '曲がる', reading: 'まがる' },
  { kanji: '消える', reading: 'きえる' },
  { kanji: '晴れる', reading: 'はれる' },
  { kanji: '冷たい', reading: 'つめたい' },
  { kanji: '青い', reading: 'あおい' },
  { kanji: '吹く', reading: 'ふく' },
  { kanji: '奥さん', reading: 'おくさん' },
  { kanji: '引く', reading: 'ひく' },
  { kanji: '段々', reading: 'だんだん' },
  { kanji: '習う', reading: 'ならう' },
  { kanji: '彼処', reading: 'あそこ' },
  { kanji: '狭い', reading: 'せまい' },
  { kanji: '軽い', reading: 'かるい' },
  { kanji: '脱ぐ', reading: 'ぬぐ' },
  { kanji: '並ぶ', reading: 'ならぶ' },
  { kanji: '煩い', reading: 'うるさい' },
  { kanji: '吸う', reading: 'すう' },
  { kanji: '閉まる', reading: 'しまる' },
  { kanji: '咲く', reading: 'さく' },
  { kanji: '涼しい', reading: 'すずしい' },
  { kanji: '其方', reading: 'そちら' },
  { kanji: '厚い', reading: 'あつい' },
  { kanji: '並べる', reading: 'ならべる' },
  { kanji: '危ない', reading: 'あぶない' },
  { kanji: '汚い', reading: 'きたない' },
  { kanji: 'お腹', reading: 'おなか' },
  { kanji: '不味い', reading: 'まずい' },
  { kanji: 'ご飯', reading: 'ごはん' },
  { kanji: '曇る', reading: 'くもる' },
  { kanji: '磨く', reading: 'みがく' },
  { kanji: '黄色い', reading: 'きいろい' },
  { kanji: 'お菓子', reading: 'おかし' },
  { kanji: '賑やか', reading: 'にぎやか' },
  { kanji: '鳴く', reading: 'なく' },
  { kanji: '夕飯', reading: 'ゆうはん' },
  { kanji: '葉書', reading: 'はがき' },
  { kanji: '朝ご飯', reading: 'あさごはん' },
  { kanji: '六つ', reading: 'むっつ' },
  { kanji: '差す', reading: 'さす' },
  { kanji: '２０日', reading: 'はつか' },
  { kanji: '八つ', reading: 'やっつ' },
  { kanji: '再来年', reading: 'さらいねん' },
  { kanji: '燐寸', reading: 'マッチ' },
  { kanji: '良く', reading: 'よく' },
  { kanji: '其処', reading: 'そこ' },
  { kanji: '小さな', reading: 'ちいさな' },
  { kanji: '答える', reading: 'こたえる' },
  { kanji: '要る', reading: 'いる' },
  { kanji: 'お弁当', reading: 'おべんとう' },
  { kanji: '昼ご飯', reading: 'ひるごはん' },
  { kanji: '晩御飯', reading: 'ばんごはん' },
  { kanji: '祖父', reading: 'そふ' },
  { kanji: '高校', reading: 'こうこう' },
  { kanji: '近所', reading: 'きんじょ' },
  { kanji: '農場', reading: 'のうじょう' },
  { kanji: '番組', reading: 'ばんぐみ' },
  { kanji: '見物', reading: 'けんぶつ' },
  { kanji: '惑星', reading: 'わくせい' },
  { kanji: '資料', reading: 'しりょう' },
  { kanji: '面接', reading: 'めんせつ' },
  { kanji: '解放', reading: 'かいほう' },
  { kanji: '群れ', reading: 'むれ' },
  { kanji: '望遠鏡', reading: 'ぼうえんきょう' },
  { kanji: '温泉', reading: 'おんせん' },
  { kanji: '書店', reading: 'しょてん' },
  { kanji: '液体', reading: 'えきたい' },
  { kanji: '過失', reading: 'かしつ' },
  { kanji: '広場', reading: 'ひろば' },
  { kanji: '通勤', reading: 'つうきん' },
  { kanji: '煙突', reading: 'えんとつ' },
  { kanji: '垣根', reading: 'かきね' },
  { kanji: '演劇', reading: 'えんげき' },
  { kanji: '果実', reading: 'かじつ' },
  { kanji: '井戸', reading: 'いど' },
  { kanji: '乾燥', reading: 'かんそう' },
  { kanji: '乾杯', reading: 'かんぱい' },
  { kanji: '宣伝', reading: 'せんでん' },
  { kanji: '通訳', reading: 'つうやく' },
  { kanji: '電池', reading: 'でんち' },
  { kanji: '皮膚', reading: 'ひふ' },
  { kanji: '中世', reading: 'ちゅうせい' },
  { kanji: '通貨', reading: 'つうか' },
  { kanji: '回転', reading: 'かいてん' },
  { kanji: '花火', reading: 'はなび' },
  { kanji: '火山', reading: 'かざん' },
  { kanji: '観念', reading: 'かんねん' },
  { kanji: '相撲', reading: 'すもう' },
  { kanji: '吹雪', reading: 'ふぶき' },
  { kanji: '車庫', reading: 'しゃこ' },
  { kanji: '水素', reading: 'すいそ' },
  { kanji: '基礎', reading: 'きそ' },
  { kanji: '競馬', reading: 'けいば' },
  { kanji: '毛皮', reading: 'けがわ' },
  { kanji: '灰色', reading: 'はいいろ' },
  { kanji: '空想', reading: 'くうそう' },
  { kanji: '政党', reading: 'せいとう' },
  { kanji: '商業', reading: 'しょうぎょう' },
  { kanji: '角度', reading: 'かくど' },
  { kanji: '公式', reading: 'こうしき' },
  { kanji: '牧場', reading: 'ぼくじょう' },
  { kanji: '足跡', reading: 'あしあと' },
  { kanji: '公共', reading: 'こうきょう' },
  { kanji: '名所', reading: 'めいしょ' },
  { kanji: '地獄', reading: 'じごく' },
  { kanji: '姿勢', reading: 'しせい' },
  { kanji: '車輪', reading: 'しゃりん' },
  { kanji: '血液', reading: 'けつえき' },
  { kanji: '死体', reading: 'したい' },
  { kanji: '強化', reading: 'きょうか' },
  { kanji: '紅葉', reading: 'こうよう' },
  { kanji: '蒸気', reading: 'じょうき' },
  { kanji: '大工', reading: 'だいく' },
];

export default words;
