$(document).ready(function() {
    $('select').material_select();

    $("#event-image-preview, #event-banner-preview, #track-maps-preview").hide();
});

function readURL(input, imageId) {
    $(imageId).hide();

      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $(imageId).attr('src', e.target.result);
          };

          reader.readAsDataURL(input.files[0]);

          $(imageId).show('1000', 'linear');
      }
  }


  $("#event-image").change(function(){
      readURL(this, '#event-image-preview');

  });

  $("#event-banner").change(function(){
      readURL(this, '#event-banner-preview');
  });

  $("#track-maps").change(function(){
      readURL(this, '#track-maps-preview');
  });
