$("#video_play").click(function(e){
    e.preventDefault();
    $('.pop-up-vdo').show('slow');
});
$(".vdo_close").click(function(e){
    e.preventDefault();
    $('.pop-up-vdo').hide('slow');
});