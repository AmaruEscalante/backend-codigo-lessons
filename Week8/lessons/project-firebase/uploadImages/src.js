const name = document.getElementById("inputName");
const last_name = document.getElementById("inputLastName");
const gender = document.getElementById("inputGender");
const address = document.getElementById("inputAddress");
const photo = document.getElementById("inputPhoto");
const phone = document.getElementById("inputPhone");
const register = document.getElementById("register");

const base_url = "http://127.0.0.8:8000";

const formData = new FormData();

register.addEventListener("click", async (e)=>{
    console.log("holaa");
    e.preventDefault();
    console.log(photo.files[0]);
    formData.append("image", photo.files[0]);
    const result = await fetch(`${base_url}/uploadImage`, {
        method: "POST",
        body: formData,
        // headers: {
        //     Authorization: "Bearer 126534165243.546zf4a65f4a.5134465465a4f",
        //   },
    })
    const json = await result.json();
    console.log(json);
})