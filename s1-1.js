$.extend({
    getUrlVars: function(){
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function(name){
        return $.getUrlVars()[name];
    }
});


$(document).ready(function() {
    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    //Time Picker:
    $('.timepicker').pickatime({
        // default: '00:00:00',
        twelvehour: false, // change to 12 hour AM/PM clock from 24 hour
        donetext: 'OK',
        autoclose: true,
        vibrate: true // vibrate the device when dragging clock hand
    });


    if($.getUrlVar("race-name")) {
        $("#race-name").val(decodeURI($.getUrlVar("race-name")));
    }

    if ($.getUrlVar("type")) {
        $('#type').val(decodeURI($.getUrlVar("type")));
        $('#type').material_select();
    }

});
