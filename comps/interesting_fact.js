//MUST HAVE - CREATE A TEMPLATE TAG
var template_interestingfact = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_interestingfact.innerHTML = `
<style>
.fun_fact_question{
    width: 170px;
    background: rgba(70, 70, 70, 0.75);
    border: 5px solid #DFB707;
    border-radius: 10px;
    color: white;
    text-align: center;
    padding:10px;
    position: relative;
}
p{
    text-decoration: underline;
}
</style>

<div class="fun_fact_question">
    <h3 class="head_text">Fun Fact Question?</h3>
    <p>Tap Here!</p>
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
        this.shadowRoot.querySelector(".fun_fact_question").style.top = this.getAttribute("top");
        this.shadowRoot.querySelector(".fun_fact_question").style.left = this.getAttribute("left");
        this.shadowRoot.querySelector(".head_text").innerText = this.getAttribute("head_text");
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("interesting-fact", InterestingFact)