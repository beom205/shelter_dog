(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('宝山区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"230506","properties":{"name":"宝山区","cp":[131.401589,46.577167],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CDA@BB@BB@@BB@@@@@@B@@@@@@@@B@@B@@@@@@AB@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@@@@@@@B@@@@@@@@@B@@@@B@BD@B@B@B@@AB@@@B@@@BB@@BB@@@@BB@IB@B@B@B@B@D@B@@@B@@B@B@BB@@B@B@B@B@B@@@B@BBB@B@B@B@@@BB@@@@@B@@@@BB@@BBBB@@@B@@BB@@@BB@AB@@@D@@@@@B@@A@@@AA@@A@A@A@A@@@A@ABA@A@A@AAA@@@A@@BAD@@A@E@CAEAA@@B@@@@AB@@@@@BA@@@BBB@B@BBDB@@DBB@@@BBB@@B@@@@@@@B@@@B@@@@@BB@@@@B@@A@CAA@A@A@A@CBA@ABCBABA@C@@B@@DDBD@@BB@@@@@B@@@BB@@@@B@@@B@@@BB@B@DB@@@@@BAB@@@B@B@B@B@@AB@B@BA@AB@@A@@@BBB@@BBBDBBBD@BB@@BB@@@BA@@@A@A@A@@@EAA@@@AB@B@@@@AB@BA@@B@@@@@BB@@@@BB@@@B@@@BBBB@@BB@@DBB@@@B@B@H@DAF@@@@A@@@@BA@@@@BA@AB@@@BA@@@@B@@A@@@AB@@A@@BAB@@@B@@CB@DABAB@DADADA@@@@BAAE@@@@@A@A@@AA@@@A@@@A@AB@@A@@@AB@DA@@B@@@@@B@HAH@B@D@@@A@@B@@@@@@@@@@@B@B@@DDBBB@BBDBB@B@@@@BBB@B@B@BA@@B@@A@@B@@@B@@@@B@@@B@@@BABA@@BAB@@AB@@@@A@@@@BA@BB@@@BB@@@B@@@B@B@@@BABB@B@B@B@D@B@D@D@B@B@D@B@DBB@@@A@CBMFMD@B@B@@@B@@AB@BRFHD@@AB@@AB@BAAA@AAC@AAA@AAA@A@@B@@@B@@B@BBD@BBD@@BB@@@@BA@AB@@ABB@D@@@B@BA@@B@@@BA@@B@BAB@B@@@@@BBD@BB@@B@B@B@@@BB@@BBDB@BB@B@BBB@B@BDB@@@@@@BDDBB@BAB@@AB@DBA@@B@@@FAVCHCLEFALDJBH@HAHGJINGFAD@FDHFJFRBFAFCDGHADC@EBCBATDF@DABCBETKFADCDEDEDE@GCM@OFWJMJIZOH@J@F@DABAB@HBHDLDJBJDJBB@ABA@A@@B@@FB@BCD@@@B@B@@BB@@@BF@B@DA@@LCLCBAJFB@DC@CDE@EJ@B@@C@@F@DAB@N@L@DCDC@ACCAABACAAAAAC@AA@AA@@AAA@AACAC@A@AAAAAACA@@AA@A@A@@@A@@@A@A@@@A@@@BA@A@@A@@@A@ABA@@@@AA@@AA@A@C@@@@@A@@AA@@@A@BA@@B@@@BA@@A@AA@@@@@@A@@@@AA@A@@@@@@@@@@A@@B@@@@@@@@@@A@@AA@@@@@@@@@AB@@@@@@@@@AA@@@@@A@@B@@@@@BA@BBA@@@@@@@@@@@@@@AA@@@ATU~TFRXA@S@W@OiaDvu@Q_H@M]JAlA@@@BA@@@@@@@@@@@@@@@A@@@@@@A@@A@@@@@@@@@@A@@AA@@@@@@@BA@@@@@@@@@@@@A@@@@@@@@@A@@@@B@@@@@@@@@@@A@@A@@@@@@@BA@@@@A@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@AA@@@@@A@@@@@@@A@@@@@@@@@@@@@@@BA@@@@@@AA@@A@@@@AB@@@@@A@@A@@A@@@@@@A@@@@@@@@@AB@@@@@@@A@@@@@A@AAA@@@A@@@AA@@@@@@AA@@@@@A@@@@AA@@A@@@@AA@@@@@@AB@@@@@@@@@@@@@@@@@@@@@AA@@@@@@@@A@@@@@@@A@@@@@@@@A@@@@B@@@@A@@@@@@@@@@@@@@@@A@@@@@@@@@A@@@@A@@@@@@@@@@@@AA@@@@@A@@@@A@@A@@@@@@@@@@AA@@@@AA@@@@@@@@@@@@@@A@@B@@@@@@@@@@A@@@@AB@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@@A@@A@@@@@@@@@@@@BA@@@@@@@@@@@A@@@@@@@B@@@@@@@@A@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@B@@A@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@A@@@@A@@@@@@@@@A@@A@@@@@@@@A@@@@@@AA@@@@@@AB@@@@@@@A@@@@@@A@@@@@@@A@@@@A@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@A@@@@A@@@@@@B@@@@@A@@@@@@@@AB@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@AA@@@@@@@AA@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@A@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@AB@BA@ADADABAAC@A@AACACCC@CCA@A@ADBD@F@D@D@DABCDABCFBBBFABC@@E@C@@AB@BABACACDCBEFADCBCBE@ACAABADADCDADA@AGB@@ACAAC@CBABADGBA@CGCCCE@C@C@CD@B@@BD@@ABAF@JAHBH@JEHCJABACCK@M@WBQFGDAF@DAD@FAH@FAFA@@@@@@@@@@@@@A@@@@@A@@@B@@@@@@@@@@A@@@@@@@@@@A@@@@@A@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@AA@@@@@A@@@@@AB@@A@A@@@@@A@@@@@@@@@@@B@@B@@A@@@@@@A@@A@@@@@@@@@@@@B@@@@@@A@A@@@@@@@@@@@B@@@@@@@A@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@A@@@@@A@@@@@A@AB@@@@@@@@AAA@@A@@AA@@@@@@@A@@A@@@@@@@A@@@@A@@@@@@@A@@AA@@AA@@@@A@@@@@@@@@AA@@@@@@@@AB@@@@@@@@@A@@@@@@A@@@@A@@@@A@@B@@@A@@@@@@@@A@@@@@AA@@@@A@@@@@A@@@A@@@A@@@@@@@@@@A@@A@@@AB@@A@@@AA@@A@@@A@@@@@@@A@@@A@@@@@A@@A@@@B@@A@@@A@A@C@A@A@@@A@@BA@@@AB@@A@AB@@A@@@A@@@@@A@CB@@A@@@ABA@@@A@AB@@@@ABA@@@A@@@AB@@@@A@@@A@@@A@@@A@@@@@A@@@A@@@@@@@A@@B@@@@@@@B@@@B@@@@@@@B@B@@@B@@@B@@@@A@@@@BA@@@@@AB@@@B@@B@@B@@@@@B@@@@BB@@@B@@BB@@@@@B@@@B@@@@@@@BC@@@@@A@@@B@@B@@@BBB@@@B@B@@@@@B@@B@@BBBB@BB@@B@@B@@@@BB@B@B@B@B@@@@AB@@@@@BB@BBB@BBB@@BDB@@@BB@@B@@@@BB@@@BBB@@A@@@@B@@@@A@@BA@@BA@@B@@AB@@@BAB@@@B@B@@B@@BB@@BB@@B@@@@@BB@@@@BA@A@@@A@@BA@A@@BA@AB@@ABAB@B@B@@@BB@@@@B@@@@@@@@A@@BA@AB@@@B@@A@@@@BA@@@ABAB@@AB@B@B@BAB@@@BA@@B@BAB@@@@@B@B@@@@@@BB@@B@@BBBBDBB@@@BB@@B@@@@@@@@@B@@@@@@@BB@@@@B@@@B@B@@B@@B@@@B@@@@@@BB@@@@@B@@B@@B@BB@@B@@@B@@AB@B@@@@A@@@ABA@@BCBA@ABC@ABAAA@@@A@@@A@@@A@AAA@@AAAA@BAAA@@@@@A@@@@@@@A@@@@@@AA@AA@A@@@A@A@A@A@A@A@@@A@A@AAA@A@AAA@C@A@AAC@A@AAC@A@C@A@A@CAA@@@A@@A@AA@AAA@@@C@A@ABA@C@A@A@E@A@A@A@A@ABA@A@A@A@A@@@@@A@@BA@A@A@AAA@@@CA@@A@A@A@ABA@A@A@A@@@A@A@A@AAA@AAA@C@ABA@A@C@A@A@@@ABA@@@A@@BA@@@A@@@@B@@B@@B@B@@@B@@ABABA@A@@BA@A@@@A@@@@@A@@@@B@@@@AB@@A@ABA@AB@@A@@@@B@@@B@@@@@@@B@@@B@@@@@@@BB@A@@@@B@@A@A@E@A@A@A@A@A@A@@@A@A@A@A@A@@@A@A@A@A@A@@@C@ABGD@B"],"encodeOffsets":[[134454,47612]]}}],"UTF8Encoding":true});}));