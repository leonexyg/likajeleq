let currentMessageIndex = 0;

function showMessages() {
    const messages = document.querySelectorAll('#message-container p');
    if (currentMessageIndex < messages.length) {
        messages[currentMessageIndex].classList.remove('hidden');
        messages[currentMessageIndex].style.opacity = 1;
        currentMessageIndex++;
        setTimeout(showMessages, 2000); // Tampilkan pesan berikutnya setiap 2 detik
    }
}

// Menambahkan event listener untuk memastikan DOM sudah siap sebelum menjalankan JavaScript
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('reveal-button').addEventListener('click', showMessages);
});
