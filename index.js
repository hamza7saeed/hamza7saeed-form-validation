document.title = "Form Validation";
let head = document.head;
let favi = document.createElement("link");
document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1553289038-6638b1a1802a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb')"

favi.href = "https://freepngimg.com/download/gmail/58605-google-angle-symbol-apps-drive-forms-green.png"
favi.rel = "icon"
head.appendChild(favi)
/* document.title = "Assignment 2"

*Requirements:*

1. Create an HTML form with the following fields:
   - Name (text input)
   - Email (email input)
   - Password (password input)
   - Confirm Password (password input)
   - Age (number input)
   - Submit button

2. Implement JavaScript validation for the form:
   - Name field should not be empty and should contain only letters.
   - Email field should be a valid email format (e.g., example@email.com).
   - Password field should be at least 8 characters long.
   - Confirm Password field should match the Password field.
   - Age should be a positive integer.
   - Display appropriate error messages near each input field if validation fails.
   - If all fields pass validation, display a success message and clear the form.

3. Use event listeners in JavaScript to handle form submission and validation.

4. Style the form using CSS to make it visually appealing.

*Additional Challenge (Optional):*
Implement real-time validation (validate fields as the user types) using JavaScript event listeners like keyup or input.

Feel free to adjust or expand upon these requirements as needed for your students' level of understanding. Let me know if you need further assistance!
*2nd Assignment Title: Understanding Form Validation*

*Objective:* Explain the concept of form validation and discuss the differences between server-side and client-side validation.

*Requirements:*

1. Introduction to Form Validation:
   - Define form validation as the process of ensuring that user input meets specified criteria before it is submitted to the server.
   - Explain the importance of form validation in improving data quality, user experience, and overall application security.

2. Client-Side Validation:
   - Describe client-side validation as the validation process that occurs in the user's web browser before the form is submitted.
   - Discuss the advantages of client-side validation, such as immediate feedback to users, reducing server load, and improving responsiveness.
   - Mention limitations like potential security risks (e.g., bypassing client-side validation) and the need for complementary server-side validation.

3. Server-Side Validation:
   - Explain server-side validation as the validation process that occurs on the server after the form is submitted.
   - Discuss the importance of server-side validation in ensuring data integrity, security (preventing malicious input), and consistency across different clients.
   - Highlight its role in handling complex validations that cannot be performed solely on the client side.

4. Differences Between Client-Side and Server-Side Validation:
   - Contrast client-side and server-side validation in terms of when and where they occur in the form submission process.
   - Discuss the complementary nature of these validation techniques, where client-side validation provides immediate feedback to users, and server-side validation ensures data integrity and security.

5. Conclude the assignment with a summary that emphasizes the importance of using both client-side and server-side validation in creating a robust form validation process.

Ensure that each section is explained clearly and concisely, using examples or scenarios to illustrate key points if needed. Let me know if there's anything else you'd like to add or modify in the assignment!
 */
let navItm = document.querySelectorAll(".navBar");
let navItem = document.querySelectorAll("a");

navItem.forEach((ee)=>{
    ee.style.color = "black"
});
navItm.forEach((e)=>{
    e.addEventListener("mouseover",()=>{
        e.style.backgroundColor = "#B4B4B8"
        e.style.color = "white"
        e.addEventListener("click",function(){
        navItm.forEach(ee=>{
            ee.classList.remove("cl")
        })

            e.classList.toggle("cl")
        });
        e.addEventListener("mouseout",()=>{
            e.style.backgroundColor = "transparent"
            e.style.color = "black"
        });
    });
    
});

  

let form = document.querySelector(".form");


let btn = document.createElement("button");
btn.innerText = "Submit";
btn.setAttribute('id', "sub-btn");
btn.style.marginTop = "1%"




form.appendChild(btn)


let userName = document.querySelector("#userName");
let contact = document.querySelector("#contact");
let _email = document.querySelector("#emaill");
let dis = document.querySelector("#dis");
let imgBtn = document.querySelector("#imgBtn")

let fName = document.getElementById("fName");
let conNum = document.getElementById("conNum");

let email = document.getElementById("email");
let writeDis = document.getElementById("writeDis");




// btn.addEventListener("click",function(){
//     location.href = "./indexx.html"
// })

let darkBtn = document.getElementById("dark")


let term = true
    darkBtn.addEventListener("click",function(){
        if (term){
        dark()
           

        } else{
            light()
        }
        term = !term
    })

    navItem.forEach((ee)=>{
        ee.style.color = "black"
    });
   function light(){
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1553289038-6638b1a1802a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb')"
    imgBtn.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2OzoUCb9ipRXQd2NLDqmoG40XJihl4zmXI2ms3pCkQlbEO9bekrJ1npa1MyeebwxZx0&usqp=CAU"
    
    navItem.forEach((ee)=>{
        ee.style.color = "black"
    });
    navItm.forEach((e)=>{
        e.addEventListener("mouseover",()=>{
            e.style.backgroundColor = "#B4B4B8"
            e.style.color = "white"
            e.addEventListener("click",function(){
            navItm.forEach(ee=>{
                ee.classList.remove("cl")
            })
    
                e.classList.toggle("cl")
            });
            e.addEventListener("mouseout",()=>{
                e.style.backgroundColor = "transparent"
                e.style.color = "black"
            });
        });
        
    });
   }
    
    function dark(){
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/fc/0b/ca/fc0bca765c94a813eb8797590f21b2f0.jpg')"
        imgBtn.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsiqxs95xpNWwukGlR_4Xw0LrLO21es-Ws7wpeFiSlQ&s"
        navItem.forEach(eee=>{
            eee.style.color = "white"
 navItm.forEach((e)=>{
        e.addEventListener("mouseover",()=>{
            e.style.backgroundColor = "#B4B4B8"
            e.style.color = "white"
            e.addEventListener("click",function(){
            navItm.forEach(ee=>{
                ee.classList.remove("cl")
            })
    
                e.classList.toggle("cl")
            });
            e.addEventListener("mouseout",()=>{
                e.style.backgroundColor = "transparent"
                e.style.color = "white"
            });
        });
        
    });
        })
}

let secPage = document.querySelector("#showMe")

let fN= document.querySelector("#F_Name");
let Cn= document.querySelector("#Con_num");
let Em= document.querySelector("#EMail");
let Ds= document.querySelector("#disScr");

btn.addEventListener("click", function(){
    let alertShown = false; // Flag to track if alert has been shown

    form.addEventListener("submit", function(e){
        e.preventDefault();
        
        // Check if any input is empty
        if(userName.value === "" || contact.value === "" || _email.value === "" || dis.value === ""){
            // Show alert only if it hasn't been shown before
            if (!alertShown) {
                alert("Please fill in all details.");
                alertShown = true; // Set the flag to true
            }
        } else {
            // Clear any previous alerts
            alertShown = false;

            // Clear previous form data
            fName.innerText = "";
            conNum.innerText = "";
            email.innerText = "";
            writeDis.innerText = "";

            // Create an object to store form data
            let showSpeed = {
                [fN.innerText]: userName.value,
                [Cn.innerText]: contact.value,
                [Em.innerText]: _email.value,
                [Ds.innerText]: dis.value
            };
            // Convert data to JSON format
            let jData = JSON.stringify(showSpeed);
            // Store data in localStorage
            localStorage.setItem("data", jData);
            // Redirect to another page
            location.href = "./indexx.html";
        }
    });
});


