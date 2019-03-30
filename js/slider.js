export default class Slider{
	constructor(obj = {wrapper : '.slider__wrapper', items : '.slider__item', prev : '.slider__control-left', next : '.slider__control-right'}){
		this.items = document.querySelectorAll(`${obj.wrapper} ${obj.items}`);
		this.prev = document.querySelector(`${obj.wrapper} ${obj.prev}`);
		this.next = document.querySelector(`${obj.wrapper} ${obj.next}`);
		this._count = 0;		
		this.next.addEventListener('click', () => {
			this.nextSlide();
		});
		this.prev.addEventListener('click', () => {
			this.prevSlide();
		}); 
	}

	nextSlide() {
		this.items[this._count].classList.remove('show');
		this._count++;
		if(this._count > this.items.length - 1){
			this._count = 0;
		}
		this.items[this._count].classList.add('show');
	}

	prevSlide() {
		this.items[this._count].classList.remove('show');
		this._count--;
		if(this._count < 0){
			this._count = this.items.length - 1;
		}
		this.items[this._count].classList.add('show');
	}
	
}