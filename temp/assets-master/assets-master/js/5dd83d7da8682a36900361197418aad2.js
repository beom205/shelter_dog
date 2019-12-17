(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('微山县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"370826","properties":{"name":"微山县","cp":[117.128827,34.806554],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AF@FAD@FCH@BCLGVELENEHCL@BAH@JANCNEFCDENABA@GCA@ABCH_@C@GAC@KGGCCEEAEAE@EDCF@@ILCLCH@HDPCF@F@DDDBDBJFHFHDBHDVJ@HA@ABINA@@BBBBD@@@BA@ABA@IBEBEB@@AB@@CDAD@FBX@@@BABCHAD@@ABABA@G@EBA@ABABAD@DBHDH@D@BADCBCB@BCDADABA@ABEBCBCBMFIFEDGHCDABE@A@A@ECCAA@AAILABCFIRGRAFERADELOCADAL@BBH@D@H@DBH@D@@B@@BBB@@@@BBB@F@B@@@B@@B@@@@@B@@@@@BA@@@@@@@@@@@C@@@@@A@A@C@A@@@A@@@@DAD@BGBC@E@K@C@I@A@CBEBEBCBCBCBEFCDENA@aPMFSFMFC@CBA@ABOJEDEHCFABCBA@IBCAG@A@UBY@@@C`GjABCFEBIFOHODGBUFKBGFKFEFCFSP@Bc^GFMHKFKHA@GFGDWPCB@@GDEDCJ]FGBIFKDA@CBABAD@DBL@BANEFDHAHERCHCJABMFAFCDGHCBAB@BABAB@BAB@BA@@B@@@BAB@B@BA@@B@B@@@BAB@@@B@B@B@BAB@B@@@@@B@B@B@BA@@B@B@B@BAB@B@@@BAB@B@B@B@@@@ADABAB@BAFCNAJ@@ABAJ@DADAB@DAD@DAF@B@DBJBLD^@DAFABEDGHCDGHEH@@CH@F@B@FHXBB@F@F@HAJ@D@HADXBP@N@ZD\\FBQAB@G@A@ABAPILEbMDAB@@AFEBCDKDADCJCHGB@FFHJ@F@@@F@@BBD@F@BBDDFDDDFD@@B@@@DDF@BDDB@FB@@BBA@@@A@ABABA@@@@BBBB@B@B@BB@B@BB@B@DAB@B@B@B@D@D@DBBDBD@D@F@DBBB@D@D@@@FBDFF@@DDBBBBBB@@@BAFCD@BADBDDDD@@@DAB@D@D@B@B@B@D@@@B@B@@@@@B@BAD@BAD@B@BAB@D@B@BAD@BAAA@A@AAA@A@CAA@A@AAA@A@C@A@@@@AA@ABC@AB@B@DAB@B@B@BAD@DC@ABA@AB@@A@@D@B@B@D@BBB@B@B@B@D@D@D@AE@A@C@@@@AE@C@@@@@AAC@A@AACAAAAAA@AAA@@ACAAAACCAA@AA@ACACB@@AD@DABA@@BADADABA@@EAMG@@@@A@GEECOIKGAEEK@EDAD@D@FAB@DADCBCDCBA@AFGBCBCDA@ABA@ABCACCCACAAAACACCCCCCCECE@E@C@A@G@@@GDI@@BABCB@FCFEBABADADAD@FBDBF@B@F@@@FBFDFBFDDCBIBABA@@DADAD@DABC@K@ABCBC@EBCBE@C@@BABAHCDE@C@CDEROLKPMT@VDHDFA@IDEGAHOBBDGBBBAHKMCEACAEAKABIND@@F@BCRD@C@CBADE@@@BBBBCBGBABADADADCFAJEFCDCDADCFCFCDC@AB@B@B@@AFC@CB@@E@@@AB@@BF@@AB@@CBAD@@A@IC@@AD@@CB@@CD@AI@@@@AC@@@CCC@A@AAACCCECCCEAEDG@ADABCC@BGBCN@D@F@BABCBABEDCDEBAJG@@@K@@AE@A@AD@@CTB@@BDHB@D@@B@B@F@J@FBLBFBB@B@LBJAH@DAF@FAFCB@@ED@@CF@@A@AA@@EA@@A@@@CD@NBHB@AD@@BD@@BD@BB@BF@@AD@@AD@@CH@@AD@@@@FB@@AB@HJFB@DH@@DD@F@@CRB@BDBDAAAD@@GD@@C@@@@@CD@@I@@BEB@@A@C@CE@@A@@B@AE@@@AB@@AB@@IPD@AFCBC@MBEBE@E@C@CBC@A@G@C@AB@@C@A@A@A@A@E@@BEBCFADAB@B@D@FAB@B@DAAC@@A@C@@@@AA@@@A@@A@BACFA@@@CBADA@@HEBADABAJEDCFA@@JCHAJA@@HAHGRCAE@@@@FABADCAAAA@CCC@@GIMICAA@I@Q]AER@JEDHDDJALC@AB@LIDEB@DC@C@AD@D@@ADABA@CBAB@BA@@B@@A@@@A@ABAHEB@FE@GBABAHDDBD@FADABG@AAEBAB@D@BC@KNEBADA@@BABEDBNDDBB@B@JBH@BA@C@ACA@AH@@@DD@BFABAACA@CAAA@CB@J@F@D@L@B@FFD@FEB@D@HD@@FAHEDA@ABCFEDCBACK@@@@@@BB@@@A@@@ABFD@@@DA@DB@BCDAFEDC@@AA@@@@AA@A@@@AA@B@A@AA@@@@@@@@@AGOCC@AJC@A@@LALAFEFEBADCBAB@@EEE@A@@@AFCL@DADADEBC@CBE@@BABA@@@@BCDGBO@A@ANB@B@@BHB@D@L@P@D@@EBC@@B@@@B@J@@A@AAIAAAA@A@E@@EAC@@AACGE@@@A@G@C@A@C@@@@BKIAGAKAOCA@@@AB@@A@A@@@A@A@ABEBGF@@A@@A@@@@@@B@@AB@@@@A@@@@A@@A@@AACAA@@@AA@@@@A@CB@@A@@@ABA@A@@@A@@A@@@@@@@@@AA@A@@@A@A@@@A@@@A@@AA@@A@@@@@A@@AA@@AA@AA@@AA@CA@@CAAAA@A@@AA@@B@@@@@@@B@@@@@@@@AB@@A@@A@@@@@@@@@@@A@@@@@@@A@@AB@@B@@@A@@@@B@@A@@@A@@A@@A@@@A@@@@B@@@@@@@@@B@@@@A@@@@@@A@@@@@@@@A@@@@@@B@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@A@@@AA@@@@@@A@@A@@@A@@@@@@@@@@@A@@@@A@@@@@@@@A@@@@@@B@A@@A@@B@@@B@@@@@@@@@@@A@@AB@@@@@@@@@@A@@B@B@@@@@@@B@@@@@@@@@@@@@B@@B@@A@@@B@@@@@BA@B@@@@@@@@B@B@@B@@@@B@@@@B@@@D@@@@@@@@@@BAB@B@@AB@@@B@@A@@DE@ABA@AAAA@A@@AAA@@@A@AA@A@@@A@@@@A@@A@@@ABABABEDCB@@@@AAA@@AABA@@@@A@@@@@@@@@@AA@@@@A@@@@@@@@A@@@A@A@@@A@@@@A@@@@@A@@@@@@A@@@@@@@A@@@@@A@@@@@AA@@@@@@@@@@@A@@@@@@BB@@@@@A@@B@@@@@BB@@@@B@@@@@B@@@@A@@@@@@@@@@@@@@BA@@@A@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@AB@@@@@@@@A@@@@B@@AA@@@@@@@A@@@@@@A@@@@@@@@AA@@@AAA@@@@@@@AA@@@@@@@@AA@@@@A@@B@@@@@@@@@A@@@@@@@A@@@AB@@AB@@@B@B@BA@@B@B@B@@@@@@@B@@@@A@@@@AA@@@@AA@@@AB@@ABA@@@@@A@@@AA@@@@@@@C@@A@@A@@@@A@@A@A@@@@@@@AA@A@@@@CAA@GCCA@@A@AA@@A@@@AB@@@@A@A@@@A@A@AA@@A@AA@@@@A@@A@BA@@@@BA@ABA@A@@@A@@@CA@@@@@@AC@A@@@A@@@@@@BA@@B@B@B@@@@@B@@BB@@A@@@@@@@@AA@@@@AC@@@ABA@@@@@@BAB@BA@@BA@@@@@@AA@@@@@@A@@AC@@@@@AC@@@A@@@@@A@ABA@@@@@@@@KB@@@@@A@@LAF@@@@A@@@@@AA@@@@A@@@A@CBAAAAA@A@@@A@A@@@@@@@@A@CAA@ABAB@@A@@BA@A@A@@@AAA@@AAAAA@@@@@A@@B@@A@@@@@A@@@A@@@ABABA@A@@@@@A@@@A@@BABC@@@@BABA@@BC@A@@@A@A@@@C@@@AA@@AAACACAA@AA@@AC@@@A@@@A@@@@@@B@@@@A@@@@@@@@B@@@@@@EAA@A@CAA@@@@@@@@AA@A@@AA@A@@AACCCAICAAA@@@CAA@ABAB@@@DABADCBABC@CAA@CBCAAA@AAA@@C@@@@ABA@CAACA]EEAA@AB@@@@DHHRBDDFBBHDNLBBDFB@AB@@@@EGAAOI@A@BGH@@@@A@HG@A@@CCA@EDKDEB@@@AA@MB@@A@@@FRBF@@GBA@A@AGAE@@A@AA@@AAA@@@@BA@G@@@@B@BAD@B@BAHAD@B@@A@@DTJ@@@@@@AB@@CJ@@@B@@@@AD@@AF@B@BAD@BABC@IAMAGAA@ABAJAFAB@H@H@D@DAJ@FAL@BFLBBB@L@@@B@@L@D"],"encodeOffsets":[[119974,35385]]}}],"UTF8Encoding":true});}));