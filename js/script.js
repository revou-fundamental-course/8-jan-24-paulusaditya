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

function resetInput() {
    document.getElementById('sisi').value = '';
    document.getElementById('luas').innerText = '';
    document.getElementById('keliling').innerText = '';
}