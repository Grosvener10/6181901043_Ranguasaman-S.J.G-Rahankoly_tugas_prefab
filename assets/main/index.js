System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResultScreen.ts","./StartScreen.ts"],(function(n){var t,e,o,r,c,s,u;return{setters:[function(n){t=n.inheritsLoose},function(n){e=n.cclegacy,o=n._decorator,r=n.Vec3,c=n.Component},function(n){s=n.ResultScreen},function(n){u=n.NewComponent}],execute:function(){var a;e._RF.push({},"3b000uD+09FurM3F+OV67zI","Background",void 0);var i=o.ccclass;o.property,n("Backgrouns",i("Backgrouns")(a=function(n){function e(){return n.apply(this,arguments)||this}t(e,n);var o=e.prototype;return o.start=function(){},o.update=function(n){0==u.Instance.node.active&&0==s.Instance.node.active&&(this.node.translate(new r(-100*n,0,0)),this.node.position.x<=-1872&&this.node.translate(new r(3168,0,0)))},e}(c))||a);e._RF.pop()}}}));

System.register("chunks:///_virtual/BackgroundNight.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResultScreen.ts","./StartScreen.ts"],(function(t){var n,e,o,r,c,i,s;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,r=t.Vec3,c=t.Component},function(t){i=t.ResultScreen},function(t){s=t.NewComponent}],execute:function(){var a;e._RF.push({},"f6afahNzNlNzoxSrdLYGyiu","BackgroundNight",void 0);var u=o.ccclass;o.property,t("BackgroundNight",u("BackgroundNight")(a=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.start=function(){},o.update=function(t){0==s.Instance.node.active&&0==i.Instance.node.active&&(this.node.translate(new r(-100*t,0,0)),this.node.position.x<=-1872&&this.node.translate(new r(3168,0,0)))},e}(c))||a);e._RF.pop()}}}));

System.register("chunks:///_virtual/bird.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResultScreen.ts","./StartScreen.ts"],(function(t){var e,n,i,o,r,a,c,s,l,u,h,p,d,v,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,c=t.Label,s=t.input,l=t.Input,u=t.Collider2D,h=t.Contact2DType,p=t.Vec3,d=t.Component},function(t){v=t.ResultScreen},function(t){y=t.NewComponent}],execute:function(){var f,b,g,C,S;r._RF.push({},"a309cLXEOlN87YUV+xtBhRM","bird",void 0);var T=a.ccclass,I=a.property;t("bird",(f=T("bird"),b=I({type:c}),f((S=e((C=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,i(e,"labelScore",S,o(e)),e.score=0,e.vy=0,e.gravity=550,e}n(e,t);var r=e.prototype;return r.start=function(){s.on(l.EventType.TOUCH_START,this.onTouchStart,this);var t=this.getComponent(u);t&&t.on(h.BEGIN_CONTACT,this.onBeginContact,this)},r.onBeginContact=function(t,e,n){"scoreColider"==e.node.name?(this.score++,this.labelScore.string=""+this.score):v.Instance.node.active=!0},r.onTouchStart=function(t){this.vy=200},r.update=function(t){0==y.Instance.node.active&&0==v.Instance.node.active?this.birdFall(t):0==v.Instance.node.active?(this.birdFall(t),Math.floor(this.node.position.y)<=0&&(this.vy=300)):1==v.Instance.node.active&&this.birdFall(t),(this.node.position.y>=250||this.node.position.y<=-250)&&(v.Instance.node.active=!0)},r.birdFall=function(t){this.node.translate(new p(0,this.vy*t,0)),this.vy-=this.gravity*t},r.birdDeathRotation=function(t){},e}(d)).prototype,"labelScore",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=C))||g));r._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/Demo.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,n,r;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,n=t._decorator,r=t.Component}],execute:function(){var c;o._RF.push({},"7a613VSLG5BSJX0Qk0MM9dm","Demo",void 0);var u=n.ccclass;n.property,t("Demo",u("Demo")(c=function(t){function o(){return t.apply(this,arguments)||this}e(o,t);var n=o.prototype;return n.start=function(){},n.update=function(t){},o}(r))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Demo.ts","./Background.ts","./BackgroundNight.ts","./ManagerPipa.ts","./Pipe.ts","./ResultScreen.ts","./StartScreen.ts","./bird.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/ManagerPipa.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResultScreen.ts","./StartScreen.ts"],(function(t){var e,i,r,a,n,s,o,c,p,u,l,h,f;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,r=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){n=t.cclegacy,s=t._decorator,o=t.Prefab,c=t.instantiate,p=t.Vec3,u=t.randomRangeInt,l=t.Component},function(t){h=t.ResultScreen},function(t){f=t.NewComponent}],execute:function(){var g,P,d,v,y;n._RF.push({},"ec550sBccZItKsG+4hiSWJ+","ManagerPipa",void 0);var m=s.ccclass,b=s.property;t("ManagerPipa",(g=m("ManagerPipa"),P=b({type:o}),g((y=e((v=function(t){function e(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).wBackground=288,e.wPipa=52,r(e,"prefabGroupPipe",y,a(e)),e.timer=0,e.targetWaktu=3,e.firstPipeFlag=!0,e}i(e,t);var n=e.prototype;return n.start=function(){},n.update=function(t){1==this.firstPipeFlag&&(this.createPipe(),this.firstPipeFlag=!1),0==f.Instance.node.active&&0==h.Instance.node.active&&(this.timer+=t,this.timer>=5&&(this.timer-=this.targetWaktu,this.targetWaktu-=.25,this.targetWaktu<1&&(this.targetWaktu=1.5),this.createPipe()))},n.createPipe=function(){var t=c(this.prefabGroupPipe);t.setPosition(new p(this.wBackground/2+this.wPipa,u(0,50),0)),t.setParent(this.node)},e}(l)).prototype,"prefabGroupPipe",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=v))||d));n._RF.pop()}}}));

System.register("chunks:///_virtual/Pipe.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResultScreen.ts","./StartScreen.ts"],(function(e){var n,t,r,o,c,a,i,s;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,r=e._decorator,o=e.Vec3,c=e.randomRangeInt,a=e.Component},function(e){i=e.ResultScreen},function(e){s=e.NewComponent}],execute:function(){var u;t._RF.push({},"2922eDNDe9H7L459if+Aekr","Pipe",void 0);var p=r.ccclass;r.property,e("Pipe",p("Pipe")(u=function(e){function t(){for(var n,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))||this).wBackground=288,n.wPipa=52,n}n(t,e);var r=t.prototype;return r.start=function(){this.node.translate(new o(0,c(-100,100),0))},r.update=function(e){0==s.Instance.node.active&&0==i.Instance.node.active&&this.node.translate(new o(-100*e,0,0))},t}(a))||u);t._RF.pop()}}}));

System.register("chunks:///_virtual/ResultScreen.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,c,r,o;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,c=e._decorator,r=e.director,o=e.Component}],execute:function(){var s,u;n._RF.push({},"c2deeNDO55HnqTHXExDvYn7","ResultScreen",void 0);var i=c.ccclass;c.property,e("ResultScreen",i("ResultScreen")(((u=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var c=n.prototype;return c.start=function(){n.Instance=this,this.node.active=!1},c.update=function(e){},c.doRestart=function(e,t){r.loadScene("scene")},n}(o)).Instance=void 0,s=u))||s);n._RF.pop()}}}));

System.register("chunks:///_virtual/StartScreen.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,o,r;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,r=t.Component}],execute:function(){var c,i;e._RF.push({},"5bdf5jzDdZDr6nYBXf5t9mE","StartScreen",void 0);var s=o.ccclass;o.property,t("NewComponent",s("NewComponent")(((i=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.start=function(){e.Instance=this},o.update=function(t){},o.clickStart=function(t,n){this.node.active=!1},e}(r)).Instance=void 0,c=i))||c);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});