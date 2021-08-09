const storageKey = "EMERGENSHIFT"
const submitAction = document.getElementById("form-data-user")

function checkForStorage(){
    return typeof(Storage) !== "undefined"
}

function putUserList(data){
    if (checkForStorage()){
        let userData = [];
        if (localStorage.getItem(storageKey) === null){
            userData = [];
        } else {
            userData = JSON.parse(localStorage.getItem(storageKey));
        }

        userData.unshift(data);
        if(userData.length > 5){
            userData.pop();
        }

        localStorage.setItem(storageKey, JSON.stringify(userData));
    }
}

submitAction.addEventListener("submit", function(event){
    const inputNama = document.getElementById("nama").value;
    const inputTelp = document.getElementById("telp").value;
    const inputKTP = document.getElementById("ktp").value;
    const inputAlmt = document.getElementById("almt").value;
    const inputEmail = document.getElementById("email").value;

    const newUserData = {
        nama: inputNama,
        telp: inputTelp,
        ktp: inputKTP,
        almt: inputAlmt,
        email: inputEmail
    }

    putUserList(newUserData);
})

window.addEventListener("load", function(){
    if (checkForStorage()) {
        if (localStorage.getItem(storageKey) !== null){
                const userData = getUserList();
                renderUserList(userData);
            }
    }else{
        alert("Browser yang Anda gunakan tidak mendukung Web Storage")
    }
});