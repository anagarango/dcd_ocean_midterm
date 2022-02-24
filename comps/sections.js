//MUST HAVE - CREATE A TEMPLATE TAG
var template_section = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_section.innerHTML = `
<style>
div {
    display: flex;
    justify-content: center
}
</style>

<div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheSection extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_section.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("sections", TheSection)