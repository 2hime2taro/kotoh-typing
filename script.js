// ==========================================
// 1. お題データ
// ==========================================
const WORD_LIST = {
  1: [
    { kanji: "雨", kana: "あめ" },
    { kanji: "電話", kana: "でんわ" },
    { kanji: "いちご", kana: "いちご" },
    { kanji: "段ボール", kana: "だんぼーる" },
    { kanji: "唐揚げ", kana: "からあげ" },
    { kanji: "海", kana: "うみ" },
    { kanji: "ご飯", kana: "ごはん" },
    { kanji: "ラベルレス", kana: "らべるれす" },
    { kanji: "そぼろ丼", kana: "そぼろどん" },
    { kanji: "キリン", kana: "きりん" },
    { kanji: "親子丼", kana: "おやこどん" },
    { kanji: "洞窟", kana: "どうくつ" },
    { kanji: "コイン", kana: "こいん" },
    { kanji: "さかな", kana: "さかな" },
    { kanji: "フランス", kana: "ふらんす" },
    { kanji: "すいか", kana: "すいか" },
    { kanji: "熊本県", kana: "くまもとけん" },
    { kanji: "空", kana: "そら" },
    { kanji: "タコ", kana: "たこ" },
    { kanji: "地図", kana: "ちず" },
    { kanji: "机", kana: "つくえ" },
    { kanji: "手紙", kana: "てがみ" },
    { kanji: "時計", kana: "とけい" },
    { kanji: "ナス", kana: "なす" },
    { kanji: "虹", kana: "にじ" },
    { kanji: "ピアノ", kana: "ぴあの" },
    { kanji: "ネコ", kana: "ねこ" },
    { kanji: "のり", kana: "のり" },
    { kanji: "花", kana: "はな" },
    { kanji: "ピーマン", kana: "ぴーまん" },
    { kanji: "船", kana: "ふね" },
    { kanji: "ヘビ", kana: "へび" },
    { kanji: "本", kana: "ほん" },
    { kanji: "みかん", kana: "みかん" },
    { kanji: "虫", kana: "むし" },
    { kanji: "メガネ", kana: "めがね" },
    { kanji: "もも", kana: "もも" },
    { kanji: "山", kana: "やま" },
    { kanji: "雪", kana: "ゆき" },
    { kanji: "夜", kana: "よる" },
    { kanji: "ライオン", kana: "らいおん" },
    { kanji: "リンゴ", kana: "りんご" },
    { kanji: "ルビー", kana: "るびー" },
    { kanji: "レモン", kana: "れもん" },
    { kanji: "ロウソク", kana: "ろうそく" },
    { kanji: "ワニ", kana: "わに" },
    { kanji: "担任", kana: "たんにん" },
    { kanji: "木星", kana: "もくせい" },
  ],
  2: [
    { kanji: "一次関数", kana: "いちじかんすう" },
    { kanji: "位置エネルギー", kana: "いちえねるぎー" },
    { kanji: "段階的に", kana: "だんかいてきに" },
    { kanji: "元素記号", kana: "げんそきごう" },
    { kanji: "電話番号", kana: "でんわばんごう" },
    { kanji: "月と太陽", kana: "つきとたいよう" },
    { kanji: "化学変化", kana: "かがくへんか" },
    { kanji: "基本的人権", kana: "きほんてきじんけん" },
    { kanji: "空気抵抗", kana: "くうきていこう" },
    { kanji: "経済活動", kana: "けいざいかつどう" },
    { kanji: "公害問題", kana: "こうがいもんだい" },
    { kanji: "エビフライ", kana: "えびふらい" },
    { kanji: "自然遺産", kana: "しぜんいさん" },
    { kanji: "水溶液", kana: "すいようえき" },
    { kanji: "世界遺産", kana: "せかいいさん" },
    { kanji: "相対性理論", kana: "そうたいせいりろん" },
    { kanji: "期末テスト", kana: "きまつてすと" },
    { kanji: "レベル上げ", kana: "れべるあげ" },
    { kanji: "定期テスト", kana: "ていきてすと" },
    { kanji: "天の川銀河", kana: "あまのがわぎんが" },
    { kanji: "第二次世界大戦", kana: "だいにじせかいたいせん" },
    { kanji: "発電設備", kana: "はつでんせつび" },
    { kanji: "平均点", kana: "へいきんてん" },
    { kanji: "プレイ時間", kana: "ぷれいじかん" },
    { kanji: "貿易赤字", kana: "ぼうえきあかじ" },
    { kanji: "平安時代", kana: "へいあんじだい" },
    { kanji: "見取り図", kana: "みとりず" },
    { kanji: "ゲーム開発部", kana: "げーむかいはつぶ" },
    { kanji: "マスタードソース", kana: "ますたーどそーす" },
    { kanji: "パンチングマシーン", kana: "ぱんちんぐましーん" },
    { kanji: "理科室", kana: "りかしつ" },
    { kanji: "学生時代", kana: "がくせいじだい" },
    { kanji: "連立方程式", kana: "れんりつほうていしき" },
    { kanji: "二次方程式", kana: "にじほうていしき" },
    { kanji: "ヘリウムガス", kana: "へりうむがす" },
    { kanji: "水酸化ナトリウム", kana: "すいさんかなとりうむ" },
    { kanji: "冥王星", kana: "めいおうせい" },
    { kanji: "水金地火木土天海", kana: "すいきんちかもくどてんかい" },
  ],
  3: [
    { kanji: "春はあけぼの", kana: "はるはあけぼの" },
    { kanji: "源氏物語の感想", kana: "げんじものがたりのかんそう" },
    { kanji: "トウモロコシを二等分", kana: "とうもろこしをにとうぶん" },
    { kanji: "大化の改新が行われる", kana: "たいかのかいしんがおこなわれる" },
    { kanji: "日本国憲法を公布する", kana: "にほんこくけんぽうをこうふする" },
    { kanji: "三大義務を守る", kana: "さんだいぎむをまもる" },
    { kanji: "地方自治の本旨", kana: "ちほうじちのほんし" },
    { kanji: "内閣総理大臣を選別する", kana: "ないかくそうりだいじんをせんべつする" },
    { kanji: "水は水素と酸素に分かれる", kana: "みずはすいそとさんそにわかれる" },
    { kanji: "光合成により酸素ができる", kana: "こうごうせいによりさんそができる" },
    { kanji: "最近台風が多いです", kana: "さいきんたいふうがおおいです" },
    { kanji: "低気圧なのでできません", kana: "ていきあつなのでできません" },
    { kanji: "正方形の辺の長さは等しい", kana: "せいほうけいのへんのながさはひとしい" },
    { kanji: "連立方程式を解く", kana: "れんりつほうていしきをとく" },
    { kanji: "一次関数のグラフをかく", kana: "いちじかんすうのぐらふをかく" },
    { kanji: "データの活用を学ぶ", kana: "でーたのかつようをまなぶ" },
    { kanji: "アルゴリズムを理解する", kana: "あるごりずむをりかいする" }
  ],
  4: [
    { kanji: "下段中段僕ジダン", kana: "げだんちゅうだんぼくじだん" },
    { kanji: "直線的", kana: "ちょくせんてき" },
    { kanji: "段階的に", kana: "だんかいてきに" },
    { kanji: "電話番号", kana: "でんわばんごう" },
    { kanji: "小学校", kana: "しょうがっこう" },
    { kanji: "小学生", kana: "しょうがくせい" },
    { kanji: "出身校", kana: "しゅっしんこう" },
    { kanji: "出版社", kana: "しゅっぱんしゃ" },
    { kanji: "ばかめ、そっちは残像だ", kana: "ばかめ、そっちはざんぞうだ" },
    { kanji: "ばかめ、そっちは本体だ", kana: "ばかめ、そっちはほんたいだ" },
    { kanji: "哨戒班", kana: "しょうかいはん" },
    { kanji: "塩を少々", kana: "しおをしょうしょう" },
    { kanji: "良薬口に苦し", kana: "りょうやくくちににがし" },
    { kanji: "木星", kana: "もくせい" },
    { kanji: "火星", kana: "かせい" },
    { kanji: "地球", kana: "ちきゅう" },
    { kanji: "金星", kana: "きんせい" },
    { kanji: "水星", kana: "すいせい" },
    { kanji: "太陽", kana: "たいよう" },
    { kanji: "海王星", kana: "かいおうせい" },
    { kanji: "天王星", kana: "てんのうせい" },
    { kanji: "土星", kana: "どせい" },
    { kanji: "太陽系", kana: "たいようけい" },
    { kanji: "恒星", kana: "こうせい" },
    { kanji: "こんにちわんこそば", kana: "こんにちわんこそば" },
    { kanji: "勝手気ままに", kana: "かってきままに" }
  ]
};

const ROMA_MAP = {
  'あ':['a'], 'い':['i'], 'う':['u'], 'え':['e'], 'お':['o'],
  'か':['ka'], 'き':['ki'], 'く':['ku'], 'け':['ke'], 'こ':['ko'],
  'さ':['sa'], 'し':['si','shi'], 'す':['su'], 'せ':['se'], 'そ':['so'],
  'た':['ta'], 'ち':['ti','chi'], 'つ':['tu','tsu'], 'て':['te'], 'と':['to'],
  'な':['na'], 'に':['ni'], 'ぬ':['nu'], 'ね':['ne'], 'の':['no'],
  'は':['ha'], 'ひ':['hi'], 'ふ':['hu','fu'], 'へ':['he'], 'ほ':['ho'],
  'ま':['ma'], 'み':['mi'], 'む':['mu'], 'め':['me'], 'も':['mo'],
  'や':['ya'], 'ゆ':['yu'], 'よ':['yo'],
  'ら':['ra'], 'り':['ri'], 'る':['ru'], 'れ':['re'], 'ろ':['ro'],
  'わ':['wa'], 'を':['wo'], 'ん':['nn','n','xn'],
  'が':['ga'], 'ぎ':['gi'], 'ぐ':['gu'], 'げ':['ge'], 'ご':['go'],
  'ざ':['za'], 'じ':['zi','ji'], 'ず':['zu'], 'ぜ':['ze'], 'ぞ':['zo'],
  'だ':['da'], 'ぢ':['di'], 'づ':['du'], 'で':['de'], 'ど':['do'],
  'ば':['ba'], 'び':['bi'], 'ぶ':['bu'], 'べ':['be'], 'ぼ':['bo'],
  'ぱ':['pa'], 'ぴ':['pi'], 'ぷ':['pu'], 'ぺ':['pe'], 'ぽ':['po'],
  'ぁ':['la','xa'], 'ぃ':['li','xi'], 'ぅ':['lu','xu'], 'ぇ':['le','xe'], 'ぉ':['lo','xo'],
  'ゃ':['lya','xya'], 'ゅ':['lyu','xyu'], 'ょ':['lyo','xyo'],
  'っ':['ltu','xtu','ltsu'], 'ゎ':['lwa','xwa'],
  'きゃ':['kya'], 'きゅ':['kyu'], 'きょ':['kyo'],
  'しゃ':['sya','sha'], 'しゅ':['syu','shu'], 'しょ':['syo','sho'], 'しぇ':['sye','she'],
  'ちゃ':['tya','cha'], 'ちゅ':['tyu','chu'], 'ちょ':['tyo','cho'], 'ちぇ':['tye','che'],
  'にゃ':['nya'], 'にゅ':['nyu'], 'にょ':['nyo'],
  'ひゃ':['hya'], 'ひゅ':['hyu'], 'ひょ':['hyo'],
  'みゃ':['mya'], 'みゅ':['myu'], 'みょ':['myo'],
  'りゃ':['rya'], 'りゅ':['ryu'], 'りょ':['ryo'],
  'ぎゃ':['gya'], 'ぎゅ':['gyu'], 'ぎょ':['gyo'],
  'じゃ':['zya','ja'], 'じゅ':['zyu','ju'], 'じょ':['zyo','jo'], 'じぇ':['zye','je'],
  'びゃ':['bya'], 'びゅ':['byu'], 'びょ':['byo'], 'ぴゃ':['pya'], 'ぴゅ':['pyu'], 'ぴょ':['pyo'],
  'ふぁ':['fa'], 'ふぃ':['fi'], 'ふぇ':['fe'], 'ふぉ':['fo'],
  'てぃ':['thi'], 'とぅ':['thu'], 'どぃ':['dhi'], 'どぅ':['dhu'],
  'ヴぁ':['va'], 'ヴぃ':['vi'], 'ヴ':['vu'], 'ヴぇ':['ve'], 'ヴぉ':['vo'],
  'ー':['-'], '、': [','], '。': ['.']
};

// ==========================================
// 2. 変数管理
// ==========================================
let gameTime = 30;
let timerInterval = null;
let score = 0;
let totalTypedCount = 0;
let missCount = 0;

let remainingWords = []; 
let nextItem = null;
let typedRoma = ""; 

let currentKanaStr = "";       
let romaPatterns = [];         
let currentPatternIndex = 0;   
let currentMatchedInput = "";  

// ==========================================
// 3. ローマ字解析ロジック
// ==========================================
function parseKanaToRomaPatterns(kanaStr) {
  const patterns = [];
  let i = 0;

  while (i < kanaStr.length) {
    const char1 = kanaStr[i];
    const char2 = kanaStr[i + 1] || "";

    const combo2 = char1 + char2;
    if (char2 && ROMA_MAP[combo2]) {
      patterns.push([...ROMA_MAP[combo2]]);
      i += 2;
      continue;
    }

    if (char1 === 'っ' && char2) {
      const comboNext2 = char2 + (kanaStr[i + 2] || "");
      let nextCandidates = [];

      if (ROMA_MAP[comboNext2]) {
        nextCandidates = ROMA_MAP[comboNext2];
      } else if (ROMA_MAP[char2]) {
        nextCandidates = ROMA_MAP[char2];
      }

      const sokuonCandidates = [];
      nextCandidates.forEach(cand => {
        const firstLetter = cand.charAt(0);
        if (firstLetter.match(/[a-z]/i) && !"aeiou".includes(firstLetter)) {
          sokuonCandidates.push(firstLetter);
        }
      });

      sokuonCandidates.push(...ROMA_MAP['っ']);
      patterns.push([...new Set(sokuonCandidates)]);
      i += 1;
      continue;
    }

    if (ROMA_MAP[char1]) {
      patterns.push([...ROMA_MAP[char1]]);
    } else {
      patterns.push([char1]);
    }
    i += 1;
  }

  return patterns;
}

// ==========================================
// 4. ハイスコア・ランキング管理 (localStorage)
// ==========================================
function getScores(level) {
  const data = localStorage.getItem(`kotou_typing_scores_lvl_${level}`);
  return data ? JSON.parse(data) : [];
}

function saveScore(level, name, kpm) {
  let scores = getScores(level);
  scores.push({ name, kpm, date: new Date().toLocaleDateString() });
  scores.sort((a, b) => b.kpm - a.kpm);
  scores = scores.slice(0, 5); // 上位5件まで保持
  localStorage.setItem(`kotou_typing_scores_lvl_${level}`, JSON.stringify(scores));
  return scores;
}

// ランキング表示の更新処理
function updateRankingDisplay() {
  const levelSelect = document.getElementById('level-select');
  const level = levelSelect ? levelSelect.value : "1";
  const scores = getScores(level);
  const rankingList = document.getElementById('ranking-list');
  const bestKpmEl = document.getElementById('best-kpm');

  if (bestKpmEl) {
    bestKpmEl.textContent = scores.length > 0 ? scores[0].kpm : 0;
  }

  if (rankingList) {
    if (scores.length === 0) {
      rankingList.innerHTML = '<div class="no-data">記録がまだありません</div>';
    } else {
      rankingList.innerHTML = scores.slice(0, 3).map((item, index) => `
        <div class="ranking-item">
          <span class="rank-num">${index + 1}位</span>
          <span class="rank-name">${item.name}</span>
          <span class="rank-kpm">${item.kpm} KPM</span>
        </div>
      `).join('');
    }
  }
}

// 読み込み完了時に確実に呼び出す
document.addEventListener('DOMContentLoaded', () => {
  updateRankingDisplay();

  const levelSelect = document.getElementById('level-select');
  if (levelSelect) {
    levelSelect.addEventListener('change', updateRankingDisplay);
  }
});
// ==========================================
// 5. 表示・ゲーム進行ロジック
// ==========================================
function updateDisplay() {
  const untypedTextDisplay = document.getElementById('untyped-text');
  if (!untypedTextDisplay) return;

  let remainingText = "";
  const currentCandidates = romaPatterns[currentPatternIndex];
  if (currentCandidates) {
    const matchedCandidate = currentCandidates.find(p => p.startsWith(currentMatchedInput)) || currentCandidates[0];
    remainingText += matchedCandidate.substring(currentMatchedInput.length);
  }

  for (let i = currentPatternIndex + 1; i < romaPatterns.length; i++) {
    remainingText += romaPatterns[i][0];
  }

  untypedTextDisplay.textContent = remainingText;
}

function nextWord() {
  const levelSelect = document.getElementById('level-select');
  const kanjiDisplay = document.getElementById('kanji-display');
  const typedTextDisplay = document.getElementById('typed-text');
  const level = levelSelect ? levelSelect.value : "1";

  const currentItem = nextItem;

  if (remainingWords.length === 0) {
    remainingWords = WORD_LIST[level] ? [...WORD_LIST[level]] : [...WORD_LIST[1]];
  }
  const randomIndex = Math.floor(Math.random() * remainingWords.length);
  nextItem = remainingWords.splice(randomIndex, 1)[0];

  if (kanjiDisplay && currentItem) {
    kanjiDisplay.textContent = currentItem.kanji;
    currentKanaStr = currentItem.kana;
  }

  const nextDisplayEl = document.getElementById('next-kanji-display');
  if (nextDisplayEl && nextItem) {
    nextDisplayEl.textContent = nextItem.kanji;
  }

  romaPatterns = parseKanaToRomaPatterns(currentKanaStr);
  currentPatternIndex = 0;
  currentMatchedInput = "";
  typedRoma = "";

  if (typedTextDisplay) typedTextDisplay.textContent = "";
  updateDisplay();
}

function handleKeyPress(e) {
  if (e.key.length !== 1 || e.ctrlKey || e.metaKey) return;

  const scoreDisplay = document.getElementById('score');
  const typedTextDisplay = document.getElementById('typed-text');
  const wordDisplayArea = document.querySelector('.word-display-area');

  const inputKey = e.key.toLowerCase();
  let currentCandidates = romaPatterns[currentPatternIndex];
  if (!currentCandidates) return;

  if (currentMatchedInput === "n" && currentCandidates.includes("nn")) {
    const isLastPattern = (currentPatternIndex === romaPatterns.length - 1);

    if (inputKey === 'n') {
      // 2つ目の n
    } else if (isLastPattern || !"aeiouyn".includes(inputKey)) {
      currentPatternIndex++;
      currentMatchedInput = "";
      currentCandidates = romaPatterns[currentPatternIndex];
      
      if (!currentCandidates) {
        totalTypedCount++;
        score += 10;
        if (scoreDisplay) scoreDisplay.textContent = score;
        nextWord();
        return;
      }
    }
  }

  const testInput = currentMatchedInput + inputKey;
  const matchedPattern = currentCandidates.find(pattern => pattern.startsWith(testInput));

  if (matchedPattern) {
    currentMatchedInput = testInput;
    typedRoma += inputKey;
    totalTypedCount++;
    score += 10;
    if (scoreDisplay) scoreDisplay.textContent = score;

    if (currentMatchedInput === matchedPattern) {
      currentPatternIndex++;
      currentMatchedInput = "";
    }

    if (typedTextDisplay) typedTextDisplay.textContent = typedRoma;

    if (currentPatternIndex >= romaPatterns.length) {
      nextWord();
    } else {
      updateDisplay();
    }
  } else {
    missCount++;
    if (wordDisplayArea) {
      wordDisplayArea.classList.add('miss-flash');
      setTimeout(() => {
        wordDisplayArea.classList.remove('miss-flash');
      }, 150);
    }
  }
}

function showResults() {
  const playerNameInput = document.getElementById('player-name-input');
  const name = (playerNameInput && playerNameInput.value.trim()) || "ゲスト";
  const levelSelect = document.getElementById('level-select');
  const level = levelSelect ? levelSelect.value : "1";

  document.getElementById('res-player-name').textContent = name;

  const kpm = totalTypedCount * 2; 
  const totalInputs = totalTypedCount + missCount;
  const accuracy = totalInputs > 0 ? ((totalTypedCount / totalInputs) * 100).toFixed(1) : 0;

  document.getElementById('res-wpm').textContent = kpm;
  document.getElementById('res-accuracy').textContent = `${accuracy}%`;
  document.getElementById('res-miss').textContent = `${missCount} 回`;

  const prevScores = getScores(level);
  const isNewRecord = prevScores.length === 0 || kpm > prevScores[0].kpm;
  saveScore(level, name, kpm);

  const recordMsgEl = document.getElementById('new-record-msg');
  if (recordMsgEl) {
    recordMsgEl.style.display = isNewRecord ? 'block' : 'none';
  }

  let title = "がんばろう！";

  if (kpm >= 1340) {
    title = "日本一位！";
  } else if (kpm >= 1000) {
    title = "日本2位！？";
  } else if (kpm >= 900) {
    title = "RTCに出てください";
  } else if (kpm >= 800) {
    title = "毎パソで1位になってください";
  } else if (kpm >= 700) {
    title = "神様ですか？";
  } else if (kpm >= 690) {
    title = "学校１位おめおめ！！！";
  } else if (kpm >= 658) {
    title = "え？…";
  } else if (kpm >= 600) {
    title = "学校1位の平均値じゃん！";
  } else if (kpm >= 539) {
    title = "学校1位の背中が見えてきた！！";
  } else if (kpm >= 500) {
    title = "学校5位以内…もう何が起こってるのか分からない";
  } else if (kpm >= 470) {
    title = "学校上位1%！？";
  } else if (kpm >= 400) {
    title = "学校15位以内！";
  } else if (kpm >= 300) {
    title = "速すぎて見えない…";
  } else if (kpm >= 250) {
    title = "学校上位20%以内！？";
  } else if (kpm >= 200) {
    title = "すご過ぎる！";
  } else if (kpm >= 150) {
    title = "は、速い…";
  } else if (kpm >= 100) {
    title = "湖東中学校では上位50%！";
  } else if (kpm >= 40) {
    title = "平均より早い！";
  } else {
    title = "がんばろう！";
  }

  const rankEl = document.getElementById('res-rank');
  if (rankEl) rankEl.textContent = "-";

  document.getElementById('res-title').textContent = title;
}

function endGame() {
  clearInterval(timerInterval);
  window.removeEventListener('keydown', handleKeyPress);
  document.body.classList.remove('in-game');

  document.getElementById('play-screen').classList.remove('active');
  document.getElementById('result-screen').classList.add('active');

  showResults();
}

function startCountdown(callback) {
  let countOverlay = document.getElementById('countdown-overlay');
  if (!countOverlay) {
    countOverlay = document.createElement('div');
    countOverlay.id = 'countdown-overlay';
    Object.assign(countOverlay.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '80px',
      fontWeight: 'bold',
      color: '#ffffff',
      zIndex: '9999'
    });
    document.body.appendChild(countOverlay);
  }

  countOverlay.style.display = 'flex';
  
  const steps = ["3", "2", "1", "すたーと！"];
  let stepIndex = 0;

  countOverlay.textContent = steps[stepIndex];

  const interval = setInterval(() => {
    stepIndex++;
    if (stepIndex < steps.length) {
      countOverlay.textContent = steps[stepIndex];
    } else {
      clearInterval(interval);
      countOverlay.style.display = 'none';
      callback();
    }
  }, 1000);
}

function startGame() {
  const levelSelect = document.getElementById('level-select');
  const scoreDisplay = document.getElementById('score');
  const timerDisplay = document.getElementById('timer');
  const startScreen = document.getElementById('start-screen');
  const playScreen = document.getElementById('play-screen');

  score = 0;
  totalTypedCount = 0;
  missCount = 0;
  gameTime = 30;

  if (scoreDisplay) scoreDisplay.textContent = score;
  if (timerDisplay) timerDisplay.textContent = gameTime;

  const level = levelSelect ? levelSelect.value : "1";
  remainingWords = WORD_LIST[level] ? [...WORD_LIST[level]] : [...WORD_LIST[1]];

  let randomIndex = Math.floor(Math.random() * remainingWords.length);
  nextItem = remainingWords.splice(randomIndex, 1)[0];

  if (startScreen) startScreen.classList.remove('active');
  if (playScreen) playScreen.classList.add('active');

  document.body.classList.add('in-game');

  nextWord();

  startCountdown(() => {
    window.addEventListener('keydown', handleKeyPress);

    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      gameTime--;
      if (timerDisplay) timerDisplay.textContent = gameTime;
      if (gameTime <= 0) {
        endGame();
      }
    }, 1000);
  });
}

// ==========================================
// 6. 画面ロード完了時のイベント設定
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const retryBtn = document.getElementById('retry-btn');
  const levelSelect = document.getElementById('level-select');

  updateRankingDisplay();

  if (levelSelect) {
    levelSelect.addEventListener('change', updateRankingDisplay);
  }

  if (startBtn) {
    startBtn.onclick = () => {
      startGame();
    };
  }

  if (retryBtn) {
    retryBtn.onclick = () => {
      document.getElementById('result-screen').classList.remove('active');
      document.getElementById('start-screen').classList.add('active');
      updateRankingDisplay();
    };
  }
});