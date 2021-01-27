var robot = require("robotjs");

function myFunction() {
    setInterval(function () {        

        // Get mouse position.
        // var mouse = robot.getMousePos();

        // Get pixel color in hex format.
        // var hex = robot.getPixelColor(mouse.x, mouse.y);
        // console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);

        let pos1 = robot.getPixelColor(1045, 650)
        let pos2 = robot.getPixelColor(1135, 650)
        let pos3 = robot.getPixelColor(1230, 650)
        let pos4 = robot.getPixelColor(1300, 650)

        if (String(pos1) == '000000'){
            robot.moveMouse(1045, 650)
            robot.mouseClick('left')
        }

        if (String(pos2) == '000000'){
            robot.moveMouse(1135, 650)
            robot.mouseClick('left')
        }

        if (String(pos3) == '000000'){
            robot.moveMouse(1230, 650)
            robot.mouseClick('left')
        }

        if (String(pos4) == '000000'){
            robot.moveMouse(1300, 650)
            robot.mouseClick('left')
        }

    }, 50);
}

myFunction()