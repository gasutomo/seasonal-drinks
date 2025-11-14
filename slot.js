const slots = [
    document.getElementById('slot1'),
    document.getElementById('slot2'),
    document.getElementById('slot3')
];

// 画像パスに変更
const symbols = [
    'img/cola.png',
    'img/calpis.png',
    'img/calpissoda.png',
    'img/fanta.png',
    'img/kira.png',
    'img/drpeppa.png',
    'img/ginger.png',
    'img/lemon.png',
    'img/orange.png'
];

let slotTimers = [];
let isSpinning = [false, false, false];

function startSlot() {
    document.getElementById('result').textContent = '';

    for (let i = 0; i < slots.length; i++) {
        if (!isSpinning[i]) {
            isSpinning[i] = true;
            slotTimers[i] = setInterval(() => {
                const r = Math.floor(Math.random() * symbols.length);
                slots[i].innerHTML = `<img src="${symbols[r]}" class="slot-img">`;
            }, 100);
        }
    }
}

function stopSlot(reelIndex) {
    if (isSpinning[reelIndex]) {
        clearInterval(slotTimers[reelIndex]);
        isSpinning[reelIndex] = false;

        if (!isSpinning.includes(true)) {
            checkResult();
        }
    }
}

function checkResult() {
    const result = slots.map(slot => slot.querySelector('img').src);

    //if (result[0] === result[1] && result[1] === result[2]) {
        document.getElementById('result').textContent = '出た目を全て混ぜて飲んでね！';
    //} else {
    //    document.getElementById('result').textContent = '残念！';
    //}
}

document.getElementById('startButton').addEventListener('click', startSlot);
document.getElementById('stopButton1').addEventListener('click', () => stopSlot(0));
document.getElementById('stopButton2').addEventListener('click', () => stopSlot(1));
document.getElementById('stopButton3').addEventListener('click', () => stopSlot(2));
