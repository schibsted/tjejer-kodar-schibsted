 function article () {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('article');
    var article = news[id]
    var title = article ["title"]
    var image = article ['image']
    var result = ''
    result += "<h1>" + title +"</h1>"
    result += '<img src ="'+ image +'">'
    $.each(article["contents"], function (index, paragraph) {
        result += '<p>' + paragraph + '</p>';
    })

    return result 
}