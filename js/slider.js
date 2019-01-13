window.onload = function(){
	
}
class Slider{
	constructor(options){
		let defaultOptions = {
			wrapper: 'slider',
			item: 'slider__item',
			prev: 'slider__control-left',
			next: 'slider__control-right',
		};
		for(let option in defaultOptions){
			this[option] = (options && options[option] !== undefined) ? options[option] : defaultOptions[option];
		}
	}
}