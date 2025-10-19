document.addEventListener('DOMContentLoaded', function () {
    // Memilih semua elemen yang diperlukan
    const filterButtons = document.querySelectorAll('.filter-btn');
    const materiCards = document.querySelectorAll('.materi-card');

    // Pastikan elemen filter ada di halaman ini
    if (filterButtons.length > 0 && materiCards.length > 0) {
        
        // Tambahkan event listener untuk setiap tombol filter
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                
                // 1. Atur Tampilan Tombol Aktif
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // 2. Lakukan Filtering pada Kartu Materi
                const filterValue = button.getAttribute('data-filter');

                materiCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                    // Tampilkan kartu jika filter adalah 'semua' atau kategorinya cocok
                    if (filterValue === 'semua' || cardCategory === filterValue) {
                        card.classList.remove('hide');
                    } else {
                        // Sembunyikan jika tidak cocok
                        card.classList.add('hide');
                    }
                });
            });
        });
    }
});
