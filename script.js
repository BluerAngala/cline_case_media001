// 确保DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
  // 音频控制
  const audio = document.getElementById('bg-music');
  const soundToggle = document.getElementById('sound-toggle');

  // 初始化静音状态
  audio.muted = true;
  document.getElementById('sound-off').style.display = 'block';

  // 切换声音状态
  soundToggle.addEventListener('click', () => {
    audio.muted = !audio.muted;
    document.getElementById('sound-off').style.display = audio.muted ? 'block' : 'none';
    if (!audio.muted) {
      audio.play();
    }
  });

  // 图片轮播配置
const images = document.querySelectorAll('.image-container img');
const captions = [
  "这是第一张图片的说明文字",
  "这是第二张图片的说明文字", 
  "这是第三张图片的说明文字"
];
let currentIndex = 0;

// 图片轮播函数
function showNextImage() {
  // 隐藏当前图片
  images[currentIndex].classList.remove('active');
  
  // 更新索引
  currentIndex = (currentIndex + 1) % images.length;
  
  // 显示下一张图片
  images[currentIndex].classList.add('active');
  
  // 更新字幕
  typeCaption(captions[currentIndex]);
}

// 打字机效果函数
function typeCaption(text) {
  const captionElement = document.querySelector('.caption');
  captionElement.textContent = '';
  let charIndex = 0;
  
  const typingInterval = setInterval(() => {
    if (charIndex < text.length) {
      captionElement.textContent += text[charIndex];
      charIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, 100); // 每个字符的显示间隔
}

  // 初始化
  typeCaption(captions[0]);
  setInterval(showNextImage, 5000); // 每5秒切换一次图片
});
