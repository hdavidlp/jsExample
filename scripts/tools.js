
function clearDisplayName(){
    var showData = document.getElementById("showBasicData");
    showData.innerHTML = "";
}

function disableNameInput(){
    var textName = document.getElementById("firstName");
    var textLastName = document.getElementById("lastName");
    var btnAcctionContinue = document.getElementById("btnContinue1");

    textName.disabled = true;
    textName.value = "";
    textLastName.disabled = true;
    textLastName.value = "";

    btnAcctionContinue.disabled = true;
}

function activeNameInput(){
    var textName = document.getElementById("firstName");
    var textLastName = document.getElementById("lastName");
    var btnAcctionContinue = document.getElementById("btnContinue1");

    textName.disabled = false;
    textLastName.disabled = false;
    btnAcctionContinue.disabled = false;
    textName.focus();
}


function createshowName(name, lastName){
    var showData = document.getElementById("showBasicData");
    var fullName = name + " " + lastName;
    showData.innerHTML = `
    <div class="container" id="showBasicData">
        <div class="row">
          <div class="col-1">  </div>
          <div class="col">
            <div class="card">
                <div class="card-body" id="displayName">
                  Hi ${fullName} welcome to the Jungle. 
                </div>
              </div>
          </div>
          <div class="col-1"></div>
        </div>
    </div>
    `;

    disableNameInput();
}

function showName (name, lastName){
    createshowName (name, lastName);
}

function loadDisplayName(){
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    showName (fName, lName);
}

function resetForm(){
    activeNameInput();
    clearDisplayName();
}

