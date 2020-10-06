import {Operation} from "swagger-schema-official";
import {OpenSpecExternalDocs} from "../common/OpenSpecExternalDocs";
import {OpenSpecHash} from "../common/OpenSpecHash";
import {OS3Parameter} from "./OS3Parameter";
import {OS3Paths} from "./OS3Paths";
import {OS3RequestBody} from "./OS3RequestBody";
import {OS3Response} from "./OS3Response";
import {OS3Server} from "./OS3Server";

export interface OS3Operation {
  /**
   * Unique string used to identify the operation. The id MUST be unique among all operations described in the API. Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is RECOMMENDED to follow common programming naming conventions.
   */
  operationId: string;
  /**
   * A verbose explanation of the operation behavior. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * A short summary of what the operation does.
   */
  summary?: string;
  /**
   * A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier.
   */
  tags?: string[];
  /**
   * Additional external documentation for this operation.
   */
  externalDocs?: OpenSpecExternalDocs;
  /**
   * A list of parameters that are applicable for this operation. If a parameter is already defined at the [Path Item](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#pathItemParameters),
   * the new definition will override it but can never remove it.
   * The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a [name](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterName) and (location)[https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterIn].
   * The list can use the [Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#referenceObject) to link to parameters that are defined at the [OpenAPI Object's components/parameters](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#componentsParameters).
   */
  parameters?: OS3Parameter[];
  /**
   * The request body applicable for this operation.
   * The requestBody is only supported in HTTP methods where the HTTP 1.1 specification [RFC7231](https://tools.ietf.org/html/rfc7231#section-4.3.1) has explicitly defined semantics for request bodies.
   * In other cases where the HTTP spec is vague, requestBody SHALL be ignored by consumers.
   */
  requestBody?: OS3RequestBody;
  /**
   * The list of possible responses as they are returned from executing this operation.
   */
  responses: OpenSpecHash<OS3Response>;
  /**
   * Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default value is false.
   */
  deprecated?: boolean;
  /**
   * A declaration of which security mechanisms can be used for this operation. The list of values includes alternative security requirement objects that can be used.
   * Only one of the security requirement objects need to be satisfied to authorize a request.
   * This definition overrides any declared top-level [security](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#oasSecurity). To remove a top-level security declaration, an empty array can be used.
   */
  security?: OpenSpecHash<string[]>[];
  /**
   * An alternative server array to service this operation. If an alternative server object is specified at the Path Item Object or Root level, it will be overridden by this value.
   */
  servers?: OS3Server[];
  /**
   *
   */
  callbacks?: OpenSpecHash<OpenSpecHash<OS3Paths>>;
}
