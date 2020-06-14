const ONE_SIXTH = 1 / 6;
const ONE_THIRD = 1 / 3;
const TWO_THIRDS = 2 / 3;

const hue2rgb = (p, q, t) => {
	if (t < 0) {
		t += 1;
	}
	if (t > 1) {
		t -= 1;
	}
	if (t < ONE_SIXTH) {
		return p + (q - p) * 6 * t;
	}
	if (t < 0.5) {
		return q;
	}
	if (t < TWO_THIRDS) {
		return p + (q - p) * (TWO_THIRDS - t) * 6;
	}
	return p;
};

export const hslToRgb = (h, s, l) => {
	if (s === 0) {
		return new Array(3).fill(l);
	}
	const q = l < 0.5 ? l * s + l : l + s - l * s;
	const p = 2 * l - q;
	return [
		hue2rgb(p, q, h + ONE_THIRD),
		hue2rgb(p, q, h),
		hue2rgb(p, q, h - ONE_THIRD)
	];
};

export const rgbToHsl = () => {};

/*
	My attempt at figuring out how to determine colors from angles...

	And then I remembered HSL fucking exists...
	Oh well I didnt want to throw the code away so here itll stay

	const colorValue = (angle, color) => {
		const limitedAngle = angle - Math.floor(angle / 360) * 360;

		if (color === 'red') {
			// FROM 120 - 239 degrees
			if (limitedAngle >= 120 && limitedAngle < 240) {
				return (limitedAngle - 120) / 120;
			}
			// FROM 240 - 359 degrees
			else if (limitedAngle >= 240 && limitedAngle < 360) {
				return 1 - ((limitedAngle - 120) / 120 - 1);
			} else {
				return 0;
			}
		}

		if (color === 'green') {
			// FROM 0 - 119 degrees
			if (limitedAngle >= 0 && limitedAngle < 120) {
				return limitedAngle / 120;
			}
			// FROM 120 - 239 degrees
			else if (limitedAngle >= 120 && limitedAngle < 240) {
				return 1 - (limitedAngle / 120 - 1);
			} else {
				return 0;
			}
		}

		if (color === 'blue') {
			// FROM 240 - 359 degrees
			if (limitedAngle >= 240 && limitedAngle < 360) {
				return (limitedAngle - 240) / 120;
			}
			// FROM 0 - 119 degrees
			else if (limitedAngle < 120) {
				return 1 - limitedAngle / 120;
			} else {
				return 0;
			}
		}

		return 0;
	};

	const test = () =>
		colorValue(240, 'blue') === 0 &&
		colorValue(300, 'blue') === 0.5 &&
		colorValue(0, 'blue') === 1 &&
		colorValue(60, 'blue') === 0.5 &&
		colorValue(120, 'blue') === 0 &&
		colorValue(0, 'green') === 0 &&
		colorValue(60, 'green') === 0.5 &&
		colorValue(120, 'green') === 1 &&
		colorValue(180, 'green') === 0.5 &&
		colorValue(240, 'green') === 0 &&
		colorValue(120, 'red') === 0 &&
		colorValue(180, 'red') === 0.5 &&
		colorValue(240, 'red') === 1 &&
		colorValue(300, 'red') === 0.5 &&
		colorValue(0, 'red') === 0;

	const angleToRgb = angle => ({
		r: colorValue(angle, 'red'),
		g: colorValue(angle, 'green'),
		b: colorValue(angle, 'blue')
	});
*/
