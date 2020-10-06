import {Configuration, ControllerProvider, InjectorService, Platform, Service} from "@tsed/common";
import {deepExtends, getValue} from "@tsed/core";
import {getSpec, SpecSerializerOptions, SpecTypes} from "@tsed/schema";
import * as Fs from "fs";
import {SwaggerSettings} from "../interfaces";
import {OpenSpec2} from "../interfaces/openspec2/OpenSpec2";
import {OpenSpec3} from "../interfaces/openspec3/OpenSpec3";
import {getReducers} from "../utils";
import {mapOpenSpec} from "../utils/mapOpenSpec";

@Service()
export class SwaggerService {
  constructor(
    private injectorService: InjectorService,
    private platform: Platform,
    @Configuration() private configuration: Configuration
  ) {}

  /**
   *
   * @returns {Spec}
   */
  public getOpenAPISpec(conf: SwaggerSettings): OpenSpec3 | OpenSpec2 {
    const defaultSpec = this.getDefaultSpec(conf);
    const doc = conf.doc;
    const finalSpec = {};

    const options = {
      paths: {},
      tags: [],
      schemas: {},
      spec: defaultSpec.openapi ? SpecTypes.OPENAPI : SpecTypes.SWAGGER,
      append(spec: any) {
        deepExtends(finalSpec, spec, getReducers());
      }
    };

    this.platform.routes.forEach(({provider, route}) => {
      const hidden = provider.store.get("hidden");
      const docs = provider.store.get("docs") || [];

      if ((!doc && !hidden) || (doc && docs.indexOf(doc) > -1)) {
        const spec = this.buildRoutes(provider, {
          ...options,
          rootPath: route.replace(provider.path, "")
        });

        options.append(spec);
      }
    });

    return deepExtends(defaultSpec, finalSpec, getReducers());
  }

  /**
   * Return the global api information.
   */
  public getDefaultSpec(conf: Partial<SwaggerSettings>): any {
    const {version, acceptMimes} = this.configuration;
    const {specPath, specVersion} = conf;
    const fileSpec: Partial<OpenSpec2 | OpenSpec3> = specPath ? this.readSpecPath(specPath) : {};

    return mapOpenSpec(getValue(conf, "spec", {}), {
      fileSpec,
      version,
      specVersion,
      acceptMimes
    });
  }

  private readSpecPath(path: string) {
    path = this.configuration.resolve(path);
    if (Fs.existsSync(path)) {
      const json = Fs.readFileSync(path, {encoding: "utf8"});
      /* istanbul ignore else */
      if (json !== "") {
        return JSON.parse(json);
      }
    }

    return {};
  }

  /**
   *
   * @param ctrl
   * @param options
   */
  private buildRoutes(ctrl: ControllerProvider, options: SpecSerializerOptions): Partial<OpenSpec2 | OpenSpec3> {
    ctrl.children
      .map((ctrl) => this.injectorService.getProvider(ctrl))
      .forEach((provider: ControllerProvider) => {
        if (!provider.store.get("hidden")) {
          const spec = this.buildRoutes(provider, {
            ...options,
            rootPath: `${options.rootPath}${provider.path}`
          });

          options.append(spec);
        }
      });

    return getSpec(ctrl.token, options);
  }
}
