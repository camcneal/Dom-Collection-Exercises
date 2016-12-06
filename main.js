// console.log(markets[0].marketname);

//pulls classes from the dom
var marketList = document.querySelector('.marketList');
var catList = document.querySelector('.catList');


//create function that takes all markets lass than ten miles from the user out of the array
var nearMark = markets.filter(function(market, i, arr) {
    if (market.marketname.split(' ')[0] <= 10) {
        return true;
    }
// make another function that shows the array and shows only the market name
}).map(function(market, i, arr) {
    return market.marketname.split(' ').slice(1).join(' ');
});
// console.log(nearMark);
// go through array and append the markets that apply to the page
nearMark.forEach(function(market, i) {
    var li = $('<li>' + market + '</li>');
    $('.marketList').append(li);
})

//
var catPic = catGif.data.map(function(cat, i) {
    // console.log(catGif.data[i].images.downsized.url);

    return cat.images.downsized.url;
});

catPic.forEach(function(cat, i) {
    var img = $('<img src=' + cat + '>');
    $('.catList').append(img);
})
