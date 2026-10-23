const items = [
    {done: true, name: 'Bread'},
    {done: false, name: 'Milk'},
    {done: false, name: 'Egg'},
    {done: true, name: 'Cheese'},
]
const list_ul = document.querySelector (`#list`)

function add_item(name, done = false) {
    const li = document.createElement('li');
    li.textContent = name;
    if (done === true){
        li.classList.add('done')
    }

    if (list_ul) {
        list_ul.append(li)
    } else {
        //do whatever
    }
}

for (const item of items) {
    add_item(item.name, item.done)
}

const all_items = document.querySelectorAll(`#list li`)
const done_items = document.querySelectorAll(`#list li.done`)

console.log(`${done_items.length} of ${all_items.length} done`)
