$(document).ready(function () {

    $("#currency_list").change(function () {
        // get selected currency logo
        var currency_logo = $("#currency_list").val();


        $.ajax({
            url: './requests/currency.php',
            method: 'POST',
            data: { currency_logo: currency_logo, action: "check currency" },
            success: function () {

                //reload page
                location.reload(true);

            }
        });


    });

});