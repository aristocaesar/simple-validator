import validator from "./index.js";

if (validator.isIp("10.10.10.10")) {
  console.log("ok");
} else {
  console.log("no");
}
