var kertas = document.querySelector('.kertas')
var batu = document.querySelector('.batu')
var gunting = document.querySelector('.gunting')

batu.addEventListener('mouseover', function() {
	batu.classList.add('batu-animat')
})
batu.addEventListener('mouseout', function() {
	batu.classList.remove('batu-animat')
}) 
kertas.addEventListener('mouseover', function() {
	kertas.classList.add('kertas-animat')
})
kertas.addEventListener('mouseout', function() {
	kertas.classList.remove('kertas-animat')
})
gunting.addEventListener('mouseover', function() {
	gunting.classList.add('gunting-animat')
})
gunting.addEventListener('mouseout', function() {
	gunting.classList.remove('gunting-animat')
})
