import notNull from "../utils/notNull.js";

// IS URL
export default function (url) {
  if (notNull(url)) {
    const regex = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
    return regex.test(url);
  } else {
    throw new Error("Url kosong !");
  }
}
