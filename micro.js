let boxes=document.querySelectorAll("#sh1");
let restart=document.querySelector("#btn");

let alt=true;

let Winning_options=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];

// boxes.forEach((box) => {
//     sh1.addEventListener("click",() => {
//         console.log("box was clicked");
//         sh1.innerText("abcd");
//     });
// });