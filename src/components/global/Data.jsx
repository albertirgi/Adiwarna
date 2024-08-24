import Event1 from "../../assets/images/poster/poster-event-1.webp";
import Event2 from "../../assets/images/poster/poster-event-2.webp";
import Event3 from "../../assets/images/poster/poster-event-3.webp";
import Event4 from "../../assets/images/poster/poster-event-4.webp";
import Event5 from "../../assets/images/poster/poster-event-5.webp";
import Event6 from "../../assets/images/poster/poster-event-6.webp";
const shirt = Object.values(import.meta.glob("../../assets/images/merch/shirt/*.{png,jpg,jpeg,svg,PNG,webp}", { eager: true, query: "url" }));
const curratedBook = Object.values(import.meta.glob("../../assets/images/merch/currated-book/*.{png,jpg,jpeg,svg,PNG,webp}", { eager: true, query: "url" }));
const enamelPin = Object.values(import.meta.glob("../../assets/images/merch/enamel-pin/*.{png,jpg,jpeg,svg,PNG,webp}", { eager: true, query: "url" }));
const keychainLarge = Object.values(import.meta.glob("../../assets/images/merch/keychain-large/*.{png,jpg,jpeg,svg,PNG,webp}", { eager: true, query: "url" }));
const keychainMedium = Object.values(import.meta.glob("../../assets/images/merch/keychain-medium/*.{png,jpg,jpeg,svg,PNG,webp}", { eager: true, query: "url" }));
const croptee = Object.values(import.meta.glob("../../assets/images/merch/croptee/*.{png,jpg,jpeg,svg,PNG,webp}", { eager: true, query: "url" }));
const sticker = Object.values(import.meta.glob("../../assets/images/merch/sticker/*.{png,jpg,jpeg,svg,PNG,webp}", { eager: true, query: "url" }));
const totebag = Object.values(import.meta.glob("../../assets/images/merch/totebag/*.{png,jpg,jpeg,svg,PNG,webp}", { eager: true, query: "url" }));

export const events = [
  {
    id: 1,
    title: "Adiwarna: Kelana",
    sub: "",
    display: "",
    desc: "Sebuah rangkaian acara perjalanan yang indah menyusuri dunia industri kreatif Indonesia. ",
    desc2: "",
    date: "14 - 18 August 2024",
    regist: "",
    brief: "",
    img: Event1,
  },
  {
    id: 2,
    title: "Workshop with Nick Romario of Solar Studio",
    sub: "Secrets to Flawless Figure Drawing",
    display: "Workshop with Wacom",
    desc: "Find the SECRET to flawless figure drawing! Bersama Wacom dan Nick Romario dari Solar Studio.",
    desc2: "Digital illustration with Wacom",
    date: "14 August 2024",
    regist: "https://docs.google.com/forms/d/e/1FAIpQLSegFJDf6X5Wkx5p2Qwh9dXzUCJcJiJpmQ2ljFo7_Hbrz8Yivw/viewform",
    brief: "",
    img: Event2,
  },
  {
    id: 3,
    title: "Talkshow with Andre Tu7uh (Andreas)",
    sub: "The Evolution & The Future of Advertising Industry",
    display: "Talkshow with Andre Tu7uh",
    desc: "Lihat keadaan industri periklanan hari ini dan persiapkan dirimu untuk mengahadapi masa depan!",
    desc2: "Pahami tren dalam dunia periklanan dan meningkatkan efektivitas iklan bersama Andre Tu7uh.",
    date: "15 August 2024",
    regist: "https://docs.google.com/forms/d/e/1FAIpQLSdXT1Fb6bUXGBUn2Axre4o3MgWQxfD3KWvhK96qBauVdAr7GQ/viewform",
    brief: "",
    img: Event3,
  },
  {
    id: 4,
    title: "Talkshow with Aulia Akbar",
    sub: "Terra Incognita of Creative Branding Industry",
    display: "",
    desc: "Kenali tempat yang belum kamu ketahui, pelajari tujuan yang akan kamu jelajahi.",
    desc2: "Cari tahu terra incognita atau bagian-bagian tak tertulis dari industri branding bersama Aulia Akbar.",
    date: "16 August 2024",
    regist: "https://docs.google.com/forms/d/e/1FAIpQLScZ2GYbsyDDEGwbO1nSUXEzoSjbkcvIlAWBmv4HI_xm1RB_jQ/viewform",
    brief: "",
    img: Event4,
  },
  {
    id: 5,
    title: "Content Creating Competition",
    sub: "",
    display: "",
    desc: "Tunjukin kemampuan, keunikan, dan kreativitasmu membuat konten bersama Adiwarna.",
    desc2: "",
    date: "14 - 16 August 2024",
    regist: "https://docs.google.com/forms/d/e/1FAIpQLSeGS_h4PJskznRNFAnSiWqnCmhRZoUfI0UHBtr1aPIrEUr2mQ/viewform",
    brief: "https://drive.google.com/drive/folders/1nB0CPV13uvTjr6kK1SVs57ia9J0u12-0",
    img: Event5,
  },
  {
    id: 6,
    title: "Journalistic Photography Competition",
    sub: "",
    display: "",
    desc: "Lewat lensa kamera, abadikan dan ceritakan perjalananmu bersama Adiwarna.",
    desc2: "",
    date: "14 - 16 August 2024",
    regist: "https://docs.google.com/forms/d/e/1FAIpQLSe4WKwHgmcGlJhaet07nZ27lFqF8cKBf1ZwLhqyQBET9P8kXg/viewform",
    brief: "https://drive.google.com/drive/folders/1nB0CPV13uvTjr6kK1SVs57ia9J0u12-0",
    img: Event6,
  },
];

export const merchs = [
  { id: 1, name: "T-Shirt", desc: "T-shirt instagram-able bukan cuma numpang lewat, tapi beneran bisa bikin kamu menikmati setiap momen kelana kamu bersama kawan-kawan! ", price: "132.000", img: shirt, cover: shirt[5].default, uom: "", dimension: "S, M, L, XL (size details are listed)" },
  { id: 2, name: "Sticker", desc: "Sungondrong dan kawan-kawannya bisa ditempel di buku sampai di laptop buat menemani hari kamu waktu kerja!", price: "20.000", img: sticker, cover: sticker[5].default, uom: "pack", dimension: "5 cm" },
  { id: 3, name: "Totebag", desc: "Mau ke kampus, ke pantai, atau cuma jalan-jalan santai, totebag ini siap jadi teman setiamu. Banyak kantongnya bikin barang-barang kamu tertata rapi.", price: "150.000", img: totebag, cover: totebag[5].default, uom: "", dimension: "50x35 x 11 cm, fit to 16” laptop" },
  { id: 4, name: "Keychain (L)", desc: "Ini bukan sekadar gantungan kunci, tapi mini-artwork buat hidup kamu! Yang pasti positive vibes abiss.", price: "29.000", img: keychainLarge, cover: keychainLarge[5].default, uom: "pcs", dimension: "8 cm" },
  { id: 5, name: "Keychain (M)", desc: "Bosan dengan gantungan kunci yang gitu-gitu aja? Koleksi gantungan kunci akrilik ini siap jadi teman setiamu dalam setiap petualangan!", price: "15.000", img: keychainMedium, cover: keychainMedium[5].default, uom: "pcs", dimension: "Detail listed" },
  { id: 6, name: "Croptee", desc: "T-shirt jalan-jalan tapi versi croppednya?? Bikin kamu kelihatan makin kece sambil jalan-jalan ke kota baru.", price: "119.000", img: croptee, cover: croptee[5].default, uom: "", dimension: "S, M, L, XL" },
  { id: 7, name: "Enamel Pin", desc: "Mau tampil beda tapi tetap kece? Pin ini jawabannya! Desainnya yang kece tapi penuh makna bikin kamu terlihat stylish sambil eksplor perjalanan kamu.", price: "32.000", img: enamelPin, cover: enamelPin[5].default, uom: "pcs", dimension: "3.5 cm" },
  {
    id: 8,
    name: "Catalogue Book",
    desc: "Zine spesial dengan beragam karya kreatif dari para alumni DKV UK Petra. Dijamin, imajinasimu bakal terbang tinggi dan bisa banget dijadiin bank referensi.",
    price: "100.000",
    img: curratedBook,
    cover: curratedBook[5].default,
    uom: "",
    dimension: "S, M, L, XL",
  },
];
