$(document).ready(function(){       
    $(window).scroll(function() {
        var st = $(window).scrollTop();
        if(st > 30){
        $('#toolBackTop').css("display","block");
        }else{
        $('#toolBackTop').css("display","none");
        }
    });
    $('#loadMores').click(function(){
        $.ajax({
            type: "GET",
            url: "data.json",
            dataType: "json",
            success: function(data){
                if(data){ 
                    $.each(data,function(entryindex,entry){
                        var $htmlstr=$("<div class='item'><a href='"+entry.address
                        +"' ><div class='block'><p class='image'><img src='"+entry.src01
                        +"' alt='pic'/><img src='"+entry.src02
                        +"' class='baoyou' alt='pic'/><span class='descrip'>"+entry.descrip
                        +"</span><span class='price'><span>"
                        +entry.price
                        +"</span><span class='del'>"
                        +entry.del
                        +"</span><span class='discount'><img src='images/discount.png' alt='pic' />"
                        +entry.discount
                        +"</span></span></p></div></a></div>");
                        $('.wrapper').append($htmlstr);
                    });
                }
                $('#loadMores').html("加载完毕");
            }
        });
   });
});
