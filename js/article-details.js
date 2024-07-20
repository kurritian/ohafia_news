var all_article;
var article_title;
var article_json; 

$(document).ready(function(e) {
    
    all_article = localStorage.getItem("all_articles"); 
    article_title = localStorage.getItem("title"); 
    article_json = localStorage.getItem("article_json");
    
    
    // console.log(all_article, article_title, article_json)

    const params = new URLSearchParams(document.location.search);
    const Id1 = params.get("post_title");
    console.log('Id1')
    console.log(Id1)

    var found_article = searchItem()

    updatePost(found_article)
});


function searchItem() {

    var getArticles = JSON.parse(all_article)

    const item = getArticles.find(obj => obj.title === article_title);
    console.log(item); 

    return item
}


 function updatePost(post) {
    
    
    var title = document.querySelector('div.head-post>h2')
    title.innerHTML = post.title

    var sub_title = document.querySelector('div.head-post>p')
    sub_title.innerHTML = post.content

    var image = document.querySelector('div.main-post>div.entry-post>img')
    image.setAttribute('src', post.urlToImage)


}




