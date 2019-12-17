(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('开平市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"440783","properties":{"name":"开平市","cp":[112.698545,22.376395],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BB@@BFBB@BB@BA@E@A@IAA@AAC@A@IBC@E@@ECACBC@CFEACAAECFGAC@A@AAAEAECCA@CCA@CC@DA@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@BA@@@@@@D@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@AA@A@A@@@A@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@A@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@B@@@@@@B@@@@@@@@@@B@@@@@@@@@@A@@@@B@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@B@D@@@B@BBB@@@@@BA@@@@@@@@@@B@@@@@@@@BB@@@@@@@B@@@@@@@@@DA@@B@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@BA@AB@@A@@A@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@AC@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@BA@A@A@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@AAA@@A@@@AC@@@A@@BA@@B@B@AC@ABA@@B@@@BA@@@@AA@@BABAB@B@@@@@@@@@@@@@B@@@BA@@BBB@@@BA@A@@@AAA@@FA@@@BAB@B@B@B@B@@@@@A@@BA@@B@B@@@@@BCB@@@B@D@@BB@@@B@D@B@@@B@BA@@B@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@A@@@@@@@@B@@@@@@A@@@@@@@@B@@@@@@A@@@A@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@AA@@@@@@@@@@A@A@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@B@@@@@@@@BB@@@@@@B@@@@A@@@@A@B@@@@@@@A@@@@@@@@@@@@@AA@@@@@@@@@@@@@A@@@@@@@@A@@B@@@@@@@@@@@@A@@@@@@CA@AAACAAAA@A@A@@@@CDC@CBC@AAE@E@A@CBCAC@@@@ACBE@ACC@CA@AAC@C@A@GC@@@B@@@BAAAAAA@A@@BA@AAA@@A@@@A@A@CA@@@A@@@A@@AAAAA@@A@A@@@@C@EB@@CAA@@@A@@@@@@A@A@@@C@A@AA@@AA@@@@AAA@A@A@AAAAA@@DA@ABA@A@C@A@AAA@A@@DC@@BAB@DC@@B@BB@@D@@@@@@A@AAAAA@@@AD@B@@@BA@@A@@AA@AA@A@@DA@@B@B@BB@@BB@AB@@@BA@@@@AA@@BA@@B@@@AB@@BB@@B@BA@@A@@@@@AA@AA@@@@@B@DC@BB@@@@B@@D@@@B@@AB@B@@@@@B@@@D@BBDADA@@@@@AAC@AAAAA@AA@BABAD@BAD@B@@B@@BB@@B@BBBA@@B@@A@@@@@@B@@@@@@@@A@@@@@@@@@A@@@@B@@@@@@@@@@A@@B@@@@@@A@@@@@@@A@@A@@@@@@A@@@@@@@@A@@@@A@@@@@@@A@@@@@@@@@A@@@@C@@@A@A@A@@@AAAAA@AA@@@AB@BA@ABA@@@AAAAAA@@AAC@@@@@E@A@@A@@A@CBABE@@@A@CAAC@@@@@@@CACAA@A@@@@@@AA@GAAG@EBEDEAMAGAAE@E@AAE@KFIHC@CFCHAFBDAB@DG@@AA@AACBCDEBABKBAB@B@@A@@B@@ABE@AB@AAA@@CB@@AB@BCB@@@@AAA@ABABAB@B@@@B@BA@A@ABAB@@A@AB@@A@@@A@EAC@A@@@@@AB@@ABCD@B@@A@AB@@@DBB@BD@@CB@@AB@AF@@B@BB@@B@@BA@CAA@AB@@@AA@A@C@C@@BEB@BBB@@@@ABAD@BBBAB@BAAAF@@BBBA@BABA@@DA@AA@B@@@BB@@@BB@BABAB@B@@@AA@BAAC@A@A@ACCA@@CBAA@AAABA@@@@@A@@@@@AB@@@A@@BA@@@A@@AB@A@@@A@@A@@@A@@@@B@@@BA@A@@A@@B@@A@AB@B@BB@@BB@@B@@@DB@ABC@BDA@A@@BAA@@A@AAA@AD@A@BD@DDB@C@@DBBC@A@@AA@A@AB@@@BB@BBCB@@ACCA@@@B@@C@AA@@@A@AAAAC@A@A@@B@BABA@@@A@A@@@A@A@C@C@A@CAC@AAAAA@@DAD@@A@AB@@ADAD@@AB@B@@@D@D@@BDBB@DBD@@BBBBA@ABA@CBEDCBAD@D@DBF@BBBBBB@@BBB@BADB@B@@@B@@BBBAD@BABCB@B@B@@@D@B@@BBDBDBDDBDBDBDBDBBBD@DABABCBA@A@@BC@ABE@@BA@@BADCB@DADABBBABC@@BA@A@@BCAA@ABAB@DABA@ADA@CBABA@A@C@AAAACAABA@AAA@CAABCAA@@ABACAAA@BABA@AAA@A@CAAAA@CAA@AACAAAACA@CBA@A@CBABC@A@EBC@CBADAB@DB@BB@B@B@BBBBBDDD@BB@D@B@DA@CBA@A@ADAB@@A@@@A@AAA@@BA@@@CAAB@B@FAB@DBB@B@BBB@B@BBBBF@D@DDBBB@B@@@BB@@DBD@BB@@B@B@B@@@BADADAB@B@D@@D@B@@D@D@DAB@DBBB@@BBB@@BABA@BB@@B@@B@FBBB@@BB@@B@ACB@BADADB@DBFBDCBA@ABADA@AA@DAB@BABDHBBBDBDBBDD@B@BAD@B@B@B@BB@BB@B@DD@BB@DBBD@DBB@BBB@B@DAD@B@D@B@BBBBBBDBBD@BB@@DBB@BBB@@DBD@BBDBB@BBBD@D@BBBDBB@FA@BBBBF@BBBB@D@B@BBD@B@B@D@D@F@@B@BCBCDA@ABBBBB@DBD@B@@@B@B@BAB@@BD@B@DABAD@@@A@CA@AB@@@B@@@B@BCAABABAB@DB@DABAD@B@@@@B@D@B@D@@@B@@B@@B@@@@B@BAD@@@BB@BBF@BBB@B@BCF@B@DD@BDAF@D@DADABBDAFAFCDCDC@ABCD@DAD@DAB@BABC@@B@BBBBBB@DD@DB@AB@B@@BB@@ABJD@@@D@BA@@BDA@BBA@@BC@@B@@D@B@B@BBB@@D@@@@AAAAAB@D@B@@BD@DAB@B@BBBBH@D@VGHABB@B@DAB@D@DBD@DABABBNDBBDABA@A@BD@DBBAFABBBBFADC@@DBB@A@AD@@BABDBAB@HCDBB@@AD@@DFEH@BCA@@EBAB@@B@@BCBGBGAA@E@A@C@@AAAAAACA@A@EBA@@@@@@B@B@B@@ABCB@AAAAAA@AB@@GBA@A@A@ABABABABCD@@A@@@@B@@C@AB@BDD@BA@@BA@@BE@C@C@CA@@CAA@@B@BA@@B@BBB@BBD@BBD@@BD@D@D@B@DBB@BB@@BA@C@A@AAA@AD@@A@A@ABA@CBCA@ACB@B@B@BAB@BBBAFAD@FCDADABC@C@A@C@A@ABA@A@@@AD@BADABABAB@@A@AB@BABCDA@@@AB@@A@ADABA@CAA@A@CBABB@ABABAAABBBA@ABAAA@@@ABABA@@BA@CBA@EA@@AA@@@@CBA@A@A@@@A@AA@@@A@@@A@@A@@A@@@AAA@AAA@A@@AA@@@@A@CA@A@@AC@AAC@A@AAC@@CACACAAA@@C@AACA@A@@@EAACCAC@C@C@@AA@ACCACCCCA@AACAAABA@CBABA@C@A@AAACAAAAAAAAAAAAAACAA@AA@AAAA@@A@A@@CEACEC@@@EACA@ACAAEEGEA@@A@AAAACB@BCA@BA@@@A@@@AAA@@AA@@A@A@A@@AA@AA@AAA@A@AA@C@A@@ACCC@A@A@CBA@A@ABCAABADAD@@@BC@C@ABC@A@ABABA@AB@DCB@BCBABA@EBGDABAB@BA@@B@DABA@AAA@@BC@@@CDA@C@@BABABAFADADABA@AB@B@B@F@D@BFD@@BB@BBBBB@FBB@BB@BBB@BDAB@BB@BB@@BF@BBB@DBB@@D@@@@DBDBB@B@DBBBFDHBBBDDH@BABADCDA@BBBF@B@D@BAFAD@B@BBB@BDBB@B@BAB@B@FBBBFDFDBBDD@@D@BAD@D@BBBBDB@BBAD@BAD@B@DBB@DBB@BD@BDB@BBD@B@BBDBD@FAFBBADA@AB@BAF@DA@@B@BB@B@B@BBABCB@DBBBDDFB@@BABA@C@ADBBBB@D@DDBABBFDDD@H@JADAH@DAHC@GCGECCCACB@BABADCDABAFADCDB@@@BBBBDD@D@D@BA@@B@B@B@AA@@@@B@B@B@BBBADAD@BA@AB@@DD@BB@@BBB@A@A@A@@@AB@BABABABABCBABCAE@A@@BC@A@A@CB@D@BBB@@BB@@A@@@@@AB@BB@BAF@DAD@BAFAF@FABAB@DA@BDBBA@A@C@CD@DA@AABA@AA@@@AA@AA@@BA@@B@@ABBB@B@@@BBB@@BB@@BB@B@B@@BC@@BA@@BABA@@BAB@@AB@BB@@@D@AD@BBFBBBB@BBB@@BB@BBBAB@BA@@B@@B@@@BB@@@BB@BBA@@B@BA@A@@@ABBB@B@B@@@BA@@BB@BB@BBBBB@@AB@@AB@@@BBBBBB@BA@@D@@@BBB@B@@@BAB@BBB@@DB@BBBBBD@BB@@B@B@B@B@BABA@@B@@BBB@@B@B@B@BBBB@@B@@AB@BBB@@@B@@B@D@@AB@F@@@B@B@@BABAD@BBBBBBB@BAB@@C@CBABCBBF@DDDBBBBDBFDBBDDBBBBD@@@@B@B@D@DEDABBDBBBDDBBBBBBADADADBBDBBBBBA@CDAD@BAACAAAAA@CB@AAA@ADAD@DABCBC@CDCBAD@BABC@CAAAC@C@AAAA@@A@A@A@ABABA@@@AA@@@@@@@AAEA@@@A@A@A@@@A@AB@DAB@@A@AC@BABA@ABABA@@@A@ABA@@@AAC@A@@BAD@D@B@DCDAF@B@BA@A@ABADC@CDABA@A@@@CBA@C@AD@@BBBB@BAB@D@BBBAD@@@BBBD@BBBBBD@BB@@B@BA@@BABAB@BABD@BB@@B@@ABBBD@B@BBBADB@@BBBBD@BBB@B@@@B@B@@@B@BDBBB@BBB@@@BBF@@@F@BB@@@DB@@@B@BB@@@@BA@@@ACA@A@@AC@@@CBAB@@@BAAA@ABA@@@C@@@@@ABA@AAA@@A@DGDCBEFAD@BBFBFCDAB@D@DB@@@AB@B@BA@@@C@A@@A@@@@A@@@@@AJGBCLD@@B@B@B@B@N@D@B@BBB@DBD@@@BADA@AB@D@@BB@@@BAB@@A@@BAB@B@@AB@@@BA@C@@AA@A@A@@BAD@BAD@DA@@BADADA@@B@@@@B@@@@BAB@@@@@@@@@@AB@B@@@B@BBB@@@B@@@B@BD@@DB@@BB@@A@@@A@@B@@@BAB@B@@@B@@@D@@B@BB@@@B@@CA@AA@@@@B@@@BBB@DA@@@@@@CAA@A@@C@@@@B@B@B@@A@CA@AAA@A@A@@ABA@@B@@A@AB@@@@DA@@@@BDA@@@@BAB@@B@BA@@@F@B@B@@AB@B@BAB@@@B@B@B@@@BA@ABAA@B@@@@@@B@@@@B@@@B@@@@@@BA@@@@@B@B@B@@@BBB@B@BCD@B@B@B@B@@ABAD@@BB@@@B@@@BB@BABBBADB@@B@AB@@@BB@B@B@@@@BFAD@@@@@BBB@@@@@@@AA@ADAB@@@BA@A@@DB@@@@BB@@@C@@BC@@B@@B@@BA@@@@@@@@AAAAD@@@@@J@B@@ABC@C@@B@BAB@@@@@BB@B@@BB@@@ABABA@@@BB@@@@A@AB@B@@@BAA@@@@A@@B@@@FAB@BABABABAB@@@B@@@B@DBBA@AB@B@BB@@@BB@B@@@@@BA@A@@D@BB@@DBB@@@@@@@DA@@B@@@@@BBBBB@BBD@@@F@B@DA@@@@@ADAB@@@@ABA@@DAB@B@B@B@B@B@@@D@BB@@BBBBBB@FBB@B@BABA@@B@@BD@@@@BBB@BBB@@@DBDDB@@@DBBBB@@@D@BABA@A@C@AAAA@AA@@@A@@AC@@@A@ABA@@B@BA@AB@@@AA@C@G@A@@@AB@D@B@DAB@@@DA@@AA@A@@B@BA@@BA@ABC@@@A@C@AAA@C@A@@@A@ABA@@D@B@B@@@@B@@D@B@BC@@D@BA@AAA@C@@B@D@@A@@@@@@@AAAAA@A@@@A@ADC@@B@@@@@BA@A@@BB@@BA@@@AB@DB@A@A@AB@@@BA@@@@@ADC@@AAA@@AB@@ABCAA@@@AB@@A@C@@BA@ABA@AB@@AAAABA@A@AA@@@A@@B@@@@A@@A@AB@@A@@ABC@@@ABA@C@A@C@@AAAA@AA@DCDC@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@A@@A@@@@A@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@AA@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@AA@@@@@@@@@@@@BA@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@AA@@@@@@A@@@@@@A@@A@@@@@@@@@@@A@@@@@@@@@@@@@A@@B@@@@@@@@B@@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@AA@@@@@@@@@A@@@@@@@@@@B@@@@AB@@@@@@@B@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@AA@@@@@@@@@@@@@@@@A@@@@@@@A@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@@@@A@@@@@@B@@@@A@@@@@@B@@@@@BA@@@@@@@@@@@AB@@@@@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@@@B@D@@@B@@@@AB@BA@AB@D@@@@@@@B@B@@@@@@@@@@B@@@@@@@@@@@@@B@BB@@@@@@A@@@@@@@@@@@@B@@@@AB@@@@@@@B@BA@@@@@@@@@@B@@@B@@A@@A@@@@@@A@AD@B@BBBB@@B@@A@@B@@@@B@B@@@B@B@B@@@@@BB@@BBBD@@AB@@@@BBB@BB@D@BAD@@@@@@BB@FA@AB@A@BA@@B@@@B@B@@@@A@AFAD@@BBBDA@@@A@CE@BGA@CAACB@@@@@@@HCJEBCCGAA@ABAPE@A@@GIAAACAIEECACCG@KFED@@EDCBED@@@@A@@@GFABQDMAKGACCI@EDGBABCDADGBCBC@A@EAE@@@AAACEEGAA@@BABC@@@AAAA@AC@A@@ACCGA@@@ACECGGA@@A@A@@CACAC@@A@@@AB@@AD@@@BB@@FBDG@@@@@AA@AB@AAC@@BABA@A@@@@CAAB@@C@@A@@@A@A@@@@A@@@A@@@@A@@B@@@BCBABA@@@A@@@@BA@A@@@A@@CB@@@B@@@@@@CBABA@@@BB@B@@AB@@@B@@@B@@A@AC@A@AAA@@@@CA@@@@CBCAA@@@@@@@BC@@@@@@@@@@@@@@AAEAA@AAE@G@A@@A@@@ICI@@@@A@A@@@BA@@@A@A@@CAABC@@@A@@BA@A@AAA@@@@@@BC@@@A@@A@AC@@@AAA@AB@@A@C@AA@@A@@AB@@AAA@@A@BC@@@@A@@@@@@@@@@@@@@@@@@C@CAA@@@@@@AA@AB@@@@@@@@@@@@@@@@@@@@CA@@A@@@@C@@ABA@@CA@@A@@@E@@@@@AA@@@@@@@@@@B@@@@@@AA@@AAA@@@@@@@@CB@@@B@BB@@B@BBB@@AB@@AD@BABA@@BAB@@@@@B@@B@@B@B@BAD@B@@B@@@@BBB@@@BA@@@BB@BBBA@@B@@@@B@@@@B@@@@A@A@@@@@C@AB@B@@@B@@@@@BBB@BDF@B@@ABB@@BBBBB@@ABABA@A@A@E@@B@@@@@@@@BDB@@BADAB@@C@ABC@AAFEAA@@A@AD@@A@C@K@@CBE@@@@@@@@@ABASCCA@A@ABABCBE@@BAB@@@B@@@DD@@@@B@BADA@ABA@ABABA@AA@@@BA@A@@@AAA@C@C@@A@A@CA@@@@@A@@@A@@@@@@@@@A@A@A@@AAAAAA@C@@DAB@@BDA@@@A@@@A@@BC@@BABA@A@A@@@A@@@A@@@AB@@A@@A@@@A@CA@A@A@@A@@@A@@@A@@CAA@@@@A@C@@@ABA@@@@A@@A@A@A@A@@CAAAAAAAA@@A@EAC@@@@@A@@@CA@@@@@@A@@@@@@@@@@@A@@@@A@@@@@@A@@@@@@@@A@@A@@@@@@@@@@@@@@@@@A@@@@@@@A@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@AA@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@A@@A@@@@@@@@@B@@@@A@@@@@@B@@@@@@@@A@@@@@@@A@@A@@@@@@@BC@@@@@@@@@@B@@@@@@@@@@@@A@@B@@A@@@@B@@@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@AA@@AA@@@@A@@@@@@@@@@@@A@@@@@A@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@BA@@@@@@@@@@@@@@@A@@@@@@@@AA@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@AA@@@@@@@A@@@@@@@@@@@@@AA@@@@AAA@@@@@@@@A@@@@@@A@@@@@@@@@@@A@A@@@@@@@@@A@@AA@@@A@@@AB@@@@@@@@A@@@@@@@@@AB@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@@@@@@A@@@A@@AA@@AA@@@@@A@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@@@A@@@@@@@@@A@@@@@@@A@@@AA@@@@A@@@@@@BA@@@@@@@@A@AA@@@@A@@A@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@ABA@A@CCCAAC@@ABCBCDAB@FBHD@@B@BCB@BAB@@EFADE"],"encodeOffsets":[[115291,22777]]}}],"UTF8Encoding":true});}));