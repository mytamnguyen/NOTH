function init(){starbapSetting.show_title_review||$("#startbap_product_reviews .starbap-rev__title").attr("style","display:none!important"),starbapSetting.show_author_review||$("#startbap_product_reviews .starbap-rev__author-wrapper").attr("style","display:none!important"),starbapSetting.show_date||$("#startbap_product_reviews .starbap-rev__timestamp").attr("style","display:none!important"),starbapSetting.show_share_social||$("#startbap_product_reviews .starbap-rev__social").attr("style","display:none!important"),starbapSetting.allow_review_by_image||($("#startbap_product_reviews .starbap-rev__pics").attr("style","display:none!important"),$(".starbap-form-picture__fieldset").attr("style","display:none!important")),starbapSetting.allow_review_by_video||($("#startbap_product_reviews .starbap-rev__vids").attr("style","display:none!important"),$(".starbap-form-video__fieldset").attr("style","display:none!important")),starbapSetting.show_date||$("#startbap_product_reviews .starbap-rev__timestamp").attr("style","display:none!important"),!1===starbapSetting.show_customer_had_order&&$("#startbap_product_reviews .starbap-divider-top").each(function(){$(this).removeAttr("data-verified-buyer")}),!0===starbapSetting.always_show_customer&&$('#startbap_product_reviews .starbap-divider-top[data-verified-buyer="false"]').attr("data-verified-buyer","true"),$('#startbap_product_reviews .starbap-divider-top[data-verified-buyer="true"]').each(function(){0===$(this).find(".starbap-rev__buyer-badge").length&&($(this).find(".starbap-rev__header .starbap-rev__author-wrapper").before('<span class="starbap-rev__buyer-badge-wrapper" > <span class="starbap-rev__buyer-badge" style="background-color:'+starbapSetting.color_customer+'!important;">ÄÃ£ mua hÃ ng</span> </span>'),$("body").append("<style>.starbap-quest[data-verified-buyer=true] .starbap-rev__icon:after, .starbap-rev[data-verified-buyer=true] .starbap-rev__icon:after {color:"+starbapSetting.color_customer+"!important;}</style>"))}),!1===starbapSetting.show_question_featured&&($("#startbap_product_reviews").find(".starbap-ask-question-btn").attr("style","display:none!important"),$("#startbap_product_reviews").find('.starbap-subtab .starbap-subtab__name[data-tabname="questions"]').attr("style","display:none!important")),$(".starbap-star > .fa-star").attr("style","color:"+starbapSetting.color_star+"!important"),$(".starbap-rev__icon").attr("style","background:"+starbapSetting.color_bg_avatar+"!important"),$(".starbap-histogram__bar-content").css("background",starbapSetting.color_progress_bar)}function init_badge(){$(document).find(".starbaprv-preview-badge").each(function(a){0===$(this).find(".starbap-prev-badge").length&&$(this).append('<div class="starbap-prev-badge" data-average-rating="0" data-number-of-reviews="0"><a class="starbap-star starbap--off"><i class="fa fa-star fa-fw"></i></a><a class="starbap-star starbap--off"><i class="fa fa-star fa-fw"></i></a><a class="starbap-star starbap--off"><i class="fa fa-star fa-fw"></i></a><a class="starbap-star starbap--off"><i class="fa fa-star fa-fw"></i></a><a class="starbap-star starbap--off"><i class="fa fa-star fa-fw"></i></a><span class="starbap-prev-badgetext">0 Ä‘Ã¡nh giÃ¡</span></div>')})}function escapeCharacters(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39")}$(document).ready(function(){init_badge();var a=$("#startbap_product_reviews");if(0!==a.length){0===a.find(".starbap-rev-widg").length&&(a.append('<div class="starbap-rev-widg__header"><h2 class="starbap-rev-widg__title">ÄÃ¡nh giÃ¡ sáº£n pháº©m</h2><div class="starbap-rev-widg__summary"><div class="starbap-rev-widg__summary-stars"><a class="starbap-star starbap--off"><i class="fa fa-star fa-fw"></i></a><a class="starbap-star starbap--off"><i class="fa fa-star fa-fw"></i></a><a class="starbap-star starbap--off"><i class="fa fa-star fa-fw"></i></a><a class="starbap-star starbap--off"><i class="fa fa-star fa-fw"></i></a><a class="starbap-star starbap--off"><i class="fa fa-star fa-fw"></i></a></div><div class="starbap-rev-widg__summary-text">Dá»±a trÃªn 0 Ä‘Ã¡nh giÃ¡</div></div><a href="#" class="starbap-ask-question-btn">Äáº·t cÃ¢u há»i</a><a href="#" class="starbap-write-rev-link">Viáº¿t Ä‘Ã¡nh giÃ¡</a></div>'),a.append('<div class="starbap-subtab"><span class="starbap-subtab__name starbap--active" data-tabname="reviews">ÄÃ¡nh giÃ¡<span class="starbap-subtab__count">0</span></span><span class="starbap-subtab__name" data-tabname="questions">CÃ¢u há»i &amp; tráº£ lá»i<span class="starbap-subtab__count">0</span></span></div>')),$(".starbap-rev-widg__header").append('<div class="starbap-rev__br"></div>'),$(".starbap-rev-widg__header").append('<div class="starbap-form-wrapper" style="display:none;"><form class="starbap-form" novalidate="novalidate"> <div class="starbap-form__name-fieldset"> <label>TÃªn</label> <input name="reviewer_name" type="text" placeholder="Nháº­p tÃªn cá»§a báº¡n"> </div> <div class="starbap-form__email-fieldset"> <label>Email</label> <input name="reviewer_email" type="email" required="" placeholder="hi@example.com" aria-required="true"> </div><div class="starbap-form__phone-fieldset"> <label>Sá»‘ Ä‘iá»‡n thoáº¡i</label> <input name="reviewer_phone" type="phone" placeholder="Nháº­p sá»‘ Ä‘iá»‡n thoáº¡i cá»§a báº¡n" aria-required="true"> </div> <div class="starbap-form__rating-fieldset"> <label>ÄÃ¡nh giÃ¡</label> <div class="rating-stars text-left"><ul id="stars"><li class="star selected" title="Poor" data-value="1"><i class="fa fa-star fa-fw"></i></li><li class="star selected " title="Fair" data-value="2"><i class="fa fa-star fa-fw"></i></li><li class="star selected" title="Good" data-value="3"><i class="fa fa-star fa-fw"></i></li><li class="star selected" title="Excellent" data-value="4"><i class="fa fa-star fa-fw"></i></li><li class="star selected" title="WOW!!!" data-value="5"><i class="fa fa-star fa-fw"></i></li></ul></div></div><div class="starbap-form__title-fieldset"> <label>TiÃªu Ä‘á» Ä‘Ã¡nh giÃ¡</label><span class="starbap-countdown"></span> <input name="review_title" type="text" placeholder="Nháº­p tiÃªu Ä‘á» Ä‘Ã¡nh giÃ¡ cá»§a báº¡n"> </div> <div class="starbap-form__body-fieldset"> <label>Ná»™i dung</label><span class="starbap-countdown"></span><textarea rows="5" name="review_body" placeholder="Viáº¿t ná»™i dung Ä‘Ã¡nh giÃ¡ cá»§a báº¡n"></textarea> </div> <div class="starbap-custom-forms"></div><div class="starbap-form-video__fieldset"><label class="starbap-picture-fieldset-title">Link video (khÃ´ng báº¯t buá»™c)</label><input name="review_video" type="text" placeholder="Nháº­p link youtube video cá»§a báº¡n"></div><div class="starbap-form__picture-fieldset"><label class="starbap-picture-fieldset-title">HÃ¬nh áº£nh (khÃ´ng báº¯t buá»™c)</label><div class="starbap-picture-fieldset"><div class="starbap-picture-fieldset__container starbap-media-fieldset__container"><label class="starbap-picture-fieldset__box starbap-picture-fieldset__box--input"><div class="starbap-picture-fieldset__box-wrapper"><div class="starbap-picture-fieldset__icon starbap-photocamera-icon"></div></div><input type="file" name="pictures" class="starbap-picture-fieldset__input" multiple="" accept="image/gif,image/jpeg,image/jpg,image/png"></label></div></div></div><input type="submit" class="starbap-submit-rev btn btn_c button " value="Gá»­i Ä‘Ã¡nh giÃ¡"></input></form></div>'),$(".starbap-rev-widg__header").append('<div class="starbap-question-form-wrapper" style="display: none;"><form class="starbap-question-form"><div class="starbap-form__name-fieldset"><label>TÃªn</label><input name="reviewer_name" type="text" maxlength="100" required="" placeholder="Nháº­p tÃªn cá»§a báº¡n"></div><div class="starbap-form__email-fieldset"><label>Email</label><input name="reviewer_email" type="email" required="" placeholder="hi@example.com"></div><div class="starbap-form__phone-fieldset"> <label>Sá»‘ Ä‘iá»‡n thoáº¡i</label><input name="reviewer_phone" type="phone" placeholder="Nháº­p sá»‘ Ä‘iá»‡n thoáº¡i cá»§a báº¡n" aria-required="true"> </div><div class="starbap-form__question-fieldset"><label>Ná»™i dung</label><textarea rows="5" name="question_content" required="" placeholder="Viáº¿t cÃ¢u há»i cá»§a báº¡n" spellcheck="false"></textarea> <input type="submit" class="starbap-submit-question btn btn_c button " value="Gá»­i cÃ¢u há»i"> </form> </div>'),$(".starbap-rev-widg__header").append('<div class="starbap-rev__br"></div>'),init();var e=a.attr("data-url"),t=a.data("id"),r="https://review-app-api.starbap.app/api/shop/",s=null;$.get(e+".js").done(function(e){if(s=e,0===a.find(".starbap-rev-widg").length){var t="";t=null!==s.metadescription?escapeCharacters(s.metadescription):s.title;var r='{"@context": "https://schema.org/","@type": "Product","name": "'+s.title+'","image": "'+s.images[0]+'","description": "'+t+'","mpn": "'+s.variants[0].sku+'","sku": "'+s.variants[0].sku+'","brand": {"@type": "Brand","name": "'+s.vendor+'"},"aggregateRating": {"@type": "AggregateRating","ratingValue": "5","reviewCount": "1"},"offers": {"@type": "Offer","priceCurrency": "VND","price": "'+s.price/100+'","priceValidUntil": "'+s.published_at+'","itemCondition": "http://schema.org/UsedCondition","availability": "http://schema.org/InStock","url": "'+s.url+'"},"review": [{"@type": "Review","author":{"@type":"Person","name":"Customer"},"name": "Good","reviewBody": "Good","reviewRating": {"@type": "Rating","ratingValue": "5"}}]}}',i=document.createElement("script");i.type="application/ld+json",i.text=r,document.querySelector("head").appendChild(i)}}).fail(function(a,e){console.log("error get product info:"+e)}),$.get("/meta.json").done(function(e){Haravan.orgid=e.id,void 0!==t&&0!==a.find(".starbap-rev-widg").length&&$.ajax({url:r+e.id+"/productId/"+t+"/review-products/data?reviewType=REVIEW&size=5&sort=createdDate,desc&page=0"}).done(function(s){$("#startbap_product_reviews").find(".starbap-rev-widg__body").html(s),starbapSetting.show_sort_by&&$("#startbap_product_reviews .starbap-rev-widg__sort-wrapper").append('<div class="starbap-sort-dropdown-wrapper"><select class="starbap-sort-dropdown"><option value="most-recent">Má»›i nháº¥t</option><option value="old-recent">CÅ© nháº¥t</option><option value="highest-rating">ÄÃ¡nh giÃ¡ cao nháº¥t</option><option value="lowest-rating">ÄÃ¡nh giÃ¡ tháº¥p nháº¥t</option></select><span class="starbap-sort-dropdown-arrow"></span></div>');var i=a.data("img");$("meta[itemprop=image]").attr("content",i),"0"!==$(".starbap-subtab .starbap-subtab__name[data-tabname='questions'] .starbap-subtab__count").text()&&$.ajax({url:r+e.id+"/productId/"+t+"/review-products/data?reviewType=QUESTION&size=5&sort=createdDate,desc&page=0"}).done(function(a){$("#startbap_product_reviews").find(".starbap-quest-widg__body").html(a),init()}),$(document).find(".starbap-rich-snippet").remove(),init()});a.find(".starbap-rev-widg").length}).fail(function(a,e){console.log("error get shop info:"+e)}),$("#stars li").on("mouseover",function(){var a=parseInt($(this).data("value"),10);$(this).parent().children("li.star").each(function(e){e<a?$(this).addClass("hover"):$(this).removeClass("hover")})}).on("mouseout",function(){$(this).parent().children("li.star").each(function(a){$(this).removeClass("hover")})}),$("#stars li").on("click",function(){var a=parseInt($(this).data("value"),10),e=$(this).parent().children("li.star");for(i=0;i<e.length;i++)$(e[i]).removeClass("selected");for(i=0;i<a;i++)$(e[i]).addClass("selected");parseInt($("#stars li.selected").last().data("value"),10)})}init()}),$(document).on("click",".starbap-rev-widg__header .starbap-ask-question-btn",function(a){a.preventDefault(),"block"==$(".starbap-rev-widg__header .starbap-form-wrapper").css("display")&&$(".starbap-rev-widg__header .starbap-form-wrapper").hide(),$(".starbap-rev-widg__header .starbap-question-form-wrapper").find("input:not(:last)").val(""),$(".starbap-rev-widg__header .starbap-question-form-wrapper").find('textarea[name="question_content"]').val(""),$(".starbap-rev-widg__header .starbap-question-form-wrapper").toggle(),"undefined"!=typeof reviewAccount&&($('input[name="reviewer_name"]').val(reviewAccount.customer_name),$('input[name="reviewer_email"]').val(reviewAccount.customer_email),$('input[name="reviewer_phone"]').val(reviewAccount.customer_phone))}),$(document).on("click",".starbap-rev-widg__header .starbap-write-rev-link",function(a){a.preventDefault(),"block"==$(".starbap-rev-widg__header .starbap-question-form-wrapper").css("display")&&$(".starbap-rev-widg__header .starbap-question-form-wrapper").hide(),$(".starbap-rev-widg__header .starbap-form-wrapper").find("input:not(:last)").val(""),$(".starbap-rev-widg__header .starbap-form-wrapper").find('textarea[name="review_body"]').val(""),$(".starbap-picture-fieldset__box-wrapper.starbap-has-preview-image").remove(),$(".starbap-rev-widg__header .starbap-form-wrapper").toggle(),"undefined"!=typeof reviewAccount&&($('input[name="reviewer_name"]').val(reviewAccount.customer_name),$('input[name="reviewer_email"]').val(reviewAccount.customer_email),$('input[name="reviewer_phone"]').val(reviewAccount.customer_phone))}),$(document).on("click",".starbap-rev__reply-review .starbap-rev__btn-reply",function(){"undefined"!=typeof reviewAccount?$(this).closest(".starbap-rev__actions").siblings(".starbap-quick__reply").css({display:"block"}):$("body").append('<div class="starbap-popup starbap-popup__overlay open"> <div class="starbap-popup__box"> <h2>ÄÄƒng nháº­p</h2> <a class="close" href="#">Ã—</a> <div class="content"> Báº¡n vui lÃ²ng <a href="/account/login" style="color:blue">ÄÄƒng nháº­p</a> Ä‘á»ƒ thá»±c hiá»‡n chá»©c nÄƒng nÃ y! </div> </div> </div>')}),$(document).on("click",".starbap-quick__reply .starbap-hide__reply",function(a){a.preventDefault(),$(this).closest(".starbap-quick__reply").hide()}),$(document).on("click",".starbap-quick__reply .starbap-submit__reply",function(a){a.preventDefault();var e=$(this).siblings(".starbap-review__comment-content").val();if(""!=e){var t={reviewProductId:$(this).closest(".starbap-rev.starbap-divider-top").data("starbap-id"),name:reviewAccount.customer_name,reviewStatus:"PENDING",answer:e};$.ajax({url:"https://review-app-api.starbap.app/api/review-answers", type : "post", data:JSON.stringify(t),contentType:"application/json",dataType:"json",success:function(a){alert("Gá»­i tráº£ lá»i thÃ nh cÃ´ng! ")}}),$(this).closest(".starbap-quick__reply").hide()}else alert("Vui lÃ²ng nháº­p ná»™i dung tráº£ lá»i!")}),$(document).on("click",".starbap-submit-question",function(a){a.preventDefault(),$(this).closest(".starbap-question-form").find("#reviewer_name-error").remove(),$(this).closest(".starbap-question-form").find("#reviewer_email-error").remove(),$(this).closest(".starbap-question-form").find("#reviewer_body-error").remove();var e=$(this).closest(".starbap-question-form").find("input[name='reviewer_name']").val(),t=$(this).closest(".starbap-question-form").find("input[name='reviewer_email']").val(),r=$(this).closest(".starbap-question-form").find("textarea[name='question_content']").val();if(""===e&&$(this).closest(".starbap-question-form").find(".starbap-form__name-fieldset label").append('<span id="reviewer_name-error" class="error" for="reviewer_name">Vui lÃ²ng nháº­p tÃªn cá»§a báº¡n!</span>'),""===t&&$(this).closest(".starbap-question-form").find(".starbap-form__email-fieldset label").append('<span id="reviewer_email-error" class="error" for="reviewer_name">Vui lÃ²ng nháº­p email cá»§a báº¡n!</span>'),""===r&&$(this).closest(".starbap-question-form").find(".starbap-form__question-fieldset label").append('<span id="reviewer_body-error" class="error" for="reviewer_body">Vui lÃ²ng nháº­p ná»™i dung cÃ¢u há»i cá»§a báº¡n!</span>'),""!==e&&""!==t&&""!==r){var s={reviewContent:r,reviewStatus:"PENDING",reviewType:"QUESTION",shopId:Haravan.orgid,domain:"https://"+Haravan.shop,productId:$(this).parents("#startbap_product_reviews").data("id"),productName:$(this).parents("#startbap_product_reviews").data("product-title"),productHandle:$(this).parents("#startbap_product_reviews").data("url").split("/").pop(),participant:{name:e.trim(),email:t,phone:$(this).closest(".starbap-question-form").find("input[name='reviewer_phone']").val()}};$.ajax({headers:{"Content-Type":"application/json"},type:"POST",url:"https://review-app-api.starbap.app/api/review-products",contentType:"application/json",data:JSON.stringify(s),dataType:"json",success:function(a){alert("Gá»­i cÃ¢u há»i thÃ nh cÃ´ng! CÃ¢u há»i cá»§a báº¡n sáº½ Ä‘Æ°á»£c pháº£n há»“i trong thá»i gian sá»›m nháº¥t.")}}),$(this).closest(".starbap-question-form-wrapper").hide()}}),$(document).on("click",".starbap-popup__box .close",function(){$(".starbap-popup.starbap-popup__overlay").remove()}),$(document).on("click",".starbap-rev__social .starbap-share-icon",function(){0==$(this).siblings(".starbap-rev__social-inner").hasClass("inline")?$(this).siblings(".starbap-rev__social-inner").addClass("inline"):$(this).siblings(".starbap-rev__social-inner").removeClass("inline")}),$(document).on("click",".starbap-subtab .starbap-subtab__name",function(){0==$(this).hasClass("starbap--active")&&($(".starbap-subtab .starbap-subtab__name").removeClass("starbap--active"),$(this).addClass("starbap--active"),"reviews"==$(this).data("tabname")?($(".starbap-rev-widg__body").show(),$(".starbap-quest-widg__body").hide(),$(".starbap-sort-dropdown-wrapper").show()):($(".starbap-quest-widg__body").show(),$(".starbap-rev-widg__body").hide(),$(".starbap-sort-dropdown-wrapper").hide()))}),$(document).ready(function(){$(".starbap-picture-fieldset__input").change(function(){if(this.files&&this.files[0])if(Math.round(this.files[0].size/1024)>51200)alert("HÃ¬nh áº£nh upload quÃ¡ lá»›n. Vui lÃ²ng upload láº¡i hÃ¬nh áº£nh nhá» hÆ¡n 50mb !");else{var a=new FormData;a.append("file",this.files[0]);var e="";$.ajax({url:"https://review-app-api.starbap.app/api/upload-to-s3",type:"POST",data:a,contentType:!1,processData:!1,dataType:"json",async:!1,success:function(a){1==a.success&&(e=a.urlPrefix+"/"+a.name)},error:function(a){console.log(a)}}),""!=e&&$(this).closest(".starbap-picture-fieldset__container").append("<div class='starbap-picture-fieldset__box-wrapper starbap-has-preview-image starbap-has-preview-image--pictures' data-img='"+e+"' style='width:100px;background-image:url("+e+");'><a class='starbap-close-ico'></a></div>")}})}),$(document).on("click",".starbap-close-ico",function(){$(this).parent().remove()}),$(document).on("click",".starbap-submit-rev",function(a){a.preventDefault();var e=starbapSetting.phone_require,t=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,r=/^\d+$/;$(this).parent().find("#reviewer_name-error").remove(),$(this).parent().find("#reviewer_email-error").remove(),$(this).parent().find("#reviewer_body-error").remove(),$(this).parent().find("#reviewer_phone-error").remove(),$(this).parent().find("#reviewer_title-error").remove();var s=$(this).parent().find("input[name='reviewer_name']").val(),i=$(this).parent().find("input[name='reviewer_email']").val(),n=$(this).parent().find("textarea[name='review_body']").val(),p=$(this).parent().find("input[name='reviewer_phone']").val(),o=$(this).parent().find("input[name='review_title']").val(),d=!0;if(e?(""===p&&($(this).parent().find(".starbap-form__phone-fieldset label").append('<span id="reviewer_phone-error" class="error" for="reviewer_phone">Vui lÃ²ng nháº­p sá»‘ Ä‘iá»‡n thoáº¡i !</span>'),d=!1),""!==p&&(p.length<9||p.length>11||!r.test(p))&&($(this).parent().find(".starbap-form__phone-fieldset label").append('<span id="reviewer_phone-error" class="error" for="reviewer_phone">Vui lÃ²ng nháº­p Ä‘Ãºng Ä‘á»‹nh dáº¡ng sá»‘ Ä‘iá»‡n thoáº¡i !</span>'),d=!1),""!==i&&!1===t.test(i)&&($(this).parent().find(".starbap-form__email-fieldset label").append('<span id="reviewer_email-error" class="error" for="reviewer_name">Vui lÃ²ng nháº­p Ä‘Ãºng Ä‘á»‹nh dáº¡ng email hoáº·c Ä‘á»ƒ trá»‘ng!!</span>'),d=!1)):(""===i&&($(this).parent().find(".starbap-form__email-fieldset label").append('<span id="reviewer_email-error" class="error" for="reviewer_name">Vui lÃ²ng nháº­p email cá»§a báº¡n!</span>'),d=!1),""!==i&&!1===t.test(i)&&($(this).parent().find(".starbap-form__email-fieldset label").append('<span id="reviewer_email-error" class="error" for="reviewer_name">Vui lÃ²ng nháº­p Ä‘Ãºng Ä‘á»‹nh dáº¡ng email!</span>'),d=!1),""!==p&&(p.length<9||p.length>11||!r.test(p))&&($(this).parent().find(".starbap-form__phone-fieldset label").append('<span id="reviewer_phone-error" class="error" for="reviewer_phone">Vui lÃ²ng nháº­p Ä‘Ãºng Ä‘á»‹nh dáº¡ng sá»‘ Ä‘iá»‡n thoáº¡i hoáº·c cÃ³ thá»ƒ bá» trá»‘ng!</span>'),d=!1)),""===s&&($(this).parent().find(".starbap-form__name-fieldset label").append('<span id="reviewer_name-error" class="error" for="reviewer_name">Vui lÃ²ng nháº­p tÃªn cá»§a báº¡n!</span>'),d=!1),""===n&&($(this).parent().find(".starbap-form__body-fieldset label").append('<span id="reviewer_body-error" class="error" for="reviewer_body">Vui lÃ²ng nháº­p ná»™i dung Ä‘Ã¡nh giÃ¡ cá»§a báº¡n!</span>'),d=!1),""===o&&($(this).parent().find(".starbap-form__title-fieldset label").append('<span id="reviewer_title-error" class="error" for="reviewer_title">Vui lÃ²ng nháº­p tiÃªu Ä‘á» Ä‘Ã¡nh giÃ¡ cá»§a báº¡n!</span>'),d=!1),d){var l=0;null!=$(this).parent().find("#stars li.selected").last().data("value")&&(l=parseInt($(this).parent().find("#stars li.selected").last().data("value"),10));var c="";""!==$(this).parent().find("input[name='review_video']").val()&&"undefined"!==$(this).parent().find("input[name='review_video']").val()&&(c="https://www.youtube.com/embed/"+$(this).parent().find("input[name='review_video']").val().split("?")[1].split("&")[0].split("=")[1]);var b={numberStar:l,reviewTitle:$(this).parent().find("input[name='review_title']").val(),reviewContent:n,reviewStatus:"PENDING",reviewType:"REVIEW",shopId:Haravan.orgid,domain:"https://"+Haravan.shop,productId:$(this).parents("#startbap_product_reviews").data("id"),productName:$(this).parents("#startbap_product_reviews").data("product-title"),productHandle:$(this).parents("#startbap_product_reviews").data("url").split("/").pop(),participant:{name:s.trim(),email:i,phone:p},reviewVideo:c,reviewImages:[]};$(this).parent().find(".starbap-picture-fieldset__container .starbap-picture-fieldset__box-wrapper.starbap-has-preview-image.starbap-has-preview-image--pictures").length>0&&$(this).parent().find(".starbap-picture-fieldset__container .starbap-picture-fieldset__box-wrapper.starbap-has-preview-image.starbap-has-preview-image--pictures").each(function(){var a={pathImage:$(this).data("img")};b.reviewImages.push(a)}),$.ajax({type:"POST",url:"https://review-app-api.starbap.app/api/review-products",contentType:"application/json",data:JSON.stringify(b),dataType:"json",success:function(a){console.log(a),alert("Gá»­i Ä‘Ã¡nh giÃ¡ thÃ nh cÃ´ng! ÄÃ¡nh giÃ¡ cá»§a báº¡n sáº½ Ä‘Æ°á»£c duyá»‡t vÃ  Ä‘Äƒng trong thá»i gian sá»›m nháº¥t.")}}),$(this).closest(".starbap-form-wrapper").hide()}}),$(document).on("change",".starbap-sort-dropdown",function(){var a=1,e=$(this).parents("#startbap_product_reviews").data("id");if("undefined"!=a&&null!=a&&""!=a){a=Number(a)-1;var t=$(this).val(),r="";if("most-recent"==t)r="https://review-app-api.starbap.app/api/shop/"+Haravan.orgid+"/productId/"+e+"/review-products/data?reviewType=REVIEW&size=5&sort=createdDate,desc&page="+a;if("old-recent"==t)r="https://review-app-api.starbap.app/api/shop/"+Haravan.orgid+"/productId/"+e+"/review-products/data?reviewType=REVIEW&size=5&sort=createdDate,asc&page="+a;if("highest-rating"==t)r="https://review-app-api.starbap.app/api/shop/"+Haravan.orgid+"/productId/"+e+"/review-products/data?reviewType=REVIEW&size=5&sort=numberStar,desc&page="+a;if("lowest-rating"==t)r="https://review-app-api.starbap.app/api/shop/"+Haravan.orgid+"/productId/"+e+"/review-products/data?reviewType=REVIEW&size=5&sort=numberStar,asc&page="+a;$.ajax({url:r}).done(function(a){$("#startbap_product_reviews").find(".starbap-rev-widg__body").html(a),init()}).fail(function(a){})}}),$(document).on("click",".starbap-rev-widg__body .starbap-paginate__page",function(){var a=$(this).attr("data-page")-1,e=$(this).parents("#startbap_product_reviews").data("id");a=Number(a);var t=$(".starbap-sort-dropdown").val(),r="https://review-app-api.starbap.app/api/shop/"+Haravan.orgid+"/productId/"+e+"/review-products/data?reviewType=REVIEW&size=5&sort=createdDate,desc&page="+a;if("most-recent"==t)r="https://review-app-api.starbap.app/api/shop/"+Haravan.orgid+"/productId/"+e+"/review-products/data?reviewType=REVIEW&size=5&sort=createdDate,desc&page="+a;if("old-recent"==t)r="https://review-app-api.starbap.app/api/shop/"+Haravan.orgid+"/productId/"+e+"/review-products/data?reviewType=REVIEW&size=5&sort=createdDate,asc&page="+a;if("highest-rating"==t)r="https://review-app-api.starbap.app/api/shop/"+Haravan.orgid+"/productId/"+e+"/review-products/data?reviewType=REVIEW&size=5&sort=numberStar,desc&page="+a;if("lowest-rating"==t)r="https://review-app-api.starbap.app/api/shop/"+Haravan.orgid+"/productId/"+e+"/review-products/data?reviewType=REVIEW&size=5&sort=numberStar,asc&page="+a;$.ajax({url:r}).done(function(a){$("#startbap_product_reviews").find(".starbap-rev-widg__body").html(a),init()}).fail(function(a){})}),$(document).on("click",".starbap-quest-widg__body .starbap-paginate__page",function(){var a=$(this).attr("data-page"),e=$(this).parents("#startbap_product_reviews").data("id");a=Number(a)-1,$.ajax({url:"https://review-app-api.starbap.app/api/shop/"+Haravan.orgid+"/productId/"+e+"/review-products/data?reviewType=QUESTION&size=5&sort=id,desc&page="+a}).done(function(a){$("#startbap_product_reviews").find(".starbap-quest-widg__body").html(a),init()}).fail(function(a){})}),$(document).on("click",".starbap-rev__share-btn.starbap-rev__share-fb",function(){for(var a=$(this).closest(".starbap-divider-top").find(".starbap-rev__rating").attr("data-score"),e="",t=0;t<a;t++)e+="â˜…";var r=Haravan.shop+encodeURIComponent($(this).parents().find("#startbap_product_reviews").data("url"));r=(r=r+"&picture="+encodeURIComponent($(this).parents().find("#startbap_product_reviews").data("img")))+"&quote="+encodeURIComponent(e+" "+$(this).closest(".starbap-divider-top").find(".starbap-rev__title").text()+" "+$(this).closest(".starbap-divider-top").find(".starbap-rev__body > p").text()),window.open("https://www.facebook.com/sharer/sharer.php?u="+r,"pop","width=600, height=400, scrollbars=no")}),$(document).on("click",".starbap-rev__share-btn.starbap-rev__share-twitter",function(){for(var a=$(this).closest(".starbap-divider-top").find(".starbap-rev__rating").attr("data-score"),e="",t=0;t<a;t++)e+="â˜…";var r=encodeURIComponent(e+" "+$(this).closest(".starbap-divider-top").find(".starbap-rev__title").text()+" "+$(this).closest(".starbap-divider-top").find(".starbap-rev__body > p").text());r=r+"&url="+Haravan.shop+encodeURIComponent($(this).parents().find("#startbap_product_reviews").data("url")),window.open("http://twitter.com/intent/tweet?text="+r,"pop","width=600, height=400, scrollbars=no")});