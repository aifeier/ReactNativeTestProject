package com.testproject.viewmanagers;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.testproject.ui.ViewExample;

/**
 * Created by chenwanfeng on 2018/4/25.
 */

public class ViewExampleManager extends SimpleViewManager<ViewExample> {
    @Override
    public String getName() {
        return "RNViewExample";
    }

    @Override
    protected ViewExample createViewInstance(ThemedReactContext reactContext) {
        return new ViewExample(reactContext);
    }

    @ReactProp(name = "numberSize")
    public void setNumberSize(ViewExample viewExample, int spSize) {
        viewExample.setNumberSize(spSize);
    }
}
