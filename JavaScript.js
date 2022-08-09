function DisplayOrHideForm1() {
    let TeamSection = document.getElementById("TeamApplication");
    document.getElementById("IndividualFormcontainer").style.display = "none";
    document.getElementById("TeamFormContainer").style.display = "block";
    let error= document.getElementById("ErrorSection");
    error.style.visibility = "hidden";

}
function DisplayOrHideForm2() {
    let TeamSection = document.getElementById("TeamApplication");
    document.getElementById("IndividualFormcontainer").style.display = "block";
    document.getElementById("TeamFormContainer").style.display = "none";
    let error= document.getElementById("ErrorSection");
    error.style.visibility = "hidden";
}
function HideErrorSection()
{
    let error= document.getElementById("ErrorSection");
    error.style.visibility = "hidden";
}




function EmailValidation() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let PlayerEmail = document.getElementById("PEmailAddress").value;
    let SavePlayer = document.getElementById("ShowDetails");
    let playerFName = document.getElementById("PlayerFname").value;
    // let email = document.getElementById("EmailAddress").value;
     if(PlayerEmail.match(mailformat)){
        document.getElementById("ShowPlayer").style.display = "flex";
        SavePlayer.style.display = "block";
        SavePlayer.innerHTML = SavePlayer.innerHTML + `<p> Player Name: ${playerFName}  and  Email Address: ${PlayerEmail}</p>`;
        console.log(SavePlayer.innerHTML);
    }
    else{
        let error= document.getElementById("ErrorSection");
        error.style.visibility = "visible";
        error.innerHTML = "Email Address is not Valid...";
        document.getElementById("PEmailAddress").focus();
    }
}
function EmptyFieldCheck() {
    let pfname = document.getElementById("PFname").value;
    let plname = document.getElementById("PLname").value;
    let email = document.getElementById("EmailAddress").value;
    let games = document.getElementById("GameName").value;
    if (pfname == "") {
        let error= document.getElementById("ErrorSection");
        error.style.visibility = "visible";
        error.innerHTML = "Player First Name required";
        document.getElementById("PFname").focus();
    }
    else if (plname == "") {
        let error= document.getElementById("ErrorSection");
        error.style.visibility = "visible";
        error.innerHTML = "Player Last Name required";
        document.getElementById("PLname").focus();
    }
    else if (email == "") {
        let error= document.getElementById("ErrorSection");
        error.style.visibility = "visible";
        error.innerHTML = "Player Email Address required";
        document.getElementById("EmailAddress").focus();
    }
    else {
        console.log("Player Information:\n\n" + "PlayerName: " + pfname + " " + plname + "\n\nEmail Address: " + email + "\n\nSelected Games: \n" + games);
    }
}

function PrintTeamPlayerName() {
    let playerFName = document.getElementById("PlayerFname").value;
    let PlayerEmail = document.getElementById("PEmailAddress").value;
    if (playerFName == "") {
        let error= document.getElementById("ErrorSection");
        error.style.visibility = "visible";
        error.innerHTML = "Player full Name required";
        document.getElementById("PlayerFname").focus();
    }
    else if (PlayerEmail == "") {
        let error= document.getElementById("ErrorSection");
        error.style.visibility = "visible";
        error.innerHTML = "Player Email Address required";
        document.getElementById("PEmailAddress").focus();
    }
}

function EmptyTeamFieldCheck() {
    let teamName = document.getElementById("TeamName").value;
    let CFName = document.getElementById("CFname").value;
    let CLName = document.getElementById("CLname").value;
    let Games = document.getElementById("GameName2").value;
    let playerFName = document.getElementById("PlayerFname").value;
    let PlayerEmail = document.getElementById("PEmailAddress").value;
    if (teamName == "") {
        let error= document.getElementById("ErrorSection");
        error.style.visibility = "visible";
        error.innerHTML = "Team Name required";
        document.getElementById("TeamName").focus();
    }
    else if (CFName == "") {
        let error= document.getElementById("ErrorSection");
        error.style.visibility = "visible";
        error.innerHTML = "Coach First Name Required";
        document.getElementById("CFname").focus();
    }
    else if (CLName == "") {
        let error= document.getElementById("ErrorSection");
        error.style.visibility = "visible";
        error.innerHTML = "Coach Last Name Required";
        document.getElementById("CLName").focus();
    }
    else if (playerFName == "") {
        let error= document.getElementById("ErrorSection");
        error.style.visibility = "visible";
        error.innerHTML = "Player full Name required";
        document.getElementById("PlayerFname").focus();
    }
    else if (PlayerEmail == "") {
        let error= document.getElementById("ErrorSection");
        error.style.visibility = "visible";
        error.innerHTML = "Player Email Address required";
        document.getElementById("PEmailAddress").focus();
    }
    else {
        console.log("Team Information:\n\n" + "Team Name: " + teamName + "\n\nCoach Name: " + CFName + " " + CLName + "\n\nSelected Games: \n" + Games);
        console.log("Team Players Details: \n\n" + document.getElementById("ShowDetails").innerText);
    }

}
