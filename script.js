let block1 = document.getElementById('block1');
let block2 = document.getElementById('block2');
let jumpingBlock = document.getElementById('jump-block');

setTimeout(() => {
    document.getElementById('block2').classList.add("runningBlocks");
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


setInterval(() => {
    let leftPosBlock1 = parseInt(window.getComputedStyle(block1).getPropertyValue('right'));
    let leftPosBlock2 = parseInt(window.getComputedStyle(block2).getPropertyValue('right'));
    let jumpingPos = parseInt(window.getComputedStyle(jumpingBlock).getPropertyValue('top'));
    console.log(leftPosBlock1 + " " + leftPosBlock2);

    if((leftPosBlock1 >= 101 && leftPosBlock1 <= 300) && (jumpingPos == 150)){
        alert("over");
    }
    if((leftPosBlock2 >= 101 && leftPosBlock2 <= 300) && (jumpingPos == 150)){
        alert("pver");
    }
}, 50)