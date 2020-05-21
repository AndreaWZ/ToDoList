const items = [
    {item:'homework', priority:1}, 
    {item:"laundry", priority:2},
    {item:'homework', priority:1}, 
    {item:"laundry", priority:2},
    {item:'homework', priority:1}, 
    {item:"laundry", priority:2}
];

const content = $("#contents")[0];

for(let i = 0; i < items.length; i++) {
    const itemDom = document.createElement("div");
    const textDom = document.createElement("p");
    const priorityDom = document.createElement("span");

    textDom.textContent = items[i].item;
    priorityDom.textContent = items[i].priority;

    content.appendChild(itemDom);
    itemDom.appendChild(textDom);
    itemDom.appendChild(priorityDom);

    itemDom.classList.add("itemlist");
}

const textList = $("p");
const priorityList = $("span");

for(let i = 0; i < textList.length; i++) {
    textList[i].style.textDecoration = "none";

    if(i === textList.length -1) {
        textList[i].style.borderBottom = "2px black solid";
        priorityList[i].style.borderBottom = "2px black solid";
    };

    textList[i].addEventListener("click", function() {
        if(textList[i].style.textDecoration === "line-through") {
            textList[i].style.textDecoration = "none";
        } else {
            textList[i].style.textDecoration = "line-through";

        }
    });
};

function deleteList() {
    items.splice(0, items.length);
    content.remove();

    const contentsDiv = document.createElement("div");
    contentsDiv.setAttribute("id", "contents");

    const wrapper = $("#wrapper")[0];
    wrapper.appendChild(contentsDiv);
}

// $(".submit").click(function(){
//     const itemName = $(".text").text();
//     const itemPriority = $(".select");
// });

