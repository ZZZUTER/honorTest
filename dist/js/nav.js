define(["jquery"], function($){
    function leftNav(){
        $.ajax({
            url: "../data/nav.json",
            success: function(arr){
                for(var i = 0; i < arr.length; i++){
                    var node = $(`
                    <div>
                        <h5>${arr[i].title}</h5>
                        <ul class="small-title-li">
                            <li>${arr[i].li1}</li>
                            <li>${arr[i].li2}</li>
                            <li>${arr[i].li3}</li>
                        </ul>
                    </div>
                    <img src="${arr[i].img}" alt="">
                    
                `);
                    node.appendTo(".nav-box .title-li");

                    var childArr = arr[i].childs;
                    for(var j = 0; j < arr.length; j++){
                        var node = $(`<a href="" target="_blank">
                        <figure>
                            <img src="${childArr[j].img}" alt="">
                            <span>${childArr[j].figcaption}</span>
                        </figure>
                    </a>
                    <a href="" target="_blank">
                        <figure>
                            <img src="${childArr[j].img}" alt="">
                            <span>${childArr[j].figcaption}</span>
                        </figure>
                    </a>
                    <a href="" target="_blank">
                        <figure>
                            <img src="${childArr[j].img}" alt="">
                            <span>${childArr[j].figcaption}</span>
                        </figure>
                    </a>
                    <a href="" target="_blank">
                        <figure>
                            <img src="${childArr[j].img}" alt="">
                            <span>${childArr[j].figcaption}</span>
                        </figure>
                    </a>
                    <a href="" target="_blank">
                        <figure>
                            <img src="${childArr[j].img}" alt="">
                            <span>${childArr[j].p}</span>
                        </figure>
                    </a>`)
                    };
                    node.appendTo(".title-li .nav-more");
                }
            },
            error: function(msg){
                console.log(msg);
            }
            
        })
    }
    return {
        leftNav: leftNav
    }
})