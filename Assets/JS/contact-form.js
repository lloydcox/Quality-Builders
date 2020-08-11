var privacy = false;

const details = [
        'name: ',
        'email: ',
        'phone: ',
        'message: ',
    ]


// Store whether privacy policy has been agreed with
document.querySelector(".checkbox")
.addEventListener("change", truefalse => {
    privacy = !privacy;
    console.log(privacy);
})

// Listen for click on submit button to set values of inputs into variables
document.querySelector(".submit").addEventListener("click", storeInfo => {

    if (privacy) {
        // Attach data to Array 
        for(i=0; i < document.querySelectorAll(".text-input").length; i++) {
            details[i] += document.querySelectorAll(".text-input")[i].value
        }
        //  Submit data (to console for now)
        console.log(details);
    } else {
        // display error message
        console.log("You need to accept the privacy policy!")
    }
 })


// // })

