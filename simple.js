
//------------------------------------< hemm >------------------------------------

//TQ TO

//π£ ALLAH SWT { MY GOOD }+{ MY PRIORITAS }
//π£ RASULULLAH { MY IDOLA }
//π£ ORANG TUA { MY FAMILY }
//β @ADIWAJSHING { MODULE }
//β BAILEYS { SERVER }
//π£ Zero YT7 { Mastah }
//π£ MY CRUSH <3 { ADA DEH }
//π£ NATA { PEMOTIVASI }
//π£ YENI { AUTHOR & PENYEMANGAT }
//π£ KAHFZ BOT { MASTAH BAEK ,BAIK BANGAT }
//π£ KALZX TEAM { MY TEAM }
//π£ RIMURU BOTZ { PANUTAN }
//π£ BOT DHANI? { MASTAH GG }
//π£ ATAK BOT { MASTAH GG }
//π£ ZEEONE OFC { MASTAH GEMGE }
//π£ LOL HUMAN { REST API }
//π£ XCHILDS { REST API }
//π£ & ALL CREATOR BOT LAINNYA . . .
//π£ & MAKASIH BANYAK BUAT SUBSCRIBER AKU <3

//π» MHANKBARBAR { BASE ORI DIA } 
//π» NURUTOMO { SEFUH } 
//π» ARIFIRAZZAQ { SEFUH } 

//>>>>>>>>>>>>>>>>>{ 5 M NYA JANGAN LUPA YAK KAK :) }<<<<<<<<<<<<<\\

//JANGAN LUPA 5 M
//π£. MEMAKAI MASKER
//π£. MENCUCI TANGAN
//π£. MENJAGA JARAK
//π£. MENJAUHI KERUMUNAN
//π£. MEMBATASI MOBILITAS

//==========[ BASE ORI MHANKBARBAR ]==========

//NEW BASE BY Mhankbarbar 
//# IZIN MHANKBARBAR MINJEM BASE NYA BWANG

//==========[ SC SUSUNAN HAIKALGANS ]==========

//JANGAN APUS CREATOR BAMG INI SC SY SUSUN BELUM LMA INI JADI JANGAN DI HUJAT KALO SC NYA JEMLEK
//BASE ORI MHANKBARBARπ
//MAU RECODE SC? RECODE AJA TAPI JANGAN LUPA NAMA SAYA HAIKAL
//MAAF YA KALO MASIH BANYAK ERORR BARU BELAJAR NGAB π­

//>>>>>>>>>>>>>>>>>{ AWALAN }<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\\

//Lib
const { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { forks, wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./lib/functions')

//node_modules #edisi males nysusun
const {WAConnection,MessageType,Presence,MessageOptions,Mimetype,WALocationMessage,WA_MESSAGE_STUB_TYPES,WA_DEFAULT_EPHEMERAL,ReconnectMode,ProxyAgent,GroupSettingChange,waChatKey,mentionedJid,processTime,} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { uploadimg, upload } = require('./lib/uploadimg')
const { removeBackgroundFromImageFile } = require('remove.bg')

//------------------------------------------------< CONST SHOP >------------------------------------------
const { epep } = require('./shop/ff')
const { logo } = require('./shop/logo')
//βββββββββββββββ[ DATABASE ]βββββββββββββββββ//
const _welcome = JSON.parse(fs.readFileSync('./tempatdata/welcome.json'))
const _antilink = JSON.parse(fs.readFileSync('./tempatdata/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./tempatdata/antivirtex.json'))
const _nsfww = JSON.parse(fs.readFileSync('./tempatdata/nsfww.json'))
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const _registered = JSON.parse(fs.readFileSync('./tempatdata/registered.json'))
const ApikeyNya = JSON.parse(fs.readFileSync('./ApikeyNya.json'))
menuall = false
baterai = {
battery: "" || "Not detected",
isCharge: "" || false
}
menusimpel = false
const lah = 'π£γ', 
multi =false
offline = false
nopref = false
allpref = true
const total = "221"
thumbnail = setting.thumb
//βββββββββββββββ[ CONST SETTING ]βββββββββββββββββ//

owner = setting.owner
botname = setting.botname
bian = setting.bian
bianname = setting.bianname
ownername = setting.ownername
yopki = setting.yopki
yopkiname = setting.yopkiname
dinda = setting.dinda
dindaname = setting.dindaname
nando = setting.nando
nandoname = setting.nandoname

//βββββββββββββββ[ CONST APIKEY ]βββββββββββββββββ//

humankey = ApikeyNya.humankey
dani = ApikeyNya.dani
xchillds = ApikeyNya.xchillds

//βββββββββββββββ[ MODUL EXPORTS ]βββββββββββββββββ//

module.exports = simple = async (simple, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		    const prefix = /^[Β°zZ#$@*+,.?=''():β%!Β’Β£Β₯β¬ΟΒ€Ξ Ξ¦_&><`β’Β©Β?Ξ^Ξ²Ξ±Β¦|/\\Β©^]/.test(cmd) ? cmd.match(/^[Β°zZ#$@*+,.?=''():β%Β’Β£Β₯β¬ΟΒ€Ξ Ξ¦_&><!`β’Β©Β?Ξ^Ξ²Ξ±Β¦|/\\Β©^]/gi) : '.'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const c = args.join(' ')
		const botNumber = simple.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6289609927539@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await simple.chats.all()
		const groupMetadata = isGroup ? await simple.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? simple.user.jid : simple.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? simple.user.name : conts.notify || conts.vname || conts.name || '-'
        const arg = budy.slice(command.length + 2, budy.length)
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		
//CONST Β² IMAGE/THUMB>>>>>>>>>>>>>>>>>>>>\\\\\\\\\\\\\\\\\\\\

		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		 
		const ofrply = await getBuffer(pporang)
		const thubb = fs.readFileSync('./poto/image/thub_1.jpg')
		const sekarang = new Date().getTime();
		
		
//βββββββββββββββ[ CONNECTION 1 ]βββββββββββββββββ//

		mess = {
			wait: '*Proses Sabar Kak:-)* ... !',
			success: '*Asikkk Berhasil Ni!',
			error: {
				stick: 'Yahh Gagal Kak.. Pada Saat pembuatan  stickernya.! Coba Lagi deh Kak:)! ',
				Iv: 'Yahh Link Nya Erorr Kak :( !'
			},
			only: {
				admin: 'Fitur Khusus Admin !!',
				group: 'Fitur Khusus Grup !!'
			}
		}
		faketeks = 'Β©γIΰ½²Bΰ½²Nΰ½²Uΰ½²Zΰ½²1ΰ½²α΄Άα΄Ώ.βΟγ' //Ganti Aja Nama Luh
		ikal2 = 'Β©Copy By | ZV1ζ΅ |Not Delete Creator Name |' // jan di ubah plis
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            simple.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            simple.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? simple.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : simple.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        
//SET THUMB>>>>>>>>>>>>>>>>>>>>>>>>>>>\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        const ikal = fs.readFileSync ('./poto/NATA.jpg')
        const costum = (pesan, tipe, target, target2) => {
			simple.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
        
   
//βββββββββββββββ[ BUTTON ]βββββββββββββββββ//

        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = simple.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "MORISHIMA BOTl","footerText": ` _HELLO I'M MORISHIMA BOT_β 
_*Yang Akan Membantu Mempermudah Anda, Dalam Hal, Seperti Berjualan, Mendownload, Atau Menemani Anda Gabut π*_

Β© _*${week} ${weton} ${date}*_`,"listType": "SINGLE_SELECT","sections": list}}, {})
            return simple.relayWAMessage(po, {waitForAck: true})
        }
        const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            simple.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: fgif
            })
        }
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await simple.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            simple.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: fgif,
                contexInfo: ikal
            })
        }
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await simple.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
simple.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${botname}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        simple.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
//>>>>>>>>>>>>>>>>>>>>>>>>[ RUNTIME BIO ]<<<<<<<<<<<<<<<<<<<<<<<<<<\\

     waktu = process.uptime() 
    simple.setStatus(`β°Bot Active Selama | ${kyun(waktu)} | ${botname} `).catch((_)=>_);
    
      settingstatus = new Date() * 1;
      
//>>>>>>>>>>>>>>>>>>>>>[ BUTTON TAMBAHAN ]<<<<<<<<<<<<<<<<<<<<<<<\\
                       
                  async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return simple.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }    
        
        const jelek = { "title": `Hallo ${pushname}`,"body": `hy`, "mediaType": "2", "mediaUrl": "https://youtube.com/shorts/b_L5jlwrFRs?feature=share", "thumbnail": fs.readFileSync('./poto/YENI.jpg')}

                       
// fakedoc
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: ikal
                          }
                        }
                      }          

//Butdoc
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await simple.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
simple.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
      const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount: 2022,
                            status: 1,
                            surface : 1, //Ganti Aja Nama Luh
                            message: `π£ JAM : ${time}`,
                            thumbnail: ikal, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// fakevideo
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `Haikal`,
                 "h": `OWNER KU JELEKπ`,
                 'duration': '99999', 
                 'caption': `OWNER KU JELEKπ`,
                 'jpegThumbnail': ikal
                        }
                       }
	                  }
//faketoko	                  
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": ikal //Gambarnye
					},
					"title": `HAIπ ${pushname}`, //Kasih namalu 
					"description": `πMy Z Bot ofc`, 
					"currencyCode": "Rp",
					"priceAmount1000": "1.00",
					"retailerId": `HAIπ ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}

//fakegif
const fgif = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `π`,
                 "h": `ππ`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `π`,
                 'jpegThumbnail': ikal
                        }
                       }
	                  }
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./tempatdata/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
simple.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `
γ‘ Nαͺα·α¬ α΄αΎα’ : ${botname}
γ‘ αΎαNα¬α‘ : ${ownername}

π·Π½aΞΉ ΔΈaΔΈ ${pushname} terimakasih telah mengunjungi bot ini \n\n ΡeΠ²elΟΠΌ ΠΌenggΟnaΔΈan ?ΞΉΡΟr ${botname} ΡΞΉlaΠ½ΔΈan verΞΉ?y dΟlΟ yaπ ΔΈlΞΉΔΈ Π²ΟΡΡon Κα΄Ι’Ιͺsα΄Κα΄sΙͺ dΞΉ Π²awaΠ½ `
const daftar2 = '```α‘α¬α©ααα’α¬α‘ α’α¬α‘αα¬α΄αα» α αͺα»ααα αNα’αK α·α¬NαKα·αͺα’α Fαα’αα‘Β²```'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `αEGIαTαα©αIπ·`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}	                  
//βββββββββββββββ[ FAKE FAKEAN ]βββββββββββββββββ//
        const fakestatus = (teks) => {
            simple.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./poto/YENI.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        simple.chatRead(from, "read")
        const fakegroup = (teks) => {
            simple.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./poto/YENI.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
  
//βββββββββββββββ[ CONNECTION 2 ]βββββββββββββββββ//

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        simple.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    simple.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *γ GROUP LINK DETECTOR γ*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
simple.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`γ *VIRTEX DETECTOR* γ\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
simple.groupRemove(from, [sender])
}     


    //CLOCKSTRING
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}


//βββββββββββββββ[ JAM ]βββββββββββββββββ//

	let runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
var ase = new Date();
                         var jamss = ase.getHours();
                         switch(jamss){
  case 0: jamss = "Jangan gadang kakπ"; break;
  case 1: jamss = "Jangan gadang kakπ"; break;
  case 2: jamss = "Jangan gadang kakπ"; break;
  case 3: jamss = "Jangan gadang kakπ"; break;
  case 4: jamss = "Pagi π Jangan lupa sholat Subuh kakπ"; break;
   case 5: jamss = "Selamat pagiπ"; break;
    case 6: jamss = "Selamat pagi π"; break;
     case 7: jamss = "Selamat pagiπ"; break;
      case 8: jamss = "Selamat pagiπ"; break;
       case 9: jamss = "Selamat pagiπ"; break;
         case 10: jamss = "Selamat pagiπ"; break;
           case 11: jamss = "Selamat siangπ"; break;
             case 12: jamss = "Siang π Jangan lupa sholat Zuhur kakπ"; break;
                 case 13: jamss = "Selamat siangπ"; break;
                  case 14: jamss = "Selamat soreπ"; break;
                    case 15: jamss = "SoreπJangan lupa sholat Ashar kakπ"; break;
                      case 16: jamss = "Selamat soreπ"; break;
                       case 17: jamss = "Selamat soreπ"; break;
                        case 18: jamss = "Selamat malamπ"; break;
                          case 19: jamss = "Malam π Jangan lupa sholat Isya kakπ"; break;
                             case 20: jamss = "Selamat malamπ"; break;
                            case 21: jamss = "Selamat malamπ"; break;
                          case 22: jamss = "Selamat malam π"; break;
                        case 23: jamss = "Selamat malamπ"; break;

            }
            var tampilUcapan = "" + jamss;
let locale = "id";
             let d = new Date();
             	let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
             const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
            let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    
   const sotoy = [
     'π : π : π',
  '  π : π : π',
   'π : π : π',
 'π : π : π', //ANKER
  'π : π : π',
    'π : π : π',
      'π : π : π',        
      'π : π : π',
     'π : π : π',
    'π : π : π',
   'π : π : π',
 ' π : π : π',
     'π : π : π',
     ' π : π : π',
     'π : π : π Winπ',
    'π : π : π',
  ' π : π : π', 
  'π : π : π',
   'π : π : π Winπ',
     'π΅ : π : π΄',
       'π : π : π',
        'π : π : π Winπ'
        ]    
        
        
simple.updatePresence(from, Presence.composing)
//βββββββββββββββ[ CONNECTION 3 ]βββββββββββββββββ//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//βββββββββββββββ[ MENU ]βββββββββββββββββ//

 switch (command) {
	case 'menu':
	case 'help':
	case 'm':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
Ppurl = 'https://telegra.ph/file/ecac94e418534db656dd0.jpg'
img = await getBuffer (Ppurl)
teks = `δΉβ’  ${pushname} π${tampilUcapan}`
trans = `              β¬ BOT INFO β­

β­ββ γ INFO SERVER γ β
β π¬ Base : *Mhankbarbar*
β π Penyusun : *IBNU*
β π Terbit : *15-01-2022*
β π Tempat : *Kota solo, Jawatengah*
ββ
ββββββ π­ βββββ
ββ£ _*Nama Bot : ${botname}*_
ββ£ _*Nama Owner : ${ownername}*_
ββ£ _*Active : ${runtime(process.uptime())}*_
ββ£ _*Prefix : Multi*_
ββ£ _*Lenguage : Javascript*_
ββ£ _*Jam : ${time}*_
ββ€ | Β© ZV1ζ΅ γβ βββββ

"Ketahuilah bahwa kemenangan bersama kesabaran, kelapangan bersama kesempitan, dan kesulitan bersama kemudahan." (HR Tirmidzi)

_*JIKA BUTTON TIDAK TERLIHAT KETIK .allmenu*_
 Β© _${week} ${weton} ${date}_`
 
 but = [
          { buttonId: `${prefix}command`, buttonText: { displayText: 'SIMPLE' }, type: 1 },
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'ALLMENU' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
        ]
  
 
        sendButImage(from, teks, trans, img, but, {quoted: ftok})
        break
case 'ppcouple':
case 'ppcp': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
			anu = await fetchJson(`https://ziyy.herokuapp.com/api/ppcouple?apikey=xZiyy`) 
			cowo = await getBuffer(anu.result.cowo_image)
			simple.sendMessage(from, cowo, image, {caption: 'Ini Untuk Β»  *ππΌππΌπΈπ»ππ?'})
       cewe = await getBuffer(anu.result.cewe_image)
		    pll = `Ini Untuk Β» *ππ²ππ²πΈπ»ππ?*`
   sendButImage(from, pll, `ZV1ζ΅ BOTZ Β© 2021`, cewe, [                      
          {
            buttonId: `${prefix}ppcouple`,
            buttonText: {
              displayText: `NextοΈ`,
            },
            type: 1,
          },
        ]);                 
break
                              
                    
   
             
  case 'bot':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj15.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break


// Baterai
	simple.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	simple.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})                                          
	simple.on("CB:action,,battery", (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batteryLevel = parseInt(batteryLevelStr);
    battery.persen = `${batteryLevel}%`;
    battery.charger = json[2][0][1].live;
  });

//>>>>>>>>>>>>>>>>>>>>[ COMMAND ]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

  case 'c':

  case 'command':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
               list = []
            listmenu = [`shop`,`sewabot`,`groupmenu`,`toolsmenu`,`downloadmenu`,`islammenu`,`animemenu`,`informationmenu`,`searchmenu`,`primbonmenu`,`ownermenu`,`cegan`,`djmenu`,`makermenu`,]
               listmenuu = [`shop`,`sewabot`,`groupmenu`,`toolsmenu`,`downloadmenu`,`islammenu`,`animemenu`,`informationmenu`,`searchmenu`,`primbonmenu`,`ownermenu`,`cegan`,`djmenu`,`makermenu`,]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'myselfπ',
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: `SIMPLE-BOT`,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${tampilUcapan}`, `Hai kak ${pushname}, Pilih Menu Disini`, list)
               break
  
  case 'payment':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
               list = []
               listmenu = [`gopay3`,`dana3`,`ovo3`,]
               listmenuu = 
                   [`gopay`,`dana`,`ovo`,]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Payment' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: `paymentSimple`,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${tampilUcapan}`,   `Hai kak *${pushname}*\nΒ©simplelist, _Ini Command Payment Nya_`, list)
               break
  
    case 'djmenu':
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
  
               list = []
               listmenu = [`sound1`,`sound2`,`sound3`,`sound4`,`sound5`,`sound6`,`sound7`,`sound8`,`sound9`,`sound10`,`sound11`,`sound12`,`sound13`,`sound14`,`sound15`,`sound16`,`sound17`,`sound18`,`sound19`,`sound20`,`sound21`,`sound22`,`sound23`,`sound24`,`sound25`,]
               listmenuu = 
[`sound1`,`sound2`,`sound3`,`sound4`,`sound5`,`sound6`,`sound7`,`sound8`,`sound9`,`sound10`,`sound11`,`sound12`,`sound13`,`sound14`,`sound15`,`sound16`,`sound17`,`sound18`,`sound19`,`sound20`,`sound21`,`sound22`,`sound23`,`sound24`,`sound25`,]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'List vn' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${tampilUcapan}`,   `Hai kak *${pushname}*\nΒ©simplelist, _Ini Command Soundnya`, list)
               break

case 'shop':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
               list = []
               listmenu = [`deemepep`,`bayar`,`masukandata`,`listsewa`,`jaslog`,`owner`,`payment`]
               listmenuu = [`deemepep`,`bayar`,`masukandata`,`listsewa`,`jaslog`,`owner`,`payment`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'ShopMenu' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: `Β©HaikalGans`,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${tampilUcapan}`,   `Hai kak *${pushname}*\nJangan Lupa Di Order Kak`, list)
               break

//>>>>>>>>>>>>>>>>>>>>>>>[ CASE COMMAND ]<<<<<<<<<<<<<<<<<<<<<<<<\\

case 'grouphaikal':

if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`_*HAI*_`
oy =`
https://chat.whatsapp.com/E4FrpaZ2G4WKtbfkJd9g18

_Ga Join Ga Kawan_
_*LANJUT? KLIK BUTTON DI BAWAH*_
`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'NEXTβ‘' }, type: 1 }, 
          { buttonId: `${prefix}command`, buttonText: { displayText: 'SIMPLEβ‘' }, type: 1 }
        ]
         sendButton(from, emm, oy, but)
break

case 'userinfo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`γ ${botname} γ
Hai, ${pushname}
${tampilUcapan}
Jam : ${time}
HARI : ${week}, ${date}
ππ¨π§'π­ ππ©ππ¦`
oy =`
ππ¬ππ« π’π§ππ¨
π£ _Status : ${isOwner ? 'Owner' : 'User'}_
π£ _Nama User : ${pushname}_
π£ _Nomor User : ${sender.split('@')[0]}_
_*Youtube Owner*_

https://youtube.com/channel/UCYDZpsK1w7hWYInmyZowrUA
_SubsCribe_

_*LANJUT? KLIK BUTTON DI BAWAH*_
`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'NEXTβ‘' }, type: 1 }, 
          { buttonId: `${prefix}command`, buttonText: { displayText: 'SIMPLEβ‘' }, type: 1 }
        ]
         sendButton(from, emm, oy, but)
break

case 'isidataakun':

if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`γ ${botname} γ
Hai, ${pushname}
${tampilUcapan}
Jam : ${time}
HARI : ${week}, ${date}
ππ¨π§'π­ ππ©ππ¦`
oy =`
*γBOT MELAYANIγ
MASUKKANA DATA BERIKUT

*β’ NAMA GAME:*
*β’ ID GAME:*
*β’ USER NAME:*
*NOTE:*
*1. Jangan Lupa Bukti Tf*
*2. Jika Mau Tf Harap Hubungi*
*Owner Terlebih Dahulu !!*
*3. Otomatis Pesanan Anda*
*Langsung Di Proses*`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'πOWNERπ' }, type: 1 }
        ]
         sendButton(from, emm, oy, but)
break

case 'listsewa':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
url = 'https://telegra.ph/file/2fd99428214122167653d.jpg'
img = await getBuffer(url)
emm =
`γ ${botname} γ
Hai, ${pushname}
${tampilUcapan}
Jam : ${time}
HARI : ${week}, ${date}
ππ¨π§'π­ ππ©ππ¦`
oy =`
*_Jasa Sewa Bot By : Β©IBNUGans_
*>>>>>>>> *LIST HARGA* >>>>>>>>*
[π₯] . _Fitur Bot Banyak And Ada Catalog Menu_

π£. _*2Minggu : Rp. 3.000 [ Promo ]*_
π£. _*1Bulan : Rp. 5.000 [ Promo ]*_
π£. _*Manent : Rp. 10.000 [ Promo ]*_

 _Jika Anda Minat Bisa Chat Nomer Ini_
_*πͺ Wa.me/6281229393997*_
_Note Jangan Spam_
_*Maaf Jika Slow Respon Karena Sesuai Antrian*_`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'πOWNERπ' }, type: 1 }
        ]
          sendButImage(from, emm, oy, img, but)
break

case 'deemepep':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
url = 'https://telegra.ph/file/2fd99428214122167653d.jpg'
img = await getBuffer(url)
emm =
`γ ${botname} γ
Hai, ${pushname}
${tampilUcapan}
Jam : ${time}
HARI : ${week}, ${date}
ππ¨π§'π­ ππ©ππ¦`
oy =`${epep}`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },
           { buttonId: `${prefix}payment`, buttonText: { displayText: 'BAYAR' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
        break

case 'groupmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
Ppurl = 'https://telegra.ph/file/ecac94e418534db656dd0.jpg'
img = await getBuffer (Ppurl)
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
β οΈοΈ *GROUP Menu*
β’ _${prefix}antilink_
β’ _${prefix}welcome_
β’ _${prefix}antivirtex_
β’ _${prefix}group_
β’ _${prefix}linkgroup_
β’ _${prefix}promote_
β’ _${prefix}demote_
β’ _${prefix}add_
β’ _${prefix}kick_
β’ _${prefix}setpp_
β’ _${prefix}setdesc_
β’ _${prefix}setname_
β’ _${prefix}hidetag_
`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: 'βRULES BOTβ' }, type: 1 }
        ]
          sendButImage(from, emm, oy, img, but)
break

case 'toolsmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
Ppurl = 'https://telegra.ph/file/ecac94e418534db656dd0.jpg'
img = await getBuffer (Ppurl)
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
β οΈοΈ *TOOLS Menu*
β’ _${prefix}attp_
β’ _${prefix}tomp3_
β’ _${prefix}tovideo_
β’ _${prefix}toimg_`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: 'πΌRULES BOTπΌ' }, type: 1 }
        ]
          sendButImage(from, emm, oy, img, but)
break

case 'downloadmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
Ppurl = 'https://telegra.ph/file/ecac94e418534db656dd0.jpg'
img = await getBuffer (Ppurl)
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
β οΈοΈ *DOWNLOADER Menu*
β’ _${prefix}yt_
β’ _${prefix}tt_
β’ _${prefix}play_
β’ _${prefix}ytsearch_
β’ _${prefix}ytmp3_
β’ _${prefix}ytmp4_
β’ _${prefix}tiktoknowm_
β’ _${prefix}tiktokmusic_
β’ _${prefix}pinterest_`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: 'π₯RULES BOTπ₯' }, type: 1 }
        ]
          sendButImage(from, emm, oy, img, but)
break
case 'islammenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
Ppurl = 'https://telegra.ph/file/ecac94e418534db656dd0.jpg'
img = await getBuffer (Ppurl)
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
β οΈοΈ *ISLAM Menu*
β’ _${prefix}alquran_
β’ _${prefix}asmaulhusna_
β’ _${prefix}alquranaudio_
β’ _${prefix}jadwalsholat_
β’ _${prefix}kisahnabi_
β’ _${prefix}listsurah_`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: 'βRULES BOTβ' }, type: 1 }
        ]
          sendButton(from, emm, oy, img, but)
break
case 'animemenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
Ppurl = 'https://telegra.ph/file/ecac94e418534db656dd0.jpg'
img = await getBuffer (Ppurl)
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
β οΈοΈ *ANIME Menu*
β’ _${prefix}character_
β’ _${prefix}manga_
β’ _${prefix}anime_
β’ _${prefix}kusonimesearch_
β’ _${prefix}otakudesusearch_
β’ _${prefix}nhentaisearch_
β’ _${prefix}nekopoisearch_`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: 'πRULES BOTπ' }, type: 1 }
        ]
          sendButImage(from, emm, oy, img, but)
break
    
case 'informationmenu':

if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
Ppurl = 'https://telegra.ph/file/ecac94e418534db656dd0.jpg'
img = await getBuffer (Ppurl)
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
β οΈοΈ *INFORMASI Menu*
β’ _${prefix}kbbi_
β’ _${prefix}infogempa_
β’ _${prefix}covidindo_
β’ _${prefix}covidglobal_
β’ _${prefix}jadwaltv_
β’ _${prefix}translate_
β’ _${prefix}cuaca_
β’ _${prefix}wikipedia_
β’ _${prefix}jarak_`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: 'π¬RULES BOTπ¬' }, type: 1 }
        ]
          sendButImage(from, emm, oy, img, but)
break

case 'djmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
Ppurl = 'https://telegra.ph/file/ecac94e418534db656dd0.jpg'
img = await getBuffer (Ppurl)
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
β οΈοΈ *SOUND Menu*
β’ _${prefix}sound1_
β’ _${prefix}sound2_
β’ _${prefix}sound3_
β’ _${prefix}sound4_
β’ _${prefix}sound5_
β’ _${prefix}sound6_
β’ _${prefix}sound7_
β’ _${prefix}sound8_
β’ _${prefix}sound9_
β’ _${prefix}sound10_
β’ _${prefix}sound11_
β’ _${prefix}sound12_
β’ _${prefix}sound13_
β’ _${prefix}sound14_
β’ _${prefix}sound15_`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: 'π±RULES BOTπ±' }, type: 1 }
        ]
          sendButImage(from, emm, oy, img, but)
break
    
case 'searchmenu':

if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
Ppurl = 'https://telegra.ph/file/ecac94e418534db656dd0.jpg'
img = await getBuffer (Ppurl)
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`

β οΈοΈ *SEARCH Menu*
β’ _${prefix}gimage_
β’ _${prefix}wallpapersearch_
β’ _${prefix}playstore_
β’ _${prefix}shopee_
β’ _${prefix}google_
`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: 'βRULES BOTβ' }, type: 1 }
        ]
          sendButImage(from, emm, oy, img, but)
break
    
case 'primbonmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
Ppurl = 'https://telegra.ph/file/ecac94e418534db656dd0.jpg'
img = await getBuffer (Ppurl)
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
β οΈοΈ *PRIMBON Menu*
β’ _${prefix}tebakumur_
β’ _${prefix}artinama_
β’ _${prefix}jodoh_
β’ _${prefix}jadian_
`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: 'βRULES BOTβ' }, type: 1 }
        ]
          sendButImage(from, emm, oy, img, but)
break
    
case 'cegan':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
Ppurl = 'https://telegra.ph/file/ecac94e418534db656dd0.jpg'
img = await getBuffer (Ppurl)
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
β οΈοΈ *COGAN&CECAN Menu*
β’ _${prefix}cogan_
β’ _${prefix}cecan_`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: 'πRULES BOTπ' }, type: 1 }
        ]
          sendButImage(from, emm, oy, img, but)
break

case 'makermenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
Ppurl = 'https://telegra.ph/file/ecac94e418534db656dd0.jpg'
img = await getBuffer (Ppurl)
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
β οΈοΈ *PHOTOOXY Menu*
β’ _${prefix}shadow_
β’ _${prefix}cup_
β’ _${prefix}cup1_
β’ _${prefix}romance_
β’ _${prefix}smoke_
β’ _${prefix}burnpaper_
β’ _${prefix}lovemessage_
β’ _${prefix}undergrass_
β’ _${prefix}love_
β’ _${prefix}coffe_
β’ _${prefix}woodheart_
β’ _${prefix}woodenboard_
β’ _${prefix}summer3d_
β’ _${prefix}wolfmetal_
β’ _${prefix}nature3d_
β’ _${prefix}underwater_
β’ _${prefix}golderrose_
β’ _${prefix}summernature_
β’ _${prefix}letterleaves_
β’ _${prefix}glowingneon_
β’ _${prefix}fallleaves_
β’ _${prefix}flamming_
β’ _${prefix}harrypotter_
β’ _${prefix}carvedwood_

β οΈοΈ *TEXTPROME Menu*
β’ _${prefix}pornhub_
β’ _${prefix}neon_
β’ _${prefix}glitch_
β’ _${prefix}thunder_
β’ _${prefix}tahta_
β’ _${prefix}glow_
β’ _${prefix}wetglass_
β’ _${prefix}multicolor3d_
β’ _${prefix}watercolor_
β’ _${prefix}luxurygold_
β’ _${prefix}galaxywallpaper_
β’ _${prefix}lighttext_
β’ _${prefix}beautifulflower_
β’ _${prefix}puppycute_
β’ _${prefix}royaltext_
β’ _${prefix}heartshaped_
β’ _${prefix}birthdaycake_
β’ _${prefix}galaxystyle_
β’ _${prefix}hologram3d_

β οΈοΈ *EPHOTO Menu*
β’ _${prefix}greenneon_
β’ _${prefix}glossychrome_
β’ _${prefix}greenbush_
β’ _${prefix}metallogo_
β’ _${prefix}noeltext_
β’ _${prefix}glittergold_
β’ _${prefix}textcake_
β’ _${prefix}starsnight_
β’ _${prefix}wooden3d_
β’ _${prefix}textbyname_
β’ _${prefix}writegalacy_
β’ _${prefix}galaxybat_
β’ _${prefix}snow3d_
β’ _${prefix}birthdayday_
β’ _${prefix}goldplaybutton_
β’ _${prefix}silver play button_
β’ _${prefix}freefire_`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: 'πΈRULES BOTπΈ' }, type: 1 }
        ]
          sendButImage(from, emm, oy, img, but)
break

case 'ownermenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
Ppurl = 'https://telegra.ph/file/ecac94e418534db656dd0.jpg'
img = await getBuffer (Ppurl)
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
β οΈοΈ *OWNER Menu*
β’ _${prefix}owner_
β’ _${prefix}sewabot_
β’ _${prefix}bc_
β’ _${prefix}report_`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: 'π»RULES BOTπ»' }, type: 1 }
        ]
          sendButImage(from, emm, oy, img, but)
break
    
//βββββββββββββββ[ ALLMENU ]βββββββββββββββββ//

	
case 'allmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
ppUrl = 'https://telegra.ph/file/ecac94e418534db656dd0.jpg'
img = await getBuffer(ppUrl)
teks = `Hai ${pushname} π${tampilUcapan}
I'M Z-BOT8 ^_^`
trans = `BOT INFO
πΏ  _*Nama Bot : ${botname}*_
π¨  _οΈNama Owner : ${ownername}_
οΈβ°  _*Active : ${runtime(process.uptime())}*_
π£  _οΈPrefix : Multi_
π  _lenguage : JavaScript_
π  _Jam : ${time}_

β οΈοΈ *GROUP Menu*
β’ _${prefix}antilink_
β’ _${prefix}welcome_
β’ _${prefix}antivirtex_
β’ _${prefix}group_
β’ _${prefix}linkgroup_
β’ _${prefix}promote_
β’ _${prefix}demote_
β’ _${prefix}add_
β’ _${prefix}kick_
β’ _${prefix}setpp_
β’ _${prefix}setdesc_
β’ _${prefix}setname_
β’ _${prefix}hidetag_

β οΈοΈ *PHOTOOXY Menu*
β’ _${prefix}shadow_
β’ _${prefix}cup_
β’ _${prefix}cup1_
β’ _${prefix}romance_
β’ _${prefix}smoke_
β’ _${prefix}burnpaper_
β’ _${prefix}lovemessage_
β’ _${prefix}undergrass_
β’ _${prefix}love_
β’ _${prefix}coffe_
β’ _${prefix}woodheart_
β’ _${prefix}woodenboard_
β’ _${prefix}summer3d_
β’ _${prefix}wolfmetal_
β’ _${prefix}nature3d_
β’ _${prefix}underwater_
β’ _${prefix}golderrose_
β’ _${prefix}summernature_
β’ _${prefix}letterleaves_
β’ _${prefix}glowingneon_
β’ _${prefix}fallleaves_
β’ _${prefix}flamming_
β’ _${prefix}harrypotter_
β’ _${prefix}carvedwood_

β οΈοΈ *TOOLS Menu*
β’ _${prefix}attp_
β’ _${prefix}tomp3_
β’ _${prefix}tovideo_
β’ _${prefix}toimg_

β οΈοΈ *DOWNLOADER Menu*
β’ _${prefix}yt_
β’ _${prefix}tt_
β’ _${prefix}play_
β’ _${prefix}ytsearch_
β’ _${prefix}ytmp3_
β’ _${prefix}ytmp4_
β’ _${prefix}tiktoknowm_
β’ _${prefix}tiktokmusic_
β’ _${prefix}pinterest_

β οΈοΈ *ISLAM Menu*
β’ _${prefix}alquran_
β’ _${prefix}asmaulhusna_
β’ _${prefix}alquranaudio_
β’ _${prefix}jadwalsholat_
β’ _${prefix}kisahnabi_
β’ _${prefix}listsurah_

β οΈοΈ *ANIME Menu*
β’ _${prefix}character_
β’ _${prefix}manga_
β’ _${prefix}anime_
β’ _${prefix}kusonimesearch_
β’ _${prefix}otakudesusearch_
β’ _${prefix}nhentaisearch_
β’ _${prefix}nekopoisearch_

β οΈοΈ *INFORMASI Menu*
β’ _${prefix}kbbi_
β’ _${prefix}infogempa_
β’ _${prefix}covidindo_
β’ _${prefix}covidglobal_
β’ _${prefix}jadwaltv_
β’ _${prefix}translate_
β’ _${prefix}cuaca_
β’ _${prefix}wikipedia_
β’ _${prefix}jarak_

β οΈοΈ *SEARCH Menu*
β’ _${prefix}gimage_
β’ _${prefix}wallpapersearch_
β’ _${prefix}playstore_
β’ _${prefix}shopee_
β’ _${prefix}google_

β οΈοΈ *PRIMBON Menu*
β’ _${prefix}tebakumur_
β’ _${prefix}artinama_
β’ _${prefix}jodoh_
β’ _${prefix}jadian_

β οΈοΈ *CECAN&COGQN Menu*
β’ _${prefix}cogan_
β’ _${prefix}cecan_

β οΈοΈ *SOUND Menu*
β’ _${prefix}sound1_
β’ _${prefix}sound2_
β’ _${prefix}sound3_
β’ _${prefix}sound4_
β’ _${prefix}sound5_
β’ _${prefix}sound6_
β’ _${prefix}sound7_
β’ _${prefix}sound8_
β’ _${prefix}sound9_
β’ _${prefix}sound10_
β’ _${prefix}sound11_
β’ _${prefix}sound12_
β’ _${prefix}sound13_
β’ _${prefix}sound14_
β’ _${prefix}sound15_

β οΈοΈ *TEXTPROME Menu*
β’ _${prefix}pornhub_
β’ _${prefix}neon_
β’ _${prefix}glitch_
β’ _${prefix}thunder_
β’ _${prefix}tahta_
β’ _${prefix}glow_
β’ _${prefix}wetglass_
β’ _${prefix}multicolor3d_
β’ _${prefix}watercolor_
β’ _${prefix}luxurygold_
β’ _${prefix}galaxywallpaper_
β’ _${prefix}lighttext_
β’ _${prefix}beautifulflower_
β’ _${prefix}puppycute_
β’ _${prefix}royaltext_
β’ _${prefix}heartshaped_
β’ _${prefix}birthdaycake_
β’ _${prefix}galaxystyle_
β’ _${prefix}hologram3d_

β οΈοΈ *EPHOTO Menu*
β’ _${prefix}greenneon_
β’ _${prefix}glossychrome_
β’ _${prefix}greenbush_
β’ ,${prefix}metallogo_
β’ _${prefix}noeltext _
β’ _${prefix}glittergold_
β’ _${prefix}textcake_
β’ _${prefix}starsnight_
β’ _${prefix}wooden3d_
β’ _${prefix}textbyname_
β’ _${prefix}writegalacy_
β’ _${prefix}galaxybat_
β’ _${prefix}snow3d_
β’ _${prefix}birthdayday_
β’ _${prefix}goldplaybutton_
β’ _${prefix}silver play button_
β’ _${prefix}freefire_

β οΈοΈ *OWNER Menu*
β’ _${prefix}owner_
β’ _${prefix}sewabot_
β’ _${prefix}bc_
β’ _${prefix}report_`
 
 but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'π£PEMILIKBOTπ£' }, type: 1 },
] 
  
 
        sendButImage(from, teks, trans, img, but)
        break

//βββββββββββββββ[ FITUR GROUP ]βββββββββββββββββ//

case 'welcome':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./tempatdata/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`βSukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./tempatdata/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`βSukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
break
case 'antilink' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiLink) return reply('anti link sudah on')
_antilink.push(from)
fs.writeFileSync('./tempatdata/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`βSukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./tempatdata/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`βSukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'antivirtexon' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./tempatdata/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./tempatdata/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`βSukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: '!grouptutup', buttonText: { displayText: 'Tutup' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`βSukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
simple.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`βSukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
simple.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
linkgc = await simple.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
simple.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
simple.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
simple.groupMakeAdmin(from, mentioned)
}
break
	case 'kontak':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
              if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
case 'demote' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
simple.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
simple.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
simple.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
simple.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
simple.groupRemove(from, mentioned)
}
break
case 'tagall':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `β’ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
simple.groupUpdateSubject(from, `${body.slice(9)}`)
simple.sendMessage(from, `\`\`\`βSukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
simple.groupUpdateDescription(from, `${body.slice(9)}`)
simple.sendMessage(from, `\`\`\`βSukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
po = await simple.downloadAndSaveMediaMessage(mek, './tempatdata/media_user')
await simple.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`βSukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await simple.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
simple.sendMessage(from, options, text)
break

//βββββββββββββββ[ FITUR tools ]βββββββββββββββββ//

case 'attp':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
simple.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'ttp':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${encodeURI(q)}`)
simple.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'toimg':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isQuotedSticker) return reply(' reply stickernya kak :)')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await simple.downloadAndSaveMediaMessage(encmedia, './tempatdata/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Β©_ZV1ζ΅ BOTZ_ *V : 2.889H*`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await simple.downloadAndSaveMediaMessage(encmedia, './tempatdata/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
simple.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await simple.downloadAndSaveMediaMessage(anumedia, './tempatdata/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
simple.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Jangan Lupa Subscribe Z-BOT8' })
fs.unlinkSync(ran)
})
break

//βββββββββββββββ[ FITUR ISLAMI ]βββββββββββββββββ//

case 'listsurah':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${humankey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'alquran':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length < 1) return reply(`Nomor Surah Yg Mau Di Cari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${humankey}`
quran = await fetchJson(urls)
result = quran.result
ayat = result.ayat
ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
arab = x.arab
nomor = x.ayat
latin = x.latin
indo = x.indonesia
ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
reply(ini_txt)
break
case 'alquranaudio':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nomor Surah Yg Mau Dicari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10`)
reply('Sabar Sedang Proses...')
surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${humankey}`)
await simple.sendMessage(from, ini_buffer, audio, { quoted: fgif, mimetype: Mimetype.mp4Audio })
break
case 'asmaulhusna':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
reply(ini_txt)
break
case 'kisahnabi':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Nabi Yg Mau Dicari Mana\nContoh : ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
reply(ini_txt)
break
case 'jadwalsholat':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Kotanya Mana\nContoh : ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.imsak}\n`
ini_txt += `Isya : ${get_result.isya}`
reply(ini_txt)
break

//βββββββββββββββ[ FITUR DOWNLOADER ]βββββββββββββββββ//


case 'tt':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
teks =
`_Please choose a file or media you want to download_`
but = [
{ buttonId: `${prefix}tiktokmusic ${q}`, buttonText: { displayText: ' MP3π΅'}, type: 1 },
{ buttonId: `${prefix}tiktok ${q}`, buttonText: { displayText: ' MP4πΉ'}, type: 1 },
]
sendButton(from, teks, faketeks, but) 
break

case 'yt':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
teks =
`Audio Atau Video Tod`
but = [
{ buttonId: `${prefix}playmp3 ${q}`, buttonText: { displayText: 'LAGUπΌ'}, type: 1 },
{ buttonId: `${prefix}ytmp4 ${q}`, buttonText: { displayText: 'VIDEOπ₯'}, type: 1 },
]
sendButton(from, teks, faketeks,  but) 
break

case 'play':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
teks =
`Klik Download Tod`
but = [
{ buttonId: `${prefix}playmp3 ${q}`, buttonText: { displayText: 'π₯ DOWNLOAD '}, type: 1 },
]
sendButton(from, teks, faketeks, but) 
break
case 'playmp3':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return await reply(`Judul Lagunya Mana Tod\nContoh : ${prefix + command} melukis senja`)
reply(mess.wait)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=haikal&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${humankey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `P L A Y\n\n`
caption += `π΄ Title     : *${result.title}*\n\n`
caption += `π΄ Size     : *${result.size}*\n\n`
caption += `π΄ Link     : *${result.link}*\n\n`
caption += `_*TUNGGU MUNGKIN FILE SEDANG DI KIRIM HARAP TUNGGU BEBERAPA MENIT*_`
ini_buffer = await getBuffer(result.thumbnail)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(result.link)
await simple.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: ftrol})
})
})

break
break
case "playmp4":
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length === 0)
return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
reply(mess.wait)
var srch = args.join("")
aramas = await yts(srch)
aramat = aramas.all;
var mulaikah = aramat[0].url;
try {
ytv(mulaikah).then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res;
axios
.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000)
return sendMediaURL(from,thumb,`*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply("error"))
})
})
} catch (err) {
reply(mess.error.api)
}
break
case 'ytsearch':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari Tod\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Published : ${x.published}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n`
ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
break
case 'ytmp3':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${humankey}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await simple.sendMessage(from, get_audio, audio, { mimetype: 'video/mp4', filename: `${get_result.title}.mp3`, quoted: ftrol })
break
case 'ytmp4':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${humankey}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await simple.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftrol, caption: 'Nih Kak'})
break
case 'tiktok':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_url = args[0]
ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${humankey}&url=${ini_url}`
get_result = await fetchJson(ini_url)
ini_buffer = await getBuffer(get_result.result.link)
await simple.sendMessage(from, ini_buffer, video, { quoted: ftrol, caption: 'Done...!!!'})
break
case 'tiktoknowm':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_url = args[0]
ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${humankey}&url=${ini_url}`
get_result = await fetchJson(ini_url)
ini_buffer = await getBuffer(get_result.result.link)
await simple.sendMessage(from, ini_buffer, video, { quoted: ftrol })
break
case 'tiktokmusic':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${humankey}&url=${ini_link}`)
await simple.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: ftrol })
break
case 'pinterest':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${humankey}&query=${query}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break

//βββββββββββββββ[ FITUR ANIME ]βββββββββββββββββ//

case 'character':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Name : ${get_result.name.full}\n`
ini_txt += `Native : ${get_result.name.native}\n`
ini_txt += `Favorites : ${get_result.favourites}\n`
ini_txt += `Media : \n`
ini_media = get_result.media.nodes
for (var x of ini_media) {
ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
}
ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
thumbnail = await getBuffer(get_result.image.large)
await simple.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'manga':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Chapters : ${get_result.chapters}\n`
ini_txt += `Volume : ${get_result.volumes}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await simple.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'anime':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Episodes : ${get_result.episodes}\n`
ini_txt += `Duration : ${get_result.duration} mins.\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Season : ${get_result.season}\n`
ini_txt += `Season Year : ${get_result.seasonYear}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await simple.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'kusonimesearch':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Genre : ${get_result.genre}\n`
ini_txt += `Seasons : ${get_result.seasons}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Total Episode : ${get_result.total_episode}\n`
ini_txt += `Score : ${get_result.score}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Released On : ${get_result.released_on}\n`
ini_txt += `Desc : ${get_result.desc}\n`
link_dl = get_result.link_dl
for (var x in link_dl) {
ini_txt += `\n${x}\n`
for (var y in link_dl[x]) {
ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
ini_buffer = await getBuffer(get_result.thumbnail)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
break
case 'otakudesusearch':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Judul : ${get_result.judul}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Episode : ${get_result.episodes}\n`
ini_txt += `Aired : ${get_result.aired}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Genre : ${get_result.genres}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Studios : ${get_result.status}\n`
ini_txt += `Rating : ${get_result.rating}\n`
ini_txt += `Credit : ${get_result.credit}\n`
get_link = get_result.link_dl
for (var x in get_link) {
ini_txt += `\n\n*${get_link[x].title}*\n`
for (var y in get_link[x].link_dl) {
ini_info = get_link[x].link_dl[y]
ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
ini_txt += `\`\`\`Link : \`\`\`\n`
down_link = ini_info.link_dl
for (var z in down_link) {
ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
reply(ini_txt)
break
case 'nhentaisearch':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = "Result : \n"
for (var x of get_result) {
ini_txt += `Id : ${x.id}\n`
ini_txt += `Title English : ${x.title_english}\n`
ini_txt += `Title Japanese : ${x.title_japanese}\n`
ini_txt += `Native : ${x.title_native}\n`
ini_txt += `Upload : ${x.date_upload}\n`
ini_txt += `Page : ${x.page}\n`
ini_txt += `Favourite : ${x.favourite}\n\n`
}
reply(ini_txt)
break
case 'nekopoisearch':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
reply(ini_txt)
break

//βββββββββββββββ[ FITUR INFORMATION ]βββββββββββββββββ//

case 'kbbi':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} kursi`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${humankey}&query=${args.join(" ")}`)
lila = get_result.result
ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
for (var x of lila) {
ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
}
reply(ini_txt)
break
case 'jarak':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} jakarta - yogyakarta`)
pauls = args.join(" ")
teks1 = pauls.split("-")[0].trim()
teks2 = pauls.split("-")[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${humankey}&kota1=${teks1}&kota2=${teks2}`)
x = get_result.result
ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
ini_txt += `\`\`\`βͺ Asal :\`\`\` ${x.from.name}\n`
ini_txt += `\`\`\`βͺ Garis Lintang :\`\`\` ${x.from.latitude}\n`
ini_txt += `\`\`\`βͺ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
ini_txt += `\`\`\`βͺ Tujuan :\`\`\` ${x.to.name}\n`
ini_txt += `\`\`\`βͺ Garis Lintang :\`\`\` ${x.to.latitude}\n`
ini_txt += `\`\`\`βͺ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
ini_txt += `\`\`\`βͺ Jarak Tempuh :\`\`\` ${x.jarak}\n`
ini_txt += `\`\`\`βͺ Waktu Tempuh :\`\`\`\n`
ini_txt += `   β­ββββββββββββββββ\n`
ini_txt += `ββ€ Kereta Api : ${x.kereta_api}\n`
ini_txt += `ββ€ Pesawat : ${x.pesawat}\n`
ini_txt += `ββ€ Mobil : ${x.mobil}\n`
ini_txt += `ββ€ Motor : ${x.motor}\n`
ini_txt += `ββ€ Jalan Kaki : ${x.jalan_kaki}\n`
ini_txt += `   β°ββββββββββββββββ\n`
reply(ini_txt)
break
case 'wikipedia':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} Tahu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${humankey}&query=${query}`)
get_result = get_result.result
reply(get_result)
break
case 'translate':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Teks Yg Mau Di Translate Mana Tod\nContoh: ${prefix + command} en Tahu Bacem`)
kode_negara = args[0]
args.shift()
ini_txt = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${humankey}&text=${ini_txt}`)
get_result = get_result.result
init_txt = `From : ${get_result.from}\n`
init_txt += `To : ${get_result.to}\n`
init_txt += `Original : ${get_result.original}\n`
init_txt += `Translated : ${get_result.translated}\n`
init_txt += `Pronunciation : ${get_result.pronunciation}\n`
reply(init_txt)
break
case 'jadwaltv':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Channel Nya Mana Tod\nContoh: ${prefix + command} RCTI`)
channel = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
for (var x in get_result) {
ini_txt += `${x} - ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'infogempa':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Lokasi : ${get_result.lokasi}\n`
ini_txt += `Waktu : ${get_result.waktu}\n`
ini_txt += `Potensi : ${get_result.potensi}\n`
ini_txt += `Magnitude : ${get_result.magnitude}\n`
ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
ini_txt += `Koordinat : ${get_result.koordinat}`
get_buffer = await getBuffer(get_result.map)
await simple.sendMessage(from, get_buffer, image, { quoted: ftrol, caption: ini_txt })
break
case 'cuaca':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} Temanggung`)
daerah = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Tempat : ${get_result.tempat}\n`
ini_txt += `Cuaca : ${get_result.cuaca}\n`
ini_txt += `Angin : ${get_result.angin}\n`
ini_txt += `Description : ${get_result.description}\n`
ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
ini_txt += `Suhu : ${get_result.suhu}\n`
ini_txt += `Udara : ${get_result.udara}\n`
ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
await simple.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: ftrol })
reply(ini_txt)
break
case 'covidindo':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break
case 'covidglobal':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break

//βββββββββββββββ[ FITUR SEARCH ]βββββββββββββββββ//

case 'gimage':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${humankey}&query=${query}`)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'wallpapersearch':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${humankey}&query=${query}`)
ini_buffer = await getBuffer(get_result.result)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'playstore':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Aplikasinya Mana Tod\nContoh: ${prefix + command} tiktok`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Play Store Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.title}\n`
ini_txt += `ID : ${x.appId}\n`
ini_txt += `Developer : ${x.developer}\n`
ini_txt += `Link : ${x.url}\n`
ini_txt += `Price : ${x.priceText}\n`
ini_txt += `Price : ${x.price}\n\n`
}
reply(ini_txt)
break
case 'shopee':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Barang Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} sepatu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Shopee Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.name}\n`
ini_txt += `Terjual : ${x.sold}\n`
ini_txt += `Stock : ${x.stock}\n`
ini_txt += `Lokasi : ${x.shop_loc}\n`
ini_txt += `Link : ${x.link_produk}\n\n`
}
reply(ini_txt)
break
case 'google':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Yg Mau Cari Mana Tod\nContoh: ${prefix + command} sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Google Search : \n'
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Desc : ${x.desc}\n\n`
}
reply(ini_txt)
break

//βββββββββββββββ[ FITUR PRIMBON ]βββββββββββββββββ//

case 'artinama':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Namamya Mana Tod\nContoh: ${prefix + command} Z-BOT8`)
ini_nama = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${humankey}&nama=${ini_nama}`)
reply(get_result.result)
break
case 'jodoh':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Zero & Sandrinna`)
ini_nama = args.join(" ").split("&")
nama1 = ini_nama[0].trim()
nama2 = ini_nama[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Negative : ${get_result.negatif}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break
case 'jadian':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Tanggal Jadiannya Mana Tod\nContoh: ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break
case 'tebakumur':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Z-BOT8`)
ini_name = args.join(" ")
if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${humankey}&name=${ini_name}`)
get_result = get_result.result
ini_txt = `Nama : ${get_result.name}\n`
ini_txt += `Umur : ${get_result.age}`
reply(ini_txt)
break

//βββββββββββββββ[ FITUR OWNER ]βββββββββββββββββ//

case 'done':
case 'owner':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
let inilist = []
for (let i of ownerNumber) {
let vname = simple.contacts[i] != undefined ? simple.contacts[i].vname || simple.contacts[i].notify : undefined
inilist.push({
"displayName": 'IBNUGanz',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await simple.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
  {buttonId: '.menu', buttonText: {displayText: 'MENU'}, type: 1},
  {buttonId: '.rulesbot', buttonText: {displayText: 'RULES'}, type: 1}
]
 buttons = {
    contentText: 'Nih Owner Ku Mau Tanya? Jangan Malu-Malu, Save Aja Kalo Boleh :)',
    footerText: faketeks,
    buttons: button,
    headerType: 1
}
await simple.sendMessage(from, buttons, MessageType.buttonsMessage,)
break
case 'bc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('Teksnya?')
anu = await simple.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER'}, type: 1}]
const btnbc = {
contentText: `${q}`,
footerText: '*γ BOT BROADCAST γ*',
buttons: buttonss,
headerType: 1
}
await simple.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: fgif})
}
reply(`Sukses mengirim Broadcast:\n${q}`)
break
case 'report':
const pesan = body.slice(8)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant 
const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
simple.sendMessage(`62815143205943@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break

case 'infobot':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
img =  fs.readFileSync('./poto/promo.jpg')
tod = `
β­βπ₯βBOT INFOβββπ₯ββ?
 |Hai ${pushname} π selamat ${tampilUcapan}
βπNama Bot : ${botname}
βπNama Owner : ${ownername}
βπNomor Owner : ${owner}
βπPrefix :γ Multi Prefix γ
βπRuntime : _*${process.uptime()}*_
β°ββπ₯ββββββπ₯βββ―`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNERαͺ' }, type: 1 }
]
 sendButLocation(from, tod, faketeks, img, but) 
break
case 'setprofile':
				case 'setppbot':
				simple.updatePresence(from, Presence.composing)
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await simple.downloadAndSaveMediaMessage(enmediau)
					await simple.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
					case 'setnamebot':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                simple.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
case 'jaslog':
simple.updatePresence(from, Presence.recording)
url = 'https://telegra.ph/file/2fd99428214122167653d.jpg'
img = await getBuffer(url)
tod = `${logo}`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }, 
{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'SEWABOT' }, type: 1 }, 
]
 sendButImage(from, tod, faketeks, img, but) 
break

//(START) //

//βββββββββββββββ[ FITUR SEWA BOT ]βββββββββββββββββ//

case 'sewabot':

simple.updatePresence(from, Presence.recording)
told =  fs.readFileSync('./poto/bot.mp4')
img =  await getBuffer(told)
tod = `
*JASA SEWA BOT BY : HAIKAL*

δΉ. _List Harga_ :

γ.*1-MINGGU = 3.000*
γ.*2-MINGGU = 5.000*
γ.*1-BULAN = 10.000*
γ.*PER-MANENT = 15.000*

_*MINAT? INGIN SEWA BOT? KLIK LINK DI BAWAH*_

οΈβοΈLink : *http://wa.me/6281229393997?text=BG+MAU+SEWA+BOT*
   `
but = [
{ buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 }, 
{ buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 }, 
{ buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 }, 
]
 sendButVideo(from, tod, faketeks, told, but) 
break

case 'gopay':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER π₯' }, type: 1 }
]
sendButton(from, "GOPAY : 081229393997", faketeks, but, mek)
break
case 'dana':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER π₯' }, type: 1 }
]
sendButton(from, "DANA : 089609927539", faketeks, but, mek)
break
case 'ovo':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER π₯' }, type: 1 }
]
sendButton(from, "OVO : 081229393997", faketeks, but, mek)
break

//βββββββββββββββ[ FITUR CECAN & COGAN ]βββββββββββββββββ//

case 'cecan':
simple.updatePresence(from, Presence.recording)
await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=${humankey}`).then((gambar) => {
simple.sendMessage(from, gambar, image, { quoted: ftrol })
})
break

case 'cogan':
simple.updatePresence(from, Presence.recording)
await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=${humankey}`).then((gambar) => {
simple.sendMessage(from, gambar, image, { quoted: ftrol })
})
break


//βββββββββββββββ[ FITUR SOUND ]βββββββββββββββββ//


case 'sound1':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj1.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj2.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj3.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj4.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj5.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj6.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj7.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj8.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj9.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj10.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj11.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj12.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj13.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj14.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj15.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj16.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj17.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound18':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj18.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj19.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj20.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj21.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj22.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj23.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj24.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj25.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj26.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj27.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj28.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj29.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj30.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break

 case 'pornhub': case 'glitch':  case 'avenger': case 'space': case 'ninjalogo': case 'marvelstudio': case 'lionlogo':case 'wolflogo':case 'steel3d':case 'wallgravity': 
 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
 if (args.length == 0) return reply(`Contoh: ${prefix + command} awok awok`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${humankey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        simple.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Β©LOLHUMAN|IKAL _IMAGE_`, quoted : fgif})
                    })
                    break
                    
                  // Photo Oxy //
          case 'shadow':
           case 'cup':
             case 'cup1':
               case 'romance':
                case 'smoke':
               case 'burnpaper':
              case 'lovemessage':
             case 'undergrass':
              case 'love':
                case 'coffe':
               case 'woodheart':
              case 'woodenboard':
             case 'summer3d':
            case 'wolfmetal':
                case 'nature3d':
               case 'underwater':
              case 'golderrose':
             case 'summernature':
              case 'letterleaves':
               case 'glowingneon':
               case 'fallleaves':
              case 'flamming':
             case 'harrypotter':
            case 'carvedwood':
            simple.updatePresence(from, Presence.recording)
            if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
                    if (args.length == 0) return reply(`Example: ${prefix + command} kamu mah`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${humankey}&text=${ini_txt}`).then((gambar) => {
                        simple.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Β©IKAL IMAGE`, quoted : fgif})
                    })
                    break
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                simple.updatePresence(from, Presence.recording)
 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
                    if (args.length == 0) return reply(`Example: ${prefix + command} kok gitu`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${humankey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        simple.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `π`, quoted : fgif})
                    })
                    break

//>>>>>>>>>>>>>>>>>>{ MAKER EPHOTO }<<<<<<<<<<<<<<<<<<<<<<\\

            case 'wetglass':
             case 'multicolor3d':
              case 'watercolor':
               case 'luxurygold':
                case 'galaxywallpaper':
                 case 'lighttext':
                 case 'beautifulflower':
                case 'puppycute':
               case 'royaltext':
              case 'heartshaped':
             case 'birthdaycake':
              case 'galaxystyle':
               case 'hologram3d':
                case 'greenneon':
                 case 'glossychrome':
                case 'greenbush':
               case 'metallogo':
              case 'noeltext':
             case 'glittergold':
              case 'textcake':
               case 'starsnight':
                case 'wooden3d':
                 case 'textbyname':
                case 'writegalacy':
               case 'galaxybat':
              case 'snow3d':
             case 'birthdayday':
            case 'goldplaybutton':
             case 'silverplaybutton':
               case 'freefire':
               simple.updatePresence(from, Presence.recording)
               if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
                    if (args.length == 0) return reply(`Example: ${prefix + command} ikal image`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${humankey}&text=${ini_txt}`).then((gambar) => {
                        simple.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Β©IKAL IMAGE`, quoted : fgif}) 
                    })
                    break
                    

case 'rulesbot':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
PpUrl = 'https://i.ibb.co/LRjVs97/20211228-175837.jpg'
img = await getBuffer(PpUrl)
tod = `
_*βRULES BOT ${botname}*_

πΌ.DILARANG TLPN/VC BOT

πΌ.DILARANG SPAM BOT
( *DELAY KON*)
πΌ.DILARANG NGEBANDINGIN BOT ( *KENA MENTAL BOT NYA BAPERAN* )
π£.DAH ITU AJA BANG


_*JANGAN LUPA 5 M*_
π£. *MEMAKAI MASKER*
π£. *MENCUCI TANGAN*
π£. *MENJAGA JARAK*
π£. *MENJAUHI KERUMUNAN*
π£. *MEMBATASI MOBILITAS*

_*PATUHI YA AGAR PANDEMI INI CEPAT BERLALU DAN KITA BISA BERAKTIVITAS SEPERTI BIASA LAGI :)*_

#prayforukraina
#prayforpalestina
β`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'π£OWNERπ£' }, type: 1 }, 
{ buttonId: `${prefix}original`, buttonText: { displayText: 'πALLMENUπ' }, type: 1 }, 
]
sendButImage(from, tod, faketeks, img, but)
break


//βββββ THANKS 
//βββββ THAKS

     case 'verify':
const serialUser = createSerial(18)
veri = sender
_registered.push(sender)
fs.writeFileSync('./tempatdata/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
ppUrl = 'https://i.ibb.co/zn4FMbw/20211228-180731.jpg'
img = await getBuffer(ppUrl)
const kimak = 
` Terima Kasih Telah Mendaftarkan
Ke Database ${botname} 
Silahkan Gunakan Bot Dengan Bijak

πγ _VERIFY_ γ πΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝ
π· *Nama :* ${pushname} 
π· *Nomor :* @${sender.split('@')[0]} 
π *Seri:* ${serialUser} 
π *Pengguna:* ${_registered.length}
`
but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: 'π¨MENU' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNERπ' }, type: 1 }
        ]
        sendButImage(from, kimak, "Β© Iΰ½²Bΰ½²Nΰ½²Uΰ½²Zΰ½²1ΰ½²α΄Άα΄Ώ.βΟ | α΄?α΄Όα΅", img, but)
break

case 'donasi':

simple.updatePresence(from, Presence.recording)
Gtau = 'https://i.ibb.co/10SyhTM/20211229-133803.jpg'
img =  await getBuffer(Gtau)
tod = `
β γ‘ *γπ© π΄ π³ π¦ πΈ π?γ*
βγ‘ Gopay : _Klik Button_
βγ‘ Ovo : _Klik Button_
βγ‘ Dana : _Klik Button_
βββββββγ‘  

_*Kalo Udah Donasi Bisa Request Fitur*_
*Ketik. !request [ _*Requestsan nya*_ ]
`
but = [
{ buttonId: `${prefix}gopay2`, buttonText: { displayText: 'γ‘GOPAY' }, type: 1 }, 
{ buttonId: `${prefix}dana2`, buttonText: { displayText: 'γ‘DANA' }, type: 1 }, 
{ buttonId: `${prefix}ovo2`, buttonText: { displayText: 'γ‘OVO' }, type: 1 }, 
]
 sendButImage(from, tod, faketeks, img, but) 
break


case 'gopay2':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = 'https://i.ibb.co/tcjXzFC/20211230-102540.jpg'
img = await getBuffer(anu)
we = `
_*MAU DONASI LEWAT GOPAY BISA SCAN ATAU VIA NOPE DI BAWAH! Boleh banget*_ :)
_DANA : 089609927539_`
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER π₯' }, type: 1 }
]
sendButImage(from, we, faketeks, img, but)
break
case 'dana2':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = 'https://i.ibb.co/Ss1kFHh/9e7c91875eae22c9e12acbc95ec155b4.jpg'
img = await getBuffer(anu)
we = `
_*MAU DONASI LEWAT DANA YA KAK? Boleh banget*_ :)
_DANA : 081229393997_`
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER π₯' }, type: 1 }
]
sendButImage(from, we, faketeks, img, but,)
break
case 'ovo2':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = 'https://i.ibb.co/pLysPHK/11949c7dc7042ff874b635411b5fd1a4.jpg'
img = await getBuffer(anu)
we = `
_*Mau Donasi Lewat Ovo Ya kak*_ Boleh Banget :)
OVO : 081229393997`
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER π₯' }, type: 1 }
]
sendButImage(from, we, faketeks, img, but,)
break


case 'runtime':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
        ptod = "6281337541779@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await simple.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
tescok = `β  _*Runtime : ${runtime(process.uptime())}*_

  γ BAILEYS SELF-BOTγ `
Sendbutdocument(from, tescok, "Β© Z-BOT8*", fs.readFileSync('./poto/menu.pdf'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./poto/image/thumbnaildokumen.jpg'), filename:`Z-BOT8.pdf`, pageCount: 9999999 },[{ buttonId: `${prefix}menu`, buttonText: { displayText: 'SIP,KAKπ' }, type: 1 }], {quoted:fvid, contextInfo: { mentionedJid: [dtod,otod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`${tampilUcapan} - ${pushname}\nDownload Script`,mediaType:"2",thumbnail:ofrply,mediaUrl:`https://youtu.be/WP66OsAf1W0`}}})
break

case 'sc':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
url =  'https://i.ibb.co/jJ0hd8t/20220102-153400.jpg'
foto = await getBuffer(url)
teks = `
πΎSc : *https://github.com/ZV1-nostah*
_Spek Sc_ :
1. *Antilink*
2. *Welcome Button*
3. *Antivirtex*
4. *Sejarah Islam*
_*Dll...*_`
but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU' }, type: 1 },
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: 'RULES' }, type: 1 }
        ]
        sendButImage(from, teks, 'Β©Created : ZV1ζ΅ Bot', foto, but,)
break
case 'tourl':
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await simple.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
            

//-------------------------------< BY : BOT DHANI? / DHANI GANS >----------------------------------------------------------------
case 'sadboy':      
if (args.length < 1) return reply(`*Contoh : ${prefix + command} Nisaa&Bot*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
sadboy = await getBuffer(`https://apidhani.herokuapp.com/api/maker/sadboy?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
simple.sendMessage(from, sadboy, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break

//---------------------------------< HAIKAL >----------------------------------------------------\\


case 'olshop':
simple.updatePresence(from, Presence.recording)
url = 'https://telegra.ph/file/2fd99428214122167653d.jpg'
img = await getBuffer(url)
tod = `_Kenapa Ada Online Shop Di Bot Whatsapp?_

1β’ *Agar Jual Beli Menjadi Mudah*
2β’ *Mempermudah Pelayanan*
3β’ *Tidak Perlu Copy Paste List Anda*

Note : *Gunakan Bot Ini Dengan Bijak*

_Klik "Next" Untuk Melanjutkan_`
but = [
{ buttonId: `${prefix}shop`, buttonText: { displayText: 'CLICK TO CONTINUE π' }, type: 1 }, 
]
 sendButImage(from, tod, ikal2, img, but) 
break


case 'gopay3':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = 'https://i.ibb.co/tcjXzFC/20211230-102540.jpg'
img = await getBuffer(anu)
we = `
_*MAU BAYAR PAKE GOPAY KAK?  Boleh banget*_ :)
_GOPAY NUMBER : 081229393997_`
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER π₯' }, type: 1 }
]
sendButImage(from, we, faketeks, img, but)
break
case 'dana3':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = 'https://i.ibb.co/Ss1kFHh/9e7c91875eae22c9e12acbc95ec155b4.jpg'
img = await getBuffer(anu)
we = `
_*MAU BAYAR PAKE DANA KAK? Boleh banget*_ :)
_DANA NUMBER : 089609927539_`
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER π₯' }, type: 1 }
]
sendButImage(from, we, faketeks, img, but,)
break
case 'ovo3':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = 'https://i.ibb.co/pLysPHK/11949c7dc7042ff874b635411b5fd1a4.jpg'
img = await getBuffer(anu)
we = `
_*MAU BAYAR PAKE OVO KAK?*_ Boleh Banget :)
_OVO NUMBER : 081229393997_`
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER π₯' }, type: 1 }
]
sendButImage(from, we, faketeks, img, but,)
break
//>>>>>>>>>>>>>>>>>>>>[ Akhir Dari FiturΒ² ]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\\
default:
if (isOwner) {
 if (budy.startsWith('>')) {
  console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
	try {
	 let evaled = await eval(budy.slice(2))
	  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
	   reply(`${evaled}`)
		} catch (err) {
		 reply(`${err}`)
		  }
		   } else if (budy.startsWith('x')) {
		  console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
		 try {
	    return simple.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
	   } catch (err) {
	  e = String(err)
	 reply(e)
	}
   }
  }
 }
} catch (e) {
 e = String(e)
  if (!e.includes("this.isZero") && !e.includes("jid")) {
   console.log('Error : %s', color(e, 'red'))
    }
	// console.log(e)
	}
}
