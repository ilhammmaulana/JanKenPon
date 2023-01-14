
function randomComputer(){
var computer = Math.random()
if(computer > 0 && computer < 0.34 ) return 'fa-solid fa-hand-peace';
if(computer > 0.34 && computer < 0.66) return 'fa-solid fa-hand-fist';
return 'fa-solid fa-hand';
}
function hasilPermainan(computer, player){
if(player == computer) return hasil = 'SERI';
if(player == 'fa-solid fa-hand') return hasil = ( computer == 'fa-solid fa-hand-fist') ? 'Menang' : 'Kalah';
if(player == 'fa-solid fa-hand-fist') return hasil = ( computer == 'fa-solid fa-hand') ? 'Kalah' : 'Menang';
if(player == 'fa-solid fa-hand-peace') return hasil = ( computer == 'fa-solid fa-hand-fist') ? 'Menang' : 'Kalah';
}
const pilihan = document.querySelectorAll('.box-player i')
const pilihanHover = document.querySelectorAll('.box-player div')
const awesomeComputer = document.querySelector('.pilihan-computer i')
const hasilH2 = document.getElementsByClassName('hasil')
pilihanHover.forEach(function(i){  
		i.addEventListener('click', function() {
	    const identifict = i.querySelector('i')
	    const pilihanComputer = randomComputer();
	    const pilihanPlayer = identifict.className
	    console.log('Pilihan computer : ' + pilihanComputer)
	    console.log('Pilihan player : ' + pilihanPlayer)
	    console.log(hasilPermainan(pilihanComputer, pilihanPlayer))
	    awesomeComputer.setAttribute('class', pilihanComputer)
	    hasilH2[0].innerHTML = (hasilPermainan(pilihanComputer, pilihanPlayer))
	})
})

// var pilihanGambarBatu = document.querySelector('i.fa-solid')
// pilihanBatu.addEventListener('click', function(){
//   const pilihanComputer = randomComputer();
//   const pilihanPlayer = 'fa-hand-fist'
//   console.log('Pilihan computer : ' + pilihanComputer)
//     console.log('Pilihan player : ' + pilihanPlayer)
//     console.log(hasilPermainan(pilihanComputer, pilihanPlayer))
//     pilihanGambarBatu.setAttribute('class', 'fa-solid ' + pilihanComputer)
// });
// var pilihanKertas = document.querySelector('.kertas')
// var pilihanGambarKertas = document.querySelector('i.fa-solid')
// pilihanKertas.addEventListener('click', function(){
//   const pilihanComputer = randomComputer();
//   const pilihanPlayer = 'fa-hand'
//   console.log('Pilihan computer : ' + pilihanComputer)
//     console.log('Pilihan player : ' + pilihanPlayer)
//     console.log(hasilPermainan(pilihanComputer, pilihanPlayer))
//     pilihanGambarBatu.setAttribute('class', 'fa-solid ' + pilihanComputer)
// });


// var pilihanBatu = document.querySelector('.batu')

