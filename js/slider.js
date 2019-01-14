"use strict";

class Slider{
	constructor(options){
		let defaultOptions = {
			wrapper: '.slider__wrapper',
			items: '.slider__item',
			prev: '.slider__control-left',
			next: '.slider__control-right'
		};
		this.i = 0;
		for(let option in defaultOptions){
			this[option] = (options && options[option] !== undefined) ? options[option] : defaultOptions[option];
		}
	}
	sliderInit(){
		this.nextSlide(this.options, this.i);
	}
}

const slider = new Slider({
	wrapper: '.slider__wrapper',
	items: '.slider__item',
	prev: '.slider__control-left',
	next: '.slider__control-right',
});
slider.sliderInit();
