document.getElementById("navigation").innerHTML = `
<nav id="navbar">
        <div id="title"><a href="https://github.com/TheBluePineapple">TheBluePineapple</a></div>
        <a href="#" id="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </a>
    <div id="nav-links">
        <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./projects.html">Projects</a></li>
            <li><a href="./resume.html">Resume</a></li>
            <li><a href="./contact.html">Contact</a></li>
        </ul>
    </div>
</nav>    

`;
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
