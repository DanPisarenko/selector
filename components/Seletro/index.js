export default class Seletro extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
                let parentsectionElement = this;
                let s = document.createElement('div');
                s.className = "aaaaa"
                s.style.backgroundColor = "#fff"
                s.style.minWidth = '100px';
                s.style.minHeight = '16px';
                s.style.border = '1px solid #3f3f3f';
                s.style.borderRadius = '3px';
                let val = document.createElement('div');
                s.appendChild(val);
                let vari = document.createElement('div');
                vari.className = "ffff"
                //прячем его сейчас
                vari.style.display = 'none';
                vari.style.position = 'absolute';
                vari.style.zIndex = 1000000;
                vari.style.background = 'white';
                vari.style.border = '1px solid #3f3f3f';
                vari.style.borderRadius = '3px';
                if(typeof this.attributes.values !== "undefined"){
                    let values = this.attributes.values.value.split(" ");
                    for (let i = 0; i < values.length; i++) {
                        let opt = document.createElement('div');
                        opt.innerText = values[i];
                        opt.onmouseover = function(){
                            this.style.background = 'yellow';
                        }
                        opt.onmouseout = function(){
                            this.style.background = '#fff';
                        }
                        opt.onclick = function(e){
                            val.innerHTML = this.innerHTML;
                            vari.style.display = 'none';
                            parentsectionElement.value = this.innerText;
                            e.stopPropagation();
                        }
                        vari.appendChild(opt);
                    }
                }else{
                    alert("there is not yet")
                }
                s.appendChild(vari);
                s.onclick = function (){
                    vari.style.display = 'block';
                }
                this.appendChild(s);
            
    }
}