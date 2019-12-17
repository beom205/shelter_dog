(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('阜康市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"652302","properties":{"name":"阜康市","cp":[87.952991,44.164402],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@@AAA@CACAECC@@ACA@@CAA@CCC@CAC@@BA@AD@B@B@DBD@BABA@A@ABA@A@AD@F@BBBBB@@BBBB@HCFEDMFEBEBCBCDABEBC@E@AAAACGEGEGCCAAA@A@A@A@CDCDA@C@C@A@A@AAAEAABEAC@ACAAABCBAFA@AFEFGBCBE@CCACCCCAACCACAAECCACA@AA@AA@@ACCCCCABABCBA@CACBE@GBABA@C@C@A@A@A@@C@E@C@EECEBCBABCDCDCBC@EBE@GBGBEBEBCDC@A@AAAAAA@CBEBC@CEAG@GBIBIA@@A@A@CAEAAAC@BLBH@B@@DB@@@BBB@@BB@B@B@@@BAB@@@B@@AB@@BB@@@@@@@B@@BB@@@F@@@@ABA@AB@@@@@@@B@@AB@@B@@BA@@@@@@@@B@@AB@@BBA@@@BD@B@@A@@B@BAB@B@B@@AD@B@BAB@BAB@D@BAD@BAB@B@D@B@@A@ABA@A@A@CBA@A@A@@@A@@@@B@@A@@@@@@@ABA@@@@@@@A@@@AA@@A@@@@@AB@@@@A@@@ABABA@A@AAA@AAC@@A@AAAA@A@C@A@CA@A@@@A@A@@@AA@@@C@C@A@A@AB@@A@@B@BA@@B@B@@@@AB@@@@A@AB@@@@A@@@A@A@A@AB@@@@@@@@@@@@@@@B@@@@A@@@@B@@AB@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@@@@@@@@@@@@AB@@@@A@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@@@@@B@@@@A@@@@@@@A@@@@@@@@B@@@@@@@@B@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@A@@@@B@@@@@@@@@@A@ABAB@@AB@@@@@B@@@@@B@@@B@B@B@@@B@@@B@D@@@B@@@@@@@BAB@AA@@@A@@@@B@B@@@@A@AB@@A@@@@@@B@@@BA@@@A@A@A@@BA@@@ABA@@@A@ABA@AA@@A@A@A@A@A@A@@@A@@@A@AB@@C@ABA@ABA@@BA@@@@B@@@BA@AB@@A@CB@BA@@BAB@@AB@@A@A@@@@@ABA@@@A@ABA@@@@@@@@B@@@@ABAB@@ABA@CB@@A@@@@B@@@B@B@@@@@B@@B@@@@BA@@@@@@B@@@B@@@B@B@@@@@@ABA@@B@@@@AB@@@BABA@@@@B@@@BA@@B@@@B@@@BBD@B@B@B@B@@BBDBBB@@BB@BB@DBFBB@@B@B@DAB@@CBAB@@@BAB@@AB@@@B@@@BB@@B@@@B@BAB@@@B@@AB@B@@AB@@@@@B@@@B@@AB@@@B@B@@@B@B@B@@@B@@B@@@BBB@@@@@BB@@@@@BA@@@@@A@@B@@AB@B@@A@@B@@@@@@AB@@@@@@AB@B@@@@@@@@@B@@@@@@@B@@@@A@@@@B@BA@AD@BA@@B@@@@A@@B@@A@@@@B@@@@A@AB@@AB@@@BA@@@@@@@A@@B@@@@B@@@AB@@@B@@AB@@@@@B@@@@@@@@@B@@@@A@@@@@A@@B@@A@@B@@@@@@@B@@@@@B@@@B@B@@AB@@ABABA@@@@@@B@@@@AB@@@B@@@BB@AB@@@@@@@B@@@B@@@@A@@@@B@@@@@@@@@@@B@@@@@B@@@@@@@B@@@BAB@@@B@@@@@BB@@@@B@@@BB@@@@B@@@B@@BB@@BB@@@@@B@@@@@B@@@@@B@@@@@B@@@BA@@@@@AB@@@@@B@@ABABA@AB@@@@@B@@@@@@@B@@@@AB@@@@@@@@AB@@@@@@A@@@A@@@@@@BA@@@@@A@@BA@A@ABA@CBCBA@ABA@@@@@A@A@@@A@@@A@@@@@@@A@@A@@A@@@@@A@@@A@@@A@@@@@A@@AA@A@A@@@@@@@A@@@@@@@A@@@A@@@A@@@AB@@@@@@@B@@@@@@@@ABA@@@@@@@A@@@A@@@A@@@@@@@AB@@@@@@@@@@A@@@@B@@@@@@A@@@@@@@@B@@@@@@@@A@@@@@@@@@AB@@@@@@@@A@@@@@@@@BA@@@@@@@@@@@@@@@A@AB@@@@@@A@@@@B@@@@A@@@@B@@A@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@A@@@@@@B@@A@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@A@@@A@ABA@@@@@A@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@A@@B@@@@@@A@@@@@@BA@@@@@@@@@@@@@A@@@@@@B@@A@@@AB@@@@@@@@@@A@@@@@@@@@AB@@@@@@AB@@@@A@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@A@@B@@@@@@@@A@@@@@@@@@AB@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@A@@B@@@@@@@@@@@@A@@@@@@@@@@BA@@@@@@@@@@@@@A@@@@B@@@@A@@@@@@@@@@BA@@@@@@@A@@@@@@@@BA@@B@@A@ABA@@@AB@@A@@@@BA@@@@@A@@B@@A@@@@@@@@@A@@B@@A@@@@@A@@B@@@@@@A@@B@@A@@@A@@BA@@@@@@@AB@@AB@@@@A@@@@BA@@@@@A@@@@@@@AB@@@@A@@@@@@B@@@@A@@@@@@B@@A@@@@@A@@@AB@@@@A@@BA@@@@@@@@@A@@B@@@@A@@@@@@@AB@@@@@@@@A@@@@@@BA@@@@@@@A@@@ABA@@@AB@@@@@@@@A@@@A@@B@@@@@@@@A@@@@B@@@B@@@@@B@@@@AB@@@BA@@@@@@@@B@@@@@@BB@@@@@@@B@@@B@@@@A@@B@@@@@@AB@D@@@@AB@@@@@@A@@B@@A@@B@@@@@B@@@@@B@@@B@@@BBB@@@@@B@@@B@@@@@@AB@@@@@@@B@@@B@@@B@@@B@@@@@B@@@@B@@B@@A@@@@@@B@@@@@B@@@B@@@@AB@@@@@B@@@@AB@@@@@B@@@@@@@@A@@@A@@@A@@B@@A@@@@@@B@@@@A@@B@@A@@@@@@@A@@BA@@@A@@AA@A@@@@BA@@@@@A@@@A@A@@@A@@@A@C@A@@@A@@@A@@@@@AB@@@@@@A@@B@@A@@@@@@BA@@@@@@BA@@B@@A@@B@@A@@@@B@@@@@@@BA@@@@@@B@@@@@B@@A@@B@@@@AB@@AB@B@@@@@B@@@B@@@@@@@B@@@@@@AB@@B@AB@@@@@B@@E@AAG@C@GAC@C@EAA@A@E@AAC@C@C@EAA@A@C@C@CAE@E@C@@@BDDJHRFPHRFNHTBD@@@@BFFPFNFNHRFNBDFPFN@FAT@T@TAT@TAXCHCJGNGPEJGPEJ@HBB@@@B@B@J@B@B@D@H@F@H@H@B@B@BJTDLTzR~\\NpJZXVRzXLjFP^ VRzVLhJ`ZZT`׼@@O@[@¿@m@@[@¥@[@S@{@g@o@e@uAq@ĉBA@e@_@W@EB¥@@OKKGGECACCAAGCCAIECC@@B@@A@@@A@@B@@A@@@A@ABA@AB@@A@@@A@ABA@@@ADA@@BABABABABAB@BA@ABA@AB@AABCBA@@BADABABA@@@A@@BA@AB@@A@@@AB@BABAD@B@BA@A@@BAB@@A@ABA@@BA@A@@@@BC@@@C@@@A@@@AAA@@@A@@@A@@@@@AA@@@BC@A@AB@@A@@@@@A@A@A@@@@AA@@@A@@@A@@@@BAA@@@@@@A@@BA@@@AB@@@@@@A@@@@BA@AB@@A@A@G@@@@BADA@@BA@@BABA@@BABC@@BA@@BA@@@A@@B@@A@@@AB@@A@@@@@A@@@A@@@A@@DAB@@A@@B@@AB@@A@@@A@@@A@@BA@@A@@A@@BA@@@AAABC@@@@@@@A@@@@@ABA@@AA@A@@AAAA@AA@@A@A@@@A@A@@BA@A@@AA@@B@@A@@B@@A@@BA@A@@@ABA@@@@@A@A@@@A@@@A@@@A@@AA@CA@@@@@A@AAAAA@@@AA@@@A@@@A@@@@@A@A@A@@@@@@@A@@A@BAA@@A@@BAAA@@@AB@@@A@@A@@@@@AB@A@B@@@AA@A@@@A@@AA@@@@AA@@@AA@@A@@AA@@@A@@@@@AA@B@AAAA@@@@@@AA@A@A@@@A@@@@BA@@@@AAB@@@@@@@@A@@A@@A@@@AAA@A@@@@@AA@@A@AA@@A@@@AA@@@@A@@A@@CA@@@@A@@@@AA@@@AAAAAAA@@@@AA@@BA@@AA@@@A@ABA@A@A@CAA@@@@@AA@@A@AB@@ABC@@B@@@AA@C@@@AAA@@AAAC@@@ABA@@AA@@BA@C@A@@@ABC@@@A@A@A@@@@@ABE@ABA@@@AB@@@@A@@@A@@@A@AB@AABA@@@A@A@A@@@A@@@@BA@A@@DC@A@A@@BAAABA@A@A@@BA@@@A@@B@@@@A@AB@BCB@@AB@@A@@@A@@BA@A@A@ABCCE@@B@@AA@@@BA@@A@A@@AB@@@AA@@@A@A@@A@AA@A@A@A@@@A@AA@@A@@A@@AA@@@@@@A@@A@A@@@AA@@CA@@@AA@@@A@@AAA@@@@AA@@@@BA@A@@AAA@@AA@@@CA@@@@CA@@AA@@A@AC@A@A@A@A@@B@@A@@A@@A@@@@@@@A@@@A@@@@@A@@@@@AA@@A@@@@@A@@@@A@@@@A@@@A@@BA@@@@@A@@@@B@BAA@@@@@@@BA@@B@B@@@BA@@@AB@@@@@AA@@B@@@BA@@@@@A@@@@@@@A@@@@@A@@AA@@@@CAAACC@CAEAAEGAA@@@A@A@EA@A@C@@BAA@CAE@AEACAACAAA@AEACAE@EAAEAACAA@@AC@E@ABC@ABA@@@@@A@@@@A@AAA@A@@@BAB@@A@@@ACA@A@AB@B@BABAB@BABC@A@@@A@@EAAA@@AAAAGCAAA@A@A@@AA@@AAA@E@@CCCA@@AAABCAA@AACCEEAAA@@AE@C@AAECA@CEAC@AAAA@A@G@AAA@ACCCCAAAACAAEEA@AACAC@CACCA@AAC@G@C@UCKGMEA@C@A@C@@@AA@@AAKCA@C@E@A@A@@@AA@@@A@A@@AAEAAAC@A@A@C@C@C@@@CBCBA@@@ABABABC@CAA@GCEEEAGA@@CA@@A@@AA@AA@@AAA@E@GEKECEAEAG@@ACCACCCC@@@AAA@A@AAE@A@CAC@AA@AACECAAAA@CAAACAAAC@@@AAA@A@@@A@AAA@A@A@G@C@CBC@CBCBCBA@@BAA@@ECCECCEAEC@@A@CAGGAACECAEAE@GBABABCBABCBC@C@ABC@C@E@C@C@@@M@EBG@E@KAM@MDGBABA@A@"],"encodeOffsets":[[90459,44853]]}}],"UTF8Encoding":true});}));