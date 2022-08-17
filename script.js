let block1 = document.getElementById('block1');
let block2 = document.getElementById('block2');
let jumpingBlock = document.getElementById('jump-block');
let score = 0;

setTimeout(() => {
    document.getElementById('block2').classList.add("runningBlocks");
    setInterval(() => {
        block2.style.backgroundColor = "#"+Math.floor(Math.random() * 0x1000000).toString(16);
    }, 3000);
}, 1500);

document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
        jumpBlock(); 
    }
})

jumpBlock = () => {
    document.getElementById('jump-block').classList.add("jump-block-animation");
    setTimeout(() => {
        document.getElementById('jump-block').classList.remove("jump-block-animation");
    }, 900);
}

setTimeout(() => {
    setInterval(() => {
        score++;
        document.getElementById('score').innerHTML = "Score : " + score;
    }, 1500);
}, 1500);

setInterval(() => {
    block1.style.backgroundColor = "#"+Math.floor(Math.random() * 0x1000000).toString(16);
}, 3000);

// setTimeout(() => {

//     setInterval(() => {
//         let leftPosBlock1 = parseInt(window.getComputedStyle(block1).getPropertyValue('right'));
//         let leftPosBlock2 = parseInt(window.getComputedStyle(block2).getPropertyValue('right'));
//         let jumpingPos = parseInt(window.getComputedStyle(jumpingBlock).getPropertyValue('top'));
        
//         if((leftPosBlock1 >= -580 && leftPosBlock1 <= -250) && (jumpingPos == 150)){
//             alert("Game Over \n Your score is  : " +score);
//             score = 0;
//         }
//         if((leftPosBlock2 >= -630 && leftPosBlock2 <= -230) && (jumpingPos == 150)){
//             alert("Game Over \n Your score is : " +score);
//             score = 0;
//         }
//     }, 50)
// }, 2000)