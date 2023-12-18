  //問題文は画像のタイトルから取ろうと思ったけど特殊文字がきついか
  // "\\"+ で追加するか
  // 画像を同時に表示させる. 

	let Q = ["\\mathbb{Q}","\\"+"sqrt{x^2-1}","\\mathbb{Z}",];//問題文
	let Q_No = Math.floor( Math.random() * Q.length);//問題をランダムで出題する

	let Q_i = 0;//回答初期値・現在単語どこまで合っているか判定している文字番号
	let Q_l = Q[Q_No].length;//計算用の文字の長さ


window.addEventListener("keydown", push_Keydown);

function push_Keydown(event){

	let keyCode = event.key;
	if (Q_l == Q_l-Q_i){
    
		document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l); //問題を書き出す

		}



	if (Q[Q_No].charAt(Q_i) == keyCode) { //押したキーが合っていたら

		Q_i++; //判定する文章に１足す
		document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l); //問題を書き出す

		if (Q_l-Q_i === 0){ //全部正解したら
	
	
			Q_No = Math.floor( Math.random() * Q.length);//問題をランダムで出題する
			Q_i = 0;//回答初期値・現在どこまで合っているか判定している文字番号
			Q_l = Q[Q_No].length;//計算用の文字の長さ


			document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l); //新たな問題を書き出す

		}
	}
}