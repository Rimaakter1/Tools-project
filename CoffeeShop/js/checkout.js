$(document).ready(function () {

    $("#check_out").click(function () {


        $.ajax({
            url: './requests/calculate_checkout.php',
            method: 'post',
            data: { action: "checkout" },
            success: function () {
                window.location = "checkout.php";
            }
        });

    });



});