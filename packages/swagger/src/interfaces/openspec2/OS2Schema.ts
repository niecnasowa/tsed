import {OpenSpecExternalDocs} from "../common/OpenSpecExternalDocs";
import {OpenSpecHash} from "../common/OpenSpecHash";
import {OpenSpecBaseSchema} from "../common/OpenSpecSchema";
import {OS2Types} from "./OS2Types";

export interface OS2XML {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
}

export interface OS2BaseSchema extends OpenSpecBaseSchema {
  type?: OS2Types;
  /**
   * Required if type is "array". Describes the type of items in the array.
   */
  items?: OS2Schema | OS2Schema[];
}

export interface OS2Schema extends OS2BaseSchema {
  $ref?: string;
  allOf?: OS2Schema[];
  additionalProperties?: OS2Schema | boolean;
  properties?: OpenSpecHash<OS2Schema>;
  /**
   * A free-form property to include an example of an instance for this schema.
   */
  required?: string[];
  /**
   * Adds support for polymorphism.
   * The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it.
   */
  discriminator?: string;
  /**
   * Relevant only for Schema "properties" definitions. Declares the property as "read only". This means that it MAY be sent as part of a response but MUST NOT be sent as part of the request. Properties marked as readOnly being true SHOULD NOT be in the required list of the defined schema. Default value is false.
   */
  readOnly?: boolean;
  /**
   * This MAY be used only on properties schemas. It has no effect on root schemas. Adds Additional metadata to describe the XML representation format of this property.
   */
  xml?: OS2XML;
  /**
   * Additional external documentation for this schema.
   */
  externalDocs?: OpenSpecExternalDocs;
  /**
   * Additional external documentation for this schema.
   */
  example?: any;
}
