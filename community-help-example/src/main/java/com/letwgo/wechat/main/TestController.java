package com.letwgo.wechat.main;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by wuzhong on 2016/6/22.
 */
@RestController
public class TestController {

    @RequestMapping("/test/foo")
    public String foo() {
        return "success";
    }
}
