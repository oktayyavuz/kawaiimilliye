exports.run = async (client, msg, args) => {
  let kufur = [
    "",
    "amına kodumun jedayı seni",
    "ebenin amı gibi kaşları da kara",
    "seni amında olimpiyat meşalesi yakıp 10 km kostuğumun yavşağı ",
    "senin amına mancınıkla patates atayım",
    "senin dalağını öyle bi sikerim ki ömür boyu hıçkırırsın",
    "amına bilardo topuyla rövaşata çekerim am dolması yarrak kafalı çin orospusu seni amına kodumun çin aslanı bilyesini gibtiğimin am düdüğü",
    "senin amını düdüklü tencerenin arasına alıp öttüre öttüre sikerim ulan ben",
    "amını keserim cebime koyarım sıkıldıkça sikerim",
    "amına sınav yapar 2 milyon kişiyi sokarım",
    "amına barut döker sürtünmeyle yakarım orospu evladı",
    "seni bi sikerim bluetooh un hata verir kapsama alanın genişler.",
    "o tuşlara basan ufacık parmaklarının arasına sokar felç edene kadar siker o felç olan parmaklarını kesip organ mafyasına satarım elde ettigim gelirin bi kısmını görme engelliler vakfına bağışlar kalan kısmıda çarçur eder babanın delirmesini sağlar ocağına incir ağacı diker ağacın gölgesinde ebeni dallı budaklı sikerim senin",
    "küfür etmek günah olum sen ne yaptıysan artık sana kızmış birisi affettir kendini beni de günaha sokçak orospu kertenkelesi",
    "küfür ederdim ama sikmek çok yordu",
    "öyle yan durup şekilli mekilli tişört giyme seni götünden siker Erol Taş gibi kiraz ağacından kamçı yapar döverim",
    "seni öyle bir sikerim ki einstein izafiyet teorsini kanitlarim amina kodumun evladi seni karadelige sokar uzay-zamanda paradoksunda sonsuza kadar sikerim seni oyle bir sikerim ki annenin fırına koydugu patates yemeği yanar amına kodumun derbeder piç evladı seni varya alırım boyle balyoz niyetine sağa sola heryere vura vura derbeder ederim amina kodumun yıkık piçi senin sevgilini bulurum boyle instadan yazar gozunun onunde sikerim amina kodumun çelimsiz pezevengi o parmaklarini alir tek tek gotune sokarim cifte telli oynarsin ammmmmmmmmmina kodumun dalyarragi sana bir sokarim migdendikeler kulagindan gelir amcık çorbası seni , seni yerçekimi kanunundan bagimsiz şekilde sikerek havalandırırım amına kodumun guguklu saati"
  ];
  let member = msg.mentions.members.first();
  if (!member)
    return msg.channel.send({
      embed: {
        color: Math.floor(Math.random() * (0xffffff + 1)),
        description:
          ":no_entry_sign: Ya geçerli birini etiketle ya da sana sövmemi istiyosan kendini etiketle."
      }
    });
  if (member.id === "366465850464796672")
    return msg.channel.send({
      embed: {
        colifor: Math.floor(Math.random() * (0xffffff + 1)),
        description:
          ":no_entry_sign: Ağzına sıçtığım sen kimsinde Oktaya söversin!"
      }
    });
  if (member.id === "792756851715735573")
    return msg.channel.send({
      embed: {
        colifor: Math.floor(Math.random() * (0xffffff + 1)),
        description: ":no_entry_sign: Cemreye sövemezsn o milyarder cnm"
      }
    });
  if (member.id === "749010473545891892")
    return msg.channel.send({
      embed: {
        color: Math.floor(Math.random() * (0xffffff + 1)),
        description: `${member}'ANNENİN AMİNDAKİ DERİNLİKLERDE DEFİNE ARIYORUM YANİ DEFİNE DERKEN ALTİN DEGİL CONDOM KAÇMIŞ MI DİYE ARIYORUM DE ALİCAKSİN BUNLARİ BU TOPLARİ FUTBOL OYNAYACAKSİN DİCEM DE BUNLAR ONA BİLE LAYIK DEGİL AMK İBNELETİ BİDE BABAM ANAM BANA İBNE DİYOR SİKERİM BEN BOYLE İSİ SİKTİMİN EVLAVLARİ SİKİK OROSPUCOCUKLARİ SENİN GİBİ BİR OROSPUCOCUGU TANİDİGİM İCİN KENDİMDEN UTANİYORUM LUTFEN BENİ MAHSUS GOR YANLİS ANLAMA AMA COK BÜYÜK BİR YAVSAKSİN BASKA KIZLARI BOYNUZLAYAMİCAKSİN ARTK BUTUN BUNDAN SONRA OLUCAK SEVGİLİLERİNE GİDİP DİCEM BU COCUK ŞEREFSİZ DİCEM O BOYNUZLARİDA AL DÜRBUT GOTUNE SOK AMK COCU'`
      }
    });
  if (member.id === client.user.id) {
    msg.channel.send({
      embed: {
        color: Math.floor(Math.random() * (0xffffff + 1)),
        description: `:no_entry_sign: Siktir duygusuz pezeveng bide bana sövecek!!`
      }
    });
  } else {
    msg.channel.send({
      embed: {
        color: Math.floor(Math.random() * (0xffffff + 1)),
        description: `${member} ${kufur[Math.floor(Math.random() * 16)]}.`
      }
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "söv",
  description: "Birine Söver.",
  usage: "söv"
};
