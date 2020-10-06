import {OpenSpecHash} from "../common/OpenSpecHash";
import {OS3Security} from "./OS3Security";

export interface OS3Components {
  /**
   * An object to hold reusable [Schema Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#schemaObject).
   */
  schemas?: OpenSpecHash<any>;
  /**
   * An object to hold reusable [Response Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#responseObject).
   */
  responses?: OpenSpecHash<any>;
  /**
   * An object to hold reusable [Parameter Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterObject).
   */
  parameters?: OpenSpecHash<any>;
  /**
   * An object to hold reusable [Example Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#exampleObject).
   */
  examples?: OpenSpecHash<any>;
  /**
   * An object to hold reusable [Request Body Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#requestBodyObject).
   */
  requestBodies?: OpenSpecHash<any>;
  /**
   * An object to hold reusable [Header Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#headerObject).
   */
  headers?: OpenSpecHash<any>;
  /**
   * An object to hold reusable [Security Scheme Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#securitySchemeObject).
   */
  securitySchemes?: OpenSpecHash<OS3Security>;
  /**
   * An object to hold reusable [Link Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#linkObject).
   */
  links?: OpenSpecHash<any>;
  /**
   * An object to hold reusable [Callback Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#callbackObject).
   */
  callbacks?: OpenSpecHash<any>;
}
