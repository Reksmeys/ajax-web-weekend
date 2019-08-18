$(function(){
    $('#category').change(function(){
        fetchArticleByCategoryId($(this).val())
    })
    $(document).on('click', '.view-detail', function(e){
        // console.log($(this).find('.hide').text())
        //transfer id of article to view-detail page
        window.location.href = `article-detail.html?id=${$(this).find('.hide').text()}`
    })
})
function fetchArticleByCategoryId(id){
    $.ajax({
        url: `http://api-ams.me/v1/api/categories/${id}/articles`,
        method:"GET",
        success: function(res){
            console.log(res)
            loadCard(res.DATA, res.MESSAGE)
        },
        error: function(er){
            console.log(er)
        }
    })
}

function loadCard(article, msg){
    var content = ""
    for (a of article){
        content +=`
        <div class="col-md-6 col-sm-6 col-lg-6 view-detail">
                <div class="card">
                    <img class="card-img-top" src=${a.IMAGE} alt="Card image cap">
                    <div class="card-body">
                        <p style="display: none" class="hide">${a.ID}</p>
                        <h4 class="card-title"> <a>${a.TITLE}</a></h4>
                        <p class="card-text">${a.DESCRIPTION}</p>
                        <button  class="btn btn-primary" >Button</button>
                        <a href="article-detail.html" >link</a>
                    </div>
                </div>
        </div>
        `
    }
    $('.row').html(content)
    toastr.success(`${msg}`)
}