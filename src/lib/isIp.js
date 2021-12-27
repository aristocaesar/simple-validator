import notNull from "../utils/notNull.js";

// IS IP
export default function (ipAdd) {
  if (notNull(ipAdd)) {
    const ip = ipAdd.split(".");
    if (ip.length === 4) {
      for (let i = 0; ip.length > i; i++) {
        let currentIp = ip[i].match(/\d+/g).join("");
        let numIp = parseInt(currentIp);
        if (currentIp.length > 3 || numIp > 255) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    throw new Error("IP kosong !");
  }
}
