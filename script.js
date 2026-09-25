let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// MENAMBAHKAN CLASS ACTIVE PADA LINK YANG AKTIF
// Jika halaman di scroll
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; // Untuk mendapatkan posisi scroll
        let offset = sec.offsetTop - 150; // Untuk mendapatkan posisi elemen
        let height = sec.offsetHeight; // Untuk mendapatkan tinggi elemen
        let id = sec.getAttribute('id'); // Untuk mendapatkan id elemen
        
        // Jika posisi scroll lebih besar dari posisi elemen dan posisi scroll 
        // lebih kecil dari posisi elemen + tinggi elemen
        if (top >= offset && top < offset + height) { 
            navLinks.forEach(links => {
                // Untuk menghapus class active pada link
                links.classList.remove('active');
                // Untuk menambahkan class active pada link yang aktif
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Jika navbar di klik
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Untuk mengubah ikon menu
    navbar.classList.toggle('active'); // Untuk mengaktifkan navbar
};