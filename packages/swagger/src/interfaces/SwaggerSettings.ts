import {OpenSpecVersions} from "./common/OpenSpecVersions";
import {OpenSpec2} from "./openspec2/OpenSpec2";
import {OpenSpec3} from "./openspec3/OpenSpec3";

export interface SwaggerUIOptions {
  configUrl?: string;
  url?: string;
  urls?: {url: string; name: string; primaryName?: string}[];
  layout?: string;
  validatorUrl?: string;
  oauth?: any;
  authorize?: any;

  [key: string]: any;
}

export interface SwaggerSettingsBase {
  /**
   * The url subpath to access to the documentation.
   */
  path: string;
  /**
   * Specify the spec version you want to generate.
   */
  specVersion?: OpenSpecVersions;
  /**
   * Swagger file name. By default swagger.json
   */
  fileName?: string;
  /**
   * Hidden documentation. Use this to hide documentation link in the dropdown.
   */
  hidden?: string;
  /**
   * The documentation key used by `@Docs` decorator to create several swagger documentations.
   */
  doc?: string;
  /**
   * The path to the CSS file.
   */
  cssPath?: string;
  /**
   * The path to the JS file.
   */
  jsPath?: string;
  /**
   * The path to the ejs file to create html page.
   */
  viewPath?: string | false;
  /**
   * SwaggerUI options. See (https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/usage/configuration.md)
   */
  options?: SwaggerUIOptions;
  /**
   * Display the search field in the navbar.
   */
  showExplorer?: boolean;
  /**
   * Load the base spec documentation from the specified path.
   */
  specPath?: string;
  /**
   * Write the `swagger.json` spec documentation on the specified path.
   */
  outFile?: string;
}

export interface SwaggerOS2Settings extends SwaggerSettingsBase {
  specVersion?: "2.0";
  /**
   *
   */
  spec?: Partial<OpenSpec2>;
}

export interface SwaggerOS3Settings extends SwaggerSettingsBase {
  specVersion?: "3.0.1" | "3.0.2" | "3.0.3" | "3.1.0";
  /**
   *
   */
  spec?: Partial<OpenSpec3>;
}

export type SwaggerSettings = SwaggerOS2Settings | SwaggerOS3Settings;
