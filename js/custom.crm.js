// INIT SETTINGS
window.biqasoftSite = {};
if (window.location.hostname == "biqasoft.com.dev") {
    window.biqasoftSite.apiServerURL = "http://localhost:8080/landingPage";
    window.biqasoftSite.baseRedirectUrl = "http://cloud.biqasoft.com.dev";
    window.biqasoftSite.devMode = true;
} else {
    window.biqasoftSite.apiServerURL = "https://api.biqasoft.com/landingPage";
    window.biqasoftSite.baseRedirectUrl = "https://cloud.biqasoft.com";
    window.biqasoftSite.devMode = false;
}

//////////////////////////////////////////////////////////////////////////

$(function () {
    $("#but-top").click(function () {

        //var invite = $("#invite").val();
        //if (invite != "SU63-RT") {
        //    $("#but-top").html("Неверный инвайт!");
        //    return;
        //}

        $("#but-top").prop('disabled', true);
        $("#but-top").html("Пожалуйста, подождите! <br> Ваш аккаунт создаётся <br> Через несколько секунд <br> Вы будете перенаправлены  ");

        var firstname = $("#banner-name").val();
        var telephone = $("#banner-telephone").val();
        var lastname =  $("#banner-lastname").val();
        var email =     $("#banner-email").val();

        $("#error-message-not-all-fields").addClass("hidden");
        $("#error-message-user-already-exist-message").addClass("hidden");

        if (firstname == '' || telephone == '') {

            $("#but-top").prop('disabled', false);
            $("#but-top").text("Попробовать еще раз!");

            $("#error-message-not-all-fields").removeClass("hidden");
            //$('.success').fadeOut(200).hide();
            //$('.error').fadeOut(200).show();
        }
        else {
            // Use browser time zone
            // The time-zone offset is the difference, in minutes, between UTC and local time.
            // Note that this means that the offset is positive
            // if the local timezone is behind UTC and negative if it is ahead.
            // For example, if your time zone is UTC+10 (Australian Eastern Standard Time),
            // -600 will be returned. Daylight savings time prevents this value from being a constant even for a given locale
            var offset = new Date().getTimezoneOffset();
            var normOffset = offset / 60 * -1;

            var arr = {
                userAccount: {
                    firstname: firstname,
                    email: email,
                    lastname: lastname,
                    telephone: telephone
                },
                timeZoneOffset : normOffset
            };

            $.ajax({
                url: window.biqasoftSite.apiServerURL,
                type: 'POST',
                data: JSON.stringify(arr),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                async: true,
                success: function (b) {
                    //$("#zayavka-top").html("<h1> Спасибо! </h1>  <br>  <h3> Скоро мы Вам перезвоним. </h3> ");
                    //window.loading_screen.finish();
                        window.location = window.biqasoftSite.baseRedirectUrl+"/dashboard?username=" + b.username + "&password=" + b.password;
                },

                error: function (b) {
                    if (b.responseJSON.message == "user with this email already exist") {
                        $("#error-message-user-already-exist-message").removeClass("hidden");
                        $("#but-top").prop('disabled', false);
                        $("#but-top").text("Попробовать еще раз!");
                    }

                }

            });


        }
        return false;
    });
});
