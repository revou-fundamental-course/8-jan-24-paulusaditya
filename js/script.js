function hitungLuasPersegi() {
    const sisi = document.getElementById('sisi').value;
    const luas = sisi * sisi;
    const outputText = `Luas= ${sisi} x ${sisi} = ${luas}`;
    document.getElementById('luas').innerText = outputText;
}

function hitungKelilingPersegi() {
    const sisi = document.getElementById('sisi').value;
    const keliling = 4 * sisi;
    const outputText = `Keliling= 4 x ${sisi} = ${keliling}`;
    document.getElementById('keliling').innerText = outputText;
}

function resetInput1() {
    document.getElementById('sisi').value = '';
    document.getElementById('luas').innerText = '';
    document.getElementById('keliling').innerText = '';

}

function halamanini() {
    window.location.href = 'index.html';
}

function halamanpersegipanjang() {
    window.location.href = 'persegipanjang.html';
}

function hitungLuasPersegiPanjang() {
    const panjang = document.getElementById('panjang').value;
    const lebar = document.getElementById('lebar').value;
    const luaspersegipanjang = panjang * lebar;
    const outputText = `Luas = ${panjang} x ${lebar} = ${luaspersegipanjang}`;
    document.getElementById('luaspersegipanjang').innerText = outputText;
}

function hitungKelilingPersegiPanjang() {
    const panjang = document.getElementById('panjang').value;
    const lebar = document.getElementById('lebar').value;
        // Konversi nilai panjang dan lebar menjadi angka dlu
    const panjangNumber = parseInt(panjang);
    const lebarNumber = parseInt(lebar);
    const kelilingpersegipanjang = 2 * (lebarNumber + panjangNumber) ;
    const outputText = `Keliling = 2 x (${panjang} + ${lebar}) = ${kelilingpersegipanjang}`;
    document.getElementById('kelilingpersegipanjang').innerText = outputText;
}

function resetInput2() {
    document.getElementById('panjang').value = '';
    document.getElementById('lebar').value = '';
    document.getElementById('luaspersegipanjang').innerText = '';
    document.getElementById('kelilingpersegipanjang').innerText = '';
}