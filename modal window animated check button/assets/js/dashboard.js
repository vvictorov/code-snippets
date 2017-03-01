$(document).ready(function () {
    var selectedThemeId = $("#theme-hidden-input").val();
    changeButton(selectedThemeId);
    selectTheme(selectedThemeId);
});

function changeButton(btnId) {
    $('.btn-canvas').each(function() {
        var ctx = this.getContext('2d')
        ctx.clearRect(0,0,this.width,this.height)
    });
    $(".select-button span").html("Select this theme");
    drawTick(btnId);
    selectTheme(btnId);
    $("#select-button-"+btnId+" span").html("Selected");
    $("#theme-hidden-input").val(btnId);
}

function drawTick(btnId){
    var start = 10;
    var mid = 20;
    var end = 40;
    var width = 4;
    var leftX = start;
    var leftY = start;
    var rightX = mid - (width / 2.7);
    var rightY = mid + (width / 2.7);
    var animationSpeed = 20;

    var ctx = document.getElementById('btn-canvas-'+btnId).getContext('2d');
    ctx.lineWidth = width;
    ctx.strokeStyle = 'rgba(50, 50, 50, 1)';

    for (i = start; i < mid; i++) {
        var drawLeft = window.setTimeout(function () {
            ctx.beginPath();
            ctx.moveTo(start, start);
            ctx.lineTo(leftX, leftY);
            ctx.stroke();
            leftX++;
            leftY++;
        }, 1 + (i * animationSpeed) / 3);
    }

    for (i = mid; i < end; i++) {
        var drawRight = window.setTimeout(function () {
            ctx.beginPath();
            ctx.moveTo(leftX, leftY);
            ctx.lineTo(rightX, rightY);
            ctx.stroke();
            rightX++;
            rightY--;
        }, 1 + (i * animationSpeed) / 3);
    }
}

function selectTheme(themeId) {
    $(".theme-thumbnail").removeClass("selected-theme");
    $(".theme-thumbnail .currently-selected-label").css("display","none");
    $("#thumbnail-"+themeId).addClass("selected-theme");
    $("#thumbnail-"+themeId+" .currently-selected-label").css("display","block");
}
