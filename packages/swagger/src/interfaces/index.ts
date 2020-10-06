import {SwaggerSettings} from "./SwaggerSettings";

declare global {
  namespace TsED {
    interface Configuration {
      swagger: SwaggerSettings[];
    }
  }
}

export * from "./SwaggerSettings";
export * from "./common/OpenSpecVersions";
