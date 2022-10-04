$(function(){
    var scrollBtn = $('#page_top');
    scrollBtn.hide();
      
    //ボタンの表示設定
    $(window).scroll(function(){
      if($(window).scrollTop()>50){
        // ボタンを表示する
        scrollBtn.fadeIn();
      }else{
        // ボタンを表示しない
        scrollBtn.fadeOut();
      }
    });
    
    // スクロールして上に戻る
    scrollBtn.click(function(){
      $('body,html').animate({
      scrollTop: 0},500);
      return false;
    });
    
});



$(function(){
  $("#open").show();
  $("#close").hide();

  $("#open").click(function(){
    // メニューを開く
    $(".header-nav").slideDown();
    $("#open").hide();
    $("#close").show();
  
  });
    
  $("#close").click(function(){
    // メニューを閉める
    $(".header-nav").slideUp();
    $("#open").show();
    $("#close").hide();
    
  });

});
