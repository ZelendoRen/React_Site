timer =


    onmessage = function (e) {
        console.log('Worker: Message received from main script');
        const result = e.data[0] * e.data[1];
        if (e.data[0] == 1) {
            setInterval(function () {
                let timeMinut = e.data[1]
                let seconds = timeMinut % 60 // Получаем секунды
                let minutes = timeMinut / 60 % 60 // Получаем минуты
                let hour = timeMinut / 60 / 60 % 60 // Получаем часы
                // Условие если время закончилось то...
                if (timeMinut <= 0) {
                    // Таймер удаляется
                    clearInterval(timer);
                    // Выводит сообщение что время закончилось
                    alert("Время закончилось");
                } else { // Иначе
                    // Создаём строку с выводом времени
                    let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
                    // Выводим строку в блок для показа таймера
                    postMessage(strTimer)
                }
                --timeMinut; // Уменьшаем таймер
            }, 1000)
        } else {
            const workerResult = 'Result: ' + result;
            console.log('Worker: Posting message back to main script');
            postMessage(workerResult);
        }
    }
