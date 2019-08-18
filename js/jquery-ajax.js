//document ready
$(function(){
    //jQuery Ajax
    fetchArticle()
    

})

function fetchArticle(){
    $.ajax({
        url: "http://api-ams.me/v1/api/articles?page=1&limit=15",
        method:"GET",
        success: function(article){
            // console.log(response)
            /*-------------display data to table and show message------*/
            appendToTable(article.DATA, article.MESSAGE)
            // loadCard(article.DATA, article.MESSAGE)
        },
        error: function(er){
            console.log(er)
        }
    })
}
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

function loadCard(article, msg){
    var content = ""
    for (a of article){
        content +=`
        <div class="col-md-6 col-sm-6 col-lg-6">
                <div class="card">
                    <img class="card-img-top" src=${a.IMAGE} alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title"> <a>${a.TITLE}</a></h4>
                        <p class="card-text">${a.DESCRIPTION}</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
        </div>
        `
    }
    $('.row').html(content)
    toastr.success(`${msg}`)

}