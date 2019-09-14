# ToDo_Sample_Vue

# 全体像
![エビフライトライアングル](https://github.com/kaminotsukai/ToDo_Sample_Vue/blob/master/images/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202019-09-14%2013.59.46.png)


# tips
## Vue.jsの読み込み方法

- CDN（おすすめ）
- 直接読み込み
- npm


## CDN読み込み
- Bodyタグの中に入れる
    - https://jp.vuejs.org/v2/guide/installation.html

- 開発ver スピード遅い・デバックあり
    - https://cdn.jsdelivr.net/npm/vue/dist/vue.js

- 圧縮されているので早い
     - https://cdn.jsdelivr.net/npm/vue@2.6.0
     

## ムスタッシュ構文
- `{{}}`こういうやつ
- テキストとして使用可能.
- 属性値には使用できない

```
//属性には使用できない
<input type="text" value={{message}}>

//v-bindで指定してあげる
<input type="text" v-bind:value="message">

```


## v-ifとv-show

- v-if：条件による表示切り替え
- v-show：display値による表示切り替え



 ## 双方向データバインディング（v-model）
 
 ![](https://www.google.com/search?biw=1920&bih=1001&tbm=isch&sxsrf=ACYBGNQtotTKdYnsVYK-wbOOvCe9NkfmtA%3A1568437659256&sa=1&ei=m3V8XcGXD5bN-QbP04zYDw&q=%E5%8F%8C%E6%96%B9%E5%90%91%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0vue&oq=%E5%8F%8C%E6%96%B9%E5%90%91%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0vue&gs_l=img.3...18846.19120..19340...0.0..0.119.348.0j3......0....1..gws-wiz-img.......0i24i23.9RW558aUqQU&ved=0ahUKEwiB0aDMxc_kAhWWZt4KHc8pA_sQ4dUDCAc&uact=5#imgrc=RSW0D6emYH838M:)

```
<div id="app">
    <input type="text" v-model="message">
    <input type="text" v-model="message">
</div>

——————————————————————>

var app = new Vue({
    el:'#app',
    data:
    {
        message:'hello!'
    }
})

```

## コンポーネント化と再利用

再利用するものはテンプレートとして使用可能
```
<div id="app">
    <hello-component></hello-component>
    <hello-component></hello-component>
</div>

——————————————————————>

Vue.component('hello-component',{
    template:'<p>hello</p>'
})
```



## click処理

```
<button v-on:click="click">
   click!!
</button>


——————————————————————>

methods:{
    click:function(){
        this.message = 'Clicked!'
    }
}
```


# 参考
Udemy
