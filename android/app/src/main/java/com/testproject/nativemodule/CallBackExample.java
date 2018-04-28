package com.testproject.nativemodule;

import android.util.Log;

import com.amap.api.maps.MapView;
import com.amap.api.maps.model.Circle;
import com.amap.api.maps.model.CircleOptions;
import com.amap.api.maps.model.LatLng;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.facebook.react.uimanager.PixelUtil;

/**
 * Created by chenwanfeng on 2018/4/25.
 */

public class CallBackExample extends ReactContextBaseJavaModule {
    float[] mMeasureBuffer = new float[4];

    public CallBackExample(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void measureLayout(
            int tag,
            int ancestorTag,
            Callback errorCallback,
            Callback successCallback) {
        try {
            measureLayout(tag, ancestorTag, mMeasureBuffer);
            float relativeX = PixelUtil.toDIPFromPixel(mMeasureBuffer[0]);
            float relativeY = PixelUtil.toDIPFromPixel(mMeasureBuffer[1]);
            float width = PixelUtil.toDIPFromPixel(mMeasureBuffer[2]);
            float height = PixelUtil.toDIPFromPixel(mMeasureBuffer[3]);
            Circle circle = new MapView(getReactApplicationContext()).getMap().addCircle(
                    new CircleOptions().center(new LatLng(30.278975, 120.145913)).radius(100)
            );
            Log.e("measureLayout", "是否包含：" + circle.contains(new LatLng(30.271911, 120.145913)));
            successCallback.invoke(relativeX, relativeY, width, height);
        } catch (IllegalViewOperationException e) {
            errorCallback.invoke(e.getMessage());
        }
    }

    //使用Promise来进行回调
    @ReactMethod
    public void measureLayoutToPromise(
            int tag,
            int ancestorTag,
            Promise promise) {
        try {
            measureLayout(tag, ancestorTag, mMeasureBuffer);

            WritableMap map = Arguments.createMap();

            map.putDouble("relativeX", PixelUtil.toDIPFromPixel(mMeasureBuffer[0]));
            map.putDouble("relativeY", PixelUtil.toDIPFromPixel(mMeasureBuffer[1]));
            map.putDouble("width", PixelUtil.toDIPFromPixel(mMeasureBuffer[2]));
            map.putDouble("height", PixelUtil.toDIPFromPixel(mMeasureBuffer[3]));

            promise.resolve(map);
        } catch (IllegalViewOperationException e) {
            promise.reject(e);
        }
    }

    private void measureLayout(int tag, int ancestorTag, float[] mMeasureBuffer) {
        mMeasureBuffer[0] = 100;
        mMeasureBuffer[1] = 50;
        mMeasureBuffer[2] = 30;
        mMeasureBuffer[3] = 40;
    }

    @Override
    public String getName() {
        return "CallBackExample";
    }
}
