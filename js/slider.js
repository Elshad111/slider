export default class Slider{
	constructor(wrapper = '.slider__wrapper', items = '.slider__item', prev = '.slider__control-left', next = '.slider__control-right'){
		this.items = document.querySelector(`${this.wrapper} ${this.items}`);
		this.prev = document.querySelector(`${this.wrapper} ${this.prev}`);
		this.next = document.querySelector(`${this.wrapper} ${this.next}`);
		this._index = 0;
	}


}