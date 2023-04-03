# Intro Project
INGAT: 
-- KALAU 1 PAGE HTML HARUS MEMPUNYAI CSSNYA SENDIRI BIAR TIDAK TABRAKAN DENGAN CSS LAINNYA. DISAMAKAN DENGAN JS-NYA JUGA 
-- KALAU INGIN MENGEDIT ATAU APAPUN ITU, BUATLAH BRANCH BARU AGAR TIDAK TERTABRAK DENGAN MAIN

1. Character Slider
2. Tombol (Makan, Toilet, tidur, kesenangan)
3. Gerakan up down left right
5. menyambungkan karakter ke dalam menuGame

Projek Requirement:
https://drive.google.com/file/d/1mq8yyZ1jHotVFf39uA-a798yvIr8ptaV/view?usp=sharing

Character Asset Links:
https://getstickerpack.com/stickers/quby-pentol-gif (Pentol)
https://getstickerpack.com/stickers/kitten-1 (Kitten)

Logika Barnya:
- Kalau bar lapar kosong = hp berkurang (heal hanya bisa dipakai 10x)
- kalau bar lapar kurang dari 50%, tidurnya akan berkurang
- kalau tidurnya kosong, kesenangan akan berkurang lebih cepat dan tambahnya juga berkurang
- kalau emosinya kosong, akan lebih cepat lapar



note:
function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        m = checkTime(m);
        document.getElementById('time').innerHTML =
        h + ":" + m;
        var t = setTimeout(startTime, 500);
    }

    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
