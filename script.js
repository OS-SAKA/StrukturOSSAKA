document.addEventListener("DOMContentLoaded", function () {
    const bidangElements = document.querySelectorAll(".bidang");
    const anggotaElements = document.querySelectorAll(".anggota");
    const lihatProkerButtons = document.querySelectorAll(".lihat-proker");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupContent = document.getElementById("popup-content");
    const closePopup = document.querySelector(".close-popup");

    // Klik bidang untuk membuka daftar anggota
    bidangElements.forEach(bidang => {
        bidang.addEventListener("click", function () {
            let anggotaContainer = this.querySelector(".anggota-container");
            let bidangNama = this.getAttribute("data-bidang");

            if (anggotaContainer.style.display === "block") {
                anggotaContainer.style.display = "none";
                history.pushState(null, "", "osisabbs.id");
            } else {
                document.querySelectorAll(".anggota-container").forEach(el => el.style.display = "none");
                anggotaContainer.style.display = "block";
                history.pushState(null, "", `osisabbs.id/${bidangNama}`);
            }
        });
    });

    // Klik anggota untuk menampilkan pop-up proker
    anggotaElements.forEach(anggota => {
        anggota.addEventListener("click", function (event) {
            event.stopPropagation();
            let bidangProker = this.getAttribute("data-proker");
            popupTitle.innerText = `Proker Bidang ${bidangProker.replace("proker-", "").toUpperCase()}`;
            popupContent.innerText = "Daftar program kerja bidang ini akan ditampilkan di sini.";
            popup.style.display = "block";
        });
    });

    // Klik tombol "Lihat Proker"
    lihatProkerButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation();
            let bidangProker = this.getAttribute("data-proker");
            popupTitle.innerText = `Proker Bidang ${bidangProker.replace("proker-", "").toUpperCase()}`;
            popupContent.innerText = "Daftar program kerja bidang ini akan ditampilkan di sini.";
            popup.style.display = "block";
        });
    });

    // Tutup pop-up
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Klik luar pop-up untuk menutup
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
