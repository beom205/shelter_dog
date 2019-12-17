(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('商州区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"611002","properties":{"name":"商州区","cp":[109.941839,33.862599],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@@@A@@@A@@A@ACA@@@@A@C@A@A@A@@AAA@AE@A@@@ACA@AA@AAA@A@@A@@BABABCBA@A@A@A@C@@BA@@AA@@@@@E@A@AAAC@@AA@@AACA@AAA@CA@@A@CAAAA@@@@BA@ABAD@BC@ABAB@@@@A@A@C@@@@@AACCA@A@A@A@@@@@A@CBC@@@A@@B@@AB@@CBA@@B@@@@AB@BE@A@A@@BA@ADAB@BCB@@@@@B@B@@ABA@@BA@A@A@A@@B@@CA@@A@A@A@@@@@AA@A@AAC@@@A@ADA@AB@@A@E@@@@BA@@@@BA@ABA@A@@@@@A@@@@C@ABA@C@A@@@A@A@A@ABA@@BA@ABA@IBA@@@@@@@AA@A@A@AAAA@@AA@ABC@IA@@AB@@BD@B@@@BBF@DBD@BAD@@AB@B@@@B@BAB@@A@CB@@AB@B@BBDAD@D@BA@@BAB@B@@@@A@AAA@A@A@A@@@AACAAAA@AAA@@AC@C@AAA@@A@@AAA@@BABABAB@@CBA@CDA@A@A@@@A@@BCB@B@@ADABABABEHADABAD@B@B@B@@CD@BCD@BABA@@@BB@@AB@BAB@D@D@@A@ABA@AAA@C@@@AAA@A@C@A@A@A@A@AAE@@@CA@@A@A@ACA@@@A@E@A@A@A@@@@BABADCD@@ABA@AAC@AA@@A@C@A@A@AAC@AAA@@ACC@A@@@@CAA@AAAA@@G@@@@ABAAAA@GD@@ECECAA@@A@@@A@AB@BA@C@C@@@A@A@@@AAA@A@C@AAC@A@@BA@C@CA@@A@C@CBA@@@CAAAAA@ACCACACAAA@CA@@AAAA@CA@@@G@C@@@A@A@@BA@ABE@A@CAA@EBA@EB@@@BA@A@@BA@@@A@@AA@@@A@ABA@A@CBA@C@@@AB@@A@A@AAC@@@GE@@A@AAA@A@A@@AA@@@@@ACCC@BA@@F@BAF@BA@@@@BAB@@A@@@CB@@A@@B@B@@@BA@@DADA@@BA@@BAD@B@B@@ADBB@BBB@BBBBBBB@BDBBBB@AB@@@B@B@@@B@B@BBBBBBBBBBBB@D@@@@@BD@B@B@@CD@@C@@@@@AB@BA@@BABADAF@@@B@B@@@B@@@BADA@@BBB@BAD@@@B@@BB@BBB@@B@@@ABA@@B@@@B@BAB@B@B@@@BA@C@CBC@CBEBA@CB@@@@@BBBBD@@BB@B@@@@@B@F@BB@@@@DBB@@BBBBDBBB@BBBBB@BD@D@BB@@B@DBBBB@@@@BBB@B@@A@@BA@A@ABA@AB@B@@@B@DAD@B@@@@@B@B@@@BA@@B@@A@A@A@AA@@CB@BA@A@AB@@A@A@A@ABAA@A@@@AA@AAAA@AA@A@@@C@@@CA@@AA@@A@@AAB@B@@@B@@A@@BAB@@ABA@CA@@A@@@CBA@@@@AA@@BA@AA@@@@@BABABKFA@A@@B@@A@A@@BABA@A@ABA@AAABA@CBA@A@A@ABA@A@@BAD@@@B@BAB@B@D@D@B@@AB@B@B@B@B@B@@AB@B@B@@ABA@A@@@AB@@@D@@@@@B@@@BA@@BABA@@@AB@@@BAB@BA@@D@BA@@@A@@@ABAB@BBB@DB@BB@@B@@B@B@BBB@@@B@@BBB@@A@@B@@@B@B@BB@@B@@@B@DBBB@@BA@@B@B@@@BBB@BBDBD@@A@@B@BBB@B@B@@B@@@B@@@B@@@@@@@BB@@@@@DB@BA@@B@@AD@@AB@@@B@@B@BB@@@@@BA@@B@BB@@B@@@@BA@@B@B@BB@@BB@@B@B@D@B@BBBB@@@BB@BBB@B@@@BB@@@B@B@@DBBBB@B@BB@@@@@DA@@@AB@BB@@BB@@@B@B@@BB@BAB@@@B@B@B@@BB@BB@BB@B@@B@@BB@@BBB@B@BA@@B@DAB@@@D@@@@@B@BBB@F@B@BABA@@@@@@@F@BB@@B@@B@BB@@@@@@@B@@BB@B@DB@@BA@@B@@@B@@@BB@BB@B@@AB@B@@@BBB@BA@@BAB@@@BBDAB@BA@@BBB@@@BABAB@@B@BB@BB@B@B@@@@@BB@B@@BBB@BBB@D@B@@@BB@@@@EB@@ABA@@B@B@@@@B@B@@@@B@@@B@@@B@@@BA@@@C@C@@@@BABA@@@@@A@A@A@CAA@@@@@AB@BCBA@AB@@ED@@@@AB@BCDABA@A@A@AA@@C@A@@@@@@@A@@@@@A@@BA@@B@DA@@@EBAB@@EBA@@DABABC@CB@@C@@@@@AD@@@BA@A@AB@BA@@@@B@BAA@@C@@@AB@@AB@B@@E@@@A@AB@@ABABAB@@CB@@AB@@ABA@@@@BDB@B@B@@@@DBB@@@BBBB@@@BABAF@B@@@@BBBB@@BB@@BB@DB@@B@D@B@B@B@@@D@@@B@B@@@@@@BB@@@@B@@BBD@@B@@B@@@@BD@BA@AB@B@@@B@B@F@@BB@@DBBBF@D@@B@BB@B@@@BDB@B@BB@@BB@@AB@BAB@BABA@@@AB@BABABA@@B@DBB@BAF@@FBBBB@BBD@@BB@BB@@@B@@@@A@@AA@@B@@@@BBBBDBDDBB@B@@BBFBD@@@DA@@@BB@B@@BBDBDBB@@BBBB@@B@F@BAD@D@B@@@D@BB@@@@BAD@D@H@D@D@D@@@DBB@BBB@@@D@B@D@@@D@@@B@B@B@B@DBB@@@FABAB@@@DF@@@B@B@@@BBD@B@D@B@D@B@@@B@@B@FAB@BBB@D@@@BBB@D@B@DBBB@BBB@@BBBBBBBD@DBBAB@@AB@@@@BBB@@BBB@@@@B@@ABABADA@@D@B@B@@@DCB@@@D@B@BBHBBB@@BBD@B@DBB@B@DB@@B@BB@B@@@B@@B@B@B@B@@@BB@DBBBB@@BBB@@A@ABC@ABABA@A@@@AB@BA@AB@BB@@B@B@DBD@BBBAHA@AB@@@B@@A@@B@@ABA@@D@@@BA@@@AB@@@BAB@B@B@B@BAD@@@BAB@B@@BBBB@BBB@BB@@@@@BAD@@AB@@@B@@BBDB@BB@A@@B@@AB@@@BBBA@@BAB@@BB@@@B@@@B@@@D@@A@@B@BBBBBBB@B@@B@DBB@DBD@B@B@B@BBBB@B@D@B@BB@DBD@@@BBB@@B@@@@@@@B@B@@AB@@AB@@@@@@@@F@B@D@D@@B@D@DBB@BB@@@@BBB@BB@BB@@@BBBBB@BB@@BB@@@BBBBBDBB@@BB@@@@D@@@BA@@@@B@BBBAB@BAFA@@@@@@AA@@AAA@CE@@AAB@@A@@AC@A@A@A@@B@BA@@B@@@DBB@DBBBB@B@D@@@@@@@@D@@BD@@BB@@AB@@FABA@@@AD@D@BC@AB@BA@@B@B@@B@@B@BBB@B@@@@@D@B@BAB@@@BA@@@@B@BBB@@B@B@@@B@@A@A@@@A@A@AB@@@DAB@@@@@B@B@@A@A@A@AB@@@DAB@@@@AB@@A@A@@@A@@BCD@B@@@@@@@BA@BB@@ABBB@@@@@B@BBB@@BB@@B@@BAB@@@@DBB@@B@@BDBBB@@B@@DBB@BBB@ABB@@@D@BB@@DA@@B@B@B@BA@AB@B@BBD@DBDBD@D@@@@@@@@@@@B@@AFC@ABAB@@@B@B@BA@@BB@@BBBAF@B@@@@ABABA@@@AB@@ADAB@@@B@@@B@B@@@@@BAD@@@@AB@@A@@B@B@@@@AB@@@BAB@BAD@B@B@B@@@D@B@B@B@@ABBBA@@D@BA@@BADA@@BA@ABC@@D@B@DBD@FBBBB@@@BA@A@CBA@@@C@CBABB@AB@BAB@@AB@@@DB@@B@B@B@B@@@B@BAD@B@@@HCD@BA@@B@BBB@B@@A@A@@@ADA@AD@DABA@@@AB@@A@A@@BA@C@@BC@@@A@A@@@@@@@C@C@@@@BA@@B@@A@A@@B@@A@@@@@AAA@@@A@@@@BABA@@B@@@BAB@BC@@@A@A@@@A@A@@@@B@@@B@@@BABA@AB@@AAC@@B@@C@@@@B@@@BABA@@@A@@B@D@@AB@ACBCBE@@@@BBB@DD@@B@BAB@@@@@BB@@@@B@B@BA@@BC@@@@@A@@@C@ABA@@B@B@B@@@@BB@@@B@@@B@BC@@@A@ABAB@@@@@D@@@@@@@@@B@@BB@@@B@B@@A@@@AAAAA@@B@B@B@@@@@BC@@@ABA@A@A@A@@@AB@@@BABAD@@@@@B@DB@@B@@AA@@C@A@@@@BA@ABA@C@CB@BA@@BA@A@A@@BG@ABA@@B@BA@A@@@@BA@@@@A@@@@A@AB@@AB@@@@AAA@@BABA@@BC@@@A@A@@@@BABAB@@@@A@@AA@AAA@@@A@A@A@A@@@@C@@@A@BA@A@@@C@A@@BA@@B@@@@C@A@C@A@CAC@@@@A@@C@@@@A@AAA@@@@C@@@A@@BE@A@@B@@AB@@@B@@@B@@@BA@ADABAB@BA@@B@@@D@@@@@BA@@BAB@@@@EB@DAFA@@@@@A@AAA@AB@BABC@A@ABABC@A@@@ABABA@@AE@C@A@A@AB@@ABA@AB@F@D@B@BCBAB@@AB@@ABC@A@@@ABAB@BAB@B@B@B@B@DABAD@DC@@BABABADABA@@BBF@@BDDBBB@BB@@F@B@B@@@B@@@BBFB@B@BDB@@B@@B@B@B@DBB@F@B@BAB@BBB@@@B@@DABBB@@@BA@@B@BBBBBB@@B@@@D@D@BBB@@@@D@B@BBBB@@@B@B@F@HAB@DAB@DAB@B@@@BBBBDB@B@@DBBBBBD@D@@ABBD@DDBBDDB@D@BAFBD@B@B@DAB@BA@ABA@@@A@@@@@@BBBB@@B@@@B@@@DABAB@B@@@BA@A@ABC@AAABC@A@@B@B@@B@@D@@A@@DC@@BAB@B@DA@@B@B@D@BA@@D@@A@@DBBB@@B@BB@@BABADABB@@B@DBB@@@@@B@BA@A@A@A@@B@@ADD@BBBBBBBBB@@BBB@B@D@BB@@D@@@BB@@BDBBB@@@B@D@B@@AB@@ADCB@@AB@BA@@BA@A@A@@AC@AA@BA@@@A@@@AB@BABA@A@A@@AA@A@ABA@ABA@CB@AA@@@EAC@A@@@A@@A@A@A@AAA@@AA@@A@A@A@@AACGCCAA@A@@B@@A@@DBB@BAB@BAB@@C@C@C@@@@BAB@DA@@BA@A@@@@@A@C@A@@@A@@@@BAB@BAD@BC@@BA@AB@@A@AAC@AA@@C@A@A@A@@@@I@A@CA@@A@@A@A@AAC@@@@AA@C@C@@@AACAC@A@AAA@C@@@A@CACA@@@A@C@@@A@ACA@@A@@@AA@C@A@@AAABA@@@A@@AAA@AC@AA@@@@@AA@A@@AAA@@@@@AC@@B@@AF@B@B@BAF@@@BC@A@A@CAA@@CC@@AAA@A@AA@@@@@A@@BAAA@A@@AC@AAABA@I@@@ABABA@@@A@@A@AAAAAA@@A@AAC@CB@@A@@@A@ACA@AB@@AB@@A@A@A@A@AB@@AA@@@@CE@ACAA@A@A@@@A@CAAA@@A@AB@@ABC@AAA@A@@@AA@@AAAAACA@@A@AB@@@BA@@B@@ABA@AAA@A@C@ABABA@A@ABA@@BA@C@A@A@@@A@@@ABC@@BA@ABA@@D@B@@AB@BA@A@A@GBAAAAA@A@AAA@A@C@@@A@ABAB@@C@AAACEAAA@@A@C@ABA@@@AA@@AAEAA@A@A@C@C@A@@@AA@@AAAAAAC@AEECC@AAC@@BA@@DABAB@B@@@@A@A@AA@@C@@CAA@C@@@@@@CAA@@CCAAAAA@A@@A@A@C@@CEAAACAA@A@@AA@ABCBA@@@A@AA@@@ACA@@A@ABA@A@AB@@A@@@@@AA@A@@AA@@A@A@A@@@AA@@@A@A@AAC@A@A@A@A@@AAAAAA@A@A@@AAA@@A@@@A@@A@A@@A@AACA@C@@AAAA@AA@AAACA@EACAA@A@@@AB@@@@CD@@A@@@A@A@A@AB@@@@AB@@A@C@A@A@@@@BA@ABABA@ABA@A@A@AB@@A@ABAA@BA@A@AB@@@B@B@@@@@B@B@D@B@B@@@B@B@B@@A@@D@@A@A@A@A@A@ABAB@BA@A@C@A@@@A@EB@@ABEBCBA@@B@@@B@@A@A@A@@A@@AAA@@@@@ABABA@@@C@@@AB@@ABA@@BAB@@AB@@A@@A@@CBAAA@A@AA@AAA@@C@A@@@@BA@AB@@A@A@AB@@A@AA@@@BABA@AB@@@B@@A@ABA@CBA@@@@B@@CBABA@A@CDA@@@CAA@C@A@@@A@@@E@A@@@A@@A@A@CAAA@C@@@C@@@@BA@@A@@C@AA@@ACA@AAAAA@AAA@EB@@ABADAB@@@@@@AA@@A@A@@@@@ABAD@@A@@AA@@@AB@@CAA@@@AB@DA@@@AACCA@AA@@@@@@C@@@@@A@A@ADCAA@CB@@@@AAA@ABCAC@@@A@A@CA@@C@C@E@AA@@@@AA@A@AAA@@@ECAAA@@AE@@AA@AA@@AA@AAAA@@A@E@@@C@A@"],"encodeOffsets":[[112569,34489]]}}],"UTF8Encoding":true});}));