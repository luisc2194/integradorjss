//EVENTOS

const cardEnter = (e) => {
    const {index} = (e.target.dataset)
    cambioColor(e.target, index)
}

const cardLeave = (e) => {
    const { index } = (e.target.dataset)
    cambioColor(e.target, index, true)
}

const cardClick = (e) => {
    selected = e.currentTarget.dataset.index
    matchCategory(selected)
    eventAssigmentAll()

}

const eventCleaner = (container) => {
    container.removeEventListener('mouseenter', cardEnter)
    container.removeEventListener('mouseleave', cardLeave)
    container.removeEventListener('click', cardClick)
}

const eventAssigment = (container) => {
    container.addEventListener('mouseenter', cardEnter)
    container.addEventListener('mouseleave', cardLeave)
    container.addEventListener('click', cardClick)
}

const eventAssigmentAll = () => {

    for(let container of cardsContainer) {
    
        eventCleaner(container)

        const { index } = container.dataset
        
        if(index !== selected) {
            eventAssigment(container)
            cambioColor(container, index, true)
        }
    }
}

//eventos:asignacion

eventAssigmentAll()