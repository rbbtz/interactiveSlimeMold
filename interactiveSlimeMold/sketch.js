// Object to hold the custom button function
const OPC = {};

// Function to create a button with a specific ID and text
OPC.button = function(id, text) {
  // Add your OPC.button implementation here
};

// Create a button with ID "btoButton" and text "back to origin"
OPC.button("btoButton", "back to origin");

// Initialize variables and constants
const agentColor = new Uint8Array([0, 0, 0]);
const agentsNum = 1000;
const sensorOffset = 10;
const sensorAngle = Math.PI / 7;
const turnAngle = Math.PI / 5;
let agents;

// Setup the canvas and initial state
function setup() {
  createCanvas(720, 720);
  pixelDensity(1);
  background(0);
  agents = new Agents();
}

// Reset the agents when the mouse is pressed, and make them move to mouse position
function mousePressed() {
  agents = new Agents();
  agents.agents.forEach(agent => {
    agent.x = mouseX;
    agent.y = mouseY;
  });
}

// Draw a blue line when the mouse is moved and change agents direction to mouse position
function mouseMoved() {
  stroke(200, 200, 100);
  strokeWeight(3);
  line(pmouseX, pmouseY, mouseX, mouseY);

  agents.agents.forEach(agent => {
    agent.dir = Math.atan2(mouseY - agent.y, mouseX - agent.x);
  });
}

// Main drawing function
function draw() {
  background(255, 10);

  // Update the pixel array based on the agent positions
  loadPixels();
  for (let i = 10; i--; ) {
    agents.update();
  }
  updatePixels();
}

// Agent class representing an individual agent
class Agent {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.dir = random(TWO_PI);
  }

  // Update the agent's direction based on sensor data
  updateDirection() {
    const right = this.sense(+sensorAngle);
    const center = this.sense(0);
    const left = this.sense(-sensorAngle);

    const threeWays = [left, center - 1, right];
    const minIndex = threeWays.indexOf(min(...threeWays));
    this.dir += turnAngle * (minIndex - 1);
  }

  // Sense the surrounding pixels based on the agent's direction and offset
  sense(dirOffset) {
    const angle = this.dir + dirOffset;
    let x = floor(this.x + sensorOffset * cos(angle));
    let y = floor(this.y + sensorOffset * sin(angle));
    x = (x + width) % width;
    y = (y + height) % height;

    const index = (x + y * width) * 4;
    return pixels[index];
  }

  // Update the agent's position and update the corresponding pixel value
  updatePosition() {
    this.x += cos(this.dir);
    this.y += sin(this.dir);
    this.x = (this.x + width) % width;
    this.y = (this.y + height) % height;

    const index = floor(this.x) + floor(this.y) * width;
    pixels.set(agentColor, index * 4);
  }
}

// Agents class representing a collection of agents
class Agents {
  constructor() {
    this.agents = Array(agentsNum)
      .fill()
      .map(() => new Agent());
  }

  // Update the direction and position of all agents
  update() {
    this.agents.forEach((agent) => agent.updateDirection());
    this.agents.forEach((agent) => agent.updatePosition());
  }
}

// Call the setup function to initialize the canvas and agents
setup();

// Call the draw function in a loop to keep updating the canvas
function mainLoop() {
  draw();
  requestAnimationFrame(mainLoop);
}
mainLoop();

