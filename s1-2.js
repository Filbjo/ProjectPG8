$(document).ready(function() {

    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15
    });


    var acc = [
        "test@test.com",
        "robin@test.com",
        "basil@test.com",
        "filippa@test.com"
    ];

    // email regex
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    $(".login, .register").hide();

    var wto;
    $("#email").on("input", function() {
        clearTimeout(wto);
        wto = setTimeout(function() {
            var input = $("#email").val().toLowerCase();
            if(input.match(re)) {
                if ($.inArray(input, acc) > -1) {
                    $(".register").hide();
                    $(".login").show("100");
                }
                else {
                    $(".login").hide();
                    $(".register").show("100");
                }
            }
            else {
                $(".login, .register").hide();
            }
        }, 500);
    });
});
