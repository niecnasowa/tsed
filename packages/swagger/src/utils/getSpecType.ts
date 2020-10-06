import {SpecTypes} from "@tsed/schema";

export function getSpecType(version: string) {
  return version.startsWith("3.") ? SpecTypes.OPENAPI : SpecTypes.SWAGGER;
}
