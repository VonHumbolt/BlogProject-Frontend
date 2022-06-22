const convertDate = (date) => {
    return new Date(date).toLocaleDateString("en-us",{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export default convertDate;