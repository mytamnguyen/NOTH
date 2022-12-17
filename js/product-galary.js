jQuery(document).on('click','.product-gallery__thumb img',function(){
    $(".ivideook,.mivideo").removeClass("active");
    
    
    $(".product-gallery__thumb").removeClass('active');
        $(this).parents('.product-gallery__thumb').addClass('active');
        var img_thumb = $(this).data('image');
        var total_index =  $(this).parents('.product-gallery__thumb').index() + 1;
        $(".gallery-index .current").html(total_index);
        
         $(".product-image-detail .product-image-feature").attr("src",$(this).attr("data-image"));//debugger;
            });
            var check_variant = true;
            var fIndex = false;
            var selectCallback = function(variant, selector) {
                if (variant) {
                    var dem = parseInt($('.product-gallery').data('size'));
                    if(variant.options.length == 1 || variant.options.length == 2 || variant.options.length == 3 ){
                        if(dem > 1){
                            var total_option = variant.options.length;
                            var title1 = change_alias(variant.option1);
                            if($(window).width() < 767){
                                var owl = $('.product-gallery__thumbs');
                                owl.trigger('destroy.owl.carousel');
                                $('.product-gallery__thumbs').html('').removeClass('owl-loaded');
                            }else{
                                $('.product-gallery__thumbs').html('');
                            }
    
                            $('.images_thumbs .product-gallery__thumb').each(function(){
                                var that = $(this);
                                var check1 = $(this).data('variant');
                                if(title1 == check1){
                                    $('.product-gallery__thumbs').append(that.clone());
                                }
                            });
                                                                 if($(window).width() < 767){
                                 $('.product-gallery__thumbs').owlCarousel({
                                     items: 3,
                                     nav: true,
                                     navText: ['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M491.318,235.318H20.682C9.26,235.318,0,244.578,0,256c0,11.423,9.26,20.682,20.682,20.682h470.636 c11.423,0,20.682-9.259,20.682-20.682C512,244.578,502.741,235.318,491.318,235.318z" /> </g> </g> <g> <g> <path d="M49.932,256L211.795,94.136c8.077-8.077,8.077-21.172,0-29.249c-8.077-8.076-21.172-8.076-29.249,0L6.058,241.375 c-8.077,8.077-8.077,21.172,0,29.249l176.488,176.488c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.625-6.058 c8.077-8.077,8.077-21.172,0-29.249L49.932,256z" /> </g> </g> </svg>','<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;" xml:space="preserve"> <path d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/> <g> </g></svg>'],
                                     dots:false,
                                     margin: 10,
                                     responsive: {
                                         0: {
                                             items: 3,
                                             margin: 15,
                                             stagePadding: 50,
                                         },
                                         768: {
                                             items: 3,
                                             margin: 15
                                         },
                                         992: {
                                             items: 3,
                                             margin: 30
                                         },
                                         1200: {
                                             items: 3,
                                             margin: 30
                                         }
                                     },
                                     pagination: false,
                                     slideSpeed : 500,
                                     addClassActive: true,
                                     scrollPerPage: false,
                                     touchDrag: true,
                                     autoplay: true,
                                     loop: true,
                                     lazyLoad: true,
                                 });
                             }
                             }
    
                             $(".product-gallery__thumb").first().find('img').trigger('click');
    
                             
                                }
    
                                        if(variant.featured_image != null) {
                                            if ($(window).width()> 991){
    
                                                    var imagev = Haravan.resizeImage(variant.featured_image.src,'master').replace('https:','');
                                                    $(".slide_product .product-image-feature").attr('src',imagev);
                                                    setTimeout(function(){//debugger;
                                                        $('.product-gallery__thumb').removeClass('active');
                                                        $('.product-gallery__thumb img[data-image="'+imagev+'"]').parents('.product-gallery__thumb').addClass('active');
                                                    }, 1000);
                                                    
                                                    } 
                                                    else {
                                                        var imagev = Haravan.resizeImage(variant.featured_image.src,'master').replace('https:','');
                                                        $(".slide_product .product-image-feature").attr('src',imagev);
                                                        setTimeout(function(){//debugger;
                                                            $('.product-gallery__thumb').removeClass('active');
                                                            $('.product-gallery__thumb img[data-image="'+imagev+'"]').parents('.product-gallery__thumb').addClass('active');
    
                                                        }, 1000);
                                                    }
                                                }
                                        if (variant.sku != null ){
                                            jQuery('#pro_sku').html('<strong>SKU: </strong>' +variant.sku);
                                        }
                                        if(variant.price < variant.compare_at_price){
    
                                            var pro_sold = variant.price ;
                                            var pro_comp = variant.compare_at_price / 100;
                                            var sale = 100 - (pro_sold / pro_comp) ;
                                            var kq_sale = Math.round(sale);
                                            var html = '<span class="pro-sale">-' + kq_sale + '%</span>';									
                                            html += '<span class="pro-price">' + Haravan.formatMoney(pro_sold, "{{amount}}₫") + '</span>';
                                            html += '<del>' + Haravan.formatMoney(variant.compare_at_price, "{{amount}}₫") + '</del>';
                                            jQuery('#detail-product #price-preview').html(html);
                                            jQuery('#detail-product .price-fixed-mb').html(html);
                                        } 
                                        else if (variant.price == 0) {
    
                                        }
                                        else {
                                            jQuery('#detail-product #price-preview').html("<span class='pro-price'>" + Haravan.formatMoney(variant.price, "{{amount}}₫" + "</span>"));
                                            jQuery('#detail-product .price-fixed-mb').html("<span class='pro-price'>" + Haravan.formatMoney(variant.price, "{{amount}}₫" + "</span>"));
                                        }
                                        if(variant.available){
                                            if(variant.price == 0){
                                                jQuery('#detail-product .add-to-cartProduct').removeAttr('disabled').removeClass('disabled');
    
                                            }
                                            else{
                                                jQuery('#detail-product .add-to-cartProduct').attr("id","add-to-cart").removeClass('add-to-contact');
                                                jQuery('#detail-product .add-cart-bottom').attr("id","add-to-cartbottom");
                                                jQuery('#detail-product .add-to-cartProduct').removeAttr('disabled').removeClass('disabled').html("Thêm vào giỏ");
                                            }
                                            $('#detail-product #buy_now').show();
                                            jQuery('#detail-product .pro-soldold').addClass('hidden');
                                            check_variant = true;
                                        }	
                                        else{
                                            if(variant.price == 0){
                                                jQuery('#detail-product .add-to-cartProduct').removeAttr('id').addClass('add-to-contact').html("Liên hệ nhận tư vấn và thiết kế miễn phí");
                                            }
                                            else{
                                                jQuery('#detail-product .add-to-cartProduct').attr("id","add-to-cart").removeClass('add-to-contact');
                                                jQuery('#detail-product .add-cart-bottom').attr("id","add-to-cartbottom");
                                                jQuery('#detail-product .add-to-cartProduct').addClass('disabled').attr('disabled', 'disabled').html("Hết hàng");
                                            }
                                            $('#detail-product #buy_now').hide();
                                            var message = variant ? "Hết hàng" : "Không có hàng";
                                            jQuery('#detail-product .pro-soldold').removeClass('hidden');
                                            jQuery('#detail-product .pro-soldold').text(message);
                                            check_variant = false;
                                        }		 
                                        } 
                                        return check_variant;
                                    };
    