//MUST HAVE - CREATE A TEMPLATE TAG
var template_appear = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_appear.innerHTML = `
<style>
.appeardiv{
    width:340px;
    height:285px;
    position: relative;
    background-image: url("imgs/deadcoral.png");
    background-size: cover;
    opacity:0;
    left:0px;
    overflow-x:visible;
    z-index: 1

}
</style>
<div class="appeardiv">
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheAppear extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_appear.content.cloneNode(true)); //use the template to make a clone
        document.querySelector("appear-div").style.position="relative";
        document.querySelector("appear-div").style.top = this.getAttribute("top");
        document.querySelector("appear-div").style.left = this.getAttribute("left");
        this.shadowRoot.querySelector(".appeardiv").style.width = this.getAttribute("width");
        this.shadowRoot.querySelector(".appeardiv").style.height = this.getAttribute("height");
        this.shadowRoot.querySelector(".appeardiv").innerText = this.getAttribute("head_text");
        this.shadowRoot.querySelector(".appeardiv").style.textAlign = this.getAttribute("alignment");
        document.querySelector("appear-div").onclick = () => this.revealImg(
            this.getAttribute("img"),
            this.getAttribute("left"),
            this.getAttribute("top")
        )
    }

    revealImg(img="imgs/deadcoral.png"){
        this.shadowRoot.querySelector(".appeardiv").style.cssText = `
            background-image: url(${img});
            opacity: 1;
            transition: 1s;
        `;
    }
    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("appear-div", TheAppear)