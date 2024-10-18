let scrolling = false;
let scrollSpeed = 2;
let scrollInterval;

function autoScroll() {
  scrollInterval = setInterval(() => {
    window.scrollBy(0, scrollSpeed);
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      clearInterval(scrollInterval);
    }
  }, 16); // เลื่อนประมาณ 60 เฟรมต่อวินาที
}

function stopScroll() {
  clearInterval(scrollInterval);
}

function toggleScroll() {
  if (scrolling) {
    stopScroll();
  } else {
    autoScroll();
  }
  scrolling = !scrolling;
}

function increaseSpeed() {
  scrollSpeed += 1;
  console.log(`Scroll speed increased to: ${scrollSpeed}`);
  if (scrolling) {
    // รีเซ็ตการเลื่อนเพื่อใช้ความเร็วใหม่
    stopScroll();
    autoScroll();
  }
}

function decreaseSpeed() {
  if (scrollSpeed > 1) {
    scrollSpeed -= 1;
    console.log(`Scroll speed decreased to: ${scrollSpeed}`);
    if (scrolling) {
      // รีเซ็ตการเลื่อนเพื่อใช้ความเร็วใหม่
      stopScroll();
      autoScroll();
    }
  }
}

// ฟังชันที่จะรับเหตุการณ์จาก background
window.addEventListener("toggleScroll", toggleScroll);
window.addEventListener("increaseSpeed", increaseSpeed);
window.addEventListener("decreaseSpeed", decreaseSpeed);
