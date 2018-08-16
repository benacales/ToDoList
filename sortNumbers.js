
    // Generates an array of random numbers between 0 and 20
    // const randomArray = [...Array(10).keys()].map(_ =>
    //     Math.floor(Math.random() * 20)
    // )
    function sort(array) {
        array.sort(function(lhs, rhs) {
            return lhs > rhs;
        });
        return array;
    }
    // const originalArray = Array.from(toDos)
    // const sortedArray = sort(toDos)
    // console.log(
    //     'SORT NUMBERS: Array before and after sort: ',
    //     originalArray,
    //     sortedArray
    // )

