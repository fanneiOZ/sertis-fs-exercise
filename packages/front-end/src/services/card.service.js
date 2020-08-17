import agent from "../agent";

export function fetchCards(currentUserId) {
    const userId = currentUserId ?? ''

    return agent.Card.fetch().then(data => derivedCardPayload(data, userId))
}

function derivedCardPayload(data, currentUserId) {
    return data.map(card => {
        return {
            info: card,
            editable: card.author.id === currentUserId
        }
    })
}

export function addCard(name, content, categoryName) {
    const card = {name, content, categoryName}

    return agent.Card.add(card)
        .then(data => ({
            info: data,
            editable: true
        }))
}