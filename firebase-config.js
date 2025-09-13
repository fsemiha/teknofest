// Firebase Konfigürasyon Dosyası
// Teknofest projesi için güncellenmiş konfigürasyon

const FIREBASE_CONFIG = {
    // Firebase Console'dan alınan gerçek bilgiler - teknofest projesi
    apiKey: "AIzaSyB3ofVngr1rY6Zr2bTSE3PRFT1z104nMXo",
    authDomain: "teknofest-c7a92.firebaseapp.com",
    databaseURL: "https://teknofest-c7a92-default-rtdb.firebaseio.com",
    projectId: "teknofest-c7a92",
    storageBucket: "teknofest-c7a92.firebasestorage.app",
    messagingSenderId: "478655816162",
    appId: "1:478655816162:web:0cb7626d34935611ed59bb",
    measurementId: "G-PG8ZFFEWJP"
};

// Bu konfigürasyonu otomatik olarak window nesnesine ekle
if (typeof window !== 'undefined') {
    window.FIREBASE_CONFIG = FIREBASE_CONFIG;
}

// Node.js uyumluluğu için
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FIREBASE_CONFIG;
} 