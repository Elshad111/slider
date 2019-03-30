import Slider from './slider.js';

const slider = new Slider({
	wrapper : '.slider__wrapper', 
	items : '.slider__item', 
	prev : '.slider__control-left', 
	next : '.slider__control-right', 
	auto : true, 
	transition : 1000
});
