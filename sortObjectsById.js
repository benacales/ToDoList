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
    function sortById(array) {
        array.sort(function(lhs , rhs) {
            // return lhs.id  > rhs.id;
            return lhs["id"] > rhs["id"]
        });
        return array;
    }
    const originalArray = Array.from(toDos)
    const sortedArray = sortById(toDos)
    console.log(
        'TODOS BY ID: Array before and after sort: ',
        originalArray,
        sortedArray
    )
}
