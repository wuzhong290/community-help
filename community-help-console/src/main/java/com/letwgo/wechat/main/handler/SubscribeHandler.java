package com.letwgo.wechat.main.handler;

import me.chanjar.weixin.common.exception.WxErrorException;
import me.chanjar.weixin.common.session.WxSessionManager;
import me.chanjar.weixin.mp.api.WxMpMessageHandler;
import me.chanjar.weixin.mp.api.WxMpService;
import me.chanjar.weixin.mp.bean.WxMpXmlMessage;
import me.chanjar.weixin.mp.bean.WxMpXmlOutMessage;
import me.chanjar.weixin.mp.bean.WxMpXmlOutTextMessage;

import java.util.Map;

/**
 * Created by thinkpad on 2016/7/6.
 */
public class SubscribeHandler  implements WxMpMessageHandler {
    @Override
    public WxMpXmlOutMessage handle(WxMpXmlMessage wxMessage, Map<String, Object> context,
                                    WxMpService wxMpService, WxSessionManager sessionManager) {
        WxMpXmlOutTextMessage m
                = WxMpXmlOutMessage.TEXT().content("您好！欢迎您关注[江宁社区生活服务]，请问您有哪些需要了解的？<br>1、微网站<br>2、微客服<br>您可以回复序号了解相关内容哦~").fromUser(wxMessage.getToUserName())
                .toUser(wxMessage.getFromUserName()).build();
        return m;
    }
}
