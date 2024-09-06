const plus = document.querySelector('.plus-container')
const less = document.querySelector('.less-container')
const amount = document.querySelector('.amount')
const subPhotos = document.querySelectorAll('.photo')
const mainPhoto = document.querySelector('.main-photo')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const navItems = document.querySelector('.nav-items')

let count = 0
let imageIndex = 1
amount.textContent = count
less.style.opacity = '0'

plus.addEventListener('click', () => {
	count++
	amount.textContent = count
	less.style.opacity = '0.9'
})
less.addEventListener('click', () => {
	if (count === 0) {
		less.style.opacity = '0'
		return
	} else if (count === 1) {
		less.style.opacity = '0'
		count--
		amount.textContent = count
	} else {
		count--
		amount.textContent = count
		less.style.opacity = '0.9'
	}
})

function updateMainPhoto(e) {
	const href = this.href
	console.log(href)
	const photoTag = this.href.slice(22)
	let imageIndex = href.charAt(43)
	const photoUrl = `${photoTag.slice(0, 21)}${imageIndex}${photoTag.slice(22)}`

	console.log({ imageIndex })
	console.log({ photoTag })
	console.log({ photoUrl })
	this.classList.add('fade')
	mainPhoto.style.backgroundImage = `url(${photoUrl})`
	this.style.border = '1px solid var(--orange)'
	this.style.filter = 'blur(0.5px) opacity(0.8)'
	subPhotos.forEach((photo) => {
		photo.addEventListener('mouseout', (e) => {
			this.style.filter = 'blur(0) opacity(1)'
			this.style.border = 'none'
			// mainPhoto.style.backgroundImage = `url(images/image-product-1.jpg)`
		})
	})
}

subPhotos.forEach((photo) => {
	photo.addEventListener('mouseover', updateMainPhoto)
})

function incrementPhoto() {
	if (imageIndex === 4) {
		imageIndex = 1
	} else {
		imageIndex++
	}
	mainPhoto.style.backgroundImage = `url(images/image-product-${imageIndex}.jpg)`
}
function decrementPhoto() {
	if (imageIndex === 1) {
		imageIndex = 4
	} else {
		imageIndex--
	}
	mainPhoto.style.backgroundImage = `url(images/image-product-${imageIndex}.jpg)`
}

arrowLeft.addEventListener('click', decrementPhoto)
arrowRight.addEventListener('click', incrementPhoto)

function showMobileMenu() {
	navItems.style.display = 'flex'
	navItems.classList.toggle('shown')
	hamburgerMenu.classList.toggle('active')
}

hamburgerMenu.addEventListener('click', showMobileMenu)
