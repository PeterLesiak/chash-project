// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser} from "@lezer/lr"
import {csharpHighlight} from "./highlight"
const spec_identifier = {__proto__:null,namespace:8, class:14, extends:18, bool:28, byte:30, sbyte:32, short:34, ushort:36, int:38, uint:40, long:42, ulong:44, double:46, float:48, decimal:50, string:52, char:54, void:56, object:58, typeof:60, sizeof:62, null:64, true:66, false:68, if:70, else:72, while:74, for:76, foreach:78, do:80, switch:82, case:84, default:86, try:88, catch:90, finally:92, lock:94, goto:96, break:98, continue:100, return:102, throw:104, public:106, private:108, internal:110, protected:112, static:114, readonly:116, sealed:118, const:120, fixed:122, stackalloc:124, volatile:126, new:128, override:130, abstract:132, virtual:134, event:136, extern:138, ref:140, out:142, in:144, is:146, as:148, params:150, arglist:152, makeref:154, reftype:156, refvalue:158, this:160, base:162, using:164, struct:166, interface:168, enum:170, delegate:172, checked:174, unchecked:176, unsafe:178, operator:180, explicit:182, implicit:184, yield:186, partial:188, alias:190, global:192, assembly:194, module:196, type:198, field:200, method:202, param:204, property:206, typevar:208, get:210, set:212, add:214, remove:216, where:218, from:220, group:222, join:224, into:226, let:228, by:230, select:232, orderby:234, on:236, equals:238, ascending:240, descending:242, nameof:244, async:246, await:248, when:250, or:252, and:254, not:256, var:258, dynamic:260}
export const parser = LRParser.deserialize({
  version: 14,
  states: "$zQ]QPOOP,VOPOOO,_QPO'#CgO,fQPO'#ChOOQO'#Fe'#FeOOQO'#Fk'#FkOOQO'#Fx'#FxOOQO'#FW'#FWOOQO'#F_'#F_OOQO'#FX'#FXQ]QPOOO,mQPO'#C_O,rQPO'#CbOOQO'#Ci'#CiPOOO'#C]'#C]POOO)CAP)CAPOOQO,59R,59RO,wQPO,59ROOQO,59S,59SO-OQPO,59SOOQO-E9V-E9VOOQO'#Ca'#CaOOQO,58y,58yOOQO'#Cd'#CdO-VQPO,58|OOQO1G.m1G.mOOQO1G.n1G.nO8]QPO1G.hOOQO'#Cf'#CfOOQO7+$S7+$S",
  stateData: "8h~O$OOS$PPQ$QPQ~OSZOV[O^]O_]O`]Oa]Ob]Oc]Od]Oe]Of]Og]Oh]Oi]Oj]Ok]Ol]Om]On]Oo]Op]Oq]Or]Os]Ot]Ou]Ov]Ow]Ox]Oy]Oz]O{]O|]O}]O!O]O!P]O!Q]O!R]O!S]O!T]O!U]O!V]O!W]O!X]O!Y]O!Z]O![]O!]]O!^]O!_]O!`]O!a]O!b]O!c]O!d]O!e]O!f]O!g]O!h]O!i]O!j]O!k]O!l]O!m]O!n]O!o]O!p]O!q]O!r]O!s]O!t]O!u]O!v]O!w]O!x]O!y]O!z]O!{]O!|]O!}]O#O]O#P]O#Q]O#R]O#S]O#T]O#U]O#V]O#W]O#X]O#Y]O#Z]O#[]O#]]O#^]O#_]O#`]O#a]O#b]O#c]O#d]O#e]O#f]O#g]O#h]O#i]O#j]O#k]O#l]O#m]O#n]O#o]O#p]O#q]O#r]O#s]O#t]O#u]O#v]O#wSO#xSO#ySO$UQO$WRO$YVO$ZVO$[VO$]VO$^VO$`TO$aTO$bTO$cTO$dTO$eTO$fTO$gTO$hTO$iTO$jTO$kTO$mUO$nUO$oUO$pUO$qUO$rUO$sUO$tUO$uUO$vUO$wUO$xUO$yUO$zUO${UO$|UO$}UO%OUO%PUO%QUO%RUO%SUO%TUO%UUO%VUO~O$P^O$Q^O~O$T`O~P]O$VbO~P]O$SeO~O$SgO~O$TiO~P]O$VjO~P]OXkOSUaVUa^Ua_Ua`UaaUabUacUadUaeUafUagUahUaiUajUakUalUamUanUaoUapUaqUarUasUatUauUavUawUaxUayUazUa{Ua|Ua}Ua!OUa!PUa!QUa!RUa!SUa!TUa!UUa!VUa!WUa!XUa!YUa!ZUa![Ua!]Ua!^Ua!_Ua!`Ua!aUa!bUa!cUa!dUa!eUa!fUa!gUa!hUa!iUa!jUa!kUa!lUa!mUa!nUa!oUa!pUa!qUa!rUa!sUa!tUa!uUa!vUa!wUa!xUa!yUa!zUa!{Ua!|Ua!}Ua#OUa#PUa#QUa#RUa#SUa#TUa#UUa#VUa#WUa#XUa#YUa#ZUa#[Ua#]Ua#^Ua#_Ua#`Ua#aUa#bUa#cUa#dUa#eUa#fUa#gUa#hUa#iUa#jUa#kUa#lUa#mUa#nUa#oUa#pUa#qUa#rUa#sUa#tUa#uUa#vUa#wUa#xUa#yUa#|Ua$UUa$WUa$YUa$ZUa$[Ua$]Ua$^Ua$`Ua$aUa$bUa$cUa$dUa$eUa$fUa$gUa$hUa$iUa$jUa$kUa$mUa$nUa$oUa$pUa$qUa$rUa$sUa$tUa$uUa$vUa$wUa$xUa$yUa$zUa${Ua$|Ua$}Ua%OUa%PUa%QUa%RUa%SUa%TUa%UUa%VUa$TUa$VUa~O$SlO~O$Q$P$S$O$p~",
  goto: "%r$mP$nP$qP$y$qP$|P%P$q$q$qPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP$q%SPPPPP%bPPPPP$qPPPPP%jPPPPPPPPPPPP%jR_P]WOQRYacRfZRh[RmkQYOQaQQcRVdYac]XOQRYac]VOQRYac",
  nodeNames: "⚠ Comment Root Namespace Keyword NamespaceName Class Keyword ClassName Keyword ExtendsName Block Group Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword String Number Char Punctuation",
  maxTerm: 191,
  propSources: [csharpHighlight],
  skippedNodes: [0,1],
  repeatNodeCount: 1,
  tokenData: "5Z~R!RX^$[pq$[qr%Prs%ftu&ouv'dvw'qwx(Wxy)dyz)iz{)n{|){}!O*b!O!P*w!P!Q+w!Q!R-z!R![.c![!]/t!^!_/y!_!`0h!`!a0}!a!b1l!c!}&o!}#O2Z#P#Q2`#Q#R2e#R#S&o#T#o&o#o#p2r#p#q2w#q#r3^#r#s3c#y#z$[$f$g$[$g#BY&o#BY#BZ3h#BZ$IS&o$IS$I_3h$I_$I|&o$I|$JO3h$JO$JT&o$JT$JU3h$JU$KV&o$KV$KW3h$KW&FU&o&FU&FV3h&FV;'S&o;'S;=`'^<%lO&o~$aY$O~X^$[pq$[#y#z$[$f$g$[#BY#BZ$[$IS$I_$[$I|$JO$[$JT$JU$[$KV$KW$[&FU&FV$[~%UQ$m~!O!P%[!_!`%a~%aO$]~~%fO$w~~%kW#w~OY%fZr%frs&Ts#O%f#O#P&Y#P;'S%f;'S;=`&i<%lO%f~&YO#w~~&]SOY%fZ;'S%f;'S;=`&i<%lO%f~&lP;=`<%l%f~&tW$S~tu&o!Q![&o!c!}&o#R#S&o#T#o&o$g;'S&o;'S;=`'^<%lO&o~'aP;=`<%l&o~'iP$s~!_!`'l~'qO$e~~'vQ${~vw'|!_!`(R~(RO%P~~(WO$g~~(ZVOY(pZw(px#O(p#O#P(}#P;'S(p;'S;=`)^<%lO(p~(uP#y~wx(x~(}O#y~~)QSOY(pZ;'S(p;'S;=`)^<%lO(p~)aP;=`<%l(p~)iO$W~~)nO$V~~)sP$o~!_!`)v~){O$a~~*QQ$q~{|*W!_!`*]~*]O%U~~*bO$c~~*gQ$r~}!O*m!_!`*r~*rO%V~~*wO$d~~*zP!Q![*}~+SR#x~!Q![*}!g!h+]#X#Y+]~+`R{|+i}!O+i!Q![+o~+lP!Q![+o~+tP#x~!Q![+o~+|R$p~z{,V!P!Q-^!_!`-u~,YTOz,Vz{,i{;'S,V;'S;=`-W<%lO,V~,lVOz,Vz{,i{!P,V!P!Q-R!Q;'S,V;'S;=`-W<%lO,V~-WO$Q~~-ZP;=`<%l,V~-cS$P~OY-^Z;'S-^;'S;=`-o<%lO-^~-rP;=`<%l-^~-zO$b~~.PU#x~!O!P*}!Q![.c!g!h+]#U#V.t#X#Y+]#l#m/Y~.hS#x~!O!P*}!Q![.c!g!h+]#X#Y+]~.wQ!Q!R.}!R!S.}~/SQ#x~!Q!R.}!R!S.}~/]R!Q![/f!c!i/f#T#Z/f~/kR#x~!Q![/f!c!i/f#T#Z/f~/yO%T~~0OQ$t~!^!_0U!_!`0c~0ZP%O~!_!`0^~0cO$j~~0hO$y~~0mQ$`~!_!`0s!`!a0x~0xO$v~~0}O$^~~1SQ$u~!_!`1Y!`!a1_~1_O$x~~1dP$}~!_!`1g~1lO$i~~1qQ%S~!O!P1w!a!b1|~1|O$[~~2RP%R~!_!`2U~2ZO$k~~2`O$Y~~2eO$Z~~2jP$z~!_!`2m~2rO$f~~2wO$U~~2|Q$|~!_!`3S#p#q3X~3XO$h~~3^O%Q~~3cO$T~~3hO$n~~3oh$S~$O~X^$[pq$[tu&o!Q![&o!c!}&o#R#S&o#T#o&o#y#z$[$f$g$[$g#BY&o#BY#BZ3h#BZ$IS&o$IS$I_3h$I_$I|&o$I|$JO3h$JO$JT&o$JT$JU3h$JU$KV&o$KV$KW3h$KW&FU&o&FU&FV3h&FV;'S&o;'S;=`'^<%lO&o",
  tokenizers: [0],
  topRules: {"Root":[0,2]},
  specialized: [{term: 142, get: (value) => spec_identifier[value] || -1}],
  tokenPrec: 1076
})