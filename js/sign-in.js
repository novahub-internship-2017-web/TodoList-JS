function signIn() {
    var email_account = $("#email").val();
    var password_account = $("#password").val();

    var request = $.ajax({
        type: 'POST',
        url: "https://todo-js-be.herokuapp.com/auth/sign_in",
        crossDomain: true,
        data: {
            "email": email_account,
            "password": password_account
        }
    });

    request.done(function(data) {
        console.log(data);
        console.log("success");
    });

    request.fail(function(jqXHR, textStatus) {
        console.log("error");
    });
}