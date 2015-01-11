var selectedLifeNo = null;

var lifeArr = [];

// Build lives array
lifeArr["block"] = pattern(PATTERN_INIT_BLOCK);
lifeArr["long_boat"] = pattern(PATTERN_INIT_LONG_BOAT);
lifeArr["boat_tie"] = pattern(PATTERN_INIT_BOAT_TIE);
lifeArr["integral"] = pattern(PATTERN_INIT_INTEGRAL);
lifeArr["pulsar"] = pattern(PATTERN_INIT_PULSAR);
lifeArr["blinker"] = pattern(PATTERN_INIT_BLINKER);
lifeArr["worker_bee"] = pattern(PATTERN_INIT_WORKER_BEE);
lifeArr["pentadecathlon"] = pattern(PATTERN_INIT_PENTADECATHLON);
lifeArr["gourmet"] = pattern(PATTERN_INIT_GOURMET);
lifeArr["gosper_gun"] = pattern(PATTERN_INIT_GOSPER_GUN);

var mainPattern = createMainPattern();

function setSelectedLife(life){
    selectedLifeNo = life;
}

// each cell takes 8 pixels: 4 filled, 4 empty for margining
function toPx(x){
    return x << 3;
}

function minCoordinate(x){
    return ((x === 0) ? 0 : x - 1);
}

function maxCoordinate(x, maxVal){
    return ((x < maxVal - 1) ? x + 1 : x);
}

function getCtx(lifeName){
    var canvasName = "lifeCanvas_" + lifeName;
    var c = document.getElementById(canvasName);
    
    return c.getContext("2d");    
}

function drawCell(c, x, y, isFill){
    if (isFill === 1){
        c.fillRect(toPx(y), toPx(x), CELL_SIDE_LEN, CELL_SIDE_LEN);
    }
    else if (isFill === 0){
        c.clearRect(toPx(y), toPx(x), CELL_SIDE_LEN, CELL_SIDE_LEN);
    }
    else {
        throw TypeError();
    }
}

function getNeighbours(pattern, x, y){
    var rows = pattern.getRows();
    var cols = pattern.getColumns();
    var neighbours = 0;
   
    if (x < 0 || x > rows - 1){
        throw RangeError();
    }
    
    if (y < 0 || y > cols - 1){
        throw RangeError();
    }
    
    for(var i = minCoordinate(x); i <= maxCoordinate(x, rows); i++){
        for(var k = minCoordinate(y); k <= maxCoordinate(y, cols); k++){
            if (pattern.getCell(i, k) === 1){
                ++neighbours;
            }
        }
    }
    
    // Do not count itself as the neighbour
    if (pattern.getCell(x, y) === 1)
    {
        --neighbours;
    }
    
    // Verify range
    if (neighbours < 0 || neighbours > 8){        
        throw RangeError();
    }    
    
    return neighbours;
}

function displayInitPattern(lifeName, pattern){
    var rows = pattern.getRows();
    var cols = pattern.getColumns();
    var ctx = getCtx(lifeName);
    ctx.fillStyle = "#00f";
    
    for(var i = 0; i < rows; i++){
        for(var k = 0; k < cols; k++){
            drawCell(ctx, i, k, pattern.getCell(i, k));
        }
    }
}

function play(lifeName, currState){
    var rows = currState.getRows();
    var cols = currState.getColumns();
    var ctx = getCtx(lifeName);
    var neighbours;
    // 2 rows matrix with row length equal to that of the pattern.
    // Keeps 2 new updated lines.
    var updateMat = currState.createEmptyLines();
    var copyLineIndex;
    var updateLineIndex;
     
    for(var i = 0; i <= rows; i++){
        if (i % 2 === 0) {
            // Even line
            updateLineIndex = 0;
        }
        else {
            // Odd line
            updateLineIndex = 1;
        }
        
        // Process all lines 0 to rows - 1
        if ( i < rows){
            for(var k = 0; k < cols; k++){
                neighbours = getNeighbours(currState, i, k);

                // Live cell with fewer than two live neighbours dies, as if caused by under-population
                // Live cell with more than three live neighbours dies, as if by overcrowding
                // Otherwise cell lives on another round
                // Dead cell with exactly three live neighbours becomes a live cell, as if by reproduction
                if (((currState.getCell(i, k) === 1) && (neighbours === 2)) || 
                    (neighbours === 3)) {
                        updateMat[updateLineIndex][k] = 1;
                }
                else{
                    updateMat[updateLineIndex][k] = 0;
                }
            }
        }
        
        // Write older line back to the pattern - not relevant for further processing
        if (i > 0) {
            copyLineIndex = (updateLineIndex === 0) ? 1 : 0;
            
            for(var k = 0; k < cols; k++){
                drawCell(ctx, i - 1, k, updateMat[copyLineIndex][k]);
                currState.setCell(i - 1, k, updateMat[copyLineIndex][k]);
            }
        }
    }
}

function displayInit(){
    displayInitPattern("block", lifeArr["block"]);
    displayInitPattern("long_boat", lifeArr["long_boat"]);
    displayInitPattern("boat_tie", lifeArr["boat_tie"]);
    displayInitPattern("integral", lifeArr["integral"]);
    displayInitPattern("pulsar", lifeArr["pulsar"]);
    displayInitPattern("blinker", lifeArr["blinker"]);
    displayInitPattern("worker_bee", lifeArr["worker_bee"]);
    displayInitPattern("pentadecathlon", lifeArr["pentadecathlon"]);
    displayInitPattern("gourmet", lifeArr["gourmet"]);
    displayInitPattern("gosper_gun", lifeArr["gosper_gun"]);
}

var playAllFnc = function playAll(){
    play("pulsar", lifeArr["pulsar"]);
    play("blinker", lifeArr["blinker"]);
    play("worker_bee", lifeArr["worker_bee"]);
    play("pentadecathlon", lifeArr["pentadecathlon"]);
    play("gourmet", lifeArr["gourmet"]);
    play("gosper_gun", lifeArr["gosper_gun"]);
};

var playMainFnc = function playMain(){
    play(MAIN_PATTERN_CANVAS_NAME, mainPattern);
};

var playTimer = null;
var playMainTimer = null;

function playOscillators() {
    var elem = document.getElementById("playOscillators");

    if (playTimer === null){
        playTimer = setInterval(playAllFnc, 200);
        
        elem.innerHTML = "Stop Oscillators";
    }
    else {
        clearInterval(playTimer);
        playTimer = null;

        elem.innerHTML = "Play Oscillators";
    }
}

function playMain(){
    var elm = document.getElementById("btnPlayMain");
    
    if (playMainTimer === null){
        playMainTimer = setInterval(playMainFnc, 50);        
        
        elm.innerHTML = "Stop";
    }
    else {
        clearInterval(playMainTimer);
        playMainTimer = null;
        
        elm.innerHTML = "Start";
    }
}

function clearMain(){
    if (playMainTimer !== null){
        var elm = document.getElementById("btnPlayMain");
        
        clearInterval(playMainTimer);
        playMainTimer = null;
        
        elm.value = "Start";        
    }
    resetMain(mainPattern);
    displayInitPattern(MAIN_PATTERN_CANVAS_NAME, mainPattern);
}

function getPosition(evt) {
    var canvas = document.getElementById("lifeCanvas_main");
    var rect = canvas.getBoundingClientRect();
    
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function alignToCanvas(c, patternHalfLen){
    var canvasLen = MAIN_PATTERN_SIDE_LEN;
    
    if (c - patternHalfLen < 0){
        c = patternHalfLen;
    } 
    else if(c + patternHalfLen >= canvasLen){
        c = canvasLen - 1 - patternHalfLen;
    }
        
    return c;
}

function copyPattern(evt){
    var mousePos = getPosition(evt);
    var pattern;
    
    if (selectedLifeNo !== null)
    {
        pattern = lifeArr[selectedLifeNo];
        var patternHalfLen = Math.ceil(pattern.getRows() / 2);
        var x = parseInt(mousePos.x / (CELL_SIDE_LEN * 2));
        var y = parseInt(mousePos.y / (CELL_SIDE_LEN * 2));
        
        x = alignToCanvas(x, patternHalfLen);
        y = alignToCanvas(y, patternHalfLen);
        
        x -= patternHalfLen;
        y -= patternHalfLen;
        
        copyPatternToMain(mainPattern, pattern, x, y);
    }
    else {
        alert("To copy life to the canvas, select a pattern, then click on canvas.");
    }
}
      