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

Slider.prototype.nextSlide = function(options, i){
	let next = document.querySelector(this.next);
	let items = document.querySelectorAll(this.items);
	let wrapper = document.querySelector(this.wrapper);
	next.addEventListener('click', function(){
		items[i].classList.remove('show');
		i++;
		if(i > items.length - 1){
			i = 0;
		}
		items[i].classList.add('show');
	});
}

const slider = new Slider({
	wrapper: '.slider__wrapper',
	items: '.slider__item',
	prev: '.slider__control-left',
	next: '.slider__control-right',
});
slider.sliderInit();
