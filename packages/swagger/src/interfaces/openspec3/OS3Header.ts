import {Schema} from "swagger-schema-official";
import {OpenSpecRef} from "../common/OpenSpecRef";

export interface OS3Header {
  /**
   * A description of the header. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * The schema defining the type used for the header.
   */
  schema?: Schema | OpenSpecRef;
}
