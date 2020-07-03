$(document).ready(function() {

    $('.phone').on('input', function() {
        $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $(".smm_img").on("click", function(){
        $(this).attr("controls","")[0].play();
    });
    
});
