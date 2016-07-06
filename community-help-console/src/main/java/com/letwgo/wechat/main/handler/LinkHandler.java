package com.letwgo.wechat.main.handler;

import me.chanjar.weixin.common.api.WxConsts;
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
public class LinkHandler implements WxMpMessageHandler {
    @Override
    public WxMpXmlOutMessage handle(WxMpXmlMessage wxMessage, Map<String, Object> context,
                                    WxMpService wxMpService, WxSessionManager sessionManager) {
        String href = "<a href=\"" + ""
                + "\">测试oauth2</a>";
        return WxMpXmlOutMessage
                .TEXT()
                .content(href)
                .fromUser(wxMessage.getToUserName())
                .toUser(wxMessage.getFromUserName()).build();
    }
}
