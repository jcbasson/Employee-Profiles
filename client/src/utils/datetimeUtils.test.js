import { formatISOZDate } from "./datetimeUtils";
import { exportAllDeclaration } from "@babel/types";

describe("Utils::DateTimeUtils", () => {
  const setup = () => {};

  describe("formatISOZDate", () => {
    it("should convert the provided iso Z date string to DD/MM/YYY format", () => {
      const result = formatISOZDate("2016-04-29T23:20:52.285Z");

      expect(result).toEqual("29/04/2016");
    });
  });
});
