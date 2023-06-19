const menuitem = [
    {
        id:1,
        item:"Food Item ",
        oneliner:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, laborum!",
        img:"images/img1.jfif",
        hotel:"Hotel name1",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est minus explicabo officia quibusdam placeat recusandae cumque, dicta necessitatibus qui?"
    },
    {
        id:2,
        item:"Food Item 2",
        oneliner:"2: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, laborum!",
        img:"images/img2.jfif",
        hotel:"Hotel name2",
        description:"2:Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est minus explicabo officia quibusdam placeat recusandae cumque, dicta necessitatibus qui?"
    },
    {
        id:3,
        item:"Food Item 3",
        oneliner:"3: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, laborum!",
        img:"images/img3.jfif",
        hotel:"Hotel name3",
        description:"3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est minus explicabo officia quibusdam placeat recusandae cumque, dicta necessitatibus qui?"
    },
    {
        id:4,
        item:"Food Item 4",
        oneliner:"4: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, laborum!",
        img:"images/img4.jfif",
        hotel:"Hotel name4",
        description:"4:Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est minus explicabo officia quibusdam placeat recusandae cumque, dicta necessitatibus qui?"
    },
    {
        id:5,
        item:"Food Item 5",
        oneliner:"5: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, laborum!",
        img:"images/img5.jfif",
        hotel:"Hotel name5",
        description:"5: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est minus explicabo officia quibusdam placeat recusandae cumque, dicta necessitatibus qui?"
    },
]

var item = document.getElementById("item");
var oneliner = document.getElementById("oneliner");
var img = document.getElementById("img");
var hotelName = document.getElementById("hotel-name");
var description = document.getElementById("description");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var random = document.getElementById("random");

var itemlist = 0;
window.addEventListener('DOMContentLoaded', ()=>{

    allmenu(itemlist)
})

const allmenu =()=>{
    let menu = menuitem[itemlist];
    item.textContent = menu.item;
    oneliner.textContent = menu.oneliner;
    img.textContent = menu.img;
    hotelName.textContent = menu.hotelName;
    description.textContent = menu.description;
    prev.textContent = menu.prev;
    next.textContent = menu.next;
    random.textContent = menu.random;
}

random.addEventListener('click', ()=>{
    itemlist = Math.floor(Math.random()*menuitem.length);
    allmenu(itemlist);
})

prev.addEventListener('click',()=>{
    itemlist--;
    if(itemlist<0){
        itemlist=menuitem.length-1;
    }
    allmenu(itemlist);
})

next.addEventListener('click',()=>{
    itemlist++;
    if(itemlist>menuitem.length-1){
        itemlist=0;
    }
    allmenu(itemlist);
})