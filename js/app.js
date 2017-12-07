$(function(){
    $('#scrollToTop').on('click', function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 2000);
        return false;
    });
});