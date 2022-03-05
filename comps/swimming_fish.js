//MUST HAVE - CREATE A TEMPLATE TAG
var template_swimfish = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_swimfish.innerHTML = `
<style>
img{
    width: 100%;
    position: absolute;
    top:0;
    left:0;
    mix-blend-mode: normal;
}
</style>

<img src = "imgs/fish-water-png-3925.png"/>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheSwimFish extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_swimfish.content.cloneNode(true)); //use the template to make a clone
        document.querySelector("the-swimming-fish").style.position = "absolute";
        this.shadowRoot.querySelector("img").src = this.getAttribute("image");
        this.shadowRoot.querySelector("img").style.width = this.getAttribute("width");
        this.shadowRoot.querySelector("img").style.top = this.getAttribute("top");
        this.shadowRoot.querySelector("img").style.left = this.getAttribute("left");
        this.shadowRoot.querySelector("img").style.mixBlendMode = this.getAttribute("blendmode");
        // this.shadowRoot.querySelector("img").style.left = this.lefty(this.getAttribute("toplefty"))
    }

    lefty(){
        this.shadowRoot.querySelector("img").style.cssText += `
            left:-280px;
            top: 3600px;
            transition:0s
            `
    }
    righty(){
        this.shadowRoot.querySelector("img").style.cssText += `
            left:500px;
            top: 3350px;
            transition: 19s
            `
    }
    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-swimming-fish", TheSwimFish)