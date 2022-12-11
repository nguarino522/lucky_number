/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
    evt.preventDefault();
    clearFormErrors();
    let name = document.getElementById("name").value;
    let year = document.getElementById("year").value;
    let email = document.getElementById("email").value;
    let color = document.getElementById("color").value;
    let data = { "name": name, "year": year, "email": email, "color": color };
    let result = await processApiRequest(data);
    handleResponse(result);
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
    console.log(resp);
    if ("errors" in resp) {
        for (error in resp.errors) {
            let formInput = document.querySelector(`#${error}-err`);
            formInput.innerHTML = `${resp.errors[error]}`;
        }
    } else {
        let p1 = document.createElement("p");
        p1.innerText = `Your lucky number is ${resp.num.num} (${resp.num.fact}).`;
        let p2 = document.createElement("p");
        p2.innerText = `Your birth year (${resp.year.year}) fact is ${resp.year.fact}.`;
        document.getElementById("lucky-results").appendChild(p1);
        document.getElementById("lucky-results").appendChild(p2);
    }
}

async function processApiRequest(data) {
    let resp = await axios.post("/api/get-lucky-num", data);
    return resp.data;
}

$("#lucky-form").on("submit", processForm);


function clearFormErrors() {
    ["name", "year", "email", "color"].forEach((error) => {
        document.getElementById(`${error}-err`).innerHTML = "";
    })
    document.getElementById("lucky-results").innerHTML = "";
}