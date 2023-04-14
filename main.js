function setUserName() {
    let enteredName = "";
    while (!enteredName) {
        enteredName = prompt("Please enter your name."); 
    }
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    changeHeading(myName);
}

function changeHeading(name){
    const myHeading = document.querySelector("h1");
    myHeading.textContent = `Welcome to The Phantom Troupe, ${name}`;
}

function main(){
    if (!localStorage.getItem("name")) {
        setUserName();
    } 
    else {
        const storedName = localStorage.getItem("name");
        changeHeading(storedName);
    }  

    const myButton1 = document.querySelector("#button1");
    const myButton2 = document.querySelector("#button2");

    myButton1.onclick = () => {
        setUserName();
    };
    
    myButton2.onclick = () => {
       setUserName();
    };

    const myImage = document.querySelector("img");
    myImage.onclick = () => {
        const mySrc = myImage.getAttribute("src");
        if (mySrc === "images/spooder.jpg") {
          myImage.setAttribute("src", "images/rickrolling.webp");
        } 
        else {
          myImage.setAttribute("src", "images/spooder.jpg");
        }
      };
}


main();

