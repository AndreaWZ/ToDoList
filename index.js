function deleteList() {
    const allList = $("ul");
    allList.remove();
};

$("li").click(function() {

    $(this).toggleClass("completed");
});

$("#cleanUp").click(function(){
    let textList = $("li");

    for(let i = 0; i < textList.length; i++) {
        if(textList[i].className === "completed"){
            textList[i].remove();
        };
    };
})

