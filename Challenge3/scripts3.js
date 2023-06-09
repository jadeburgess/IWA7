const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

/*
const owed = Math.abs(parseFloat(leoBalance) + parseFloat(sarahBalance)).toFixed(2)
const leo = `${leoName} ${leoSurname} Owed: R ${parseFloat(sarahBalance).toFixed(2)}\n`
const sarah = `${sarahName} ${sarahSurname} Owed: R ${parseFloat(sarahBalance).toFixed(2)}\n`
const total = `\tTotal amount owed: R ${owed}\n`
const result = (`\n${leo}${sarah}${divider}\n${total}${divider}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '))
console.log(result)
*/




const owed = Math.abs(parseFloat(leoBalance) + parseFloat(sarahBalance)).toFixed(2)
const leo = `${leoName} ${leoSurname} Owed: R ${parseFloat(sarahBalance).toLocaleString('en-US').replace(',', ' ')}\n`
const sarah = `${sarahName} ${sarahSurname} Owed: R ${parseFloat(sarahBalance).toLocaleString('en-US').replace(',', ' ')}\n`
const total = `\tTotal amount owed: R ${parseFloat(owed).toLocaleString('en-US').replace(',', ' ')}\n`
const result = `\n${leo}${sarah}${divider}\n${total}${divider}`

console.log(result)


