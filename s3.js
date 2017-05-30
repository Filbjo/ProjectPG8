$(document).ready(function() {
    $('select').material_select();


    function hide_inputs() {
        $("#custom-distance, #custom-class").hide();
        $("#custom-participants-in-group").hide();
        $("#start-number").hide();
    }

    hide_inputs();


    $("#distance").on('change', function() {
        if ($(this).val() == "custom") {
            $("#custom-distance").val("");
            $("#custom-distance").show();
        }
        else {
            $("#custom-distance").val($(this).val());
            $("#custom-distance").hide();
        }
    });

    $("#class").on('change', function() {
        if ($(this).val() == "custom") {
            $("#custom-class").val("");
            $("#custom-class").show();
        }
        else {
            $("#custom-class").val($(this).val());
            $("#custom-class").hide();
        }
    });

    $("#max-amount").change(function() {
        $("#end").val($("#max-amount").val());
    });




    $('input:radio[name="amount-in-group"]').change(
        function(){
            if ($(this).is(':checked') && $(this).val() == 'Begränsat') {
                $("#custom-participants-in-group").show();
            }
            else {
                $("#custom-participants-in-group").hide();
            }
        });




        $("#include-start-number").change(function() {
            if(this.checked) {
                $("#start-number").show();
            }
            else {
                $("#start-number").hide();
            }
        });




        $("#save-distance").click(function(event) {
            var $inputs = $('#new-distance :input');

            var values = {};
            $inputs.each(function() {

                if (this.name) {

                    if ($(this).is(':radio')) {
                        if ($(this).is(':checked')) {
                            values[this.name] = $(this).val();
                            return true;
                        }
                        else {
                            return true;
                        }
                    }

                    values[this.name] = $(this).val();

                }
            });

            var distanceId = Math.floor((Math.random() * 9999999999999999) + 1).toString();

            values["id"] = distanceId;


            var newDistElem = '<tr class="item" data-value-id="'+values["id"]+'">'+
            '<td>'+values["distance"]+'</td>'+
            '<td>'+values["class"]+'</td>'+
            '<td>'+values["amount-in-group"]+'</td>'+
            '<td>'+values["price-for"]+'</td>'+
            '<td>'+values["price"]+' SEK (inkl. '+values["tax"]+'% moms)</td>'+
            '<td>0/'+values["max-participants"]+'</td>'+
            '<td><a href="#" class="red btn delete-distance">X</a></td>'+
            '</tr>';


            $("#distance-items-holder").append(newDistElem);


            $("#distance-items-holder").find("tr[data-value-id='" + distanceId + "'] .delete-distance").on('click', function(event) {
                event.preventDefault();
                $(this).parent().parent().remove();
            });


            $('#new-distance').trigger("reset");
            hide_inputs();
        });

    });
