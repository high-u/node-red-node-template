// モジュールロード
var http = require('http');

// ダウンロード先URLを指定する
var url = 'https://raw.githubusercontent.com/high-u/node-red-node-template/master/LICENSE';

// ダウンロードする
var rss = ''; 
var req = http.get(url, function (res) {
    
    // テキストファイルの場合は、エンコード指定は重要！
    res.setEncoding('utf8');

    // データを受け取るたびに、文字列を追加
    res.on('data', function (xml) {
        rss += xml;
    });

    // ファイルのダウンロードが終わるとendイベントが呼ばれる
    res.on('end', function () {
        console.log('finish loading rss feed.');
    }); 
});

// 通信エラーなどはここで処理する
req.on('error', function (err) {
    console.log('Error: ', err); return;
});
