(function(){

  // ハンバーガーボタン
  const imgHeight = document.getElementsByClassName('kv-wrapper').outerHeight();
  const bgHeight = document.getElementsByClassName('fv').outerHeight();
  const burgerBtn = document.getElementsByClassName('burger-btn');
  const bar = document.getElementsByClassName('bar');
  const headerNav = document.getElementsByClassName('header-nav');
  const burgerMusk = document.getElementsByClassName('burger-musk');
  const body = document.querySelector('body');
  
  burgerBtn.addEventListener('click',function(){
    if(window.pageYOffset < imgHeight - 50){
      bar.classList.toggle('cross');
      headerNav.classList.toggle('cross');
      burgerMusk.fadeIn(300);
      bar.classList.toggle('cross');
    }else{
      
    }
  
    });
  
  })();