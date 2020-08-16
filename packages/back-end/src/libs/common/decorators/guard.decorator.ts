type contentTypeAlias = "application/json" | "text/html";

export function Guard() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    target.enableGuard()
  };
}
