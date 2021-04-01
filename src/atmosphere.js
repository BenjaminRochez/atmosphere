export default class Atmosphere {
    constructor({
        atmosphereSelector = ".atmosphere",
    } = {}) {
        this.atmosphereItem = document.querySelectorAll(atmosphereSelector);


        this.setEventListeners();
    }

    openAtmosphere() {
        if (!event.target.classList.contains('atmosphere--opened')) {
            console.log('open');
            event.target.classList.add('atmosphere--opened');

            let clonedAtmosphere = event.target.cloneNode();
            clonedAtmosphere.classList.add('atmosphere__clone');
            clonedAtmosphere.className = "";
            clonedAtmosphere.style.cssText = "display: block; position: fixed; z-index: 9999; max-width: 80%; max-height: 80%; height: auto; top: 50%; left: 50%; transform: translate3d(-50%, -50%, 0);";

            let backdropAtmosphere = document.createElement("div");
            backdropAtmosphere.style.cssText = "display: block; position: fixed; z-index: 9998; width: 100vw; height: 100%; top: 0; left: 0; background: rgba(0,0,0,0.5);";

            backdropAtmosphere.addEventListener('click', function(){
                backdropAtmosphere.remove();
                clonedAtmosphere.remove();
                this.atmosphereItem.forEach(item =>{
                    if(item.classList.contains('atmosphere--opened')){
                        item.classList.remove('atmosphere--opened');
                    }
                });
            }.bind(this));
            document.body.appendChild(clonedAtmosphere);
            document.body.insertBefore(backdropAtmosphere, clonedAtmosphere);
        }
    }

    

    setEventListeners() {
        this.atmosphereItem.forEach(item => {
            item.addEventListener('click', this.openAtmosphere.bind(this))
        });
    }
}  