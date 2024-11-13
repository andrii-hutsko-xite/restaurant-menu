const dishes = document.querySelector(".dishes");

const filter_btns = document.querySelectorAll(".filter_btn");

let last_clicked_button = filter_btns[0];

filter_btns.forEach((element) => {
    element.addEventListener("click", (e) => {        
        if (e.currentTarget.dataset.type == "all") {
            dishes.replaceChildren();
            DisplayDishes(menu_list);
        } else {
            const menu_list_filtered = menu_list.filter(element => element.type == e.currentTarget.dataset.type);
            dishes.replaceChildren();
            DisplayDishes(menu_list_filtered)
        }
        last_clicked_button.classList.toggle("btn_on");
        e.currentTarget.classList.toggle("btn_on");
        last_clicked_button = e.currentTarget;
    });
});


function CreateDish(array, id) {
    let new_dish = document.createElement("div");
    new_dish.classList.add("dish");
    new_dish.innerHTML = `
        <img src=${array[id].image_url} alt='dish image' class='dish_image'>
        <div class="dish_text">
            <div class="dish_top">
                <p class="dish_title">${array[id].name}</p>
                <p class="dish_price">€${array[id].price}</p>
            </div>
            <p class="dish_desc">${array[id].description}</p>
        </div>
    `
    dishes.appendChild(new_dish);
}

function DisplayDishes(array) {
    array.forEach((_, index) => {
        CreateDish(array, index);
    });
}

window.addEventListener("DOMContentLoaded", function() {
    DisplayDishes(menu_list);
});