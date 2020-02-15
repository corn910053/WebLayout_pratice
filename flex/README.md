

排版演進

table排版->float排版->inline-block排版->box->flex box->flex and Grid

Flex(自動幫你算尺寸):

彈性排版

隨意控制走向(可以逆向)

對齊簡單(特別是垂直對齊)

做RWD方便(延展比、收縮比、基本比)


display: flex; 啟用flex，通常在父層使用，子層就成為flex的物件

flex-direction: 控制資料流走向(主軸是直或橫的)

justify-content: 資料流的對齊

flex-start: 對齊資料流起點

center: 對齊資料流中央

flex-end: 對齊資料流終點

justify-content: space-around(把所有空間分配，包含網頁視窗與物體之間)

justify-content: space-between(把所有空間分配在物體之間)

Flex不提XY軸，只提主軸和次軸

交叉軸(次軸)

主軸是橫的、次軸就是直的

主軸是直的、次軸就是橫的

align-items: 針對單行子物件

align-content: 針對多行子物件

支援度


flex 預設不換行，故物體大小超過容器寬度時，物體寬度會縮起來

align 次軸設定，其他都是主軸設定

order 預設值0，小於0往左、大於0往右(似index概念)，數值為整數，一樣的數值就照程式碼順序

flex-basis 控制主軸長度(主軸是橫的->控制寬度，主軸是直的->控制長度)，將flex-basis= 0px，然後在子物件設定flex-grow:，就能達到照比例延展的效果

flex-shrink(收縮比)可以收縮物體寬度或長度，預設為1(有收縮)，0就是沒收縮

收縮比總比值:各子項目寬度 乘 收縮值，並全部加總

超出值

扣除值:(子項目寬 乘 收縮比 除 總比值)乘 超出值

float和flex不要一起用

Bootstrap3->Bootstrap4  不是只有float改flex，它完備了很多RWD的細節





