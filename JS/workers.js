const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

let getWorthyWorkers = function(array) {
    //принимаем на вход массив, прогоняем объекты по salary, и если они больше 1000, выводим name. 
    arrResult = []

    for (var i = 0; i<workers.length;i++) {

        if (workers[i].salary > 1000) {
            arrResult.push(workers[i].name)
        }
    }
    return arrResult
}

console.log(getWorthyWorkers(workers))
