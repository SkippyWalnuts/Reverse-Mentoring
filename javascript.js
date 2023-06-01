function applicationForm() {

    let role = prompt("Are you applying to be a Mentor or Mentee?");
    let name = prompt("What is your name?");
    let jobLevel = prompt("Do you work at dentsu?")
    jobLevel = jobLevel.toLowerCase().trim().replace();
    if (jobLevel === "yes") {
        alert("Thank you for applying to be a " + role + ", " + name + "! 🥳🎉");
    }
    else {
        alert("Come and work for dentsu to become a " + role + ", " + name + "! 📜✍🏾")
    }

}

let applicationButton = document.querySelector("button");
applicationButton.addEventListener("click", applicationForm)


