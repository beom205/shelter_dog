(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('昭阳区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"530602","properties":{"name":"昭阳区","cp":[103.706539,27.320075],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@A@@AA@@@@A@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@AA@@@@@@@B@@AA@@@@@@@@A@@A@@@A@ABA@@@@@@@A@@@@B@@AA@@@@@@@@@@@@A@@B@@A@A@@@@@@@A@@@A@@@@@@@@AA@@A@@AC@A@G@C@ADC@A@C@CECAA@ABA@A@A@C@@E@E@AA@A@G@OAC@CBE@E@@A@A@AB@BCB@BA@CBI@GBCBA@AAAAAAAA@AAA@AA@BA@A@ABA@A@A@A@A@AA@AAA@AAA@@AA@@AAA@AA@AAA@C@A@CA@@A@AAA@A@A@A@A@A@AB@@A@AB@@ABC@A@A@@@A@C@A@AB@@A@@@C@CA@@@@CC@CBQ@GAEA@A@GDEHA@A@@@@C@A@@BC@@@@@A@CBA@A@AAA@@AA@@AAAA@@CAAA@AAA@AAA@A@CA@C@A@C@A@AA@@@AB@BADA@A@A@CC@E@C@AA@@AA@@AAAA@AA@AAAEAACAE@K@G@ACAKAE@@ACCAGC@A@@AA@A@AAA@A@C@A@@@A@AA@@A@@A@AAA@AAA@A@AAAAAA@AAC@CAAAAAC@AACAA@AAC@@@AA@AAAAAAA@A@A@A@ABA@A@A@A@@@A@@A@@AA@A@@BEHY@CAEAACAG@CAA@AAACAA@AAA@A@@AA@BA@ABABA@A@@BA@A@A@A@A@A@A@A@A@@@A@@@CBA@A@A@C@AA@@AA@@AAA@A@AAAAC@AAAA@@AAAAC@ABA@@@ABCBC@E@ECA@A@@AAAA@A@CB@AC@C@@@AAC@AA@AAAC@A@@AA@@BABAB@@ADCBAB@BAB@B@B@@@B@B@B@B@BADBB@@@BBB@BBB@BBBB@BB@B@B@B@BBB@@DB@BB@BBB@BBD@BB@BBB@B@B@DBB@@@BJBLBVFJBFBDB@B@D@@@D@B@BABABABAB@BC@@BABABABA@AB@BABABCBAB@BADA@ABABAB@BABABABC@ABABA@@@G@KBMDKB@BABA@@B@B@DAFABAD@FBFBBJPDLANADADIHADAFGHE@A@AC@C@A@@C@A@@@C@@@@CCA@AA@AAAAA@AAA@A@C@CBA@C@A@C@A@@BAB@@A@@@ABA@@BA@A@A@A@ABA@ABA@CBCHGFMHC@GE@@@AAAA@@@CAICCEAAAAC@@B@BABAB@@C@AAICGCC@A@CBEDC@AA@G@@AAA@@@A@@@ABA@CBA@ABCDKBEBGAAAIIAAE@CAIACB@@EBADAD@FBD@@DFDFBFBFBHBDBF@D@FBDBFDFDFDDBFFFDFDJBBBFDFDDDDBHAB@FDDBBDJ@FAFEJCFCJ@H@FHTDFBJDD@BAFABCDABAFCDADCDABCDABAFCDCHADCDCD@B@B@DBBBDBDBFBDADCDDFBBBF@L@JADAB@@EBCBCBCD@FBDDD@@BDBHDD@BB@BB@BA@A@ABA@A@ABAB@BA@@@AB@@C@CAEE@@CAAABABA@A@AA@ABCFCDA@CBA@@BADAB@@ABABA@@BA@B@@@B@BBD@B@@@@B@@EF@HBHFF@BCDCD@D@DDF@DCBABCDCDCBCDCBEDCCBCACACCCCCAE@C@A@@@E@C@CCEA@AAA@A@AB@@ABC@AB@@AB@@@B@BA@@@ABA@@@@BA@@@A@ABABC@A@@BCAABABAB@@A@A@AB@@@@@@A@A@A@@@CBA@AAA@ABA@@@CACA@@A@@@AAA@A@@@A@AAA@AAA@AA@@A@A@@@@@A@@@@@@B@@@@AA@@@@A@@@@AA@@AA@@AC@@@AAA@@@AA@@@AAI@C@GBADEAC@C@CBCBEBEBCDCDCF@DADADABCBCAG@CACCCAEAACCCAGAAAC@C@AA@A@AB@@ABA@A@@BC@A@@BA@@B@@@CAAAAA@@@A@A@A@A@A@@@AB@@AB@@ABAFAFABADEDADCD@BCFABA@A@A@@AAA@A@A@A@A@E@EBAA@AA@@CDA@@@AFCBAD@DAHEDEFELKDABA@AAAC@OCEAGAGI@A@AFENEN@HCBAACACCCCACEBG@CB@@@BCBCDC@A@ACCICAAA@ADIPCDCBC@EE@GACACACC@GBCF@DEBE@C@@A@C@AAAAA@A@ABABC@CAEA@CAEAACBCDCDC@CCACBEBEAABAB@BADEBCBGBGDEBC@CBCDCBCDEBADAFADADABADCDABCDADADCDCF@H@DCDABG@EB@@E@C@CB@BABAB@B@B@D@BAB@@KDABA@@B@BBBJFBB@B@BA@@@A@CBA@ABCBCBCDADABBD@DEDCBCBC@C@CB@B@D@BGBCDEDEBADA@@@@@@CAC@@CAAEA@A@A@@BABA@ACAABGAAAACAA@A@@BBDBF@FEJAD@@C@KGC@A@A@@B@BA@CAAA@ACAA@CKCAE@C@C@C@A@ACAAA@A@A@C@EBAACCC@E@C@CBE@C@I@@BGHCFCHAF@D@DAFABAB@BADBBBD@F@D@F@F@HAD@D@F@D@DDDBDBDBFBFBDDBBBBBBDDHBBBHDBDFDDBB@DBFBBDB@BB@BBB@D@BBDBBB@D@F@FBDBFDFBFBDBDDDDFDBFBDBHBHBFDBDBB@FBDFFBD@BBB@HDJ@HBHBDFDHDFBHBFBF@@@FAFAJ@F@D@D@F@DAB@@@BADMBCBABCB@@@FCFCF@B@@@DCDA@@DEROBABAFCDCFCFC@@FADAFAHEFADABCFAFADABEBCFEDCDAD@BD@DBDF@NGF@L@HBLJLDPDBB@F@JAHEHEL@J@FBDLF\\LTFF@@@B@J@@@HBF@D@B@D@LAD@D@DB@@F@HBDBBB@BAB@D@BBBDJ@DBDBD@@BBHADAH@DCFCFCFADADAD@FADCJADAF@BABADCDABCB@B@BBBBJN@BBD@B@B@@BF@@@B@D@B@B@B@B@@DBB@BBF@DADAB@DADA@CBA@ABAB@@@@A@ADCB@B@BBDBB@B@@A@AAAAC@AAACAAA@ABAB@DB@ABA@A@AA@CA@A@@BCDCB@AAA@AAAA@A@ABC@A@@@@@@@@@AA@A@A@@A@@BC@ABAB@DAB@D@B@BAAACA@AB@B@BBBBB@DABC@A@AB@DBB@BABABBBBBBBABAAAAC@@BAB@FDB@D@B@D@BBDDB@DBFBF@B@BBDFBDFD@DB@@B@@@BABAB@@AB@B@B@@BB@BB@BBB@@BB@D@B@D@B@B@D@B@@BB@@B@@@@@B@BABA@ABEFMFCDAB@H@B@@@@BDBB@B@B@@ABABCBAB@B@@@DBDB@BBD@DANGLCJED@B@BB@BCP@DDJ@DBBDBJBHBD@BAB@BAD@BADA@@BABABCDABABAB@BA@@BAB@BBB@F@D@BD@@DDB@DBB@B@@B@BAB@D@D@F@@A@@BA@@BA@@B@@@B@@AB@@BB@BD@D@B@D@BAB@B@DBBAB@D@BAB@BAFABAF@B@B@B@F@B@B@D@F@BBB@B@B@DAB@D@B@@B@BAB@BAFAD@@B@@@@@BBD@BBBBBB@BBDBBB@@@BBB@D@BA@@@@B@@@B@DAB@@@F@B@H@F@H@D@B@DADEB@B@DBJDDB@B@BABABA@BDB@D@D@DBBD@D@D@D@BBBDFBBBB@@@BB@B@D@@@D@BB@@BA@@BAACBABABAB@BAACA@AAEAAAA@@A@@@AB@BAB@@CDABABB@@DBBDBBBD@@DDB@D@D@B@D@D@B@D@F@D@@@B@@BAD@B@@DBBBBB@@B@B@DABAB@DBB@B@B@BB@@@BBB@@BB@BBBDB@@B@BABAB@BBB@B@BA@@BADEBADA@ABABA@@DABADEBABAB@D@BAB@@A@@CACA@@@A@ABA@A@ACE@A@ABAB@HCDABCB@BAB@BBBBHHDBB@HDDDDDBBB@D@B@B@@@BA@@@E@AB@D@B@@@B@B@B@BBB@@BB@@@BBBB@DAJB@B@@@BBFDB@BB@BFBDBBBD@B@D@DBD@BBBAB@BCBA@@BABABA@ABAB@DAB@B@D@B@B@J@B@@ABABA@A@EEECKEI@I@C@C@CAAAC@ECIAA@A@AA@@A@@@CAAAA@@@A@AAA@@@AAAAA@AA@@A@@AA@A@A@@AA@AAAAA@AACA@@A@AAA@A@ABC@A@@BABA@@DAD@B@@AB@@@BABABABC@CAAEAECCCEKAACAAAAAA@AAAAA@CAAAAAAAAAACAA@A@AAA@A@@@AAA@AAA@@@AAA@@AAA@A@AACAA@A@AAA@AA@A@@AAAAA@AAAAA@@AA@AA@AAAAA@AC@M@IACC@M@@@C@CBA@A@C@C@A@A@AAA@AAABC@A@A@A@ABA@AA@@AAAAA@AAA@ABA@ABA@ABABABA@@B@@@LHFAD@BABA@@B@B@BAB@BC@CB@@A@@BA@AB@@AB@B@@CB@D@B@@ABA@C@A@AAAAAAA@AAA@E@CEEEGAE@CDCFCB@B@BADADCBABA@@BAB@BADABAFB@@@@@ABAB@BABCBAB@@ABA@@BA@@BC@@@@ACAA@C@C@C@G@@@E@A@AACBA@A@CAC@C@A@G@C@A@CA@BC@CBA@@@A@@A@@@@@@@A@@A@@@@CA@@A@@@A@@@A@@@@@@@A@@@A@A@@@A@@AA@AA@@AAAA"],"encodeOffsets":[[106384,27995]]}}],"UTF8Encoding":true});}));