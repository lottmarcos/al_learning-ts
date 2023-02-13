export function TimeControl() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const currentMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const t1 = performance.now();
      const methodReturn = currentMethod.apply(this, args);
      const t2 = performance.now();
      console.log(`${propertyKey}: ${(t2 - t1) / 1000} seconds`);
      methodReturn;
    };
    return descriptor;
  };
}
