//MUST HAVE - CREATE A TEMPLATE TAG
var template_text = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_text.innerHTML = `
<style>
p{
    width: 250px;
    font-size: 16px;
    color: white;
}
</style>

<p>Here is some text</p>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheText extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_text.content.cloneNode(true)); //use the template to make a clone
        
        this.shadowRoot.querySelector("p").innerText = this.getAttribute("content");
        this.shadowRoot.querySelector("p").style.color = this.getAttribute("color");
        this.shadowRoot.querySelector("p").style.width = this.getAttribute("width");
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-text", TheText)