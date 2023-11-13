var robot = require('robotjs');

function main() {
    console.log("Starting...");
    sleep(4000);
    var counttaus = 0;
    var randomizeClick = 0;
    var randomizeMove1 = 0;
    var randomizeMove2 = 0;
    while (true) {
        randomizeClick = getRandomInt(1, 4);
        randomizeMove1 = getRandomInt(1, 4)
        randomizeMove2 = getRandomInt(1, 4)


        switch(randomizeMove1) {
            case 1:
                robot.moveMouseSmooth(1347,687);
                break;
            case 2:
                robot.moveMouseSmooth(1365,711);
                break;
            case 3:
                robot.moveMouseSmooth(1343,652);
                break;
            case 4: 
                robot.moveMouseSmooth(1339,666);
                break;
        }
        switch(randomizeClick) {
            case 1:
                robot.mouseClick();
                break;
            case 2:
                robot.mouseClick();
                sleep(getRandomInt(200,500));
                robot.mouseClick();
                break;
            case 3:
                robot.mouseClick();
                sleep(getRandomInt(200,500));
                robot.mouseClick();
                sleep(getRandomInt(200,500));
                robot.mouseClick();
            case 4:
                robot.mouseClick();
                sleep(getRandomInt(200,500));
                robot.mouseClick();
                sleep(getRandomInt(200,500));
                robot.mouseClick();
                sleep(getRandomInt(200,500));
                robot.mouseClick();
        }
        sleep(30000)
        switch(randomizeMove2) {
            case 1:
                robot.moveMouseSmooth(1218,756);
                break;
            case 2:
                robot.moveMouseSmooth(1191,762);
                break;
            case 3:
                robot.moveMouseSmooth(1239,774);
                break;
            case 4: 
                robot.moveMouseSmooth(1213,759);
                break;
        }
        switch(randomizeClick) {
            case 1:
                robot.mouseClick();
                break;
            case 2:
                robot.mouseClick();
                sleep(getRandomInt(200,500));
                robot.mouseClick();
                break;
            case 3:
                robot.mouseClick();
                sleep(getRandomInt(200,500));
                robot.mouseClick();
                sleep(getRandomInt(200,500));
                robot.mouseClick();
            case 4:
                robot.mouseClick();
                sleep(getRandomInt(200,500));
                robot.mouseClick();
                sleep(getRandomInt(200,500));
                robot.mouseClick();
                sleep(getRandomInt(200,500));
                robot.mouseClick();
        }
        sleep(30000);
        
        if (counttaus == 5) {
            banking();
            counttaus = 0;

        }
        counttaus++;
    }
    console.log("Done");
}

function banking() {
    robot.moveMouseSmooth(664,100);
    robot.mouseClick();
    sleep(15000);
    robot.moveMouseSmooth(1099,605);
    robot.mouseClick();
    sleep(5000);
    robot.moveMouseSmooth(2066,666);
    robot.mouseClick();
    sleep(10000);
    robot.moveMouseSmooth(2436,236);
    robot.mouseClick();
    sleep(5000);
    robot.moveMouseSmooth(2385,224);
    robot.mouseClick();
    
    

}

function logLight() {

    function lighting() {
        // Log lighting
    // 1
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2196, 973);
    robot.mouseClick();
    sleep(10000);
    // 2
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2134, 981);
    robot.mouseClick();
    sleep(10000);
    // 3
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2191, 1036);
    robot.mouseClick();
    sleep(10000);
    // 4
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2134,1030);
    robot.mouseClick();
    sleep(10000);
    // 5
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2189, 1088);
    robot.mouseClick();
    sleep(10000);
    // 6
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2137, 1080);
    robot.mouseClick();
    sleep(10000);
    // 7
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2198, 1145);
    robot.mouseClick();
    sleep(10000);
    // 8
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2139, 1143);
    robot.mouseClick();
    sleep(10000);
    // 9
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2196,1202);
    robot.mouseClick();
    sleep(10000);
    // 10
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2130,1206);
    robot.mouseClick();
    sleep(10000);
    // 11
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2195,1252);    
    robot.mouseClick();
    sleep(10000);
    // 12
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2134, 1256);
    robot.mouseClick();
    sleep(10000);
    // 13
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2195, 1307);
    robot.mouseClick();
    sleep(10000);
    // 14
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2075,1311);
    robot.mouseClick();
    sleep(10000);
    // 15
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2123,1311);
    robot.mouseClick();
    sleep(10000);
    // 16
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(1992,1307);
    robot.mouseClick();
    sleep(10000);
    // 17
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2062,1252);
    robot.mouseClick();
    sleep(10000);
    // 18
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2006,1250);
    robot.mouseClick();
    sleep(10000);
    // 19
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2058,1197);
    robot.mouseClick();
    sleep(10000);
    // 20
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(1993, 1204);
    robot.mouseClick();
    sleep(10000);
    // 21
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2058,1150);
    robot.mouseClick();
    sleep(10000);
    // 22
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(1997,1150);
    robot.mouseClick();
    sleep(10000);
    // 23
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2056,1090);
    robot.mouseClick();
    sleep(10000);
    // 24
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(1995,1091);
    robot.mouseClick();
    sleep(10000);
    // 25
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2058,1040);
    robot.mouseClick();
    sleep(10000);
    // 26
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(1993, 1042);
    robot.mouseClick();
    sleep(10000);
    // 27
    robot.moveMouseSmooth(2010,984);
    robot.mouseClick();
    robot.moveMouseSmooth(2065,980);
    robot.mouseClick();
    sleep(10000);
    }
    function moveToChop() {
        robot.moveMouseSmooth(2231,669);
        robot.mouseClick();
        sleep(5000);
        robot.moveMouseSmooth(2218,738);
        robot.mouseClick();
        sleep(5000);
        robot.moveMouseSmooth(2226,713);
        robot.mouseClick();
        sleep(5000);
        robot.moveMouseSmooth(1866,758);
        robot.mouseClick();
        sleep(5000);
    }
    lighting();
    moveToChop();
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
