const calculateGrade = (score) => {
	if (typeof score === "number"
		&& score <= 100
		&& score >= 0
	) {
		if (score >= 80) {
			return "A";
		} else if (score >= 70) {
			return "B";
		} else if (score >= 60) {
			return "C";
		} else if (score >= 50) {
			return "D";
		} else if (score < 50) {
			return "F";
		}
	}
	return null;
};

export default calculateGrade;