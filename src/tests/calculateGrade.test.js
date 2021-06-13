import calculateGrade from "../assets/js/calculateGrade";

describe("calculateGrade", () => {
	describe("valid cases", () => {
		describe("when score 80 - 100", () => {
			it("should return 'A'", () => {
				const result = calculateGrade(80);
				const result2 = calculateGrade(100);

				expect(result).toBe("A");
				expect(result2).toBe("A");
			});
		});

		describe("when score 70 - 79", () => {
			it("should return 'B'", () => {
				const result = calculateGrade(70);
				const result2 = calculateGrade(79);

				expect(result).toBe("B");
				expect(result2).toBe("B");
			});
		});

		describe("when score 60 - 69", () => {
			it("should return 'C'", () => {
				const result = calculateGrade(60);
				const result2 = calculateGrade(69);

				expect(result).toBe("C");
				expect(result2).toBe("C");
			});
		});

		describe("when score 50 - 59", () => {
			it("should return 'D'", () => {
				const result = calculateGrade(50);
				const result2 = calculateGrade(59);

				expect(result).toBe("D");
				expect(result2).toBe("D");
			});
		});

		describe("when score less than 50", () => {
			it("should return 'F'", () => {
				const result = calculateGrade(0);
				const result2 = calculateGrade(49);

				expect(result).toBe("F");
				expect(result2).toBe("F");
			});
		});
	});

	describe("invalid cases", () => {
		describe("when not pass data", () => {
			it("should return null", () => {
				const result = calculateGrade();

				expect(result).toBe(null);
			});
		});

		describe("when pass undefined", () => {
			it("should return null", () => {
				const result = calculateGrade(undefined);

				expect(result).toBe(null);
			});
		});

		describe("when pass negative number", () => {
			it("should return null", () => {
				const result = calculateGrade(-1);

				expect(result).toBe(null);
			});
		});

		describe("when pass score over 100", () => {
			it("should return null", () => {
				const result = calculateGrade(101);

				expect(result).toBe(null);
			});
		});

		describe("when pass decimal number", () => {
			it("should not round up", () => {
				const result = calculateGrade(79.80);

				expect(result).toBe("B");
			});
		});

		describe("when pass not type number data", () => {
			it("should return null", () => {
				const resultWithString = calculateGrade("80");
				const resultWithArray = calculateGrade([80]);
				const resultWithObject = calculateGrade({ score: 80 });

				expect(resultWithString).toBe(null);
				expect(resultWithArray).toBe(null);
				expect(resultWithObject).toBe(null);
			});
		});
	});
});