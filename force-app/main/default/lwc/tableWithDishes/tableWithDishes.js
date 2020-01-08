import { LightningElement } from 'lwc';

export default class TableWithDishes extends LightningElement {
    dishesInfo = [
        {dishName:'Masala', origin:'India', code:'101'},
        {dishName:'Salad', origin:'Grece', code:'102'},
        {dishName:'Pie', origin:'USA', code:'103'},
        {dishName:'IceCream', origin:'UK', code:'104'}
    ];

    onTileSelectHandler(event){
        const dishInfo = event.detail;
        this.selectedDishCode = dishInfo.code;
        this.selectedDishName = dishInfo.dishName;
        this.selectedDishOrigin = dishInfo.origin;
    }

    
}