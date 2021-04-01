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
            clonedAtmosphere.style.cssText = "opacity: 0; transition: all 0.3s ease-out; object-fit: contain; height: 100%; width: 100%;";


            let containerAtmosphere = document.createElement("div");
            containerAtmosphere.style.cssText = "display: block; position: fixed; z-index: 9999; width: 80vw; height: 80vh; top: 10%; left: 10%; text-align: center;"
            containerAtmosphere.appendChild(clonedAtmosphere);
        

            let backdropAtmosphere = document.createElement("div");
            backdropAtmosphere.style.cssText = "display: block; position: fixed; z-index: 9998; width: 100vw; height: 100%; top: 0; left: 0; background: rgba(0,0,0,0.5); opacity: 0;  transition: all 0.3s ease-out; cursor: pointer;";

            backdropAtmosphere.addEventListener('click', function(){
                backdropAtmosphere.remove();
                containerAtmosphere.remove();
                this.atmosphereItem.forEach(item =>{
                    if(item.classList.contains('atmosphere--opened')){
                        item.classList.remove('atmosphere--opened');
                    }
                });
            }.bind(this));
            document.body.appendChild(containerAtmosphere);
            document.body.insertBefore(backdropAtmosphere, containerAtmosphere);

            setTimeout(()=>{
                    clonedAtmosphere.style.opacity = "1";
                    backdropAtmosphere.style.opacity = "1";
                }, 50
            );
        }
    }

    setEventListeners() {
        this.atmosphereItem.forEach(item => {
            item.addEventListener('click', this.openAtmosphere.bind(this))
        });
    }
}   