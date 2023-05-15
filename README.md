# interactiveSlimeMold

Copy the sketch.js file and paste into the editor playground at https://editor.p5js.org or open the index.html file for the experience in a web browser.

This p5.js script is for creating a simulation of a group of autonomous agents moving around a canvas. The movement of these
agents is influenced by the user's mouse actions and they interact with their environment, which is represented by the pixel
array of the canvas. Here’s the code broken down in detail:

1.	Object and function definitions:
A new object, OPC, is created to hold a custom button function. However, the actual implementation of this function is not
provided in the code snippet. An invocation of this function is made to create a button with ID "btoButton" and text
"back to origin".

2.	Variables and constants initialization:
Several variables and constants are initialized. agentColor is an array that represents the color of the agents. In this case,
the agents are black. agentsNum represents the number of agents. sensorOffset, sensorAngle, and turnAngle are parameters for the
agents' sensing and turning. The agents variable will hold the agents.

3.	Canvas setup:
The setup() function initializes the canvas with dimensions of 720x720 pixels and sets the pixel density to 1. The background is
set to black (0). A new instance of the Agents class is then created and assigned to the agents variable.

4.	Mouse actions:
The mousePressed() and mouseMoved() functions define what happens when the mouse is pressed or moved. When the mouse is pressed,
the agents are reset and move to the mouse's position. When the mouse is moved, a blue line is drawn following the mouse,
and the agents' direction is changed towards the mouse's position.

5.	Drawing loop:
The draw() function is the main drawing loop. The canvas background is set to semi-transparent white, allowing for the
accumulation of drawings over time (creating a trail effect). The pixel array is updated based on the agents' positions.
The agents are updated 10 times for each drawing frame, meaning their movements are updated faster than the visual representation.

6.	Agent and Agents classes:
The Agent class represents an individual agent. It has properties for position and direction, methods for sensing surrounding
pixels (based on direction and offset), updating direction based on sensed data, and updating position. When the agent's position
is updated, the corresponding pixel value is also changed. The Agents class represents a collection of agents. It has a property
for the agents and a method to update the direction and position of all agents.

7.	Main execution:
At the end of the script, the setup() function is called to initialize the canvas and agents, and the mainLoop() function is
called to keep updating the canvas in a loop. This function calls the draw() function and then itself using the
requestAnimationFrame() function, creating a continuous loop.

In summary, this p5.js script creates an interactive canvas where the user can draw lines with the mouse, and a group of agents
will move around the canvas, sensing the surrounding pixels and adjusting their direction based on the sensed data. The agents
leave a trail on the canvas as they move.

![image](https://github.com/rbbtz/interactiveSlimeMold/assets/69686526/76e27b72-08d3-4ad1-a2ac-9cf2f29fd87b)
