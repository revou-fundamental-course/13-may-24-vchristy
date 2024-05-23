function hideForm() {
    document.getElementById("luas-form").style.display = "none";
    document.getElementById("keliling-form").style.display = "none";
}

hideForm()

function showForm(id) {
    var path = "";

    if (id === "luas-form") {
        path = "./assets/luas_img.webp"
        document.getElementById("keliling-form").style.display = "none";

    } else {
        path = "./assets/keliling_img.webp"
        document.getElementById("luas-form").style.display = "none";
    }

    if (path !== "") {
        imgChanged(path)
    } else {
        console.log(path)
    }

    var form = document.getElementById(id);
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

function imgChanged(path) {
    document.getElementById("main-img").src = path;
}

function luas() {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    // cek yg di input adalah angka atau bukan
    if (isNaN(alas) || isNaN(tinggi)) {
        alert("Must input numbers!");
        return;
    }

    // mulai cari luas
    const luas = 0.5 * alas * tinggi;
    document.getElementById("luas-result").innerHTML = `
        Luas = 0.5 x alas x tinggi
        <br>
        Luas = 0.5 x ${alas} x ${tinggi}
        <br>
        Luas = ${luas}
    `;

    // reset input
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
}

function keliling() {
    const a = parseFloat(document.getElementById("sisi-a").value);
    const b = parseFloat(document.getElementById("sisi-b").value);
    const c = parseFloat(document.getElementById("sisi-c").value);

    // cek yg di input adalah angka atau bukan
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Must input numbers!");
        return;
    }

    // mulai cari keliling
    const keliling = a + b + c;
    document.getElementById("keliling-result").innerHTML = `
        Keliling = a + b + c
        <br>
        Keliling = ${a} + ${b} + ${c}
        <br>
        Keliling = ${keliling}
    `;

    // reset input
    document.getElementById("sisi-a").value = "";
    document.getElementById("sisi-b").value = "";
    document.getElementById("sisi-c").value = "";
}