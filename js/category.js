$(function(){
    $('#category').change(function(){
        fetchArticleByCategoryId($(this).val())
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