

$.cookie.json = true;
var a = $.cookie('biqasoftUserService');
//console.log(a.username);

if ( (typeof a != "undefined") &&  a.logged == true){
    $("#notLogged").addClass("hidden");
    $("#alreadyLogged").removeClass("hidden");

    $("#notLoggedHeader").addClass("hidden");
    $("#alreadyLoggedHeader").removeClass("hidden");

    $("#firstname").html(a.firstname);
    $("#lastname").html(a.lastname);

    $("#email").html(a.email);


}


$(window).scroll(function(){
	"use strict";
	var scroll = $(window).scrollTop();
	if( scroll > 60 ){
		$(".navbar").addClass("scroll-fixed-navbar");
	} else {
		$(".navbar").removeClass("scroll-fixed-navbar");
	}
});

// --------------------------------------------------------
//	Smooth Scrolling
// --------------------------------------------------------
$(".navbar-nav li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000);
});

$('#media').carousel({
    interval: false
});

$('.toTopScroll').click(function(e) {
    e.preventDefault();
    //$.scrollTo("#topForm");
    $.scrollTo("body",300);

    //$("#topForm").addClass("focusDiv");
    //$(".overlay").show("fade", 500);
});


$('.toSecondScreenPart').click(function(e) {
    e.preventDefault();
    //$.scrollTo("#topForm");
    //$.scrollTo(".secondScreenPart",300);

    $.scrollTo( $(window).height() ,300);


    //$("#topForm").addClass("focusDiv");
    //$(".overlay").show("fade", 500);
});


$(function () {

    $('#container').highcharts({
        chart: {
            type: 'funnel',
            marginRight: 100,
            backgroundColor: "#fafafa"

        },
        title: {
            text: 'Воронка продаж',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    //color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    //color: "#7a7a7a",
                    softConnector: true
                },
                neckWidth: '30%',
                neckHeight: '25%'

                //-- Other available options
                // height: pixels or percent
                // width: pixels or percent
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Людей',
            data: [
                ['Заходов на сайт',   15654],
                ['Начало заполнения формы связи',       4064],
                ['Заполнено форм связи', 1987],
                ['Менеджер дозвонился',    976],
                ['Менеджер договорился на оказание услуги',    846],
                ['Клиент оплатил',    760],
                ['Поиск исполнителя',    759],
                ['Услуга оказана полностью',    759],
                ['Повторная продажа',    346]

            ]
        }]
    });
});




//$(document).ready(function(){
//    // add button style
//    $("[name='poll_bar'").addClass("btn btn-default");
//    // Add button style with alignment to left with margin.
//    $("[name='poll_bar'").css({"text-align":"left","margin":"5px"});
//
//    //loop
//    $("[name='poll_bar'").each(
//        function(i){
//            //get poll value
//            var bar_width = (parseFloat($("[name='poll_val'").eq(i).text())/2).toString();
//            bar_width = bar_width + "%"; //add percentage sign.
//            //set bar button width as per poll value mention in span.
//            $("[name='poll_bar'").eq(i).width(bar_width);
//
//            //Define rules.
//            var bar_width_rule = parseFloat($("[name='poll_val'").eq(i).text());
//            if(bar_width_rule >= 50){$("[name='poll_bar'").eq(i).addClass("btn btn-sm btn-success")}
//            if(bar_width_rule <  50){$("[name='poll_bar'").eq(i).addClass("btn btn-sm btn-warning")}
//            if(bar_width_rule <= 10){$("[name='poll_bar'").eq(i).addClass("btn btn-sm btn-danger")}
//
//            //Hide dril down divs
//            $("#" + $("[name='poll_bar'").eq(i).text()).hide();
//        });
//
//    //On click main menu bar show its particular detail div.
//    $("[name='poll_bar'").click(function()
//    {
//        //Hide all
//        $(".panel-body").children().hide();
//        //Display only selected bar texted div sub chart.
//        $("#" + $(this).text()).show();
//        //If not inner drill down sub detail found then move to main menu.
//        if($("#" + $(this).text()).length == 0) {
//            $("#Main").show();
//        }
//    });
//});

// --------------------------------------------------------
// Pretty Photo for Lightbox Image
// --------------------------------------------------------
//$(document).ready(function() {
//    $("a[data-gal^='prettyPhoto']").prettyPhoto();
//});

// --------------------------------------------------------
//	Navigation Bar
// --------------------------------------------------------



