/*
 * Application
 */

$(document).tooltip({
    selector: "[data-toggle=tooltip]"
})

/*
 * Auto hide navbar
 */

jQuery(document).ready(function($){
    var confirmed = false;
    var element;
    $("button, a").click(confirmed,function (event) {
        var confirmMessage = this.getAttribute("data-custom-confirm");
        if(confirmMessage){
            if(confirmed == false){
                event.preventDefault();
            }
            $("#custom-confirm-message").html(confirmMessage);
            $("#customConfirmDialog").modal("show");
            element = this;
        }
    });

    $(".btn-yes").click(function(){
        confirmed = true;
        element.click(confirmed,function () {
        });
        confirmed = false;
    });

    var $header = $('.navbar-autohide'),
        scrolling = false,
        previousTop = 0,
        currentTop = 0,
        scrollDelta = 10,
        scrollOffset = 150

    $(window).on('scroll', function(){
        if (!scrolling) {
            scrolling = true

            if (!window.requestAnimationFrame) {
                setTimeout(autoHideHeader, 250)
            }
            else {
                requestAnimationFrame(autoHideHeader)
            }
        }
    })

    function autoHideHeader() {
        var currentTop = $(window).scrollTop()

        // Scrolling up
        if (previousTop - currentTop > scrollDelta) {
            $header.removeClass('is-hidden')
        }
        else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
            // Scrolling down
            $header.addClass('is-hidden')
        }

        previousTop = currentTop
        scrolling = false
    }
});