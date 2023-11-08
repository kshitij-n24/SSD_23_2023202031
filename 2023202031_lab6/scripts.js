function shwPasswrd() {
    const pTag = document.getElementById("pswrd");
    if (pTag.type === "password") {
        pTag.type = "text";
    } else {
        pTag.type = "password";
    }
}

function chkPassword() {
    document.getElementById("corrPassMes").innerHTML = '';
    document.getElementById("wrongPassMes").innerHTML = '';
    if (document.getElementById("pswrd").value === document.getElementById("cnfpswrd").value) {
        document.getElementById("corrPassMes").innerHTML = "Passwords match!";
    } else {
        document.getElementById("wrongPassMes").innerHTML = "Passwords do not match!";
    }
}

function chkTeamName() {
    document.getElementById("corrTeamMes").innerHTML = '';
    document.getElementById("wrongTeamMes").innerHTML = '';
    const teamName = document.getElementById("tmname").value;

    const resChk = /\d/.test(teamName) && /[A-Z]/.test(teamName);

    if (resChk === true) {
        document.getElementById("corrTeamMes").innerHTML = "Team name fulfills criteria!";
    } else {
        document.getElementById("wrongTeamMes").innerHTML = "Team Name does not fulfill criteria!";
    }
}

function chkEmail() {
    document.getElementById("corrEmailMes").innerHTML = '';
    document.getElementById("wrongEmailMes").innerHTML = '';
    const resChk = /@/.test(document.getElementById("temid").value);

    if (resChk === true) {
        document.getElementById("corrEmailMes").innerHTML = "Team email fulfills criteria!";
    } else {
        document.getElementById("wrongEmailMes").innerHTML = "Team email does not fulfill criteria!";
    }
}

function addDragMember(e) {
    e.dataTransfer.setData("text", e.target.innerHTML + ' ');
}

function addDropMember(e) {
    e.preventDefault();
    e.target.appendChild(document.createTextNode(e.dataTransfer.getData("text")));
}

function allowDrop(e) {
    e.preventDefault();
}

function checkForm(e) {
    e.preventDefault();
    console.log(document.getElementById("wrongPassMes").innerHTML, document.getElementById("wrongTeamMes").innerHTML, document.getElementById("wrongEmailMes").innerHTML);
    if (
        !document.getElementById("wrongPassMes").innerHTML &&
        !document.getElementById("wrongTeamMes").innerHTML &&
        !document.getElementById("wrongEmailMes").innerHTML
    ) {
        const teamName = document.getElementById("tmname").value;
        const teamEmail = document.getElementById("temid").value;
        const teamCoach = document.getElementById("tcname").value;
        const captain = document.getElementById("tcptn").value;
        const teamMembers = document.getElementById("tmmbrs").innerHTML;
        const passwrd = document.getElementById("pswrd").value;
        const cnfrmPass = document.getElementById("cnfpswrd").value;
        
        console.log(teamName, teamEmail, teamCoach, captain, teamMembers.length, passwrd, cnfrmPass);
        if (teamName && teamEmail && teamCoach && captain && teamMembers.length > 1 && passwrd && cnfrmPass)
        {
            alert("Team Name: " + teamName + "\nTeam Email ID: " + teamEmail + "\nTeam Coach Name: " + teamCoach + "\nTeam Captain: " + captain + "\nTeam Members: " + teamMembers);
        }
    }
}

window.addEventListener("keydown", function (e) {
    if (e.metaKey && e.key === 'm') {
        console.log("Yay");
        document.body.style.backgroundColor = "grey";
        document.body.style.color = "white";
    } 
});

