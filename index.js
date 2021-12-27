import isEquals from "./src/lib/isEquals.js";
import isEmail from "./src/lib/isEmail.js";
import isUrl from "./src/lib/isUrl.js";
// is ip

const version = "1.0.0";

const validator = {
  version,
  isEquals,
  isEmail,
  isUrl,
};

export default validator;
