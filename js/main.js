(function() {
   code =  
  `/* 今天，我们来画一个皮卡丘，准备好了吗，开始喽！ */
  /* 首先，我们需要准备皮卡丘的皮 */
  .preview {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fee433;
  }
  .wrapper {
    width: 100%;
    height: 170px;
    position: relative;
  }
  .wrapper > :not(:last-child) {
    z-index: 1;
  }
  /* 上面的代码看起来实在是太丑了，让他高亮一下 */
  .token.comment{color:slategray;}
  .token.selector{color: #690;}
  .token.punctuation {color: #999;}
  .token.property {color: #905;} 
  /* 我们先画一个小鼻子 */
  .nose {
    width: 0px;
    height: 0px;
    border: 11px solid transparent;
    border-radius: 50%;
    border-top-color: black;
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
  }
  /* 下面我们开始画眼睛 */
  .eye {
    width: 49px;
    height: 49px;
    background-color: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000;
  }
  /* 开始画眼珠 */
  .eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 6px;
    top: -1px;
    border: 2px solid #000;
  }
  /* 画左眼 */
  .eye.left {
    right: 50%;
    margin-right: 90px;
  }
  /* 画右眼 */
  .eye.right {
    left: 50%;
    margin-left: 90px;
  }
  /* 然后，画皮卡丘的脸 */
  .face {
    width: 60px;
    height: 60px;
    border: 2px solid black;
    border-radius: 50%;
    background-color: #fc0d1c;
    position: absolute;
    top: 85px;
  }
  /* 将脸放到正确的位置上 */
  .face.left{
    right: 50%;
    margin-right: 116px;
  }
  .face.right{
    left: 50%;
    margin-left: 116px;
  }
  /* 我们画上嘴唇 */
  .upperTip {
    height: 25px;
    width: 80px;
    border: 3px solid black;
    transform: rotate(-20deg);
    position: absolute;
    top: 50px;
    background-color: #fde348;
  }
  .upperTip.left {
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
  }
  .upperTip.right {
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
  }
  .lowerTip-wrapper {
    position: absolute;
    height: 112px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    overflow: hidden;
  }
  /* 我们画下嘴唇 */
  .lowerTip {
    width: 300px;
    height: 3500px;
    background-color: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
  }
  /* 最后我们画上舌头 */
  .lowerTip::after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px; 
    background-color: #fc4a62;
    border: 1px solid red;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50px;
  }
  /* ok！一个简单的皮卡丘就完成了！ */`

   time = 50;
  $('.actions').on('click', 'button', function(e){
     $button = $(e.currentTarget); // 点击的button
     speed = $button.attr('data-speed');
    $button.addClass('active').siblings('.active').removeClass('active')
    if(speed == 'slow'){
      time = 60;
    } else if(speed == 'normal') {
      time = 25;     
    } else {
      time = 10;
    }
  })

  function writeCode(prefix, code, fn){
    var container = document.querySelector('#code');
    var styleTag = document.querySelector('#styleTag');
    var n = 0;
    setTimeout( function run() {
      n += 1;
      container.innerHTML = code.substring(0, n);
      container.innerHTML = Prism.highlight(container.innerHTML, Prism.languages.css);
      styleTag.innerHTML = code.substring(0, n);
      container.scrollTop = container.scrollHeight;
      if(n < code.length){
        setTimeout(run, time);
      } else {
        fn && fn.call();        
      }
    },time)
  }
  
  writeCode('', code);

})()