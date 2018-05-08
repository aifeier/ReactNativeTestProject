package com.testproject;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.testproject.nativemodule.CallBackExample;
import com.testproject.nativemodule.ImagePickerModule;
import com.testproject.nativemodule.ToastModule;
import com.testproject.viewmanagers.AAmpUtils;
import com.testproject.viewmanagers.NetWorkUtils;
import com.testproject.viewmanagers.ViewExampleManager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by chenwanfeng on 2018/4/25.
 */

public class MyReactPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new ToastModule(reactContext));
        modules.add(new CallBackExample(reactContext));
        modules.add(new ImagePickerModule(reactContext));
        modules.add(new AAmpUtils(reactContext));
        modules.add(new NetWorkUtils(reactContext));
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
                new ViewExampleManager());
    }
}
