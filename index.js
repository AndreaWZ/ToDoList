function deleteList() {
    const allList = $("li");
    allList.remove();
};

$("#cleanUp").click(function(){
    let textList = $("li");

    for(let i = 0; i < textList.length; i++) {
        if(textList[i].className === "completed"){
            textList[i].remove();
        };
    };
})

$(".submit").on("click", function(){
    const itemText = $("input[type='text']").val()
    const itemPriority = $("select").val();

    if(itemText === ""){
        alert("Please enter item");
    } else {
        $("ul").append("<li><span><i class='fas fa-exclamation-circle'></i> " + itemPriority + "</span>" + itemText + "</li>");
    };
});

$("ul").on('click', "li", function() {
    $(this).toggleClass("completed");
});




