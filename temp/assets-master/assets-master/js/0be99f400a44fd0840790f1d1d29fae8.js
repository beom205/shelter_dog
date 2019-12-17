(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('大理市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"532901","properties":{"name":"大理市","cp":[100.30127,25.678068],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@C@CAA@@@ACCA@AB@BA@@@A@C@CAC@CBA@ABC@CACBADOECBEFGDG@C@CCAKGECI@GD@@A@ABAD@@AHAFEJCFE@E@UBA@O@CBIDABADAFCBAD@DBB@D@B@DABAD@DABBDBDDB@DBBFFDD@D@D@@B@AFCDCBIDE@C@EACA@@C@A@B@@DBD@DBDBB@BDBBB@F@@BDBBB@@B@B@B@B@DBBBB@BDB@BFB@BF@B@BBBABB@@B@@BBBBB@B@B@@BBBBBB@BABBBB@BB@@@BB@@@B@@@@B@@@B@@@@@@B@B@B@@@B@@@B@@@@@@@BB@AB@@AB@@@B@@@B@B@@@@@B@@@BA@@B@@ABAB@@AB@@@B@B@@@BBB@BAB@DCBCDABABAB@@AB@@@D@@@B@@ADAD@@@BA@@B@@@BA@@B@B@@@B@@AB@@@@@@@BAB@@A@@@@B@@@B@@BB@@@BAB@B@B@BAB@B@@@BAB@B@D@B@BAB@BBB@B@@@B@@@BBBBBBD@@@BBB@@@B@B@@@B@@@B@B@@@B@@AB@@@@@B@@DABADEHCHCFABCDCDCBCBADAB@B@B@DBDBFBDFDDDBDBDDDBBBB@FBDBBBBBB@B@B@@ABABAD@BAD@D@D@@ABCBABCDC@ADABAB@B@D@D@DA@ABABA@A@ABEBCBADA@@D@BADAB@BADAB@B@B@B@@AD@@@BAB@@AB@@ABA@@@ABAD@B@DAD@BAB@D@B@D@B@BADADADAB@D@B@D@@ADADAB@D@D@FADABAB@BCBADABCBAB@BCDABCBABABADABADADCDCDABA@A@A@C@ABABADADADAD@BC@@BAB@DAB@B@D@BBD@B@BBD@BAB@BABABCDABCD@BAD@B@DA@CBADCBA@@BADAB@B@BAB@BABCDAFABADADAD@DAD@BAD@D@B@B@@@BBBDD@B@D@DAB@D@FAB@D@BA@C@CBA@ABABABADADAB@DBBABABA@CBABCDADAB@DAB@@ABABABABCBC@CBEBCBEDFDTHFBDBBDBDBFHRDH@FGP@H@F@DBDDDFFDFFFFDJBFBJADAFCHCF@FBBBB@BF@D@D@F@DBFDD@@XPPBJ@H@J@DBBD@B@B@BABCDAD@B@BD@NBH@@@B@L@F@@@BDB@AB@@@B@@@F@BAD@B@@@BAH@H@D@BBFFBFDHBDB@@JBLBVFNFJFFFDH@P@BABAB@@A@@@A@IEA@AAA@ADEH@@ABBBBDRJ@BBHBBBD@B@BEDAB@DDDH^BHDBBBHBRDFBD@HCFA@@@AA@BA@AFCDCDCDA@ABAAAHC@IDKFGNIBBB@@ABA@A@C@CAE@EAAAC@A@C@@@A@A@@DAF@H@L@FBF@HBNDH@FBHBLBH@@@J@H@JBH@F@F@DABBB@BB@@BBHFNFHDHFHBJ@H@PED@JGJEAGACACBCBEDMBGDIBGBABEBCBEBEBCBC@CBCBABCBAA@ECAAAAAAAAA@ACC@CAC@EAEBE@EBEBE@CACAAA@CAA@@AC@ABC@ABABADADCDC@@@C@AAAACAC@CAE@E@C@C@C@AACACACAE@C@A@C@E@CAAAACA@AAEA@KEAAA@@C@E@KAEGCOEC@CAACAE@EAGBCHEFCLCDABA@E@EAGBCDEFEHAB@BBB@B@B@B@@@@B@@@@B@B@B@BAD@DE@CBAFGDC@CACEGCAA@CDCBCDIBA@E@EAC@ICC@ACAA@CBCBCBABAACACAC@C@CBAB@BCAAAAAKAE@G@CBEBC@K@E@CBO@E@@@C@ABCBAD@BBHFBBDBD@D@DELQDCDEBC@A@AEE@ABCDCDADADC@A@@BIBEDCBAD@F@FBB@BC@CDUBABCDADAFBHBHBH@D@FADABCBEFIBE@A@A@A@@@@C@A@@@A@@@@@@@@A@@@@BCDCBAHIDE@A@C@A@CFADABA@A@EBCDCB@D@D@DB@@B@BABADEDA@@B@DEDEFGBG@EFCHGBCBCBEBEBC@EBGDCDCHMBCGAAACAA@EBEBEBAAEGAA@ABCFCHG@@@@HEBA@ABABC@C@@BE@ABAB@BAD@BABAB@BE@@@@@A@CCCAAACAEAAAAA@ACACEC@@@A@@@A@A@@@AB@@AAAAA@A@A@ACGCIAC@AACECAAAA@AAAAAAAAAA@@A@ABC@A@@@AAB@@A@AA@@AE@AA@CAAAA@AAAA@A@A@A@@@CAG@C@E@EAA@A@A@ADG@CAAA@AAA@AA@CCWEI@@AACCCAAA@AAAAEACAAAAAAC@E@G@E@E@EACAE@A@AB@D@BBD@DABCBA@C@A@CAA@ABEB@@BB@BBDAD@D@BBBF@@BBB@D@D@F@B@DABABAACAECC@ABCD@DCDABC@E@CB@B@BDF@BCBA@A@C@AB@BADCDADAB@BDBBB@BABABABAFADBF@D@D@BABCBC@A@CAEAABEBCBA@A@C@C@A@ABCDADC@@@AB@B@@@B@@A@A@@@@B@BC@A@A@A@AACAACCCACCCCEAACC@@ECAACACAEACBCBCDABCBCBCBCBAD@BABADABADCDAFCB@BAB@BADCBCDCFCDAB@@CBCBA@CBA@@@@@@@@@ABAB@@A@@@ABA@CAC@CB@@ABA@CDABCBCBC@CAAA@A@A@CAEACACAAEAA@A@CCEACAC@ADCDCBCBE@GACACA@@A@@@@B@@A@@@@B@@@@@B@@@@@B@@@@A@AB@@@@A@A@@@A@A@@@A@@@A@A@A@@@@@@A@@A@@@@@@@@@A@@@A@@@@@@@AA@@@@A@@@@@A@A@@@@@A@@@CAEAGBCBAD@B@BA@A@C@AAEEEEGCEAA@C@"],"encodeOffsets":[[102500,26131]]}}],"UTF8Encoding":true});}));