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
    display: block;
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
        // document.querySelector("the-swimming-fish").style.position = "absolute";
        this.shadowRoot.querySelector("img").src = this.getAttribute("image");
        this.shadowRoot.querySelector("img").style.width = this.getAttribute("width");
        this.shadowRoot.querySelector("img").style.top = this.getAttribute("top");
        this.shadowRoot.querySelector("img").style.left = this.getAttribute("left");
        this.shadowRoot.querySelector("img").style.mixBlendMode = this.getAttribute("blendmode");
        this.shadowRoot.querySelector('img').HandleContScroll = () => this.lefty();
        this.shadowRoot.querySelector('img').HandleContScroll = () => this.righty()

        if (this.getAttribute("class") == "ugly"){
            this.shadowRoot.querySelector("img").onclick = () => {
                document.querySelector(".ugly").changeImage("./imgs/light_fish.png");}
        } else if (this.getAttribute("class") == "cute"){
            this.shadowRoot.querySelector("img").onclick = () => {
            document.querySelector(".cute").righty("-180px", "2100px", "0.8s", "0.8s");
            document.querySelector(".snake").righty("-550px", "1850px", "3s");
            document.querySelector(".textNine").textAppear();
            }
        }

        // document.querySelector(".ugly").onclick = () => {changeImage("./imgs/light_fish.png");}
    }

    changeImage(img="./imgs/light_fish.png"){
        this.shadowRoot.querySelector("img").src = img;
      }


    lefty(lefty="0px", toppy="0px", transition="0s"){
    this.shadowRoot.querySelector('img').style.cssText += `
        left:${lefty};
        top: ${toppy};
        transition:${transition}
        `
    }
    righty(leftyend="200px", toppyend="-200px", transition="0s", delay="0s"){
        this.shadowRoot.querySelector("img").style.cssText += `
            left:${leftyend};
            top: ${toppyend};
            transition: ${transition};
            transition-delay: ${delay};
            `
    }
    rightycute(){
        this.shadowRoot.querySelector("img").style.cssText += `
        left:-180px;
        top: 2100px;
        width: 50px;
        transition: 0.8s;
        transition-delay: 0.6s;
        `
    }
    rightysnake(){
        this.shadowRoot.querySelector("img").style.cssText += `
            left:-550px;
            top: 1850px;
            transition: 2s
            `
    }

    rightybubble(){
        this.shadowRoot.querySelector("img").style.cssText += `
            left:-200px;
            top: 500px;
            transition: 15s
            `
    }

    leftybubble(){
        this.shadowRoot.querySelector("img").style.cssText += `
            left:350px;
            top: 500px;
            transition:0s
            `
    }

    

    bigfish(){
        this.shadowRoot.querySelector("img").style.cssText += `
        left:-550px;
        transition: 3s;
        `
    }

    rightyjelly(){
        this.shadowRoot.querySelector("img").style.cssText += `
            left: 100px;
            transition: 10s
            `
    }

    leftyjelly(){
        this.shadowRoot.querySelector("img").style.cssText += `
            left: 0px;
            transition: 0s
            `
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-swimming-fish", TheSwimFish)