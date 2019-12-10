$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('nav').css('background-color', '#f8f9fa');
            // $('nav').animate('background-color', '#6c757d');
        } else {
            $('nav').css('background', 'none');
        }
    });
    $('.faq-list-item').click(function(){
        var $answer = $(this).find('.answer');
        if ($answer.hasClass('open')) {
            $answer.removeClass('open');
            $answer.slideUp();
            $(this).find('span').text('+');
        } else {
            $answer.addClass('open');
            $answer.slideDown();
            $(this).find('span').text('-');
        }
    });
    $('a[href^="#"]').click(function() {
        // スクロールの速度
        var speed = 1000; // ミリ秒で記述
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

     //マウスストーカー用のdivを取得
    const stalker = document.getElementById('stalker'); 

    //上記のdivタグをマウスに追従させる処理
    document.addEventListener('mousemove', function (e) {
        stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    });
});