package com.mobile;

import android.os.Build;
import android.widget.Toast;
import android.view.Gravity;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CustomToastModule extends ReactContextBaseJavaModule {
  private static final String MODULE_NAME = "CustomToastModule";

  public CustomToastModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return MODULE_NAME;
  }

  @ReactMethod
  public void showToast(String message) {
    Toast toast = Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT);
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
        toast.setGravity(Gravity.FILL_HORIZONTAL | Gravity.TOP, 0, 0);
    } else {
        toast.setGravity(Gravity.CENTER_HORIZONTAL | Gravity.CENTER_VERTICAL, 0, 0);
    }

    toast.show();
  }
}
