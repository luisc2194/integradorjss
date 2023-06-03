// EVENTS 

const resetCategories = () => {

    total = null
    selected = null
    eventAssigmentAll()
    totalTag.innerText = totalText

}

const setCategory = (e) => {
    const option = e.target.value
    
    if (option === 'none'){
        resetCategories()
        return
    }

    category = option
    const index = categories[category].value
    const container = cardsContainer[index]

    selected = index
    cambioColor(container, index)
    eventAssigmentAll()

    totalPrice()
}

const setTicket = (e) => {

    const { value } = e.target

    if(value < 0 || isNaN (value)){
        e.target.value = 0
        total = null
        return 
    }

    tickets = value
    totalPrice()
}

//EVENTOS DE BOTONES

const reset = (e) => {
    e.preventDefault()
    
    for(let input of inputs)
        input.value = ''

    select.value = 'none'

    resetCategories()
}

const submit = (e) => {

    e.preventDefault()

    const { firstname, lastname, email, tickets, category } = form
    const verified = {

        firstname: firstname.value !== '',
        lastname: lastname.value !== '',
        email: email.value.includes('@'),
        tickets: tickets.value > 0,
        category: category.value !== 'none' 
    }  

    const values = Object.values(verified)
    const submitAccepted = values.every(value => value)
    console.log(submitAccepted)

    submitAccepted
        ?location.href = '/inscripto.html'
        : alert('para completar la compra debes llenar todos los campos correctamente')

    
}

form.category.addEventListener('change', setCategory)

form.tickets.addEventListener('change' ,setTicket)
form.tickets.addEventListener('keyup' ,setTicket)

form.addEventListener('submit', submit)
cleanBtn.addEventListener('click', reset)