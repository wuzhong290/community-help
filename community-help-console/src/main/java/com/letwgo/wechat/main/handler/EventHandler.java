package com.letwgo.wechat.main.handler;

import me.chanjar.weixin.common.exception.WxErrorException;
import me.chanjar.weixin.common.session.WxSessionManager;
import me.chanjar.weixin.mp.api.WxMpMessageHandler;
import me.chanjar.weixin.mp.api.WxMpMessageMatcher;
import me.chanjar.weixin.mp.api.WxMpService;
import me.chanjar.weixin.mp.bean.WxMpCustomMessage;
import me.chanjar.weixin.mp.bean.WxMpXmlMessage;
import me.chanjar.weixin.mp.bean.WxMpXmlOutMessage;
import me.chanjar.weixin.mp.bean.WxMpXmlOutTextMessage;

import java.util.Map;

/**
 * Created by thinkpad on 2016/7/6.
 */
public class EventHandler implements WxMpMessageHandler, WxMpMessageMatcher {
    @Override
    public WxMpXmlOutMessage handle(WxMpXmlMessage wxMessage, Map<String, Object> context,
                                    WxMpService wxMpService, WxSessionManager sessionManager) {
        WxMpCustomMessage m
                = WxMpCustomMessage
                .TEXT()
                .toUser(wxMessage.getFromUserName())
                .content("您好！欢迎您关注[江宁社区生活服务]，请问您有哪些需要了解的？<br>1、微网站<br>2、微客服<br>您可以回复序号了解相关内容哦~")
                .build();
        try {
            wxMpService.customMessageSend(m);
        } catch (WxErrorException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public boolean match(WxMpXmlMessage wxMpXmlMessage) {
        System.out.println("ddddd:"+wxMpXmlMessage.toString()+"subscribe".equals(wxMpXmlMessage.getEvent()));
        return "subscribe".equals(wxMpXmlMessage.getEvent());
    }
}
