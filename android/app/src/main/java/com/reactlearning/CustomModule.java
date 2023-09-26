package com.reactlearning;

import android.content.Intent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

class CustomModule extends ReactContextBaseJavaModule {

    ReactApplicationContext context;
        CustomModule(ReactApplicationContext ctx){
            super(ctx);
            this.context = ctx;
        }


    public String getName(){
        return "AndroidNativeBridge";
    }

    @ReactMethod
    public void openLoginScreen(){
        Intent i =  new Intent(context, LoginScreen.class);
        getCurrentActivity().startActivity(i);
    }
}