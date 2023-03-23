const qs = el => document.querySelector(el)
const qsa = el => document.querySelectorAll(el)

const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))

const randomBool = () => {
	if (random(0, 1) == 1) {
		return true
	} else {
		return false
	}
} 

function dbToggle(element, className, duration = 500){
	qs(element).classList.toggle(className)
	setTimeout(() => qs(element).classList.toggle(className), duration);
}



// INCLUDER //
qs('body').insertAdjacentHTML('beforeend', `<div class="scripts"></div>`)
const include = src => {
	const sript = document.createElement('script')
	sript.src = src
	sript.async = true
	qs('.scripts').appendChild(sript)
}
include('./js/includes.js')