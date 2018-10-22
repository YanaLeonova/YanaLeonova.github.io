$(document).ready(function () {

    $('.blockCat').on('click', function () {
        var catClick = $(this).closest('section').find('.blockCat');
        operationCatBlock(catClick);
    });

    if ($('section').hasClass('product_ended')) {
        $('.product_ended').children('.pack_disable').hide();
        $('.product_ended').children('.pack_runout').show();
    }

    function operationCatBlock(param) {
        if (param.hasClass('disable')) {
            param.addClass('cat_select');
            param.children('.cat_img').addClass('cat_img_select');
            param.siblings('.pack_disable').hide();
            param.siblings('.pack_select').show();
            param.hover(function () {
                    param.find('.head_disable').hide();
                    param.find('.head_select').show();
                },
                function () {
                    param.find('.head_select').hide();
                    param.find('.head_disable').show();
                });
            param.removeClass('disable');
        } else {
            param.removeClass('cat_select');
            param.children('.cat_img').removeClass('cat_img_select');
            param.siblings('.pack_disable').show();
            param.siblings('.pack_select').hide();
            $('.head_select').hide();
            $('.head_disable').show();
            param.off('mouseenter mouseleave');
            param.closest('.blockCat').addClass('disable');
        }
    }

});