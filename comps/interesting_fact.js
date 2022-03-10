//MUST HAVE - CREATE A TEMPLATE TAG
var template_interestingfact = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_interestingfact.innerHTML = `
<style>
.fish_background {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width:460px;
    height: 260px;
    background-image: url("imgs/blue_fish.png");
    background-size:contain;
    background-repeat: no-repeat
}
.fun_fact_question{
    display: flex;
    width: 170px;
    flex-direction: column;
    background: rgba(70, 70, 70, 0.75);
    border: 5px solid #DFB707;
    border-radius: 10px;
    color: white;
    text-align: center;
    padding:10px;
    opacity: 100%;
    transition: 0s;
    z-index: 1;
    margin-left: -50px;
}
p{
    text-decoration: underline;
}
</style>
<div class="fish_background">
    <div class="fun_fact_question">
        <h3 class="head_text">Fun Fact Question?</h3>
        <p>Tap Here!</p>
    </div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class InterestingFact extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_interestingfact.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".fish_background").style.top = this.getAttribute("top");
        this.shadowRoot.querySelector(".fish_background").style.left = this.getAttribute("left");
        this.shadowRoot.querySelector(".head_text").innerText = this.getAttribute("head_text");

        if (this.getAttribute("class") == "fact"){
            this.shadowRoot.querySelector(".fish_background").onclick = () => {
                document.querySelector(".fact").bigfact();
            }
    }
}

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    bigfact(){
        this.shadowRoot.querySelector(".fish_background").style.cssText += `
        left:-450px;
        transition: 2s;
        transition-timing-function: ease-in
        `
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("interesting-fact", InterestingFact)