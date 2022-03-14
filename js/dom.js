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