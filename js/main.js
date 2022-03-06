'use strict';

{
    // スクロールしたらヘッダーを固定配置
    let nav_pos = $("#header").offset().top;
    let nav_height = $("#header").outerHeight();
    $(window).scroll(function () {
        if ($(this).scrollTop() > nav_pos) {
            $("body").css("padding-top", nav_height);
            $("#header").addClass("fixed");
        } else {
            $("body").css("padding-top", 0);
            $("#header").removeClass("fixed");
        }
    });

    // ハンバーガーメニュー関連
    const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');

    open.addEventListener('click', () => {
        overlay.classList.add('show');
        open.classList.add('hide');
    });

    close.addEventListener('click', () => {
        overlay.classList.remove('show');
        open.classList.remove('hide');
    });
    
}