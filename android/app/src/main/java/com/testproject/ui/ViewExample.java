package com.testproject.ui;

import android.content.Context;
import android.graphics.Color;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.util.TypedValue;
import android.widget.TextView;

/**
 * Created by chenwanfeng on 2018/4/25.
 */

public class ViewExample extends android.support.v7.widget.AppCompatTextView {
    public ViewExample(Context context) {
        this(context, null);
    }

    public ViewExample(Context context, @Nullable AttributeSet attrs) {
        this(context, attrs, -1);
    }

    public ViewExample(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init();
    }

    private void init() {
        setText("我就是我，不一样的烟火");
        setTextColor(Color.BLUE);
    }

    public void setNumberSize(int size) {
        setTextSize(TypedValue.COMPLEX_UNIT_SP, size);
    }
}
