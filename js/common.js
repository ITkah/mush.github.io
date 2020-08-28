$(document).ready(function() {

    $('.phone').on('input', function() {
        $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
    });

    $('.name').on('input', function() {
        $(this).val($(this).val().replace(/[0-9,+-_/';:}{}?.<>,()*&^%$#@!]/, ''))
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    
    $(".vidos").on("click", function(){
        $(this).attr("controls","");
        $(this)[0].play();
    });

    $(".header_btn_box").on("click", function(){
        $("nav").slideToggle(200);
    });
        
    $("nav ul li").each(function() {
        this_li = $(this);
        if ($(this_li).find("ul").length > 0) {
        $(this_li).append('<div class="arrow_mob"></div>')
        }
    });

    $('.arrow_mob').click(function() {
        $(this).siblings("a").toggleClass("orange");
        $(this).toggleClass("active-elem").closest('li').find('ul').eq(0).slideToggle(); 
    });
    
    $('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

});


