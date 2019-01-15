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
		let next = document.querySelector(this.wrapper + " " + this.next);
		let items = document.querySelectorAll(this.wrapper + " " + this.items);
		let prev = document.querySelector(this. wrapper + " " + this.prev);
		this.prevSlide(next, items, this.i);
		this.nextSlide(prev, items, this.i);		
	}
}

Slider.prototype.nextSlide = function(next, items, i){
	next.addEventListener('click', function(){
		items[i].classList.remove('show');
		i++;
		if(i > items.length - 1){
			i = 0;
		}
		items[i].classList.add('show');
	});
}

Slider.prototype.prevSlide = function(prev, items, i){
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
