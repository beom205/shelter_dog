(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('绥中县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"211421","properties":{"name":"绥中县","cp":[120.344311,40.32558],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AF@@@@A@@@@@@@BB@@@@@@@@@@@BA@ADADAD@@A@@@@@A@A@@@@@@@A@@@@BB@A@@@@@@@@@@B@@@@@@@@@B@@@@B@@@@@B@@@@@@@@BAB@@@@@@@@A@@B@@@@A@@@@@A@@@@@@BA@A@@@@@A@A@@@@B@@B@@@@@@@@@@B@@@@@BB@@B@@@@@@@@@@@@@@@B@@@B@@B@@@@@@@@@@@B@@@@@@@@B@@B@@@@BB@@@@@@B@@@@@@BB@@@@@@@B@@B@@B@@B@@@@@@@@@@@B@@@@B@@@@@B@@B@@@@@@B@@@@A@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@B@@@BB@@@@@@B@@B@@@@@@@B@A@@B@@@@@@@B@@@@@@@@@B@@A@@@@@@@@@@@@B@@ABHFDB@B@@@@@@@BA@@@A@@@AB@@A@@@A@@BA@@@ABA@A@A@@BA@@BAB@@@@@@A@@B@@A@@BA@@BA@@@@BABAB@BA@@@@BB@@@@@A@@@@B@@@@@@B@@@@@@@@B@@@@@@A@@B@@@@@@A@A@CAA@A@@@@AC@@@@BA@@A@@A@@@@@A@@@@A@@A@@@@B@@A@@BA@@@A@@@@@@@AB@@AB@@A@@BAB@@@@@A@A@@@ABA@@@@A@@@@BA@@@AB@@AA@@@@@@AA@@@@@@@@A@@AAA@A@AA@A@A@@@A@@@@@@@@A@@@@B@GCC@@@@B@@@@@@@@A@@@A@@@@@@AA@@@@@A@@@@@BA@@EAA@@@@B@@AB@@@@@@@@@@@@@@@@@A@@@@A@@@@@@@A@@@@@A@@B@@@@@@A@@@A@@@@@A@AA@@@@A@@@@@@@BB@@@B@@@@A@@@@BA@@BA@@@AB@@@B@@A@@@@AB@@@A@@@@@@AA@@@@B@@@@@@@@@@@@A@@@@@A@@@@@BB@@@@@@@@@@@@@@BBB@@@@@@@@@A@@@@@A@@@@@@@@@@@A@@B@@@@@@@@A@@@@@A@@B@@C@@@A@A@A@AA@@AAAD@B@@ADA@@@A@@@A@A@@@@B@@B@BB@@@@B@B@@B@B@BABA@CDC@ABAD@BAB@@BDBDDDBF@DLHBB@BG@EDEBEDEDSNEFGDCDADBDFHB@FFJNFFDFDDADBDBDFDDD@D@JADCFCDCBBFBD@DADAFCFAF@LAL@LADAHCJAN@BABMA@@A@AAAA@A@A@@AA@AA@@A@@@BA@@@AB@@AB@@@@@B@B@@@B@@@@@@K@KA@@@@@@@AB@@@@A@@@@@A@@@@BA@@@@@A@@AAA@@AAAA@@A@@A@A@@@ABA@ABA@@BA@@B@@@@A@AB@@@@@B@@@@@BA@@@@B@@AB@@@@ABIDIBGFMLQN@B@@@@@@@B@@B@@BB@@B@@@BA@@B@@A@@B@B@@@BA@@B@B@@AB@B@@AB@@AB@@AB@@@@A@@@@@A@C@A@@AA@@@A@@@A@@AA@@A@@A@@@A@@@@A@@@@A@A@@AA@@@A@@@@@A@@@@A@AA@@A@@A@@@@@A@A@A@AA@@AAAAA@@@A@@@A@A@@BA@@@A@A@AA@B@@A@@@@@@B@B@@@@@@AA@@AAA@@@AA@@@@@A@@A@@@A@@@@@@AA@@A@@@@@A@A@@@@EAE@ABABAD@@B@BBB@@@@B@@@BBB@B@@B@@B@@BB@@@@@B@@@B@@@@@BB@@B@@@B@@@B@B@B@@@B@@@BB@@BB@@DBB@B@B@@B@@@B@B@@@B@@BBB@@BB@@@BA@@@@@AB@@@B@BB@@@@@B@BB@@B@@BB@@BB@@@B@@@@B@@@B@@ABAB@@@B@@@@@B@@BBB@B@@@BBB@@B@@@@BB@@BBB@@@BB@@BB@@@@@B@@AB@BA@AB@@@@@BA@@@@@@@@B@@@@@B@@AD@B@D@@@B@@@@@B@@@BA@@@ABA@@@@BA@@B@@@B@@A@@B@@A@A@A@@@A@@BA@A@@BA@AB@@A@A@@BA@A@A@@@@BA@@B@@@@@@@@@BB@@@@BA@@@@B@@C@A@@@A@@@A@@BA@ADAHAFGPEFCFGFIFCDCFAD@F@H@DDJBF@HEFEFGJEJAFDNDHBNHNJN@J@FEFAH@DAFJDD@J@NBP@N@HAB@V@P@Z@L@P@JBL@F@RDPBL@J@FALCJGJMNMFAJEP@T@VDFBHD@@XPRHHBFBD@fDfALBJFNF^VPRDFDP@DDZBPHPJPPZJHFDVDN@NBFBDFHHJJTFPDP@RCFAFCD@XLPHTLTLNBRCV@VHJHBJCHCFEFADIJGJEHENBHFHHFNFLDP@F@B@@BB@B@B@B@B@@@B@@ADA@@@@BA@@AABC@@BAB@@AB@@A@A@@B@@C@@@E@CBA@AB@B@D@B@D@PDDBD@D@DAFADCDAFEHEDEDEDGBEDCBCB@BABAD@@A@@@@@AA@@AAA@A@ABCDGBCDCBCDAB@B@B@B@B@BBDBDFDDBFB@BBB@D@HBD@H@DBB@BBB@BBBDB@B@B@B@BABADGFEBC@@@A@AA@AAICGCGECCCCAEAC@E@IDGFI@@FGFAJARCLAB@J@DABADC@CDCBAHCLETKJEFEDA@A@CACAAIGACAC@EBCBCDAHAFA@A@@BABEBIBKBEBC@EAE@ACG@C@CBABCDAVEHAPEJCRIPIBCDC@GCKAE@C@E@ADCFGBIBGBCBADADADA@CDKBEFETPRJHDHBJ@NCHCDCJAD@LBLBbE@EMOCIAC@KEACAIAEBACCABCBCLCN@FADEFGFEHALAB@L@HBD@FCHCDCDEHIB@A@BCBC@EDCDCDEBGBEDAHADAFADEDADCFADAJ@FDHHDDZFTBBS@QAKMCKKCICQGICKG[KSCEMOQMQG]CwDK@gBGAQA[GaICgcQYaIQiGEAwkUA]DUBKB_GQYGIAcGMCUAcCQCQECACACCCCEKAIAG@I@KAE@CEGGGKIMIGEIAKAM@I@I@mDG@I@IAA@"],"encodeOffsets":[[122731,40949]]}}],"UTF8Encoding":true});}));