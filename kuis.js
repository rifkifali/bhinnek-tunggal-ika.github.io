document.addEventListener('DOMContentLoaded', () => {
    // --- Data Pertanyaan Kuis ---
    // Di sini Anda bisa menambah, mengubah, atau menghapus pertanyaan kuis
    const quizData = [
        {
            image: 'Angklung.jpg',
            options: ['Sasando', 'Angklung', 'Gamelan', 'Tifa'],
            answer: 'Angklung',
            info: 'Angklung adalah alat musik dari Jawa Barat yang terbuat dari bambu.'
        },
        {
            image: 'rendang.jpg',
            options: ['Gudeg', 'Sate', 'Rendang', 'Papeda'],
            answer: 'Rendang',
            info: 'Rendang adalah masakan daging dari Minangkabau, Sumatera Barat.'
        },
        {
            image: 'Sasando.png',
            options: ['Kecapi', 'Kolintang', 'Gong', 'Sasando'],
            answer: 'Sasando',
            info: 'Sasando adalah alat musik dawai yang berasal dari Pulau Rote, NTT.'
        },
        {
            image: 'Saman.jpg',
            options: ['Tari Piring', 'Tari Kecak', 'Tari Saman', 'Tari Jaipong'],
            answer: 'Tari Saman',
            info: 'Tari Saman adalah tarian Suku Gayo dari Aceh.'
        },
        {
            image: 'baju_bodo.jpg',
            options: ['Ulos', 'Kebaya', 'Beskap', 'Baju Bodo'],
            answer: 'Baju Bodo',
            info: 'Baju Bodo adalah pakaian adat Suku Bugis dan Makassar dari Sulawesi Selatan.'
        }
    ];

    // --- Elemen-elemen dari HTML ---
    const quizContainer = document.getElementById('quiz-container');
    const quizImage = document.getElementById('quiz-image');
    const optionsContainer = document.getElementById('options-container');
    const feedbackContainer = document.getElementById('feedback-container');
    const scoreContainer = document.getElementById('score-container');
    const finalScore = document.getElementById('final-score');
    const restartBtn = document.getElementById('restart-btn');

    let currentQuestionIndex = 0;
    let score = 0;

    // --- Fungsi Utama ---
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        scoreContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        showQuestion();
    }

    function showQuestion() {
        // Reset tampilan
        optionsContainer.innerHTML = '';
        feedbackContainer.textContent = '';

        if (currentQuestionIndex < quizData.length) {
            const question = quizData[currentQuestionIndex];
            quizImage.src = question.image;

            // Buat tombol pilihan jawaban
            question.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('option-btn');
                button.addEventListener('click', () => checkAnswer(option, button));
                optionsContainer.appendChild(button);
            });
        } else {
            showScore();
        }
    }

    function checkAnswer(selectedOption, button) {
        const question = quizData[currentQuestionIndex];
        const buttons = document.querySelectorAll('.option-btn');

        // Nonaktifkan semua tombol setelah menjawab
        buttons.forEach(btn => btn.disabled = true);
        
        if (selectedOption === question.answer) {
            score++;
            button.classList.add('correct');
            feedbackContainer.textContent = "Benar! " + question.info;
            feedbackContainer.style.color = '#2E8B57';
        } else {
            button.classList.add('wrong');
            feedbackContainer.textContent = `Salah. Jawaban yang benar adalah ${question.answer}.`;
            feedbackContainer.style.color = '#B22222';
            // Tandai jawaban yang benar
            buttons.forEach(btn => {
                if(btn.textContent === question.answer) {
                    btn.classList.add('correct');
                }
            });
        }

        // Lanjut ke pertanyaan berikutnya setelah 3.5 detik
        setTimeout(() => {
            currentQuestionIndex++;
            showQuestion();
        }, 3500);
    }

    function showScore() {
        quizContainer.classList.add('hidden');
        scoreContainer.classList.remove('hidden');
        finalScore.textContent = `${score} dari ${quizData.length}`;
    }
    
    restartBtn.addEventListener('click', startQuiz);

    // Memulai kuis saat halaman dimuat
    startQuiz();

});


