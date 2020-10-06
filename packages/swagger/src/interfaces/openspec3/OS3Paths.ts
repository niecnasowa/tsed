import {Reference} from "swagger-schema-official";
import {OpenSpecPath} from "../common/OpenSpecPath";
import {OS2Parameter} from "../openspec2/OS2Parameter";
import {OS3Operation} from "./OS3Operation";
import {OS3Server} from "./OS3Server";

export interface OS3Paths extends OpenSpecPath<OS3Operation> {
  /**
   * An optional, string summary, intended to apply to all operations in this path.
   */
  summary?: string;
  /**
   * An optional, string description, intended to apply to all operations in this path. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * A definition of a TRACE operation on this path.
   */
  trace?: OS3Operation;
  /**
   * An alternative server array to service all operations in this path.
   */
  servers?: OS3Server[];
  /**
   * A list of parameters that are applicable for all the operations described under this path. These parameters can be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters.
   */
  parameters?: (OS2Parameter | Reference)[];
}
