gdjs.ClickerCode = {};
gdjs.ClickerCode.localVariables = [];
gdjs.ClickerCode.GDClickObjectObjects1= [];
gdjs.ClickerCode.GDClickObjectObjects2= [];
gdjs.ClickerCode.GDClickObjectObjects3= [];
gdjs.ClickerCode.GDbalObjects1= [];
gdjs.ClickerCode.GDbalObjects2= [];
gdjs.ClickerCode.GDbalObjects3= [];
gdjs.ClickerCode.GDNewTextObjects1= [];
gdjs.ClickerCode.GDNewTextObjects2= [];
gdjs.ClickerCode.GDNewTextObjects3= [];
gdjs.ClickerCode.GDYellowButtonObjects1= [];
gdjs.ClickerCode.GDYellowButtonObjects2= [];
gdjs.ClickerCode.GDYellowButtonObjects3= [];
gdjs.ClickerCode.GDNewText2Objects1= [];
gdjs.ClickerCode.GDNewText2Objects2= [];
gdjs.ClickerCode.GDNewText2Objects3= [];
gdjs.ClickerCode.GDNewSpriteObjects1= [];
gdjs.ClickerCode.GDNewSpriteObjects2= [];
gdjs.ClickerCode.GDNewSpriteObjects3= [];
gdjs.ClickerCode.GDYellowButton2Objects1= [];
gdjs.ClickerCode.GDYellowButton2Objects2= [];
gdjs.ClickerCode.GDYellowButton2Objects3= [];


gdjs.ClickerCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.ClickerCode.GDYellowButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ClickerCode.GDYellowButtonObjects2.length;i<l;++i) {
    if ( gdjs.ClickerCode.GDYellowButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ClickerCode.GDYellowButtonObjects2[k] = gdjs.ClickerCode.GDYellowButtonObjects2[i];
        ++k;
    }
}
gdjs.ClickerCode.GDYellowButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 1000;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1000);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "MON", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.ClickerCode.GDNewText2Objects2);
gdjs.copyArray(runtimeScene.getObjects("YellowButton2"), gdjs.ClickerCode.GDYellowButton2Objects2);
{gdjs.evtTools.storage.readNumberFromJSONFile("Save", "MON", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}{for(var i = 0, len = gdjs.ClickerCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.ClickerCode.GDNewText2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.ClickerCode.GDYellowButton2Objects2.length ;i < len;++i) {
    gdjs.ClickerCode.GDYellowButton2Objects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bal"), gdjs.ClickerCode.GDbalObjects2);
{for(var i = 0, len = gdjs.ClickerCode.GDbalObjects2.length ;i < len;++i) {
    gdjs.ClickerCode.GDbalObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.ClickerCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ClickerCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.ClickerCode.GDNewSpriteObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ClickerCode.GDNewSpriteObjects2[k] = gdjs.ClickerCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.ClickerCode.GDNewSpriteObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "Close", 1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "Close", 1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "Close", 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ClickObject"), gdjs.ClickerCode.GDClickObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ClickerCode.GDClickObjectObjects1.length;i<l;++i) {
    if ( gdjs.ClickerCode.GDClickObjectObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ClickerCode.GDClickObjectObjects1[k] = gdjs.ClickerCode.GDClickObjectObjects1[i];
        ++k;
    }
}
gdjs.ClickerCode.GDClickObjectObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


};gdjs.ClickerCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.ClickerCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.ClickerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ClickerCode.GDClickObjectObjects1.length = 0;
gdjs.ClickerCode.GDClickObjectObjects2.length = 0;
gdjs.ClickerCode.GDClickObjectObjects3.length = 0;
gdjs.ClickerCode.GDbalObjects1.length = 0;
gdjs.ClickerCode.GDbalObjects2.length = 0;
gdjs.ClickerCode.GDbalObjects3.length = 0;
gdjs.ClickerCode.GDNewTextObjects1.length = 0;
gdjs.ClickerCode.GDNewTextObjects2.length = 0;
gdjs.ClickerCode.GDNewTextObjects3.length = 0;
gdjs.ClickerCode.GDYellowButtonObjects1.length = 0;
gdjs.ClickerCode.GDYellowButtonObjects2.length = 0;
gdjs.ClickerCode.GDYellowButtonObjects3.length = 0;
gdjs.ClickerCode.GDNewText2Objects1.length = 0;
gdjs.ClickerCode.GDNewText2Objects2.length = 0;
gdjs.ClickerCode.GDNewText2Objects3.length = 0;
gdjs.ClickerCode.GDNewSpriteObjects1.length = 0;
gdjs.ClickerCode.GDNewSpriteObjects2.length = 0;
gdjs.ClickerCode.GDNewSpriteObjects3.length = 0;
gdjs.ClickerCode.GDYellowButton2Objects1.length = 0;
gdjs.ClickerCode.GDYellowButton2Objects2.length = 0;
gdjs.ClickerCode.GDYellowButton2Objects3.length = 0;

gdjs.ClickerCode.eventsList1(runtimeScene);
gdjs.ClickerCode.GDClickObjectObjects1.length = 0;
gdjs.ClickerCode.GDClickObjectObjects2.length = 0;
gdjs.ClickerCode.GDClickObjectObjects3.length = 0;
gdjs.ClickerCode.GDbalObjects1.length = 0;
gdjs.ClickerCode.GDbalObjects2.length = 0;
gdjs.ClickerCode.GDbalObjects3.length = 0;
gdjs.ClickerCode.GDNewTextObjects1.length = 0;
gdjs.ClickerCode.GDNewTextObjects2.length = 0;
gdjs.ClickerCode.GDNewTextObjects3.length = 0;
gdjs.ClickerCode.GDYellowButtonObjects1.length = 0;
gdjs.ClickerCode.GDYellowButtonObjects2.length = 0;
gdjs.ClickerCode.GDYellowButtonObjects3.length = 0;
gdjs.ClickerCode.GDNewText2Objects1.length = 0;
gdjs.ClickerCode.GDNewText2Objects2.length = 0;
gdjs.ClickerCode.GDNewText2Objects3.length = 0;
gdjs.ClickerCode.GDNewSpriteObjects1.length = 0;
gdjs.ClickerCode.GDNewSpriteObjects2.length = 0;
gdjs.ClickerCode.GDNewSpriteObjects3.length = 0;
gdjs.ClickerCode.GDYellowButton2Objects1.length = 0;
gdjs.ClickerCode.GDYellowButton2Objects2.length = 0;
gdjs.ClickerCode.GDYellowButton2Objects3.length = 0;


return;

}

gdjs['ClickerCode'] = gdjs.ClickerCode;
