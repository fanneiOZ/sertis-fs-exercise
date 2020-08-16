type contentTypeAlias = "application/json" | "text/html";

export function Guard<T extends { new (...args: any[]): {} }>(constructor: T) {
  constructor.prototype.guard = true;

  return constructor;
}