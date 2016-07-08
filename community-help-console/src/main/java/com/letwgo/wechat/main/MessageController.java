package com.letwgo.wechat.main;

import com.alibaba.fastjson.JSON;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.util.Map;

/**
 * Created by wuzhong on 2016/7/7.
 */
@RestController
public class MessageController {

    @RequestMapping(value="/message/doMessage",method = RequestMethod.POST)
    @ResponseBody
    public void doMessage(@RequestParam Map<String,Object> params){
        String line = params.get("username")+"|"+params.get("userphone")+"|"+params.get("winxin")+"|"+params.get("content")+ IOUtils.LINE_SEPARATOR_UNIX;
        try {
            FileUtils.writeStringToFile(new File("/home/centos/data/message.csv"),line,"utf-8",true);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
