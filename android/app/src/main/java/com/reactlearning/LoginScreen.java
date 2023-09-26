package com.reactlearning;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

class LoginScreen extends AppCompatActivity {
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login_screen);
    }

    public void loginButtonPressed(View view){
        Toast.makeText(this,"This is native screen login button clicked", Toast.LENGTH_LONG).show();
    }

    public void closeButtonClicked(View view){
        finish();
    }
}