export function ratingColorDetect(number) {
  let color;
  if (!number) {
    color = '#959393';
  } else if (number < 50) {
    color = '#ce3030';
  } else if (number < 70) {
    color = '#e9ad3d';
  } else if (number >= 70) {
    color = '#437d33';
  }
  return color;
}
