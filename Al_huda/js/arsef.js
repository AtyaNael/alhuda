/* التحقق من مدة ظهور الصورة */
const timeToShow = 5000; // بالميلي ثانية

let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-item img');
const totalImages = images.length;

function showNextImage() {
    // اخفاء الصورة الحالية
    images[currentImageIndex].classList.remove('active');

    // التحقق من الفهرس للحصول على الصورة التالية
    if (currentImageIndex === totalImages - 1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }

    // عرض الصورة التالية
    images[currentImageIndex].classList.add('active');
}

// تشغيل دالة showNextImage() بعد فترة زمنية محددة
setInterval(showNextImage, timeToShow);