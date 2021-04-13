$(function() {
    $("input[type=button]").click(function() {
        $.ajax({
            type: 'post',
            url: 'http://cx.icodef.com/wyn-nb?v=2',
            contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
            headers: {
                // 'Cache-Control': 'no-cache',
                // 'max-age': '0',
                // 'Authorization': ''
            },
            data: {
                'question': $('.question_input').val()
            },
            // crossdomin: true,
            success: function(data) {
                console.log(data);
                $(".answer_output").html(data.data);
            }
        });
    });
})