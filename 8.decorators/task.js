//Задача № 1
function cachingDecoratorNew(func) {
    const cache = [];

    function wrapper(...arg) {
        const hash = md5(arg);
        const objectInCache = cache.find((item) => item.hash === hash);
        if (objectInCache) {
            return "Из кеша: " + objectInCache.value;
        } else {
            const value = func(...arg);
            cache.push({hash, value});
            if (cache.length > 5) {
                cache.shift();
            }
            return "Вычисляем: " + value;
        }
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;

    function wrapper(...args) {
        wrapper.allCount++

        if (timeoutId) {
            clearTimeout(timeoutId);
        } else {
            func(args);
            wrapper.count++
        }

        timeoutId = setTimeout(() => {
            func(args);
            wrapper.count++
        }, delay);

    }

    wrapper.allCount = 0;
    wrapper.count = 0;

    return wrapper;
}
