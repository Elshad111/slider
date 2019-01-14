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
		this.prevSlide(this.options, this.i);
	}
}

Slider.prototype.nextSlide = function(options, i){
	let next = document.querySelector(this.next);
	let items = document.querySelectorAll(this.items);
	next.addEventListener('click', function(){
		items[i].classList.remove('show');
		i++;
		if(i > items.length - 1){
			i = 0;
		}
		items[i].classList.add('show');
	});
}

Slider.prototype.prevSlide = function(options, i){
	let prev = document.querySelector(this.prev);
	let items = document.querySelectorAll(this.items);
	prev.addEventListener('click', function(){
		items[i].classList.remove('show');
		i--;
		if(i < 0){
			i = items.length - 1;
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
