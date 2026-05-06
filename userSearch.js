//const { use } = require("react");

let users = [
{
    name: "amisha rathore",
    pic: "https://i.pinimg.com/originals/1b/1b/32/1b1b323184baaa9be3462dd678c4f98d.jpg",
    bio: "silent chaos in a loud world | not for everyone",
},
 {
    name: "riya verma",
    pic: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60",
    bio: "coffee lover ☕ | ocean breeze & calm vibes 🌊"
},
{
    name: "kabir singh",
    pic: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60",
    bio: "fitness + adventure | mountain energy ⛰️"
},
{
  name: "ananya gupta",
  pic: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&auto=format&fit=crop&q=60",
  bio: "designing dreams into reality 🎨 | nature inspires me 🌿"
},
{
    name: "rohan mehta",
    pic: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&auto=format&fit=crop&q=60",
    bio: "exploring ideas & forests 🌲 | startup mindset"
},
{
    name: "meera iyer",
    pic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60",
    bio: "minimalist vibes | peace in lakes & silence 🌄"
},
{
    name: "arjun kapoor",
    pic: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop&q=60",
    bio: "code. debug. repeat. | forest walks reset mind 🌳"
},
{
    name: "sneha patel",
    pic: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&auto=format&fit=crop&q=60",
    bio: "travel ✈️ | chasing waterfalls & skies 🌈"
}
];

const container = document.querySelector(".cards");

function showUsers(arr){
    container.innerHTML = "";

    if(arr.length === 0){
        const msg = document.createElement("h2");
        msg.classList = ("msg");
        msg.textContent = "User Not Found";

        container.appendChild(msg);
        return;
    }
    
    arr.forEach(function(user){
    const card = document.createElement("div");
    card.className = "card";
    
// Image
const img = document.createElement("img");
img.src = user.pic;
img.className = "bg-img";

// Blurred layer
const blurredLayer = document.createElement("div");
blurredLayer.style.backgroundImage = `url(${user.pic})`;
blurredLayer.className = "blurred-layer";

// Content container
const content = document.createElement("div");
content.className = "content";

// Heading
const heading = document.createElement("h3");
heading.textContent = user.name;

// Paragraph
const para = document.createElement("p");
para.textContent =  user.bio;

// Append elements
content.appendChild(heading);
content.appendChild(para);

card.appendChild(img);
card.appendChild(blurredLayer);
card.appendChild(content);

// Add card to body
document.querySelector(".cards").appendChild(card);
    })
}
showUsers(users);

let inp = document.querySelector(".inp");

inp.addEventListener("input", function(){

    let searchValue =inp.value.toLowerCase();

    let newUsers = users.filter((user)=> {
        return user.name.toLowerCase().startsWith(searchValue);
    });

    document.querySelector(".cards").innerHTML = "";
    showUsers(newUsers);
});