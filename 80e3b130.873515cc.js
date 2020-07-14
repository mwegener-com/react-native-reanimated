(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{210:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(9),o=(a(0),a(268)),i={id:"installation",title:"Installation",sidebar_label:"Installation"},l={id:"version-2.0.0-alpha/installation",title:"Installation",description:"Reanimated 2 is primarily built in C++ using Turbo Modules infrastructure which is not yet completely deployed in React Native (specifically on Android).",source:"@site/versioned_docs/version-2.0.0-alpha/installation.md",permalink:"/react-native-reanimated/docs/installation",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-2.0.0-alpha/installation.md",version:"2.0.0-alpha",sidebar_label:"Installation",sidebar:"version-2.0.0-alpha/docs",previous:{title:"About React Native Reanimated",permalink:"/react-native-reanimated/docs/about"},next:{title:"Worklets",permalink:"/react-native-reanimated/docs/worklets"}},c=[{value:"I just want to try new Reanimated...",id:"i-just-want-to-try-new-reanimated",children:[]},{value:"Installing the package",id:"installing-the-package",children:[]},{value:"Babel plugin",id:"babel-plugin",children:[]},{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}],s={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Reanimated 2 is primarily built in C++ using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/40"}),"Turbo Modules")," infrastructure which is not yet completely deployed in React Native (specifically on Android).\nBecause of that the installation of new Reanimated requires additional steps apart from just adding a dependency to ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," ."),Object(o.b)("p",null,"As a consequence of the above the minimum supported version of React Native is ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/releases/tag/v0.62.0"}),"v0.62"),".\nBefore you continue with the installation, make sure that you are running the supported version of React Native."),Object(o.b)("p",null,"Please follow the below instructions for Android and iOS."),Object(o.b)("h2",{id:"i-just-want-to-try-new-reanimated"},"I just want to try new Reanimated..."),Object(o.b)("p",null,"We realize the project setup is very complex and you may not want to add that to your existing app rightaway.\nIf you just want to play with Reanimated 2, we made a clean repo that has all the steps configured so that you can pull it from github and give the new version a shot."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion-labs/reanimated-2-playground"}),"Visit the Playground repo here")," or copy the command below to do a git checkout:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"> git checkout git@github.com:software-mansion-labs/reanimated-2-playground.git\n")),Object(o.b)("p",null,"Continue with the instruction below if you'd like to install Reanimated v2 on an existing or new React Native project."),Object(o.b)("h2",{id:"installing-the-package"},"Installing the package"),Object(o.b)("p",null,"First step is to install ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," alpha as a dependency in your project:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"> yarn add react-native-reanimated@alpha\n")),Object(o.b)("h2",{id:"babel-plugin"},"Babel plugin"),Object(o.b)("p",null,"Add Reanimated's babel plugin to your ",Object(o.b)("inlineCode",{parentName:"p"},"babel.config.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{5}","{5}":!0}),"  module.exports = {\n      ...\n      plugins: [\n          ...\n          'react-native-reanimated/plugin',\n      ],\n  };\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"NOTE:"))," Reanimated plugin has to be listed last.")),Object(o.b)("h2",{id:"android"},"Android"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Turn on Hermes engine by editing ",Object(o.b)("inlineCode",{parentName:"li"},"android/app/build.gradle"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java",metastring:"{2}","{2}":!0}),"project.ext.react = [\n  enableHermes: true  // <- here | clean and rebuild if changing\n]\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Plug Reanimated")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java",metastring:"{1-2,12-15}","{1-2,12-15}":!0}),'  import com.facebook.react.bridge.JSIModulePackage; // <- add\n  import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add\n  ...\n  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {\n  ...\n\n      @Override\n      protected String getJSMainModuleName() {\n        return "index";\n      }\n\n      @Override\n      protected JSIModulePackage getJSIModulePackage() {\n        return new ReanimatedJSIModulePackage(); // <- add\n      }\n    };\n  ...\n')),Object(o.b)("p",null,"You can refer ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion-labs/reanimated-2-playground/commit/938d494e9512d9fb82c30c23cc80f82c02abd9ea"}),"to this diff")," that presents the set of the above changes made to a fresh react native project in our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion-labs/reanimated-2-playground"}),"Playground repo"),"."),Object(o.b)("h2",{id:"ios"},"iOS"),Object(o.b)("p",null,"Steps here are adapted directly from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/RNTester/RNTester/AppDelegate.mm"}),"React Native's RNTester app"),", that is configured to use Turbo Modules.\nMost of the changes aren't specific to Reanimated but rather to Turbo Modules itself.\nIf your iOS app is already using Turbo Modules, you can likely skip some of the steps below.\nIf not, after making those changes your app will be compatible with Turbo Modules which may help with future React Native upgrades."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"cd ios && pod install && cd .."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add bridge property to ",Object(o.b)("inlineCode",{parentName:"p"},"AppDelegate.h")))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-objectivec",metastring:"{2,6}","{2,6}":!0}),"...\n@class RCTBridge; // <-add\n\n@interface AppDelegate : UIResponder <UIApplicationDelegate>\n...\n@property (nonatomic, readonly) RCTBridge *bridge; // <-add\n...\n@end\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Rename ",Object(o.b)("inlineCode",{parentName:"li"},"AppDelegate.m")," to ",Object(o.b)("inlineCode",{parentName:"li"},"AppDelagate.mm"),"."),Object(o.b)("li",{parentName:"ol"},"Add AppDelegate category in ",Object(o.b)("inlineCode",{parentName:"li"},"AppDelagate.mm"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-objectivec",metastring:"{1-2,4-7}","{1-2,4-7}":!0}),"#import <React/RCTCxxBridgeDelegate.h>\n#import <ReactCommon/RCTTurboModuleManager.h>\n...\n@interface AppDelegate() <RCTCxxBridgeDelegate, RCTTurboModuleManagerDelegate> {\n    RCTTurboModuleManager *_turboModuleManager;\n}\n@end\n")),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Enable TurboModules in ",Object(o.b)("inlineCode",{parentName:"li"},"AppDelagate.mm"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-objectivec",metastring:"{3}","{3}":!0}),"  + (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n  {\n    RCTEnableTurboModule(YES); // <- add\n")),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Replace bridge initialization in ",Object(o.b)("inlineCode",{parentName:"li"},"AppDelagate.mm"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-objectivec",metastring:"{4-8}","{4-8}":!0}),'  - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n  {\n    RCTEnableTurboModule(YES);\n    // RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];\n    // RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge\n    //                                                  moduleName:@"_YourAppNameHere_"\n    //                                           initialProperties:nil];\n    // NOTE: we now use _bridge with an underscore to create a rootView\n    _bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];\n    // NOTE: use your app name instead of _YourAppNameHere_\n    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:_bridge\n                                                     moduleName:@"_YourAppNameHere_"\n                                              initialProperties:nil];\n    ...\n')),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"Add remaining methods needed to configure Turbo Modules and Reanimated module in particular \u2013 all changes should be made in ",Object(o.b)("inlineCode",{parentName:"li"},"AppDelagate.mm"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-objectivec"}),"// add headers\n#import <React/RCTDataRequestHandler.h>\n#import <React/RCTFileRequestHandler.h>\n#import <React/RCTHTTPRequestHandler.h>\n#import <React/RCTNetworking.h>\n#import <React/RCTLocalAssetImageLoader.h>\n#import <React/RCTGIFImageDecoder.h>\n#import <React/RCTImageLoader.h>\n#import <React/JSCExecutorFactory.h>\n#import <RNReanimated/RETurboModuleProvider.h>\n...\n@implementation AppDelegate // changes should be made within AppDelegate's implementation\n...\n\n- (std::unique_ptr<facebook::react::JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge\n{\n _turboModuleManager = [[RCTTurboModuleManager alloc] initWithBridge:bridge delegate:self];\n __weak __typeof(self) weakSelf = self;\n return std::make_unique<facebook::react::JSCExecutorFactory>([weakSelf, bridge](facebook::jsi::Runtime &runtime) {\n   if (!bridge) {\n     return;\n   }\n   __typeof(self) strongSelf = weakSelf;\n   if (strongSelf) {\n     [strongSelf->_turboModuleManager installJSBindingWithRuntime:&runtime];\n   }\n });\n}\n\n- (Class)getModuleClassFromName:(const char *)name\n{\n return facebook::react::RETurboModuleClassProvider(name);\n}\n\n- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const std::string &)name\n                                                     jsInvoker:(std::shared_ptr<facebook::react::CallInvoker>)jsInvoker\n{\n return facebook::react::RETurboModuleProvider(name, jsInvoker);\n}\n\n- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const std::string &)name\n                                                      instance:(id<RCTTurboModule>)instance\n                                                     jsInvoker:(std::shared_ptr<facebook::react::CallInvoker>)jsInvoker\n{\n return facebook::react::RETurboModuleProvider(name, instance, jsInvoker);\n}\n\n- (id<RCTTurboModule>)getModuleInstanceFromClass:(Class)moduleClass\n{\n if (moduleClass == RCTImageLoader.class) {\n   return [[moduleClass alloc] initWithRedirectDelegate:nil loadersProvider:^NSArray<id<RCTImageURLLoader>> *{\n     return @[[RCTLocalAssetImageLoader new]];\n   } decodersProvider:^NSArray<id<RCTImageDataDecoder>> *{\n     return @[[RCTGIFImageDecoder new]];\n   }];\n } else if (moduleClass == RCTNetworking.class) {\n   return [[moduleClass alloc] initWithHandlersProvider:^NSArray<id<RCTURLRequestHandler>> *{\n     return @[\n       [RCTHTTPRequestHandler new],\n       [RCTDataRequestHandler new],\n       [RCTFileRequestHandler new],\n     ];\n   }];\n }\n return [moduleClass new];\n}\n\n@end\n")),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},"Enable developer menu in ",Object(o.b)("inlineCode",{parentName:"li"},"AppDelegate.mm"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-objectivec"}),'- (std::unique_ptr<facebook::react::JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge\n{\n  _turboModuleManager = [[RCTTurboModuleManager alloc] initWithBridge:bridge delegate:self];\n\n  #if RCT_DEV\n    [_turboModuleManager moduleForName:"RCTDevMenu"]; // <- add\n  #endif\n  ...\n')),Object(o.b)("p",null,"You can refer ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion-labs/reanimated-2-playground/commit/f6f2b77496bc00601150f98ea19a341f844d06a3"}),"to this diff")," that presents the set of the above changes made to a fresh react native project in our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion-labs/reanimated-2-playground"}),"Playground repo"),"."))}d.isMDXComponent=!0},268:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(a),u=n,m=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);