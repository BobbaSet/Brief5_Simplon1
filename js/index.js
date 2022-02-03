const url = "http://localhost:1337";
const urlArticle = "/api/articles?populate=*";



function printArticles(data) {
    let main = document.getElementById("grid");

    for(let article of data.data) {
        console.log(article)
        let div = grid.appendChild(document.createElement("div"));
        div.classList.add("grid-items");
        let para_grid = div.appendChild(document.createElement("p"));
        para_grid.classList.add("para_grid");
        /* Pour les images*/
        /* let img = div.appendChild(document.create("img"));
         img.setAttribute("src",url + articles.attributes.illustration.data.attributes.formats.medium.url);*/
        para_grid.innerText = article.attributes.publishedAt;
        let a = div.appendChild(document.createElement("a"));
        a.setAttribute("href","article.html");
        let img = a.appendChild(document.createElement("img"));
        img.setAttribute("src", url+article.attributes.Illustration.data.attributes.formats.medium.url);
        let title = div.appendChild(document.createElement("h3"));
        title.innerText = article.attributes.Titre;
        let article_para = div.appendChild(document.createElement("p"));
        article_para.innerText = article.attributes.Article;
    




    }
}

function getArticles(){
    fetch(url+urlArticle)
    .then(response => response.json())
    .then(response => printArticles(response))
    // .catch(error => alert("Erreur : " + error));
}
getArticles();
