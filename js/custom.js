
var jsonData = [];
$(document).ready(function(e) {
    $.getJSON("https://api.jsonsilo.com/public/973841c7-7bc3-4c90-ba2d-594ed80f7f94", 
        function( result ){

        // console.log('in custom')

        jsonData = result['articles']
        console.log(jsonData)

        processData()
        localStorage.setItem("all_articles", JSON.stringify(jsonData)); 
    });
});


function processData() {

    const articleElement = document.querySelectorAll('article')

    var index = 0;
    articleElement.forEach((article, key) => {
        // article.innerHTML = 'div'

        article.innerHTML  =
        `
            <div class="thumb">
                <div href="#"><img src="${jsonData[key].urlToImage}" alt="img"></div>
            </div>
            <div class="cat">
                <a href="#">Social media</a>
            </div>
            <h3><a href="article-detail.html?post_title=${jsonData[key].title}" data-foo="bar" data-json='${JSON.stringify(jsonData[key])}' onclick="updateClick(this)">${jsonData[key].title}</a></h3>
            <div class="activity">
                <span class="views">12</span><span class="eyes"><a href="#">15</a></span>
            </div>
       `
    })
}


 function updateClick(article) {
    var jsonData =  JSON.parse(article.dataset.json) 
    
    var title = jsonData['title']
    // var imgUrl = jsonData['title']
    // var articleUrl = jsonData['title']

    localStorage.setItem("title", title);
    localStorage.setItem("article_json", article.dataset.json); 

    // console.log('----------------------------', article)
    // console.log('----------------------------', jsonData, jsonData['title'] )

    // console.log('======================', localStorage.getItem("title"))
    // console.log('=================', localStorage.getItem("article_json"))
}

