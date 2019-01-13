window.onload = function(){
	let slider = new Slider({
		container: 'container',
		item: 1
	});
}
class Slider{
	constructor(options){
		let defaultOptions = {
			container: 'slider',
			item: 'slider__item',
			prev: 'slider__control-left',
			next: 'slider__control-right',
		};
		for(let option in defaultOptions){
			this[option] = (options && options[option] !== undefined) ? options[option] : defaultOptions[option];
		}
	}
}