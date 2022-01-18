// -------   Mail Send ajax

$(document).ready(function() {
  var form = $('#myForm'); // contact form
  var submit = $('.submit-btn'); // submit button
  var info = $('.info'); // info div for show info message

  // form submit event
  form.on('submit', function(e) {
    e.preventDefault(); // prevent default form submit
    if (document.querySelector('[id="floatingInput"]').value){
      $.ajax({
        url: 'https://www.google.ru', // form action url
        type: 'POST', // form submit method get/post
        dataType: 'html', // request type html/json/xml
        data: form.serialize(), // serialize form data
        beforeSend: function() {
          submit.html('Sending....'); // change submit button text
        },
        error: function(e) {
          console.log(e)
        },
        complete: function(data) {
          form.trigger('reset'); // reset form
          submit.html("Get Started"); // reset submit button text
          info.html("Success!")
        }
      });
    }
    else {
      info.html("Please enter email address!")
    }
  });
});
