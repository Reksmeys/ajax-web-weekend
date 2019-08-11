//load data from article.json
function loadLocalJSON(){
    var xhtp = new XMLHttpRequest()
    xhtp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            var o = JSON.parse(this.response);
           appendToTable(o.DATA)
        }
    }
    xhtp.open("GET", "../json/article.json", true);
    xhtp.send()
}
function loadArticle(){
    var xhtp = new XMLHttpRequest()
    xhtp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            var o = JSON.parse(this.response);
           appendToTable(o.DATA, o.MESSAGE)
           
        }
    }
    xhtp.open("GET", "http://api-ams.me/v1/api/articles?page=1&limit=15", true);
    xhtp.send()
}
loadArticle()
function appendToTable(article, msg){
    var content = "";
    for (a of article){
        content +=`
        <tr>
            <td>${a.ID}</td>
            <td>${a.TITLE}</td>
            <td>${a.DESCRIPTION}</td>
            <td><img src=${a.IMAGE} /></td>
            <td><button class="btn btn-outline-primary waves-effect">DELETE</button></td>
        </tr>
    `
    }
    $('tbody').html(content)
    toastr.success(`${msg}`)
  
}
function loadPhotos(){
    var xhtp = new XMLHttpRequest()
    xhtp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            var o = JSON.parse(this.response);
           appendTable(o)
        }
    }
    xhtp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
    xhtp.send()
}
function appendTable(data){
    var content = "";
    for (a of data){
        content +=`
        <tr>
            <td>${a.id}</td>
            <td>${a.title}</td>
            <td><img src=${a.thumbnailUrl} /></td>
            <td><button class="btn btn-outline-primary waves-effect">DELETE</button></td>
        </tr>
    `
    }
    $('tbody').html(content)
}
// loadPhotos()