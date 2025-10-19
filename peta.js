document.addEventListener('DOMContentLoaded', () => {
    // Data Budaya Lengkap untuk 38 Provinsi di Indonesia + Wilayah Sekitar
    const culturalData = {
        // Sumatera
        'ID-AC': {
            name: 'Nanggroe Aceh Darussalam',
            capital: 'Banda Aceh',
            info: 'Dikenal dengan julukan "Serambi Mekkah" karena budaya Islam yang kental. Tari Saman dari suku Gayo adalah salah satu warisan budayanya yang paling terkenal di dunia.',
            image: 'https://github.com/rifkifali/bhinnek-tunggal-ika.github.io/blob/207b427fd61eba95e6320f876b291d7f31bf3785/Saman.jpg'
        },
        'ID-SU': {
            name: 'Sumatera Utara',
            capital: 'Medan',
            info: 'Rumah bagi beragam etnis, terutama Batak. Danau Toba, danau vulkanik terbesar di dunia, dan rumah adat Bolon adalah ikon utamanya.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Toba_Lake_from_Tongging.jpg/512px-Toba_Lake_from_Tongging.jpg'
        },
        'ID-SB': {
            name: 'Sumatera Barat',
            capital: 'Padang',
            info: 'Terkenal dengan budaya Minangkabau yang menganut sistem matrilineal. Rumah Gadang dengan atap gonjongnya dan masakan Rendang yang mendunia menjadi ciri khasnya.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Rumah_Gadang_in_TMII.jpg/512px-Rumah_Gadang_in_TMII.jpg'
        },
        'ID-RI': {
            name: 'Riau',
            capital: 'Pekanbaru',
            info: 'Kental dengan budaya Melayu. Istana Siak Sri Indrapura menjadi bukti sejarah kebesaran Kesultanan Siak di masa lalu.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Siak_palace_gate.jpg/512px-Siak_palace_gate.jpg'
        },
        'ID-KR': {
            name: 'Kepulauan Riau',
            capital: 'Tanjung Pinang',
            info: 'Pusat kebudayaan Melayu yang kaya akan sastra, dengan Gurindam Dua Belas karya Raja Ali Haji sebagai salah satu mahakaryanya. Pulau Penyengat adalah pusat sejarahnya.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Penyengat_Grand_Mosque.jpg/512px-Penyengat_Grand_Mosque.jpg'
        },
        'ID-JA': {
            name: 'Jambi',
            capital: 'Jambi',
            info: 'Memiliki kompleks percandian Buddha terluas di Asia Tenggara, yaitu Candi Muaro Jambi, yang menunjukkan pengaruh Kerajaan Sriwijaya.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Candi_Tinggi.jpg/512px-Candi_Tinggi.jpg'
        },
        'ID-SS': {
            name: 'Sumatera Selatan',
            capital: 'Palembang',
            info: 'Dikenal sebagai "Bumi Sriwijaya". Jembatan Ampera di atas Sungai Musi dan kain songket yang mewah adalah ikon provinsi ini.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ampera_Bridge_in_Palembang_2.jpg/512px-Ampera_Bridge_in_Palembang_2.jpg'
        },
        'ID-BB': {
            name: 'Kepulauan Bangka Belitung',
            capital: 'Pangkal Pinang',
            info: 'Terkenal dengan pantai-pantai indah dengan formasi batuan granit raksasa. Budaya Melayu pesisir sangat mempengaruhi kehidupan masyarakatnya.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Pantai_Tanjung_Tinggi_02.jpg/512px-Pantai_Tanjung_Tinggi_02.jpg'
        },
        'ID-BE': {
            name: 'Bengkulu',
            capital: 'Bengkulu',
            info: 'Memiliki sejarah kolonial yang kuat dengan peninggalan Benteng Marlborough. Bunga Rafflesia Arnoldii, bunga terbesar di dunia, menjadi flora identitasnya.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Fort_Marlborough%2C_Bengkulu_2015-04-19_01.jpg/512px-Fort_Marlborough%2C_Bengkulu_2015-04-19_01.jpg'
        },
        'ID-LA': {
            name: 'Lampung',
            capital: 'Bandar Lampung',
            info: 'Gerbang utama Pulau Sumatera. Dikenal dengan kain Tapis, kain tenun tradisional yang disulam dengan benang emas, dan budaya gajah di Way Kambas.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Tapis_Lampung_Cloth.jpg/512px-Tapis_Lampung_Cloth.jpg'
        },

        // Jawa
        'ID-JK': {
            name: 'DKI Jakarta',
            capital: 'Jakarta',
            info: 'Sebagai ibu kota, Jakarta adalah "melting pot" berbagai budaya Indonesia. Budaya Betawi menjadi ciri khasnya, dengan Ondel-ondel sebagai ikon.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Ondel-ondel_at_the_2011_Java_Jazz_Festival.jpg/480px-Ondel-ondel_at_the_2011_Java_Jazz_Festival.jpg'
        },
        'ID-BT': {
            name: 'Banten',
            capital: 'Serang',
            info: 'Memiliki sejarah Kesultanan Banten yang kuat. Debus adalah salah satu seni bela diri tradisional yang paling ekstrem dan terkenal dari daerah ini.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Debus_Banten_01.jpg/512px-Debus_Banten_01.jpg'
        },
        'ID-JB': {
            name: 'Jawa Barat',
            capital: 'Bandung',
            info: 'Tanah Pasundan yang kaya akan budaya Sunda. Angklung, alat musik dari bambu yang diakui UNESCO, dan Gedung Sate adalah ikonnya.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Saung_Angklung_Udjo.jpg/512px-Saung_Angklung_Udjo.jpg'
        },
        'ID-JT': {
            name: 'Jawa Tengah',
            capital: 'Semarang',
            info: 'Pusat kebudayaan Jawa dengan peninggalan sejarah agung seperti Candi Borobudur dan Candi Prambanan. Keraton Surakarta dan Yogyakarta (secara budaya) menjadi pusatnya.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Borobudur-Nothwest-view.jpg/512px-Borobudur-Nothwest-view.jpg'
        },
        'ID-YO': {
            name: 'Daerah Istimewa Yogyakarta',
            capital: 'Yogyakarta',
            info: 'Dikenal sebagai pusat seni dan budaya Jawa. Keraton Yogyakarta, wayang kulit, dan batik tulis menjadi jiwa dari provinsi ini.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Keraton_Yogyakarta_Pagelaran.jpg/512px-Keraton_Yogyakarta_Pagelaran.jpg'
        },
        'ID-JI': {
            name: 'Jawa Timur',
            capital: 'Surabaya',
            info: 'Memiliki ragam budaya dari Arek, Madura, hingga Tengger. Tari Reog Ponorogo dan tradisi Karapan Sapi di Madura sangat ikonik.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Reog-Ponorogo-greeting-in-Monumen-SLG-Kediri.jpg/512px-Reog-Ponorogo-greeting-in-Monumen-SLG-Kediri.jpg'
        },

        // Nusa Tenggara & Bali
        'ID-BA': {
            name: 'Bali',
            capital: 'Denpasar',
            info: 'Pulau Dewata yang terkenal dengan budaya Hindu-Bali. Seni tari seperti Tari Kecak, ukiran, dan upacara keagamaan seperti Ngaben menjadi daya tarik utamanya.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/TariLèkong.jpg/480px-TariLèkong.jpg'
        },
        'ID-NB': {
            name: 'Nusa Tenggara Barat',
            capital: 'Mataram',
            info: 'Rumah bagi suku Sasak di Lombok dan suku Mbojo di Sumbawa. Tenun ikat Sasak dan tradisi balap kuda di Sumbawa menjadi ciri khasnya.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sasak_weavers_in_Sade%2C_Lombok.jpg/512px-Sasak_weavers_in_Sade%2C_Lombok.jpg'
        },
        'ID-NT': {
            name: 'Nusa Tenggara Timur',
            capital: 'Kupang',
            info: 'Provinsi kepulauan dengan keanekaragaman etnis dan budaya yang tinggi. Rumah adat Musalaki dan kain tenun ikat dari berbagai daerah (Sumba, Flores) sangat terkenal.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Wae_Rebo_Village_in_Flores%2C_Indonesia.jpg/512px-Wae_Rebo_Village_in_Flores%2C_Indonesia.jpg'
        },

        // Kalimantan
        'ID-KB': {
            name: 'Kalimantan Barat',
            capital: 'Pontianak',
            info: 'Dikenal dengan Tugu Khatulistiwa. Budaya suku Dayak, Melayu, dan Tionghoa berakulturasi di sini, salah satunya dalam perayaan Cap Go Meh di Singkawang.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Tugu_Khatulistiwa_Pontianak.jpg/480px-Tugu_Khatulistiwa_Pontianak.jpg'
        },
        'ID-KT': {
            name: 'Kalimantan Tengah',
            capital: 'Palangkaraya',
            info: 'Pusat kebudayaan suku Dayak Ngaju. Rumah Betang, rumah panjang tradisional, menjadi simbol kehidupan komunal masyarakat Dayak.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rumah_Betang_Radakng.jpg/512px-Rumah_Betang_Radakng.jpg'
        },
        'ID-KS': {
            name: 'Kalimantan Selatan',
            capital: 'Banjarbaru',
            info: 'Dikenal dengan budaya suku Banjar. Pasar terapung di atas sungai seperti Pasar Lok Baintan adalah salah satu tradisi ekonomi dan budaya yang unik.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Floating_Market_in_Banjarmasin.JPG/512px-Floating_Market_in_Banjarmasin.JPG'
        },
        'ID-KI': {
            name: 'Kalimantan Timur',
            capital: 'Samarinda',
            info: 'Kaya akan budaya suku Dayak seperti Kenyah dan Kutai. Kain tenun Ulap Doyo adalah salah satu kerajinan tangan khasnya.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Pampang_cultural_village_14.jpg/512px-Pampang_cultural_village_14.jpg'
        },
        'ID-KU': {
            name: 'Kalimantan Utara',
            capital: 'Tanjung Selor',
            info: 'Provinsi termuda di Kalimantan ini memiliki budaya pesisir yang dipengaruhi oleh suku Tidung dan Bulungan.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Museum_Kesultanan_Bulungan_Tanjung_Palas_Kalimantan_Utara.jpg/512px-Museum_Kesultanan_Bulungan_Tanjung_Palas_Kalimantan_Utara.jpg'
        },

        // Sulawesi
        'ID-SA': {
            name: 'Sulawesi Utara',
            capital: 'Manado',
            info: 'Dikenal dengan budaya Minahasa. Waruga, kubur batu kuno, dan Taman Laut Bunaken yang indah menjadi daya tariknya.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Waruga_Sawangan.jpg/512px-Waruga_Sawangan.jpg'
        },
        'ID-GO': {
            name: 'Gorontalo',
            capital: 'Gorontalo',
            info: 'Berjuluk "Serambi Madinah". Adat dan syariat Islam sangat kental dalam budaya masyarakatnya. Rumah adat Dulohupa menjadi pusat kegiatan adat.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Rumah_Adat_Dulohupa.jpg/512px-Rumah_Adat_Dulohupa.jpg'
        },
        'ID-ST': {
            name: 'Sulawesi Tengah',
            capital: 'Palu',
            info: 'Memiliki situs megalitikum kuno di Lembah Bada. Beragam suku seperti Kaili, Kulawi, dan Mori mendiami provinsi ini.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Patung_Palindo_di_Lembah_Bada.jpg/480px-Patung_Palindo_di_Lembah_Bada.jpg'
        },
        'ID-SR': {
            name: 'Sulawesi Barat',
            capital: 'Mamuju',
            info: 'Didominasi oleh suku Mandar yang dikenal sebagai pelaut ulung. Perahu Sandeq dan tenun ikat Mandar adalah warisan budayanya.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sandeq_race_2011.jpg/512px-Sandeq_race_2011.jpg'
        },
        'ID-SN': {
            name: 'Sulawesi Selatan',
            capital: 'Makassar',
            info: 'Rumah bagi suku Bugis, Makassar, dan Toraja. Rumah adat Tongkonan di Tana Toraja dengan upacara Rambu Solonya sangat mendunia.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Ke%27te_Kesu%27_village.jpg/512px-Ke%27te_Kesu%27_village.jpg'
        },
        'ID-SG': {
            name: 'Sulawesi Tenggara',
            capital: 'Kendari',
            info: 'Didiami oleh suku Tolaki, Buton, dan Muna. Benteng Keraton Buton adalah salah satu benteng terluas di dunia.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Benteng_Keraton_Buton.jpg/512px-Benteng_Keraton_Buton.jpg'
        },

        // Maluku & Papua
        'ID-MA': {
            name: 'Maluku',
            capital: 'Ambon',
            info: 'Dikenal sebagai "Kepulauan Rempah-rempah". Budaya bahari sangat kuat, dengan alat musik Tifa dan tradisi Pela Gandong (persaudaraan antar negeri).',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Tifa_totobuang.jpg/512px-Tifa_totobuang.jpg'
        },
        'ID-MU': {
            name: 'Maluku Utara',
            capital: 'Sofifi',
            info: 'Pusat dari beberapa kesultanan besar di masa lalu seperti Ternate dan Tidore, yang menguasai perdagangan rempah-remah.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Kedaton_Sultan_Ternate.JPG/512px-Kedaton_Sultan_Ternate.JPG'
        },
        'ID-PA': {
            name: 'Papua',
            capital: 'Jayapura',
            info: 'Tanah yang kaya akan keanekaragaman suku dan alam. Suku Dani di Lembah Baliem dengan tradisi Bakar Batu dan koteka menjadi salah satu ikonnya.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Honai_Lembah_Baliem.jpg/512px-Honai_Lembah_Baliem.jpg'
        },
        'ID-PB': {
            name: 'Papua Barat',
            capital: 'Manokwari',
            info: 'Rumah bagi keindahan alam Raja Ampat. Budaya suku Arfak dengan rumah adat Kaki Seribu menjadi ciri khas di wilayah pegunungannya.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Rumah_Adat_Suku_Besar_Arfak.jpg/512px-Rumah_Adat_Suku_Besar_Arfak.jpg'
        },
        'ID-PS': {
            name: 'Papua Selatan',
            capital: 'Salor',
            info: 'Didominasi oleh suku Marind-Anim yang mendiami wilayah pesisir. Dikenal dengan budaya ukiran dan rumah bujang (Gotad).',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Monumen_Kapsul_Waktu_Merauke.jpg/512px-Monumen_Kapsul_Waktu_Merauke.jpg'
        },
        'ID-PT': {
            name: 'Papua Tengah',
            capital: 'Nabire',
            info: 'Wilayah ini merupakan rumah bagi beragam suku seperti Mee, Moni, dan Damal. Noken, tas anyaman tradisional yang diakui UNESCO, banyak digunakan di sini.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Noken-culture-of-papua.jpg/512px-Noken-culture-of-papua.jpg'
        },
        'ID-PE': {
            name: 'Papua Pegunungan',
            capital: 'Wamena',
            info: 'Merupakan jantung kebudayaan suku-suku di pegunungan tengah seperti Dani, Lani, dan Yali. Festival Budaya Lembah Baliem menjadi acara utamanya.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Mumi_Wimontok_Mabel_di_Lembah_Baliem.jpg/480px-Mumi_Wimontok_Mabel_di_Lembah_Baliem.jpg'
        },
        'ID-PD': {
            name: 'Papua Barat Daya',
            capital: 'Sorong',
            info: 'Provinsi ini terkenal dengan kepulauan Raja Ampat yang menjadi surga bawah laut dunia. Budaya maritim suku Maya dan Biak sangat dominan.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Pianemo_Raja_Ampat_2.jpg/512px-Pianemo_Raja_Ampat_2.jpg'
        },
        
        // Malaysia & Brunei
        'MY-12': {
            name: 'Sabah',
            capital: 'Kota Kinabalu',
            info: 'Dikenal sebagai "Negeri di Bawah Bayu". Rumah bagi Gunung Kinabalu yang megah dan keanekaragaman etnis yang kaya seperti Kadazan-Dusun dengan perayaan Pesta Kaamatan.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Mount_Kinabalu_2010.JPG/512px-Mount_Kinabalu_2010.JPG'
        },
        'MY-13': {
            name: 'Sarawak',
            capital: 'Kuching',
            info: 'Dikenal sebagai "Bumi Kenyalang". Terkenal dengan hutan hujannya yang luas, suku Iban, dan rumah panjang tradisional (rumah panjai) di sepanjang sungai.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Annah_Rais_longhouse_-_communal_verandah.JPG/512px-Annah_Rais_longhouse_-_communal_verandah.JPG'
        },
        'BN': {
            name: 'Brunei Darussalam',
            capital: 'Bandar Seri Begawan',
            info: 'Negara berdaulat yang makmur dengan budaya Melayu Islam Beraja. Masjid Sultan Omar Ali Saifuddien yang ikonik dan Kampong Ayer (desa air) menjadi ciri khasnya.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Masjid_Sultan_Omar_Ali_Saifuddin.jpg/512px-Masjid_Sultan_Omar_Ali_Saifuddin.jpg'
        },

        // Timor Leste
        'TL': {
            name: 'Timor-Leste',
            capital: 'Dili',
            info: 'Negara muda dengan budaya yang dipengaruhi oleh tradisi Austronesia dan Portugis. Kain Tais, kain tenun tradisional, adalah simbol identitas nasional yang penting.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Cristo_Rei_of_Dili_2012.jpg/512px-Cristo_Rei_of_Dili_2012.jpg'
        }
    };

    const infoBox = document.getElementById('info-box');
    const provinces = document.querySelectorAll('.province'); // Pastikan class ini sesuai dengan SVG Anda

    provinces.forEach(province => {
        province.addEventListener('click', () => {
            const provinceId = province.id;
            const data = culturalData[provinceId];

            if (data) {
                infoBox.innerHTML = `
                    <h2>${data.name}</h2>
                    <p><strong>Ibu Kota:</strong> ${data.capital}</p>
                    <p>${data.info}</p>
                    <img src="${data.image}" alt="Budaya dari ${data.name}" style="width:100%;height:auto;border-radius:8px;margin-top:10px;">
                `;
            } else {
                infoBox.innerHTML = `<h2>Informasi Belum Tersedia</h2><p>Data untuk wilayah ini sedang kami siapkan.</p>`;
            }
        });

        // Menambahkan tooltip sederhana untuk menampilkan nama wilayah saat hover
        province.addEventListener('mouseover', (event) => {
            const data = culturalData[province.id];
            if (data) {
                province.style.cursor = 'pointer';
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.innerHTML = data.name;
                tooltip.style.position = 'absolute';
                tooltip.style.left = `${event.pageX + 10}px`;
                tooltip.style.top = `${event.pageY + 10}px`;
                tooltip.style.background = 'rgba(0,0,0,0.7)';
                tooltip.style.color = 'white';
                tooltip.style.padding = '5px 10px';
                tooltip.style.borderRadius = '4px';
                tooltip.style.pointerEvents = 'none';
                document.body.appendChild(tooltip);

                province.addEventListener('mouseout', () => {
                    tooltip.remove();
                }, { once: true });
            }
        });
    });

});

