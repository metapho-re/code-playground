export const jsCodeSample = `const ROW_COUNT = 80;
const COLUMN_COUNT = 200;
const THICKNESS = 3200;
const SPACING = 4;
const MARGIN = 0;
const DRAG = 0.85;
const EASE = 0.25;

const particleCount = ROW_COUNT * COLUMN_COUNT;
const canvasWidth = COLUMN_COUNT * SPACING + MARGIN * 2;
const canvasHeight = ROW_COUNT * SPACING + MARGIN * 2;

const particles = [];

let isMouseInDocument = false;
let isDrawingImage = false;
let mobileX, mobileY;

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const container = document.getElementById("container");

container.style.marginLeft = \`\${Math.round(canvasWidth * -0.5)}px\`;
container.style.marginTop = \`\${Math.round(canvasHeight * -0.5)}px\`;

container.appendChild(canvas);

container.addEventListener("mousemove", ({ clientX, clientY }) => {
  const { left, top } = container.getBoundingClientRect();

  mobileX = clientX - left;
  mobileY = clientY - top;

  isMouseInDocument = true;
});

container.addEventListener("mouseleave", () => {
  isMouseInDocument = false;
});

Array(particleCount)
  .fill()
  .forEach((_, index) => {
    const x = MARGIN + SPACING * (index % COLUMN_COUNT);
    const y = MARGIN + SPACING * Math.floor(index / COLUMN_COUNT);

    particles[index] = Object.create({
      currentX: x,
      currentY: y,
      originalX: x,
      originalY: y,
      velocityX: 0,
      velocityY: 0,
    });
  });

function getRandomColorValue() {
  return Math.floor(Math.random() * 255);
}

function drawImage() {
  const imageData = context.createImageData(canvasWidth, canvasHeight);

  particles.forEach(({ currentX, currentY }) => {
    const rgbaIndex = (~~currentX + ~~currentY * canvasWidth) * 4;

    imageData.data[rgbaIndex] = getRandomColorValue();
    imageData.data[rgbaIndex + 1] = getRandomColorValue();
    imageData.data[rgbaIndex + 2] = getRandomColorValue();
    imageData.data[rgbaIndex + 3] = 255;
  });

  context.putImageData(imageData, 0, 0);
}

function updateParticles() {
  if (!isMouseInDocument) {
    const timestamp = new Date() * 0.001;

    mobileX =
      canvasWidth * 0.5 +
      Math.cos(timestamp * 2.1) *
        Math.cos(timestamp * 0.9) *
        canvasWidth *
        0.45;

    mobileY =
      canvasHeight * 0.5 +
      Math.sin(timestamp * 3.2) *
        Math.tan(Math.sin(timestamp * 0.8)) *
        canvasHeight *
        0.45;
  }

  particles.forEach((particle) => {
    const distanceX = mobileX - particle.currentX;
    const distanceY = mobileY - particle.currentY;
    const squaredDistance = distanceX ** 2 + distanceY ** 2;

    const ratio = -THICKNESS / squaredDistance;

    if (squaredDistance < THICKNESS) {
      const angle = Math.atan2(distanceY, distanceX);

      particle.velocityX += ratio * Math.cos(angle);
      particle.velocityY += ratio * Math.sin(angle);
    }

    particle.currentX +=
      (particle.velocityX *= DRAG) +
      (particle.originalX - particle.currentX) * EASE;

    particle.currentY +=
      (particle.velocityY *= DRAG) +
      (particle.originalY - particle.currentY) * EASE;
  });
}

function step() {
  isDrawingImage = !isDrawingImage;

  if (isDrawingImage) {
    drawImage();
  } else {
    updateParticles();
  }

  requestAnimationFrame(step);
}

step();`;
