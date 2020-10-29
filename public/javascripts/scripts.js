$(".delete").click(function() {

    var id = $(this).attr("data-id");
    var name = $(this).attr("data-name");
    if (confirm("are you sure you want  to delete: "+ name)) {
        deleteToto(id);
    }
})

function deleteToto(id) {
    $.ajax({
        type: 'get',
        url: '/delete/' + id,
        success: function(response) {
            console.log(response);
        },
        error:function(err) {
            console.log(err)
        },
    });
}