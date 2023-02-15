let menu = ["rau xào", "thịt luộc", "gà rán"]
localStorage.setItem("menu", JSON.stringify(menu))

let searchbar = document.getElementById("search-bar")

function search() {
    switch (searchbar.value) {
        case "C":
            let C = prompt("Mời nhập món ăn để thêm vào menu:")
            if (C != null) {
                let current_menu = JSON.parse(localStorage.getItem("menu"))
                current_menu.push(C)
                localStorage.setItem("menu", JSON.stringify(current_menu))
            }
            else {
                alert("Bạn chưa nhập thông tin!")
            }
            break;
        case "R":
            let R = menu.toString()
            alert(R)
            break;
        case "U":
            let U = prompt("Mời nhập vào tên món ăn để update:")
            if (U != null) {
                let current_menu = JSON.parse(localStorage.getItem("menu"))
                current_menu.splice(current_menu.indexOf(U), 1)
                let U1 = prompt("Mời nhập tên món ăn mới:")
                if (U1 != null) {
                    current_menu.push(U1)
                    localStorage.setItem("menu", JSON.stringify(current_menu))
                }
                else {
                    alert("Chưa có thông tin!")
                }
            }
            else {
                alert("Chưa có thông tin!")
            }
            break;
        case "D":
            let D = prompt("Mời nhập tên món ăn muốn xóa:")
            if (D != null) {
                let current_menu = JSON.parse(localStorage.getItem("menu"))
                current_menu.splice(current_menu.indexOf(D), 1)
                localStorage.setItem("menu", JSON.stringify(current_menu))
            }
            else {
                alert("Chưa có thông tin!")
            }
            break;
        default:
            alert("Mời nhập lại kí tự!");
    }
}