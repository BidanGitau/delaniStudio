$(document).ready(function() {
    $("#1, #one").click(function() {
        $(".hidden1").toggle();
        $("#one").toggle();
    });
});
$(document).ready(function() {
    $("#2, #two").click(function() {
        $(".hidden2").toggle();
        $("#two").toggle();
    });
});
$(document).ready(function() {
    $("#3, #three").click(function() {
        $(".hidden3").toggle();
        $("#three").toggle();
    });
});

// Let moringaStudent = {
//     firstName: ”Morris”,
//     LastName: ”Kwambulu”,
//     Level: 1,
//     track: ["Prep", "JavaScript", "Python", "Django"],
//     enrollmentStatus: true
// };


$(document).ready(function() {


    $('#contactUsForm').submit(function(evt) {
        evt.preventDefault();

        const form = evt.target;

        if (!form.checkValidity()) {
            $(form).find('.alert').addClass('alert-danger').html('Check Missing Fields').show();
            return;
        }

        const formData = new FormData(form);
        console.log(formData);

        $(form).find('.alert').addClass('alert-primary')
            .html(form.name.value + ' we have received your message. Thank you fro reaching out to us.')
            .show()
    });
});

$('img').click(function(e) {

})