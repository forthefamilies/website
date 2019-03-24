var keywordElement = document.getElementById("keyword");
var filterElement = document.getElementById("filter");
var locationCityElement = document.getElementById("city");
var locationStateRegionElement = document.getElementById("state-region");
var priceElement = document.getElementById("price");

var googleSearch = function() {
  var keyword = keywordElement.value;
  console.log(keyword);
  var searchString = keyword;

  searchString += " ~" + filterElement.options[filterElement.selectedIndex].textContent;
  searchString += " location: " + locationCityElement.value + " " + locationStateRegionElement.value;

  url = "http://www.google.com/search?q=" + encodeURI(searchString);
  console.log(url);
  window.location.href = url;
}
