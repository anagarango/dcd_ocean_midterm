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
    opacity: 100%;
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
        this.shadowRoot.querySelector("p").style.top = this.getAttribute("top");
        this.shadowRoot.querySelector("p").style.left = this.getAttribute("left");
        this.shadowRoot.querySelector("p").innerText = this.getAttribute("content");
        this.shadowRoot.querySelector("p").style.opacity = this.getAttribute("opacity");
        this.shadowRoot.querySelector("p").style.color = this.getAttribute("color");
        this.shadowRoot.querySelector("p").style.width = this.getAttribute("width");
        this.shadowRoot.querySelector("p").style.fontWeight = this.getAttribute("font-weight");
        this.shadowRoot.querySelector("p").style.fontSize = this.getAttribute("font-size");
        this.shadowRoot.querySelector("p").style.marginBottom = this.getAttribute("margin-bottom");
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

    textAppear(){
        this.shadowRoot.querySelector("p").style.cssText += `
        opacity: 100%;
        transition:4s;
        transition-delay: 2s;
        `
    }
    HandleContScroll(scrollNum=0){
        console.log("scroll", scrollNum);
        if(scrollNum < 500){
            document.querySelector(".info_text").opacityOff()
         } else {
             document.querySelector(".info_text").opacityOn()
         }
         if(scrollNum < 650){
            document.querySelector(".info_text2").opacityOff()
         } else {
             document.querySelector(".info_text2").opacityOn()
         }
         if(scrollNum < 750){
            document.querySelector(".info_text3").opacityOff()
         } else {
             document.querySelector(".info_text3").opacityOn()
         }
         if(scrollNum < 800){
            document.querySelector(".info_text4").opacityOff()
         } else {
             document.querySelector(".info_text4").opacityOn()
         }
         if(scrollNum < 950){
            document.querySelector(".info_text5").opacityOff()
         } else {
             document.querySelector(".info_text5").opacityOn()
         }
         if(scrollNum < 1500){
            document.querySelector(".elizabeth_subheading").opacityOff()
         } else {
             document.querySelector(".elizabeth_subheading").opacityOn()
         }
        if(scrollNum < 1650){
           document.querySelector(".elizabeth_text1").opacityOff()
        } else {
            document.querySelector(".elizabeth_text1").opacityOn()
        }
        if(scrollNum < 1900){
            document.querySelector(".elizabeth_text2").opacityOff()
         } else {
             document.querySelector(".elizabeth_text2").opacityOn()
        }
        if(scrollNum < 2100){
            document.querySelector(".elizabeth_text3").opacityOff()
         } else {
             document.querySelector(".elizabeth_text3").opacityOn()
        }
        if(scrollNum < 2250){
            document.querySelector(".elizabeth_text4").opacityOff()
         } else {
             document.querySelector(".elizabeth_text4").opacityOn()
        }

        // if(scrollNum < 1100){
        //     document.querySelector(".acidic_ocean_stat_background").opacityOff();
        //     document.querySelector(".acidic_ocean_stat_background").statAnswer(this.getAttribute('bg3'),
        //     this.getAttribute('bg2'),
        //     this.getAttribute('bg1'))
        //  } else {
        //      document.querySelector(".acidic_ocean_stat_background").opacityOn()
        // }

        if(scrollNum < 3000){
            document.querySelector(".whale_shark").lefty("-320px", "350px")
        } else {
            document.querySelector(".whale_shark").righty("550px", "0px", "20s")
        }
        if(scrollNum < 3500){
            document.querySelector(".ana_subheading").opacityOff()
         } else {
             document.querySelector(".ana_subheading").opacityOn()
         }
        if(scrollNum < 3700){
           document.querySelector(".ana_text1").opacityOff()
        } else {
            document.querySelector(".ana_text1").opacityOn()
        }
        if(scrollNum < 3800){
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
            document.querySelector(".ana_text4").opacityOff();
            document.querySelector(".coral_stat_background").statAnswer(this.getAttribute('bg1'),
            this.getAttribute('bg2'),
            this.getAttribute('bg3'))
         } else {
             document.querySelector(".ana_text4").opacityOn()
        }
        if(scrollNum < 4100){
            document.querySelector(".ana_text5").opacityOff()
         } else {
             document.querySelector(".ana_text5").opacityOn()
        }
        if(scrollNum < 4150){
            document.querySelector(".ana_text6").opacityOff()
         } else {
             document.querySelector(".ana_text6").opacityOn()
        }

        if(scrollNum < 5200){
            document.querySelector(".textOne").opacityOff()
         } else {
             document.querySelector(".textOne").opacityOn()
         }
         if(scrollNum < 5555){
            document.querySelector(".textTwo").opacityOff()
         } else {
             document.querySelector(".textTwo").opacityOn()
         }
         if(scrollNum < 5900){
            document.querySelector(".textThree").opacityOff()
         } else {
             document.querySelector(".textThree").opacityOn()
         }
         if(scrollNum < 6200){
            document.querySelector(".textFour").opacityOff()
         } else {
             document.querySelector(".textFour").opacityOn()
         }
         if(scrollNum < 6400){
            document.querySelector(".textFive").opacityOff()
         } else {
             document.querySelector(".textFive").opacityOn()
         }
         if(scrollNum < 6600){
            document.querySelector(".textSix").opacityOff()
         } else {
             document.querySelector(".textSix").opacityOn()
         }
         if(scrollNum < 7000){
            document.querySelector(".textSeven").opacityOff()
         } else {
             document.querySelector(".textSeven").opacityOn()
         }
         if(scrollNum < 7100){
            document.querySelector(".textEight").opacityOff()
         } else {
             document.querySelector(".textEight").opacityOn()
         }

         if(scrollNum < 5500){
            document.querySelector(".bubble").righty("350px", "500px")
            
        } else {
            document.querySelector(".bubble").lefty("-200px", "500px", "15s")
        }

        if(scrollNum < 6400){
            document.querySelector(".ugly").lefty("-100px", "1090px");
            document.querySelector(".recover_stat_background").statAnswer(this.getAttribute('bg1'),
            this.getAttribute('bg2'),
            this.getAttribute('bg3'))
        } else {
            document.querySelector(".ugly").righty("100px", "1090px", "10s")
        }
    }

    
    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-text", TheText)