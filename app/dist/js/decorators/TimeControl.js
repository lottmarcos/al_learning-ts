export function TimeControl(isSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const currentMethod = descriptor.value;
        let divisor = 1;
        let timeUnit = "miliseconds";
        if (isSeconds) {
            divisor = 1000;
            timeUnit = "seconds";
        }
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const methodReturn = currentMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}: ${(t2 - t1) / divisor} ${timeUnit}`);
            methodReturn;
        };
        return descriptor;
    };
}
