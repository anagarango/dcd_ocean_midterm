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
        document.querySelector("the-text").style.position = "absolute";
        this.shadowRoot.querySelector("p").style.top = this.getAttribute("top");
        this.shadowRoot.querySelector("p").style.left = this.getAttribute("left");
        this.shadowRoot.querySelector("p").innerText = this.getAttribute("content");
        this.shadowRoot.querySelector("p").style.color = this.getAttribute("color");
        this.shadowRoot.querySelector("p").style.width = this.getAttribute("width");
        this.shadowRoot.querySelector("p").style.fontWeight = this.getAttribute("font-weight");
        this.shadowRoot.querySelector("p").style.fontSize = this.getAttribute("font-size");
        this.shadowRoot.querySelector("p").style.textAlign = this.getAttribute("alignment");
        document.querySelector("body").onscroll = (e) => this.HandleContScroll(e.target.documentElement.scrollTop)
    }

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
    HandleContScroll(scrollNum=0){
        console.log("scroll", scrollNum);
        if(scrollNum < 3000){
            document.querySelector(".whale_shark").lefty()
        } else {
             document.querySelector(".whale_shark").righty()
        }
        if(scrollNum < 3750){
            document.querySelector(".ana_subheading").opacityOff()
         } else {
             document.querySelector(".ana_subheading").opacityOn()
         }
        if(scrollNum < 3800){
           document.querySelector(".ana_text1").opacityOff()
        } else {
            document.querySelector(".ana_text1").opacityOn()
        }
        if(scrollNum < 3850){
            document.querySelector(".ana_text2").opacityOff()
         } else {
             document.querySelector(".ana_text2").opacityOn()
        }
        if(scrollNum < 3900){
            document.querySelector(".ana_text3").opacityOff()
         } else {
             document.querySelector(".ana_text3").opacityOn()
        }
        if(scrollNum < 4000){
            document.querySelector(".ana_text4").opacityOff()
         } else {
             document.querySelector(".ana_text4").opacityOn()
        }
        if(scrollNum < 4150){
            document.querySelector(".ana_text5").opacityOff()
         } else {
             document.querySelector(".ana_text5").opacityOn()
        }
        if(scrollNum < 4200){
            document.querySelector(".ana_text6").opacityOff()
         } else {
             document.querySelector(".ana_text6").opacityOn()
        }
    }
    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-text", TheText)