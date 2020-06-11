import { describe, it, expect, makeDirname } from "https://taisukef.github.io/denolib/nodelikeassert.mjs"

import find from "../lib/find.mjs";

describe('find', function() {
  it('#z2h', async () => {
    const obj = await find("福井県鯖江市新横江2丁目3-4");
    console.log(JSON.stringify(obj, null, 2));
    const mustbe = {
      "adr": {
        "pref": "福井県",
        "city": "鯖江市",
        "tail": "丁目3-4",
        "town": "新横江2"
      },
      "lgcode": 18207,
      "lgcodepref": 18000,
      "latlng": [
        35.941043,
        136.19964
      ]
    }
    expect(obj).deep.equal(mustbe);
  });
});
