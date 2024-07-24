document.addEventListener('DOMContentLoaded', function () {
  const videoBlocks = document.querySelectorAll('.video_block');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;
  const intervalTime = 5000; // Switch every 5 seconds

  function showVideos() {
    videoBlocks.forEach((block, index) => {
      if (index >= currentIndex && index < currentIndex + 3) {
        block.classList.add('show');
      } else {
        block.classList.remove('show');
      }
    });
  }

  function nextSlide() {
    currentIndex += 3;
    if (currentIndex >= videoBlocks.length) {
      currentIndex = 0;
    }
    showVideos();
  }

  function prevSlide() {
    currentIndex -= 3;
    if (currentIndex < 0) {
      currentIndex = videoBlocks.length - 3;
    }
    showVideos();
  }

  function autoSwitch() {
    setInterval(() => {
      nextSlide();
    }, intervalTime);
  }

  // Initial setup
  showVideos();
  autoSwitch();

  // Event listeners for buttons
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
});
