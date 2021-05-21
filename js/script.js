document.addEventListener('DOMContentLoaded', () => {
    const featureLinkElems = document.querySelectorAll('.feature__link');
	const featureSubElems = document.querySelectorAll('.feature-sub');

	// for(let i = 0; i < featureLinkElems.length; i++) {
	// 	featureLinkElems[i].addEventListener('click', () => {
	// 		featureSubElems[i].classList.toggle('hidden')
	// 		featureLinkElems[i].classList.toggle('feature__link_active')
	// 	})
	// }

	// featureLinkElems.forEach((btn, index) => {
	// 	btn.addEventListener('click', () => {

	// 		featureLinkElems.forEach((featureLinkElem) => {
	// 			featureLinkElem.classList.remove('feature__link_active')
	// 		})
	// 		featureSubElems.forEach((featureSubElem) => {
	// 			featureSubElem.classList.add('hidden')
	// 		})

	// 		featureSubElems[index].classList.remove('hidden');
	// 		btn.classList.add('feature__link_active');
	// 	})
	// })

	for(let i = 0; i < featureLinkElems.length; i++) {
		featureLinkElems[i].addEventListener('click', () => {
			if(featureLinkElems[i].classList.contains('feature__link_active')) {
                featureLinkElems[i].classList.remove('feature__link_active')
                featureSubElems[i].classList.add('hidden')
			}

			else {
                featureLinkElems.forEach((featureLinkElem) => {
                    featureLinkElem.classList.remove('feature__link_active')
                })
                featureSubElems.forEach((featureSubElem) => {
                    featureSubElem.classList.add('hidden')
                })
                featureLinkElems[i].classList.add('feature__link_active')
                featureSubElems[i].classList.remove('hidden')
            }
		})
	}








	// scroll

	const scroll = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

	scroll.forEach(link => {
		link.addEventListener('click', (ev) => {

			ev.preventDefault()
			const id = link.getAttribute('href').substring(1)
			document.getElementById(id).scrollIntoView({
				behavior: 'smooth'
			});
		})
	})



	// tabs

	const TabsHandlerEls = document.querySelectorAll('[data-tabs-handler]');
	const TabsFieldEls = document.querySelectorAll('[data-tabs-field]');


	for (const tab of TabsHandlerEls) {
		tab.addEventListener('click', () => {
			TabsHandlerEls.forEach(item => {
				if (tab === item) {
					item.classList.add('design-list__item_active');
				} else {
					item.classList.remove('design-list__item_active');
				}
			})

			TabsFieldEls.forEach(item => {
				if (item.dataset.tabsField === tab.dataset.tabsHandler) {
					item.classList.remove('hidden')
				} else {
					item.classList.add('hidden')
				}
			})
		})
	}




	// modal

	const moreEl = document.querySelector('.more');
	const modalEl = document.querySelector('.modal');

	const openModal = () => {
		modalEl.classList.remove('hidden');
	};

	const closeModal = () => {
		modalEl.classList.add('hidden');
	};

	moreEl.addEventListener('click', openModal);
	modalEl.addEventListener('click', (ev) => {
		console.log(ev.target)
		const target = ev.target;

		if (target.classList.contains('overlay') ||
			target.classList.contains('modal__close')) {
				closeModal()
			}
	})



//игкп

const menuElem = document.querySelector('.menu');
const burgerElem = document.querySelector('.humburger-menu');


const toggleMenu = () => {
	menuElem.classList.toggle('menu-active');
	burgerElem.classList.toggle('humburger-menu-active');
};

burgerElem.addEventListener('click', toggleMenu);























});