$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/product",
        type:"get",
        dataType:"json",
        success:function(data){
              var html='';
            for(var i=0;i<data.length;i++)
            {
                var p=data[i];
            html+=`<li class="me-li">
            <div class="pimg">
            <img src="${p.src}"></div>
            <p class="title"><a href="">${p.title}</a></p>
            <p class="detail">${p.detail}</p>
            <p class="price">￥${p.price}元</p>
            <a href="${p.href}" class="dis-img">
            <img src="img/more1.png"></a></li>`;
            }  
        var div=document.querySelector( "#smain");
          $(div).append($(html));
          $(function(){
             $(".me-li").on("mouseover",function(){
                 $me=$(this); 
                 $me.children(":last-child")
                 .css("display","block")
             })
             $(".me-li").on("mouseout",function(){
                 $me=$(this);
                 $me.children(":last-child")
                 .css("display","none")
             })
          })
        },
    })
})