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
                    // console.log(this.name + " : " +$(this).val());

                }
            });

            values["id"] = Math.floor((Math.random() * 9999999999999999) + 1).toString();

            // console.log(values);

            // var newDistElem = '<div class="col s12 item" data-value-id="'+values["id"]+'">'+
            // '<div class="col s6 head">Distans</div>'+
            // '<div class="col s6 data"><span data-value-distance="'+values["distance"]+'">'+values["distance"]+'</span> KM</div>'+
            // '<div class="col s6 head">Klass</div>'+
            // '<div class="col s6 data"><span data-value-class="'+values["class"]+'">'+values["class"]+'</span></div>'+
            // '<div class="col s6 head">Antal deltagare i gruppanmälan</div>'+
            // '<div class="col s6 data"><span data-value-amount-in-group="'+values["amount-in-group"]+'">'+values["amount-in-group"]+'</span></div>'+
            // '<div class="col s6 head">Anmälningsavgiften gäller</div>'+
            // '<div class="col s6 data"><span data-value-price-for="'+values["price-for"]+'">'+values["price-for"]+'</span></div>'+
            // '<div class="col s6 head">Pris (inkl. <span data-value-tax="'+values["tax"]+'">'+values["tax"]+'</span>% moms)</div>'+
            // '<div class="col s6 data"><span data-value-price="'+values["price"]+'">'+values["price"]+'</span> SEK</div>'+
            // '<div class="col s6 head">Antal deltagare</div>'+
            // '<div class="col s6 data"><span data-value-registered-participants="0"></span>0/<span data-value-max-participants="'+values["max-participants"]+'">'+values["max-participants"]+'</span></div>'+
            // '</div>';

            var newDistElem = '<tr class="item" data-value-id="'+values["id"]+'">'+
            '<td>'+values["distance"]+'</td>'+
            '<td>'+values["class"]+'</td>'+
            '<td>'+values["amount-in-group"]+'</td>'+
            '<td>'+values["price-for"]+'</td>'+
            '<td>'+values["price"]+' SEK (inkl. '+values["tax"]+'% moms)</td>'+
            '<td>0/'+values["max-participants"]+'</td>'+
            '<td><a href="#" class="red btn delete-distance">X</a></td>'+
            '</tr>';

            // var $stuff = $(newDistElem);
            // $.each( values, function( key, value ) {
            //     $stuff.find("span").data("value-"+key, value);
            //     console.log(key + " : " + value);
            // });


            console.log(newDistElem);
            $("#distance-items-holder").append(newDistElem);
            $('#new-distance').trigger("reset");
            hide_inputs();
        });

    });
