console.log("JavaScript is connected")

let age = prompt("Enter a number")

if (age === null) {
    console.error("You pressed cancel")
} else {
    if (age.trim() === "") {
        console.error("Tumnh bas space diya tha")
    }
    else {
        age = Number(age.trim());

        if (isNaN(age)) {
            console.warn("Bhai number dede...")
        } else {
            console.log("Confirm number hai...")
        }
    }

}