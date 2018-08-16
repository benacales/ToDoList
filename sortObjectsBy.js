{
    const todos = [
        {
            description: 'Brush my teeth',
            id: 0,
            priority: 0, // I mean, I brushed them last night, so it's all good right?
        },
        {
            description: 'Feed the pets',
            id: 5,
            priority: 2,
        },
        {
            description: 'Eat breakfast',
            id: 2,
            priority: 1,
        },
        {
            description: 'Load the dishwasher',
            id: 4,
            priority: 1,
        },
        {
            description: 'Get the oil changed',
            id: 1,
            priority: 2,
        },
        {
            description: 'Make the bed',
            id: 3,
            priority: 0,
        },
    ]

    function sortBy(array, field) {
        array.sort(function(lhs , rhs) {
        return lhs[field] > rhs[field]
        })
        return array;
    }

    const originalArray = Array.from(toDos)
    const sortedArray = sortBy(toDos, "description")
    console.log(
        'SORT BY FIELD: Array before and after sort: ',
        originalArray,
        sortedArray
    )
}
