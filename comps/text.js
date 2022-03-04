//MUST HAVE - CREATE A TEMPLATE TAG
var template_text = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_text.innerHTML = `
<style>
p{
    position: relative;
    width: 250px;
    font-size: 17px;
    color: white;
    text-align: center;
    font-weight: normal;
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
        document.querySelector("the-text").style.position="absolute";
        this.shadowRoot.querySelector("p").style.top = this.getAttribute("top");
        this.shadowRoot.querySelector("p").style.left = this.getAttribute("left");
        this.shadowRoot.querySelector("p").innerText = this.getAttribute("content");
        this.shadowRoot.querySelector("p").style.color = this.getAttribute("color");
        this.shadowRoot.querySelector("p").style.width = this.getAttribute("width");
        this.shadowRoot.querySelector("p").style.fontWeight = this.getAttribute("font-weight");
        this.shadowRoot.querySelector("p").style.fontSize = this.getAttribute("font-size");
        this.shadowRoot.querySelector("p").style.textAlign = this.getAttribute("alignment");
        document.querySelector("body").onscroll = (e) => console.log(e.target.body.scrollTop);
        this.HandleContScroll(e.target.scrollTop);
    }
    HandleContScroll(scrollNum=0){
        console.log("scroll", scrollNum);
        if(scrollNum === 0){
           document.querySelector(".ana_section").style.cssText = `
                display: none
           `
        }
    }
    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-text", TheText)