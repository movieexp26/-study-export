// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "ご参加ありがとうございます。",
          "content": "本研究では、ご自身の映画鑑賞経験に関する質問に回答していただいた後、１本の予告編をご覧いただき、予告編を視聴して感じたことに関する質問に回答していただきます。正解などはありませんので，感じたままにご回答ください。"
        },
        {
          "required": true,
          "type": "text",
          "title": "準備ができた方は「次へ」を押して，開始してください。"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instruction"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "ご参加ありがとうございます。",
          "content": "本実験・調査の実施者は慶應義塾大学の李光鎬ゼミの３年生です。実施責任者は慶應義塾大学の李光鎬です。本実験・調査への参加はあなたの任意によるものです。"
        },
        {
          "required": true,
          "type": "text",
          "title": "本実験・調査の手続き",
          "content": "本実験・調査では映画の予告編に関するアンケートにお答えいただきます。この実験・調査の所要時間は10〜20分程度です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "謝礼について",
          "content": "本実験に参加していただくにあたり、謝礼代100円をお支払いします。\n実験終了後、Amazon e-Giftを送付するためのメールアドレスをご記入いただきます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "潜在的なリスク・苦痛など",
          "content": "実験による多少の疲労は除き，潜在的なリスクや苦痛はありません。また，いつ，いかなる理由でも，自由に実験を中止していただけます（参加と中止もご参照ください）。"
        },
        {
          "required": true,
          "type": "text",
          "title": "参加による利益",
          "content": "あなたが本実験・調査に参加することで学習，認知，感情についての研究の発展に繋がります。"
        },
        {
          "required": true,
          "type": "text",
          "title": "個人情報の取り扱い",
          "content": "本実験・調査によって得られた情報は法律による開示請求を除き，匿名性が維持されます。匿名性は実験参加者番号の付与，統計的解析によって保たれます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "参加と中止",
          "content": "あなたは本実験・調査への参加もしくは不参加を自由に選択できます。また，参加した場合でも，いつでも，どのような理由でも，途中で実験・調査を中止することができます。もし，途中で実験・調査を中止したくなった場合は，「ESCキー」を押した後，ウィンドウを閉じることで実験・調査を中止できます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "参加にあたっての注意",
          "content": "本実験は音声付きの動画を見ていただく場面がございます。従って、音声有りで動画を再生できる環境、又はイヤホンの準備をお願いいたします。"
        },
        {
          "required": true,
          "type": "text",
          "title": "実験・調査実施者への問い合わせ",
          "content": "本実験・調査に対して質問がある場合は，実施者または実施責任者にお問い合わせください。"
        },
        {
          "required": true,
          "type": "radio",
          "label": "\u003Cspan style = \"color: tomato\"\u003E実験・調査への参加に同意いただけますか？同意いただける方はチェックをお願いします。同意いただけない方は，ESCを押した後，ウィンドウを閉じてください。\u003C\u002Fspan\u003E",
          "options": [
            {
              "label": "上記の説明をよく読み，理解した上で，実験・調査への参加に同意します。",
              "coding": "yes"
            }
          ],
          "name": "lessspan-style-\"color:-tomato\"greateresclessspangreater"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous() {
const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));
this.state.participantID = participantID;
const id = Number(this.state.participantID);
this.state.condition = (id % 3) +1;
}
      },
      "title": "informedConsent"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "input",
          "label": "年齢",
          "attributes": {
            "type": "number",
            "min": "18",
            "max": "99"
          },
          "help": "年齢を半角数字で入力してください",
          "name": "age"
        },
        {
          "required": true,
          "type": "radio",
          "label": "性別",
          "options": [
            {
              "label": "男性",
              "coding": "men"
            },
            {
              "label": "女性",
              "coding": "women"
            },
            {
              "label": "回答しない",
              "coding": "no ansewer"
            }
          ],
          "name": "sex"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "demographic"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "ご自身の映画鑑賞経験に関して、以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
        },
        {
          "required": true,
          "type": "radio",
          "label": "１．映画館で映画を見る頻度について",
          "options": [
            {
              "coding": "1",
              "label": "１年に１本"
            },
            {
              "coding": "2",
              "label": "６か月に１本"
            },
            {
              "coding": "3",
              "label": "３か月に１本"
            },
            {
              "coding": "4",
              "label": "１か月に１本"
            },
            {
              "coding": "5",
              "label": "１週間に１本"
            },
            {
              "label": "全く見ない",
              "coding": "0"
            }
          ],
          "name": "movie_frequency"
        },
        {
          "required": true,
          "type": "radio",
          "label": "２．よく見る映画のジャンルについて",
          "options": [
            {
              "coding": "1",
              "label": "アクション"
            },
            {
              "coding": "2",
              "label": "恋愛"
            },
            {
              "coding": "3",
              "label": "ホラー"
            },
            {
              "coding": "4",
              "label": "サスペンス"
            },
            {
              "coding": "5",
              "label": "SF"
            },
            {
              "label": "ミステリー",
              "coding": "6"
            }
          ],
          "name": "movie_genre"
        },
        {
          "required": true,
          "type": "radio",
          "label": "３．映画を見る前に予告編を見る",
          "options": [
            {
              "coding": "1",
              "label": "まったくあてはまらない"
            },
            {
              "coding": "2",
              "label": "ややあてはまらない"
            },
            {
              "coding": "3",
              "label": "どちらともいえない"
            },
            {
              "coding": "4",
              "label": "ややあてはまる"
            },
            {
              "coding": "5",
              "label": "非常にあてはまる"
            }
          ],
          "name": "trailer_frequency"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": "",
        "undefined": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "multiple choice"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 384,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "この後、予告編が流れます",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Screen",
      "timeout": "2000"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "skip": "${this.state.condition != 3}",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "再生ボタンを押し、音声をオンにして最後まで視聴してください。"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Ciframe src=\"https:\u002F\u002Fdrive.google.com\u002Ffile\u002Fd\u002F1-xajNyr1od9nyiB2N5v_PW8sz9xSvjRN\u002Fpreview\" width=\"640\" height=\"480\"\u003E\u003C\u002Fiframe\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Page"
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "skip": "${this.state.condition != 2}",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "再生ボタンを押し、音声をオンにして最後まで視聴してください。"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Ciframe src=\"https:\u002F\u002Fdrive.google.com\u002Ffile\u002Fd\u002F1sYLzUTwAbIl4swVxihMk4WE9_GEGzcn9\u002Fpreview\" width=\"640\" height=\"480\"\u003E\u003C\u002Fiframe\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Page"
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "skip": "${this.state.condition != 1}",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "再生ボタンを押し、音声をオンにして最後まで視聴してください。"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Ciframe src=\"https:\u002F\u002Fdrive.google.com\u002Ffile\u002Fd\u002F1P0vJShfdpZbz6nemJzVLD3lo4znkVPic\u002Fpreview\" width=\"640\" height=\"480\"\u003E\u003C\u002Fiframe\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Page"
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "title": "",
          "content": "ご視聴ありがとうございました。予告編を見て感じたことに関して、以下の質問文を読んでいただき、あなたにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
        },
        {
          "required": true,
          "type": "radio",
          "label": "1．この予告編を見て、最も強く感じた感情を一つ選んでください。",
          "options": [
            {
              "label": "驚き",
              "coding": "1"
            },
            {
              "label": "感動",
              "coding": "2"
            },
            {
              "label": "面白さ・楽しさ",
              "coding": "3"
            },
            {
              "label": "ワクワク",
              "coding": "4"
            },
            {
              "label": "恐怖",
              "coding": "5"
            },
            {
              "label": "不安",
              "coding": "6"
            },
            {
              "label": "イライラ・怒り",
              "coding": "7"
            },
            {
              "label": "共感",
              "coding": "8"
            },
            {
              "label": "悲しみ",
              "coding": "9"
            },
            {
              "label": "特に何も感じなかった",
              "coding": "10"
            }
          ],
          "name": "emotion_type"
        },
        {
          "required": true,
          "type": "radio",
          "label": "2．先ほど選んだ感情をどの程度強く感じましたか。",
          "name": "emotion_intensity",
          "options": [
            {
              "label": "ほとんど感じなかった",
              "coding": "1"
            },
            {
              "label": "あまり強く感じなかった",
              "coding": "2"
            },
            {
              "label": "中程度に感じた",
              "coding": "3"
            },
            {
              "label": "強く感じた",
              "coding": "4"
            },
            {
              "label": "非常に強く感じた",
              "coding": "5"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "3．予告編を見ている間のあなたの状態は、どちらに近いものでしたか。",
          "name": "arousal",
          "options": [
            {
              "label": "非常に落ち着いていた",
              "coding": "1"
            },
            {
              "label": "やや落ち着いていた",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "やや興奮・高揚していた",
              "coding": "4"
            },
            {
              "label": "非常に興奮・高揚していた",
              "coding": "5"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "4．予告編を見ている間の気分は、どちらに近いものでしたか。",
          "options": [
            {
              "label": "非常に不快だった",
              "coding": "1"
            },
            {
              "label": "やや不快だった",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "やや快かった",
              "coding": "4"
            },
            {
              "label": "非常に快かった",
              "coding": "5"
            }
          ],
          "name": "valence"
        },
        {
          "required": true,
          "type": "radio",
          "label": "5．『千と千尋の神隠し』という作品名が表示されたとき、驚きましたか。",
          "name": "title_surprise",
          "options": [
            {
              "label": "まったく驚かなかった",
              "coding": "1"
            },
            {
              "label": "あまり驚かなかった",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "やや驚いた",
              "coding": "4"
            },
            {
              "label": "非常に驚いた",
              "coding": "5"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "6．作品名が表示されるまで、この映像が何の作品なのか気になりましたか。",
          "name": "title_curiosity",
          "options": [
            {
              "label": "まったく気にならなかった",
              "coding": "1"
            },
            {
              "label": "あまり気にならなかった",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "やや気になった",
              "coding": "4"
            },
            {
              "label": "非常に気になった",
              "coding": "5"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "7．予告編の内容に引き込まれましたか。",
          "name": "immersion",
          "options": [
            {
              "label": "まったく引き込まれなかった",
              "coding": "1"
            },
            {
              "label": "あまり引き込まれなかった",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "やや引き込まれた",
              "coding": "4"
            },
            {
              "label": "非常に引き込まれた",
              "coding": "5"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "8．この映画の本編を見たいと思いましたか。",
          "name": "watch_intention",
          "options": [
            {
              "label": "まったく思わなかった",
              "coding": "1"
            },
            {
              "label": "あまり思わなかった",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "やや思った",
              "coding": "4"
            },
            {
              "label": "非常に思った",
              "coding": "5"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "9．この映画が映画館で上映された場合、お金を払って見たいと思いましたか。",
          "name": "cinema_intention",
          "options": [
            {
              "label": "まったく思わなかった",
              "coding": "1"
            },
            {
              "label": "あまり思わなかった",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "やや思った",
              "coding": "4"
            },
            {
              "label": "非常に思った",
              "coding": "5"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "10．この予告編をSNSで共有したいと思いましたか。",
          "name": "sns_share",
          "options": [
            {
              "label": "まったく思わなかった",
              "coding": "1"
            },
            {
              "label": "あまり思わなかった",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "やや思った",
              "coding": "4"
            },
            {
              "label": "非常に思った",
              "coding": "5"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "11．この予告編を魅力的だと感じましたか。",
          "name": "attractive",
          "options": [
            {
              "label": "まったく魅力的に感じなかった",
              "coding": "1"
            },
            {
              "label": "あまり魅力的に感じなかった",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "やや魅力的に感じた",
              "coding": "4"
            },
            {
              "label": "非常に魅力的に感じた",
              "coding": "5"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "12．予告編を見て、映画の内容を理解できましたか。",
          "options": [
            {
              "label": "まったく理解できなかった",
              "coding": "1"
            },
            {
              "label": "あまり理解できなかった",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "やや理解できた",
              "coding": "4"
            },
            {
              "label": "非常に理解できた",
              "coding": "5"
            }
          ],
          "name": "understanding"
        },
        {
          "required": true,
          "type": "radio",
          "label": "13．この予告編は強く印象に残りましたか。",
          "options": [
            {
              "label": "まったく思わなかった",
              "coding": "1"
            },
            {
              "label": "あまり思わなかった",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "やや思った",
              "coding": "4"
            },
            {
              "label": "非常に思った",
              "coding": "5"
            }
          ],
          "name": "impression"
        },
        {
          "required": true,
          "type": "radio",
          "label": "14．『千と千尋の神隠し』という作品名は、予告編のどのあたりで表示されたと感じましたか。",
          "options": [
            {
              "label": "前半",
              "coding": "1"
            },
            {
              "label": "中盤",
              "coding": "2"
            },
            {
              "label": "後半",
              "coding": "3"
            },
            {
              "label": "覚えていない・分からない",
              "coding": "4"
            }
          ],
          "name": "title_position"
        },
        {
          "required": true,
          "type": "radio",
          "label": "15．作品名が表示される前に、この映像が『千と千尋の神隠し』に関係するものだと気づいていましたか。",
          "options": [
            {
              "label": "はっきり気づいていた",
              "coding": "1"
            },
            {
              "label": "何となく気づいていた",
              "coding": "2"
            },
            {
              "label": "気づいていなかった",
              "coding": "3"
            },
            {
              "label": "覚えていない",
              "coding": "4"
            }
          ],
          "name": "noticed_before_title"
        },
        {
          "required": true,
          "type": "radio",
          "label": "16．これまでにアニメ映画『千と千尋の神隠し』を見たことがありますか。",
          "options": [
            {
              "label": "一度も見たことがない",
              "coding": "1"
            },
            {
              "label": "一部だけ見たことがある",
              "coding": "2"
            },
            {
              "label": "1回見たことがある",
              "coding": "3"
            },
            {
              "label": "2回以上見たことがある",
              "coding": "4"
            }
          ],
          "name": "watch_history"
        },
        {
          "required": true,
          "type": "radio",
          "label": "17．予告編を見る前から、『千と千尋の神隠し』をどの程度好きでしたか。",
          "options": [
            {
              "label": "まったく好きではなかった",
              "coding": "1"
            },
            {
              "label": "あまり好きではなかった",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "やや好きだった",
              "coding": "4"
            },
            {
              "label": "非常に好きだった",
              "coding": "5"
            }
          ],
          "name": "liking"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Questionnaire"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "textarea",
          "help": "今視聴していただいた予告編の、どういった部分が映画を見たいと思う理由になりましたか？あなたの考えを自由に書いてください。 ない場合は「特になし」と記入してください。",
          "label": "予告編の魅力についての質問",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Free description"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": false,
          "type": "textarea",
          "label": "調査・実験時の問題",
          "help": "調査・実験の際に問題があった方は内容をご入力ください。問題がなかった方は空欄のままでけっこうです。",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Error Report"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "実験終了後の説明",
          "content": "本実験にご参加いただき、ありがとうございました。  \n本実験では、映画予告編において作品名が表示されるタイミングの違いが、視聴者の感情や予告編への評価、映画本編の視聴意欲などにどのような影響を与えるかを検討しています。  \nそのため、参加者の方には、作品名「千と千尋の神隠し」が表示されるタイミングが異なる予告編のいずれか1つをご覧いただきました。  \n実験開始前にこの研究目的を詳しくお伝えすると、予告編を見る際の意識や回答に影響を与える可能性があるため、事前の説明では研究目的の詳細をお伝えしていませんでした。  \n以上の説明をご確認いただいたうえで、本実験で得られた回答データを研究に使用することに同意いただける場合は、下の「同意する」を選択してください。"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "上記の説明を読み、理解した上で、回答データを研究に使用することに同意します。",
              "coding": "yes"
            }
          ],
          "label": "以上の説明をご確認いただいたうえで、本実験で得られた回答データを研究に使用することに同意いただけますか。同意いただける場合は、下の項目を選択して「次へ」を押してください。同意いただけない場合は、この画面でウィンドウを閉じて実験を終了してください。",
          "name": "debrief_consent"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Debriefing"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "input",
          "label": "実験にご協力いただき誠にありがとうございました。以下に謝礼代を送付するためのEメールアドレスをご記入ください。",
          "attributes": {
            "type": "email"
          },
          "help": "本実験において提供された電子メールアドレスは、謝礼代を送付する際にのみ使用します。提供されたメールアドレスは、第三者への提供やその他の目的のために利用することはありません。",
          "name": "email_address"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "mailaddress"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "\u003Cspan style = \"color:tomato\"\u003Eこれで本実験・調査は終了です！\u003C\u002Fspan\u003E",
          "content": "\u003Cspan style = \"color:tomato\"\u003Eご協力くださり，誠にありがとうございました。ウィンドウを閉じて実験を終了してください。\u003C\u002Fspan\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous() {
const participantID = this.random.uuid4()
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "NSNoi3KQxxcb",
    filename: filename,
    data: data,
  }),
});

}
      },
      "title": "thanks",
      "timeout": "5000",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()