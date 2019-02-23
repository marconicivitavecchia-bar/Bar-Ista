var app = {
    init: function () {
        console.log("init inside app!");
        $("title").text("Bar-Ista");
        $.getJSON("data.php")
            .done(app.onSuccess)
            .fail(app.onError);

    },
    onSuccess: function (jsonData) {
        console.log(jsonData);
        jsonData.productList.forEach(element => {
            let productRow = `
            <div class="product">
            <div class="image_product">
                    <img src="/img/${element.product}.png" alt="">
                </div>
                <div class="like">
                            <i class="far fa-heart" ></i>
                            <p><span id="count">${element.like}</span></p>
                </div>
                <div class="descrition">
                        <p class="nome">${element.product}</p>
                        <p class="prezzo">${element.price}euro</p>
                </div>
                <div class="add">
                    <button class="btnAdd">Add</button>
                   
                </div>
            </div>`;
            $("#main").append(productRow);
        });

    },

    onError: function (e) {
        console.log("error!");
        console.log(JSON.stringify(e));
    }
};

$(document).ready(app.init);

