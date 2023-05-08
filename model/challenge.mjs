export default class Challenge {

	/**
	 * @type {string}
	 */
	correct;
	/**
	 * @type {string}
	 */
	incorrect;
	/**
	 * @type {string}
	 */
	colorA;
	/**
	 * @type {string}
	 */
	colorB;
	/**
	 * @type {string}
	 */
	imgUrl;

	/**
	 *
	 * @param {string} correct
	 * @param {string} incorrect
	 * @param {string} colorA
	 * @param {string} colorB
	 * @param {string} imgUrl
	 */
	constructor(correct, incorrect, colorA, colorB, imgUrl) {
		this.colorA = colorA;
		this.colorB = colorB;
		this.imgUrl = imgUrl;
		this.correct = correct;
		this.incorrect = incorrect;
	}

}


