# WebLayout_pratice

***
## ch2: 製作一個互動圖文卡片
***

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch1/image/ch2hw.gif)

* **練習內容**
  * 做出具有互動圖文卡片的網頁頁面

* **回答問題**
  * CSS absolute 絕對定位
  * CSS relative 相對定位
  * transition 動畫的做法
  * flex-direction 的原理

***
### 1. CSS absolute 絕對定位
***

a.只定位一次
b.定位會往父層開始找，只要有flex relative absolute就定在那裡，否則最後定在視窗


***
### 2. CSS relative 相對定位
***


***
### 3. transition 動畫的做法
***

``可以使用transition作出動畫的效果，以下舉例兩項``

``1.滑鼠游標摸到圖片時，會有文字浮現的動畫``

```html
.item .txt{
	opacity: 0;
	transition: opacity .5s;
}
.item:hover .txt{
	opacity: 1;
}
```
``在圖片(item)摸到前的文字，設定成完全透明(opacity: 0;)``

``在圖片(item)摸到時的文字，設定成完全不透明(opacity: 1;)，也就是顯示出來的意思``

``transition: opacity .5s; 利用transition可以設定延遲的特性，延遲透明數值的改變，做出像動畫般的效果``

***

``2.滑鼠游標摸到圖片時，會畫一條像載入條的直線``

```html
.item h2:after{
	content: '';
	display: block;
	width: 0%;
	height: 2px;
	margin: 10px 0;
	background-color: #ff0;
	transition: width .5s .3s;
}
.item:hover h2:after{
	width: 100%;
}
```

``設定直線樣式，content: '';display: block;width: 0%;height: 2px;margin: 10px 0;background-color: #ff0;``

``在圖片(item)摸到前的直線，寬度設為0(width: 0%;)``

``在圖片(item)摸到後的直線，寬度設為0(width: 100%;)``

``transition: width .5s .3s; 利用transition可以設定延遲的特性，延遲直線寬度數值的改變，做出像動畫般的效果``



***
### 4. flex-direction 的原理
***