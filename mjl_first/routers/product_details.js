$(function(){
    var search=location.search;
    if(search!==""){
        var lid=search.split("=")[1];
        $ajax({
            url:"http://127.0.0.1:3000/details",
            type:"get",
            data:{lid},
            dataType:"json",
            success:function(product){
                var html=""
                for(var pro of product){
                    html+=` <div class="carpic">
                    <img src="${pro.src}" style="width:60%"> 
                    <li></li>
                </div>
               <div class=carb>
                    <p style="font-size:36px;color:#333;">${pro.title}</p>
                    <p style="font-size:16px;color:#666;">${pro.detalis}</p>
                    <span style="margin-top:20px;">规格：</span>
                    <a href="#" class="ml">150ml</a>
                    <div style="margin:15px 0" class="carbtn"> 
                        <span>数量：</span>
                        <button>-</button>
                        <input type="text" value="1">
                        <button>+</button>
                    </div>
                    <span class="pric">价格：</span>
                    <span>￥680元</span>
                    <p class="car-p"> >购买该产品，即刻参加免运费活动</p>
                    <div class="car-a">
                        <a href="">加入心愿单</a>
                        <a href="">加入购物车</a>
                    </div>
                </div>`
                }
            }
        })
    }
})