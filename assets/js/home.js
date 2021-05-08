$('#products').on('click', '.delete-product',function(){ // to delete the product
    var rowId = $(this).parent().parent().attr('id');
    $.ajax({
        type:'DELETE',
        url:'/products/delete/'+rowId,
        contentType:'application/json',
        success:(response)=>{
            $(`#${rowId}`).remove();
            console.log(response);
        },
        error:(error)=>{
            console.log(error);
        }
    });
    return false;
});

$('#products').on('click', '.like-btn',function(){ // to upvote/like a product
    var rowId = $(this).parent().parent().parent().parent().attr('id');

    let likes = $(`#${rowId}>div>div>div>.like`).contents().text();
    let dislikes = $(`#${rowId}>div>div>div>.dis-like`).contents().text();
    likes++;
    $(`#${rowId}>div>div>div>.like`).text(likes);

    $.ajax({
        type:'PUT',
        url:'products/like-dislike/'+rowId,
        // contentType:'application/json',
        data:{
            likes:likes,
            dislikes:dislikes
        },
        success:(response)=>{
            console.log(response);
        },
        error:(error)=>{
            console.log(error);
        }
    });
    return false;
});
$('#products').on('click', '.dislike-btn',function(){ // to down vote a product
    var rowId = $(this).parent().parent().parent().parent().attr('id');

    let likes = $(`#${rowId}>div>div>div>.like`).contents().text();
    let dislikes = $(`#${rowId}>div>div>div>.dis-like`).contents().text();
    dislikes++;
    $(`#${rowId}>div>div>div>.dis-like`).text(dislikes);

    $.ajax({
        type:'PUT',
        url:'products/like-dislike/'+rowId,
        // contentType:'application/json',
        data:{
            likes:likes,
            dislikes:dislikes
        },
        success:(response)=>{
            console.log(response);
        },
        error:(error)=>{
            console.log(error);
        }
    });
    return false;
});