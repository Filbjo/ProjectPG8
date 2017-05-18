$(document).ready(function() {
    $('select').material_select();
});

function readURL(input, imageId) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $(imageId).attr('src', e.target.result);
          };

          reader.readAsDataURL(input.files[0]);
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
