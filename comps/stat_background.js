//MUST HAVE - CREATE A TEMPLATE TAG
var template_statbackground = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_statbackground.innerHTML = `
<style>
    .stat_background{
        position:relative;
        width: 360px;
        height: fit-content;
        background: rgba(40, 129, 188, 0.28);
        border: 3px solid #131CF9;
        border-radius: 15px;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .stat_options{
        display:flex;
        justify-content:space-around;
        margin: 40px 0px 15px 0px
    }
    .stat_options div{
        width: 80px;
        height: 55px;
        background: rgba(19, 156, 255, 0.65);
        border: 4px solid #131CF9;
        border-radius: 8px;
        color: white;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    p {
        color: white;
        font-size: 16px;
        text-align: center;
        margin:15px 20px 0px 20px;
    }
</style>

<div class="stat_background">
    <p>Stat Background Question</p>
    <div class="stat_options">
        <div class="stat_option">Number</div>
        <div class="stat_option2">Number</div>
        <div class="stat_option3">Number</div>
    </div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class StatBackground extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_statbackground.content.cloneNode(true)); //use the template to make a clone
        document.querySelector("stat-background").style.left = this.getAttribute("left");
        this.shadowRoot.querySelector(".stat_option").innerText = this.getAttribute("info_text");
        this.shadowRoot.querySelector(".stat_background").style.top = this.getAttribute("top");
        this.shadowRoot.querySelector(".stat_option2").innerText = this.getAttribute("info_text2");
        this.shadowRoot.querySelector(".stat_option3").innerText = this.getAttribute("info_text3");
        this.shadowRoot.querySelector("p").innerText = this.getAttribute("head_text");
        this.shadowRoot.querySelector('.stat_options').onclick = () => this.statAnswer(
            this.getAttribute('bg1'),
            this.getAttribute('bg2'),
            this.getAttribute('bg3')
        )
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    statAnswer(bgcolor1="#333", bgcolor2="#333", bgcolor3="#333"){
        this.shadowRoot.querySelector(".stat_option").style.cssText = `
            background-color:${bgcolor1};
            border-color:${bgcolor1};
            transition: 1s
        `;
        this.shadowRoot.querySelector(".stat_option2").style.cssText = `
            background-color:${bgcolor2};
            border-color:${bgcolor2};
            transition: 1s
        `;
        this.shadowRoot.querySelector(".stat_option3").style.cssText = `
            background-color:${bgcolor3};
            border-color:${bgcolor3};
            transition: 1s
        `;
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("stat-background", StatBackground)