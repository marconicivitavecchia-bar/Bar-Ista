var app = {

    init: function () {
        // alert("Benvenuti nel Bar-Ista ");
        $.get("https://api.github.com/users/olteCo")
            .done(app.onSuccess);
    },
    onSuccess: function (data) {
        console.log(data)
    }
};


$(document).ready(app.init);