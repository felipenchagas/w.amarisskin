(function ($) {

    var sirpiCommentFormValidation = {

        onLoadValidation : function(commentValue, authorValue, emailValue, urlValue) {

            if( (commentValue.val()) == '' ) {
                jQuery(this).removeClass('active');
            } else {
                jQuery(this).addClass('active');
            }

            if( (authorValue.val()) == '' ) {
                jQuery(this).removeClass('active');
            } else {
                jQuery(this).addClass('active');
            }

            if( (emailValue.val()) == '' ) {
                jQuery(this).removeClass('active');
            } else {
                jQuery(this).addClass('active');
            }

            if( (urlValue.val()) == '' ) {
                jQuery(this).removeClass('active');
            } else {
                jQuery(this).addClass('active');
            }

        },

        focusOutFields: function(commentValue, authorValue, emailValue, urlValue) {
            jQuery(commentValue).focusout(function() {
                var valueCmt = jQuery(commentValue).val();
                if( valueCmt == '' ) {
                    jQuery(this).removeClass('active');
                } else {
                    jQuery(this).addClass('active');
                }
            });

            jQuery(authorValue).focusout(function() {
                var valueAuthor = jQuery(authorValue).val();
                if( valueAuthor == '' ) {
                    jQuery(this).removeClass('active');
                } else {
                    jQuery(this).addClass('active');
                }
            });

            jQuery(emailValue).focusout(function() {
                var valueEmail = jQuery(emailValue).val();
                if( valueEmail == '' ) {
                    jQuery(this).removeClass('active');
                } else {
                    jQuery(this).addClass('active');
                }
            });

            jQuery(urlValue).focusout(function() {
                var valueUrl = jQuery(urlValue).val();
                if( valueUrl == '' ) {
                    jQuery(this).removeClass('active');
                } else {
                    jQuery(this).addClass('active');
                }
            });
        }

    }

    "use strict";
    $(document).ready(function () {   

        var commentValue = jQuery('.comment-form p textarea[name="comment"]');
        var authorValue  = jQuery('.comment-form p input[name="author"]');
        var emailValue   = jQuery('.comment-form p input[name="email"]');
        var urlValue     = jQuery('.comment-form p input[name="url"]');

        sirpiCommentFormValidation.onLoadValidation(commentValue, authorValue, emailValue, urlValue);
        sirpiCommentFormValidation.focusOutFields(commentValue, authorValue, emailValue, urlValue);
    });  

})(jQuery);