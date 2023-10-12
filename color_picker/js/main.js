class ColorCard{
    id;
    color;
    addToList;
    htmlElement;
    circle;
    text;

    //wordt uitgevoerd wanneer object gemaakt
    constructor(newId, newColor, addToList){
        
        /* set properties */
        /* set id */
        this.id = newId;
        /* set color */
        this.color = newColor;
        /* set id that the element will have */
        this.addToList = addToList;
        
        /* make html to render */
        /* create the element li */
        this.htmlElement = document.createElement("li");
        /* add class colors__color to the li */
        this.htmlElement.classList = "colors__color";
        
        /* create figure */
        this.circle = document.createElement("figure");
        /* add class colors__circle to the figure */
        this.circle.classList = "colors__circle";
        /* add background color to the circle with value of this.color */
        this.circle.style.background = this.color;
        
        /* create p */
        this.text = document.createElement("p");
        /* give p value/text "Copied" */ 
        this.text.innerText = "Copied";
        /* add class colors__text to p */
        this.text.classList = "colors__text";

        /* add onclick event listener to htmlElement (li) */
        this.htmlElement.onclick = this.onHtmlClick;  

        /* executes this.render() */
        this.render();
    }

    onHtmlClick = () =>{
        /* add class colors__circle--selected to circle (figure) */
        this.circle.classList.add("colors__circle--selected")
        /* set document title of value this.color */
        document.title = this.color;
        /* copies this.color to clipboard */
        window.navigator.clipboard.writeText(this.color);
    }

    render(){
        /* make this.addToList child of this.htmlElement */
        this.addToList.appendChild(this.htmlElement);
        /* make this.cirle child of this.htmlElement */
        this.htmlElement.appendChild(this.circle);
        /* make this.text child of this.htmlElement */
        this.htmlElement.appendChild(this.text);
    }
}

class ColorList{
    id;
    HtmlElement;
    constructor(newId){
        /* set this.id to newId */
        this.id = newId;
        /* create element ul */
        this.HtmlElement = document.createElement("ul");
        /* set ul id to this.id */
        this.HtmlElement.id = this.id;
        /* add class colors to ul */
        this.HtmlElement.classList.add("colors")
        /* execute this.render */
        this.render()
    }

    render(){
        /* make ul child of body */
        document.querySelector("body").appendChild(this.HtmlElement);
    }
}


class HSLGenerator{
    randomHue;
    randomSat;
    randomBright;
    constructor(){
        /* execute this.generateHSL */
        this.generateHSL();
    }

    generateHue(){
        /* set this.randomHue to a random hue range 0 to 360 */
        this.randomHue = Math.floor(Math.random()*(360 - 1) + 1);
    }

    generateSat(){
        /* set this.randomSat to random range 11% to 79% */
        this.randomSat = Math.floor(Math.random()*(79-11)+11) + "%";
    }

    generateBright(){
        /*set this.randomBright to random range 11% to 100% */
        this.randomBright = Math.floor(Math.random()*(100-11)+11) + "%";
    }

    generateHSL = function(){
     /*    execute this.generateHue */
        this.generateHue();
     /*    execute this.generateSat */
        this.generateSat();
        /* execute this.generateBright */
        this.generateBright();
        /* set this.hsl to random generated hsl */
        this.hsl = `hsl(${this.randomHue}, ${this.randomSat}, ${this.randomBright})`;
    }
}

class App{
    id;
    colorList;
    hslGenerator
    constructor(newId){
        /* set this.id to newId */
        this.id = newId;
        /* create new object ColorList with argument this.id */
        this.colorList = new ColorList(this.id);
        /* create new object HSLGenerator */
        this.hslGenerator = new HSLGenerator();
        /* execute this.generateColorCards */
        this.generateColorCards();
    }

    generateColorCards(){
        /* loop */
        for(let i = 0; i <= 100; i++){
            /* execute this.hslGenerator.generateHSL */
            this.hslGenerator.generateHSL();
            /* create new object ColorCard arguments i, this.hslGenerator.hsl, document.getElementById(this.colorList.id) */
            new ColorCard(i, this.hslGenerator.hsl, document.getElementById(this.colorList.id))
        }
    }
}


/* client */
//create object App argument "js--app"
const app = new App("js--app")