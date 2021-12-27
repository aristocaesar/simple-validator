// ISMAIL
import notNull from "../utils/notNull.js";

export default function (str) {
  if (notNull(str)) {
    if (str.length <= 254) {
      if (str.includes("@")) {
        return true;
      } else {
        return false;
      }
    } else {
      throw new Error("Email tidak valid !");
    }
  } else {
    throw new Error("Email kosong !");
  }
}
