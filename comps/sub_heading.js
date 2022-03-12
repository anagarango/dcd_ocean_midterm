//MUST HAVE - CREATE A TEMPLATE TAG
var template_subhead = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_subhead.innerHTML = `
<style>
    p{
        position: relative;
        height: fit-content;
        width: 300px; 
        color: white;
        font-size: 21px;
        font-weight: bold;
        // margin-top: 200px
    }
</style>
<p>Hey There</p>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class SubHead extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_subhead.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector("p").style.position="relative";
        this.shadowRoot.querySelector("p").style.top = this.getAttribute("top");
        this.shadowRoot.querySelector("p").style.fontSize = this.getAttribute("font-size");
        this.shadowRoot.querySelector("p").style.textShadow = this.getAttribute("text-shadow");
        this.shadowRoot.querySelector("p").style.display = this.getAttribute("display");
        this.shadowRoot.querySelector("p").style.color = this.getAttribute("color");
        this.shadowRoot.querySelector("p").style.left = this.getAttribute("left");
        this.shadowRoot.querySelector("p").style.width = this.getAttribute("width");
        this.shadowRoot.querySelector("p").innerText = this.getAttribute("head_text");
        this.shadowRoot.querySelector("p").style.textAlign = this.getAttribute("alignment");
    }
    //To-do - CREATE THE FUNCTIONALITIES HERE!


    opacityOff(){
        this.shadowRoot.querySelector("p").style.cssText += `
            opacity: 0;
            transition: 1s
            `
    }
    opacityOn(){
        this.shadowRoot.querySelector("p").style.cssText += `
            opacity: 1;
            transition: 1s
            `
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("sub-heading", SubHead)