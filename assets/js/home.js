$('#products').on('click', '.delete-product',function(){
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