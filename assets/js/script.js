// ==========================
// DATA WILAYAH
// ==========================
const islandsData = {
"jawa-timur": {
  name: "Jawa Timur",
  subtitle: "Pusat peradaban budaya Jawa Timur yang kaya akan tradisi, seni, kuliner, dan kesenian unik",
  heroImage: "assets/img/budaya/jawa-timur/hero.jpg",
  items: {
    rumah: {
      title: "Joglo & Rumah Tradisional Jawa Timur",
      description: "Jawa Timur memiliki berbagai tipe rumah tradisional, termasuk Joglo, Limasan, dan Pendopo. " +
                   "Joglo terkenal dengan atap tinggi berbentuk limas yang melambangkan filosofi keseimbangan hidup dan hubungan manusia dengan alam. " +
                   "Limasan adalah rumah panggung sederhana yang biasa ditemui di pedesaan, sedangkan Pendopo adalah ruang terbuka di depan rumah untuk kegiatan sosial dan acara adat. " +
                   "Biasanya terbuat dari kayu jati atau ulin, dengan ukiran khas pada tiang dan dinding yang menunjukkan identitas lokal masyarakat Jawa Timur.",
      image: "assets/img/budaya/jawa-timur/rumah.jpg"
    },
    pakaian: {
      title: "Kebaya, Beskap & Pakaian Adat Jawa Timur",
      description: "Pakaian tradisional pria dan wanita Jawa Timur sangat beragam. " +
                   "Pria biasanya memakai Beskap dan Blangkon dengan kain batik atau lurik, sedangkan wanita memakai Kebaya lengkap dengan kain batik atau songket yang berwarna cerah dan dihias manik-manik. " +
                   "Pakaian ini digunakan dalam pernikahan, upacara adat, dan pertunjukan kesenian, menampilkan kesopanan, keanggunan, dan identitas budaya Jawa Timur.",
      image: "assets/img/budaya/jawa-timur/pakaian.jpg"
    },
    tari: {
      title: "Tari Serimpi & Tari Rakyat Jawa Timur",
      description: "Jawa Timur memiliki banyak tarian tradisional. Contohnya:\n" +
                   "- Tari Serimpi: tarian klasik keraton dengan gerakan halus dan penuh makna spiritual.\n" +
                   "- Tari Remo: tarian penyambut tamu yang dinamis dan energik, populer di Surabaya.\n" +
                   "- Tari Gandrung: tarian rakyat Banyuwangi yang menampilkan musik gamelan dan kendang.\n" +
                   "Tarian ini sering ditampilkan dalam upacara adat, festival budaya, dan pertunjukan seni untuk mencerminkan nilai dan filosofi masyarakat Jawa Timur.",
      image: "assets/img/budaya/jawa-timur/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Jawa Timur",
      description: "Jawa Timur terkenal dengan kuliner unik seperti:\n" +
                   "- Gudeg: olahan nangka muda bercita rasa manis dan gurih, biasanya disajikan dengan nasi, ayam, telur, dan sambal.\n" +
                   "- Rawon: sup daging sapi berwarna hitam dari kluwek, pedas dan gurih.\n" +
                   "- Rujak Cingur: salad sayur, buah, dan potongan hidung sapi dengan saus petis khas Surabaya.\n" +
                   "- Soto Lamongan: soto ayam dengan bumbu kuning dan koya.\n" +
                   "- Pecel Madiun: sayur rebus dengan sambal kacang pedas manis.\n" +
                   "Makanan ini mencerminkan keragaman rasa, rempah, dan tradisi kuliner masyarakat Jawa Timur.",
      image: "assets/img/budaya/jawa-timur/makanan.jpg"
    },
    musik: {
      title: "Gamelan & Musik Tradisional Jawa Timur",
      description: "Musik tradisional Jawa Timur sangat beragam:\n" +
                   "- Gamelan: terdiri dari gong, kendang, saron, bonang, mengiringi tarian, wayang, dan upacara adat.\n" +
                   "- Angklung: alat musik dari bambu, sering dimainkan di beberapa daerah.\n" +
                   "- Siter dan Kendang: melodi dan ritme dalam pertunjukan rakyat.\n" +
                   "Musik ini biasanya mengiringi tarian, teater tradisional, dan ritual adat, menciptakan harmoni khas budaya Jawa Timur.",
      image: "assets/img/budaya/jawa-timur/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Jawa & Dialek Jawa Timur",
      description: "Bahasa Jawa adalah bahasa utama di Jawa Timur dengan tingkatan Krama (halus), Madya (menengah), dan Ngoko (kasar). " +
                   "Terdapat juga dialek lokal seperti Arekan (Surabaya), Mataraman (Madiun, Solo), dan Osing (Banyuwangi). " +
                   "Bahasa ini digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan sastra tradisional. " +
                   "Menjadi bagian penting dari identitas budaya masyarakat Jawa Timur.",
    }
  }
}
};
islandsData["aceh"] = {
  name: "Aceh",
  subtitle: "Bumi Serambi Mekkah dengan warisan budaya yang kaya dan unik",
  heroImage: "assets/img/budaya/aceh/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Aceh (Rumoh Aceh)",
      description: "Rumah tradisional Aceh berbentuk panggung dengan atap tinggi dan atap pelana yang khas. " +
                   "Biasanya terbuat dari kayu ulin atau kayu keras lainnya. Rumah Aceh memiliki ukiran indah di tiang dan dindingnya, " +
                   "serta ruang terbuka di bagian bawah yang bisa digunakan untuk menyimpan hewan atau sebagai tempat bersantai. " +
                   "Struktur panggung ini membuat rumah lebih aman dari banjir dan ventilasi udara lebih baik, cocok dengan iklim tropis Aceh.",
      image: "assets/img/budaya/aceh/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Aceh",
      description: "Busana adat pria dan wanita Aceh sering dipakai dalam pernikahan, upacara adat, dan acara resmi. " +
                   "Pria memakai baju kurung panjang, sarung, peci atau tanjak, dan selendang, sementara wanita memakai baju kurung panjang dengan songket Aceh berwarna cerah dan berhias manik-manik. " +
                   "Pakaian ini menunjukkan kesopanan, kerapian, dan keindahan tradisi Aceh.",
      image: "assets/img/budaya/aceh/pakaian.jpg"
    },
    tari: {
      title: "Tari Saman",
      description: "Tari Saman adalah tarian tradisional Aceh yang terkenal dengan gerakan cepat, kompak, dan ritmis. " +
                   "Biasanya ditampilkan oleh sekelompok penari pria duduk berbaris, bergerak serentak mengikuti irama pukulan tangan, tepukan dada, dan hentakan kaki. " +
                   "Tarian ini sering dipakai untuk menyambut tamu penting, upacara adat, dan sebagai simbol kebersamaan masyarakat Aceh.",
      image: "assets/img/budaya/aceh/tari.jpg"
    },
    makanan: {
      title: "Mie Aceh",
      description: "Mie Aceh adalah makanan khas Aceh yang terbuat dari mie kuning tebal, dimasak dengan rempah-rempah khas Aceh yang kuat, " +
                   "biasanya ditambah daging sapi, kambing, atau seafood seperti udang dan kepiting. " +
                   "Makanan ini bercita rasa pedas dan gurih, sering dilengkapi dengan acar mentimun dan emping. " +
                   "Mie Aceh menjadi ikon kuliner Aceh yang dicari wisatawan.",
      image: "assets/img/budaya/aceh/makanan.jpg"
    },
    musik: {
      title: "Rapai",
      description: "Rapai adalah alat musik tradisional Aceh berbentuk rebana besar yang terbuat dari kayu dan kulit binatang. " +
                   "Biasanya dimainkan secara berkelompok untuk mengiringi tarian atau acara ritual adat. " +
                   "Alat musik ini memberikan irama khas yang membangkitkan semangat dan menambah keindahan pertunjukan seni Aceh.",
      image: "assets/img/budaya/aceh/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Aceh",
      description: "Bahasa Aceh adalah bahasa daerah utama di Aceh, digunakan dalam komunikasi sehari-hari, kesenian, dan pendidikan adat. " +
                   "Bahasa ini memiliki dialek khas di berbagai kabupaten/kota dan menjadi identitas budaya penting bagi masyarakat Aceh."
      // tidak perlu image
    }
  }
}
islandsData["bali"] = {
    name: "Bali",
    subtitle: "Pulau Dewata yang kaya akan budaya, seni, dan tradisi Hindu",
    heroImage: "assets/img/budaya/bali/hero.jpg",
    items: {
      rumah: {
        title: "Rumah Tradisional Bali",
        description: "Rumah tradisional Bali biasanya dibangun dalam kompleks rumah adat (compound) dengan beberapa bangunan untuk keluarga besar. " +
                     "Bangunan utama disebut 'Bale', digunakan untuk tempat tinggal dan upacara keluarga. " +
                     "Rumah Bali dihias dengan ukiran kayu dan batu, serta memiliki gapura (gerbang) dengan simbol-simbol Hindu. " +
                     "Struktur rumah dirancang sesuai dengan filosofi Tri Hita Karana yang menghubungkan manusia, alam, dan Tuhan.",
        image: "assets/img/budaya/bali/rumah.jpg"
      },
      pakaian: {
        title: "Pakaian Adat Bali",
        description: "Pakaian adat Bali digunakan dalam upacara keagamaan, pernikahan, dan festival seni. " +
                     "Pria biasanya memakai Udeng (ikat kepala), baju koko atau jas pendek, dan kain kamben. " +
                     "Wanita memakai kebaya dengan kain kain kamben yang dililit rapi, lengkap dengan selendang dan hiasan perhiasan. " +
                     "Pakaian adat Bali menampilkan keindahan, kesopanan, dan simbol keagamaan Hindu Bali.",
        image: "assets/img/budaya/bali/pakaian.jpg"
      },
      tari: {
        title: "Tarian Tradisional Bali",
        description: "Bali memiliki banyak tarian klasik dan sakral, di antaranya:\n" +
                     "- Tari Legong: tarian klasik dengan gerakan anggun dan ekspresi wajah yang halus, biasanya ditampilkan oleh gadis muda.\n" +
                     "- Tari Barong: tarian cerita rakyat yang menggambarkan pertarungan antara kebaikan dan kejahatan.\n" +
                     "- Tari Kecak: tarian api yang terkenal, dilakukan oleh sekelompok pria duduk melingkar sambil mengucapkan 'cak' berirama.\n" +
                     "Tarian ini biasanya dipertunjukkan di pura, festival budaya, atau pertunjukan wisata, menampilkan filosofi dan spiritualitas Bali.",
        image: "assets/img/budaya/bali/tari.jpg"
      },
      makanan: {
        title: "Kuliner Khas Bali",
        description: "Bali memiliki banyak kuliner unik:\n" +
                     "- Babi Guling: babi panggang utuh dengan bumbu khas Bali, disajikan saat upacara dan perayaan.\n" +
                     "- Ayam Betutu: ayam dimasak dengan bumbu rempah lengkap dan dibungkus daun pisang.\n" +
                     "- Lawar: campuran sayuran, daging cincang, kelapa parut, dan rempah.\n" +
                     "- Sate Lilit: sate ikan atau daging yang dibungkus dengan parutan kelapa dan rempah.\n" +
                     "Makanan ini menunjukkan kekayaan rempah, rasa, dan tradisi kuliner masyarakat Bali.",
        image: "assets/img/budaya/bali/makanan.jpg"
      },
      musik: {
        title: "Musik Tradisional Bali",
        description: "Musik Bali biasanya berupa gamelan Bali, yang terdiri dari berbagai instrumen seperti gong, kendang, ceng-ceng, dan metallophone. " +
                     "Gamelan digunakan untuk mengiringi tarian, upacara adat, dan pertunjukan seni. " +
                     "Musik ini memiliki irama cepat, ritmis, dan khas, mencerminkan energi dan spiritualitas masyarakat Bali.",
        image: "assets/img/budaya/bali/musik.jpg"
      },
      bahasa: {
        title: "Bahasa Bali",
        description: "Bahasa Bali adalah bahasa daerah utama di Bali, digunakan dalam komunikasi sehari-hari, upacara adat, dan kesenian tradisional. " +
                     "Bahasa Bali memiliki tingkatan bahasa untuk situasi formal dan informal, serta menjadi identitas budaya yang penting bagi masyarakat Pulau Dewata."
        // tidak perlu image
      }
    }
  }
  islandsData["bangka-belitung"] = {
    name: "Bangka Belitung",
    subtitle: "Provinsi kepulauan dengan budaya Melayu dan kekayaan alam yang khas",
    heroImage: "assets/img/budaya/bangka-belitung/hero.jpg",
    items: {
      rumah: {
        title: "Rumah Adat Bangka-Belitung",
        description: "Rumah tradisional Bangka-Belitung biasanya berbentuk panggung dengan atap pelana, terbuat dari kayu keras. " +
                     "Rumah ini memiliki teras luas di depan yang bisa digunakan untuk berkumpul atau kegiatan sehari-hari. " +
                     "Ornamen ukiran di tiang dan jendela mencerminkan seni Melayu dan identitas lokal. " +
                     "Struktur panggung juga membantu rumah tetap aman dari banjir di daerah pesisir dan ventilasi udara yang baik.",
        image: "assets/img/budaya/bangka-belitung/rumah.jpg"
      },
      pakaian: {
        title: "Pakaian Adat Bangka-Belitung",
        description: "Pakaian adat Bangka-Belitung menunjukkan pengaruh budaya Melayu. " +
                     "Pria biasanya memakai baju kurung panjang, kain sarung, dan peci. " +
                     "Wanita memakai kebaya dengan kain songket atau tenun lokal, lengkap dengan selendang dan hiasan manik-manik. " +
                     "Pakaian ini dipakai dalam upacara adat, pernikahan, dan acara resmi, menunjukkan kesopanan dan keindahan tradisi Melayu Bangka-Belitung.",
        image: "assets/img/budaya/bangka-belitung/pakaian.jpg"
      },
      tari: {
        title: "Tarian Tradisional Bangka-Belitung",
        description: "Bangka-Belitung memiliki tarian tradisional yang khas Melayu, seperti Tari Topeng dan Tari Rempah. " +
                     "Tarian ini biasanya menampilkan gerakan lembut dan anggun, dipadukan dengan musik tradisional. " +
                     "Tarian dipertunjukkan dalam festival budaya, upacara adat, dan kegiatan penyambutan tamu, mencerminkan sejarah dan filosofi masyarakat lokal.",
        image: "assets/img/budaya/bangka-belitung/tari.jpg"
      },
      makanan: {
        title: "Kuliner Khas Bangka-Belitung",
        description: "Bangka-Belitung terkenal dengan kuliner laut dan rempahnya:\n" +
                     "- Lempah Kuning: masakan ikan atau seafood dengan kuah kuning pedas dan asam, menggunakan rempah lokal.\n" +
                     "- Mie Belitung: mie kuning tebal disajikan dengan kuah kacang dan seafood.\n" +
                     "- Kemplang: kerupuk ikan tipis dan renyah khas Bangka.\n" +
                     "- Tempoyak: durian fermentasi yang dijadikan sambal atau lauk.\n" +
                     "Kuliner ini menonjolkan kekayaan laut, rempah, dan tradisi kuliner Melayu Bangka-Belitung.",
        image: "assets/img/budaya/bangka-belitung/makanan.jpg"
      },
      musik: {
        title: "Musik Tradisional Bangka-Belitung",
        description: "Musik tradisional Bangka-Belitung banyak dipengaruhi budaya Melayu. " +
                     "Alat musik seperti dambus, rebana, gendang, dan seruling digunakan untuk mengiringi tarian dan pertunjukan seni. " +
                     "Musik ini terdengar ritmis dan lembut, biasanya dimainkan dalam festival budaya, upacara adat, dan perayaan lokal.",
        image: "assets/img/budaya/bangka-belitung/musik.jpg"
      },
      bahasa: {
        title: "Bahasa Melayu Bangka-Belitung",
        description: "Bahasa Melayu menjadi bahasa utama di Bangka-Belitung, digunakan dalam komunikasi sehari-hari, kesenian, dan upacara adat. " +
                     "Bahasa ini menjadi identitas budaya lokal yang penting, sekaligus menandakan akar sejarah Melayu di provinsi kepulauan ini."
        // tidak perlu image
      }
    }
  }
islandsData["bengkulu"] = {
  name: "Bengkulu",
  subtitle: "Provinsi pesisir Sumatera yang kaya sejarah, budaya Melayu, dan kuliner khas",
  heroImage: "assets/img/budaya/bengkulu/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Bengkulu (Rumah Bubungan Lima)",
      description: "Rumah tradisional Bengkulu dikenal dengan sebutan Rumah Bubungan Lima karena bentuk atapnya yang memiliki lima garis atap. " +
                   "Rumah ini biasanya terbuat dari kayu ulin atau kayu keras lainnya, memiliki tiang kokoh dan ventilasi alami. " +
                   "Biasanya dilengkapi teras depan untuk berkumpul keluarga dan menerima tamu. Ukiran kayu di bagian rumah mencerminkan seni Melayu lokal dan identitas budaya Bengkulu.",
      image: "assets/img/budaya/bengkulu/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Bengkulu",
      description: "Pakaian tradisional Bengkulu banyak dipengaruhi budaya Melayu. " +
                   "Pria memakai baju kurung panjang, kain sarung, dan peci, sedangkan wanita memakai kebaya dengan kain songket khas Bengkulu berwarna cerah dan dihias manik-manik. " +
                   "Pakaian ini digunakan dalam pernikahan, upacara adat, dan acara resmi, menampilkan kesopanan dan keanggunan budaya Melayu Bengkulu.",
      image: "assets/img/budaya/bengkulu/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Bengkulu",
      description: "Bengkulu memiliki tarian tradisional Melayu yang terkenal seperti Tari Sekapur Sirih dan Tari Bedana. " +
                   "Tarian ini biasanya menampilkan gerakan anggun dan ritmis, digunakan untuk menyambut tamu penting, pernikahan, dan festival budaya. " +
                   "Tarian ini menjadi simbol keramahan, kebersamaan, dan filosofi masyarakat Bengkulu.",
      image: "assets/img/budaya/bengkulu/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Bengkulu",
      description: "Bengkulu terkenal dengan makanan khas Melayu dan kuliner pesisir:\n" +
                   "- Pendap: olahan ikan berbumbu khas, dikukus dengan daun pisang.\n" +
                   "- Lempok Durian: manisan durian yang dikeringkan dan dipadatkan.\n" +
                   "- Gulai Ikan Patin: ikan patin dimasak dengan bumbu gulai santan pedas.\n" +
                   "- Tempoyak: durian fermentasi yang dijadikan sambal atau lauk.\n" +
                   "Kuliner ini menonjolkan rempah, rasa pedas-gurih, dan kekayaan alam pesisir Bengkulu.",
      image: "assets/img/budaya/bengkulu/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Bengkulu",
      description: "Musik tradisional Bengkulu menggunakan alat musik seperti gendang, seruling, rebana, dan gong. " +
                   "Musik ini mengiringi tarian, ritual adat, dan perayaan lokal. Irama musik Melayu Bengkulu terdengar lembut namun ritmis, menambah keindahan pertunjukan seni dan budaya masyarakat setempat.",
      image: "assets/img/budaya/bengkulu/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Melayu Bengkulu",
      description: "Bahasa Melayu menjadi bahasa utama di Bengkulu, digunakan dalam komunikasi sehari-hari, kesenian, dan upacara adat. " +
                   "Bahasa ini menjadi identitas budaya lokal yang penting dan mencerminkan sejarah Melayu di provinsi pesisir ini."
      // tidak perlu image
    }
  }
}
islandsData["banten"] = {
  name: "Banten",
  subtitle: "Provinsi di ujung barat Pulau Jawa yang kaya sejarah, budaya Sunda, dan tradisi lokal",
  heroImage: "assets/img/budaya/banten/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Banten (Rumah Baduy & Rumah Panggang Sunda)",
      description: "Rumah tradisional Banten dipengaruhi budaya Sunda dan Baduy. " +
                   "Rumah panggung ini biasanya terbuat dari kayu dan bambu dengan atap pelana atau ijuk. " +
                   "Rumah Baduy memiliki bentuk sederhana, memanfaatkan bahan alam dan teknik tradisional. " +
                   "Filosofi rumah adat Banten menekankan keselarasan dengan alam, sosial, dan spiritual, sesuai dengan adat istiadat lokal.",
      image: "assets/img/budaya/banten/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Banten",
      description: "Pakaian adat Banten menampilkan perpaduan budaya Sunda dan Islam lokal. " +
                   "Pria memakai baju pangsi atau beskap dengan sarung dan peci, sementara wanita memakai kebaya panjang dengan kain batik lokal dan hiasan selendang. " +
                   "Pakaian ini dipakai pada pernikahan, upacara adat, dan festival budaya, menonjolkan kesopanan dan keindahan tradisi Banten.",
      image: "assets/img/budaya/banten/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Banten",
      description: "Banten memiliki tarian tradisional khas Melayu dan Sunda, seperti Tari Topeng Banten dan Tari Rampak Bedug. " +
                   "Tarian ini menampilkan gerakan energik dan ritmis, biasanya digunakan dalam festival budaya, upacara adat, dan acara penyambutan tamu. " +
                   "Tarian mencerminkan sejarah, filosofi hidup, dan keramahtamahan masyarakat Banten.",
      image: "assets/img/budaya/banten/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Banten",
      description: "Kuliner Banten menonjolkan cita rasa pedas dan rempah Melayu:\n" +
                   "- Sate Bandeng: ikan bandeng dipanggang dengan bumbu khas.\n" +
                   "- Rabeg: daging sapi dimasak dengan santan dan rempah.\n" +
                   "- Toge Goreng: sayur toge dicampur bumbu petis dan kerupuk.\n" +
                   "- Nasi Uduk Banten: nasi gurih dengan lauk dan sambal khas.\n" +
                   "Makanan ini mencerminkan kekayaan rempah, pengaruh budaya lokal, dan tradisi kuliner Banten.",
      image: "assets/img/budaya/banten/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Banten",
      description: "Musik tradisional Banten menggunakan alat musik seperti rebana, gendang, gong, dan seruling. " +
                   "Musik ini mengiringi tarian, upacara adat, dan pertunjukan seni. Ritme musik Melayu Banten terdengar lembut namun dinamis, mencerminkan karakter budaya lokal.",
      image: "assets/img/budaya/banten/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Sunda Banten",
      description: "Bahasa Sunda digunakan sebagai bahasa utama di Banten, khususnya dalam komunikasi sehari-hari, kesenian, dan upacara adat. " +
                   "Bahasa ini menjadi identitas budaya lokal yang penting dan mencerminkan akar budaya Sunda di provinsi ini."
      // tidak perlu image
    }
  }
}
islandsData["gorontalo"] = {
  name: "Gorontalo",
  subtitle: "Provinsi di Sulawesi Utara yang kaya budaya Gorontalo, tradisi Melayu dan Gorontalo-Tolitoli",
  heroImage: "assets/img/budaya/gorontalo/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Gorontalo (Rumah Dulohupa)",
      description: "Rumah tradisional Gorontalo dikenal dengan sebutan Rumah Dulohupa. " +
                   "Rumah ini berbentuk panggung dengan atap tinggi, biasanya terbuat dari kayu lokal, bambu, dan ijuk. " +
                   "Rumah Dulohupa memiliki ornamen ukiran di tiang dan dinding yang mencerminkan identitas budaya Gorontalo. " +
                   "Teras rumah biasanya luas, digunakan untuk aktivitas sosial dan berkumpul keluarga, sesuai filosofi lokal yang menekankan kebersamaan.",
      image: "assets/img/budaya/gorontalo/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Gorontalo",
      description: "Pakaian adat Gorontalo menampilkan keanggunan budaya Melayu dan Gorontalo. " +
                   "Pria memakai baju Biliu dan sarung, serta penutup kepala tradisional. " +
                   "Wanita memakai baju tradisional panjang dengan kain songket atau tenun lokal dan selendang, dihias manik-manik. " +
                   "Pakaian ini dipakai dalam pernikahan, upacara adat, dan festival budaya untuk menunjukkan kesopanan, keindahan, dan identitas budaya Gorontalo.",
      image: "assets/img/budaya/gorontalo/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Gorontalo",
      description: "Gorontalo memiliki tarian tradisional seperti Tari Polopalo dan Tari Ilahi. " +
                   "Tarian ini biasanya menampilkan gerakan halus dan ritmis, menggambarkan filosofi hidup masyarakat Gorontalo dan alam sekitar. " +
                   "Tarian dipertunjukkan dalam festival budaya, pernikahan, dan upacara adat, menjadi simbol identitas dan keramahtamahan Gorontalo.",
      image: "assets/img/budaya/gorontalo/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Gorontalo",
      description: "Kuliner Gorontalo menonjolkan bahan lokal dan rasa pedas segar:\n" +
                   "- Binte Biluhuta: bubur jagung dengan ikan atau seafood, bumbu pedas segar.\n" +
                   "- Ikan Ilang-ilang: olahan ikan laut khas Gorontalo.\n" +
                   "- Ayam Iloni: ayam kampung dibumbui rempah Gorontalo, dimasak dengan santan.\n" +
                   "- Kaledo: sup iga sapi pedas, menjadi favorit masyarakat dan wisatawan.\n" +
                   "Makanan ini mencerminkan kearifan lokal, kekayaan laut, dan rempah khas Gorontalo.",
      image: "assets/img/budaya/gorontalo/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Gorontalo",
      description: "Musik tradisional Gorontalo menggunakan alat musik seperti gendang, seruling, gong, dan kolintang. " +
                   "Musik ini mengiringi tarian, ritual adat, dan pertunjukan seni, terdengar ritmis dan harmonis, mencerminkan karakter budaya lokal dan filosofi hidup masyarakat Gorontalo.",
      image: "assets/img/budaya/gorontalo/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Gorontalo",
      description: "Bahasa Gorontalo digunakan sebagai bahasa utama dalam komunikasi sehari-hari, kesenian, dan upacara adat. " +
                   "Bahasa ini menjadi identitas budaya yang penting dan menandakan akar sejarah serta tradisi masyarakat Gorontalo."
      // tidak perlu image
    }
  }
}
islandsData["jambi"] = {
  name: "Jambi",
  subtitle: "Provinsi di Pulau Sumatera dengan kekayaan budaya Melayu, sejarah Kerajaan Melayu, dan kuliner khas",
  heroImage: "assets/img/budaya/jambi/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Jambi (Rumah Panggung Melayu)",
      description: "Rumah tradisional Jambi berbentuk panggung, terbuat dari kayu ulin atau kayu keras lokal, dengan atap pelana yang tinggi. " +
                   "Rumah ini memiliki teras luas untuk berkumpul keluarga dan menerima tamu. " +
                   "Ornamen ukiran kayu di tiang dan dinding rumah mencerminkan seni Melayu Jambi, filosofi kehidupan, dan identitas budaya lokal.",
      image: "assets/img/budaya/jambi/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Jambi",
      description: "Pakaian adat Jambi banyak dipengaruhi budaya Melayu. " +
                   "Pria memakai baju kurung panjang, celana panjang, dan tanjak atau peci, sedangkan wanita memakai kebaya panjang dengan kain songket Jambi berwarna cerah dan dihias manik-manik. " +
                   "Pakaian ini digunakan dalam pernikahan, upacara adat, dan festival budaya, menunjukkan kesopanan, kerapian, dan identitas Melayu Jambi.",
      image: "assets/img/budaya/jambi/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Jambi",
      description: "Tarian khas Jambi meliputi Tari Gending Sriwijaya dan Tari Tapis. " +
                   "Tarian ini menampilkan gerakan anggun, ritmis, dan penuh makna simbolis, biasanya dipertunjukkan dalam festival budaya, pernikahan, dan upacara adat. " +
                   "Tarian ini mencerminkan filosofi hidup, kearifan lokal, dan keramahtamahan masyarakat Jambi.",
      image: "assets/img/budaya/jambi/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Jambi",
      description: "Kuliner Jambi terkenal dengan cita rasa Melayu pedas dan gurih:\n" +
                   "- Tempoyak Ikan Patin: ikan patin dimasak dengan durian fermentasi, pedas dan gurih.\n" +
                   "- Gulai Tempoyak: olahan daging atau ikan dengan santan dan rempah tempoyak.\n" +
                   "- Kerupuk Sanjai: kerupuk singkong goreng khas Jambi, renyah dan gurih.\n" +
                   "- Kue Keranjang Jambi: kue tradisional manis untuk perayaan.\n" +
                   "Kuliner ini mencerminkan kekayaan alam, rempah, dan tradisi kuliner masyarakat Melayu Jambi.",
      image: "assets/img/budaya/jambi/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Jambi",
      description: "Musik tradisional Jambi menggunakan alat musik seperti gendang, seruling, gong, dan rebab. " +
                   "Musik ini mengiringi tarian, upacara adat, dan pertunjukan seni, terdengar harmonis dan ritmis, mencerminkan karakter budaya Melayu Jambi.",
      image: "assets/img/budaya/jambi/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Melayu Jambi",
      description: "Bahasa Melayu Jambi digunakan dalam komunikasi sehari-hari, kesenian, dan upacara adat. " +
                   "Bahasa ini menjadi identitas budaya penting yang mencerminkan sejarah, tradisi, dan kearifan lokal masyarakat Jambi."
      // tidak perlu image
    }
  }
}
islandsData["jawa-barat"] = {
  name: "Jawa Barat",
  subtitle: "Provinsi di bagian barat Pulau Jawa yang kaya budaya Sunda, kuliner khas, dan tradisi seni yang kuat",
  heroImage: "assets/img/budaya/jawa-barat/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Jawa Barat (Rumah Gadang Sunda & Julang Ngapak)",
      description: "Rumah tradisional Jawa Barat banyak dipengaruhi budaya Sunda. " +
                   "Tipe rumah yang populer adalah Rumah Julang Ngapak, berbentuk panggung dengan atap tinggi menyerupai sayap burung, dan Rumah Gadang Sunda yang memiliki atap limas tinggi. " +
                   "Biasanya terbuat dari kayu dan bambu, memiliki teras luas untuk menerima tamu dan aktivitas sosial. " +
                   "Ukiran kayu di rumah adat menampilkan filosofi hidup, keselarasan dengan alam, dan identitas budaya Sunda.",
      image: "assets/img/budaya/jawa-barat/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Jawa Barat",
      description: "Pakaian tradisional Jawa Barat menonjolkan keanggunan budaya Sunda. " +
                   "Pria biasanya memakai baju pangsi dengan celana panjang, ikat pinggang, dan penutup kepala (iket atau totopong), sedangkan wanita memakai kebaya panjang dengan kain batik atau tenun khas Sunda dan selendang. " +
                   "Pakaian ini dipakai pada pernikahan, upacara adat, dan pertunjukan seni, menunjukkan kesopanan, keanggunan, dan identitas budaya Jawa Barat.",
      image: "assets/img/budaya/jawa-barat/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Jawa Barat",
      description: "Jawa Barat terkenal dengan tarian tradisional seperti Tari Jaipong, Tari Topeng Cirebon, dan Tari Merak. " +
                   "Tarian ini menampilkan gerakan dinamis, indah, dan ritmis, biasanya ditampilkan dalam festival budaya, pernikahan, dan acara adat. " +
                   "Tarian ini mencerminkan filosofi hidup, kearifan lokal, dan keindahan seni masyarakat Sunda.",
      image: "assets/img/budaya/jawa-barat/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Jawa Barat",
      description: "Kuliner Jawa Barat terkenal dengan rasa pedas, manis, dan gurih:\n" +
                   "- Nasi Liwet: nasi gurih dimasak dengan santan dan lauk ayam atau ikan.\n" +
                   "- Lotek & Gado-gado: sayur rebus dengan bumbu kacang pedas manis.\n" +
                   "- Soto Bandung: sup daging sapi dengan tauge dan bumbu khas.\n" +
                   "- Karedok: salad sayur mentah dengan bumbu kacang.\n" +
                   "- Surabi & Combro: camilan khas dari tepung beras dan parutan kelapa.\n" +
                   "Kuliner ini mencerminkan kekayaan rempah, kreativitas masakan lokal, dan tradisi Sunda.",
      image: "assets/img/budaya/jawa-barat/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Jawa Barat",
      description: "Musik tradisional Jawa Barat menggunakan alat musik seperti angklung, kendang, gong, suling, dan rebab. " +
                   "Musik ini mengiringi tarian, pertunjukan wayang, dan ritual adat. " +
                   "Angklung menjadi ikon budaya Jawa Barat yang terkenal hingga internasional, mencerminkan harmoni dan kreativitas masyarakat Sunda.",
      image: "assets/img/budaya/jawa-barat/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Sunda",
      description: "Bahasa Sunda digunakan sebagai bahasa utama di Jawa Barat, dalam komunikasi sehari-hari, kesenian, dan upacara adat. " +
                   "Bahasa ini memiliki dialek yang beragam, mencerminkan kekayaan budaya dan sejarah masyarakat Sunda, serta menjadi identitas lokal yang penting."
      // tidak perlu image
    }
  }
}
islandsData["dki-jakarta"] = {
  name: "DKI Jakarta",
  subtitle: "Ibukota Indonesia yang modern sekaligus kaya sejarah, budaya Betawi, dan tradisi lokal",
  heroImage: "assets/img/budaya/dki-jakarta/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Betawi (Rumah Kebaya & Rumah Joglo Betawi)",
      description: "Rumah tradisional Betawi di Jakarta biasanya berbentuk panggung rendah atau rumah sederhana dengan atap pelana. " +
                   "Tipe Rumah Kebaya memiliki atap datar dan luas, sedangkan Rumah Joglo Betawi mengadaptasi arsitektur Jawa Tengah. " +
                   "Rumah-rumah ini menekankan fungsi sosial dan keluarga, serta memiliki teras yang digunakan untuk berkumpul dan menerima tamu. " +
                   "Ukiran dan hiasan kayu sederhana memperlihatkan estetika lokal dan filosofi hidup masyarakat Betawi.",
      image: "assets/img/budaya/dki-jakarta/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Betawi",
      description: "Pakaian tradisional Betawi sangat khas, dipengaruhi budaya Melayu dan Arab. " +
                   "Pria memakai baju sadariah, celana panjang, peci, dan kain sarung, sedangkan wanita memakai kebaya encim lengkap dengan selendang dan hiasan kepala. " +
                   "Pakaian ini dipakai dalam pernikahan, upacara adat, dan festival budaya untuk menunjukkan kesopanan, keanggunan, dan identitas Betawi.",
      image: "assets/img/budaya/dki-jakarta/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Betawi",
      description: "Tarian khas Jakarta meliputi Tari Ondel-ondel, Tari Topeng Betawi, dan Tari Cokek. " +
                   "Tarian ini biasanya ditampilkan dalam festival budaya, perayaan kota, dan acara adat, menampilkan gerakan dinamis, ritmis, dan ekspresif. " +
                   "Tarian Betawi mencerminkan sejarah, keragaman etnis, dan keramahtamahan masyarakat Jakarta.",
      image: "assets/img/budaya/dki-jakarta/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Jakarta",
      description: "Kuliner Jakarta terkenal dengan cita rasa Betawi yang unik:\n" +
                   "- Kerak Telor: telur ayam dan ketan dengan kelapa parut, dibakar di atas arang.\n" +
                   "- Soto Betawi: sup daging sapi dengan santan dan bumbu khas.\n" +
                   "- Nasi Uduk: nasi gurih dimasak dengan santan, disajikan dengan lauk ayam, telur, dan sambal.\n" +
                   "- Asinan Betawi: sayur dan buah dengan saus kacang atau cuka pedas.\n" +
                   "Kuliner ini mencerminkan kekayaan sejarah Betawi, pengaruh berbagai budaya, dan kearifan lokal Jakarta.",
      image: "assets/img/budaya/dki-jakarta/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Betawi",
      description: "Musik tradisional Jakarta menggunakan alat musik seperti gambang kromong, rebab, gendang, dan gong. " +
                   "Musik ini mengiringi tarian, pertunjukan ondel-ondel, dan upacara adat. " +
                   "Gambang kromong menjadi ikon musik Betawi yang harmonis dan ritmis, mencerminkan sejarah dan kreativitas masyarakat Jakarta.",
      image: "assets/img/budaya/dki-jakarta/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Betawi",
      description: "Bahasa Betawi adalah bahasa sehari-hari di Jakarta, dipengaruhi Melayu, Sunda, dan Tionghoa. " +
                   "Bahasa ini digunakan dalam komunikasi sehari-hari, kesenian, dan budaya populer, menjadi identitas lokal masyarakat Jakarta."
      // tidak perlu image
    }
  }
}
islandsData["jawa-tengah"] = {
  name: "Jawa Tengah",
  subtitle: "Provinsi di tengah Pulau Jawa yang kaya budaya Jawa, tradisi keraton, kesenian klasik, dan kuliner unik",
  heroImage: "assets/img/budaya/jawa-tengah/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Jawa Tengah (Rumah Joglo & Limasan)",
      description: "Rumah tradisional Jawa Tengah dikenal dengan Rumah Joglo yang memiliki atap tinggi berbentuk limas dan Limasan yang lebih sederhana. " +
                   "Biasanya terbuat dari kayu jati dan memiliki ornamen ukiran khas Jawa Tengah. " +
                   "Rumah Joglo digunakan sebagai tempat tinggal keluarga bangsawan atau keraton, sementara rumah Limasan umum ditemui di pedesaan. " +
                   "Teras luas digunakan untuk kegiatan sosial dan upacara adat, mencerminkan filosofi hidup masyarakat Jawa Tengah.",
      image: "assets/img/budaya/jawa-tengah/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Jawa Tengah",
      description: "Pakaian tradisional Jawa Tengah menampilkan keanggunan budaya keraton. " +
                   "Pria biasanya memakai beskap, blangkon, dan kain batik, sedangkan wanita memakai kebaya panjang dengan kain batik atau songket. " +
                   "Pakaian ini dipakai dalam pernikahan, upacara adat, dan pertunjukan seni, menunjukkan kesopanan, keanggunan, dan identitas budaya Jawa Tengah.",
      image: "assets/img/budaya/jawa-tengah/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Jawa Tengah",
      description: "Jawa Tengah terkenal dengan tarian klasik dan rakyat seperti Tari Serimpi, Tari Gambyong, dan Tari Bedhaya. " +
                   "Tarian ini menampilkan gerakan halus, ritmis, dan penuh makna simbolik, biasanya dipertunjukkan dalam keraton, festival budaya, dan acara adat. " +
                   "Tarian mencerminkan filosofi hidup, keselarasan dengan alam, dan budaya masyarakat Jawa Tengah.",
      image: "assets/img/budaya/jawa-tengah/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Jawa Tengah",
      description: "Kuliner Jawa Tengah terkenal dengan rasa manis, gurih, dan pedas:\n" +
                   "- Gudeg Yogya: olahan nangka muda manis dan gurih, disajikan dengan nasi, ayam, dan sambal.\n" +
                   "- Soto Kudus: sup ayam dengan rempah khas Kudus.\n" +
                   "- Nasi Liwet Solo: nasi gurih dimasak dengan santan, disajikan dengan ayam, telur, dan sambal.\n" +
                   "- Wingko Babat: kue tradisional dari kelapa dan ketan.\n" +
                   "- Jenang: makanan manis berbahan dasar tepung ketan dan gula merah.\n" +
                   "Makanan ini mencerminkan kreativitas, kearifan lokal, dan tradisi kuliner masyarakat Jawa Tengah.",
      image: "assets/img/budaya/jawa-tengah/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Jawa Tengah",
      description: "Musik tradisional Jawa Tengah banyak menggunakan gamelan, gong, kendang, siter, dan rebab. " +
                   "Musik ini mengiringi tarian klasik, pertunjukan wayang, dan upacara adat. " +
                   "Gamelan menjadi simbol harmoni dan keselarasan, mencerminkan filosofi hidup dan kesenian masyarakat Jawa Tengah.",
      image: "assets/img/budaya/jawa-tengah/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Jawa & Dialek Jawa Tengah",
      description: "Bahasa Jawa digunakan sebagai bahasa utama di Jawa Tengah, memiliki tingkatan Krama, Madya, dan Ngoko. " +
                   "Terdapat dialek lokal seperti Mataram, Banyumasan, dan Surakartan. " +
                   "Bahasa ini digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan sastra tradisional, menjadi identitas budaya penting masyarakat Jawa Tengah."
      // tidak perlu image
    }
  }
}
islandsData["kalimantan-barat"] = {
  name: "Kalimantan Barat",
  subtitle: "Provinsi di Pulau Kalimantan yang kaya budaya Dayak, Melayu, dan tradisi sungai Kapuas yang unik",
  heroImage: "assets/img/budaya/kalimantan-barat/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Kalimantan Barat (Rumah Betang & Rumah Melayu)",
      description: "Rumah tradisional Kalimantan Barat mencakup Rumah Betang khas Dayak dan Rumah Melayu. " +
                   "Rumah Betang berbentuk panggung panjang yang bisa menampung beberapa keluarga, terbuat dari kayu ulin atau kayu keras lainnya, dengan atap pelana yang tinggi. " +
                   "Rumah Melayu biasanya lebih sederhana, juga berbentuk panggung, dengan ornamen kayu dan ventilasi udara yang baik. " +
                   "Fungsi utama rumah adalah sosial, tempat berkumpul keluarga dan menyimpan barang, serta aman dari banjir sungai.",
      image: "assets/img/budaya/kalimantan-barat/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Kalimantan Barat",
      description: "Pakaian tradisional Kalimantan Barat dipengaruhi budaya Dayak dan Melayu. " +
                   "Pria Dayak memakai baju kain dengan hiasan manik-manik, celana panjang, dan penutup kepala berhias bulu, sedangkan wanita memakai baju panjang berhias manik-manik dan songket. " +
                   "Pakaian Melayu Kalbar lebih sederhana, dipakai dalam pernikahan, upacara adat, dan festival budaya, menampilkan identitas dan estetika lokal.",
      image: "assets/img/budaya/kalimantan-barat/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Kalimantan Barat",
      description: "Kalimantan Barat memiliki tarian khas seperti Tari Radap Rahayu dan Tari Mandau. " +
                   "Tarian ini biasanya menampilkan gerakan anggun, ritmis, dan simbolik, diiringi musik tradisional. " +
                   "Tarian mencerminkan filosofi hidup, kearifan lokal, dan budaya Dayak serta Melayu Kalbar, dipertunjukkan dalam festival, upacara adat, dan ritual komunitas.",
      image: "assets/img/budaya/kalimantan-barat/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Kalimantan Barat",
      description: "Kuliner Kalbar terkenal dengan rasa gurih dan pedas:\n" +
                   "- Ikan Patin Tempoyak: ikan patin dimasak dengan durian fermentasi.\n" +
                   "- Soto Pontianak: sup daging atau ayam dengan bumbu khas Melayu.\n" +
                   "- Kek Lapis: kue lapis warna-warni, manis dan lembut.\n" +
                   "- Ayam Pansuh: ayam dimasak dalam bambu dengan rempah khas.\n" +
                   "Kuliner ini mencerminkan kekayaan alam, rempah, dan tradisi masyarakat Kalimantan Barat.",
      image: "assets/img/budaya/kalimantan-barat/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Kalimantan Barat",
      description: "Musik tradisional Kalbar menggunakan alat musik seperti gendang, gong, seruling, dan kecapi. " +
                   "Musik ini mengiringi tarian, ritual adat, dan festival budaya, terdengar harmonis dan ritmis, mencerminkan karakter budaya Dayak dan Melayu Kalbar.",
      image: "assets/img/budaya/kalimantan-barat/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Dayak & Melayu Kalimantan Barat",
      description: "Bahasa daerah utama di Kalimantan Barat adalah bahasa Dayak dan Melayu. " +
                   "Bahasa ini digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal, menjadi identitas budaya penting bagi masyarakat Kalimantan Barat."
      // tidak perlu image
    }
  }
}
islandsData["kalimantan-timur"] = {
  name: "Kalimantan Timur",
  subtitle: "Provinsi di Pulau Kalimantan dengan budaya Dayak, Kutai, dan tradisi sungai Mahakam yang khas",
  heroImage: "assets/img/budaya/kalimantan-timur/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Kalimantan Timur (Rumah Lamin & Rumah Kutai)",
      description: "Rumah tradisional Kalimantan Timur dikenal dengan Rumah Lamin khas Dayak dan Rumah Kutai. " +
                   "Rumah Lamin adalah rumah panggung panjang yang bisa menampung banyak keluarga, terbuat dari kayu ulin, dengan atap tinggi dan ruang terbuka di bawah untuk menyimpan hewan atau aktivitas sosial. " +
                   "Rumah Kutai memiliki bentuk panggung sederhana, dihias ukiran khas, dan berfungsi sebagai tempat tinggal dan pusat kegiatan adat masyarakat Kutai.",
      image: "assets/img/budaya/kalimantan-timur/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Kalimantan Timur",
      description: "Pakaian tradisional Kalimantan Timur menampilkan keindahan budaya Dayak dan Kutai. " +
                   "Pria Dayak memakai baju berbahan kain dan bulu, celana panjang, serta penutup kepala hiasan manik-manik, sedangkan wanita memakai baju panjang dengan hiasan manik-manik dan songket. " +
                   "Pakaian Kutai biasanya lebih sederhana dan elegan, dipakai dalam pernikahan, upacara adat, dan festival budaya, menunjukkan identitas lokal dan estetika masyarakat Kalimantan Timur.",
      image: "assets/img/budaya/kalimantan-timur/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Kalimantan Timur",
      description: "Tarian khas Kalimantan Timur meliputi Tari Hudoq, Tari Dayak, dan Tari Gantar. " +
                   "Tarian ini menampilkan gerakan ritmis dan simbolik, biasanya ditampilkan dalam festival budaya, ritual adat, dan upacara penyambutan tamu. " +
                   "Tarian mencerminkan filosofi hidup, kearifan lokal, dan kekayaan budaya Dayak serta Kutai di Kalimantan Timur.",
      image: "assets/img/budaya/kalimantan-timur/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Kalimantan Timur",
      description: "Kuliner Kalimantan Timur terkenal dengan rasa gurih dan alami:\n" +
                   "- Soto Banjar: sup ayam dengan bumbu khas Banjar, disajikan dengan nasi.\n" +
                   "- Ayam Cincane: ayam dimasak dengan rempah khas Kalimantan.\n" +
                   "- Ikan Asap Mahakam: ikan asap khas sungai Mahakam, disajikan dengan sambal dan nasi.\n" +
                   "- Kue Bingka: kue tradisional manis dari kelapa dan telur.\n" +
                   "Kuliner ini mencerminkan kekayaan alam, rempah lokal, dan tradisi kuliner masyarakat Kalimantan Timur.",
      image: "assets/img/budaya/kalimantan-timur/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Kalimantan Timur",
      description: "Musik tradisional Kalimantan Timur menggunakan alat musik seperti gong, gendang, suling, dan sape (kecapi Dayak). " +
                   "Musik ini mengiringi tarian, upacara adat, dan festival budaya, menampilkan harmoni ritmis dan melodi khas yang mencerminkan budaya Dayak dan Kutai.",
      image: "assets/img/budaya/kalimantan-timur/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Dayak & Kutai",
      description: "Bahasa daerah utama di Kalimantan Timur adalah bahasa Dayak dan Kutai, digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal. " +
                   "Bahasa ini menjadi identitas budaya penting bagi masyarakat Kalimantan Timur."
      // tidak perlu image
    }
  }
}
islandsData["kepulauan-riau"] = {
  name: "Kepulauan Riau",
  subtitle: "Provinsi kepulauan di Laut China Selatan yang kaya budaya Melayu, sejarah pelabuhan, dan tradisi maritim",
  heroImage: "assets/img/budaya/kepulauan-riau/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Melayu Riau",
      description: "Rumah adat Melayu di Kepulauan Riau biasanya berbentuk panggung dengan atap pelana tinggi, terbuat dari kayu ulin atau kayu keras lainnya. " +
                   "Rumah ini memiliki teras luas di depan dan ornamen ukiran khas Melayu yang indah di tiang serta dindingnya. " +
                   "Struktur panggung membantu ventilasi dan melindungi dari banjir. Rumah Melayu Riau berfungsi sebagai tempat tinggal keluarga sekaligus ruang sosial dan pusat adat.",
      image: "assets/img/budaya/kepulauan-riau/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Melayu Riau",
      description: "Pakaian tradisional Melayu Riau menampilkan keindahan, kesopanan, dan simbol status sosial. " +
                   "Pria memakai baju kurung panjang dengan sarung dan tanjak, sedangkan wanita memakai kebaya panjang dengan kain songket dan selendang. " +
                   "Pakaian ini digunakan dalam pernikahan, upacara adat, dan festival budaya, menunjukkan identitas Melayu Riau yang kaya tradisi.",
      image: "assets/img/budaya/kepulauan-riau/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Kepulauan Riau",
      description: "Tarian khas Riau meliputi Tari Zapin, Tari Joget Melayu, dan Tari Rodat. " +
                   "Tarian ini biasanya diiringi musik gambus dan gendang, menampilkan gerakan ritmis, anggun, dan penuh ekspresi. " +
                   "Tarian digunakan dalam festival budaya, perayaan pernikahan, dan acara adat untuk menyambut tamu atau merayakan tradisi lokal.",
      image: "assets/img/budaya/kepulauan-riau/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Kepulauan Riau",
      description: "Kuliner Riau terkenal dengan cita rasa Melayu dan laut:\n" +
                   "- Ikan Bakar Bumbu Riau: ikan segar dibakar dengan rempah khas Melayu.\n" +
                   "- Lakse Riau: mie berkuah santan dengan ikan atau udang.\n" +
                   "- Nasi Dagang: nasi dikukus dengan santan, disajikan dengan ikan atau gulai.\n" +
                   "- Kue Bingka: kue manis dari tepung beras dan santan.\n" +
                   "Kuliner ini mencerminkan kekayaan laut, rempah lokal, dan tradisi masyarakat Melayu di Kepulauan Riau.",
      image: "assets/img/budaya/kepulauan-riau/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Kepulauan Riau",
      description: "Musik tradisional Riau menggunakan alat musik gambus, gendang, kompang, dan seruling. " +
                   "Musik ini mengiringi tarian Zapin, perayaan adat, dan pertunjukan budaya, terdengar harmonis, ritmis, dan penuh semangat Melayu Riau.",
      image: "assets/img/budaya/kepulauan-riau/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Melayu Riau",
      description: "Bahasa Melayu Riau adalah bahasa sehari-hari di Kepulauan Riau, digunakan dalam komunikasi sosial, kesenian, dan pendidikan adat. " +
                   "Bahasa ini menjadi identitas budaya Melayu dan simbol kearifan lokal masyarakat Kepulauan Riau."
      // tidak perlu image
    }
  }
}
islandsData["kalimantan-selatan"] = {
  name: "Kalimantan Selatan",
  subtitle: "Provinsi di Pulau Kalimantan dengan budaya Banjar yang kaya, tradisi sungai Barito, dan kerajinan khas",
  heroImage: "assets/img/budaya/kalimantan-selatan/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Kalimantan Selatan (Rumah Banjar)",
      description: "Rumah adat Kalimantan Selatan dikenal sebagai Rumah Banjar. Rumah ini berbentuk panggung dengan atap pelana tinggi dan terbuat dari kayu ulin. " +
                   "Rumah Banjar memiliki ukiran kayu khas di tiang dan dinding, serta teras yang luas untuk kegiatan sosial dan upacara adat. " +
                   "Struktur panggung membantu ventilasi dan melindungi dari banjir sungai. Rumah Banjar menjadi simbol identitas budaya masyarakat Banjar.",
      image: "assets/img/budaya/kalimantan-selatan/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Kalimantan Selatan",
      description: "Pakaian tradisional Banjar digunakan dalam pernikahan, upacara adat, dan festival budaya. " +
                   "Pria memakai baju kurung dengan songket dan tanjak, sedangkan wanita memakai baju kurung panjang berhias songket dengan manik-manik. " +
                   "Pakaian ini menampilkan keindahan, kesopanan, dan identitas budaya Banjar yang khas Kalimantan Selatan.",
      image: "assets/img/budaya/kalimantan-selatan/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Kalimantan Selatan",
      description: "Tarian khas Kalimantan Selatan meliputi Tari Radap dan Tari Baksa Kembang. " +
                   "Tarian ini menampilkan gerakan anggun, ritmis, dan simbolik, biasanya diiringi musik tradisional Banjar. " +
                   "Tarian dipertunjukkan dalam festival budaya, upacara adat, dan penyambutan tamu, mencerminkan filosofi hidup dan kearifan lokal masyarakat Banjar.",
      image: "assets/img/budaya/kalimantan-selatan/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Kalimantan Selatan",
      description: "Kuliner Banjar terkenal dengan rasa gurih dan manis:\n" +
                   "- Soto Banjar: sup ayam berkuah bumbu khas Banjar, disajikan dengan nasi atau ketupat.\n" +
                   "- Ketupat Kandangan: ketupat dengan lauk ikan haruan kuah santan pedas.\n" +
                   "- Amparan Tatak: kue tradisional berbahan tepung dan kelapa.\n" +
                   "- Bingka Barandam: kue manis khas Banjar yang lembut.\n" +
                   "Kuliner ini mencerminkan kekayaan alam sungai, rempah, dan tradisi masyarakat Kalimantan Selatan.",
      image: "assets/img/budaya/kalimantan-selatan/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Kalimantan Selatan",
      description: "Musik tradisional Kalimantan Selatan menggunakan alat musik gendang, gong, seruling, dan rebab. " +
                   "Musik ini mengiringi tarian, festival budaya, dan upacara adat, terdengar harmonis, ritmis, dan penuh semangat Banjar.",
      image: "assets/img/budaya/kalimantan-selatan/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Banjar",
      description: "Bahasa Banjar adalah bahasa sehari-hari di Kalimantan Selatan, digunakan dalam komunikasi sosial, kesenian, dan upacara adat. " +
                   "Bahasa ini menjadi identitas budaya penting masyarakat Banjar."
      // tidak perlu image
    }
  }
}
islandsData["kalimantan-tengah"] = {
  name: "Kalimantan Tengah",
  subtitle: "Provinsi di Pulau Kalimantan yang kaya budaya Dayak, tradisi sungai, dan hutan tropis yang lebat",
  heroImage: "assets/img/budaya/kalimantan-tengah/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Kalimantan Tengah (Rumah Betang Dayak)",
      description: "Rumah Betang adalah rumah tradisional Dayak yang panjang dan berbentuk panggung, bisa menampung beberapa keluarga. " +
                   "Rumah terbuat dari kayu ulin atau kayu keras lainnya dengan atap pelana tinggi dan ornamen ukiran khas di tiang serta dinding. " +
                   "Ruang terbuka di bawah rumah digunakan untuk menyimpan hewan atau kegiatan sosial, sekaligus melindungi rumah dari banjir sungai. " +
                   "Rumah Betang menjadi simbol persatuan keluarga dan identitas budaya masyarakat Dayak Kalimantan Tengah.",
      image: "assets/img/budaya/kalimantan-tengah/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Kalimantan Tengah",
      description: "Pakaian tradisional Dayak Kalimantan Tengah menampilkan motif manik-manik dan kain songket. " +
                   "Pria memakai baju khas dengan hiasan bulu, celana panjang, dan penutup kepala, sedangkan wanita memakai baju panjang berhias manik-manik dan songket berwarna cerah. " +
                   "Pakaian digunakan dalam pernikahan, festival budaya, dan upacara adat, menampilkan identitas dan estetika masyarakat Dayak.",
      image: "assets/img/budaya/kalimantan-tengah/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Kalimantan Tengah",
      description: "Tarian khas Kalimantan Tengah termasuk Tari Mandau dan Tari Hudoq. " +
                   "Tarian ini menampilkan gerakan ritmis, simbolik, dan energik, biasanya diiringi musik tradisional Dayak. " +
                   "Tarian digunakan dalam festival budaya, ritual adat, dan penyambutan tamu penting, mencerminkan kearifan lokal dan filosofi hidup masyarakat Dayak.",
      image: "assets/img/budaya/kalimantan-tengah/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Kalimantan Tengah",
      description: "Kuliner Kalimantan Tengah terkenal dengan cita rasa alami dan gurih:\n" +
                   "- Ikan Tempoyak: ikan dimasak dengan durian fermentasi, khas Dayak.\n" +
                   "- Soto Banjar: sup ayam dengan bumbu khas Melayu-Dayak.\n" +
                   "- Kue Keranjang Dayak: kue tradisional dari tepung beras dan gula.\n" +
                   "- Ayam Pansuh: ayam dimasak dalam bambu dengan rempah khas.\n" +
                   "Kuliner ini mencerminkan kekayaan alam sungai, hutan tropis, dan tradisi kuliner masyarakat Kalimantan Tengah.",
      image: "assets/img/budaya/kalimantan-tengah/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Kalimantan Tengah",
      description: "Musik tradisional Dayak Kalimantan Tengah menggunakan alat musik gong, gendang, seruling, dan sape (kecapi Dayak). " +
                   "Musik ini mengiringi tarian, festival budaya, dan ritual adat, menciptakan harmoni ritmis dan melodi khas budaya Dayak.",
      image: "assets/img/budaya/kalimantan-tengah/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Dayak",
      description: "Bahasa Dayak adalah bahasa utama masyarakat Kalimantan Tengah, digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal. " +
                   "Bahasa ini menjadi identitas budaya yang sangat penting bagi masyarakat Dayak Kalimantan Tengah."
      // tidak perlu image
    }
  }
}
islandsData["kalimantan-utara"] = {
  name: "Kalimantan Utara",
  subtitle: "Provinsi paling utara di Pulau Kalimantan yang kaya budaya Tidung, Dayak, dan tradisi pesisir serta sungai",
  heroImage: "assets/img/budaya/kalimantan-utara/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Kalimantan Utara (Rumah Lamin & Rumah Tidung)",
      description: "Rumah tradisional Kalimantan Utara mencakup Rumah Lamin khas Dayak dan rumah tradisional Tidung. " +
                   "Rumah Lamin adalah rumah panggung panjang, terbuat dari kayu ulin, dengan atap tinggi dan ruang terbuka di bawah rumah untuk aktivitas sosial dan penyimpanan. " +
                   "Rumah Tidung lebih sederhana, namun tetap panggung, dilengkapi ukiran khas dan teras luas. " +
                   "Struktur panggung melindungi dari banjir sungai dan memaksimalkan ventilasi, sesuai dengan iklim tropis pesisir Kalimantan Utara.",
      image: "assets/img/budaya/kalimantan-utara/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Kalimantan Utara",
      description: "Pakaian tradisional Kalimantan Utara menampilkan motif manik-manik khas Dayak dan Tidung. " +
                   "Pria memakai baju panjang berhias manik-manik dan celana panjang, sedangkan wanita memakai baju panjang dengan hiasan manik-manik dan songket. " +
                   "Pakaian ini digunakan dalam pernikahan, upacara adat, dan festival budaya, mencerminkan identitas dan estetika budaya lokal Kalimantan Utara.",
      image: "assets/img/budaya/kalimantan-utara/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Kalimantan Utara",
      description: "Tarian khas Kalimantan Utara meliputi Tari Mandau dan Tari Tidung. " +
                   "Tarian menampilkan gerakan simbolik, ritmis, dan dinamis, biasanya diiringi musik tradisional. " +
                   "Tarian ini dipertunjukkan dalam festival budaya, perayaan adat, dan penyambutan tamu, mencerminkan filosofi hidup dan kearifan lokal masyarakat Dayak dan Tidung.",
      image: "assets/img/budaya/kalimantan-utara/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Kalimantan Utara",
      description: "Kuliner Kalimantan Utara terkenal dengan cita rasa segar dari hasil laut dan sungai:\n" +
                   "- Ikan Asap Pesisir: ikan asap khas pesisir Kalimantan Utara.\n" +
                   "- Soto Tidung: sup ayam atau ikan dengan bumbu khas Tidung.\n" +
                   "- Nasi Kuning Banjar-Utara: nasi kuning dimasak dengan santan dan rempah lokal.\n" +
                   "- Kue Tradisional: berbagai kue manis lokal yang dibuat dari tepung dan kelapa.\n" +
                   "Kuliner ini menunjukkan perpaduan budaya pesisir, sungai, dan tradisi kuliner masyarakat Kalimantan Utara.",
      image: "assets/img/budaya/kalimantan-utara/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Kalimantan Utara",
      description: "Musik tradisional Kalimantan Utara menggunakan alat musik gong, gendang, sape (kecapi Dayak), dan suling. " +
                   "Musik ini mengiringi tarian, festival budaya, dan upacara adat, menciptakan harmoni ritmis dan melodi khas budaya Dayak dan Tidung di wilayah Kalimantan Utara.",
      image: "assets/img/budaya/kalimantan-utara/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Dayak & Tidung",
      description: "Bahasa daerah utama di Kalimantan Utara adalah bahasa Dayak dan Tidung, digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal. " +
                   "Bahasa ini menjadi identitas budaya penting masyarakat Kalimantan Utara."
      // tidak perlu image
    }
  }
}
islandsData["lampung"] = {
  name: "Lampung",
  subtitle: "Provinsi di ujung selatan Pulau Sumatera yang kaya budaya Lampung, suku adat, dan tradisi maritim",
  heroImage: "assets/img/budaya/lampung/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Lampung (Nuwo Sesat)",
      description: "Rumah adat Lampung dikenal dengan nama Nuwo Sesat. Rumah ini berbentuk panggung dengan atap pelana tinggi dan terbuat dari kayu ulin atau kayu keras lainnya. " +
                   "Terdapat ornamen ukiran khas suku Lampung di tiang dan dinding, serta teras luas di depan rumah untuk kegiatan sosial dan upacara adat. " +
                   "Struktur panggung membantu ventilasi dan melindungi dari banjir, sesuai dengan iklim tropis di pesisir Lampung. Rumah Nuwo Sesat menjadi simbol identitas budaya suku Lampung.",
      image: "assets/img/budaya/lampung/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Lampung",
      description: "Pakaian tradisional Lampung menampilkan songket khas Lampung dengan motif khas dan warna cerah. " +
                   "Pria memakai baju kurung, celana panjang, dan penutup kepala, sedangkan wanita memakai kebaya panjang berhias songket dan selendang. " +
                   "Pakaian ini digunakan dalam pernikahan, upacara adat, dan festival budaya, menampilkan identitas, kesopanan, dan keindahan budaya Lampung.",
      image: "assets/img/budaya/lampung/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Lampung",
      description: "Tarian khas Lampung termasuk Tari Sigeh Pengunten dan Tari Seblang. " +
                   "Tarian ini menampilkan gerakan anggun, ritmis, dan simbolik, biasanya diiringi musik tradisional Lampung seperti gendang dan gong. " +
                   "Tarian digunakan dalam festival budaya, upacara adat, dan penyambutan tamu, mencerminkan filosofi hidup dan kearifan lokal masyarakat Lampung.",
      image: "assets/img/budaya/lampung/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Lampung",
      description: "Kuliner Lampung terkenal dengan rasa pedas dan gurih:\n" +
                   "- Seruit: ikan bakar atau goreng disajikan dengan sambal khas Lampung.\n" +
                   "- Tempoyak: durian fermentasi dimasak dengan ikan atau sayuran.\n" +
                   "- Gulai Taboh: gulai ikan dengan bumbu rempah.\n" +
                   "- Keripik Pisang dan Ubi: camilan khas Lampung.\n" +
                   "Kuliner ini mencerminkan kekayaan laut, rempah lokal, dan tradisi masyarakat Lampung.",
      image: "assets/img/budaya/lampung/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Lampung",
      description: "Musik tradisional Lampung menggunakan alat musik gendang, gong, dan seruling. " +
                   "Musik ini mengiringi tarian, festival budaya, dan upacara adat, terdengar ritmis, harmonis, dan menampilkan karakter budaya Lampung.",
      image: "assets/img/budaya/lampung/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Lampung",
      description: "Bahasa Lampung adalah bahasa daerah utama yang digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan adat. " +
                   "Bahasa ini menjadi identitas budaya penting bagi masyarakat Lampung."
      // tidak perlu image
    }
  }
}
islandsData["maluku"] = {
  name: "Maluku",
  subtitle: "Provinsi kepulauan di timur Indonesia yang kaya sejarah, rempah-rempah, dan budaya Ambon dan Maluku Utara",
  heroImage: "assets/img/budaya/maluku/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Maluku",
      description: "Rumah adat Maluku biasanya berbentuk panggung dengan atap tinggi dan terbuat dari kayu lokal. " +
                   "Rumah ini memiliki ornamen ukiran tradisional di tiang dan dinding, serta teras luas untuk kegiatan sosial dan ritual adat. " +
                   "Struktur panggung membantu ventilasi udara dan melindungi dari banjir di daerah pesisir. Rumah adat Maluku menjadi simbol identitas budaya masyarakat Maluku dan pengaruh kolonial yang mewarnai sejarahnya.",
      image: "assets/img/budaya/maluku/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Maluku",
      description: "Pakaian tradisional Maluku menampilkan kain tenun, songket, dan aksesori khas Ambon. " +
                   "Pria memakai baju kurung panjang dengan ikat kepala dan sarung, sedangkan wanita memakai kebaya panjang atau kemben berhias perhiasan manik-manik dan kain songket. " +
                   "Pakaian digunakan dalam pernikahan, upacara adat, dan festival budaya, menampilkan identitas dan estetika masyarakat Maluku.",
      image: "assets/img/budaya/maluku/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Maluku",
      description: "Tarian khas Maluku termasuk Tari Cakalele dan Tari Sawat. " +
                   "Tarian ini menampilkan gerakan energik, simbolik, dan ritmis, biasanya diiringi musik tradisional seperti tifa dan gendang. " +
                   "Tarian dipertunjukkan dalam festival budaya, penyambutan tamu, dan upacara adat, mencerminkan filosofi hidup, keberanian, dan kearifan lokal masyarakat Maluku.",
      image: "assets/img/budaya/maluku/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Maluku",
      description: "Kuliner Maluku terkenal dengan rasa pedas, gurih, dan aroma rempah yang kuat:\n" +
                   "- Ikan Kuah Pala: ikan dimasak dengan bumbu rempah pala khas Maluku.\n" +
                   "- Papeda: bubur sagu khas yang biasanya dimakan dengan ikan kuah kuning.\n" +
                   "- Ikan Bakar Rica: ikan bakar dengan sambal pedas khas Maluku.\n" +
                   "- Kue Bagea: kue kering khas Ambon yang manis dan renyah.\n" +
                   "Kuliner ini mencerminkan kekayaan laut, rempah-rempah lokal, dan tradisi kuliner masyarakat Maluku.",
      image: "assets/img/budaya/maluku/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Maluku",
      description: "Musik tradisional Maluku menggunakan alat musik tifa, gong, dan seruling. " +
                   "Musik ini mengiringi tarian, festival budaya, dan upacara adat, terdengar ritmis, harmonis, dan menampilkan karakter budaya Maluku yang unik dan beragam.",
      image: "assets/img/budaya/maluku/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Maluku",
      description: "Bahasa daerah utama di Maluku meliputi bahasa Ambon, bahasa Kei, dan bahasa Ternate. " +
                   "Bahasa ini digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal, menjadi identitas budaya penting masyarakat Maluku."
      // tidak perlu image
    }
  }
}
islandsData["maluku-utara"] = {
  name: "Maluku Utara",
  subtitle: "Provinsi kepulauan di utara Maluku yang kaya tradisi Ternate, Tidore, dan sejarah rempah-rempah",
  heroImage: "assets/img/budaya/maluku-utara/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Maluku Utara",
      description: "Rumah adat Maluku Utara, termasuk rumah Ternate dan Tidore, berbentuk panggung dengan atap tinggi dan terbuat dari kayu lokal. " +
                   "Rumah memiliki ukiran khas di tiang dan dinding serta teras luas untuk kegiatan sosial dan ritual adat. " +
                   "Struktur panggung melindungi dari banjir dan meningkatkan sirkulasi udara, sesuai dengan iklim tropis pesisir. Rumah adat ini menjadi simbol identitas budaya dan sejarah kerajaan Maluku Utara.",
      image: "assets/img/budaya/maluku-utara/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Maluku Utara",
      description: "Pakaian tradisional Maluku Utara menampilkan kain tenun, songket, dan aksesori khas Ternate-Tidore. " +
                   "Pria memakai baju kurung panjang, celana panjang, dan ikat kepala, sedangkan wanita memakai kebaya panjang atau kemben berhias manik-manik dan kain songket. " +
                   "Pakaian ini digunakan dalam pernikahan, upacara adat, dan festival budaya, menampilkan identitas dan estetika masyarakat Maluku Utara.",
      image: "assets/img/budaya/maluku-utara/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Maluku Utara",
      description: "Tarian khas Maluku Utara termasuk Tari Cakalele dan Tari Maengket. " +
                   "Tarian menampilkan gerakan energik, simbolik, dan ritmis, biasanya diiringi musik tradisional seperti tifa, gendang, dan seruling. " +
                   "Tarian dipertunjukkan dalam festival budaya, upacara adat, dan penyambutan tamu, mencerminkan keberanian, filosofi hidup, dan kearifan lokal masyarakat Maluku Utara.",
      image: "assets/img/budaya/maluku-utara/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Maluku Utara",
      description: "Kuliner Maluku Utara terkenal dengan rasa segar dan rempah khas:\n" +
                   "- Ikan Kuah Pala: ikan dimasak dengan bumbu pala khas Maluku Utara.\n" +
                   "- Papeda: bubur sagu yang biasa disantap dengan ikan kuah kuning.\n" +
                   "- Ikan Bakar Rica: ikan bakar dengan sambal pedas khas Ternate-Tidore.\n" +
                   "- Kue Tradisional: berbagai kue manis lokal yang terbuat dari tepung dan kelapa.\n" +
                   "Kuliner ini menunjukkan kekayaan laut, rempah-rempah, dan tradisi kuliner masyarakat Maluku Utara.",
      image: "assets/img/budaya/maluku-utara/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Maluku Utara",
      description: "Musik tradisional Maluku Utara menggunakan alat musik tifa, gong, dan seruling. " +
                   "Musik ini mengiringi tarian, festival budaya, dan upacara adat, terdengar ritmis, harmonis, dan menampilkan karakter budaya Ternate dan Tidore yang unik.",
      image: "assets/img/budaya/maluku-utara/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Maluku Utara",
      description: "Bahasa daerah utama di Maluku Utara meliputi bahasa Ternate, Tidore, dan Tobelo. " +
                   "Bahasa ini digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal, menjadi identitas budaya penting masyarakat Maluku Utara."
      // tidak perlu image
    }
  }
}
islandsData["ntb"] = {
  name: "Nusa Tenggara Barat (NTB)",
  subtitle: "Provinsi di Pulau Lombok dan Sumbawa yang kaya tradisi Sasak, budaya Bima, dan kerajinan lokal",
  heroImage: "assets/img/budaya/ntb/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat NTB (Sasak dan Bima)",
      description: "Rumah adat NTB mencakup rumah tradisional Sasak di Lombok dan rumah tradisional Bima di Sumbawa. " +
                   "Rumah Sasak berbentuk panggung dengan atap tinggi berbahan alang-alang atau ijuk, dinding dari anyaman bambu, dan struktur sederhana tapi fungsional. " +
                   "Rumah Bima lebih besar dengan kayu kokoh dan atap pelana, menampilkan ornamen khas suku Bima. " +
                   "Struktur panggung membantu ventilasi udara dan melindungi dari banjir, sesuai dengan iklim tropis NTB.",
      image: "assets/img/budaya/ntb/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat NTB",
      description: "Pakaian tradisional NTB menampilkan songket Lombok, tenun Sumbawa, dan aksesoris khas suku Sasak dan Bima. " +
                   "Pria memakai baju kurung panjang, celana, dan ikat kepala, sedangkan wanita memakai kebaya panjang atau kemben berhias perhiasan manik-manik dan kain songket. " +
                   "Pakaian ini digunakan dalam pernikahan, upacara adat, dan festival budaya, menampilkan identitas, kesopanan, dan estetika masyarakat NTB.",
      image: "assets/img/budaya/ntb/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional NTB",
      description: "Tarian khas NTB termasuk Tari Gandrung Lombok dan Tari Perang Bima. " +
                   "Tarian menampilkan gerakan anggun, ritmis, atau dinamis sesuai tradisi masing-masing daerah, biasanya diiringi musik gendang, gong, dan seruling. " +
                   "Tarian dipertunjukkan dalam festival budaya, upacara adat, dan penyambutan tamu, mencerminkan filosofi hidup dan kearifan lokal masyarakat NTB.",
      image: "assets/img/budaya/ntb/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas NTB",
      description: "Kuliner NTB terkenal dengan rasa pedas, gurih, dan bahan lokal:\n" +
                   "- Ayam Taliwang: ayam bakar atau goreng dengan bumbu pedas khas Lombok.\n" +
                   "- Plecing Kangkung: sayuran rebus dengan sambal kacang pedas manis.\n" +
                   "- Sate Rembiga: sate daging sapi berbumbu pedas Lombok.\n" +
                   "- Se'i Sapi Sumbawa: daging sapi asap khas Sumbawa.\n" +
                   "Kuliner ini mencerminkan kekayaan rempah lokal, tradisi kuliner, dan budaya masyarakat NTB.",
      image: "assets/img/budaya/ntb/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional NTB",
      description: "Musik tradisional NTB menggunakan alat musik gendang, gong, seruling, dan sasando (beberapa wilayah). " +
                   "Musik mengiringi tarian, festival budaya, dan upacara adat, terdengar ritmis dan harmonis, menampilkan karakter budaya Sasak, Bima, dan Sumbawa.",
      image: "assets/img/budaya/ntb/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Sasak & Bima",
      description: "Bahasa daerah utama di NTB meliputi bahasa Sasak (Lombok) dan bahasa Bima (Sumbawa). " +
                   "Bahasa ini digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal, menjadi identitas budaya penting masyarakat NTB."
      // tidak perlu image
    }
  }
}
islandsData["ntt"] = {
  name: "Nusa Tenggara Timur (NTT)",
  subtitle: "Provinsi di kepulauan timur Indonesia yang kaya budaya, tradisi, dan adat suku-suku unik seperti Sumba, Flores, dan Timor",
  heroImage: "assets/img/budaya/ntt/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat NTT",
      description: "Rumah adat NTT bervariasi tergantung suku, seperti rumah adat Sumba (Uma Mbatangu), Flores, dan Timor. " +
                   "Rumah Sumba berbentuk tinggi dan panggung dengan atap tinggi menjulang, dinding dari anyaman bambu, serta dihias motif tenun tradisional. " +
                   "Rumah adat ini digunakan untuk kegiatan sosial, ritual adat, dan simbol status sosial. Struktur panggung melindungi dari banjir dan meningkatkan ventilasi udara, sesuai iklim tropis pulau-pulau NTT.",
      image: "assets/img/budaya/ntt/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat NTT",
      description: "Pakaian tradisional NTT menampilkan tenun ikat khas suku Sumba, Flores, dan Timor. " +
                   "Pria memakai baju kurung panjang dan kain tenun, sementara wanita memakai kebaya panjang dengan kain tenun yang dihias manik-manik dan motif khas. " +
                   "Pakaian digunakan dalam pernikahan, upacara adat, dan festival budaya, menampilkan identitas, status sosial, dan estetika masyarakat NTT.",
      image: "assets/img/budaya/ntt/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional NTT",
      description: "Tarian khas NTT termasuk Tari Caci (Flores), Tari Perang Sumba, dan Tari Paduppa Timor. " +
                   "Tarian menampilkan gerakan energik, simbolik, dan ritmis, biasanya diiringi musik tradisional seperti gong, gendang, dan suling bambu. " +
                   "Tarian dipertunjukkan dalam festival budaya, ritual adat, dan penyambutan tamu, mencerminkan keberanian, solidaritas, dan kearifan lokal masyarakat NTT.",
      image: "assets/img/budaya/ntt/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas NTT",
      description: "Kuliner NTT terkenal dengan bahan lokal dan cita rasa khas:\n" +
                   "- Se’i Sapi: daging asap khas Kupang.\n" +
                   "- Jagung Bose: olahan jagung dan kacang khas Flores.\n" +
                   "- Ikan Bakar dan Pepes Ikan: khas pesisir NTT.\n" +
                   "- Nasi Kuning dan Kue Tradisional: sering disajikan dalam upacara adat.\n" +
                   "Kuliner ini mencerminkan kekayaan laut, pertanian lokal, dan tradisi kuliner masyarakat NTT.",
      image: "assets/img/budaya/ntt/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional NTT",
      description: "Musik tradisional NTT menggunakan alat musik gong, gendang, suling bambu, dan sasando (di beberapa wilayah). " +
                   "Musik mengiringi tarian, festival budaya, dan upacara adat, terdengar ritmis dan harmonis, menampilkan karakter budaya Sumba, Flores, dan Timor.",
      image: "assets/img/budaya/ntt/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Daerah NTT",
      description: "Bahasa daerah utama di NTT sangat beragam, termasuk bahasa Sumba, Flores, Timor, dan banyak dialek lokal lainnya. " +
                   "Bahasa ini digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal, menjadi identitas budaya penting masyarakat NTT."
      // tidak perlu image
    }
  }
}
islandsData["papua"] = {
  name: "Papua",
  subtitle: "Provinsi paling timur Indonesia yang kaya budaya suku asli, tradisi, seni ukir, dan alam tropis yang menakjubkan",
  heroImage: "assets/img/budaya/papua/hero.jpg",
  items: {
    rumah: {
      title: "Honai dan Rumah Adat Papua",
      description: "Rumah adat Papua, terutama suku Dani di pegunungan, dikenal dengan Honai, rumah bundar berbentuk seperti jamur, beratap jerami dan dinding kayu. " +
                   "Honai digunakan untuk tidur, pertemuan adat, dan ritual spiritual. Di wilayah pesisir, rumah panggung dengan atap tinggi juga umum, melindungi dari banjir dan meningkatkan ventilasi. " +
                   "Rumah adat Papua menjadi simbol identitas, kearifan lokal, dan filosofi hidup masyarakat pegunungan dan pesisir Papua.",
      image: "assets/img/budaya/papua/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Papua",
      description: "Pakaian tradisional Papua menampilkan cawat, hiasan bulu burung, kalung manik-manik, dan aksesoris alam seperti daun atau kulit kayu. " +
                   "Pakaian ini digunakan dalam upacara adat, tarian perang, ritual spiritual, dan festival budaya. " +
                   "Pakaian adat Papua menonjolkan kreativitas, keberanian, dan identitas suku-suku asli, seperti Dani, Asmat, dan Amungme.",
      image: "assets/img/budaya/papua/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Papua",
      description: "Tarian khas Papua meliputi Tari Perang, Tari Cakalele (dari Maluku tapi juga dipertunjukkan di pesisir), dan tarian perang suku Dani. " +
                   "Tarian menampilkan gerakan dinamis, ritmis, dan simbolik, biasanya diiringi musik tradisional seperti tifa dan gendang. " +
                   "Tarian dipertunjukkan dalam festival budaya, upacara adat, dan penyambutan tamu, mencerminkan keberanian, solidaritas, dan filosofi hidup masyarakat Papua.",
      image: "assets/img/budaya/papua/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Papua",
      description: "Kuliner Papua menggunakan bahan lokal seperti sagu, ikan, dan umbi-umbian:\n" +
                   "- Papeda: bubur sagu khas Papua, biasanya disantap dengan ikan kuah kuning.\n" +
                   "- Ikan Bakar dan Ulat Sagu: makanan tradisional pesisir dan pedalaman.\n" +
                   "- Kue dan makanan lokal berbahan ubi dan kelapa.\n" +
                   "Kuliner Papua mencerminkan sumber daya alam lokal, tradisi kuliner suku asli, dan adaptasi lingkungan tropis Papua.",
      image: "assets/img/budaya/papua/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Papua",
      description: "Musik tradisional Papua menggunakan alat musik tifa, gong, dan seruling bambu. " +
                   "Musik ini mengiringi tarian, festival budaya, dan upacara adat, terdengar ritmis, energik, dan menampilkan karakter budaya suku-suku asli Papua.",
      image: "assets/img/budaya/papua/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Daerah Papua",
      description: "Papua memiliki ratusan bahasa daerah, termasuk Dani, Asmat, Amungme, dan bahasa pesisir lainnya. " +
                   "Bahasa ini digunakan dalam komunikasi sehari-hari, kesenian, ritual adat, dan pendidikan lokal, menjadi identitas budaya penting bagi masyarakat Papua."
      // tidak perlu image
    }
  }
}
islandsData["papua-barat"] = {
  name: "Papua Barat",
  subtitle: "Provinsi barat Pulau Papua yang kaya tradisi suku Arfak, Manokwari, dan Raja Ampat dengan keindahan alam tropis",
  heroImage: "assets/img/budaya/papua-barat/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Papua Barat",
      description: "Rumah adat Papua Barat, terutama suku Arfak dan Manokwari, berbentuk panggung tinggi dengan atap jerami atau daun sagu, dinding kayu atau anyaman bambu. " +
                   "Rumah ini digunakan untuk tidur, pertemuan adat, dan ritual budaya. Struktur panggung melindungi dari banjir dan memudahkan ventilasi udara, sesuai iklim tropis pesisir dan pegunungan. " +
                   "Rumah adat Papua Barat menjadi simbol identitas, sejarah, dan kearifan lokal masyarakat suku asli.",
      image: "assets/img/budaya/papua-barat/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Papua Barat",
      description: "Pakaian tradisional Papua Barat menampilkan cawat, hiasan bulu burung kasuari, manik-manik, dan aksesoris dari bahan alam. " +
                   "Pria dan wanita menggunakan pakaian ini dalam upacara adat, tarian perang, ritual spiritual, dan festival budaya. " +
                   "Pakaian adat ini menonjolkan kreativitas, keberanian, dan identitas budaya suku Arfak, Manokwari, dan Raja Ampat.",
      image: "assets/img/budaya/papua-barat/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Papua Barat",
      description: "Tarian khas Papua Barat meliputi Tari Perang Arfak dan Tari Pergaulan Raja Ampat. " +
                   "Gerakan tarian energik, ritmis, dan simbolik, diiringi musik tifa, gong, dan seruling bambu. " +
                   "Tarian dipertunjukkan dalam festival budaya, upacara adat, dan penyambutan tamu, mencerminkan keberanian, solidaritas, dan filosofi hidup masyarakat Papua Barat.",
      image: "assets/img/budaya/papua-barat/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Papua Barat",
      description: "Kuliner Papua Barat menggunakan bahan lokal seperti sagu, ikan laut, dan umbi-umbian:\n" +
                   "- Papeda: bubur sagu yang biasa disantap dengan ikan kuah kuning.\n" +
                   "- Ikan Bakar dan Pepes Ikan: hidangan khas pesisir.\n" +
                   "- Kue Tradisional: berbahan kelapa, ubi, atau sagu.\n" +
                   "Kuliner ini mencerminkan kekayaan laut, hasil bumi lokal, dan tradisi kuliner masyarakat Papua Barat.",
      image: "assets/img/budaya/papua-barat/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Papua Barat",
      description: "Musik tradisional Papua Barat menggunakan alat musik tifa, gong, dan seruling bambu. " +
                   "Musik mengiringi tarian, festival budaya, dan upacara adat, terdengar ritmis dan harmonis, menampilkan karakter budaya suku-suku asli Papua Barat.",
      image: "assets/img/budaya/papua-barat/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Daerah Papua Barat",
      description: "Bahasa daerah utama di Papua Barat meliputi bahasa Arfak, Manokwari, dan dialek pesisir Raja Ampat. " +
                   "Bahasa ini digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal, menjadi identitas budaya penting bagi masyarakat Papua Barat."
      // tidak perlu image
    }
  }
}
islandsData["riau"] = {
  name: "Riau",
  subtitle: "Provinsi di Pulau Sumatra bagian tengah yang kaya budaya Melayu, seni ukir, dan kuliner khas",
  heroImage: "assets/img/budaya/riau/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Melayu Riau (Rumah Limas)",
      description: "Rumah adat Riau dikenal dengan Rumah Limas yang berbentuk panggung dengan atap bertingkat. " +
                   "Dibangun dari kayu ulin atau meranti, rumah ini dihias ukiran khas Melayu di tiang, dinding, dan jendela. " +
                   "Struktur panggung membantu ventilasi dan melindungi dari banjir. Rumah adat ini digunakan untuk kegiatan sosial, pertemuan adat, dan simbol status sosial masyarakat Melayu Riau.",
      image: "assets/img/budaya/riau/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Melayu Riau",
      description: "Pakaian tradisional Riau menampilkan baju kurung panjang, songket, dan aksesori khas Melayu seperti selendang dan tengkuluk. " +
                   "Pria memakai baju kurung dengan sarung dan tanjak, sedangkan wanita memakai baju kurung panjang dengan kain songket dan perhiasan manik-manik. " +
                   "Pakaian digunakan dalam pernikahan, upacara adat, dan festival budaya, menampilkan identitas, kesopanan, dan estetika budaya Melayu Riau.",
      image: "assets/img/budaya/riau/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Riau",
      description: "Tarian khas Riau termasuk Tari Zapin, Tari Cikalele, dan Tari Melayu klasik. " +
                   "Tarian menampilkan gerakan anggun, ritmis, dan harmonis, biasanya diiringi musik gambus, rebana, dan gong. " +
                   "Tarian dipertunjukkan dalam festival budaya, perayaan adat, dan penyambutan tamu, mencerminkan filosofi hidup, kesopanan, dan nilai sosial masyarakat Riau.",
      image: "assets/img/budaya/riau/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Riau",
      description: "Kuliner Riau terkenal dengan rasa manis, gurih, dan pedas:\n" +
                   "- Gulai Ikan Patin: ikan sungai dimasak dengan kuah santan pedas.\n" +
                   "- Soto Pekanbaru: soto khas dengan kuah kental, rempah, dan daging.\n" +
                   "- Nasi Lemak Riau: nasi gurih dengan sambal, ikan, dan telur.\n" +
                   "- Kerupuk Jering dan Lemang: hidangan pendamping.\n" +
                   "Kuliner ini mencerminkan kekayaan alam, rempah, dan tradisi kuliner Melayu Riau.",
      image: "assets/img/budaya/riau/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Riau",
      description: "Musik tradisional Riau menggunakan alat musik gambus, rebana, gong, dan seruling. " +
                   "Musik ini mengiringi tarian, perayaan adat, dan festival budaya, terdengar harmonis dan ritmis, menampilkan karakter budaya Melayu Riau.",
      image: "assets/img/budaya/riau/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Melayu Riau",
      description: "Bahasa Melayu Riau adalah bahasa daerah utama yang digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal. " +
                   "Bahasa ini menjadi identitas budaya penting bagi masyarakat Riau."
      // tidak perlu image
    }
  }
}
islandsData["sulawesi-utara"] = {
  name: "Sulawesi Utara",
  subtitle: "Provinsi di ujung utara Sulawesi yang kaya budaya Minahasa, tradisi lokal, kuliner khas, dan keindahan alam laut",
  heroImage: "assets/img/budaya/sulawesi-utara/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Minahasa",
      description: "Rumah adat Minahasa, dikenal dengan konsep panggung dan atap tinggi, menggunakan kayu lokal dan anyaman bambu untuk dinding. " +
                   "Rumah ini biasanya dihias dengan ukiran tradisional dan simbol-simbol adat. Struktur panggung melindungi dari banjir dan meningkatkan ventilasi, sesuai iklim tropis Sulawesi Utara. " +
                   "Rumah adat digunakan untuk tempat tinggal, pertemuan adat, dan upacara tradisional masyarakat Minahasa.",
      image: "assets/img/budaya/sulawesi-utara/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Minahasa",
      description: "Pakaian tradisional Minahasa menampilkan baju kurung atau jas adat lengkap dengan kain tenun dan aksesoris manik-manik. " +
                   "Pria memakai baju panjang dan ikat kepala, sedangkan wanita memakai kebaya panjang dan kain tenun. " +
                   "Pakaian ini digunakan dalam pernikahan, upacara adat, dan festival budaya, menampilkan identitas, kesopanan, dan keindahan budaya Minahasa.",
      image: "assets/img/budaya/sulawesi-utara/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Sulawesi Utara",
      description: "Tarian khas Sulawesi Utara termasuk Tari Maengket, Tari Kabasaran, dan Tari Tumbuak. " +
                   "Tarian menampilkan gerakan ritmis, energik, dan simbolik, diiringi musik tradisional gong, gendang, dan suling bambu. " +
                   "Tarian dipertunjukkan dalam festival budaya, perayaan adat, dan penyambutan tamu, mencerminkan keberanian, kebersamaan, dan filosofi hidup masyarakat Minahasa.",
      image: "assets/img/budaya/sulawesi-utara/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Sulawesi Utara",
      description: "Kuliner Sulawesi Utara terkenal dengan rasa pedas dan gurih:\n" +
                   "- Tinutuan (Bubur Manado): bubur sayur dengan jagung, labu, bayam, dan ikan.\n" +
                   "- Paniki: masakan daging kelelawar khas Minahasa.\n" +
                   "- Cakalang Fufu: ikan cakalang asap yang menjadi ikon kuliner.\n" +
                   "- Ayam Woku: ayam berbumbu rempah khas Manado.\n" +
                   "Kuliner ini mencerminkan kekayaan laut, pertanian lokal, dan tradisi kuliner Minahasa dan masyarakat Sulawesi Utara.",
      image: "assets/img/budaya/sulawesi-utara/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Sulawesi Utara",
      description: "Musik tradisional Sulawesi Utara menggunakan alat musik gong, gendang, kolintang, dan suling bambu. " +
                   "Musik mengiringi tarian, festival budaya, dan upacara adat, terdengar ritmis dan harmonis, menampilkan karakter budaya Minahasa dan suku-suku lokal lainnya.",
      image: "assets/img/budaya/sulawesi-utara/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Daerah Sulawesi Utara",
      description: "Bahasa daerah utama di Sulawesi Utara termasuk bahasa Minahasa, Tonsea, Mongondow, dan berbagai dialek lokal pesisir. " +
                   "Bahasa ini digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal, menjadi identitas budaya penting bagi masyarakat Sulawesi Utara."
      // tidak perlu image
    }
  }
}
islandsData["sumatera-barat"] = {
  name: "Sumatera Barat",
  subtitle: "Provinsi di Pulau Sumatera yang kaya budaya Minangkabau, rumah gadang, kuliner pedas, dan tradisi unik",
  heroImage: "assets/img/budaya/sumatera-barat/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Gadang Minangkabau",
      description: "Rumah adat Minangkabau dikenal dengan Rumah Gadang, rumah panggung yang beratap melengkung menyerupai tanduk kerbau. " +
                   "Dibangun dari kayu ulin atau meranti, rumah ini dihias ukiran khas Minang di dinding dan tiang. " +
                   "Rumah Gadang berfungsi sebagai tempat tinggal keluarga besar, pusat kegiatan sosial, dan simbol status adat. " +
                   "Struktur panggung dan atap melengkung mencerminkan filosofi adat dan keharmonisan alam masyarakat Minangkabau.",
      image: "assets/img/budaya/sumatera-barat/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Minangkabau",
      description: "Pakaian adat Minangkabau memiliki baju kurung panjang, songket khas, dan aksesoris seperti tengkuluk dan perhiasan emas. " +
                   "Pria memakai baju lengkap dengan tanjak, sedangkan wanita memakai baju panjang dan songket dengan hiasan manik-manik. " +
                   "Pakaian ini digunakan dalam pernikahan, upacara adat, dan pertunjukan seni, menampilkan kesopanan, keanggunan, dan identitas budaya Minangkabau.",
      image: "assets/img/budaya/sumatera-barat/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Minangkabau",
      description: "Tarian khas Sumatera Barat termasuk Tari Piring, Tari Indang, dan Tari Pasambahan. " +
                   "Tarian menampilkan gerakan ritmis, indah, dan simbolik, diiringi musik tradisional talempong, seruling, dan gendang. " +
                   "Tarian dipertunjukkan dalam perayaan adat, festival budaya, dan penyambutan tamu, mencerminkan filosofi hidup, kerukunan, dan identitas budaya Minangkabau.",
      image: "assets/img/budaya/sumatera-barat/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Sumatera Barat",
      description: "Sumatera Barat terkenal dengan masakan pedas dan kaya rempah:\n" +
                   "- Rendang: daging dimasak santan dan rempah hingga kering, masakan ikonik Minangkabau.\n" +
                   "- Sate Padang: sate daging dengan kuah kental berwarna kuning.\n" +
                   "- Gulai Ikan Patin: ikan sungai dimasak kuah santan pedas.\n" +
                   "- Dendeng Balado: daging sapi kering dengan sambal cabai.\n" +
                   "Kuliner ini menunjukkan kekayaan rempah, teknik masak, dan tradisi kuliner Minangkabau.",
      image: "assets/img/budaya/sumatera-barat/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Minangkabau",
      description: "Musik tradisional Sumatera Barat menggunakan alat musik talempong, saluang (seruling bambu), gendang, dan gong. " +
                   "Musik mengiringi tarian, perayaan adat, dan upacara adat, terdengar ritmis, harmonis, dan menampilkan karakter budaya Minangkabau.",
      image: "assets/img/budaya/sumatera-barat/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Minangkabau",
      description: "Bahasa Minangkabau adalah bahasa daerah utama di Sumatera Barat yang digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal. " +
                   "Bahasa ini menjadi identitas budaya penting bagi masyarakat Minangkabau."
      // tidak perlu image
    }
  }
}
islandsData["sulawesi-tenggara"] = {
  name: "Sulawesi Tenggara",
  subtitle: "Provinsi di Sulawesi bagian tenggara yang kaya budaya Tolaki, Buton, Muna, dan keindahan alam laut serta pegunungan",
  heroImage: "assets/img/budaya/sulawesi-tenggara/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Sulawesi Tenggara",
      description: "Rumah adat Sulawesi Tenggara berbeda antar suku, contohnya rumah adat Tolaki dan Buton. " +
                   "Umumnya berbentuk panggung dengan atap tinggi, dinding dari kayu atau anyaman bambu, dihias ukiran tradisional. " +
                   "Struktur panggung melindungi dari banjir dan meningkatkan sirkulasi udara tropis. Rumah adat ini digunakan sebagai tempat tinggal, pertemuan adat, dan upacara tradisional.",
      image: "assets/img/budaya/sulawesi-tenggara/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Sulawesi Tenggara",
      description: "Pakaian tradisional menampilkan kain tenun khas daerah, baju kurung panjang, songket, dan aksesoris manik-manik. " +
                   "Pria memakai baju lengkap dengan ikat kepala, sedangkan wanita memakai baju panjang dengan hiasan songket. " +
                   "Digunakan dalam pernikahan, upacara adat, dan festival budaya, menampilkan identitas, keanggunan, dan kesopanan masyarakat lokal.",
      image: "assets/img/budaya/sulawesi-tenggara/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Sulawesi Tenggara",
      description: "Tarian khas Sulawesi Tenggara termasuk Tari Peresean dan Tari Lulo. " +
                   "Gerakan tarian ritmis, energik, dan simbolik, biasanya diiringi musik gendang, gong, dan seruling bambu. " +
                   "Tarian dipertunjukkan dalam festival budaya, upacara adat, dan penyambutan tamu, mencerminkan nilai sosial, solidaritas, dan filosofi hidup masyarakat Sulawesi Tenggara.",
      image: "assets/img/budaya/sulawesi-tenggara/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Sulawesi Tenggara",
      description: "Kuliner Sulawesi Tenggara terkenal dengan rasa pedas dan gurih:\n" +
                   "- Coto Buton: sup daging dan rempah khas Buton.\n" +
                   "- Kaledo: sup kaki sapi pedas khas Sulawesi Tenggara.\n" +
                   "- Ikan Bakar dan Masakan Laut: hasil laut segar dengan bumbu lokal.\n" +
                   "- Nasi Kuning dan Kue Tradisional: hidangan khas upacara dan perayaan.\n" +
                   "Kuliner ini mencerminkan kekayaan hasil bumi, laut, dan tradisi kuliner masyarakat Sulawesi Tenggara.",
      image: "assets/img/budaya/sulawesi-tenggara/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Sulawesi Tenggara",
      description: "Musik tradisional menggunakan alat musik gendang, gong, kolintang, dan suling bambu. " +
                   "Musik mengiringi tarian, festival budaya, dan upacara adat, terdengar harmonis, ritmis, dan menampilkan karakter budaya Tolaki, Buton, dan Muna.",
      image: "assets/img/budaya/sulawesi-tenggara/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Daerah Sulawesi Tenggara",
      description: "Bahasa daerah utama di Sulawesi Tenggara meliputi bahasa Tolaki, Buton, Muna, dan berbagai dialek lokal pesisir. " +
                   "Bahasa ini digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal, menjadi identitas budaya penting bagi masyarakat Sulawesi Tenggara."
      // tidak perlu image
    }
  }
}
islandsData["sulawesi-selatan"] = {
  name: "Sulawesi Selatan",
  subtitle: "Provinsi di bagian selatan Sulawesi, pusat budaya Bugis, Makassar, dan Toraja dengan kuliner khas dan tradisi unik",
  heroImage: "assets/img/budaya/sulawesi-selatan/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Bugis dan Toraja",
      description: "Rumah adat Sulawesi Selatan berbeda antar suku. Rumah adat Bugis (Rumah Panggung) memiliki atap tinggi melengkung dan dinding kayu dengan ukiran khas. " +
                   "Rumah adat Toraja dikenal dengan Rumah Tongkonan, atap melengkung menyerupai perahu terbalik dan dihias ukiran simbolik. " +
                   "Rumah-rumah adat ini digunakan sebagai tempat tinggal, pusat kegiatan sosial, dan simbol status sosial masyarakat lokal.",
      image: "assets/img/budaya/sulawesi-selatan/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Sulawesi Selatan",
      description: "Pakaian adat Bugis, Makassar, dan Toraja menampilkan baju panjang, sarung, songket, dan aksesoris tradisional. " +
                   "Pria memakai baju lengkap dengan ikat kepala, sedangkan wanita memakai kebaya atau baju panjang dengan kain songket. " +
                   "Pakaian digunakan dalam pernikahan, upacara adat, dan festival budaya, menampilkan keanggunan, kesopanan, dan identitas budaya Sulawesi Selatan.",
      image: "assets/img/budaya/sulawesi-selatan/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Sulawesi Selatan",
      description: "Tarian khas Sulawesi Selatan termasuk Tari Pakarena, Tari Ma’gellu, dan Tari Ballo. " +
                   "Tarian menampilkan gerakan ritmis, anggun, dan simbolik, diiringi musik tradisional gong, gendang, dan seruling bambu. " +
                   "Tarian dipertunjukkan dalam festival budaya, perayaan adat, dan penyambutan tamu, mencerminkan filosofi hidup, solidaritas, dan nilai sosial masyarakat Bugis, Makassar, dan Toraja.",
      image: "assets/img/budaya/sulawesi-selatan/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Sulawesi Selatan",
      description: "Kuliner Sulawesi Selatan terkenal dengan rasa pedas, gurih, dan berbahan laut:\n" +
                   "- Coto Makassar: sup daging sapi kaya rempah.\n" +
                   "- Konro: iga sapi dimasak dengan rempah khas.\n" +
                   "- Pallubasa: sup daging atau jeroan dengan bumbu santan.\n" +
                   "- Kapurung: makanan dari sagu dengan sayur dan ikan laut.\n" +
                   "Kuliner ini mencerminkan kekayaan rempah, hasil laut, dan tradisi kuliner masyarakat Sulawesi Selatan.",
      image: "assets/img/budaya/sulawesi-selatan/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Sulawesi Selatan",
      description: "Musik tradisional Sulawesi Selatan menggunakan alat musik gong, gendang, kolintang, dan seruling bambu. " +
                   "Musik ini mengiringi tarian, festival budaya, dan upacara adat, terdengar harmonis, ritmis, dan menampilkan karakter budaya Bugis, Makassar, dan Toraja.",
      image: "assets/img/budaya/sulawesi-selatan/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Daerah Sulawesi Selatan",
      description: "Bahasa daerah utama di Sulawesi Selatan meliputi bahasa Bugis, Makassar, Toraja, dan berbagai dialek lokal pesisir. " +
                   "Bahasa ini digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal, menjadi identitas budaya penting bagi masyarakat Sulawesi Selatan."
      // tidak perlu image
    }
  }
}
islandsData["sulawesi-barat"] = {
  name: "Sulawesi Barat",
  subtitle: "Provinsi di bagian barat Sulawesi, dikenal dengan budaya Mandar, suku lokal yang kaya tradisi, rumah adat khas, dan kuliner laut",
  heroImage: "assets/img/budaya/sulawesi-barat/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Mandar",
      description: "Rumah adat Mandar umumnya berbentuk panggung dengan atap tinggi dari rumbia atau kayu. " +
                   "Dinding rumah terbuat dari anyaman bambu atau papan kayu dengan ukiran sederhana namun khas. " +
                   "Struktur panggung melindungi rumah dari banjir dan meningkatkan sirkulasi udara. " +
                   "Rumah adat ini digunakan untuk tempat tinggal, kegiatan adat, dan simbol status sosial masyarakat Mandar.",
      image: "assets/img/budaya/sulawesi-barat/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Mandar",
      description: "Pakaian tradisional Mandar terdiri dari baju panjang, kain sarung, dan aksesoris manik-manik atau songket. " +
                   "Pria mengenakan baju lengkap dengan ikat kepala, sementara wanita memakai kebaya atau baju panjang dengan hiasan songket. " +
                   "Pakaian ini digunakan pada pernikahan, upacara adat, dan festival budaya, menampilkan identitas, kesopanan, dan keanggunan budaya Mandar.",
      image: "assets/img/budaya/sulawesi-barat/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Sulawesi Barat",
      description: "Tarian khas Sulawesi Barat termasuk Tari Tinde dan Tari Pakarena versi Mandar. " +
                   "Tarian menampilkan gerakan ritmis, harmonis, dan simbolik, diiringi musik gendang, gong, dan seruling bambu. " +
                   "Tarian dipertunjukkan dalam festival budaya, upacara adat, dan penyambutan tamu, mencerminkan nilai sosial, solidaritas, dan filosofi hidup masyarakat Mandar.",
      image: "assets/img/budaya/sulawesi-barat/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Sulawesi Barat",
      description: "Kuliner Sulawesi Barat terkenal dengan cita rasa laut dan pedas:\n" +
                   "- Kapurung Mandar: makanan khas dari sagu dan sayur, disajikan dengan ikan laut.\n" +
                   "- Ikan Bakar dan Gulai Laut: hasil laut segar dengan rempah khas.\n" +
                   "- Pallu Butung: sayur rebus yang dilengkapi sambal khas.\n" +
                   "Kuliner ini mencerminkan kekayaan laut, rempah lokal, dan tradisi kuliner masyarakat Sulawesi Barat.",
      image: "assets/img/budaya/sulawesi-barat/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Sulawesi Barat",
      description: "Musik tradisional Sulawesi Barat menggunakan alat musik gendang, gong, dan kolintang. " +
                   "Musik ini mengiringi tarian, festival budaya, dan upacara adat, terdengar harmonis, ritmis, dan menampilkan karakter budaya Mandar.",
      image: "assets/img/budaya/sulawesi-barat/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Daerah Sulawesi Barat",
      description: "Bahasa daerah utama di Sulawesi Barat adalah bahasa Mandar, digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal. " +
                   "Bahasa ini menjadi identitas budaya penting bagi masyarakat Mandar."
      // tidak perlu image
    }
  }
}
islandsData["sumatera-selatan"] = {
  name: "Sumatera Selatan",
  subtitle: "Provinsi di bagian selatan Pulau Sumatera yang kaya budaya Palembang, rumah adat Limas, kuliner pempek, dan tradisi unik",
  heroImage: "assets/img/budaya/sumatera-selatan/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Limas Palembang",
      description: "Rumah adat Limas khas Palembang berbentuk panggung dengan atap bertingkat yang elegan. " +
                   "Dinding dan tiang rumah biasanya dari kayu ulin atau meranti dengan ukiran khas Melayu Palembang. " +
                   "Struktur panggung melindungi dari banjir dan meningkatkan sirkulasi udara tropis. " +
                   "Rumah ini berfungsi sebagai tempat tinggal keluarga besar, pusat kegiatan sosial, dan simbol status masyarakat Palembang.",
      image: "assets/img/budaya/sumatera-selatan/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Palembang",
      description: "Pakaian adat Palembang menampilkan songket khas, baju kurung panjang, dan aksesoris emas. " +
                   "Pria memakai baju lengkap dengan tanjak dan sarung, sementara wanita memakai baju panjang dengan songket berwarna cerah dan perhiasan emas. " +
                   "Digunakan dalam pernikahan, upacara adat, dan festival budaya, menampilkan keanggunan, kesopanan, dan identitas budaya Palembang.",
      image: "assets/img/budaya/sumatera-selatan/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Sumatera Selatan",
      description: "Tarian khas Sumatera Selatan termasuk Tari Gending Sriwijaya, Tari Pagar Pengantin, dan Tari Tanggai. " +
                   "Gerakan tarian lembut, ritmis, dan simbolik, diiringi musik tradisional gendang, gong, dan seruling. " +
                   "Tarian dipertunjukkan dalam festival budaya, pernikahan, dan upacara adat, mencerminkan filosofi hidup, kerukunan, dan nilai sosial masyarakat Palembang.",
      image: "assets/img/budaya/sumatera-selatan/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Sumatera Selatan",
      description: "Sumatera Selatan terkenal dengan kuliner khas seperti:\n" +
                   "- Pempek: olahan ikan dan sagu dengan kuah cuka manis pedas.\n" +
                   "- Tekwan: sup ikan dengan bola ikan dan jamur.\n" +
                   "- Model: pempek yang diisi tahu dan sayur.\n" +
                   "- Mie Celor: mie kuah santan dengan udang dan telur.\n" +
                   "Kuliner ini mencerminkan kekayaan rempah, bahan laut, dan tradisi kuliner masyarakat Palembang.",
      image: "assets/img/budaya/sumatera-selatan/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Sumatera Selatan",
      description: "Musik tradisional Palembang menggunakan alat musik gendang, gong, rebab, dan seruling bambu. " +
                   "Musik ini mengiringi tarian, upacara adat, dan festival budaya, terdengar harmonis, ritmis, dan menampilkan karakter budaya Melayu Palembang.",
      image: "assets/img/budaya/sumatera-selatan/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Daerah Sumatera Selatan",
      description: "Bahasa daerah utama di Sumatera Selatan adalah bahasa Palembang, digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal. " +
                   "Bahasa ini menjadi identitas budaya penting bagi masyarakat Palembang."
      // tidak perlu image
    }
  }
}
islandsData["sulawesi-tengah"] = {
  name: "Sulawesi Tengah",
  subtitle: "Provinsi di bagian tengah Sulawesi, dikenal dengan budaya Kaili, Lore, dan Banggai, rumah adat unik, tarian tradisional, serta kuliner lokal",
  heroImage: "assets/img/budaya/sulawesi-tengah/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Sulawesi Tengah",
      description: "Rumah adat Sulawesi Tengah beragam sesuai suku, seperti rumah adat Kaili dan Lore. " +
                   "Bentuk rumah panggung, dinding kayu, atap tinggi, dengan beberapa dihias ukiran tradisional simbolik. " +
                   "Struktur panggung melindungi dari banjir dan meningkatkan ventilasi udara. Rumah adat ini digunakan untuk tempat tinggal, pertemuan adat, dan kegiatan sosial komunitas lokal.",
      image: "assets/img/budaya/sulawesi-tengah/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Sulawesi Tengah",
      description: "Pakaian adat menampilkan baju panjang, kain tenun khas, dan aksesoris manik-manik. " +
                   "Pria memakai baju lengkap dengan ikat kepala, sedangkan wanita memakai kebaya atau baju panjang dengan songket atau tenunan khas daerah. " +
                   "Digunakan pada pernikahan, upacara adat, dan festival budaya, menampilkan identitas, keanggunan, dan kesopanan masyarakat Sulawesi Tengah.",
      image: "assets/img/budaya/sulawesi-tengah/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Sulawesi Tengah",
      description: "Tarian khas Sulawesi Tengah termasuk Tari Pamandangan, Tari Lulo, dan Tari Peresean versi lokal. " +
                   "Tarian menampilkan gerakan ritmis, harmonis, dan simbolik, diiringi musik gendang, gong, dan seruling bambu. " +
                   "Tarian dipertunjukkan dalam festival budaya, pernikahan, dan upacara adat, mencerminkan filosofi hidup, kerukunan, dan nilai sosial masyarakat Kaili, Lore, dan Banggai.",
      image: "assets/img/budaya/sulawesi-tengah/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Sulawesi Tengah",
      description: "Kuliner Sulawesi Tengah terkenal dengan rasa pedas dan berbahan lokal:\n" +
                   "- Kaledo: sup kaki sapi dengan rempah khas.\n" +
                   "- Ikan Kuah Asam: masakan ikan laut dengan bumbu asam segar.\n" +
                   "- Lawa: sayur daun singkong yang dicampur kelapa parut.\n" +
                   "- Palumara: ikan atau daging dimasak dengan bumbu khas lokal.\n" +
                   "Kuliner ini mencerminkan kekayaan rempah, hasil bumi, dan laut, serta tradisi kuliner masyarakat Sulawesi Tengah.",
      image: "assets/img/budaya/sulawesi-tengah/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Sulawesi Tengah",
      description: "Musik tradisional Sulawesi Tengah menggunakan alat musik gendang, gong, kolintang, dan seruling bambu. " +
                   "Musik ini mengiringi tarian, upacara adat, dan festival budaya, terdengar harmonis, ritmis, dan menampilkan karakter budaya Kaili, Lore, dan Banggai.",
      image: "assets/img/budaya/sulawesi-tengah/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Daerah Sulawesi Tengah",
      description: "Bahasa daerah utama di Sulawesi Tengah meliputi bahasa Kaili, Lore, dan Banggai, digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal. " +
                   "Bahasa ini menjadi identitas budaya penting bagi masyarakat Sulawesi Tengah."
      // tidak perlu image
    }
  }
}
islandsData["sumatera-utara"] = {
  name: "Sumatera Utara",
  subtitle: "Provinsi di bagian utara Pulau Sumatera, pusat budaya Batak dengan rumah adat unik, tarian tradisional, kuliner khas, dan musik khas daerah",
  heroImage: "assets/img/budaya/sumatera-utara/hero.jpg",
  items: {
    rumah: {
      title: "Rumah Adat Batak (Rumah Bolon)",
      description: "Rumah adat Batak Toba, dikenal dengan Rumah Bolon, berbentuk panggung dengan atap tinggi melengkung seperti perahu terbalik. " +
                   "Dinding rumah terbuat dari papan kayu, dihias ukiran khas Batak yang melambangkan simbol adat dan spiritual. " +
                   "Rumah adat ini digunakan untuk tempat tinggal keluarga besar, upacara adat, dan kegiatan sosial masyarakat Batak.",
      image: "assets/img/budaya/sumatera-utara/rumah.jpg"
    },
    pakaian: {
      title: "Pakaian Adat Batak",
      description: "Pakaian adat Batak terdiri dari baju ulos, kain songket khas Batak, dan aksesoris tradisional. " +
                   "Pria memakai baju panjang dengan ulos sebagai penutup bahu atau kepala, sementara wanita memakai baju panjang dengan kain ulos berwarna cerah dan perhiasan tradisional. " +
                   "Pakaian ini digunakan pada pernikahan, upacara adat, dan festival budaya, menampilkan identitas, kesopanan, dan keindahan budaya Batak.",
      image: "assets/img/budaya/sumatera-utara/pakaian.jpg"
    },
    tari: {
      title: "Tarian Tradisional Sumatera Utara",
      description: "Tarian khas Sumatera Utara termasuk Tari Tor-Tor, Tari Sigale-gale, dan Tari Pangalap. " +
                   "Gerakan tarian ritmis dan simbolik, diiringi musik gondang, gendang, dan alat musik bambu. " +
                   "Tarian dipertunjukkan dalam upacara adat, pernikahan, dan festival budaya, mencerminkan filosofi hidup, nilai sosial, dan solidaritas masyarakat Batak.",
      image: "assets/img/budaya/sumatera-utara/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Sumatera Utara",
      description: "Sumatera Utara terkenal dengan kuliner unik seperti:\n" +
                   "- Saksang: daging babi atau sapi dimasak dengan darah dan rempah khas.\n" +
                   "- Babi Panggang Karo: olahan babi panggang khas etnis Karo.\n" +
                   "- Bika Ambon Medan: kue tradisional legit dan beraroma pandan.\n" +
                   "- Lemang dan Arsik: masakan ketan dan ikan dengan bumbu khas Batak.\n" +
                   "Kuliner ini mencerminkan kekayaan rempah, hasil bumi, dan tradisi kuliner masyarakat Sumatera Utara.",
      image: "assets/img/budaya/sumatera-utara/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Sumatera Utara",
      description: "Musik tradisional Sumatera Utara menggunakan alat musik gondang, gendang, suling, dan hasapi. " +
                   "Musik ini mengiringi tarian, festival budaya, dan upacara adat, terdengar harmonis, ritmis, dan menampilkan karakter budaya Batak.",
      image: "assets/img/budaya/sumatera-utara/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Daerah Sumatera Utara",
      description: "Bahasa daerah utama di Sumatera Utara adalah bahasa Batak Toba, Karo, Mandailing, dan Simalungun. " +
                   "Bahasa ini digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal, menjadi identitas budaya penting bagi masyarakat Sumatera Utara."
      // tidak perlu image
    }
  }
}
islandsData["yogyakarta"] = {
  name: "Yogyakarta",
  subtitle: "Kota dan provinsi budaya Jawa yang kaya tradisi, kesenian, kerajaan, dan kuliner khas",
  heroImage: "assets/img/budaya/yogyakarta/hero.jpg",
  items: {
    rumah: {
      title: "Joglo Yogyakarta",
      description: "Rumah tradisional Joglo Yogyakarta adalah rumah panggung dengan atap tinggi berbentuk limas. " +
                   "Struktur atap yang khas melambangkan filosofi keseimbangan alam dan manusia. " +
                   "Dinding rumah biasanya terbuat dari kayu jati dengan ukiran tradisional yang indah. " +
                   "Rumah Joglo digunakan untuk tempat tinggal keluarga, kegiatan adat, dan simbol status sosial.",
      image: "assets/img/budaya/yogyakarta/rumah.jpg"
    },
    pakaian: {
      title: "Kebaya, Beskap & Pakaian Adat Yogyakarta",
      description: "Pakaian adat Yogyakarta sangat beragam dan formal, digunakan dalam pernikahan, upacara kerajaan, dan pertunjukan seni. " +
                   "Pria biasanya memakai Beskap dengan Blangkon dan kain batik, sementara wanita memakai Kebaya dengan kain batik atau jarik, dilengkapi hiasan perhiasan tradisional. " +
                   "Pakaian ini menampilkan keanggunan, kesopanan, dan identitas budaya Jawa Yogyakarta.",
      image: "assets/img/budaya/yogyakarta/pakaian.jpg"
    },
    tari: {
      title: "Tari Tradisional Yogyakarta",
      description: "Tarian khas Yogyakarta termasuk Tari Serimpi, Tari Gambyong, dan Tari Bedhaya. " +
                   "Tarian klasik ini memiliki gerakan halus, ritmis, dan simbolik, diiringi gamelan Jawa yang lembut. " +
                   "Tarian dipertunjukkan di keraton, upacara adat, dan festival budaya, mencerminkan filosofi, harmoni, dan estetika masyarakat Yogyakarta.",
      image: "assets/img/budaya/yogyakarta/tari.jpg"
    },
    makanan: {
      title: "Kuliner Khas Yogyakarta",
      description: "Kuliner khas Yogyakarta terkenal dengan rasa manis dan gurih:\n" +
                   "- Gudeg: olahan nangka muda dengan santan, disajikan dengan nasi, ayam, telur, dan sambal.\n" +
                   "- Bakpia: kue kecil berisi kacang hijau atau coklat, sebagai oleh-oleh khas.\n" +
                   "- Sate Klathak: sate kambing dengan bumbu sederhana namun nikmat.\n" +
                   "- Oseng-Oseng Mercon: makanan pedas khas yang menggugah selera.\n" +
                   "Kuliner ini mencerminkan tradisi kuliner dan identitas budaya Yogyakarta.",
      image: "assets/img/budaya/yogyakarta/makanan.jpg"
    },
    musik: {
      title: "Musik Tradisional Yogyakarta",
      description: "Musik tradisional Yogyakarta menggunakan gamelan, siter, kendang, dan bonang. " +
                   "Musik ini mengiringi tarian klasik, pertunjukan wayang, dan upacara adat, terdengar harmonis, lembut, dan menampilkan karakter budaya Jawa Yogyakarta.",
      image: "assets/img/budaya/yogyakarta/musik.jpg"
    },
    bahasa: {
      title: "Bahasa Daerah Yogyakarta",
      description: "Bahasa utama di Yogyakarta adalah bahasa Jawa dialek Mataraman dan Krama, digunakan dalam komunikasi sehari-hari, kesenian, upacara adat, dan pendidikan lokal. " +
                   "Bahasa ini menjadi identitas budaya penting bagi masyarakat Yogyakarta."
      // tidak perlu image
    }
  }
};

// ==========================
// EXPLORE PAGE (peta)
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const islands = document.querySelectorAll(".island.clickable");
  const infoBox = document.getElementById("islandInfo");

  if (islands.length && infoBox) {
    islands.forEach(island => {
      island.style.cursor = "pointer";

      island.addEventListener("click", () => {
        const islandId = island.dataset.id;
        const data = islandsData[islandId];
        if (!data) return;

        localStorage.setItem("selectedIsland", islandId);

        islands.forEach(i => i.classList.remove("active"));
        island.classList.add("active");

        infoBox.innerHTML = `
          <h3>${data.name}</h3>
          <p>${data.subtitle}</p>
          <button id="goDetailBtn" class="btn-detail">
            Lihat Detail Budaya
          </button>
        `;

        document.getElementById("goDetailBtn").onclick = () => {
          window.location.href = `detail.html?region=${islandId}`;
        };
      });
    });
  }

  // ==========================
  // DETAIL PAGE
  // ==========================
  if (window.location.pathname.includes("detail.html")) {
    const params = new URLSearchParams(window.location.search);
    const region = params.get("region");

    console.log("DETAIL REGION:", region);

    const data = islandsData[region];

    if (!data) {
      document.querySelector(".detail-title").textContent = "Data tidak ditemukan";
      document.querySelector(".detail-desc").textContent = "Wilayah tidak valid.";
      document.body.style.display = "block";
      return;
    }

    // ===== HERO =====
    const header = document.querySelector(".detail-header");
    header.style.backgroundImage = `url('${data.heroImage}')`;

    document.querySelector(".detail-title").textContent = data.name;
    document.querySelector(".detail-desc").textContent = data.subtitle;
    const hero = document.querySelector(".detail-header");

    // ===== THEME COLOR =====
    document.documentElement.style.setProperty(
      "--theme-color",
      data.themeColor || "#6c757d"
    );

    // ===== ITEMS =====
    const setItem = (key, imgId, titleId, descId) => {
      const item = data.items[key];
      if (!item) return;

      document.getElementById(imgId).src = item.image;
      document.getElementById(imgId).alt = item.title;

      document.getElementById(titleId).textContent = item.title;
      document.getElementById(descId).textContent = item.description;
    };

    setItem("rumah", "img-rumah", "info-rumah", "desc-rumah");
    setItem("pakaian", "img-pakaian", "info-pakaian", "desc-pakaian");
    setItem("tari", "img-tari", "info-tari", "desc-tari");
    setItem("makanan", "img-makan", "info-makan", "desc-makan");
    setItem("musik", "img-alat", "info-alat", "desc-alat");

    // ===== BAHASA DAERAH =====
    if (data.items.bahasa) {
      document.getElementById("info-bahasa").textContent =
        data.items.bahasa.title;

      document.getElementById("desc-bahasa").textContent =
        data.items.bahasa.description;
    }

    // Show body after data loaded
    document.body.style.display = "block";
    document.body.classList.add(`region-${region}`);
  }
});

const tooltip = document.getElementById("province-tooltip");
const titleEl = document.getElementById("tooltip-title");
const subtitleEl = document.getElementById("tooltip-subtitle");

document.querySelectorAll("path.island").forEach(island => {

    island.addEventListener("mouseenter", (e) => {
        const id = island.dataset.id; // contoh: "jawa-barat"
        const data = islandsData[id];
        if (!data) return;

        titleEl.textContent = data.name;
        subtitleEl.textContent = data.subtitle;

        tooltip.classList.remove("hidden");
        tooltip.classList.add("show");
    });

    island.addEventListener("mousemove", (e) => {
        const padding = 20;
        const tooltipRect = tooltip.getBoundingClientRect();

        let x = e.clientX + 20;
        let y = e.clientY + 20;

        // Cegah keluar kanan
        if (x + tooltipRect.width > window.innerWidth - padding) {
            x = e.clientX - tooltipRect.width - 20;
        }

        // Cegah keluar bawah
        if (y + tooltipRect.height > window.innerHeight - padding) {
            y = e.clientY - tooltipRect.height - 20;
        }

        tooltip.style.left = x + "px";
        tooltip.style.top = y + "px";
    });

    island.addEventListener("mouseleave", () => {
        tooltip.classList.remove("show");
        tooltip.classList.add("hidden");
    });

});
