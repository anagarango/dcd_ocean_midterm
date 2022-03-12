//MUST HAVE - CREATE A TEMPLATE TAG
var template_title = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_title.innerHTML = `
<style>
h2 {
    position: relative;
    top: 0px;
    left:0px;
    text-align: center;
    width:100px
    z-index: 5;
}

h2 span {
    position: relative;
    margin: -3px;
    animation: bounce 1s ease infinite alternate ;
    animation-duration: 2s;
    font-size: 55px;
    font-weight: bolder;
    color: #5D8ABF;
    /* text-shadow: 0 1px 0 rgba(0, 0, 0, 0.04), 0 2px 0 rgba(0, 0, 0, 0.04), 0 3px 0 rgba(0, 0, 0, 0.04), 0 4px 0 rgba(0, 0, 0, 0.04),
    0 5px 0 rgba(0, 0, 0, 0.04), 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent,
    0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.04); */
    }

    h2 span:nth-child(2) {
    animation-delay: 0.1s;
    }

    h2 span:nth-child(3) {
    animation-delay: 0.2s;
    }

    h2 span:nth-child(4) {
    animation-delay: 0.3s;
    }

    h2 span:nth-child(5) {
    animation-delay: 0.4s;
    }

    h2 span:nth-child(6) {
    animation-delay: 0s;
    }

    h2 span:nth-child(7) {
    animation-delay: 0.1s;
    }

    h2 span:nth-child(8) {
    animation-delay: 0.2s;
    }

    h2 span:nth-child(9) {
    animation-delay: 0.3s;
    }

    h2 span:nth-child(10) {
    animation-delay: 0.4s;
    }

    h2 span:nth-child(11) {
    animation-delay: 0.5s;
    }

    h2 span:nth-child(12) {
    animation-delay: 0.6s;
    }

    h2 span:nth-child(13) {
    animation-delay: 0.7s;
    }

    h2 span:nth-child(14) {
    animation-delay: 0.8s;
    }

    h2 span:nth-child(15) {
    animation-delay: 0.9s;
    }

    h2 span:nth-child(16) {
    animation-delay: 1s;
    }

    h2 span:nth-child(17) {
    animation-delay: 1.1s;
    }

    h2 span:nth-child(18) {
    animation-delay: 1.2s;
    }
    h2 span:nth-child(19) {
    animation-delay: 1.3s;
    }
/* ANIMATION */
@keyframes bounce {
    100% {
    top: 0px;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.05), 0 2px 0 rgba(0, 0, 0, 0.05), 0 3px 0 rgba(0, 0, 0, 0.05), 0 4px 0 rgba(0, 0, 0, 0.05),
    0 5px 0 rgba(0, 0, 0, 0.05), 0 6px 0 rgba(0, 0, 0, 0.05), 0 7px 0 rgba(0, 0, 0, 0.05), 0 8px 0 rgba(0, 0, 0, 0.05), 0 9px 0 rgba(0, 0, 0, 0.05),
    0 50px 25px rgba(0, 0, 0, 0.05);

    }
}

</style>
<h2>
            <span>O</span>
            <span>c</span>
            <span>e</span>
            <span>a</span>
            <span>n</span>
          </br>
            <span>A</span>
            <span>c</span>
            <span>i</span>
            <span>d</span>
            <span>i</span>
            <span>f</span>
            <span>i</span>
            <span>c</span>
            <span>a</span>
            <span>t</span>
            <span>i</span>
            <span>o</span>
            <span>n</span>
    </h2>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheTitle extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_title.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector("h2").style.top = this.getAttribute("top");
        this.shadowRoot.querySelector("h2").style.left = this.getAttribute("left");
        this.shadowRoot.querySelector("h2").style.width = this.getAttribute("width");
        this.shadowRoot.querySelector("h2").style.textAlign = this.getAttribute("alignment");
        this.shadowRoot.querySelectorAll("span").style.fontSize = this.getAttribute("fontsize");
        this.shadowRoot.querySelector("h2 span").style.margin = this.getAttribute("margin-between-letters");
        this.shadowRoot.querySelectorAll("span").style.color = this.getAttribute("color");
        this.shadowRoot.querySelector("h2").style.zIndex = this.getAttribute("zIndex");

    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("animated-title", TheTitle)