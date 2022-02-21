//MUST HAVE - CREATE A TEMPLATE TAG
var template_floatfish = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_floatfish.innerHTML = `
<style>
img{
    width: 100%;
}
</style>

<div>
    <img src = "/Users/renatadzotova/Desktop/dynamic content project/dcd_ocean_midterm/utils/fish-png-26357.png"/>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheFloatingFish extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_floatfish.content.cloneNode(true)); //use the template to make a clone
    
        if (this.getAttribute("image")) {
            this.shadowRoot.querySelector("div > img").src = this.getAttribute("image");
        }

        this.shadowRoot.querySelector("div > img").style.width = this.getAttribute("width");
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-floating-fish", TheFloatingFish)