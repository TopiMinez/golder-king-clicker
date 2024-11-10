gdjs.ChipsCode = {};
gdjs.ChipsCode.localVariables = [];
gdjs.ChipsCode.GDClickObjectObjects1= [];
gdjs.ChipsCode.GDClickObjectObjects2= [];
gdjs.ChipsCode.GDClickObjectObjects3= [];
gdjs.ChipsCode.GDbalObjects1= [];
gdjs.ChipsCode.GDbalObjects2= [];
gdjs.ChipsCode.GDbalObjects3= [];
gdjs.ChipsCode.GDNewTextObjects1= [];
gdjs.ChipsCode.GDNewTextObjects2= [];
gdjs.ChipsCode.GDNewTextObjects3= [];
gdjs.ChipsCode.GDYellowButtonObjects1= [];
gdjs.ChipsCode.GDYellowButtonObjects2= [];
gdjs.ChipsCode.GDYellowButtonObjects3= [];
gdjs.ChipsCode.GDNewText2Objects1= [];
gdjs.ChipsCode.GDNewText2Objects2= [];
gdjs.ChipsCode.GDNewText2Objects3= [];
gdjs.ChipsCode.GDNewSpriteObjects1= [];
gdjs.ChipsCode.GDNewSpriteObjects2= [];
gdjs.ChipsCode.GDNewSpriteObjects3= [];
gdjs.ChipsCode.GDYellowButton2Objects1= [];
gdjs.ChipsCode.GDYellowButton2Objects2= [];
gdjs.ChipsCode.GDYellowButton2Objects3= [];
gdjs.ChipsCode.GDBGObjects1= [];
gdjs.ChipsCode.GDBGObjects2= [];
gdjs.ChipsCode.GDBGObjects3= [];


gdjs.ChipsCode.mapOfGDgdjs_9546ChipsCode_9546GDClickObjectObjects2Objects = Hashtable.newFrom({"ClickObject": gdjs.ChipsCode.GDClickObjectObjects2});
gdjs.ChipsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ClickObject"), gdjs.ChipsCode.GDClickObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ChipsCode.mapOfGDgdjs_9546ChipsCode_9546GDClickObjectObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "ZTSChips", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Saves", "ZTSChips", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.ChipsCode.GDNewTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.ChipsCode.GDYellowButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("YellowButton2"), gdjs.ChipsCode.GDYellowButton2Objects2);
gdjs.copyArray(runtimeScene.getObjects("bal"), gdjs.ChipsCode.GDbalObjects2);
{for(var i = 0, len = gdjs.ChipsCode.GDbalObjects2.length ;i < len;++i) {
    gdjs.ChipsCode.GDbalObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.ChipsCode.GDYellowButtonObjects2.length ;i < len;++i) {
    gdjs.ChipsCode.GDYellowButtonObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.ChipsCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.ChipsCode.GDNewTextObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.ChipsCode.GDYellowButton2Objects2.length ;i < len;++i) {
    gdjs.ChipsCode.GDYellowButton2Objects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.ChipsCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChipsCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.ChipsCode.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ChipsCode.GDNewSpriteObjects1[k] = gdjs.ChipsCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.ChipsCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "Close", 1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "Close", 1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "Close", 1);
}}

}


};gdjs.ChipsCode.mapOfGDgdjs_9546ChipsCode_9546GDClickObjectObjects1Objects = Hashtable.newFrom({"ClickObject": gdjs.ChipsCode.GDClickObjectObjects1});
gdjs.ChipsCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawn");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawnb");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "spawnb") >= 4;
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "spawn") >= 2;
if (isConditionTrue_0) {
gdjs.ChipsCode.GDClickObjectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ChipsCode.mapOfGDgdjs_9546ChipsCode_9546GDClickObjectObjects1Objects, gdjs.randomInRange(10, 200), -(190), "");
}{for(var i = 0, len = gdjs.ChipsCode.GDClickObjectObjects1.length ;i < len;++i) {
    gdjs.ChipsCode.GDClickObjectObjects1[i].addForce(0, 50, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawn");
}}

}


};gdjs.ChipsCode.eventsList2 = function(runtimeScene) {

{


gdjs.ChipsCode.eventsList0(runtimeScene);
}


{



}


{


gdjs.ChipsCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ClickObject"), gdjs.ChipsCode.GDClickObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("bal"), gdjs.ChipsCode.GDbalObjects1);
{for(var i = 0, len = gdjs.ChipsCode.GDbalObjects1.length ;i < len;++i) {
    gdjs.ChipsCode.GDbalObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.ChipsCode.GDClickObjectObjects1.length ;i < len;++i) {
    gdjs.ChipsCode.GDClickObjectObjects1[i].getBehavior("Resizable").setSize(200, 200);
}
}}

}


};

gdjs.ChipsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ChipsCode.GDClickObjectObjects1.length = 0;
gdjs.ChipsCode.GDClickObjectObjects2.length = 0;
gdjs.ChipsCode.GDClickObjectObjects3.length = 0;
gdjs.ChipsCode.GDbalObjects1.length = 0;
gdjs.ChipsCode.GDbalObjects2.length = 0;
gdjs.ChipsCode.GDbalObjects3.length = 0;
gdjs.ChipsCode.GDNewTextObjects1.length = 0;
gdjs.ChipsCode.GDNewTextObjects2.length = 0;
gdjs.ChipsCode.GDNewTextObjects3.length = 0;
gdjs.ChipsCode.GDYellowButtonObjects1.length = 0;
gdjs.ChipsCode.GDYellowButtonObjects2.length = 0;
gdjs.ChipsCode.GDYellowButtonObjects3.length = 0;
gdjs.ChipsCode.GDNewText2Objects1.length = 0;
gdjs.ChipsCode.GDNewText2Objects2.length = 0;
gdjs.ChipsCode.GDNewText2Objects3.length = 0;
gdjs.ChipsCode.GDNewSpriteObjects1.length = 0;
gdjs.ChipsCode.GDNewSpriteObjects2.length = 0;
gdjs.ChipsCode.GDNewSpriteObjects3.length = 0;
gdjs.ChipsCode.GDYellowButton2Objects1.length = 0;
gdjs.ChipsCode.GDYellowButton2Objects2.length = 0;
gdjs.ChipsCode.GDYellowButton2Objects3.length = 0;
gdjs.ChipsCode.GDBGObjects1.length = 0;
gdjs.ChipsCode.GDBGObjects2.length = 0;
gdjs.ChipsCode.GDBGObjects3.length = 0;

gdjs.ChipsCode.eventsList2(runtimeScene);
gdjs.ChipsCode.GDClickObjectObjects1.length = 0;
gdjs.ChipsCode.GDClickObjectObjects2.length = 0;
gdjs.ChipsCode.GDClickObjectObjects3.length = 0;
gdjs.ChipsCode.GDbalObjects1.length = 0;
gdjs.ChipsCode.GDbalObjects2.length = 0;
gdjs.ChipsCode.GDbalObjects3.length = 0;
gdjs.ChipsCode.GDNewTextObjects1.length = 0;
gdjs.ChipsCode.GDNewTextObjects2.length = 0;
gdjs.ChipsCode.GDNewTextObjects3.length = 0;
gdjs.ChipsCode.GDYellowButtonObjects1.length = 0;
gdjs.ChipsCode.GDYellowButtonObjects2.length = 0;
gdjs.ChipsCode.GDYellowButtonObjects3.length = 0;
gdjs.ChipsCode.GDNewText2Objects1.length = 0;
gdjs.ChipsCode.GDNewText2Objects2.length = 0;
gdjs.ChipsCode.GDNewText2Objects3.length = 0;
gdjs.ChipsCode.GDNewSpriteObjects1.length = 0;
gdjs.ChipsCode.GDNewSpriteObjects2.length = 0;
gdjs.ChipsCode.GDNewSpriteObjects3.length = 0;
gdjs.ChipsCode.GDYellowButton2Objects1.length = 0;
gdjs.ChipsCode.GDYellowButton2Objects2.length = 0;
gdjs.ChipsCode.GDYellowButton2Objects3.length = 0;
gdjs.ChipsCode.GDBGObjects1.length = 0;
gdjs.ChipsCode.GDBGObjects2.length = 0;
gdjs.ChipsCode.GDBGObjects3.length = 0;


return;

}

gdjs['ChipsCode'] = gdjs.ChipsCode;
