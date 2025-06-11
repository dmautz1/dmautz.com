import { createRequire as VPV_createRequire } from "node:module";
import { fileURLToPath as VPV_fileURLToPath } from "node:url";
import { dirname as VPV_dirname } from "node:path";
const require = VPV_createRequire(import.meta.url);
const __filename = VPV_fileURLToPath(import.meta.url);
const __dirname = VPV_dirname(__filename);


// api/tsconfig.json
var compilerOptions = {
  target: "ES2021",
  module: "ESNext",
  skipLibCheck: true,
  moduleResolution: "node",
  resolveJsonModule: true,
  isolatedModules: true,
  noEmit: true,
  strict: true,
  noUnusedLocals: true,
  noUnusedParameters: true,
  noFallthroughCasesInSwitch: true
};
var tsconfig_default = {
  compilerOptions
};
export {
  compilerOptions,
  tsconfig_default as default
};
