var siteName = document.querySelector("#siteName");
var siteURL = document.querySelector("#siteURL");
var addURL = document.querySelector("#addURL");

var urls, url;

if (localStorage.getItem("urlBook") == null) {
  urls = [];
} else {
  urls = JSON.parse(localStorage.getItem("urlBook"));
}

addURL.addEventListener("click", function () {
  url = {
    sname: siteName.value,
    surl: siteURL.value
  };
  urls.push(url);
  localStorage.setItem("urlBook", JSON.stringify(urls));
  displayUrl();
})

function deleteUrl(index) {

  urls = JSON.parse(localStorage.getItem("urlBook"));
  urls.splice(index, 1);
  displayUrl();
  localStorage.setItem("urlBook", JSON.stringify(urls));

}


function displayUrl() {
  var temp = "";
  for (var i = 0; i < urls.length; i++) {
    temp += '<tr><td><h1>' + urls[i].sname + '</h1></td><td><a class = "btn btn-outline-primary p-2" href="' + urls[i].surl + '"><i class="fas fa-thumbs-up"></i></a></td><td><a onclick="deleteUrl(' + i + ')" class="btn btn-outline-danger p-2"><i class="far fa-trash-alt"></i></a></td></tr>';
  }
  document.getElementById("bookTable").innerHTML = temp;
}

displayUrl();

$("#siteName").blur(function () {
  $(".siteNameHeader").css("opacity", "0");
})
$("#siteURL").blur(function () {
  $(".siteUrlHeader").css("opacity", "0");
})