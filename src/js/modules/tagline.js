// При нажатии на кнопку tagline__close  блок tagline
function tagline() {
	const closeTaglineBtn = document.querySelector('.tagline__close')
	const tagline = document.querySelector('.tagline')
	console.log(closeTaglineBtn)
	closeTaglineBtn.onclick = function () {
		tagline.remove()
	}
}

export default tagline
