/*

	Planet Buster enemy data
	2012/01/28

*/

//file			画像ファイル
//width,heigh	画像サイズ
//colx,coly		当たり判定位置
//colw,colh		画像サイズ
//point			得点
//def			耐久力
//burn			破壊パターン	0:小 1:中 2以上:大（爆発エフェクト数）
//type			敵タイプ		0:小型 1:中型 2:大型 3:ボス 5:アイテム
//				アイテムの場合  0:power 1:bomb 2:1up

var enemydata = {
//Item
'CarrierP':		{file: 'media/key4.png',	w: 56, h:128, colx:  0, coly:  0, colw: 56, colh:128, point: 1000, def:  700, burn:10, type: 0 },
'CarrierB':		{file: 'media/key4.png',	w: 56, h:128, colx:  0, coly:  0, colw: 56, colh:128, point: 1000, def:  700, burn:10, type: 1 },
'CarrierE':		{file: 'media/key4.png',	w: 56, h:128, colx:  0, coly:  0, colw: 56, colh:128, point: 1000, def:  700, burn:10, type: 2 },
'Power':		{file: 'media/item.png',	w: 32, h: 32, colx:  0, coly:  0, colw: 32, colh: 32, point:  200, def:10000, burn: 0, type: 0 },
'Bomb':			{file: 'media/item.png',	w: 32, h: 32, colx:  0, coly:  0, colw: 32, colh: 32, point:  200, def:10000, burn: 0, type: 1 },
'Extend':		{file: 'media/item.png',	w: 32, h: 32, colx:  0, coly:  0, colw: 32, colh: 32, point:  200, def:10000, burn: 0, type: 2 },

//Stage1
'OneKey':		{file: 'media/key_*.png',	w: 32, h: 37, colx:  0, coly:  0, colw: 32, colh: 32, point:  200, def:   50, burn: 0, type: 0 },
'OneKey2':		{file: 'media/key_*.png',	w: 32, h: 37, colx:  0, coly:  0, colw: 32, colh: 32, point:  200, def:   50, burn: 0, type: 0 },
'Key2':			{file: 'media/key2.png',	w:121, h: 35, colx:  0, coly:  0, colw:104, colh: 60, point: 1200, def:  500, burn:10, type: 1 },
'Key3':			{file: 'media/key3.png',	w: 48, h:104, colx:  0, coly:  0, colw: 48, colh:104, point: 1500, def:  300, burn:10, type: 1 },

//Stage1 Boss
'boss':	{file: 'media/boss1_body.png',	w:167, h:159, colx:  0, coly:  0, colw:168, colh:102, point:50000, def:18000, burn: 3, type: 3 },
'boss_L':	{file: 'media/boss1_L.png',		w: 52, h: 70, colx:  0, coly:  0, colw: 56, colh: 64, point:20000, def: 3000, burn:10, type: 3 },
'boss_R':	{file: 'media/boss1_R.png',		w: 52, h: 70, colx:  0, coly:  0, colw: 56, colh: 64, point:20000, def: 3000, burn:10, type: 3 },
'boss_C':	{file: 'media/boss1_cannon.png',w: 16, h: 78, colx:  0, coly:  0, colw: 16, colh: 32, point:10000, def: 1500, burn: 1, type: 3 },

}
