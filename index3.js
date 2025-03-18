function greeting() {
    
    const inputname = document.getElementById("name").value;
    
    
    const greetingArea = document.getElementById("output");
    
    
    if (inputname === "") {
        greetingArea.textContent = "Please enter your name!";
    } else {
        greetingArea.textContent = `Hello, ${inputname}!`;
    }
}