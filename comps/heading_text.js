//MUST HAVE - CREATE A TEMPLATE TAG
var template_headingText = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_headingText.innerHTML = `
<style>
p{
    width: 300px;
    font-size: 40px;
    color: #5D8ABF;
    text-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: bold;
    letter-spacing: 0.045em;
    text-align: center;
    ;

}
</style>


<p>Here is some text</p>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheHeading extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_headingText.content.cloneNode(true)); //use the template to make a clone
    
        this.shadowRoot.querySelector("p").innerText = this.getAttribute("head-text");
        this.shadowRoot.querySelector("p").style.color = this.getAttribute("color");
        this.shadowRoot.querySelector("p").style.textShadow = this.getAttribute("shadow");
        this.shadowRoot.querySelector("p").style.fontSize = this.getAttribute("font-size");
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-heading-text", TheHeading)
