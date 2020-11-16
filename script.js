$(document).ready(function() {
    
    // MESSAGE
    $('#message-icon').click(function(){
        $('#message-icon').hide();
        $('#menu').hide();
        $('#search').hide();
        $('#logo').hide();
        $('#bag').hide();
        $('#message-box').animate({width:'toggle'});
    })

    $('#close-menu').click(function(){
        $('#message-box').hide('slow');
        function showIcon(){
            $('#message-icon').show();
            $('#menu').show();
            $('#search').show();
            $('#logo').show();
            $('#bag').show();
        }
        setTimeout(showIcon, 450);
    })

    // MENU
    $('.fa-bars').click(function(){
        $('.menu-items').slideToggle();
    })

    // SEARCH
    $('.fa-search').click(function(){
        $('#search-items').slideToggle();
    })

    $('#close-search-bar').click(function(){
        $('#search-items').slideUp();
    })

    // SHOPPING
    $('#bag').click(function(){
        $('#message-icon').hide();
        $('#menu').hide();
        $('#search').hide();
        $('#logo').hide();
        $('#shopping-bag-box').animate({width:'toggle'});
    })

    $('#close-shopping-bag').click(function(){
        $('#shopping-bag-box').hide('slide');
        function showIcon(){
            $('#message-icon').show();
            $('#menu').show();
            $('#search').show();
            $('#logo').show();
            $('#bag').show();
        }
        setTimeout(showIcon, 450);
    })

});