const numStars = 1200;  // Number of stars in the field
const background = document.getElementById('background');

// Create star elements
const stars = [];  // Store all stars

// Radius for stars' starting positions
const radius = Math.min(window.innerWidth, window.innerHeight) * 5;  // 2x the smaller screen dimension

// Create stars and position them in a circular pattern around the center
for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Random angle for positioning stars in a circular pattern around the center
  const angle = Math.random() * 2 * Math.PI;
  const distance = Math.random() * radius;  // Radial distance for star placement
  const xPos = window.innerWidth / 2 + distance * Math.cos(angle);  // X position along the circle
  const yPos = window.innerHeight / 2 + distance * Math.sin(angle);  // Y position along the circle

  const zPos = Math.random() * window.innerWidth + 300;  // Depth value, far away stars

  star.style.left = `${xPos}px`;
  star.style.top = `${yPos}px`;

  // Store the star with its data for later
  star.data = {
    x: xPos,
    y: yPos,
    z: zPos,  // Depth or "distance" from the camera
    size: Math.random() * 3 + 1,  // Moderate size of the star
    originalX: xPos,  // Store the original position of the star
    originalY: yPos,  // Store the original position of the star
  };

  // Add star to array
  stars.push(star);

  // Append the star to the background container
  background.appendChild(star);
}

// Function to update stars' position (moving towards the center)
function updateStars() {
  stars.forEach(star => {
    const starData = star.data;

    // Calculate direction towards the center (user perspective)
    const dx = window.innerWidth / 2 - starData.x;
    const dy = window.innerHeight / 2 - starData.y;
    const distanceToCenter = Math.sqrt(dx * dx + dy * dy);  // Distance from the star to the center

    // Apply gentle movement towards the center (user perspective)
    const moveDistance = 0.05;  // Slow speed for the stars coming towards the user

    // Move the star slightly towards the center
    starData.x += Math.cos(Math.atan2(dy, dx)) * moveDistance;
    starData.y += Math.sin(Math.atan2(dy, dx)) * moveDistance;

    // Reset the star once it reaches the user (center of the screen)
    if (distanceToCenter < 5) {  // Threshold for resetting star
      starData.x = starData.originalX;
      starData.y = starData.originalY;
      starData.z = Math.random() * window.innerWidth + 300; // Reset depth as well
    }

    // Apply smooth zoom effect for perspective (coming closer to the user)
    starData.z += 1;

    // Reset the star if it gets too close or if it goes beyond a limit
    if (starData.z > window.innerWidth) {
      starData.z = Math.random() * 500 + 100; // Reset it to a far distance
    }

    // Calculate the size of the star based on its z position
    const scale = 1 - starData.z / window.innerWidth;  // Stars grow as they approach
    const size = Math.max(starData.size * scale, 1);  // Prevent size from becoming too small

    // Reposition the star based on its z position (more perspective in the center)
    const perspectiveX = (starData.x - window.innerWidth / 2) * (starData.z / window.innerWidth);
    const perspectiveY = (starData.y - window.innerHeight / 2) * (starData.z / window.innerWidth);

    // Update star position and size based on perspective
    star.style.left = `${window.innerWidth / 2 + perspectiveX}px`;
    star.style.top = `${window.innerHeight / 2 + perspectiveY}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
  });

  // Request the next frame for smooth continuous movement
  requestAnimationFrame(updateStars);
}

// Start updating the stars immediately
updateStars();
