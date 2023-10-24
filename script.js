//DOM
const game = document.getElementById('game'),
	box = document.querySelectorAll('.box'),
	modalWindow = document.querySelector('.modalWindow'),
	title = document.querySelector('.title'),
	returnEl = document.getElementById('return')
// move EI or Player
let ei = true
let currentMoveEi = 0
let startOne = false
let startTwo = false
let currentMoveOnePlayer
//currentPosition
const positions = [
	/// rows
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	/// columns
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	/// arrow
	[6, 4, 2],
	[0, 4, 8],

]
setMove()
function setMove(item) {
	if (ei) { /// this X
		moveEi(item)
		ei = false
	} else { /// this 0
		if (item.textContent == 'X' || item.textContent == '0') {
			return
		}
		item.textContent = '0'
		for (let i = 0; i < positions.length; i++) {
			if (box[positions[i][0]].textContent == '0' && box[positions[i][1]].textContent == '0' && box[positions[i][2]].textContent == '0') {
				modalWindow.classList.remove('hide')
				title.textContent = 'Победили нолики! (невозможно)'
			}
		}
		ei = true
		setMove()
	}
}

function moveEi(item) {
	// let randomMove = Math.floor(Math.random() * 10)
	let randomMove = 6

	// start One
	if (randomMove >= 5 && currentMoveEi == 0) {
		box[4].textContent = 'X'
		currentMoveEi++
		startOne = true
		return
	} else if (currentMoveEi == 1 && startOne == true) {
		if (box[0].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
			currentMoveOnePlayer = 0
		} else if (box[2].textContent == '0') {
			box[8].textContent = 'X'
			currentMoveOnePlayer = 2
			currentMoveEi++
		} else if (box[8].textContent == '0') {
			box[6].textContent = 'X'
			currentMoveOnePlayer = 8
			currentMoveEi++
		} else if (box[6].textContent == '0') {
			box[0].textContent = 'X'
			currentMoveOnePlayer = 6
			currentMoveEi++
		} else if (box[1].textContent == '0') {
			box[6].textContent = 'X'
			currentMoveOnePlayer = 1
			currentMoveEi++
		} else if (box[3].textContent == '0') {
			box[6].textContent = 'X'
			currentMoveOnePlayer = 3
			currentMoveEi++
		} else if (box[5].textContent == '0') {
			box[6].textContent = 'X'
			currentMoveOnePlayer = 5
			currentMoveEi++
		} else if (box[7].textContent == '0') {
			box[6].textContent = 'X'
			currentMoveOnePlayer = 7
			currentMoveEi++
		}
	} else if (currentMoveEi == 2 && startOne == true && currentMoveOnePlayer == 0) {
		if (box[1].textContent == '0') {
			box[6].textContent = 'X'
			currentMoveEi++
		} else if (box[3].textContent == '0') {
			box[6].textContent = 'X'
			currentMoveEi++
		} else if (box[5].textContent == '0') {
			box[6].textContent = 'X'
			currentMoveEi++
		} else if (box[7].textContent == '0') {
			box[6].textContent = 'X'
			currentMoveEi++
		} else if (box[8].textContent == '0') {
			box[6].textContent = 'X'
			currentMoveEi++
		} else if (box[6].textContent == '0') {
			box[3].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 3 && startOne == true && currentMoveOnePlayer == 0) {
		if (box[1].textContent == '0') {
			box[5].textContent = 'X'
			currentMoveEi++
		} else if (box[5].textContent == '0') {
			box[8].textContent = 'X'
			currentMoveEi++
		} else if (box[7].textContent == '0') {
			box[5].textContent = 'X'
			currentMoveEi++
		} else if (box[8].textContent == '0') {
			box[5].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 4 && startOne == true && currentMoveOnePlayer == 0) {
		if (box[1].textContent == '0') {
			box[7].textContent = 'X'
			currentMoveEi++
		} else if (box[7].textContent == '0') {
			box[1].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 2 && startOne == true && currentMoveOnePlayer == 6) {
		if (box[7].textContent == '0') {
			box[8].textContent = 'X'
			currentMoveEi++
		} else if (box[1].textContent == '0') {
			box[8].textContent = 'X'
			currentMoveEi++
		} else if (box[2].textContent == '0') {
			box[8].textContent = 'X'
			currentMoveEi++
		} else if (box[3].textContent == '0') {
			box[8].textContent = 'X'
			currentMoveEi++
		} else if (box[5].textContent == '0') {
			box[8].textContent = 'X'
			currentMoveEi++
		} else if (box[8].textContent == '0') {
			box[7].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 3 && startOne == true && currentMoveOnePlayer == 6) {
		if (box[2].textContent == '0') {
			box[1].textContent = 'X'
			currentMoveEi++
		} else if (box[5].textContent == '0') {
			box[1].textContent = 'X'
			currentMoveEi++
		} else if (box[3].textContent == '0') {
			box[1].textContent = 'X'
			currentMoveEi++
		} else if (box[1].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 4 && startOne == true && currentMoveOnePlayer == 6) {
		if (box[3].textContent == '0') {
			box[5].textContent = 'X'
			currentMoveEi++
		} else if (box[5].textContent == '0') {
			box[3].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 2 && startOne == true && currentMoveOnePlayer == 2) {
		if (box[1].textContent == '0') {
			box[0].textContent = 'X'
			currentMoveEi++
		} else if (box[3].textContent == '0') {
			box[0].textContent = 'X'
			currentMoveEi++
		} else if (box[5].textContent == '0') {
			box[0].textContent = 'X'
			currentMoveEi++
		} else if (box[6].textContent == '0') {
			box[0].textContent = 'X'
			currentMoveEi++
		} else if (box[7].textContent == '0') {
			box[0].textContent = 'X'
			currentMoveEi++
		} else if (box[0].textContent == '0') {
			box[1].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 3 && startOne == true && currentMoveOnePlayer == 2) {
		if (box[3].textContent == '0') {
			box[7].textContent = 'X'
			currentMoveEi++
		} else if (box[5].textContent == '0') {
			box[7].textContent = 'X'
			currentMoveEi++
		} else if (box[6].textContent == '0') {
			box[7].textContent = 'X'
			currentMoveEi++
		} else if (box[7].textContent == '0') {
			box[6].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 4 && startOne == true && currentMoveOnePlayer == 2) {
		if (box[3].textContent == '0') {
			box[5].textContent = 'X'
			currentMoveEi++
		} else if (box[5].textContent == '0') {
			box[3].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 2 && startOne == true && currentMoveOnePlayer == 8) {
		if (box[7].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[5].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[3].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[1].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[0].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[2].textContent == '0') {
			box[5].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 3 && startOne == true && currentMoveOnePlayer == 8) {
		if (box[7].textContent == '0') {
			box[3].textContent = 'X'
			currentMoveEi++
		} else if (box[1].textContent == '0') {
			box[3].textContent = 'X'
			currentMoveEi++
		} else if (box[0].textContent == '0') {
			box[3].textContent = 'X'
			currentMoveEi++
		} else if (box[3].textContent == '0') {
			box[0].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 4 && startOne == true && currentMoveOnePlayer == 8) {
		if (box[1].textContent == '0') {
			box[7].textContent = 'X'
			currentMoveEi++
		} else if (box[7].textContent == '0') {
			box[1].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 2 && startOne == true && currentMoveOnePlayer == 1) {
		if (box[0].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[2].textContent == '0') {
			box[0].textContent = 'X'
			currentMoveEi++
		} else if (box[3].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[5].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[7].textContent == '7') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[8].textContent == '8') {
			box[2].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 3 && startOne == true && currentMoveOnePlayer == 1) {
		if (box[5].textContent == '0') {
			box[3].textContent = 'X'
			currentMoveEi++
		} else if (box[7].textContent == '0') {
			box[3].textContent = 'X'
			currentMoveEi++
		} else if (box[8].textContent == '0') {
			box[3].textContent = 'X'
			currentMoveEi++
		} else if (box[3].textContent == '0') {
			box[8].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 2 && startOne == true && currentMoveOnePlayer == 3) {
		if (box[0].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[1].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[2].textContent == '0') {
			box[8].textContent = 'X'
			currentMoveEi++
		} else if (box[5].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[7].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[8].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 3 && startOne == true && currentMoveOnePlayer == 3) {
		if (box[5].textContent == '0') {
			box[7].textContent = 'X'
			currentMoveEi++
		} else if (box[1].textContent == '0') {
			box[0].textContent = 'X'
			currentMoveEi++
		} else if (box[7].textContent == '0') {
			box[0].textContent = 'X'
			currentMoveEi++
		} else if (box[0].textContent == '0') {
			box[7].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 2 && startOne == true && currentMoveOnePlayer == 5) {
		if (box[8].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[7].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[3].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[1].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[0].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[2].textContent == '0') {
			box[8].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 3 && startOne == true && currentMoveOnePlayer == 5) {
		if (box[0].textContent == '0') {
			box[7].textContent = 'X'
			currentMoveEi++
		} else if (box[1].textContent == '0') {
			box[0].textContent = 'X'
			currentMoveEi++
		} else if (box[3].textContent == '0') {
			box[7].textContent = 'X'
			currentMoveEi++
		} else if (box[7].textContent == '0') {
			box[0].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 2 && startOne == true && currentMoveOnePlayer == 7) {
		if (box[8].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[5].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[1].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[0].textContent == '0') {
			box[2].textContent = 'X'
			currentMoveEi++
		} else if (box[2].textContent == '0') {
			box[0].textContent = 'X'
			currentMoveEi++
		}
	} else if (currentMoveEi == 3 && startOne == true && currentMoveOnePlayer == 7) {
		if (box[1].textContent == '0') {
			box[3].textContent = 'X'
			currentMoveEi++
		} else if (box[5].textContent == '0') {
			box[8].textContent = 'X'
			currentMoveEi++
		} else if (box[3].textContent == '0') {
			box[8].textContent = 'X'
			currentMoveEi++
		} else if (box[8].textContent == '0') {
			box[3].textContent = 'X'
			currentMoveEi++
		}
	}

	// start Two
	else if (randomMove < 5 && currentMoveEi == 0) {
		box[0].textContent = 'X'
		currentMoveEi++
		startTwo = true
		return
	}
	//setWinner
	for (let i = 0; i < positions.length; i++) {
		if (box[positions[i][0]].textContent == 'X' && box[positions[i][1]].textContent == 'X' && box[positions[i][2]].textContent == 'X') {
			modalWindow.classList.remove('hide')
			title.textContent = 'Победили крестики!'
			currentMoveEi = 0
		}
	}
}


returnEl.addEventListener('click', () => {
	box.forEach(item => {
		item.textContent = ''
		modalWindow.classList.add('hide')
		ei = true
		currentMoveEi = 0
		startOne = false
		startTwo = false
		setMove()
	})
})


game.addEventListener('click', e => {
	if (e.target.className == 'box') {
		setMove(e.target)
	}
})