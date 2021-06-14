import {Util} from "./Util";
import {Chicken} from "../components/towers/Chicken";
import {MassiveChicken} from "../components/towers/MassiveChicken";
import {Crow} from "../components/towers/Crow";
import {Woodpecker} from "../components/towers/Woodpecker";

export const drawPanel = (money, health) => {
    let ctx = Util.ctx;
    Util.fillRect(1000, 0, 400, 800, "#964B00");
    Util.strokeRect(1020, 60, 360, 205, Util.BLACK);
    Util.strokeRect(1050, 95, 125, 135, Util.BLACK);
    Util.strokeRect(1225, 95, 125, 135, Util.BLACK);

    Util.strokeRect(1020, 290, 360, 205, Util.BLACK);
    Util.strokeRect(1050, 325, 125, 135, Util.BLACK);
    Util.strokeRect(1225, 325, 125, 135, Util.BLACK);

    Util.draw(Util.IMAGES.CHICKEN, 1050 + 25, 95 + 25, 90, 85, 85);
    Util.draw(Util.IMAGES.CHICKEN, 1215, 95 + 10, 90, 154, 154);

    Util.draw(Util.IMAGES.CROW, 1050 + 25, 325 + 25, 90, 85, 85);
    Util.draw(Util.IMAGES.WOODPECKER, 1225 + 25, 325 + 25, 90, 85, 85);

    ctx.font = '20px serif';
    ctx.fillStyle = Util.BLACK;
    ctx.fillText("$100", 1050+40, 90);
    ctx.fillText('$750', 1225+40, 90);

    ctx.fillText("$200", 1050+40, 320);
    ctx.fillText('$50', 1225+45, 320);

    ctx.fillText("$" + money, 1015, 25);
    ctx.fillText("Health: " + health, 1015, 45);
}

export const drawMouseSelection = (selection, location) => {
    if(selection === Chicken){
        Util.draw(Util.IMAGES.CHICKEN, location.x, location.y, 90, 85, 85);
        Util.strokeCircle(location.x + 42, location.y + 42, Chicken.RANGE, Util.BLACK);
    }
    else if(selection === MassiveChicken){
        Util.draw(Util.IMAGES.CHICKEN, location.x, location.y, 90, 204, 204);
        Util.strokeCircle(location.x + 102, location.y + 102, MassiveChicken.RANGE, Util.BLACK);
    }
    else if(selection === Crow){
        Util.draw(Util.IMAGES.CROW, location.x, location.y, 90, 85, 85);
        Util.strokeCircle(location.x + 42, location.y + 42, Crow.RANGE, Util.BLACK);
    }
    else if(selection === Woodpecker){
        Util.draw(Util.IMAGES.WOODPECKER, location.x, location.y, 90, 85, 85);
        Util.strokeCircle(location.x + 42, location.y + 42, Woodpecker.RANGE, Util.BLACK);
    }
    
}

export const drawStartScreen = (canvas, roomCode, startText, name, clickName, clickRoom, hoverStart) => {
    let ctx = Util.ctx;
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var x = canvas.width/2 - 490;
    var y = canvas.height/2 - 350;
    ctx.drawImage(Util.IMAGES.TITLE, x, y);

    ctx.fillStyle = Util.BLACK;
    ctx.font = "50px serif";
    let nameMeasure = ctx.measureText("Welcome, " + name);
    let roomMeasure = ctx.measureText("Enter room code: " + roomCode);
    let startMeasure = ctx.measureText(startText);
    ctx.fillText(startText, canvas.width/2 - startMeasure.width/2, canvas.height/2 + 90);
    ctx.fillText("Enter room code: " + roomCode, canvas.width/2 - roomMeasure.width/2, canvas.height/2 - 30);
    ctx.fillText("Welcome, " + name, canvas.width/2 - nameMeasure.width/2, canvas.height/2 - 150);

    if(hoverStart){
        Util.draw(Util.IMAGES.BAT, canvas.width/2 - startMeasure.width/2 - 50, canvas.height/2 + 50, 0);
        Util.strokeRect(canvas.width/2 - startMeasure.width/2 - 25, canvas.height/2 + 50, startMeasure.width + 50, 50, Util.BLACK);
    }
    else if(clickName){
        Util.strokeRect(canvas.width/2 - nameMeasure.width/2 - 50, canvas.height/2 - 190, nameMeasure.width + 100, 50, Util.BLACK);
    }
    else if(clickRoom){
        Util.strokeRect(canvas.width/2 - roomMeasure.width/2 - 50, canvas.height/2 - 70, roomMeasure.width + 100, 50, Util.BLACK);
    }
}

export const drawWaitRoom = (roomCode, other) => {
    let ctx = Util.ctx;
    ctx.fillText(roomCode, 400, 400);
    if(other !== undefined){
        ctx.fillText(other.name, 600, 600);
    }
}

export const drawEndScreen = (hoverEnd, counter, canvas, ) => {
    let ctx = Util.ctx;
    ctx.fillStyle = "#fd5e53";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = Util.BLACK;
    ctx.font = "50px serif";

    let otherMeasure = ctx.measureText("Ok");
    ctx.fillText("Ok", canvas.width/2  - otherMeasure.width/2, canvas.height/2 + 40);
    

    if(hoverEnd){
        Util.draw(Util.IMAGES.BAT, canvas.width/2 - otherMeasure.width/2 - 50, canvas.height/2, 0);
        Util.strokeRect(canvas.width/2 - otherMeasure.width/2 - 50, canvas.height/2 - 50, otherMeasure.width + 100, 150, Util.BLACK);
    }
    let miliseconds = counter * 30;
    let seconds = miliseconds/1000;
    let minutes = Math.floor(seconds/60);
    seconds = seconds % 60;
    ctx.fillText("Survival Time: " + minutes + ":" + seconds, 200, 200);
    
}