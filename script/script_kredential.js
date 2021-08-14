const storageKey = "EMERGENSHIFT"
const submitAction = document.getElementById("form-data-user")

function checkForStorage(){
    return typeof(Storage) !== "undefined"
}

function putUserList(data){
    if (checkForStorage()){
        let userData = [];
        if (localStorage.getItem(storageKey) !== ""){
            userData = JSON.parse(localStorage.getItem("EMERGENSHIFT"));
        } else if (localStorage.getItem(storageKey) === "" || localStorage.getItem(storageKey) === null){
            userData = []
        }

        userData.unshift(data);
        if(userData.length > 1){
            userData.pop();
        }

        localStorage.setItem(storageKey, JSON.stringify(userData));
        alert("Data berhasil diperbarui!")
    }
}

function renderCurrentData(){
    var data = []
    if (localStorage.getItem("EMERGENSHIFT") !== ""){
        data = JSON.parse(localStorage.getItem("EMERGENSHIFT"))[0]
    }
    console.log(data)

    const databox = document.getElementById("databox")
    databox.innerHTML += "<p>Data yang tersimpan: </p>"
    databox.innerHTML += "<p>Nama: " + data.nama + "</p>"
    databox.innerHTML += "<p>Nomor telpon: " + data.telp + "</p>"
    databox.innerHTML += "<p>Nomor KTP: " + data.ktp + "</p>"
    databox.innerHTML += "<p>Alamat: " + data.almt + "</p>"
    databox.innerHTML += "<p>Provinsi: " + data.prov + "</p>"
    databox.innerHTML += "<p>Email: " + data.email + "</p>"
}
submitAction.addEventListener("submit", function(event){
    const inputNama = document.getElementById("nama").value;
    const inputTelp = document.getElementById("telp").value;
    const inputKTP = document.getElementById("ktp").value;
    const inputAlmt = document.getElementById("almt").value;
    const inputProv = document.getElementById("prov").value;
    const inputEmail = document.getElementById("email").value;
    
    const newUserData = {
        nama: inputNama,
        telp: inputTelp,
        ktp: inputKTP,
        almt: inputAlmt,
        prov: inputProv,
        email: inputEmail
    }

    putUserList(newUserData);
    const databox = document.getElementById("databox")
    databox.innerHTML = ""
    renderCurrentData(newUserData);
})

window.addEventListener("load", renderCurrentData)
window.addEventListener("load", function(){
    if (localStorage.getItem("EMERGENSHIFT") === null){
        localStorage.setItem("EMERGENSHIFT", "")
}})


var accordion = document.getElementsByClassName("accordion");;
    var em;

    for (em = 0; em < accordion.length; em++) {
        accordion[em].addEventListener("click", function () {
            this.classList.toggle("active");

            var panel = this.nextElementSibling;

            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }