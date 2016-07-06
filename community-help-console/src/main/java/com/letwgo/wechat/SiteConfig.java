package com.letwgo.wechat; /**
 * Copyright (C) 2006-2015 Tuniu All rights reserved
 */

import com.letwgo.wechat.main.WxMpDemoInMemoryConfigStorage;
import com.letwgo.wechat.main.handler.LogHandler;
import com.letwgo.wechat.main.handler.TextHandler;
import com.letwgo.wechat.main.handler.EventHandler;
import me.chanjar.weixin.common.api.WxConsts;
import me.chanjar.weixin.mp.api.*;
import org.apache.log4j.helpers.Loader;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.util.ResourceUtils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.net.URL;

@SpringBootApplication
public class SiteConfig implements CommandLineRunner {

    private static Logger logger = LoggerFactory.getLogger(SiteConfig.class);

    @Value("${spring.profiles.active}")
    private String profiles;

    @Override
    public void run(String... args) throws Exception {
        logger.info("The spring.profiles.active is: {}", profiles);

    }
    @Bean
    public WxMpConfigStorage wxMpConfigStorage(){
        InputStream is1 = null;
        URL url = Loader.getResource("wx-config.xml");
        try {
            is1 = new FileInputStream(ResourceUtils.getFile(url));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return WxMpDemoInMemoryConfigStorage.fromXml(is1);
    }

    @Bean
    public WxMpService wxMpService(){
        WxMpService wxMpService = new WxMpServiceImpl();
        wxMpService.setWxMpConfigStorage(wxMpConfigStorage());
        return wxMpService;
    }

    @Bean
    public WxMpMessageRouter wxMpMessageRouter(){
        WxMpMessageHandler textHandler = new TextHandler();
        WxMpMessageHandler logHandler = new LogHandler();
        EventHandler eventHandler = new EventHandler();
        WxMpMessageRouter wxMpMessageRouter = new WxMpMessageRouter(wxMpService());
        wxMpMessageRouter
                .rule().handler(logHandler).next()
                .rule().msgType(WxConsts.XML_MSG_EVENT).matcher(eventHandler).handler(eventHandler).end()
                .rule().async(false).content("哈哈").handler(textHandler).end();
        return wxMpMessageRouter;
    }
}
