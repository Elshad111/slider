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

class Carousel extends Slider{
	constructor(options, container){
		super(options);
		this.counter = 0;
		this.container = container;
	}
	carouselInit(){
		let next = document.querySelector(this.wrapper + " " + this.next);
		console.log(next);
		let items = document.querySelectorAll(this.wrapper + " " + this.items);
		let prev = document.querySelector(this.wrapper + " " + this.prev);
		let container = document.querySelector(this.container);
		let itemWidth = items[0].offsetWidth;
		let containerWidth = this.getWidth(items);
		container.style.width = containerWidth + "px";
		this.nextCarousel(next, container, this.counter, itemWidth, containerWidth);
		this.prevCarousel(prev, container, this.counter, itemWidth, containerWidth);
	}
}

Carousel.prototype.getWidth = function(items){
	let size = 0;
	for(let i = 0; i < items.length; i++){
		size += items[i].offsetWidth;
	}
	return size;
}



Carousel.prototype.nextCarousel = function(next, container, counter, itemWidth, containerWidth){
	next.addEventListener('click', function(){
		counter -= itemWidth;
		if(counter <= -containerWidth){
			counter = 0;
		}
		container.style.transform = 'translateX('+ counter +'px)';
	});
}

Carousel.prototype.prevCarousel = function(prev, container, counter, itemWidth, containerWidth){
	prev.addEventListener('click', function(){
		counter += itemWidth;
		if(counter > 0){
			counter = -containerWidth;
		}
		container.style.transform = 'translateX('+ counter +'px)';
	});
}

const carousel = new Carousel({
	wrapper: '.second',
	items: '.slide-carousel',
	prev: '.slider__control-left',
	next: '.slider__control-right',
}, '.slider__carousel');
carousel.carouselInit();

const slider = new Slider({
	wrapper: '.slider__wrapper',
	items: '.slider__item',
	prev: '.slider__control-left',
	next: '.slider__control-right',
});
slider.sliderInit();
