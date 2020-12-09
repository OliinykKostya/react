const apiRequest = async () => {
    console.log("apiRequest")
    const response = await fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
    const json = await response.json()

    const preparedListOfEmployees = json.map(item => ({
        ...item,
        isChaked: false,
    }))
    console.log(preparedListOfEmployees)
    return preparedListOfEmployees
}

export default apiRequest