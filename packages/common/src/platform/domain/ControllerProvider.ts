import {Enumerable, NotEnumerable, Type} from "@tsed/core";
import {Provider, ProviderType} from "@tsed/di";
import {EndpointMetadata, IControllerMiddlewares} from "../../mvc";

import {IPlatformDriver} from "../interfaces/IPlatformDriver";

export interface IChildrenController extends Type<any> {
  $parentCtrl?: ControllerProvider;
}

export class ControllerProvider extends Provider<any> {
  @NotEnumerable()
  public router: IPlatformDriver;
  /**
   * The path for the controller
   */
  @Enumerable()
  public path: string;
  /**
   * Controllers that depend to this controller.
   * @type {Array}
   * @private
   */
  @NotEnumerable()
  private _children: IChildrenController[] = [];

  constructor(provide: any) {
    super(provide);
    this.type = ProviderType.CONTROLLER;
  }

  /**
   *
   * @returns {Endpoint[]}
   */
  get endpoints(): EndpointMetadata[] {
    return EndpointMetadata.getEndpoints(this.provide);
  }

  /**
   *
   * @returns {Type<any>[]}
   */
  get children(): IChildrenController[] {
    return this._children;
  }

  /**
   *
   * @param children
   */
  @Enumerable()
  set children(children: IChildrenController[]) {
    this._children = children;
    this._children.forEach((d) => (d.$parentCtrl = this));
  }

  /**
   *
   * @returns {IRouterSettings}
   */
  get routerOptions(): any {
    return this.store.get("routerOptions") || {};
  }

  /**
   *
   * @param value
   */
  set routerOptions(value: any) {
    this.store.set("routerOptions", value);
  }

  /**
   *
   * @returns {ControllerProvider}
   */
  get parent() {
    return this.provide.$parentCtrl;
  }

  /**
   *
   * @returns {any[]}
   */
  get middlewares(): IControllerMiddlewares {
    return Object.assign(
      {
        use: [],
        useAfter: [],
        useBefore: []
      },
      this.store.get("middlewares") || {}
    );
  }

  /**
   *
   * @param middlewares
   */
  set middlewares(middlewares: IControllerMiddlewares) {
    const mdlwrs = this.middlewares;
    const concat = (key: string, a: any, b: any) => (a[key] = a[key].concat(b[key]));

    Object.keys(middlewares).forEach((key: string) => {
      concat(key, mdlwrs, middlewares);
    });
    this.store.set("middlewares", mdlwrs);
  }

  /**
   * Resolve final endpoint url.
   */
  public getEndpointUrl(routerPath?: string): string {
    return (routerPath === this.path ? this.path : (routerPath || "") + this.path).replace(/\/\//gi, "/");
  }

  /**
   *
   */
  public hasEndpointUrl() {
    return !!this.path;
  }

  /**
   *
   * @returns {boolean}
   */
  public hasChildren(): boolean {
    return !!this.children.length;
  }

  /**
   *
   * @returns {boolean}
   */
  public hasParent(): boolean {
    return !!this.provide.$parentCtrl;
  }
}
