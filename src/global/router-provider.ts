class RouterProvider {
  private _ionRouterElement: HTMLIonRouterElement;
  get ionRouterElement() {
    return this._ionRouterElement
  }
  set ionRouterElement(e: HTMLIonRouterElement) {
    this._ionRouterElement = e;
  }
}
const routerProvider = new RouterProvider()
export default routerProvider;
