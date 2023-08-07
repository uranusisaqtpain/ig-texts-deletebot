require('dotenv').config();

module.exports = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    chatbox: process.env.TEPY,
    usernamefield: 'input[name="username"]',
    passwordfield: 'input[name="password"]',
    loginbutton: 'button[type="submit"]',
    chatContainer: '[data-pagelet="IGDOpenMessageList"]',
    loadingIcon: 'div[role="progressbar"] img[src="https://static.cdn.com/rsrc.php/v3/yl/r/gTdm7zPKz-c.gif"]',
    threeDots: 'div.x78zum5.x1iyjqo2.xs83m0k.xeuugli.x15zctf7 svg[aria-label="More"]',
    notiButtonSelector: 'button._a9--._a9_1',
    unsend: '//div[@role=\'menuitem\' and contains(text(), \'Unsend\')]',
    notUnsend: '//div[@role=\'menuitem\' and contains(text(), \'Report\')]',
    threeDotsDiv: '\div.x1i10hfl.xdl72j9.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1q0g3np.x1lku1pv.x1a2a7pz.x6s0dn4.xjyslct.x9f619.x1ypdohk.x1i0vuye.x1f6kntn.xwhw2v2.xl56j7k.x17ydfre.x2b8uid.xlyipyv.x87ps6o.x14atkfc.xcdnw81.xc58f59.xm71usk.x19hv4p6.xfn85t.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x9bdzbf.xjbqb8w.xm3z3ea.x1x8b98j.x131883w.x16mih1h.x972fbf.xcfux6l.x1qhh985.xm0m39n.xt0psk2.xt7dq6l.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x1n5bzlp[role="menuitem"][tabindex="0"]',
    TD: 'div[aria-haspopup="menu"][aria-label="More"].x1i10hfl.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x9f619.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz.x6s0dn4.xjbqb8w.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x1ypdohk.x78zum5.xl56j7k.x1y1aw1k.x1sxyh0.xwib8y2.xurb0ha.x15vok9n.x4gyw5p.x1o7uuvo',
    TDX: '//div[@aria-haspopup="menu" and @aria-label="More"][@class="x1i10hfl x6umtig x1b1mbwd xaqea5y xav7gou x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x6s0dn4 xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x1ypdohk x78zum5 xl56j7k x1y1aw1k x1sxyh0 xwib8y2 xurb0ha x15vok9n x4gyw5p x1o7uuvo"]\n',
    TextsReceived: 'div.x6prxxf.x1fc57z9.x1yc453h.x126k92a.xzsf02u[dir="auto"][role="none"]',
    scrollableDiv:'body > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > section > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div > div > div > div >div',
    textSent:'div.x6prxxf.x1fc57z9.x1yc453h.x126k92a.x14ctfv',
    imagesSent:'div.x78zum5.x1iyjqo2.xs83m0k.xeuugli.x15zctf7',
    errors:['\'Node is detached from document\'','Node is either not clickable or not an HTMLElement']
}
  
