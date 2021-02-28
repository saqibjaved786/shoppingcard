var btn = document.querySelectorAll(".but1")
var main = document.querySelector(".main")
var clear = document.querySelector(".clear")

console.log(main);
btn.forEach((e) => {
    e.addEventListener("click", (btn) => {
        var value = btn.target.parentElement

        Btndata(value)

    })



})
function Btndata(value) {
    var img = value.querySelector("img").src
    var head = value.querySelector('.h5').innerText
    var pri = value.querySelector('del').innerText
    var obj = { img, head, pri }

    storedata(obj)
}

function storedata(obj) {
    var arr = JSON.parse(localStorage.getItem('data'))

    if (arr) {
        arr.push(obj)
        localStorage.setItem("data", JSON.stringify(arr))
        renderdata()
        console.log(arr, "if")
    }
    else {
        localStorage.setItem("data", JSON.stringify([obj]))
        renderdata()
        console.log(arr, "else")

    }
}
renderdata()


// console.log(arr);



function renderdata(y, i) {
    var x = JSON.parse(localStorage.getItem("data"))
    var list = "";
    x.forEach((e, i) => {
        list += `<div class="ulstyle"><img src="${e.img}" class="image">
       <p class="para">${e.head}</p>
       <p class="para">${e.pri}</p>
       <Button class="del" onclick="del(${i})" >delete</Button>
       </div>`
        list.setAttribute = ("data-add", i)
    })
    main.innerHTML = list
}
clear.onclick = () => {
    localStorage.clear()
    main.innerHTML = ""

}
function del(i) {
    var arr = JSON.parse(localStorage.getItem("data"))

    arr.splice(i, 1)
    localStorage.setItem("data", JSON.stringify(arr))


    renderdata()

}
