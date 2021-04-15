var bombeGenerate = generatoreBombe(16, 100)
var listaNumeri = []
var flag = false
var contatore = 0

function generatoreBombe(bombe, limiteBombe){
  var listaBombe = []

  while (listaBombe.length < bombe) {
    var bomba = getRandomNumber(limiteBombe)

    if (listaBombe.includes(bomba) == false) {
      listaBombe.push(bomba)
    }
  }

  return listaBombe
}

function generatoreNumeri(limiteNumeri){
  return Math.ceil(Math.random() * limiteNumeri);
}

while (flag == false) {
  var num1 = parseInt(prompt('Inserisci il tuo numero'))

  if (listaNumeri.includes(num1) == true) {
    alert('Numero invalido')
  }else if (listaBombe.includes(num1) == true) {
     alert('Il numero '+ num1 + ' coincide, hai perso');
     flag = true;
  } else if (num1 > 100 || num1 < 1) {
    alert('Numero invalido')
  } else if (isNaN(num1)) {
    alert('Numero invalido')
  } else {
    listaNumeri.push(num1)
    
    contatore++

    if(listaNumeri.length == 100) {
      alert('Hai vinto')
      flag = true
    }
  }
}

alert('Hai fatto ' + contatore + ' punti')

