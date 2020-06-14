function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

export default function drawColorWheel(canvas, size = 150) {
  const context = canvas.getContext('2d');
  canvas.width = size;
  canvas.height = size;

  const centerColor = 'white';

  // Initiate variables
  let angle = 0;
  const hexCode = [0, 0, 255];
  let pivotPointer = 0;
  const colorOffsetByDegree = 4.322;
  const radius = size / 2;

  // For each degree in circle, perform operation
  while (angle < 360) {
    // find index immediately before and after our pivot
    const pivotPointerbefore = (pivotPointer + 3 - 1) % 3;

    // Modify colors
    if (hexCode[pivotPointer] < 255) {
      // If main points isn't full, add to main pointer
      hexCode[pivotPointer] =
        hexCode[pivotPointer] + colorOffsetByDegree > 255
          ? 255
          : hexCode[pivotPointer] + colorOffsetByDegree;
    } else if (hexCode[pivotPointerbefore] > 0) {
      // If color before main isn't zero, subtract
      hexCode[pivotPointerbefore] =
        hexCode[pivotPointerbefore] > colorOffsetByDegree
          ? hexCode[pivotPointerbefore] - colorOffsetByDegree
          : 0;
    } else if (hexCode[pivotPointer] >= 255) {
      // If main color is full, move pivot
      hexCode[pivotPointer] = 255;
      pivotPointer = (pivotPointer + 1) % 3;
    }

    const rgb = `rgb(${hexCode.map(h => Math.floor(h)).join(',')})`;
    const grad = context.createRadialGradient(
      radius,
      radius,
      0,
      radius,
      radius,
      radius
    );
    grad.addColorStop(0, centerColor);
    grad.addColorStop(1, rgb);
    context.fillStyle = grad;

    // draw circle portion
    context.globalCompositeOperation = 'source-over';
    context.beginPath();
    context.moveTo(radius, radius);
    context.arc(
      radius,
      radius,
      radius,
      degreesToRadians(angle),
      degreesToRadians(360)
    );
    context.closePath();
    context.fill();
    angle++;
  }
}
