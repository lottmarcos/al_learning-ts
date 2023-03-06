export function TimeControl(isSeconds: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const currentMethod = descriptor.value;
    let divisor = 1;
    let timeUnit = "miliseconds";
    if (isSeconds) {
      divisor = 1000;
      timeUnit = "seconds";
    }
    descriptor.value = function (...args: any[]) {
      const t1 = performance.now();
      const methodReturn = currentMethod.apply(this, args);
      const t2 = performance.now();
      console.log(`${propertyKey}: ${(t2 - t1) / divisor} ${timeUnit}`);
      methodReturn;
    };
    return descriptor;
  };
}
