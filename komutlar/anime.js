const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send("Anime öneriliiyor.").then(message => {
    var animeler = [
      "The Seven Deadly Sins",
      "Dororo",
      "Charlotte",
      "Sword Art Online",
      "Tate no Yuusha no Narigari",
      "Zero No Tsukaima",
      "Asura Cryin",
      "NewGame",
      "Darwins Game",
      "Another",
      "Log Horizon",
      "Kokoro Connect",
      "My Hero Academia",
      "Akame ga Kill!",
      "Mirai Nikki",
      "Fairy Tail",
      "HunterxHunter",
      "Kimetsu no Yaiba",
      "chuunibyou demo koi ga shitai",
      "Assassins Pride",
      "ElfenLied",
      "Sakurasou No Pet Na Kanojo",
      "Bunny Girl Senpai",
      "D-Frag",
      "Inu x Bokuss",
      "Kyoukai no Kanata",
      "Chuunibyou demo Koi ga Shita",
      "Saiki Kusuo no Ψ-nan",
      "Tensei Shitara Slime Datta Ken",
      "Tenki No Ko",
      "Assainstation Classroom",
      "Blend-s",
      "Chio-chan no Tsuugakuro",
      "Overlord",
      "Nisekoi",
      "Mondaji Tachi ga Isekai Kara Kuru Sou Desu Yo",
      "Infinite Dendrogram",
      "Hai to Gensou no Grimgar",
      "Shironeko Project Zero Chronicle",
      "ReLIFE",
      "Angel Beats",
      "Hataraku Saibou",
      "Ansatsu Kyoushitsu",
      "Yakusoku no Neverland",
      "Owari no Seraph",
      "Enen no Shouboutai",
      "Inu Yasha",
      "Beastars",
      "Gintama",
      "Kanojo,Okarishimasu",
      "Domesticna Kanojo",
      "Kazeno Stigma",
      "Boku dakega Inai Machi",
      "Kaguya-sama wa Kokurasetai?:Tensai-tachi no Renai Zunousen",
      "Monster Musumeno Iru Nichijou",
      "Himouto!Umaru-chan",
      "Kuzu no Honkai",
      "Kiss x Sis(TV)",
      "Grand Blue",
      "Non Non Biyori",
      "Danna ga Nani wo Itteiruka Wakaranai Ken",
      "Kimi no Nawa.",
      "Shigatsu wa Kimi no Uso",
      "Hataraku Maou-sama!",
      "Yahari Oreno Seishun Love Comedy wa Machigatteiru.",
      "Sakura-souno Pet na Kanojo",
      "Plastic Memories",
      "Rakudai Kishino Cavalry",
      "Toki wo Kakeru Shoujo",
      "No Game No Life",
      "Baka to Test to Shoukanjuu",
      "Kenja No Mago",
      "Youjo Senki.",
      "Hai to Gensou no Grimgar",
      "Re:Zero kara HajimeruI sekai Seikatsu",
      "Isekai no Seikishi Monogatari",
      "Isekai wa Smartphone to Tomoni",
      "Death Marchkara Hajimaru Isekai Kyousoukyoku",
      "Mondaiji-tachi ga Isekai kara Kuru Sou Desu yo?",
      "Hyakuren no Haouto Seiyakuno Valkyria",
      "Tate no Yuusha no Nariagari",
      "Death Parade",
      "Gamers!",
      "Chihayafuru",
      "NewGame!",
      "Net-juunoSusume",
      "QuanzhiGaoshou",
      "Itai nowa Iyananode Bougyoryokuni Kyokufuri Shitaito Omoimasu.",
      "Ryuuouno Oshigoto!",
      "100-man no Inochi no Ueni Orewa Tatteiru",
      "Infinite Dendrogram",
      "Mirai Nikki",
      "Noragami",
      "Aono Exorcist",
      "Kiseijuu:Seino Kakuritsu",
      "KilllaKill",
      "Durarara!!",
      "Kuroshitsuji",
      "Darker than Black:Kurono Keiyakusha",
      "Goblin Slayer",
      "Toaru Majutsuno Index",
      "Katanagatari",
      "Danganronpa:Kibouno Gakuen to Zetsubou no Koukousei TheAnimation",
      "Higurashi no Naku Koroni Kai",
      "Gakkougurashi!",
      "Jigoku Shoujo",
      "Mousou Dairinin",
      "Gantz",
      "ChäoS;HEAd",
      "Great Pretender",
      "Mononoke",
      "Id:Invaded",
      "Tasogare Otomex Amnesia",
      "Ousama Game The Animation",
      "Zetman",
      "Gakkou no Kaidan",
      "Gibiate",
      "Sekai no Yami Zukan",
      "Yami Shibai 5",
      "Tomie",
      "Ao Oni The Animation",
      "Hitsuji no Uta",
      "Hyouka",
      "Madein Abyss",
      "Suzumiya Haruhi no Yuuutsu",
      "Monster",
      "Nisemonogatari",
      "K",
      "Rokka no Yuusha",
      "Zetsuen no Tempest",
      "Shiki",
      "Higashi no Eden",
      "Kono Subarashi iSekai ni Shukufukuwo!",
      "Chuunibyou demo Koi ga Shitai!",
      "Samurai Champloo",
      "Clannad",
      "Nisekoi",
      "K-On!",
      "Kobayashi-san Chino Maid Dragon",
      "Golden Time",
      "Gekkan Shoujo Nozaki-kun",
      "Nichijou",
      "Sento Chihiro no Kamikakushi",
      "Another",
      "Fate/Zero",
      "Kyoukai no Kanata",
      "Mahouka Koukou no Rettousei",
      "Higurashi no NakuKoroni",
      "Shinsekaiyori",
      "Mushishi",
      "Trinity Seven",
      "Gakusen Toshi Asterisk"
    ];
    var anime = animeler[Math.floor(Math.random() * animeler.length)];
    message.edit(`${anime}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["iyi1anime", "animeöner", "animeoner", "anime"],
  permLevel: 0
};

exports.help = {
  name: "anime",
  description: "anime önerir.",
  usage: "anime"
};
