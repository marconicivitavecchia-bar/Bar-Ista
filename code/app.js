
var app = {
    init: function () {
        console.log("init inside app!");
        $("title").text("Bar-Ista");
        $.getJSON("data.json")
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

$(document).ready(app.init);/*
document.getElementsByClassName("far fa-heart")[0].ondblclick=like;
document.getElementsByClassName("btnAdd")[0].onclick=addToShop;
function addToShop(){
   console.log("Click me");


}
function like(){
    var like=document.getElementById("count");
    document.getElementById("count").innerHTML=100+1;
    document.getElementsByClassName("far fa-heart")[0].style.backgroundColor="red";
}
*/