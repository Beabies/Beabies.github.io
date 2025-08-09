document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const question = document.getElementById('question');
    const message = document.getElementById('message');
    const catSticker = document.getElementById('cat-sticker');
    const balloonContainer = document.getElementById('balloon-container'); // เพิ่มตัวแปรสำหรับ balloon-container
    
    let yesFontSize = 16;
    let noFontSize = 16;
    let noClickCount = 0;
    const maxNoClicks = 3;
    
    const messages = [
        'แน่ใจหรออ',
        'คิดดูดีๆ นะ',
        'จะไม่เปลี่ยนใจจริงๆ หรอค้าบ'
    ];
    
    // ฟังก์ชันสำหรับสร้างลูกโป่ง
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        const colors = ['#ff6347', '#ffb6c1', '#add8e6', '#90ee90', '#ffd700'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.backgroundColor = randomColor;
        balloon.style.left = `${Math.random() * window.innerWidth}px`;
        balloon.style.animationDuration = `${Math.random() * 5 + 5}s`;
        balloonContainer.appendChild(balloon);
        
        setTimeout(() => {
            balloon.remove();
        }, 10000);
    }

    yesBtn.addEventListener('click', () => {
        question.textContent = 'Now u r my babe na';
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        message.textContent = 'lets me kiss kub';
        catSticker.style.display = 'block';

        // เมื่อกด yes ให้สร้างลูกโป่ง
        setInterval(createBalloon, 500);
    });

    noBtn.addEventListener('click', () => {
        noClickCount++;

        if (noClickCount <= maxNoClicks) {
            yesFontSize += 5;
            noFontSize -= 3;
            
            yesBtn.style.fontSize = `${yesFontSize}px`;
            noBtn.style.fontSize = `${noFontSize}px`;
            
            const randomIndex = Math.floor(Math.random() * messages.length);
            message.textContent = messages[randomIndex];
            
        } else {
            question.textContent = 'อืออ🥺';
            noBtn.style.display = 'none';
            yesBtn.style.display = 'none';
            message.textContent = '';
        }
    });
});
