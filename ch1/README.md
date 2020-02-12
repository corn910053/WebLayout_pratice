# WebLayout_pratice

***
## ch1: 圖文滿版區塊
***

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch1/image/ch1hw.jpg)

* **練習內容**
  * 做出具有圖文滿版區塊的網頁頁面

* **回答問題**
  * 為何需要reset
  * inline & block 的作用
  * flex-direction 的原理
  * 漸層色彩怎麼寫
  * 多重背景撰寫方式
  * vh 這個單位指的是什麼

***
### 1. 為何需要reset
***

因為各個瀏覽器有自己內建的樣式，有可能會讓標題、內文的大小一樣，設計師會困惑空行到底是padding還是margin產生的，故有CSS reset的產生，它是已經將所有元素的CSS定義好的樣本(可以在網站搜尋CSS reset)，形同將所有元素都歸0，如此設計頁面時就可以不用顧慮瀏覽器內建的樣式問題。


***
### 2. inline & block 的作用
***

block:不管有多寬，就是占掉一整列的空間，例如：單純的h1、div標籤 ，然後它可以設定寬高。

inline:會和其他人排在一起，例如：單純的a標籤，不能設定寬高。

inline-block:取inline和其他人排在一起，與block設定寬高的特性。

應用練習

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch1/image/inline_block2.jpg)

***
### 3. flex-direction 的原理
***

***
### 4. 漸層色彩怎麼寫
***

linear-gradient(角度, 顏色值, 透明度);

``例如：linear-gradient(115deg, #7bf 40%, transparent 70%) ``

``115deg 正好是左下到右上的斜直線，#7bf 40% 藍色佔版面40%，transparent 70% 透明度70%``

***
### 5. 多重背景撰寫方式
***

```html
background: 
		linear-gradient(115deg, #7bf 40%, 
			transparent 70%),
		url("........");
```

``用","加入下一個背景，上述就有linear-gradient(漸層色彩)與url(圖片)``

***
### 6. vh 這個單位指的是什麼
***

vh(view height):螢幕可視範圍高度的百分比

``例如：height = 100vh; 佔螢幕可視範圍100%``

``例如：height = 50vh; width = 50vh; 佔螢幕長寬的可視範圍50%(理論上是長方形)，但你的螢幕得要是正方形才會是正方形``