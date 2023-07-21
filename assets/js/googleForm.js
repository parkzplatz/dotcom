   //selector from your HTML form
    $('#googleForm').submit(function(e) {
        //prevent the form from submiting so we can post to the google form
        e.preventDefault();
        //AJAX request
        $.ajax({
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSelgCTP42bcgABCJopqRiy7Kvg40D8lu2v4vS_AiHkQSQZ1ew/formResponse', //The public Google Form url, but replace /view with /formResponse
        data: $('#googleForm').serialize(), //Nifty jquery function that gets all the input data 
        type: 'POST', //tells ajax to post the data to the url
        dataType: "json", //the standard data type for most ajax requests
        statusCode: { //the status code from the POST request
            0: function(data) { //0 is when Google gives a CORS error, don't worry it went through
            //success
            // $('#form-success').text('hooray! 0');
            $('#updateOnSuccess').html("<div id='formResponse' class='__left'></div><div class='__right'></div>");
            $('#formResponse').html("<h2>Reach Out</h2>")
            .append("<p><i class='fa-regular fa-envelope fa-lg'></i> Thanks for your message! Please allow 24-48 hours for a response. We'll get back to you as soon as possible.</p>");
            }, 
            200: function(data) {//200 is a success code. it went through!
            //success
            // $('#form-success').text('hooray! 200');
            $('#updateOnSuccess').html("<div id='formResponse' class='__left'></div><div class='__right'></div>");
            $('#formResponse').html("<h2>Reach Out</h2>")
            .append("<p><i class='fa-regular fa-envelope fa-lg'></i> Thanks for your message! Please allow 24-48 hours for a response. We'll get back to you as soon as possible.</p>");
            },
            403: function(data) {//403 is when something went wrong and the submission didn't go through
            //error
            alert('Oh no! something went wrong. we should check our code to make sure everything matches with Google');
            }
        }  
        });
    });