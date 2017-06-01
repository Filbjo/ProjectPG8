$(document).ready(function() {
    $("tr.race").each(function() {
        var name = $(this).find('.race-name').text();
        var type = $(this).find('.type').text();
        var href = $(this).find("a").attr("href") + "?race-name=" + name + "&type=" + type;
        $(this).find("a").attr("href", href);
    });

});
