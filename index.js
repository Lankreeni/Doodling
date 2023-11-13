var robot = require('robotjs');

function main() {
    console.log("Starting...");
    sleep(4000);
    var counttaus = 0;
    

    
        while (true) {
        
        
        
            robot.moveMouseSmooth(1160,601);
            robot.mouseClick();
            sleep(7000, 15000);
            robot.moveMouseSmooth(1242, 725);

            robot.moveMouseSmooth(1132,813);
            robot.mouseClick();
            sleep(getRandomInt(7000, 15000));

            robot.moveMouseSmooth(998,680);
            robot.mouseClick();
            sleep(getRandomInt(7000, 15000));
            if (counttaus == 9) {
            dropping();
            counttaus = 0;
            }
            counttaus++;

       
        }
    
    

    
    console.log("Done");
}

function dropping() {
    robot.moveMouseSmooth(2196, 973);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2134, 981);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2191, 1036);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2134,1030);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2189, 1088);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2137, 1080);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2198, 1145);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2139, 1143);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2196,1202);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2130,1206);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))
    robot.moveMouseSmooth(2195,1252);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2134, 1256);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2195, 1307);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2075,1311);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2123,1311);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(1992,1307);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2062,1252);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2006,1250);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2058,1197);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(1993, 1204);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2058,1150);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(1997,1150);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2056,1090);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(1995,1091);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2058,1040);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(1993, 1042);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2065,980);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))

    robot.moveMouseSmooth(2000,977);
    robot.keyToggle('shift', 'down');
    robot.mouseClick();
    sleep(getRandomInt(300, 2))
}

function findRock() {
    ["#676066", "#877c81", "#615a61", "#514b50", "#766d73", "#71686e", "#696168", "#625b61", "#07090f"];
}





function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function getRandomInt(min, max) {
    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

main();
