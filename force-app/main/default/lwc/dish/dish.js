import { LightningElement } from 'lwc';

export default class Dish extends LightningElement {
    @api dishInfo;
    @api dishAvailable = false;

    tileClickHandler(){
        const tileClicked = new CustomEvent('tileclick', {detail : this.dishInfo, bubbles :true});
        this.dispatchEvent(tileClicked);
    }
}