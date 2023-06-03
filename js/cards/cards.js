//CONFIG CARDS

for(let card of cards) {
    card.classList.add('card__align--centar')

    const LastP = card.querySelector('p:last-child')
    LastP.classList.add('text-primary')
}
