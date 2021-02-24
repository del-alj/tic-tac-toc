function main() {
    const parent = document.getElementById("begining")
    let cadre = creat_div("big", "bigBox", parent);
    let head = creat_p("titel", "class_titel", cadre, "Tic Tac Toc");
    let elem1 = creat_div("el1", "player", cadre);
    let btn1 = creat_button("bt1", "but", elem1, "X");
    let btn2 = creat_button("bt2", "but", elem1, "O");
    let border = creat_div("border", "border_class", cadre);
    for (let i = 1; i <= 9; i++) {
        creat_div("item" + i, "item_class", border);
    }

}

main();