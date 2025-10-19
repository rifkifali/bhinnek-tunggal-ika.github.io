document.addEventListener('DOMContentLoaded', function () {
    // Memilih semua tombol filter dan semua kartu materi
    const filterButtons = document.querySelectorAll('.filter-btn');
    const materiCards = document.querySelectorAll('.materi-card');

    // Cek apakah tombol filter ada di halaman saat ini untuk menghindari error
    if (filterButtons.length > 0) {
        
        // Menambahkan event listener 'click' ke setiap tombol
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                
                // 1. Mengatur Tampilan Tombol
                // Hapus kelas 'active' dari semua tombol filter
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Tambahkan kelas 'active' hanya ke tombol yang baru saja diklik
                button.classList.add('active');

                // 2. Logika untuk Memfilter Kartu
                // Ambil nilai kategori dari atribut 'data-filter' tombol yang diklik
                const filter = button.getAttribute('data-filter');

                // Iterasi melalui setiap kartu materi untuk menampilkan atau menyembunyikannya
                materiCards.forEach(card => {
                    
                    // Logika khusus untuk kartu pendahuluan ('umum')
                    if (card.getAttribute('data-category') === 'umum') {
                        // Jika filter adalah 'semua', tampilkan kartu pendahuluan
                        if (filter === 'semua') {
                            card.classList.remove('hide');
                        } else {
                            // Jika filter lain yang dipilih, sembunyikan kartu pendahuluan
                            card.classList.add('hide');
                        }
                    } else {
                        // Logika untuk kartu kategori lainnya (suku, agama, ras, dll.)
                        // Jika filter adalah 'semua' ATAU kategori kartu cocok dengan filter,
                        // tampilkan kartunya.
                        if (filter === 'semua' || card.getAttribute('data-category') === filter) {
                            card.classList.remove('hide');
                        } else {
                            // Jika tidak cocok, sembunyikan kartunya.
                            card.classList.add('hide');
                        }
                    }
                });
            });
        });
    }
});