$(document).ready(function() {
    $('.p-design').click(function() {
        $('.sd').toggle();
        $(".design-icon").toggle();
    });
    $('.service-icon').click(function() {
        $(".ppd").toggle();
        $('.design').toggle();
    });

    $('.product-icon').click(function() {
        $(".pd").toggle();
        $('.design').toggle();
    });
})

// Let moringaStudent = {
//     firstName: ”Morris”,
//     LastName: ”Kwambulu”,
//     Level: 1,
//     track: ["Prep", "JavaScript", "Python", "Django"],
//     enrollmentStatus: true
// };