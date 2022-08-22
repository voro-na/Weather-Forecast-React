const DescriptionComponent = (data) => {
    const date = new Date()
    const dayWeeks = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        0: 'Sunday'
    }
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const result = {
        name: data.name,
        icon: data.icon,
        temperature: Math.floor(data.temperature - 272.1),
        description: data.description,
        day: date.getDate(),
        dayWeek: date.getDay(),
        month: date.getMonth() + 1,
        time: date.toLocaleTimeString()
    }
    //console.log(result.dayWeek)
    result.dayWeek = dayWeeks[`${result.dayWeek}`];
    result.month = monthNames[result.month-1];

    return result
}
export default DescriptionComponent