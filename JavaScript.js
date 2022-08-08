function DisplayOrHideForm1() {
    let TeamSection = document.getElementById("TeamApplication");
    document.getElementById("IndividualFormcontainer").style.display = "none";
    document.getElementById("TeamFormContainer").style.display = "block";

}
function DisplayOrHideForm2() {
    let TeamSection = document.getElementById("TeamApplication");
    document.getElementById("IndividualFormcontainer").style.display = "block";
    document.getElementById("TeamFormContainer").style.display = "none";
}

function EmailValidation(EmailText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (EmailText.value.match(mailformat)) {
        console.log("Email is Verified");
    }
    else {
        alert(EmailText.value + " { Invalid email address! }");
    }
}
function EmptyFieldCheck() {
    let pfname = document.getElementById("PFname").value;
    let plname = document.getElementById("PLname").value;
    let email = document.getElementById("EmailAddress").value;
    let games = document.getElementById("GameName").value;
    if (pfname == "") {
        alert("Please, Enter Player First Name");
    }
    else if (plname == "") {
        alert("Please, Enter Player Second Name");
    }
    else if (email == "") {
        alert("Please, Enter Player Email Address");
    }
    else {
        alert("Player Information:\n\n" + "PlayerName: " + pfname + " " + plname + "\n\nEmail Address: " + email + "\n\nSelected Games: \n" + games);
    }
}

function PrintTeamPlayerName() {
    let playerFName = document.getElementById("PlayerFname").value;
    let PlayerEmail = document.getElementById("PEmailAddress").value;
    let SavePlayer = document.getElementById("ShowDetails");

    if (playerFName == "") {
        alert("Please, Enter Player Full Name");
    }
    else if (PlayerEmail == "") {
        alert("Please, Enter Player Email Address");

    }
    else {
        document.getElementById("ShowPlayer").style.display = "flex";
        SavePlayer.style.display = "block";
        SavePlayer.innerHTML = SavePlayer.innerHTML + `<p> Player Name: ${playerFName}  and  Email Address: ${PlayerEmail}</p>`;
        console.log(SavePlayer.innerHTML);
    }
}

function EmptyTeamFieldCheck() {
    let teamName = document.getElementById("TeamName").value;
    let CFName = document.getElementById("CFname").value;
    let CLName = document.getElementById("CLname").value;
    let Games = document.getElementById("GameName2").value;
    if (teamName == "") {
        alert("Please, Enter Your Team Name.");
    }
    else if (CFName == "") {
        alert("Please, Coach Firt Name.");
    }
    else if (CLName == "") {
        alert("Please, Coach Last Name.");
    }
    else {
        alert("Team Information:\n\n" + "Team Name: " + teamName + "\n\nCoach Name: " + CFName + " " + CLName + "\n\nSelected Games: \n" + Games);
        alert("Team Players Details: \n\n" + document.getElementById("ShowDetails").innerText);
    }

}