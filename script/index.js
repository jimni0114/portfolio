$('#menu_open').click(function(){
    $('nav').fadeIn();
    $('body').css({overflow:'hidden'});
});
$('#menu_close').click(function(){
    $('nav').fadeOut();
    $('body').css({overflowY:'auto'});
});

$('body').scroll(function(){
    if($(this).scrollTop()>500){
        $('aside').fadeIn();
        $('#intro_text_m').css({background:'rgba(255, 255, 255, 0.397)'});
    }else{
        $('aside').fadeOut();
        $('#intro_text_m').css({background:'none'});
    }
});
$('aside').click(function(){
    $('html,body').animate({
        scrollTop:0
    },500);
});

$('#intro_text_m').click(function(){
    $('html,body').animate({
        scrollTop:0
    },500);
});

$('body').scroll(function(){
    var scr = Math.floor($(this).scrollTop());
    // console.log(scr);
    if(scr>=200){
        $('#work1 .bg').animate({
            opacity:'1'
        },2000)
        $('#work1 .pic').animate({
            opacity:'1'
        },1300)
    }
    if(scr>=800){
        $('#work2 .bg').animate({
            opacity:'1'
        },2000)
        $('#work2 .pic').animate({
            opacity:'1'
        },1300)
    }
    if(scr>=1600){
        $('#work3 .bg').animate({
            opacity:'1'
        },2000)
        $('#work3 .pic').animate({
            opacity:'1'
        },1300)
    }
    if(scr>=2500){
        $('#work4 .bg').animate({
            opacity:'1'
        },2000)
        $('#work4 .pic').animate({
            opacity:'1'
        },1300)
    }
    if(scr>=3200){
        $('#work5 .bg').animate({
            opacity:'1'
        },2000)
        $('#work5 .pic').animate({
            opacity:'1'
        },1300)
    }
});

function mv(num){
    var ht = $('body').height();
    $('nav').fadeOut();
    $('body').css({overflowY:'auto'});
    if(num=='3'){
        $('body, html').animate({
            scrollTop:$(document).height()
        })
    }else{
        $('body, html').animate({
            scrollTop:(num-1)*ht
        },500);
    }
}
