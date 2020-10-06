import {cleanObject, deepExtends, getValue} from "@tsed/core";
import {SpecTypes} from "@tsed/schema";
import {OpenSpecVersions} from "@tsed/swagger";
import {OpenSpec2} from "../interfaces/openspec2/OpenSpec2";
import {OpenSpec3} from "../interfaces/openspec3/OpenSpec3";
import {getSpecType} from "./getSpecType";
import {getReducers} from "./index";
import {mapOpenSpec2} from "./mapOpenSpec2";
import {mapOpenSpec3} from "./mapOpenSpec3";

export function mapOpenSpec(spec: any, {fileSpec, version, acceptMimes, specVersion}: any): Partial<OpenSpec2 | OpenSpec3> {
  specVersion = specVersion || getValue<OpenSpecVersions>(spec, "openapi", getValue(spec, "swagger", "2.0"));

  const options = {
    version,
    specVersion,
    acceptMimes
  };

  switch (getSpecType(specVersion)) {
    case SpecTypes.OPENAPI:
      spec = mapOpenSpec3(spec, options);
      fileSpec = fileSpec ? mapOpenSpec3(fileSpec, options) : fileSpec;
      break;
    default:
    case SpecTypes.SWAGGER:
      spec = mapOpenSpec2(spec, options);
      fileSpec = fileSpec ? mapOpenSpec2(fileSpec, options) : fileSpec;
      break;
  }

  return cleanObject(deepExtends(spec, fileSpec, getReducers()));
}
