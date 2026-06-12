function timer() {
	// const endDate = new Date()
	// endDate.setDate(ebdDate.getDate() + 3)

	const endDate = new Date('Jun 29, 2026, 23:59:59')

	const daysElement = document.querySelector('#days')
	const hoursElement = document.querySelector('#hours')
	const minutesElement = document.querySelector('#minutes')
	const secondElement = document.querySelector('#second')

	function updateTime() {
		const now = new Date()
		const timeDifferent = endDate - now

		const days = Math.floor(timeDifferent / (1000 * 60 * 60 * 24))
		const hours = Math.floor(
			(timeDifferent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
		)
		const minutes = Math.floor((timeDifferent % (1000 * 60 * 60)) / (1000 * 60))
		const second = Math.floor((timeDifferent % (1000 * 60)) / 1000)

		daysElement.innerText = days
		hoursElement.innerText = hours
		minutesElement.innerText = minutes
		secondElement.innerText = second
	}

	updateTime()

	setInterval(updateTime, 1000)
}

export default timer
