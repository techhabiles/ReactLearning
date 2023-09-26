package com.reactlearning;

import android.view.View;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.List;

class CustomPackage implements ReactPackage {
    public List<NativeModule> createNativeModules(ReactApplicationContext ctx) {
        ArrayList<NativeModule> nativeModules = new ArrayList();
        nativeModules.add(new CustomModule(ctx));
        return nativeModules;
    }

    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactApplicationContext) {
        return new ArrayList<>();
    }


}