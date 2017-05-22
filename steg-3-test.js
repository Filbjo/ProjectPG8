$(document).ready(function() {
    $('select').material_select();


    $("#custom-distance, #custom-class").hide();


    $("#distance").on('change', function() {
        if ($(this).val() == "custom") {
            $("#custom-distance").show();
        }
        else {
            $("#custom-distance").hide();
        }
    });

    $("#class").on('change', function() {
        if ($(this).val() == "custom") {
            $("#custom-class").show();
        }
        else {
            $("#custom-class").hide();
        }
    });





});
