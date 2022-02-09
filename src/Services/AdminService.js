


export const Welcome = () => {
    return "hello user";
}

export const GoodMorning = (name) => {
    return `good morning ${name}`
}

export const GoodMorningabove18 = (age, name) => {
    if (age >= 18) {
        return `good morning ${name}`
    }
    return "too young";
}

export const GoodNight = () => {
    return <h1>Good Night</h1>
}

export const Email = (mail) => {
    return <a href={mail}></a>
}
