var _0xcf96=["\x68\x74\x74\x70\x3A\x2F\x2F\x6C\x69\x76\x65\x2E\x69\x73\x73\x6F\x75\x73\x61\x2E\x6F\x72\x67\x3A\x38\x30\x30\x30\x2F\x6C\x69\x76\x65","\x6D\x65\x64\x69\x61\x53\x74\x61\x74\x75\x73","\x73\x74\x6F\x70\x41\x75\x64\x69\x6F","\x69\x73\x50\x6C\x61\x79\x69\x6E\x67","\x6D\x79\x61\x75\x64\x69\x6F","\x6D\x79\x61\x75\x64\x69\x6F\x55\x52\x4C","\x70\x6C\x61\x79","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65\x49\x6E\x74\x65\x72\x76\x61\x6C","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x64\x69\x73\x70\x6C\x61\x79","\x73\x74\x79\x6C\x65","\x70\x6C\x61\x79\x42\x75\x74\x74\x6F\x6E","\x6E\x6F\x6E\x65","\x61\x63\x74\x69\x76\x69\x74\x79\x49\x6E\x64\x69\x63\x61\x74\x6F\x72","\x62\x6C\x6F\x63\x6B","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x74\x65\x78\x74\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x6C\x6F\x61\x64\x69\x6E\x67\x2E\x2E\x2E","\x74\x69\x6D\x65\x75\x70\x64\x61\x74\x65","\x63\x75\x72\x72\x65\x6E\x74\x54\x69\x6D\x65","\x3A","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x65\x72\x72\x6F\x72","\x6D\x79\x61\x75\x64\x69\x6F\x20\x45\x52\x52\x4F\x52","\x6C\x6F\x67","\x63\x61\x6E\x70\x6C\x61\x79","\x6D\x79\x61\x75\x64\x69\x6F\x20\x43\x41\x4E\x20\x50\x4C\x41\x59","\x77\x61\x69\x74\x69\x6E\x67","\x73\x74\x6F\x70\x42\x75\x74\x74\x6F\x6E","\x70\x6C\x61\x79\x69\x6E\x67","\x65\x6E\x64\x65\x64","\x73\x74\x6F\x70","\x53\x74\x72\x65\x61\x6D\x69\x6E\x67\x20\x66\x61\x69\x6C\x65\x64\x2E\x20\x50\x6F\x73\x73\x69\x62\x6C\x79\x20\x64\x75\x65\x20\x74\x6F\x20\x61\x20\x6E\x65\x74\x77\x6F\x72\x6B\x20\x65\x72\x72\x6F\x72\x2E\x20\x52\x65\x74\x72\x79\x3F","\x63\x6F\x6E\x66\x69\x72\x6D","\x70\x61\x75\x73\x65","","\x6D\x65\x73\x73\x61\x67\x65","\x30"];var radio={myaudioURL:_0xcf96[0],myaudio:null,isPlaying:false,readyStateInterval:null,playButton:null,stopButton:null,activityIndicator:null,textPosition:null,play:function (){if(media[_0xcf96[1]]==1||media[_0xcf96[1]]==2){media[_0xcf96[2]]();} ;radio[_0xcf96[3]]=true;radio[_0xcf96[4]]= new Audio(radio[_0xcf96[5]]);radio[_0xcf96[4]][_0xcf96[6]]();radio[_0xcf96[7]]=setInterval(function (){if(radio[_0xcf96[4]][_0xcf96[8]]<=2){radio[_0xcf96[11]][_0xcf96[10]][_0xcf96[9]]=_0xcf96[12];radio[_0xcf96[13]][_0xcf96[10]][_0xcf96[9]]=_0xcf96[14];radio[_0xcf96[16]][_0xcf96[15]]=_0xcf96[17];} ;} ,1000);radio[_0xcf96[4]][_0xcf96[21]](_0xcf96[18],function (){var _0x2845x2=parseInt(radio[_0xcf96[4]][_0xcf96[19]]%60);var _0x2845x3=parseInt((radio[_0xcf96[4]][_0xcf96[19]]/60)%60);var _0x2845x4=parseInt(((radio[_0xcf96[4]][_0xcf96[19]]/60)/60)%60);if(radio[_0xcf96[3]]&&radio[_0xcf96[4]][_0xcf96[19]]>0){radio[_0xcf96[16]][_0xcf96[15]]=pad2(_0x2845x4)+_0xcf96[20]+pad2(_0x2845x3)+_0xcf96[20]+pad2(_0x2845x2);} ;} ,false);radio[_0xcf96[4]][_0xcf96[21]](_0xcf96[22],function (){console[_0xcf96[24]](_0xcf96[23]);} ,false);radio[_0xcf96[4]][_0xcf96[21]](_0xcf96[25],function (){console[_0xcf96[24]](_0xcf96[26]);} ,false);radio[_0xcf96[4]][_0xcf96[21]](_0xcf96[27],function (){radio[_0xcf96[3]]=false;radio[_0xcf96[11]][_0xcf96[10]][_0xcf96[9]]=_0xcf96[12];radio[_0xcf96[28]][_0xcf96[10]][_0xcf96[9]]=_0xcf96[12];radio[_0xcf96[13]][_0xcf96[10]][_0xcf96[9]]=_0xcf96[14];} ,false);radio[_0xcf96[4]][_0xcf96[21]](_0xcf96[29],function (){radio[_0xcf96[3]]=true;radio[_0xcf96[11]][_0xcf96[10]][_0xcf96[9]]=_0xcf96[12];radio[_0xcf96[13]][_0xcf96[10]][_0xcf96[9]]=_0xcf96[12];radio[_0xcf96[28]][_0xcf96[10]][_0xcf96[9]]=_0xcf96[14];} ,false);radio[_0xcf96[4]][_0xcf96[21]](_0xcf96[30],function (){radio[_0xcf96[31]]();if(window[_0xcf96[33]](_0xcf96[32])){onConfirmRetry();} ;} ,false);} ,pause:function (){radio[_0xcf96[3]]=false;clearInterval(radio[_0xcf96[7]]);radio[_0xcf96[4]][_0xcf96[34]]();radio[_0xcf96[28]][_0xcf96[10]][_0xcf96[9]]=_0xcf96[12];radio[_0xcf96[13]][_0xcf96[10]][_0xcf96[9]]=_0xcf96[12];radio[_0xcf96[11]][_0xcf96[10]][_0xcf96[9]]=_0xcf96[14];} ,stop:function (){radio[_0xcf96[3]]=false;clearInterval(radio[_0xcf96[7]]);radio[_0xcf96[4]][_0xcf96[34]]();radio[_0xcf96[28]][_0xcf96[10]][_0xcf96[9]]=_0xcf96[12];radio[_0xcf96[13]][_0xcf96[10]][_0xcf96[9]]=_0xcf96[12];radio[_0xcf96[11]][_0xcf96[10]][_0xcf96[9]]=_0xcf96[14];myaudio=null;myaudio= new Audio(radio[_0xcf96[5]]);radio[_0xcf96[16]][_0xcf96[15]]=_0xcf96[35];} };function onError(_0x2845x6){console[_0xcf96[24]](_0x2845x6[_0xcf96[36]]);} ;function onConfirmRetry(_0x2845x8){if(_0x2845x8==1){html5audio[_0xcf96[6]]();} ;} ;function pad2(_0x2845xa){return (_0x2845xa<10?_0xcf96[37]:_0xcf96[35])+_0x2845xa;} ;