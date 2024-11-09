gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDClickObjectObjects1= [];
gdjs.MainCode.GDClickObjectObjects2= [];
gdjs.MainCode.GDbalObjects1= [];
gdjs.MainCode.GDbalObjects2= [];
gdjs.MainCode.GDNewTextObjects1= [];
gdjs.MainCode.GDNewTextObjects2= [];
gdjs.MainCode.GDYellowButtonObjects1= [];
gdjs.MainCode.GDYellowButtonObjects2= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDClickObjectObjects1Objects = Hashtable.newFrom({"ClickObject": gdjs.MainCode.GDClickObjectObjects1});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ClickObject"), gdjs.MainCode.GDClickObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDClickObjectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bal"), gdjs.MainCode.GDbalObjects1);
{for(var i = 0, len = gdjs.MainCode.GDbalObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDbalObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
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

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.MainCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDYellowButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDYellowButtonObjects1[k] = gdjs.MainCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1000);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "MON", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Save", "MON", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDClickObjectObjects1.length = 0;
gdjs.MainCode.GDClickObjectObjects2.length = 0;
gdjs.MainCode.GDbalObjects1.length = 0;
gdjs.MainCode.GDbalObjects2.length = 0;
gdjs.MainCode.GDNewTextObjects1.length = 0;
gdjs.MainCode.GDNewTextObjects2.length = 0;
gdjs.MainCode.GDYellowButtonObjects1.length = 0;
gdjs.MainCode.GDYellowButtonObjects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);
gdjs.MainCode.GDClickObjectObjects1.length = 0;
gdjs.MainCode.GDClickObjectObjects2.length = 0;
gdjs.MainCode.GDbalObjects1.length = 0;
gdjs.MainCode.GDbalObjects2.length = 0;
gdjs.MainCode.GDNewTextObjects1.length = 0;
gdjs.MainCode.GDNewTextObjects2.length = 0;
gdjs.MainCode.GDYellowButtonObjects1.length = 0;
gdjs.MainCode.GDYellowButtonObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
