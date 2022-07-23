window.addEventListener('load', function (e) {
    // let arr = ['Test','Test1','Test2',]
    // arr[0]= 'test123123'
    // console.log(arr);


    /* 
    let arr=['Ваня','Иштван','Оля',]
    arr.push('Вася')
    console.log(arr); */ // добавление под конец 

    // let arr= ['Ваня','Иштван','Оля',]
    // arr.shift()
    // console.log(arr); удаляет последный элемент

    // let arr = ['Ваня','Иштван','Оля',]
    // arr.pop()
    // console.log(arr); удаляет последный элемент

    // let arr = ['Ваня', 'Иштван', 'Оля',]
    // arr.unshift('Алекс')
    //console.log(arr); //добавляет элементы в начало

    //удаляет элемент
    /*
    let arrOne = ['Ваня','Иштван','Оля',]
    arrOne.splice(1 от первого элемента ,1 кол-во элементов )
    console.log(arrOne);
    */
    // показывает что удалили
    // let arrTwo = ['Ваня', 'Иштван', 'Оля',]
    // let removed = arrTwo.splice(1, 1)
    // console.log(removed);


    let arrTwo = ['Ваня', 'Иштван', 'Оля',]
    let removed = arrTwo.splice(1, 1, "Коля")
    console.log(arrTwo);

    let arrThree = ['Ваня', 'Иштван', 'Оля',]
    let removedThree = arrThree.splice(0, 1, "Коля","Маша")
    console.log(arrThree);
});