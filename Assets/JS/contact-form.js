$().ready(function() {
    //on page load uncheck any ticked checkboxes
    $("input:checkbox:checked").attr("checked", "");
});

// Stores whether privacy policy has been accepted 
var privacy = false;

// Array to store contact details and message
const details = [
        'name: ',
        'email: ',
        'phone: ',
        'message: ',
    ]


// Store whether privacy policy has been agreed with
document.querySelector(".checkbox")
.addEventListener("change", function truefalse() {
    if (this.checked) { 
    privacy = true;
    } else {
        privacy = false;
    }
    console.log(privacy);
})

// Listen for click on submit button to set values of inputs into variables
document.querySelector(".submit").addEventListener("click", function storeInfo() {

    if (privacy) {
        // Attach data to Array 
        for(i=0; i < document.querySelectorAll(".text-input").length; i++) {
            details[i] += document.querySelectorAll(".text-input")[i].value
        }
        //  Submit data (to console for now)
        console.log(details);
        Swal.fire({
            title: 'Success!',
            text: 'Your message and details have been submitted.',
            icon: 'success',
            confirmButtonText: 'Continue'
          })
    } else {
        // display error message
        console.log("You need to accept the privacy policy!")
        Swal.fire({
            title: 'Error!',
            text: 'You need to accept the privacy policy to submit your details!',
            icon: 'error',
            confirmButtonText: 'Continue'
          })
    }
 })


// // })

