(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('卢氏县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"411224","properties":{"name":"卢氏县","cp":[111.047858,34.054324],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@A@A@@@AAA@@@A@A@E@CA@@A@@@ABAAA@CAA@AA@@AB@@AAA@AA@@A@@BCB@@@@AAAAC@C@ABAB@BAD@@A@ABCBCBCDAB@BAFAFIZCBKHAB@BCDEDMJEDKNIJEBGB@@E@IACAABA@CFEFEHCBQDUFUFG@CBCFCBABGBG@G@GAKBABCFKN@@GJGHEFABEBIDC@IDABGF@@ADEHAF@@@FABCDGDABCDAH@B@DBDDFDDBB@B@@@B@BAD@DBBBBDDBB@DADCBEDIPCFCHAH@B@D@F@J@B@DADCBGBEDAFAFCFAFCHAFA@C@C@C@CBCBGF@D@@@BBF@DABABAF@DABC@ABE@C@E@ECE@IBMFA@@@AAAAC@A@EBE@EDIFMFADAD@HAFADCBABCDELEJABCBC@IBI@@@A@EBC@GB@@C@A@IHADABEBEBA@CDCF@BC@A@C@GAECGECAEAC@E@CBEBABC@A@AAEAAA@@ABABAB@@GBEBI@AB@@AB@D@DBJ@B@B@J@BABE@ODA@@@@@AHADADGFGDCD@B@@@B@BBDBD@BBH@BB@@BBBFBDBD@DBD@BDB@DBHBB@D@B@D@J@H@DB@@BB@B@BADCFCD@B@B@BFFBBB@@@F@DBBBHHDBHDNFF@JBN@HBDDHLBDBB@BCBADADAH@B@@@D@D@B@BA@EBSBE@CBC@ABAB@B@B@BBF@F@HAJ@HABCDINEFAB@@AB@B@B@B@B@@@BCF@BA@@@@@A@ABA@A@ABABAB@@@DBB@@B@@@DB@@@@@B@BA@AB@B@@CDA@AB@@@DA@@BABCBA@A@A@CA@@A@AAAC@@@@BCBA@A@C@@CACAE@K@I@C@C@A@A@C@CAA@@BA@@B@BBDBB@D@FBB@D@D@B@@C@GDABA@BB@@@@B@B@D@DBB@AB@@@@@B@BA@@@B@@B@@@@@@B@@@B@@@@@@@AB@@@@@B@@@@B@@@@B@@A@@@A@A@@@A@@B@@A@@@BB@@@@B@@BB@B@@@@@@@B@@B@@@@@@@B@@@@@B@@@@@@@B@@@@@@@@@@A@@@A@@@@@@@@@@BA@@@B@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@@B@B@@@@@BB@@@B@@BB@@@@@@@@@BB@@@@@@@@AB@@@@@@@@A@@@@@@@@@@@@@@BB@@@F@@@B@HCb@BCHAF@BBHFFFBPFNFDDDDBJDH@@D@DBBB@@FFBBBD@BABCDAB@B@@HDLJ@@JLDJBH@@B@B@BA@@DA@@B@@C@@@AB@B@BAB@@@BEB@@@BAD@B@B@@@B@@@BAB@B@@@BDB@@@B@BADA@@@@AA@A@@BA@AB@@AB@B@B@BA@@DBB@@AB@@@@C@@@A@@D@B@@@BA@ABA@@B@D@B@B@B@D@DBB@BBDBB@BB@@B@B@DAD@DAD@FB@@B@BB@@HBB@B@B@B@B@D@B@B@@@BADABA@CDA@@BA@@D@BBD@B@@BB@BABBD@BA@@DA@ABABCBA@AD@BB@@B@DAD@@@BB@@BA@ABABADC@A@@@A@C@@DA@AB@@@B@@@B@B@DBB@@@B@B@B@@@FBD@D@B@B@@@BB@@B@@AB@B@BB@@B@BB@@@B@B@BBB@B@@@B@DAB@@@BABB@@BB@@DB@@@B@F@@BB@BB@@B@BBB@D@FB@@FAB@BBBB@@B@DA@@BBB@@B@@@B@@BB@B@@DD@B@@@D@@BB@B@@@BFD@@BBB@@@@B@D@@@BB@BB@@@BBBB@BBB@B@BBFBB@BBB@D@F@B@DB@@BBB@F@B@@@B@@BB@@@B@B@BD@@BBB@@B@B@@BBB@@@BB@BFB@@BBDB@@FBB@@@@BAB@@@B@BBBBBFD@@B@BB@@@BBDB@@@@DBD@B@B@BA@@B@@A@CBA@ABE@@@AACBA@A@@@@@A@@BAB@@@BA@C@@@@B@BCD@BABAD@@@B@@@BA@GFAB@@ABBBABAB@@BD@BAF@B@B@B@@BDB@@B@D@B@BBB@B@D@B@@B@@AB@B@@BB@BBBB@B@B@B@@BD@@@BAB@BBBBD@B@DAH@BBB@B@D@@BB@@@DAD@@@BDF@BDJ@@BB@B@BAD@@@BABABAB@BBB@BA@@BABA@CBA@@@@D@@@B@BBDBD@BBB@@@B@B@@@BA@@@BD@@BB@BAD@DADADCDB@@BB@@@FBDB@@B@@@DABA@@B@HBB@@AB@@A@@BA@@@CBA@ABEBA@AA@BCB@BA@@@A@@AA@AB@BAF@@@@ABA@AB@@AAI@A@AA@@A@@B@BADA@AB@@A@AB@@@FALGB@DE@@B@B@B@B@@@@@BBBBD@B@DBB@@@BAB@@A@ABA@@BA@@@@@A@@CC@A@@A@CA@@@@AA@@@ABE@@@@@ADGBEBA@A@@@@@AAAACA@@C@C@AAC@A@A@@BAB@@@B@@@B@BBB@D@B@@@B@@@@@@B@BBBBBFDBDFBDB@B@@@BDDBB@BDB@@B@BAB@BABADA@@D@@AD@B@@@DBFBB@@@DAD@BA@@BB@@DD@@@B@B@BBB@@B@@BD@B@@@B@B@@@BCB@B@BC@@@@BBB@BB@@B@@B@@BB@@@B@@@@B@FB@@@@BH@@BBBBDBB@J@D@D@B@B@B@BB@@BB@B@@@@B@DABA@@B@D@D@B@@BDB@BB@D@B@B@B@FDDBB@B@B@B@BCB@BE@@BCB@@@D@F@B@@@B@@@@B@@@@AB@BCBCD@B@@@DBB@B@BA@AB@BAB@@@B@@BBD@B@BB@@BB@D@@BBBBB@@@@B@BBDBD@B@BBBBBB@BB@@BB@BAB@B@B@@BBBBBBBD@@@B@F@B@BABAH@B@B@D@@BB@@ABAD@B@@BBBBDBB@@BAB@DBB@@ADA@@BCB@@@@@@BF@B@B@@AD@DABBBB@BBB@DDB@BBBB@BAB@B@@@B@@HF@@@B@@@BCB@@@B@DA@ABA@@@@@@BB@DB@@FBDBDBB@BBB@B@@@DAD@B@D@@@@@BBB@@@@@@AB@@A@@@@@A@@BB@A@@@@D@@@B@@@@@B@@@@@B@@@BA@@@@BB@@@@BB@A@@@A@@@@@@B@@BB@B@B@@@@@B@@@BA@@BB@A@@@@B@@@B@@@@A@@AABA@C@@@@BA@@@A@@B@@A@@BA@@@AB@BA@@@A@@DA@E@@@ABC@C@@@AAA@A@@B@@A@ABA@@@AB@@@B@BBB@B@B@@@BBBB@@B@F@FAD@BBDBDBB@D@@@DBD@B@D@@ADA@A@@@EBCBA@A@BB@BBB@BA@@B@BBB@@@B@@@BCB@B@B@B@D@@AB@B@B@B@B@BABA@C@@@G@E@ABA@@BAB@@@B@BB@BB@@A@@@@BE@@BC@@@AB@BAHAD@@ADCDCFCBC@ABA@@BA@@@A@@@@@ABA@A@@@A@@@A@ABA@A@@BA@@@@@A@@@C@ABA@A@@@@B@@@@@B@@@@A@@B@BA@@BADAB@@@@A@@@@@AB@@@AACA@AEAA@ABA@A@@@@C@@@CA@AA@AA@A@@@@@A@A@A@@BA@ABA@@@@@@A@C@A@@@A@AAABABABA@@@AA@@@BA@@BA@@B@B@B@BA@A@ABAA@A@CBAAA@AB@A@AAA@A@ABA@@@@D@@A@@@@@A@@@A@@@A@BA@AAAA@@@A@A@ABAB@AAA@@@@A@@@@B@B@@@@@@A@@@@CCBA@@@AB@B@@ADAB@@CBA@AAC@AACAC@ACC@@@A@@@@@A@C@AAAA@@A@@@A@@@@ACAA@@A@C@A@C@ABA@AAC@K@C@CA@@A@@AB@@@BABABA@@@AFABA@AB@@AD@B@B@BAB@@A@@BA@A@A@@B@B@@A@@B@BAB@B@DAD@B@@@B@@A@@D@@AB@@@B@B@DA@@B@B@@ABA@@B@@ABAB@DABAF@B@BAD@@ABA@@DA@A@@@AB@@C@AAC@A@@@A@@B@@@@A@@@@A@@A@A@@BA@@@A@@@@BCBA@A@A@A@@BC@@@@B@BDB@@BBAD@@@B@@AB@B@B@B@F@BBDBBB@@BA@AB@DA@@@@@C@ABA@@@@@A@@@@@@@A@A@@B@@@BA@@@AB@@@B@@ABE@@BAB@BAHBBA@@D@DA@@@A@@@C@AB@@AB@@AB@@@@@B@@@@@BCBC@@@A@A@@@AFABAFCBABAB@@@@@DD@BBB@@@D@@@@@BD@B@@@BA@@B@BBB@BA@@@@@C@AB@@AAC@C@@BEB@@@BBDDDBBBBDBD@@@BB@@@B@FCF@D@@@BAB@BAD@BAB@@ABAB@BA@@BA@@@A@A@ABA@A@@@AAAAA@A@A@A@C@A@ADC@C@ABAB@@ABA@@B@B@BBB@B@@@DADA@BD@B@BBB@BABBB@DAB@B@B@@@B@B@FCBCBC@@BBDA@@BAD@B@BBB@B@BAJ@F@@A@A@A@AB@@ABA@A@A@AB@BAFCB@@ABA@E@AA@C@@AA@AAAAC@A@C@@@AACCEC@@@@AC@A@ABC@A@@A@@AEA@@BAAA@ABCAAACAC@@AA@@AAC@@@AA@G@A@AB@@A@A@E@@B@@AA@@AA@@A@@@@@@BABA@@@@AA@A@@@A@A@@BE@A@@ACBA@ABEBABA@A@@@A@A@@B@F@BA@@@@@@@A@@@A@@@ABA@C@ABC@@BC@A@@@A@@@A@A@C@@@AB@@@@A@@AA@A@A@@@AAA@A@@@A@A@@@@@A@A@@@A@@@@AA@C@@@@B@B@@@@@@@BA@@@@@@BA@@@@@@@@@@@A@@BAB@@A@@@CAA@@CA@AA@A@AA@@@A@@AAA@AA@A@A@AAAAA@@A@@A@AC@AA@@A@@AA@AAC@C@C@EAAA@@A@ACAAAAAA@AA@GA@@BA@A@A@@AAC@@AAAA@AAAAEAAA@A@A@AA@AAA@ABA@@A@@@@@A@A@AAC@AAA@ABA@A@A@@@AAA@AAA@@@A@A@@@AAA@A@@A@AA@@EDC@C@A@AAAA@@C@A@CAA@A@@BA@@B@B@@@@@@@B@D@B@@@BA@@@A@A@@@A@@@A@@@A@AB@@A@ABA@@CA@A@@@@A@AA@@AA@A@AB@@ABA@AC@ACCA@@@ABC@CB@@ABABAB@@A@CBC@@@A@A@AA@@@@A@A@@@A@CBA@@ACAA@A@@@A@AAAC@@@@@AA@AAA@@@A@@AA@C@@@@A@@AA@@BC@AAC@AAA@@@ABA@G@@B@BABADG@@D@@AB@@C@@B@@@@A@ABABA@@@C@@AA@@AAACA@E@AA@@AA@@@A@@@@A@@@CD@BA@BB@BADA@A@A@@A@AAABG@@AACA@@ABA@C@AB@@AA@AECC@@@@@@@BB@@B@@B@@@B@B@@@B@@@@BB@@@@@@A@A@AA@@AA@@C@A@@@@@@A@ABA@ABA@@@AA@BE@A@A@@B@B@D@@A@@B@@@BA@AB@B@B@BA@@B@@@B@BABA@@@AAA@A@C@AAA@A@A@A@@@AB@B@B@@@@@BA@@DB@@@A@@B@@AF@BA@AB@@@BB@@B@BA@A@A@@D@B@B@B@@ACG@@B@DABA@A@A@A@C@A@A@@B@BAB@@ABA@@FCB@@@@A@A@A@ABADAD@B@@ABA@@BAB@BAB@DCDA@@@C@AAA@A@E@CBA@A@AA@BA@ABA@A@AAAAA@@@ABG@A@A@A@AA@@@A@C@EBA@@AC@C@IA@@A@@@EBCBEBCDA@@@CAGAA@@AA@A@C@@@A@@C@@@A@A@@CEAA@A@@AAA@@AA@@AA@C@AAACCCAEAAACAA@A@A@@@A@AAAAACEAACE@@AAAABA@A@A@@AAA@@ABA@@@ABA@@AA@@@AA@@A@A@@@AAAAC@A@@F@B@AC@A@ABA@E@ABA@@AGAA@A@@@CBCBC@@AAAA@AA@@AAA@@BABA@A@@AEA@@A@AA@A@A@AAAA@AA@A@A@A@@AAAA@@ADA@AAECCBA@@@AAC@@@E@@AA@CAA@@@@CAA@AA@@GAC@CA@@A@C@IBCBA@A@G@EB@@C@C@A@AA@A@A@AACAA@@A@A@ABABA@E@@AA@A@AAAA@A@A@@@AFGB@BA@@@C@@BA@AB@BAB@@@@A@@DC@@D@@AB@BAB@@@BABABA@C@@BADA@@@A@C@A@A@ABA@AB@@A@@A@A@@AA@@AAAAA@AAC@@A@@@A@@A@AAA@ACAA@CAAA@@A@@AG@AA@@AA@C@ABA@C@@@@@AA@BA@ABAB@@A@AAAAA@C@A@@@A@@AAAAA@AAAAA@@AA@@@@A@A@@AAAA@@@AACAA@CAC@A@AAAAAACAA@@B@@A@A@AAAAA@AAA@AAA@@CAAA@@@AA@A@C@@BC@@@@@AAAA@@AA@@AAA@A@@A@AAAAA@A@@GD@@A@AAAC@AAA@@@AAA@@@@A@C@ABCB@@E@@@A@AB@BEBA@A@A@CAAAEAA@@@BA@A@A@AA@@@A@@@@@CC@@CAECA@CA"],"encodeOffsets":[[113720,34359]]}}],"UTF8Encoding":true});}));