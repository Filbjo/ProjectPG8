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

    $("#max-amount").change(function() {
        $("#end").val($("#max-amount").val());
    });


    $("#custom-participants-in-group").hide();

    $('input:radio[name="group1"]').change(
        function(){
            if ($(this).is(':checked') && $(this).val() == 'limited') {
                $("#custom-participants-in-group").show();
            }
            else {
                $("#custom-participants-in-group").hide();
            }
        });



        $("#start-number").hide();
        $("#include-start-number").change(function() {
            if(this.checked) {
                $("#start-number").show();
            }
            else {
                $("#start-number").hide();
            }
        });
        // include-start-number


    });
