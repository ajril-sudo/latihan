document.addEventListener('DOMContentLoaded', function() {
    const marqueeContent = document.getElementById("marqueeContent");
    const originalContent = marqueeContent.innerHTML;
    
    // Duplicate content 2-3 kali agar tidak putus
    marqueeContent.innerHTML = originalContent + originalContent + originalContent;
    
    // Atur kecepatan berdasarkan panjang konten
    const items = marqueeContent.querySelectorAll('h3');
    const duration = items.length * 2; // 2 detik per item
    
    marqueeContent.style.animationDuration = `${duration}s`;
});