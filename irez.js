// Original file: https://bilet.intercity.pl/irez/js/irez.js

// JavaScript Document

function escape_frame()
         {
         if (window != top) 
            {
            alert(location.href);
            top.location.href = location.href+'?checkJS=true';
            }
         }

function show_hide_element(id)
         {
         var styl=this.document.getElementById(id).style.display;
         if (styl=="none")
            {
            this.document.getElementById(id).style.display="block";
            }
         else
            {
            this.document.getElementById(id).style.display="none";
            }
         }







var tab_znakow = new Array("Ą","ą", "Ę","ę", "Ł", "ł", "Ź", "ź", "Ż", "ż", "Ć", "ć", "Ś", "ś", "Ń", "ń", "Ó", "ó");
var pol = new Array("261","263","281","322","324","243","347","378","380","260","262","280","321","323","211","346","377","379");
var pol_2 = new Array("185","230","234","179","241","243","156","159","191","165","198","202","163","209","211","140","143","175");
var bez = new Array("97","99","101","108","110","111","115","122","122","65","67","69","76","78","79","83","90","90"); 
var miesiace = ["1","3","5","7","8","10","12"];





function nrnip() {
var NO = 0;
var OK = 1;
var suma = 0;
var nip = 0;

    if(document.daneFirmy.nip.value.length == 0)
        return OK;

    nip = document.daneFirmy.nip.value.replace(/[^0-9]/g,"");   
    if(nip == 0)    
        return NO;

    wagi = new Array(6,5,7,2,3,4,5,6,7);
	
    for (i = 0; i < 9; i++)
        suma += nip.charAt(i)*wagi[i];
  
    if ((suma%11) != nip.charAt(9)) 
		return NO;

    return OK;
}

function tylko_cyfra(cyfra){
var NO = 0;
var OK = 1;

	if ( isNaN(cyfra) == 0 )
		return OK;
		
	return NO;
}

function telfax_OK(telfax) {
var OK = 1;
var NO = 0;
var dlugosc = 0;
var koniec = true;

    dlugosc = telfax.length;

    if (dlugosc == 0 )
            return OK;

    for ( i  =  0;  i < dlugosc;  i++) {
            if( telfax.charAt(i) == "(" || (isNaN(telfax.charAt(i)) == 0) || telfax.charAt(i) == ")" || telfax.charAt(i) == "-" || telfax.charAt(i) == " " || telfax.charAt(i) == "+") 
                    koniec = true;
            else{ 
                    koniec = false;
                    return NO;
            }
    } 

    return OK;
}

function nipFirmyDaneKlienta_OK(nipfirmy) {
var OK = 1;
var NO = 0;
var dlugosc = 0;
var koniec = true;

    dlugosc = nipfirmy.length;

    if (dlugosc == 0 )
            return OK;

    for ( i  =  0;  i < dlugosc;  i++) {
            if( nipfirmy.charAt(i) == "(" || (isNaN(nipfirmy.charAt(i)) == 0) || nipfirmy.charAt(i) == ")" || nipfirmy.charAt(i) == "-" || nipfirmy.charAt(i) == " ") 
                    koniec = true;
            else{ 
                    koniec = false;
                    return NO;
            }
    } 

    return OK;
}

function  kodpocz_OK(kod) {
var OK = 1;
var NO = 0;
var error = 0;
    var dlugosc = kod.length;
    if(kod.charAt(2) =="-")
    {
        for(i = 0;  i < dlugosc;  i++){
            if (i==0 || i==1 || i==3 || i==4){
                if((kod.charAt(i) >="A" && kod.charAt(i) <="Z") || (kod.charAt(i) >="a" && kod.charAt(i) <="z") || (kod.charAt(i) >="0" && kod.charAt(i) <="9")){
                }
                else{
                    error = error+1;
                }
            }
            if (i==2){
                if((kod.charAt(i) >="A" && kod.charAt(i) <="Z") || (kod.charAt(i) >="a" && kod.charAt(i) <="z") || (kod.charAt(i) >="0" && kod.charAt(i) <="9") || (kod.charAt(i) =="-") || (kod.charAt(i) ==" ")){
                }
                else{
                    error = error+1;
                }
            }
            if (i==5){
                if((kod.charAt(i) >="A" && kod.charAt(i) <="Z") || (kod.charAt(i) >="a" && kod.charAt(i) <="z") || (kod.charAt(i) >="0" && kod.charAt(i) <="9") || (kod.charAt(i) ==" ")){
                }
                else{
                    error = error+1;
                }
            }
        }
    }
    else
    {
        for(i = 0;  i < dlugosc;  i++)
        {
            if((kod.charAt(i) >="A" && kod.charAt(i) <="Z") || (kod.charAt(i) >="a" && kod.charAt(i) <="z") || (kod.charAt(i) >="0" && kod.charAt(i) <="9") || (kod.charAt(i) =="-") || (kod.charAt(i) ==" "))
            {}
            else
            {
                error = error+1;
            }
        }
    }
    if (error>0) 
        return NO;
    else
        return OK;
}
function  kodpocz_OK_pl(kod) {
var OK = 1;
var NO = 0;
var error = 0;
    var dlugosc = kod.length;
    if (dlugosc !=6)
         error = error+1;
         for(i = 0;  i < dlugosc;  i++){
            if (i==0 || i==1 || i==3 || i==4){
                if((kod.charAt(i) >="0" && kod.charAt(i) <="9")){
                }
                else{
                    error = error+1;
                }
            }
            if (i==2){
                if((kod.charAt(i) =="-") || (kod.charAt(i) ==" ")){
                }
                else{
                    error = error+1;
                }
            }
            if (i==5){
                if((kod.charAt(i) >="0" && kod.charAt(i) <="9") || (kod.charAt(i) ==" ")){
                }
                else{
                    error = error+1;
                }
            }
        }

    if (error>0)
        return NO;
    else
        return OK;
}

function poprawny_email(email) {
    
    var flag = false;
    
    var patternEmail=/^[^@\s]+@([a-z0-9\-]+\.)+[a-z]{2,8}$/i;
    
    if (patternEmail.test(email)) {       
        flag = true;
    }
    
    return flag;
        
}

function walidacja_email_nowa(email) {
    var flag = false;
    var patternEmail=/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if (patternEmail.test(email)) {       
        flag = true;
    }
    return flag;
}

function poprawna_domena(inf) {
   var OK = 1;
var NO = 0;
var dlugosc = 0;
   
    var patternDomena=/@([a-z0-9\-]+\.)+[a-z]{2,8}$/i;
  
    dlugosc = document.daneKlienta.domena.value.length;

    if(dlugosc == 0)
            return OK;

    if(patternDomena.test(document.daneKlienta.domena.value)){
            
    }else{
     alert(inf);
            document.daneKlienta.domena.focus();
            return NO;   
    }
    
    return OK; 
   
}

function polskie_znaki_valid(inf) {
            
    var flag = true,
        email = document.daneKlienta.email.value.toUpperCase(),
        dlugosc = email.length; 
    
    if(dlugosc > 0) {
        for(var i = 0;  i < dlugosc;  i++){                        
            if(polska_litera(email.charAt(i) ) == 1 ) {
                flag = false;                                
                break;
            }
        }
        /*
        if(!flag) {
            alert(inf);            
        }
        */
    }
    
    return flag;
}

function dlugosc_pol(dlug) {
var minimalna = 6
var maksymalna = 30
var NO = 0
var OK = 1

    if(dlug < minimalna || dlug > maksymalna)  
	return NO
    else
	return OK
}
function dlugosc_pol_haslo(dlug) {
var minimalna = 8
var maksymalna = 15
var NO = 0
var OK = 1

    if(dlug < minimalna || dlug > maksymalna)  
	return NO
    else
	return OK
}

function polska_litera(litera) {
var NO = 0;
var OK = 1;

    var tab_dl = tab_znakow.length;

    for(j = 0; j <= tab_dl; j++) {
            if(litera == tab_znakow[j] ) { 
                return OK;
            }
    }

    return NO;
}

function tylko_litery(wyraz) {
var OK = 1
var NO = 0

    wyraz = wyraz.toUpperCase();

    var dlugosc = wyraz.length; 

    for(i = 0;  i < dlugosc;  i++){
            if(wyraz.charAt(i) <"A" && wyraz.charAt(i) != "-" && wyraz.charAt(i)  != " " && wyraz.charAt(i) != "." && wyraz.charAt(i) != "&" && wyraz.charAt(i) != "_" ) {
                if(polska_litera(wyraz.charAt(i) ) == 0 ) 
                            return NO; 
            }
            if(wyraz.charAt(i) >"Z" && wyraz.charAt(i) != "-" && wyraz.charAt(i)  != " " && wyraz.charAt(i) != "." && wyraz.charAt(i) != "&" && wyraz.charAt(i) != "_") {  

                if(wyraz.charCodeAt(i) >188) 
                    continue;
                else
                {
                 if(polska_litera(wyraz.charAt(i) ) == 0 ) 
                        return NO;
                else
                   continue;
                }
            }
    }
    var licznik = 0;
    for(i = 0;  i < dlugosc;  i++){
            if(wyraz.charAt(i) == "-" || wyraz.charAt(i)  == " " || wyraz.charAt(i) == "." || wyraz.charAt(i) == "&" || wyraz.charAt(i) == "_") {
                licznik++;
            }
    }
    if (dlugosc > 0)
    if (licznik==dlugosc)
    {
        return NO;
    }
    return OK;
}

function tylko_litery_i_cyfry(wyraz) 
{
    var OK = 1
    var NO = 0

    wyraz = wyraz.toUpperCase();

    var dlugosc = wyraz.length;

    for (i = 0; i < dlugosc; i++) 
    {
        if (wyraz.charAt(i) < "A" && wyraz.charAt(i) != "-" && wyraz.charAt(i) != " " && wyraz.charAt(i) != "." && wyraz.charAt(i) != "&" && wyraz.charAt(i) != "_" && wyraz.charAt(i) != "0" && wyraz.charAt(i) != "1" && wyraz.charAt(i) != "2" && wyraz.charAt(i) != "3"  && wyraz.charAt(i) != "4" && wyraz.charAt(i) != "4" && wyraz.charAt(i) != "5" && wyraz.charAt(i) != "7" && wyraz.charAt(i) != "8" && wyraz.charAt(i) != "9") 
        {
            if (polska_litera(wyraz.charAt(i)) == 0)
                return NO;
        }
        if (wyraz.charAt(i) > "Z" && wyraz.charAt(i) != "-" && wyraz.charAt(i) != " " && wyraz.charAt(i) != "." && wyraz.charAt(i) != "&" && wyraz.charAt(i) != "_" && wyraz.charAt(i) != "0" && wyraz.charAt(i) != "1" && wyraz.charAt(i) != "2" && wyraz.charAt(i) != "3"  && wyraz.charAt(i) != "4" && wyraz.charAt(i) != "4" && wyraz.charAt(i) != "5" && wyraz.charAt(i) != "7" && wyraz.charAt(i) != "8" && wyraz.charAt(i) != "9") 
        {

            if (wyraz.charCodeAt(i) > 188)
                continue;
            else
            {
                if (polska_litera(wyraz.charAt(i)) == 0)
                    return NO;
                else
                    continue;
            }
        }
    }
    var licznik = 0;
    for (i = 0; i < dlugosc; i++) 
    {
        if (wyraz.charAt(i) == "-" || wyraz.charAt(i) == " " || wyraz.charAt(i) == "." || wyraz.charAt(i) == "&" || wyraz.charAt(i) == "_") {
            licznik++;
        }
    }
    if (dlugosc > 0)
        if (licznik == dlugosc)
        {
            return NO;
        }
    return OK;
}

function nie_tylko_litery(wyraz) {
    
    var OK = 1
    var NO = 0

    
    wyraz = wyraz.toUpperCase();

    var dlugosc = wyraz.length; 

    for(i = 0;  i < dlugosc;  i++){        
            
            if(wyraz.charAt(i) <"A" 
                    && wyraz.charAt(i) != "-" 
                        && wyraz.charAt(i)  != " " 
                            && wyraz.charAt(i) != "." 
                                && wyraz.charAt(i) != "&" 
                                    && wyraz.charAt(i) != "_" 
                                        && wyraz.charAt(i) != "\"" 
                                            && wyraz.charAt(i) != "'" 
                            
            ) {                
                if(polska_litera(wyraz.charAt(i) ) == 0 ) 
                            return NO; 
            }
            if(wyraz.charAt(i) >"Z" 
                       && wyraz.charAt(i) != "-" 
                            && wyraz.charAt(i)  != " " 
                                && wyraz.charAt(i) != "." 
                                    && wyraz.charAt(i) != "&" 
                                        && wyraz.charAt(i) != "_" 
                                            && wyraz.charAt(i) != "\""
                                                && wyraz.charAt(i) != "'"
            ) {  

                if(wyraz.charCodeAt(i) >188) 
                    continue;
                else
                {
                 if(polska_litera(wyraz.charAt(i) ) == 0 ) 
                        return NO;
                else
                   continue;
                }
            }
    }
    var licznik = 0;
    for(i = 0;  i < dlugosc;  i++){
            if(wyraz.charAt(i) == "-" 
                        || wyraz.charAt(i)  == " " 
                            || wyraz.charAt(i) == "." 
                                || wyraz.charAt(i) == "&" 
                                    || wyraz.charAt(i) == "_" 
                                        || wyraz.charAt(i) == "\""
                                            || wyraz.charAt(i) == "'"
             ) {
                licznik++;
            }
    }
    if (dlugosc > 0)
    if (licznik==dlugosc)
    {
        return NO;
    }
    return OK;
}

function rok_przestepny(rok) {
var OK = true;
var NO = false;
var  podziel_4 = 0;
var podziel_100 = 0;
var podziel_400 = 0;

    podziel_4 = rok % 4;

    if(	podziel_4 == 0 ) {
            podziel_100 = rok % 100;
            podziel_400 = rok% 400;

            if(podziel_100 != 0 || podziel_400 == 0) {
                            return OK;
                    }
    }

    return NO;
}



function poprawna_podphasla(inf) {
var OK = 1;
var NO = 0; 
var dobryEmail=/^[^@]+@([a-z0-9\-]+\.)+[a-z]{2,4}$/i;

if ((dobryEmail.test(document.podpHasla.email.value)) && (document.podpHasla.login.value.length>5)){
    document.podpHasla.submit();
    }
else {
    alert (inf);
    }
}




function jest_ok(info) 
{
var OK = 1;
var NO = 0; 

    if(document.logowanie.login.value=="" || document.logowanie.haslo.value==""){
        alert(info);

        if(document.logowanie.haslo.value=="")
            document.logowanie.haslo.focus();

        if(document.logowanie.login.value=="")
            document.logowanie.login.focus();

        return NO;       
    }
    document.logowanie.submit();
    
    return OK;
}


function login_Klienta(){

    if (navigator.appVersion.indexOf("MSIE")>0) 
        pol ;
    else 
        pol_2;
    
    bez;

    tekst = document.logowanie.login.value;

    for (var i=0; i < pol.length; i++) {
        regexp = eval("/"+String.fromCharCode(pol[i])+"/g");
        tekst=tekst.replace(regexp,String.fromCharCode(bez[i]));
    }
    document.logowanie.login.value = tekst;
}

function login_Klienta3(){

    if (navigator.appVersion.indexOf("MSIE")>0) 
        pol ;
    else 
        pol_2;
    
    bez;

    tekst = document.podpHasla.login.value;

    for (var i=0; i < pol.length; i++) {
        regexp = eval("/"+String.fromCharCode(pol[i])+"/g");
        tekst=tekst.replace(regexp,String.fromCharCode(bez[i]));
    }
    document.podpHasla.login.value = tekst;
}




function drugie_haslo(logowanie_admin, tekst)
{
    if(document.logowanie_admin.haslo2.value==""){
	alert(tekst)

        if(document.logowanie_admin.haslo2.value=="") 
            document.logowanie_admin.haslo2.focus()
    }
    else
        document.logowanie_admin.submit();
}

function litery_liczby(wyraz) {
var OK = 1
var NO = 0

    
    reg2 = /[0-9]{1,15}/;
    wyn2 = wyraz.match(reg2);
    reg3 = /[a-zA-Z]{1,15}/;
    wyn3 = wyraz.match(reg3);

    if ( wyn2 && wyn3)
        return OK;

    return NO;   
}

function litery_liczby_login(wyraz) {
var OK = 1
var NO = 0

    reg = /^[0-9a-zA-Z\.\_\\\s\\\-\\\&@!]{1,30}$/i;
    wyn = wyraz.match(reg);
    
    if (wyn)
        return OK;

    return NO;   
}

function litery_liczby_spacja(wyraz) {
var OK = 1
var NO = 0

    reg = /^[0-9a-zA-Z\.\_\\\s\\\-\\\&]{1,50}$/;
    reg2 = /[^\\\"\\\']{1,50}$/;
    wyn = wyraz.match(reg);
    wyn2 = wyraz.match(reg2);

    if(!wyn || !wyn2){
        return NO;
    }
    return OK;
}


function nrdok_Klient(inf){
var OK = 1;
var NO = 0;
var dlugosc = 0;

    document.daneKlienta.nrdok.value = document.daneKlienta.nrdok.value.toUpperCase();

    dlugosc = document.daneKlienta.nrdok.value.length;
    if(dlugosc == 0)
            return OK;
    
    reg = /^[A-Z0-9\-\\\s\\\\\/]{1,30}$/;

    wyn = daneKlienta.nrdok.value.match(reg);

    if(!wyn){
        alert(inf);
        document.daneKlienta.nrdok.focus();
        return NO;
    }
  
    return OK;
}    

function adresIP_User(inf){
var OK = 1;
var NO = 0;
var dlugosc = 0;

    dlugosc = document.daneKlienta.adminip.length;
    if(dlugosc == 0)
            return OK;

    reg = /^[0-9\*\:\.\;\\\s]{1,500}$/;
    regC = /^[0-9]{1,500}$/;
    regK = /[.]{1,500}$/;
    regS = /[;]{1,500}$/;
    regD = /[:]{1,500}$/;
 
    wyn = daneKlienta.adminip.value.match(reg);
    wynC = daneKlienta.adminip.value.match(regC);
    wynK = daneKlienta.adminip.value.match(regK);
    wynS = daneKlienta.adminip.value.match(regS);

    if(!wyn || wynC || wynK || wynS){
        alert(inf);
        
        document.daneKlienta.adminip.focus();
        return NO;
    }
  
    return OK;
}
function pociagi_User(inf){
var OK = 1;
var NO = 0;
var dlugosc = 0;

    dlugosc = document.daneKlienta.pociagiKolejObca.length;
    if(dlugosc == 0)
            return OK;

    reg = /^[0-9\;]{1,500}$/;
    regC = /^[0-9]{1,500}$/;
    regS = /[;]{1,500}$/;
 
    wyn = daneKlienta.pociagiKolejObca.value.match(reg);
    wynC = daneKlienta.pociagiKolejObca.value.match(regC);
    wynS = daneKlienta.pociagiKolejObca.value.match(regS);

    if(!wyn || wynC || wynS){
        alert(inf);
        
        document.daneKlienta.pociagiKolejObca.focus();
        return NO;
    }
  
    return OK;
}

function login_Klienta2(inf){
var NO = 0;
var OK = 1;

    if(document.daneKlienta.login.value.length == 0)
        return OK;

    if (navigator.appVersion.indexOf("MSIE")>0) 
        pol ;
    else 
        pol_2;
    
    bez;

    if(dlugosc_pol(document.daneKlienta.login.value.length) == 0 || litery_liczby_login(document.daneKlienta.login.value) == 0){
        alert(inf);
        document.daneKlienta.login.focus();
        return NO;
    }
    return OK;
}

function login_USERA(inf){
var NO = 0;
var OK = 1;

    if(document.daneKlienta.login.value.length == 0)
        return OK;

    if (navigator.appVersion.indexOf("MSIE")>0) 
        pol ;
    else 
        pol_2;
    
    bez;

    tekst = document.daneKlienta.login.value;

    for (var i=0; i < pol.length; i++) {
        regexp = eval("/"+String.fromCharCode(pol[i])+"/g");
        tekst=tekst.replace(regexp,String.fromCharCode(bez[i]));
    }
    document.daneKlienta.login.value = tekst;

    if(dlugosc_pol(document.daneKlienta.login.value.length) == 0 || litery_liczby_spacja(document.daneKlienta.login.value) == 0){
        alert(inf);
        document.daneKlienta.login.focus();
        return NO;
    }
    return OK;
}

function nowehaslo_Klienta(inf){
var OK = 1;
var NO = 0;

    if(document.daneKlienta.haslo.value.length == 0)
        return OK;
  
    if(dlugosc_pol_haslo(document.daneKlienta.haslo.value.length) == 0 ){
        alert(inf);
        document.daneKlienta.haslo.value = "";
        document.daneKlienta.haslo.focus();
        return NO;
    }
    
    return OK;
}

function dodhaslo_Usera(inf){
var OK = 1;
var NO = 0;

    if(document.daneKlienta.haslo2.value.length == 0)
        return OK;
  
    if(dlugosc_pol(document.daneKlienta.haslo2.value.length) == 0 || litery_liczby(document.daneKlienta.haslo2.value) == 0){
        alert(inf);
        document.daneKlienta.haslo2.value = "";
        document.daneKlienta.haslo2.focus();
        return NO;
    }
    
    return OK;
}

function powthasla_Klienta(inf){
var OK = 1;
var NO = 0;

    if(document.daneKlienta.powt_hasla.value == 0)
        return OK;

    if(document.daneKlienta.haslo.value != document.daneKlienta.powt_hasla.value){
        alert(inf);
        document.daneKlienta.powt_hasla.focus();
        return NO;
    }

 return OK;
}

function email_Klienta(inf){
var OK = 1;
var NO = 0;
var dlugosc = 0;

    dlugosc = document.daneKlienta.email.value.length;

    if(dlugosc == 0)
            return NO;

    if(poprawny_email(document.daneKlienta.email.value)== 0){
            alert(inf);
            document.daneKlienta.email.focus();
            return NO;
    }
    
    return OK;
}

function powtemail_Klienta(inf){
var OK = 1;
var NO = 0;

    if (document.daneKlienta.email.value.length != document.daneKlienta.powt_email.value.length){
        alert(inf);
        document.daneKlienta.powt_email.focus();
        return NO;
    }    

    if (document.daneKlienta.email.value != document.daneKlienta.powt_email.value){
        alert(inf);
        document.daneKlienta.powt_email.focus();
        return NO;
    }    
    
    return OK;
}

function poprawna_nazwa(nazwa) {
var OK = 1;
var NO = 0;
var i=0;

var str = nazwa.split(/\s/g);



while(str[i]!=undefined){
   
    if (str[i].length<1){         
        return NO;
    }
    i=i+1;
}
if (i==1){    
    return NO;
}
return OK;

}

function validateImieNazwisko(inf){
var OK = 1;
var NO = 0;

var pattern = /^([a-zA-Z]{1,40}\s*){2,}$/;

    //if(poprawna_nazwa(document.daneKlienta.nazwa.value)== 0){
    if(!pattern.test(document.daneKlienta.nazwa.value)) {
            alert(inf);
            document.daneKlienta.nazwa.focus();
            return NO;
    }
    
    return OK;
}

function hasOtherThanPolishLetters(text) {
    var polishLetters = /[^a-zA-ZĄąĘęŁłŹźŻżĆćŚśŃńÓó\-\s]+/;
    return polishLetters.test(text);
}


function nazwa_daneKlienta(inf){
var OK = 1;
var NO = 0;

var pattern = /^([a-zA-Z]{2,40}\s*){2,}$/;

    if(poprawna_nazwa(document.daneKlienta.nazwa.value)== 0){
    //if(!pattern.test(document.daneKlienta.nazwa.value)) {
            alert(inf);
            document.daneKlienta.nazwa.focus();
            return NO;
    }

    if (hasOtherThanPolishLetters(document.daneKlienta.nazwa.value)) {
            alert(inf);
            document.daneKlienta.nazwa.focus();
            return NO;
    }
    
    return OK;
}

function nazwa_daneKlientaForm(inf){
var OK = 1;
var NO = 0;

    if(poprawna_nazwa(document.listaUzytkFormNazwa.nazwaUzytkownika.value)== 0){
            alert(inf);
            document.listaUzytkFormNazwa.nazwaUzytkownika.focus();
            return NO;
    }
    else{
        document.listaUzytkFormNazwa.submit();
        }
} 

function nazwa_daneKlienta_rezH(inf){
var OK = 1;
var NO = 0;

    if(poprawna_nazwa(document.rkh.dla.value)== 0){
            alert(inf);
            document.rkh.dla.focus();
            return NO;
    }
    return OK;
} 
function jakiwyjazd(){
	if(document.rkh.wyjazdsluzbowy.checked ==  false) {
            alert ("Wyjazd prywatny")
            document.daneKlienta.zgoda.focus();

	}
else
{           alert ("Wyjazd prywatny")
            document.daneKlienta.zgoda.focus();
}
}
function  kod_Klienta_pl(inf, kraj) {
var NO = 0;
var OK = 1;
var dlugosc = 0;

    dlugosc = document.daneKlienta.kodpocztowy.value.length;

    if(dlugosc == 0)
            return OK;
if (kraj>0)
    if (kodpocz_OK(document.daneKlienta.kodpocztowy.value) == 0){
            alert(inf);
            document.daneKlienta.kodpocztowy.focus();
            return NO;
    }
if (kraj==0)
    if (kodpocz_OK_pl(document.daneKlienta.kodpocztowy.value) == 0){
            alert(inf);
            document.daneKlienta.kodpocztowy.focus();
            return NO;
    }

    return OK;
}

function  kod_Klienta(inf) {
var NO = 0;
var OK = 1;
var dlugosc = 0;

    dlugosc = document.daneKlienta.kodpocztowy.value.length;

    if(dlugosc == 0)
            return OK;

    if (kodpocz_OK(document.daneKlienta.kodpocztowy.value) == 0){
            alert(inf);
            document.daneKlienta.kodpocztowy.focus();
            return NO;
    }

    return OK;
}

function nazwa_miasta(inf) {
var NO = 0;
var OK = 1;
var dlugosc = 0;


    dlugosc = document.daneKlienta.miasto.length;

    if(dlugosc == 0)
            return OK;
    else
    if( nie_tylko_litery(document.daneKlienta.miasto.value) == 0) {
            alert(inf);
            document.daneKlienta.miasto.focus();
            return NO;
    }

    return OK;
}

function telefon_Klienta(inf) {
var OK = 1;
var NO = 0;
var dlugosc = 0;

    dlugosc = document.daneKlienta.tel.length;

    if(dlugosc == 0)
            return OK;

    if (telfax_OK(document.daneKlienta.tel.value) == 0){
            alert(inf);
            document.daneKlienta.tel.focus();
            return NO;
    }
    return OK;
}

function fax_Klienta(inf) {
var OK = 1;
var NO = 0;
var dlugosc = 0;

    dlugosc = document.daneKlienta.fax.length;

    if(dlugosc == 0)
            return OK;

    if (telfax_OK(document.daneKlienta.fax.value) == 0){
            alert(inf);
            document.daneKlienta.fax.focus();
            return NO;
    }
    return OK;
}
function nazwaUzytkownikaFirmy(inf){
var OK = 1;
var NO = 0;
    
    if(tylko_litery(document.daneKlienta.nazwafirmy.value)==0){
        alert(inf);
        document.daneKlienta.nazwafirmy.focus();
        return NO;
    }
    return OK;
}

function  kod_Firmy(inf) {
var NO = 0;
var OK = 1;
var dlugosc = 0;

    dlugosc = document.daneKlienta.kodpocztowyfirmy.value.length;

    if(dlugosc == 0)
            return OK;

    if (kodpocz_OK(document.daneKlienta.kodpocztowyfirmy.value) == 0){
            alert(inf);
            document.daneKlienta.kodpocztowyfirmy.focus();
            return NO;
    }

    return OK;
}

function nazwa_miastafirmy(inf) {
var NO = 0;
var OK = 1;
var dlugosc = 0;

    dlugosc = document.daneKlienta.miastofirmy.length;

    if(dlugosc == 0)
            return OK;

 if(dlugosc > 0)   
if( tylko_litery(document.daneKlienta.miastofirmy.value) == 0) {
            alert(inf);
            document.daneKlienta.miastofirmy.focus();
            return NO;
    }

    return OK;
}

function kompletnosc_danychUsera(pracSprzed, idUsera, idAjent, ifPracSprzed, login, email, haslo, powthasla, rodzdoktoz, nrdoktoz, firma, rodzuzytk, imienazwisko, infnrdok, adres, kodpoczt, infkod, miasto, infmiasto, poprpola, inf1, inf2, kodpocztfirmy, infkodpocztfirmy, miastofirmy, infmiastofirmy, polafirmy){
var pola = "";
var koniec = false;

//    if(document.daneKlienta.uzytktypkod.value==pracSprzed && document.daneKlienta.adminip.value.length ==0){
//        alert(ifPracSprzed);
//        koniec=true;
//    }

    if(document.daneKlienta.login.value=="" || dlugosc_pol(document.daneKlienta.login.value.length) == 0){
	pola+=" - " + login + "\n";
	koniec=true;
    }
	
    if(document.daneKlienta.email.value=="" || poprawny_email(document.daneKlienta.email.value) == 0 ){
	pola+=" - " + email + "\n";
	koniec=true;
    }

    if(document.daneKlienta.haslo.value=="" || dlugosc_pol_haslo(document.daneKlienta.haslo.value.length) == 0 || litery_liczby(document.daneKlienta.haslo.value) == 0){
	pola+=" - " +  haslo + "\n";
	koniec=true;
    }

    if(document.daneKlienta.powt_hasla.value=="" || document.daneKlienta.haslo.value != document.daneKlienta.powt_hasla.value){
	pola+=" - " + powthasla + "\n";
	koniec=true;
    }

    if(document.daneKlienta.typdok.value==""){
	pola+=" - " + rodzdoktoz + "\n";
	koniec=true;
    }

    if(document.daneKlienta.nrdok.value=="" || nrdok_Klient(infnrdok) == 0){
	pola+=" - " + nrdoktoz + "\n";
	koniec=true;
    }

    if(document.daneKlienta.firmaid.value==""){
	pola+=" - " + firma + "\n";
	koniec=true;
    }

//    if(document.daneKlienta.uzytktypkod.value==""){
//	pola+=" - " + rodzuzytk + "\n";
//	koniec=true;
//   }

    if(document.daneKlienta.nazwa.value=="" || tylko_litery(document.daneKlienta.nazwa.value) == 0){
	pola+=" - " +  imienazwisko + "\n";
	koniec=true;
    }

   if(document.daneKlienta.ulica.value==""){
	pola+=" - " + adres + "\n";
	koniec=true;
    }

    if(document.daneKlienta.kodpocztowy.value=="" || kod_Klienta(infkod) == 0){
	pola+=" - " + kodpoczt + "\n";
	koniec=true;
    } 

    if(document.daneKlienta.miasto.value=="" || nazwa_miasta(infmiasto) == 0){
	pola+=" - " + miasto + "\n";
	koniec=true;
    } 

//    if(indywidualny(idUsera, idAjent) == 0){
//        koniec=true;
//    }

    if (daneKlienta.uzytktypkod.value==990) {

    if(document.daneKlienta.kodpocztowyfirmy.value=="" || kod_Firmy(infkodpocztfirmy) == 0){
	pola+=" - " + kodpocztfirmy + "\n";
	koniec=true;
    }
    
    if(document.daneKlienta.miastofirmy.value=="" || nazwa_miastafirmy(infmiastofirmy) == 0){
	pola+=" - " + miastofirmy + "\n";
	koniec=true;
    }

    var nip = 0;
    var nazwa = "";
    var adres = "";
    var kod = "";
    var miasto = "";

    nazwa = document.daneKlienta.nazwafirmy.value;
    nip = document.daneKlienta.nipfirmy.value.length;
    adres = document.daneKlienta.ulicafirmy.value;
    kod = document.daneKlienta.kodpocztowyfirmy.value;
    miasto = document.daneKlienta.miastofirmy.value;
    if (nazwa != "" && (nip == 0 || adres == "" || kod == "" || miasto == "")){
        pola+=" - " + polafirmy + "\n";
        koniec=true;
    }
    else {
        if (nip != 0 && (nazwa == "" || adres == "" || kod == "" || miasto == "")){
        pola+=" - " + polafirmy + "\n";
        koniec=true;
        }
        else {
            if (adres != "" && (nip == 0 || nazwa == "" || kod == "" || miasto == "")){
            pola+=" - " + polafirmy + "\n";
            koniec=true;
            }
            else {
                if (kod != "" && (nip == 0 || adres == "" || nazwa == "" || miasto == "")){
                pola+=" - " + polafirmy + "\n";
                koniec=true;
                }
                else {
                    if (miasto != "" && (nip == 0 || adres == "" || kod == "" || nazwa == "")){
                    pola+=" - " + polafirmy + "\n";
                    koniec=true;
                    }
                }
            }
        }
    }
}
    if(!koniec){
        document.daneKlienta.submit();
    }
    else {
        if(pola != ""){
            alert(poprpola + ":\n" + pola);
	}
    }
}

function kompletnosc_danych(kraj, login, imienazwisko, nowehaslo, powthasla, email, adres, kodpoczt, infkod, miasto, infmiasto, rodzdoktoz, nrdoktoz, wyrzgody, infnrdok, poprpola, kodpocztfirmy, infkodpocztfirmy, miastofirmy, infmiastofirmy, polafirmy, polawysylka){
var pola = "";
var koniec = false;
var bladWysylka = false;

    if(document.daneKlienta.login.value=="" || dlugosc_pol(document.daneKlienta.login.value.length) == 0){
	pola+=" - " + login + "\n";
	koniec=true;
    }

    if(document.daneKlienta.nazwa.value=="" || tylko_litery(document.daneKlienta.nazwa.value) == 0 ){
	pola+=" - " +  imienazwisko + "\n";
	koniec=true;
    }

    if(document.daneKlienta.haslo.value=="" || dlugosc_pol_haslo(document.daneKlienta.haslo.value.length) == 0 || litery_liczby(document.daneKlienta.haslo.value) == 0){
	pola+=" - " +  nowehaslo + "\n";
	koniec=true;
    }

    if(document.daneKlienta.powt_hasla.value=="" || document.daneKlienta.haslo.value != document.daneKlienta.powt_hasla.value){
	pola+=" - " + powthasla + "\n";
	koniec=true;
    }

    if(document.daneKlienta.email.value=="" || (poprawny_email(document.daneKlienta.email.value) == 0) ){
	pola+=" - " + email + "\n";
	koniec=true;
    }
    
    if(document.daneKlienta.jesliFirma.checked == false){
   if(document.daneKlienta.ulica.value==""){
	pola+=" - " + adres + "\n";
	koniec=true;
    }

    if(document.daneKlienta.kodpocztowy.value=="" || kod_Klienta_pl(infkod, kraj) == 0){
	pola+=" - " + kodpoczt + "\n";
	koniec=true;
    } 

    if(document.daneKlienta.miasto.value=="" || nazwa_miasta(infmiasto) == 0){
	pola+=" - " + miasto + "\n";
	koniec=true;
    } 
    }


/*
   if(document.daneKlienta.jesliAdresWysylka.checked == true){
    var adresW = "";
    var kodW = "";
    var miastoW = "";


     adresW = document.daneKlienta.ulicaWysylka.value;
    kodW = document.daneKlienta.kodpocztowyWysylka.value;
    miastoW = document.daneKlienta.miastoWysylka.value;

       if(document.daneKlienta.ulicaWysylka.value==""){
            bladWysylka=true;
        }

        if(document.daneKlienta.kodpocztowyWysylka.value=="" || kod_Klienta_pl(kodW,kraj) == 0){
          bladWysylka=true;
        } 

        if(document.daneKlienta.miastoWysylka.value=="" || nazwa_miasta(miastoW) == 0){
          bladWysylka=true;
        } 
        if (bladWysylka==true)
        {
            pola+=" - " + polawysylka + "\n";
            koniec=true;

        }
    }
    */


    var nip = 0;
    var nazwa = "";
    var adres = "";
    var kod = "";
    var miasto = "";

    nazwa = document.daneKlienta.nazwafirmy.value;
    nip = document.daneKlienta.nipfirmy.value.length;
    adres = document.daneKlienta.ulicafirmy.value;
    kod = document.daneKlienta.kodpocztowyfirmy.value;
    miasto = document.daneKlienta.miastofirmy.value;
    if(document.daneKlienta.jesliFirma.checked == true){
        if (nazwa == "" && nip == 0 && adres == "" && kod == "" && miasto == ""){
        pola+= polafirmy + "\n";
        koniec=true;
    }    
    }
    if (nazwa != "" && (nip == 0 || adres == "" || kod == "" || miasto == "")){
        pola+=polafirmy + "\n";
        koniec=true;
    }
    else {
        if (nip != 0 && (nazwa == "" || adres == "" || kod == "" || miasto == "")){
        pola+= polafirmy + "\n";
        koniec=true;
        }
        else {
            if (adres != "" && (nip == 0 || nazwa == "" || kod == "" || miasto == "")){
            pola+= polafirmy + "\n";
            koniec=true;
            }
            else {
                if (kod != "" && (nip == 0 || adres == "" || nazwa == "" || miasto == "")){
                pola+= polafirmy + "\n";
                koniec=true;
                }
                else {
                    if (miasto != "" && (nip == 0 || adres == "" || kod == "" || nazwa == "")){
                    pola+= polafirmy + "\n";
                    koniec=true;
                    }
                }
            }
        }
    }
  if(document.daneKlienta.akceptacja.checked == false){

	koniec=true;
    }

    if(!koniec){
	
            document.daneKlienta.submit();
	
    }
    else {
	if(pola != "")
            alert(poprpola + ":\n" + pola);
     else
         alert(wyrzgody);

    }

}

function kompletnosc_danych2(login, imienazwisko, nowehaslo, powthasla, email, adres, kodpoczt, infkod, miasto, infmiasto, rodzdoktoz, nrdoktoz, wyrzgody, infnrdok, poprpola, kodpocztfirmy, infkodpocztfirmy, miastofirmy, infmiastofirmy, polafirmy){
var pola = "";
var koniec = false;

    if(document.daneKlienta.login.value=="" || dlugosc_pol(document.daneKlienta.login.value.length) == 0){
	pola+=" - " + login + "\n";
	koniec=true;
    }

    if(document.daneKlienta.nazwa.value=="" || tylko_litery(document.daneKlienta.nazwa.value) == 0 || poprawna_nazwa(document.daneKlienta.nazwa.value) == 0){
	pola+=" - " +  imienazwisko + "\n";
	koniec=true;
    }

    if(document.daneKlienta.haslo.value=="" || dlugosc_pol_haslo(document.daneKlienta.haslo.value.length) == 0 ){
	pola+=" - " +  nowehaslo + "\n";
	koniec=true;
    }

    if(document.daneKlienta.powt_hasla.value=="" || document.daneKlienta.haslo.value != document.daneKlienta.powt_hasla.value){
	pola+=" - " + powthasla + "\n";
	koniec=true;
    }

    if(document.daneKlienta.email.value=="" || (poprawny_email(document.daneKlienta.email.value) == 0) ){
	pola+=" - " + email + "\n";
	koniec=true;
    }
   if(daneKlienta.uzytktypkod.value!=990){
   if(document.daneKlienta.ulica.value==""){
	pola+=" - " + adres + "\n";
	koniec=true;
    }

    if(document.daneKlienta.kodpocztowy.value=="" || kod_Klienta(infkod) == 0){
	pola+=" - " + kodpoczt + "\n";
	koniec=true;
    } 

    if(document.daneKlienta.miasto.value=="" || nazwa_miasta(infmiasto) == 0){
	pola+=" - " + miasto + "\n";
	koniec=true;
    } 
    }

    if (daneKlienta.uzytktypkod.value==990 && daneKlienta.firmaid.value==1) {

    var nip = 0;
    var nazwa = "";
    var adres = "";
    var kod = "";
    var miasto = "";

    nazwa = document.daneKlienta.nazwafirmy.value;
    nip = document.daneKlienta.nipfirmy.value.length;
    adres = document.daneKlienta.ulicafirmy.value;
    kod = document.daneKlienta.kodpocztowyfirmy.value;
    miasto = document.daneKlienta.miastofirmy.value;
    if (nazwa != "" && (nip == 0 || adres == "" || kod == "" || miasto == "")){
        pola+=" - " + polafirmy + "\n";
        koniec=true;
    }
    else {
        if (nip != 0 && (nazwa == "" || adres == "" || kod == "" || miasto == "")){
        pola+=" - " + polafirmy + "\n";
        koniec=true;
        }
        else {
            if (adres != "" && (nip == 0 || nazwa == "" || kod == "" || miasto == "")){
            pola+=" - " + polafirmy + "\n";
            koniec=true;
            }
            else {
                if (kod != "" && (nip == 0 || adres == "" || nazwa == "" || miasto == "")){
                pola+=" - " + polafirmy + "\n";
                koniec=true;
                }
                else {
                    if (miasto != "" && (nip == 0 || adres == "" || kod == "" || nazwa == "")){
                    pola+=" - " + polafirmy + "\n";
                    koniec=true;
                    }
                }
            }
        }
    }
}

    if(!koniec){
	document.daneKlienta.submit();
    }
    else {
	if(pola != "")
            alert(poprpola + ":\n" + pola);
    }

}

function kompletnosc_danych3(kraj, login, imienazwisko, nowehaslo, powthasla, email, adres, kodpoczt, infkod, miasto, infmiasto, rodzdoktoz, nrdoktoz, efaktura, wyrzgody, infnrdok, poprpola, polafirmy, polawysylka, powtemail, infemail, infopolskieznaki){
var pola = "";
var koniec = false;
var bladWysylka = false;
var bladEFaktura = false;

    if(document.daneKlienta.login.value=="" || dlugosc_pol(document.daneKlienta.login.value.length) == 0){
	pola+=" - " + login + "\n";
	koniec=true;
    }

    if(document.daneKlienta.nazwa.value=="" || nie_tylko_litery(document.daneKlienta.nazwa.value) == 0 || hasOtherThanPolishLetters(document.daneKlienta.nazwa.value) ){        
	pola+=" - " +  imienazwisko + "\n";
	koniec=true;
    } else {
        var imnaz = document.daneKlienta.nazwa.value.trim();
        if (!(imnaz.length > 0 && imnaz.indexOf(" ") > 0 && imnaz.indexOf(" ") < (imnaz.length - 1))) {
            pola+=" - " +  imienazwisko + "\n";
            koniec=true;
        }
    }

    if(document.daneKlienta.haslo.value=="" || dlugosc_pol_haslo(document.daneKlienta.haslo.value.length) == 0 ){
	pola+=" - " +  nowehaslo + "\n";
	koniec=true;
    }

    if(document.daneKlienta.powt_hasla.value=="" || document.daneKlienta.haslo.value != document.daneKlienta.powt_hasla.value){
	pola+=" - " + powthasla + "\n";
	koniec=true;
    }

    if(document.daneKlienta.email.value=="" || (poprawny_email(document.daneKlienta.email.value) == 0) ){
	pola+=" - " + email + "\n";
	koniec=true;
    }
    
    var powt_email_str = document.daneKlienta.powt_email.value.toLowerCase();
    var email_str = document.daneKlienta.email.value.toLowerCase(); 

    if (powt_email_str == "" || (poprawny_email(powt_email_str) == 0) || powt_email_str != email_str) {
        pola += " - " + powtemail + "\n";
        koniec = true;
    }
    
    
  
    var nip = 0;
    var czy_adres_firma = 0;
    var nazwa = "";
    var adres = "";
    var kod = "";
    var miasto = "";

    nazwa = document.daneKlienta.nazwafirmy.value;
    nip = document.daneKlienta.nipfirmy.value.length;
    adres = document.daneKlienta.ulica.value;
    kod = document.daneKlienta.kodpocztowy.value;
    miasto = document.daneKlienta.miasto.value;

    if (document.daneKlienta.adresosobafizycznafirma.value == "0") {
        pola += polafirmy + "\n";
        koniec = true;
    }

    if (document.daneKlienta.adresosobafizycznafirma.value == "1") {
        if (nip != 0 && (nazwa == "" || adres == "" || kod == "" || miasto == "")) {
            pola += polafirmy + "\n";
            koniec = true;
        }
    } else if (document.daneKlienta.adresosobafizycznafirma.value == "2") {
        if (nazwa != "" && (nip == 0 || adres == "" || kod == "" || miasto == "")) {
            pola += polafirmy + "\n";
            koniec = true;
        }
        else {
            if (nip != 0 && (nazwa == "" || adres == "" || kod == "" || miasto == "")) {
                pola += polafirmy + "\n";
                koniec = true;
            }
        }
    }
    
    if (document.daneKlienta.nazwafirmy.value.length > 0 || document.daneKlienta.nipfirmy.value.length > 0 || document.daneKlienta.ulica.value.length > 0 ||
            document.daneKlienta.kodpocztowy.value.length > 0 || document.daneKlienta.miasto.value.length > 0) {
        if (document.daneKlienta.zgodafakturaelektoniczna.checked == false) {
            koniec = true;
            bladEFaktura = true;
        }
    }

    if (document.daneKlienta.akceptacja.checked === false/* || document.daneKlienta.profilowanie.checked === false*/) {
        koniec = true;
    }
        
    if(!polskie_znaki_valid(infopolskieznaki)) {
        pola +=email + "\n";
        pola += " - " + infopolskieznaki + "\n";
        koniec = true;        
    }    
    
    document.daneKlienta.nazwafirmy.value = convertString(document.daneKlienta.nazwafirmy.value);

    if (!koniec) {
        document.daneKlienta.submit();
    }
    else {
        if (pola != "") {
            alert(poprpola + ":\n" + pola);
        }
        else {
            if (bladEFaktura) {
                alert(efaktura);
            } else {
                alert(wyrzgody);
            }
        }
    }

}

function kompletnosc_danych4(login, firma, nowehaslo, nip, powthasla, regon, osoba, adres, email, kodpoczt, infkod, miasto, infmiasto, telefon, typ_konta_egds_tmp, domena){
var pola = "";
var poprpola = "Proszę poprawić pola";
var koniec = false;

    if(document.daneKlienta.login.value=="" || dlugosc_pol(document.daneKlienta.login.value.length) == 0){
	pola+=" - " + login + "\n";
	koniec=true;
    }

    if(document.daneKlienta.nazwa_firmy.value=="" || tylko_litery_i_cyfry(document.daneKlienta.nazwa_firmy.value) == 0){
	pola+=" - " +  firma + "\n";
	koniec=true;
    }

    if(document.daneKlienta.haslo.value=="" || dlugosc_pol_haslo(document.daneKlienta.haslo.value.length) == 0 ){
	pola+=" - " +  nowehaslo + "\n";
	koniec=true;
    }

    if(document.daneKlienta.nip_firmy.value=="" || sprNip('nip_firmy_id') == 0 ){
	pola+=" - " +  nip + "\n";
	koniec=true;
    }

    if(document.daneKlienta.powt_hasla.value=="" || document.daneKlienta.haslo.value != document.daneKlienta.powt_hasla.value){
	pola+=" - " + powthasla + "\n";
	koniec=true;
    }


    if(document.daneKlienta.regon_firmy.value=="" || dlugosc_pol(document.daneKlienta.regon_firmy.value.length) == 0){
	pola+=" - " + regon + "\n";
	koniec=true;
    }
    
    if(document.daneKlienta.osoba_kontakt.value=="" || tylko_litery(document.daneKlienta.osoba_kontakt.value) == 0 || poprawna_nazwa(document.daneKlienta.osoba_kontakt.value) == 0){
	pola+=" - " +  osoba + "\n";
	koniec=true;
    }
    
    if(document.daneKlienta.ulica.value==""){
	pola+=" - " + adres + "\n";
	koniec=true;
    }

    if(document.daneKlienta.email.value=="" || (poprawny_email(document.daneKlienta.email.value) == 0) ){
	pola+=" - " + email + "\n";
	koniec=true;
    }

    if(document.daneKlienta.kodpocztowy.value=="" || kod_Klienta(infkod) == 0){
	pola+=" - " + kodpoczt + "\n";
	koniec=true;
    } 

    if(document.daneKlienta.miasto.value=="" || nazwa_miasta(infmiasto) == 0){
	pola+=" - " + miasto + "\n";
	koniec=true;
    } 

    if(document.daneKlienta.tel.value=="" || dlugosc_pol(document.daneKlienta.tel.value.length) == 0){
	pola+=" - " + telefon + "\n";
	koniec=true;
    }
    if(typ_konta_egds_tmp === 1)
    {
      
       if(document.daneKlienta.domena.value=="" ){
           if(document.daneKlienta.typkonta_egds.value == 1) 
            {
                pola+=" - " + domena + "\n";
                koniec=true;
            }
        }else{
            var patternDomena=/@([a-z0-9\-]+\.)+[a-z]{2,8}$/i;

            if(!patternDomena.test(document.daneKlienta.domena.value)){
               pola+=" - " + domena + "\n";
               koniec=true;    
           }
        } 
    }
    
    try {
        if (!(Number(document.daneKlienta.jedn_sluzb.value) > 0 && Number(document.daneKlienta.nr_kasy.value) > 0 && Number(document.daneKlienta.k_nr.value) > 0)) {
            pola+=" - " + "Jednostka służbowa, Nr kasy, K-nr" + "\n";
            koniec=true;
        }
    }
    catch (err)
    {
        pola+=" - " + "Jednostka służbowa, Nr kasy, K-nr" + "\n";
        koniec=true;
    }
    if(!koniec){
	document.daneKlienta.submit();
    }
    else {
	if(pola != "")
            alert(poprpola + ":\n" + pola);
    }

}

function kompletnosc_danych5(osoba, adres, email, kodpoczt, infkod, miasto, infmiasto, telefon, domena){
var pola = "";
var poprpola = "Proszę poprawić pola";
var koniec = false;

    if(document.daneKlienta.osobakontaktowa.value=="" || tylko_litery(document.daneKlienta.osobakontaktowa.value) == 0 || poprawna_nazwa(document.daneKlienta.osobakontaktowa.value) == 0){
	pola+=" - " +  osoba + "\n";
	koniec=true;
    }
    
    if(document.daneKlienta.ulica.value==""){
	pola+=" - " + adres + "\n";
	koniec=true;
    }

    if(document.daneKlienta.email.value=="" || (poprawny_email(document.daneKlienta.email.value) == 0) ){
	pola+=" - " + email + "\n";
	koniec=true;
    } else {
        if (document.daneKlienta.email.value.indexOf(domena, document.daneKlienta.email.value.length - domena.length) == -1) {
            pola+=" - email (wymagana domena: " + domena + ")\n";
            koniec=true;
        }
    }
    

    if(document.daneKlienta.kodpocztowy.value=="" || kod_Klienta(infkod) == 0){
	pola+=" - " + kodpoczt + "\n";
	koniec=true;
    } 

    if(document.daneKlienta.miasto.value=="" || nazwa_miasta(infmiasto) == 0){
	pola+=" - " + miasto + "\n";
	koniec=true;
    } 

    if(document.daneKlienta.tel.value=="" || dlugosc_pol(document.daneKlienta.tel.value.length) == 0){
	pola+=" - " + telefon + "\n";
	koniec=true;
    }
    
    if(!koniec){
	document.daneKlienta.submit();
    }
    else {
	if(pola != "")
            alert(poprpola + ":\n" + pola);
    }

}

function sprawdz_numery(){
    var pola = "";
    var poprpola = "Proszę poprawić pola";
    var koniec = false;
    
    if (isNaN(document.daneKlienta.jedn_sluzb.value) || Number(document.daneKlienta.jedn_sluzb.value) <= 0) {
        pola += " - Jednostka służbowa\n";
        koniec = true;
    }

    if (isNaN(document.daneKlienta.nr_kasy.value) || Number(document.daneKlienta.nr_kasy.value) <= 0) {
        pola += " - Nr kasy\n";
        koniec = true;
    }

    if (isNaN(document.daneKlienta.k_nr.value) || Number(document.daneKlienta.k_nr.value) <= 0) {
        pola += " - K-nr\n";
        koniec = true;
    }
    
    if(!koniec){
        document.body.style.cursor = "wait";    
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                var data = xhr.responseText;
                document.body.style.cursor = "default";
                alert(data);
            }
        }
        xhr.open('GET', '/CheckNumbers?jedn_sluzb='+document.daneKlienta.jedn_sluzb.value+'&nr_kasy='+document.daneKlienta.nr_kasy.value+'&k_nr='+document.daneKlienta.k_nr.value, true);
        xhr.send(null);
    }
    else {
        if(pola != "")
            alert(poprpola + ":\n" + pola);
    }
    
}

function kompletnosc_danych_kontogosc(imienazwisko, email, powt_email, poprpola, efaktura, wyrzgody, infopolskieznaki){

    var pola = "";
    var koniec = false;
    var bladEFaktura = false;
    var isEdit = false;
    var powt_email_str = '';
    if (document.daneKlienta.powt_email === undefined) {
        isEdit = true;
    } else {
        powt_email_str = document.daneKlienta.powt_email.value.toLowerCase();
    }
    var email_str = document.daneKlienta.email.value.toLowerCase(); 

    if(sprImieNazwisko(document.daneKlienta.imie.value, "", 1, 2) == 0 || sprImieNazwisko(document.daneKlienta.nazwisko.value, "", 1, 2) == 0){
	pola+=" - " + imienazwisko + "\n";
	koniec=true;
    }

    if (!isEdit) {
        if (email_str == "" || (poprawny_email(email_str) == 0)) {
            pola += " - " + email + "\n";
            koniec = true;
        }

        if (powt_email_str == "" || (poprawny_email(powt_email_str) == 0) || powt_email_str != email_str) {
            pola += " - " + powt_email + "\n";
            koniec = true;
        }
    }
  
    if(!polskie_znaki_valid(infopolskieznaki)) {
        koniec = true;        
        pola+= email + "\n";
        pola += " - " + infopolskieznaki + "\n";        
    }
  
    if(document.daneKlienta.akceptacja.checked === false/* || document.daneKlienta.profilowanie.checked === false*/){
	koniec=true;
    }

    if (!koniec) {
        document.daneKlienta.submit();
    }
    else {
        if (pola !== "") {
            alert(poprpola + ":\n" + pola);
        }
        else {
            if (bladEFaktura) {
                alert(efaktura);
            } else {
                alert(wyrzgody);
            }
        }
    }
}

function danych_bezhasla(imienazwisko, email, adres, kodpoczt, infkod, miasto, infmiasto, nrdoktoz, infnrdok, poprpola, kodpocztfirmy, infkodpocztfirmy, miastofirmy, infmiastofirmy, polafirmy1, polawysylka){
var pola = "";
var koniec = false;
var bladWysylka = false;
    if(document.daneKlienta.nazwa.value=="" || tylko_litery(document.daneKlienta.nazwa.value) == 0 || poprawna_nazwa(document.daneKlienta.nazwa.value) == 0){
	pola+=" - " +  imienazwisko + "\n";
	koniec=true;
    }
		
    if(document.daneKlienta.email.value=="" || poprawny_email(document.daneKlienta.email.value) == 0){
	pola+=" - " + email + "\n";
	koniec=true;
    }
    if(document.daneKlienta.typUsera.value!=990){
   if(document.daneKlienta.ulica.value==""){
	pola+=" - " + adres + "\n";
	koniec=true;
    }

    if(document.daneKlienta.kodpocztowy.value=="" || kod_Klienta(infkod) == 0){
	pola+=" - " + kodpoczt + "\n";
	koniec=true;
    } 

    if(document.daneKlienta.miasto.value=="" || nazwa_miasta(infmiasto) == 0){
	pola+=" - " + miasto + "\n";
	koniec=true;
    } 
    }
 
 
    if( kod_Firmy(infkodpocztfirmy) == 0){
	pola+=" - " + kodpocztfirmy + "\n";
	koniec=true;
    }
    
    if(nazwa_miastafirmy(infmiastofirmy) == 0){
	pola+=" - " + miastofirmy + "\n";
	koniec=true;
    }
    
    var nip = 0;
    var nazwa = "";
    var adres = "";
    var kod = "";
    var miasto = "";

    nazwa = document.daneKlienta.nazwafirmy.value;
    nip = document.daneKlienta.nipfirmy.value.length;
    adres = document.daneKlienta.ulicafirmy.value;
    kod = document.daneKlienta.kodpocztowyfirmy.value;
    miasto = document.daneKlienta.miastofirmy.value;

    if(document.daneKlienta.typUsera.value==990){
        if (nazwa == "" && nip == 0 && adres == "" && kod == "" && miasto == ""){
            pola+= polafirmy1 + "\n";
            koniec=true;
        }
    }
    if(document.daneKlienta.typUsera.value>=990){
    if (nazwa != "" && (nip == 0 || adres == "" || kod == "" || miasto == "")){
        pola+= polafirmy1 + "\n";
        koniec=true;
    }
    else {
        if (nip != 0 && (nazwa == "" || adres == "" || kod == "" || miasto == "")){
        pola+= polafirmy1 + "\n";
        koniec=true;
        }
        else {
            if (adres != "" && (nip == 0 || nazwa == "" || kod == "" || miasto == "")){
            pola+= polafirmy1 + "\n";
            koniec=true;
            }
            else {
                if (kod != "" && (nip == 0 || adres == "" || nazwa == "" || miasto == "")){
                pola+= polafirmy1 + "\n";
                koniec=true;
                }
                else {
                    if (miasto != "" && (nip == 0 || adres == "" || kod == "" || nazwa == "")){
                    pola+= + polafirmy1 + "\n";
                    koniec=true;
                    }
                }
            }
        }
    }
    }
    if(!koniec){
	document.daneKlienta.submit();
    }
    else {
	if(pola != "")
            alert(poprpola + ":\n" + pola);
    }
}

function kompletnosc_danychF(kraj, login, imienazwisko, nowehaslo, powthasla, email, wyrNPS, wyrzgody, poprpola, polafirmy){
var pola = "";
var koniec = false;
var txtPS = false;
var bladWysylka = false;

    if(document.daneKlienta.login.value=="" || dlugosc_pol(document.daneKlienta.login.value.length) == 0){
	pola+=" - " + login + "\n";
	koniec=true;
    }

    if(document.daneKlienta.nazwa.value=="" || nie_tylko_litery(document.daneKlienta.nazwa.value) == 0 ){        
	pola+=" - " +  imienazwisko + "\n";
	koniec=true;
    }

    if(document.daneKlienta.haslo.value=="" || dlugosc_pol_haslo(document.daneKlienta.haslo.value.length) == 0 ){
	pola+=" - " +  nowehaslo + "\n";
	koniec=true;
    }

    if(document.daneKlienta.powt_hasla.value=="" || document.daneKlienta.haslo.value != document.daneKlienta.powt_hasla.value){
	pola+=" - " + powthasla + "\n";
	koniec=true;
    }

    if(document.daneKlienta.email.value=="" || (poprawny_email(document.daneKlienta.email.value) == 0) ){
	pola+=" - " + email + "\n";
	koniec=true;
    }
    
  
    var nip = 0;
    var nazwa = "";
    var adres = "";
    var kod = "";
    var miasto = "";

    nazwa = document.daneKlienta.nazwafirmy.value;
    nip = document.daneKlienta.nipfirmy.value.length;
    adres = document.daneKlienta.ulica.value;
    kod = document.daneKlienta.kodpocztowy.value;
    miasto = document.daneKlienta.miasto.value;
     if (nazwa == "" || nip == 0 || adres == "" || kod == "" || miasto == ""){
        pola+=polafirmy + "\n";
        koniec=true;
    }
   
  if(document.daneKlienta.akceptacja.checked == false){

	koniec=true;
    }

 if(document.daneKlienta.nieJestemPS.checked == false){

	koniec=true;
        txtPS= true;
    }

    if(!koniec){
	
            document.daneKlienta.submit();

    }
    else {
	if(pola != "")
            alert(poprpola + ":\n" + pola);
     else
     {
          if(txtPS)
          {
                alert(wyrNPS);
            }else
            {
                alert(wyrzgody);
            }
     }

    }

}


function tylko_haslo(starehaslo, takiesame, nowehaslo, powthasla, nrdoktoz, infnrdok, poprpola){
var pola = "";
var koniec = false;
        
    if(document.daneKlienta.stare_haslo.value=="")
    {
	pola+=" - " + starehaslo + "\n";
	koniec=true;
    }
        
    if((document.daneKlienta.stare_haslo.value != 0 || document.daneKlienta.haslo.value != 0) && (document.daneKlienta.haslo.value==document.daneKlienta.stare_haslo.value)){
        alert(takiesame);
        koniec=true;
    }
        
    if(document.daneKlienta.haslo.value=="" || dlugosc_pol_haslo(document.daneKlienta.haslo.value.length) == 0 || litery_liczby(document.daneKlienta.haslo.value) == 0){
	pola+=" - " + nowehaslo + "\n";
	koniec=true;
    }
        
    if(document.daneKlienta.powt_hasla.value=="" || document.daneKlienta.haslo.value != document.daneKlienta.powt_hasla.value){
	pola+=" - " + powthasla + "\n";
	koniec=true;
    }

  
    if(!koniec){
        document.daneKlienta.submit();
    }
    else {
        if(pola != "")
            alert(poprpola + ":\n" + pola);
    }
}

function zmiana_hasla_link(takiesame, nowehaslo, powthasla, poprpola){
var pola = "";
var koniec = false;
                       
    if(document.daneKlienta.haslo.value=="" || dlugosc_pol_haslo(document.daneKlienta.haslo.value.length) == 0 ){
	pola+=" - " + nowehaslo + "\n";
	koniec=true;
    }
        
    if(document.daneKlienta.powt_hasla.value=="" || document.daneKlienta.haslo.value != document.daneKlienta.powt_hasla.value){
	pola+=" - " + powthasla + "\n";
	koniec=true;
    }

  
    if(!koniec){
        document.daneKlienta.submit();
    }
    else {
        if(pola != "")
            alert(poprpola + ":\n" + pola);
    }
}

//function indywidualny(indywUser, indywAjent ,inf2){
//var NO = 0;
//var OK = 1;


//   document.daneKlienta.adminip.disabled=true;
//    if (document.daneKlienta.firmaid.value!=1 && document.daneKlienta.uzytktypkod.value == indywUser)
//    { 
//        alert(inf2);
//        document.daneKlienta.uzytktypkod.value = indywAjent;
//        document.daneKlienta.adminip.disabled=true;
//        return NO;
//    }
//    if(document.daneKlienta.uzytktypkod.selectedIndex==3)
//    {
//        document.daneKlienta.adminip.disabled=false;
//    }
//    if(document.daneKlienta.uzytktypkod.selectedIndex!=3)
//    {
//        document.daneKlienta.adminip.disabled=true;
//    }
//    return OK;
//}

//function indywidualny2(indywUser, indywAjent ,inf1){
//var NO = 0;
//var OK = 1;


//   document.daneKlienta.adminip.disabled=true;
//   if (document.daneKlienta.firmaid.value==1 && document.daneKlienta.uzytktypkod.value != indywUser)
//    { 
//        alert(inf1);
//        document.daneKlienta.uzytktypkod.value = indywUser;
//        document.daneKlienta.adminip.disabled=true;
//        return NO;
//   }
//    if(document.daneKlienta.uzytktypkod.selectedIndex==3)
//    {
//        document.daneKlienta.adminip.disabled=false;
//    }
//    if(document.daneKlienta.uzytktypkod.selectedIndex!=3)
//    {
//        document.daneKlienta.adminip.disabled=true;
//    }
//    return OK;
//}



function check_relacja(pole){
var NO = 0;
var OK = 1;

    if (navigator.appVersion.indexOf("MSIE")>0) 
        pol ;
    else 
        pol_2;
    
    bez;

   tekst = "";
   
   if (pole==1)
       tekst=document.relacja.stodjN.value;
   else if (pole==2)
       tekst=document.relacja.stprzN.value;
   

    for (var i=0; i < pol.length; i++) {
        regexp = eval("/"+String.fromCharCode(pol[i])+"/g");
        tekst=tekst.replace(regexp,String.fromCharCode(bez[i]));
    }

    if (pole==1)        
        document.relacja.stodjN.value = tekst.toUpperCase();
    else if (pole==2)        
        document.relacja.stprzN.value = tekst.toUpperCase();
    
    return OK;
}

function relacja_stodj(inf){
var NO = 0;
var OK = 1;

    if (navigator.appVersion.indexOf("MSIE")>0) 
        pol ;
    else 
        pol_2;
    
    bez;

   tekst = document.relacja.stodj.value;

    for (var i=0; i < pol.length; i++) {
        regexp = eval("/"+String.fromCharCode(pol[i])+"/g");
        tekst=tekst.replace(regexp,String.fromCharCode(bez[i]));
    }

    document.relacja.stodj.value = tekst;

    if(document.relacja.stodj.value.length < 3){
        alert(inf);
        document.relacja.stodj.focus();
        return NO;
    }

    if( tylko_litery(document.relacja.stodj.value) == 0) {
            alert(inf);
            document.relacja.stodj.focus();
            document.relacja.stodj.value="";
            return NO;
    }
    
    return OK;
}

function relacja_stprz(inf){
var NO = 0;
var OK = 1;

    if (navigator.appVersion.indexOf("MSIE")>0) 
        pol ;
    else 
        pol_2;
    
    bez;

    tekst = document.relacja.stprz.value;

    for (var i=0; i < pol.length; i++) {
        regexp = eval("/"+String.fromCharCode(pol[i])+"/g");
        tekst=tekst.replace(regexp,String.fromCharCode(bez[i]));
    }

    document.relacja.stprz.value = tekst;

    if(document.relacja.stprz.value.length <3){
        alert(inf);
        document.relacja.stprz.focus();
        return NO;
    }

    if( tylko_litery(document.relacja.stprz.value) == 0) {
            alert(inf);
            document.relacja.stprz.focus();
            document.relacja.stprz.value="";
            return NO;
    }

    return OK;
}

function kompletnosc_pol(stodj, stprz, odjprz, mcwstecz, dzienwstecz, godzwstecz, minwstecz, ildnimc, ildniluty, poprpola) {
var pola = "";
var koniec = false;
var OK = true;
var NO = false;

    document.relacja.stodj.value = document.relacja.stodj.value.toUpperCase();
    document.relacja.stprz.value = document.relacja.stprz.value.toUpperCase();

    if(document.relacja.stodj.value=="" || document.relacja.stodj.value.length < 3){
        pola+="-  " + stodj + "\n";
        koniec=true;
    }

    if(document.relacja.stprz.value=="" || document.relacja.stprz.value.length < 3){
        pola+="-  " + stprz + "\n";
	koniec=true;
    } 

    if(!koniec){
       
        if(document.relacja.stodj.value == document.relacja.stprz.value) {
            alert(odjprz);
            document.relacja.stprz.focus();
            return NO;
        }

        if(!kontrola_danych(mcwstecz, dzienwstecz, godzwstecz, minwstecz, ildnimc, ildniluty)) {
            return NO;
        }

        else {
            document.relacja.submit()
        }
    }
    else
        alert(poprpola + ":\n " + pola)
       
}

function kontrola_danych(mcwstecz, dzienwstecz, godzwstecz, minwstecz, ildnimc, ildniluty) {
var OK = true;
var NO = false;

    data  = new Date();
    data.toLocaleString();

    if(document.relacja.dzodj.value == "" && document.relacja.mcodj.value == "" && document.relacja.rokodj.value == ""){
        document.relacja.dzodj.value  =  data.getDate();
        document.relacja.mcodj.value = data.getMonth() + 1;
        document.relacja.rokodj.value  =  data.getYear();
    }

    if(document.relacja.godzodj.value == "" && document.relacja.minodj.value == ""){
       document.relacja.godzodj.value =  data.getHours();
        document.relacja.minodj.value =  data.getMinutes();
    }

    if(!czas_wstecz(mcwstecz, dzienwstecz, godzwstecz, minwstecz))
            return NO;

    if(!dni_miesiac(ildnimc))
            return NO;

    if(!luty_dni(ildniluty))
            return NO;

    return OK;
}

function data_wstecz(mcwstecz, dzienwstecz) {
var OK = true;
var NO = false;

    if (document.relacja.rokodj.value == data.getFullYear())
{
    if(document.relacja.mcodj.value < data.getMonth() + 1) {
            alert(mcwstecz);
            document.relacja.mcodj.focus();
            return NO;		
    }
}

    if(document.relacja.mcodj.value == data.getMonth() + 1) {
            if(document.relacja.dzodj.value  <  data.getDate()) {
                    alert(dzienwstecz);
                    document.relacja.dzodj.focus();
                    return NO;		
            }
    }

    return OK;
 }
 
function czas_wstecz(mcwstecz, dzienwstecz, godzwstecz, minwstecz) {
var OK = true;
var NO = false;

    if(!data_wstecz(mcwstecz, dzienwstecz))
            return NO;

    if(document.relacja.mcodj.value == data.getMonth() + 1 && document.relacja.dzodj.value  == data.getDate()) {
            if(	document.relacja.godzodj.value < data.getHours()) {
                    alert(godzwstecz);
                    document.relacja.godzodj.focus();
                    return NO;			
            }

            if(	document.relacja.godzodj.value == data.getHours() && document.relacja.minodj.value <  data.getMinutes() ) {
                    alert(minwstecz);
                    document.relacja.minodj.focus();
                    return NO;			
            }
    }
    return OK;
 }
 
function dni_miesiac(ildnimc) {
var OK = true;
var NO = false;
var jest = 0;

    if(document.relacja.dzodj.value != 31) 
            return OK;

    if(document.relacja.mcodj.value == 2)
            return OK;

    for(i = 0; i < miesiace.length; i++) {
                    if(document.relacja.mcodj.value == miesiace[i]) 
                            jest = 1;
    }

    if(jest != 1) {
                    alert(ildnimc);
                    document.relacja.dzodj.focus();
                    return NO;
    }

    return OK;
}


function luty_dni(ildniluty) {
var OK = true;
var NO = false;

    if(rok_przestepny(document.relacja.rokodj.value)) {
        if(document.relacja.mcodj.value == 2 ) {
                if(document.relacja.dzodj.value <= 29)  {
                        return OK;
                }
                else {
                        alert(ildniluty);
                        document.relacja.dzodj.focus();
                        return NO;
                }
         }
         return OK;
    }
    else {
        if(document.relacja.mcodj.value == 2 ) {
                if(document.relacja.dzodj.value <= 28)  {
                        return OK;
                }
                else {
                        alert(ildniluty);
                        document.relacja.dzodj.focus();
                        return NO;
                }
         }
    return OK;
    }
}



function kompletnosc_polCombo(inf) {

	if(document.relacjaCombo.stodj.value == document.relacjaCombo.stprz.value) {
		alert(inf);
		document.relacjaCombo.stprz.focus();
	}
	else {
	document.relacjaCombo.submit()
	}
}



function nrdok_RezH(inf){
var OK = 1;
var NO = 0;
var dlugosc = 0;

    document.rkh.nrdok.value = document.rkh.nrdok.value.toUpperCase();
    
    dlugosc = document.rkh.nrdok.length;
    if(dlugosc == 0)
            return OK;
reg = /^[A-Z0-9\-\\\s\\\\\/]{1,30}$/;
     wyn = rkh.nrdok.value.match(reg);
 
    if(!wyn){
        alert(inf);
        document.rkh.nrdok.focus();
        return NO;
    }
  
    return OK;
} 

function hasloJ_RezH(inf) {
var OK = 1
var NO = 0

    reg = /^[a-z0-9]{1,8}$/i;
    wyn = rkh.hasloJ.value.match(reg);

    if (wyn)
        return OK;

    alert(inf);
    return NO;   
}

function hasloJ_Generuj(inf) {
var OK = 1
var NO = 0

    reg = /^[a-z0-9]{1,8}$/i;
    wyn = generuj.hasloGeneruj.value.match(reg);
    dl = generuj.hasloGeneruj.value.length;

    if (wyn && dl==8){
        document.generuj.submit();
        return OK;
        
    }

    alert(inf);
    return NO;   
}

function hasloJ_Aktywuj(inf,param) {
var OK = 1
var NO = 0

    reg = /^[a-z0-9]{1,8}$/i;
    wyn = document.forms[param].hasloAktywuj.value.match(reg);
    dl = document.forms[param].hasloAktywuj.value.length;

    if (wyn && dl==8){
        document.forms[param].submit();
        return OK;
    }
    alert(inf);
    return NO;   
}

function tylko_cyfra1(cyfra){
var NO = 0;
var OK = 1;

    if ( cyfra.length != 0 && tylko_cyfra(cyfra) == 1 )
        return OK;
		
    return NO;
}

function kompletnosc_polRezH_KoloroweKarty(kolorowa_karta, kod, kodspolki, nrdokumentu, imienazwisko, zlynrdok, zlehaslo, poprpola, kodUzytk){
var OK = 1;
var NO = 0;
var pola = "";
var koniec = false;


    if(kod == 1){
        if(document.rkh.spolkaPKP.value.length == 0 || tylko_cyfra1(document.rkh.spolkaPKP.value) == 0){
             pola+="- " + kodspolki + "\n";
             document.rkh.spolkaPKP.focus();
             koniec=true;
        }
    }

    if(document.rkh.dla.value.length == 0 ){
        pola+="-" + imienazwisko + "\n";
        koniec=true;
    }
    
    
    if(kodUzytk==1){
        if(document.rkh.hasloJ.value.length < 8 || document.rkh.hasloJ.value.length > 8 || hasloJ_RezH(zlehaslo) == 0){
            pola+="- " + zlehaslo + "\n";
            koniec=true;
        }
     }
 


    if (kolorowa_karta==1)  
    {
        if(!koniec)
            document.rkh.submit();
        else
            alert(poprpola + ":\n "+ pola);
    }
    
}

function kompletnosc_polRezH(kod, kodspolki, nrdokumentu, imienazwisko, zlynrdok, zlehaslo, poprpola, kodUzytk){
var OK = 1;
var NO = 0;
var pola = "";
var koniec = false;

    if(kod == 1){
        if(document.rkh.spolkaPKP.value.length == 0 || tylko_cyfra1(document.rkh.spolkaPKP.value) == 0){
             pola+="- " + kodspolki + "\n";
             document.rkh.spolkaPKP.focus();
             koniec=true;
        }
    }

    if(document.rkh.dla.value.length == 0  || poprawna_nazwa(document.rkh.dla.value) == 0){
        pola+="- " + imienazwisko + "\n";
        koniec=true;
    }
    
    if(kodUzytk==1){
        if(document.rkh.hasloJ.value.length < 8 || document.rkh.hasloJ.value.length > 8 || hasloJ_RezH(zlehaslo) == 0){
            pola+="- " + zlehaslo + "\n";
            koniec=true;
        }
     }
 
  
    if(!koniec)
        document.rkh.submit();
    else
        alert(poprpola + ":\n "+ pola);
}
function kompletnosc_polKarnet( imienazwisko,nrdokumentu,zlynrdok, poprpola){
var OK = 1;
var NO = 0;
var pola = "";
var koniec = false;

  
    if(document.rkh.dla.value.length == 0  || poprawna_nazwa(document.rkh.dla.value) == 0){
        pola+="- " + imienazwisko + "\n";
        koniec=true;
    }
   
    if(document.rkh.nrdok.value=="" ){
	pola+=" - " + nrdokumentu + "\n";
	koniec=true;
    }

  
    if(!koniec)
        document.rkh.submit();
    else
        alert(poprpola + ":\n "+ pola);
}



function drukOknoPDF(sciezka){    
    window.location.href=sciezka;
}


function openBeta(url){
    var w=open("beta.jsp?url="+url,"Beta","toolbar=no, menubar=no, location=no, personalbar=no, status=no, resizable=yes, scrollbars=yes, copyhistory=no, width=800, height=950, top=0, left=0");
    w.focus();
}

function drukBilet(sciezka){
    window2=open("/irez/jsp/" + sciezka + "&checkJS=true&print=1","Drukowanie","toolbar=no, menubar=no, location=no, personalbar=no, status=no, resizable=yes, scrollbars=yes, copyhistory=no, width=625, height=900, top=0, left=0");
    window2.focus();
}

function drukOkno(sciezka){
    window2=open("/irez/jsp/" + sciezka + "&checkJS=true","Drukowanie","toolbar=no, menubar=no, location=no, personalbar=no, status=no, resizable=yes, scrollbars=yes, copyhistory=no, width=520, height=800, top=0, left=0");
    window2.focus();
    setTimeout('window2.print()', 16000);
    setTimeout('window2.close()',30000);
}

function drukOknoWykaz(sciezka){
    window2=open("/irez/jsp/" + sciezka + "&checkJS=true","Drukowanie","toolbar=no, menubar=no, location=no, personalbar=no, status=no, resizable=no, scrollbars=yes, copyhistory=no, width=600, height=750, top=0, left=0");
    window2.focus();
    setTimeout('window2.print()', 4000);
    setTimeout('window2.close()',20000);
}


function otworzOkno(sciezka){    
    window2=open("/irez/jsp/" + sciezka  + "&checkJS=true","Informacja","toolbar=no, menubar=no, location=no, personalbar=no, status=no, resizable=no, scrollbars=no, copyhistory=no, width=520, height=800, top=0, left=0");
    window2.focus();
    return;
}

function otworzOkno2(sciezka){
    window2=open("/irez/jsp/" + sciezka  + "&checkJS=true","Informacja","toolbar=no, menubar=no, location=no, personalbar=no, status=no, resizable=no, scrollbars=no, copyhistory=no, width=900, height=550, top=0, left=0");
    window2.focus();
    return;
}

function otworzOkno3(sciezka, szerokosc, wysokosc){
    if (parseInt(szerokosc)===0)
    {
        szerokosc=700;
    }
    
    if (parseInt(wysokosc)===0)
    {
        wysokosc=800;
    }
    window2=open("/irez/jsp/" + sciezka  + "&checkJS=true","Informacja","toolbar=no, menubar=no, location=no, personalbar=no, status=no, resizable=no, scrollbars=yes, copyhistory=no, width="+szerokosc+", height="+wysokosc+", top=0, left=0");
    window2.focus();
    return;
}

function otworzOkno4(sciezka){
    window2=open("/irez/jsp/" + sciezka  + "&checkJS=true","Informacja","toolbar=no, menubar=no, location=no, personalbar=no, status=no, resizable=no, scrollbars=no, copyhistory=no, width=300, height=400, top=0, left=0");
    window2.focus();
    return;
}

function drukRpos(sciezka){
    window2=open("/irez/jsp/" + sciezka + "&checkJS=true","Drukowanie","toolbar=no, menubar=no, location=no, personalbar=no, status=no, resizable=no, scrollbars=no, copyhistory=no, width=640, height=900, top=0, left=0");
    window2.focus();
    setTimeout('window2.print()', 4000);
    setTimeout('window2.close()',30000);
}


function drukmg21(sciezka){
    window3=open("/irez/jsp/" + sciezka + "&checkJS=true","Drukowanie","toolbar=no, menubar=no, location=no, personalbar=no, status=no, resizable=no, scrollbars=no, copyhistory=no, width=660, height=450, top=0, left=0");
    window3.focus();
    setTimeout('window3.print()',10000);
    setTimeout('window3.close()',30000);
}

function drukReg(sciezka){
    window2=open("/irez/jsp/" + sciezka + "&checkJS=true","Drukowanie","toolbar=no, menubar=no, location=no, personalbar=no, status=no, resizable=no, scrollbars=yes, copyhistory=no, width=600, height=600, top=0, left=0");
    window2.focus();
    setTimeout('window2.print()', 4000);
   
}



function sprdata(dzien, miesiac, rok) {
miesiac--;
 
d = new Date(rok,miesiac,dzien, 23, 59, 0);

    if (dzien==d.getDate() && miesiac==d.getMonth() && rok==d.getFullYear()) 
        return true;
    else
        return false
}

function nazwa_Firmy2(inf)
{
var OK = 1;
var NO = 0;
    
    if(tylko_litery_i_cyfry(document.daneKlienta.nazwa_firmy.value)==0)
    {
        alert(inf);
        document.daneKlienta.nazwa_firmy.focus();
        return NO;
    }
    return OK;
}

function nazwa_Firmy(inf){
var OK = 1;
var NO = 0;
    
    if(tylko_litery(document.daneFirmy.nazwa.value)==0){
        alert(inf);
        document.daneFirmy.nazwa.focus();
        return NO;
    }
    return OK;
}
function nazwa_COK(inf){
var OK = 1;
var NO = 0;
    
    if(tylko_litery(document.daneCOK.nazwa.value)==0){
        alert(inf);
        document.daneCOK.nazwa.focus();
        return NO;
    }
    return OK;
}

function nazwa_KFirmy(inf){
var OK = 1;
var NO = 0;
    
    if(tylko_litery(document.daneFirmy.nazwaKrotka.value)==0){
        alert(inf);
        document.daneFirmy.nazwaKrotka.focus();
        return NO;
    }
    return OK;
}


function nip_Firmy(inf){
var NO = 0;
var OK = 1;

    if(nrnip() == 0){
        alert(inf);
        document.daneFirmy.nip.focus();
        return NO;
    }

    return OK;
}

function regon_Firmy(inf){
var NO = 0;
var OK = 1;

    if(tylko_cyfra(document.daneFirmy.regon.value) == 0){
        alert(inf);
        document.daneFirmy.regon.focus();
        return NO;
    }

    return OK;
}

function  kodpocztowy_Firmy(inf) {
var OK = 1;
var NO = 0;

    if(document.daneFirmy.kodpocztowy.value == 0)
        return OK;

    if (kodpocz_OK(document.daneFirmy.kodpocztowy.value) == 0){
        alert(inf);
        document.daneFirmy.kodpocztowy.focus();
        return NO;
    }
    
    return OK;
}
function  kodpocztowy_COK(inf) {
var OK = 1;
var NO = 0;

    if(document.daneCOK.kodpocztowy.value == 0)
        return OK;

    if (kodpocz_OK(document.daneCOK.kodpocztowy.value) == 0){
        alert(inf);
        document.daneCOK.kodpocztowy.focus();
        return NO;
    }
    
    return OK;
}

function  kodpocztowy_FirmyKlient(inf, kraj) {
var OK = 1;
var NO = 0;

    if(document.daneKlienta.kodpocztowyfirmy.value == 0)
        return OK;
        if (kraj> 0)
            {
    if (kodpocz_OK(document.daneKlienta.kodpocztowyfirmy.value) == 0){
        alert(inf);
        document.daneKlienta.kodpocztowyfirmy.focus();
        return NO;
    }
            }
        else
            {
    if (kodpocz_OK_pl(document.daneKlienta.kodpocztowyfirmy.value) == 0){
        alert(inf);
        document.daneKlienta.kodpocztowyfirmy.focus();
        return NO;

            }
            }
    return OK;
}

function  miasto_Firmy(inf) {
var OK = 1;
var NO = 0;

    if (tylko_litery(document.daneFirmy.miasto.value)== 0){
        alert(inf);
        document.daneFirmy.miasto.focus();
        return NO;
    }
    
    return OK;
}
function  miasto_COK(inf) {
var OK = 1;
var NO = 0;

    if (tylko_litery(document.daneCOK.miasto.value)== 0){
        alert(inf);
        document.daneCOK.miasto.focus();
        return NO;
    }
    
    return OK;
}

function  miasto_FirmyKlient(inf) {
var OK = 1;
var NO = 0;

    if (tylko_litery(document.daneKlienta.miastofirmy.value)== 0){
        alert(inf);
        document.daneKlienta.miastofirmy.focus();
        return NO;
    }
    
    return OK;
}


function telefon_COK(inf) {
var OK = 1;
var NO = 0;
var dlugosc = 0;
	
    dlugosc = document.daneCOK.tel.length;
	
    if(dlugosc == 0)
        return OK;

    if (telfax_OK(document.daneCOK.tel.value) == 0){
	alert(inf);
	document.daneCOK.tel.focus();
	return NO;
    }
    
    return OK;
}
function telefon_Firmy(inf) {
var OK = 1;
var NO = 0;
var dlugosc = 0;
	
    dlugosc = document.daneFirmy.tel.length;
	
    if(dlugosc == 0)
        return OK;

    if (telfax_OK(document.daneFirmy.tel.value) == 0){
	alert(inf);
	document.daneFirmy.tel.focus();
	return NO;
    }
    
    return OK;
}

function fax_Firmy(inf) {
var OK = 1;
var NO = 0;
var dlugosc = 0;
	
    dlugosc = document.daneFirmy.fax.length;

    if(dlugosc == 0)
	return OK;

    if (telfax_OK(document.daneFirmy.fax.value) == 0){
	alert(inf);
	document.daneFirmy.fax.focus();
	return NO;
    }
    
    return OK;
}

function email_Firmy(inf){
var OK = 1;
var NO = 0;
var dlugosc = 0;
	
    dlugosc = document.daneFirmy.email.value.length;
	
    if(dlugosc == 0)
	return OK;

    if(poprawny_email(document.daneFirmy.email.value)== 0){
	alert(inf);
	document.daneFirmy.email.focus();
	return NO;
    }
    
    return OK;
}

function daneOK_Firmy(nazwafull, nipf, regf, adresf, kodpocztf, miastof, nazwakrotkaf, nrumowyf, dataodf, datadof, poprpola, inf1, infod, infdo, infLista, infHasla){
var NO = 0;
var OK = 1;
var pola = "";
var koniec = false;

    if(document.daneFirmy.nazwa.value == "" || tylko_litery(document.daneFirmy.nazwa.value)==0){
        pola+=" - " + nazwafull + "\n";
	koniec=true;
    }

    if(document.daneFirmy.nip.value == ""){ // || nrnip() == 0){
 	pola+=" - " + nipf + "\n";
	koniec=true;
    }

    if(document.daneFirmy.regon.value == 0 || tylko_cyfra(document.daneFirmy.regon.value) == 0){
 	pola+=" - " + regf + "\n";
	koniec=true;
    }

    if(document.daneFirmy.ulica.value == ""){
 	pola+=" - " + adresf + "\n";
	koniec=true;
    }

    if(document.daneFirmy.kodpocztowy.value == "" || kodpocz_OK(document.daneFirmy.kodpocztowy.value)== 0){
	pola+=" - " + kodpocztf + "\n";
	koniec=true;
    }

    if(document.daneFirmy.miasto.value == "" || tylko_litery(document.daneFirmy.miasto.value)== 0){
	pola+=" - " + miastof + "\n";
	koniec=true;
    }

    if(document.daneFirmy.nazwaKrotka.value == "" || tylko_litery(document.daneFirmy.nazwaKrotka.value)==0 ){
	pola+=" - " + nazwakrotkaf + "\n";
	koniec=true;
    }

    if(document.daneFirmy.nrumowy.value == ""){
	pola+=" - " + nrumowyf + "\n";
	koniec=true;
    }

   if(document.daneFirmy.dataod.value == ""){
	pola+=" - " + dataodf + "\n";
	koniec=true;
    }
    else{
        if(sprdataod_Firma(inf1, infod) ==false)
            koniec = true;
    }

   if(document.daneFirmy.datado.value == ""){
	    }
    else{
        if(sprdatado_Firma(inf1, infdo) ==false)
            koniec = true;
    }

   if(document.daneFirmy.listyHasel.value == "" || document.daneFirmy.listyHasel.value >5){
	pola+=" - " + infLista + "\n";
	koniec=true;
    }
    else{
        if(sprListaHasel_Firma(infLista) ==false)
            koniec = true;
    }

   if(document.daneFirmy.hasla.value == "" || document.daneFirmy.hasla.value >50){
	pola+=" - " + infHasla + "\n";
	koniec=true;
    }
    else{
        if(sprHasla_Firma(infHasla) ==false)
            koniec = true;
    }

    if(!koniec){
        document.daneFirmy.submit();
    }
    else {
        if(pola != "")
            alert(poprpola + ":\n" + pola);
    }
	
    return OK;
}



function tylko_cyfra_zwrot(){
var OK = 1;
var NO = 0;
var dlugosc = 0;
var koniec = false;

dlugosc = document.zwrotBiletow.nrBiletu.value.length;
	if ( isNaN(document.zwrotBiletow.nrBiletu.value) != 0 ){
                koniec = true;
		}
        if (dlugosc == 0 ){
                koniec = true;
		}          
 if(!koniec){
        document.zwrotBiletow.submit();
        return OK;
		}
    else {
        alert("Podaj numer biletu");
        return NO;
	}
}

function kompletnosc_danych_zwrot(){
var pola = "";
var koniec = false;

    if(dlugosc_pol(document.zwrotBiletow.zwrotBilet.length) == 0 || cena_OK(document.zwrotBiletow.zwrotBilet.value) == 0){
        
	pola+=" -  Kwota za bilet \n";
	koniec=true;
    }

    if (document.zwrotBiletow.powodBilet.value == "" || dlugosc_pol(document.zwrotBiletow.powodBilet.length) == 0) {
        if (document.zwrotBiletow.przyczynaZwrotuBilet.value === '4') {
            pola += " -  Powód zwrotu biletu\n";
            koniec = true;
        }
    }
    
    if(dlugosc_pol(document.zwrotBiletow.zwrotMiejscowka.length) == 0 || cena_OK(document.zwrotBiletow.zwrotMiejscowka.value) == 0){
        pola+=" -  Kwota za rezerwację\n";
        koniec=true;
    }

    if(document.zwrotBiletow.powodMiejscowka.value=="" || dlugosc_pol(document.zwrotBiletow.powodMiejscowka.length) == 0){
        if (document.zwrotBiletow.przyczynaZwrotuRez.value === '4') {
            pola+=" -  Powód zwrotu rezerwacji\n";
            koniec=true;
        }
    }

    if(dlugosc_pol(document.zwrotBiletow.zwrotBilet.length) > 0 && cena_not_zero(document.zwrotBiletow.zwrotBilet.value) !== 0){
        if (typeof document.zwrotBiletow.nrReklamacjiBil !== 'undefined'){
            if (document.zwrotBiletow.nrReklamacjiBil.value === "" || dlugosc_pol(document.zwrotBiletow.nrReklamacjiBil.length) === 0) {
                if (document.zwrotBiletow.przyczynaZwrotuBilet.value === '0') {
                    pola += " -  Numer reklamacji (bilet)\n";
                    koniec = true;
                }
            }
        }
    }

    if(dlugosc_pol(document.zwrotBiletow.zwrotMiejscowka.length) > 0 && cena_not_zero(document.zwrotBiletow.zwrotMiejscowka.value) !== 0){
        if (typeof document.zwrotBiletow.nrReklamacjiRez !== 'undefined'){
            if (document.zwrotBiletow.nrReklamacjiRez.value === "" || dlugosc_pol(document.zwrotBiletow.nrReklamacjiRez.length) === 0) {
                if (document.zwrotBiletow.przyczynaZwrotuRez.value === '0') {
                    pola += " -  Numer reklamacji (rezerwacja)\n";
                    koniec = true;
                }
            }
        }
    }

    if(!koniec){
	    document.zwrotBiletow.submit();
	}
    
    else {
	if(pola != "")
            alert("Popraw lub wypełnij pola:\n" + pola);
    }
}

function kompletnosc_danych_blokada_zwrotu(){
var pola = "";
var koniec = false;

    if(dlugosc_pol(document.blokadaZwrotuBiletow.kwotaZwrotu.length) == 0 || cena_OK(document.blokadaZwrotuBiletow.kwotaZwrotu.value) == 0){

	pola+=" -  Kwota zwrotu \n";
	koniec=true;
    }

    if(document.blokadaZwrotuBiletow.powodBlokady.value=="" || dlugosc_pol(document.blokadaZwrotuBiletow.powodBlokady.length) == 0){
	pola+=" -  Przyczyna blokady zwrotu biletu\n";
	koniec=true;
    }

     if(!koniec){
	    document.blokadaZwrotuBiletow.submit();
	}

    else {
	if(pola != "")
            alert("Popraw lub wypełnij pola:\n" + pola);
    }
}

function  cena_OK(kod) {
var OK = 1;
var NO = 0;
    
    if (kod.match(/^\d\d,\d\d$/) || kod.match(/^\d,\d\d$/) || kod.match(/^\d\d\d,\d\d$/) || kod.match(/^\d\d\d\d,\d\d$/))
        return OK;

   else
   return NO; 
}

function  cena_not_zero(kod) {
var OK = 1;
var NO = 0;
    
    if ((kod.match(/^\d\d,\d\d$/) || kod.match(/^\d,\d\d$/) || kod.match(/^\d\d\d,\d\d$/) || kod.match(/^\d\d\d\d,\d\d$/)) && kod!=='0,00' && kod!=='00,00' && kod!=='000,00' && kod!=='0000,00' )
        return OK;

   else
   return NO; 
}

function kompletnosc_danych_filtr(tekst){
var pola = "";
var koniec = false;
        if(document.listaBiletowSzczegoly.nrPociagu.value.length != 0){
            if(tylko_cyfra(document.listaBiletowSzczegoly.nrPociagu.value) == 0){
                alert(tekst);
                document.listaBiletowSzczegoly.nrPociagu.focus();
                koniec = true;
            }
        }

    if(!koniec)
            document.listaBiletowSzczegoly.submit();
}



function nrpoc_OK(inf1, inf2){
var koniec = true;

    if(document.data_pociag.nrpoc.value == 0 || document.data_pociag.nrpoc.value == ""){
        alert(inf1);
        document.data_pociag.nrpoc.focus();
        koniec = false;
    }

    if(document.data_pociag.nrpoc.length != 0){
       if(tylko_cyfra(document.data_pociag.nrpoc.value)==0){
            alert(inf2);
            document.data_pociag.nrpoc.focus();
           koniec = false;
        }
    }

    if(koniec)
        document.data_pociag.submit();
}

function nrbil_OK(inf1, inf2){
var koniec = true;

    if(document.kontrolaBiletu.idBilet.value == 0 || document.kontrolaBiletu.idBilet.value == ""){
        alert(inf1);
        document.kontrolaBiletu.idBilet.focus();
        koniec = false;
    }

    if(document.kontrolaBiletu.idBilet.length != 0){
       if(tylko_cyfra(document.kontrolaBiletu.idBilet.value)==0){
            alert(inf2);
            document.kontrolaBiletu.idBilet.focus();
           koniec = false;
        }
    }

    if(koniec)
        document.kontrolaBiletu.submit();
}

function sprdatanew(inf) {
var dzien = document.data_pociag.dzodj.value;
var miesiac = document.data_pociag.mcodj.value;
var rok = document.data_pociag.rokodj.value;
var pierwszy = 1;
miesiac--;

    d = new Date(rok,miesiac,dzien, 23, 59, 0);
    
    if (dzien==d.getDate() && miesiac==d.getMonth() && rok==d.getFullYear()) 
    {
        return true;
    }
    else
    {
        alert(inf);
        document.data_pociag.dzodj.value = pierwszy;
        return false;
    }
}


function  data_OK(data) {
var OK = 1;
var NO = 0;
    
    if (!data.match(/^\d\d\d\d-\d\d-\d\d$/)) 
        return NO;
 
    return OK;
}

function sprdataod_Firma(inf1, inf2) {
var rok = document.daneFirmy.dataod.value.substring(0,4);
var miesiac = document.daneFirmy.dataod.value.substring(5,7);
var dzien = document.daneFirmy.dataod.value.substring(8);
miesiac--;

if(document.daneFirmy.dataod.value.length == 0)
    return true;

if (data_OK(document.daneFirmy.dataod.value) == 0)
    {
        alert(inf1);
        document.daneFirmy.dataod.focus();
        return false;
    }
    d = new Date(rok,miesiac,dzien, 23, 59, 0);
    if (dzien==d.getDate() && miesiac==d.getMonth() && rok==d.getFullYear()) 
    {
        return true;
    }
    else
    {
        alert(inf2);
        document.daneFirmy.dataod.focus();
         return false;
    }
}
function sprdataod_COK(inf1, inf2) {
var rok = document.daneCOK.dataod.value.substring(0,4);
var miesiac = document.daneCOK.dataod.value.substring(5,7);
var dzien = document.daneCOK.dataod.value.substring(8);
miesiac--;

if(document.daneCOK.dataod.value.length == 0)
    return true;

if (data_OK(document.daneCOK.dataod.value) == 0)
    {
        alert(inf1);
        document.daneCOK.dataod.focus();
        return false;
    }
    d = new Date(rok,miesiac,dzien, 23, 59, 0);
    if (dzien==d.getDate() && miesiac==d.getMonth() && rok==d.getFullYear()) 
    {
        return true;
    }
    else
    {
        alert(inf2);
        document.daneCOK.dataod.focus();
         return false;
    }
}

function sprListaHasel_Firma(inf) {
var OK = 1;
var NO = 0;
var dlugosc = 0;
var koniec = false;

dlugosc = document.daneFirmy.listyHasel.value.length;
	if ( isNaN(document.daneFirmy.listyHasel.value) != 0 ){
                alert(inf);
                koniec = true;
		}
        if (dlugosc == 0 ){
                koniec = true;
		}          
        if(!koniec){
                return OK;
		}
        else {
            document.daneFirmy.listyHasel.focus();
            return NO;
	}
}

function sprHasla_Firma(inf) {
var OK = 1;
var NO = 0;
var dlugosc = 0;
var koniec = false;

dlugosc = document.daneFirmy.hasla.value.length;
	if ( isNaN(document.daneFirmy.hasla.value) != 0 ){
                alert(inf);
                koniec = true;
		}
        if (dlugosc == 0 ){
                koniec = true;
		}          
        if(!koniec){
                return OK;
		}
        else {
            document.daneFirmy.hasla.focus();
            return NO;
	}
}

function sprdatado_Firma(inf1, inf2) {
var rok = document.daneFirmy.datado.value.substring(0,4);
var miesiac = document.daneFirmy.datado.value.substring(5,7);
var dzien = document.daneFirmy.datado.value.substring(8);
miesiac--;

if(document.daneFirmy.datado.value.length == 0)
    return true;

if (data_OK(document.daneFirmy.datado.value) == 0)
    {
       alert(inf1);
        document.daneFirmy.datado.focus();
        return false;

}
    d = new Date(rok,miesiac,dzien, 23, 59, 0);
    
    if (dzien==d.getDate() && miesiac==d.getMonth() && rok==d.getFullYear()) 
    {
        return true;
    }
    else
    {
        alert(inf2);
        document.daneFirmy.datado.focus();
        return false;
    }
}




function kompletnosc_danych_wykaz(){
var pola = "";
var koniec = false;
var koniec2 = false;
var error = "";
error = "Popraw pola:\n";
        
        if(document.wykazPrzesylek.nrOd.value.length > 0){
            if(tylko_cyfra(document.wykazPrzesylek.nrOd.value) == 0){
                pola +=" - nr faktury od\n";
                document.wykazPrzesylek.nrOd.focus();
                koniec = true;
            }
        } 

        if(document.wykazPrzesylek.nrOd.value.length == 0){
                pola +=" - nr faktury od\n";
                document.wykazPrzesylek.nrOd.focus();
                koniec = true;
        } 
       if(document.wykazPrzesylek.rok.value.length == 0){
                pola +=" - rok\n";
                document.wykazPrzesylek.rok.focus();
                koniec = true;
        } 


        if(document.wykazPrzesylek.nrDo.value.length > 0){
            if(tylko_cyfra(document.wykazPrzesylek.nrDo.value) == 0){
                pola +=" - nr faktury do\n";
                document.wykazPrzesylek.nrDo.focus();
                koniec = true;
            }
        }
       if(document.wykazPrzesylek.rok.value.length > 0){
            if(tylko_cyfra(document.wykazPrzesylek.rok.value) == 0){
                pola +=" - rok\n";
                document.wykazPrzesylek.rok.focus();
                koniec = true;
            }
        }

        if(document.wykazPrzesylek.nrDo.value.length == 0){
                pola +=" - nr faktury do\n";
                document.wykazPrzesylek.nrDo.focus();
                koniec = true;
        }
 
    if(!koniec)
        document.wykazPrzesylek.submit();
    else 
        alert(error + pola);
}


function kompletnosc_danych_faktura(){
var pola = "";
var koniec = false;
var koniec2 = false;
var error = "";
error = "Popraw pola:\n";
        if(document.faktury.rok.value.length != 0){
            if(tylko_cyfra(document.faktury.rok.value) == 0){
                pola= " -rok \n";
                document.faktury.rok.focus();
                koniec = true;
            }
            else if (document.faktury.rok.value < 2005){
                pola= " - rok \n";
                document.faktury.rok.focus();
                koniec = true;
            }       
        }
        else{
            pola= " - rok \n";
            document.faktury.rok.focus();
            koniec = true;
        }

        if(document.faktury.nrOd.value.length > 0){
            if(tylko_cyfra(document.faktury.nrOd.value) == 0){
                pola +=" - nr faktury od\n";
                document.faktury.nrOd.focus();
                koniec = true;
            }
        } 

   
        if(document.faktury.nrDo.value.length > 0){
            if(tylko_cyfra(document.faktury.nrDo.value) == 0){
                pola +=" - nr faktury do\n";
                document.faktury.nrDo.focus();
                koniec = true;
            }
        } 

        if(document.faktury.nrBil.value.length > 0){
            if(tylko_cyfra(document.faktury.nrBil.value) == 0){
                pola +=" - nr transakcji\n";
                document.faktury.nrBil.focus();
                koniec = true;
            }
        } 

        if((document.faktury.nrDo.value.length > 0 || document.faktury.nrOd.value.length > 0) && document.faktury.nrBil.value.length > 0){
            document.faktury.nrOd.focus();
            koniec2 = true;
        }
        if(document.faktury.nrDo.value.length == 0 && document.faktury.nrOd.value.length == 0 && document.faktury.nrBil.value.length == 0){
            pola +=" - nr faktury od\n - nr faktury do\n - nr transakcji\n";
            document.faktury.nrOd.focus();
            koniec = true;
        }
        
        if((document.faktury.nrDo.value.length == 0 && document.faktury.nrOd.value.length > 0) || (document.faktury.nrDo.value.length > 0 && document.faktury.nrOd.value.length == 0)){
            pola +=" - nr faktury \n";
            koniec = true;
        }


    if(!koniec && !koniec2)
        document.faktury.submit();
    else if (koniec && !koniec2)
        alert(error + pola);
    else if (!koniec && koniec2)
        alert("Podaj numery faktur albo numer transakcji\n");
    else if (koniec && koniec2)
        alert("Podaj numery faktur albo numer transakcji\n");
}


function setAnotherDay(newAnotherDay) {
    var aDay = newAnotherDay;
    document.anotherDayForm.anotherday.value = aDay;
    document.anotherDayForm.submit();
}



function redirect(x,dowolny,okno,srodek,korytarz,palacy,niepalacy){
    var group=new Array(5);
    for (i=0; i<5; i++){
        group[i]=new Array();
    }

    group[0][0]=new Option(dowolny,"0");
    group[0][1]=new Option(okno,"1");
    group[0][2]=new Option(srodek,"2");
    group[0][3]=new Option(korytarz,"3");

    group[1][0]=new Option(dowolny,"0");
    group[1][1]=new Option(okno,"1");
    group[1][2]=new Option(srodek,"2");
    group[1][3]=new Option(korytarz,"3");

    group[2][0]=new Option(dowolny,"0");
    group[2][1]=new Option(okno,"1");
    group[2][2]=new Option(srodek,"2");

    group[3][0]=new Option(dowolny,"0");
    group[3][1]=new Option(okno,"1");
    group[3][2]=new Option(srodek,"2");

    group[4][0]=new Option(dowolny,"0");

 
    var temp=document.rkf.usytuowanie;
 
    for (m=temp.options.length-1;m>0;m--){
        temp.options[m]=null;
    }

    if (x==5)
        x=3;
    if (x==6)
        x=4;
 
    for (i=0;i<group[x].length;i++){
        temp.options[i]=new Option(group[x][i].text,group[x][i].value);
    }
    temp.options[0].selected=true;
}


function redirect2(x,caly,meski,damski,dowolne,gora,srodek,dol){

    var group=new Array(3)
    var groupUsyt=new Array(3)
    for (i=0; i<3; i++){
        group[i]=new Array()
        groupUsyt[i]=new Array()
    }
var wagonde = document.getElementById('wagondelux'); 
    group[0][0]=new Option(caly,"0")

    group[1][0]=new Option(caly,"0")
    group[1][1]=new Option(meski,"1")
    group[1][2]=new Option(damski,"2")

    group[2][0]=new Option(caly,"0")
    group[2][1]=new Option(meski,"1")
    group[2][2]=new Option(damski,"2")
  
     groupUsyt[0][0]=new Option(dowolne,"0")

    groupUsyt[1][0]=new Option(dowolne,"0")
    groupUsyt[1][1]=new Option(gora,"1")
    groupUsyt[1][2]=new Option(dol,"3")

    groupUsyt[2][0]=new Option(dowolne,"0")
    groupUsyt[2][1]=new Option(gora,"1")
    groupUsyt[2][2]=new Option(srodek,"2")
    groupUsyt[2][3]=new Option(dol,"3")

    var temp=document.rkf.plec
    var tempUsyt=document.rkf.usytuowanie

    for (m=temp.options.length-1;m>0;m--){
        temp.options[m]=null
    }
    for (m=tempUsyt.options.length-1;m>0;m--){
        tempUsyt.options[m]=null
    }

    for (i=0;i<group[x].length;i++){
        temp.options[i]=new Option(group[x][i].text,group[x][i].value)     
    }
    for (i=0;i<groupUsyt[x].length;i++){
        tempUsyt.options[i]=new Option(groupUsyt[x][i].text,groupUsyt[x][i].value)
    }
    temp.options[0].selected=true
    tempUsyt.options[0].selected=true
}


function redirect3(x,dowolne,gora,srodek,dol){

    var groups=document.rkf.klasa.options.length
    var group=new Array(groups)
    for (i=0; i<groups; i++)
        group[i]=new Array()

    group[0][0]=new Option(dowolne,"0")
    group[0][1]=new Option(gora,"1")
    group[0][2]=new Option(dol,"3")

    group[1][0]=new Option(dowolne,"0")
    group[1][1]=new Option(gora,"1")
    group[1][2]=new Option(srodek,"2")
    group[1][3]=new Option(dol,"3")
 
    group[2][0]=new Option(dowolne,"0")
    group[2][1]=new Option(gora,"1")
    group[2][2]=new Option(srodek,"2")
    group[2][3]=new Option(dol,"3")

    group[3][0]=new Option(dowolne,"0")
    group[3][1]=new Option(gora,"1")
    group[3][2]=new Option(srodek,"2")
    group[3][3]=new Option(dol,"3")

    var temp=document.rkf.usytuowanie
    for (m=temp.options.length-1;m>0;m--)
        temp.options[m]=null
    for (i=0;i<group[x].length;i++){
        temp.options[i]=new Option(group[x][i].text,group[x][i].value)
    }
    temp.options[0].selected=true
}

function wyborRodzajuUsera(uInd,labuInd,uIndFirma,labuIndFirma,icDysp,labicDysp,icPracSprzed,labicPracSprzed,icPracBKD1,labicPracBKD1,icPracBKD2,labicPracBKD2,icPracBRZ,labicPracBRZ,icHelpdesk,labicHelpdesk, icCOK, labicCOK, icCallCenter,labicCallCenter, icPracMarketing,labicPracmarketing,icPracKoloroweKarty,labIcPracKoloroweKarty,ajentAdmin,labAjentFirmy,ajentPracow,labAjentPracFirmy,pracowKoleiOb,labPracKoleiOb,AdminIC,AdminLok, icDyspozytura, labIcDyspozytura){
    document.all.firma.style.display=(false)?"block":"none";
    if (document.daneKlienta.firmaid.value==1 && AdminIC==100){
        var pozycja;
        var x, q;
        for (q = document.daneKlienta.uzytktypkod.options.length; q>=0; q--) 
            document.daneKlienta.uzytktypkod.options[q]=null;
        pozycja = document.createElement("option");
        pozycja.setAttribute('value',uInd);
        var txt = document.createTextNode(labuInd);
        pozycja.appendChild(txt)
        daneKlienta.uzytktypkod.appendChild(pozycja);
        pozycja = document.createElement("option");
        pozycja.setAttribute('value',uIndFirma);
        txt = document.createTextNode(labuIndFirma);
        pozycja.appendChild(txt)
        daneKlienta.uzytktypkod.appendChild(pozycja);
    }
    if (document.daneKlienta.firmaid.value==2 && AdminIC==100){
        var pozycja;
        var x, q;
        for (q = document.daneKlienta.uzytktypkod.options.length; q>=0; q--) 
            document.daneKlienta.uzytktypkod.options[q]=null;
        pozycja = document.createElement("option");
        pozycja.setAttribute('value',icDysp);
        var txt = document.createTextNode(labicDysp);
        pozycja.appendChild(txt)
        daneKlienta.uzytktypkod.appendChild(pozycja);
        pozycja = document.createElement("option");
        pozycja.setAttribute('value',icPracSprzed);
        txt = document.createTextNode(labicPracSprzed);
       pozycja.appendChild(txt)
      daneKlienta.uzytktypkod.appendChild(pozycja);
        pozycja = document.createElement("option");
        pozycja.setAttribute('value',icPracBKD1);
        txt = document.createTextNode(labicPracBKD1);
       pozycja.appendChild(txt)
      daneKlienta.uzytktypkod.appendChild(pozycja);
        pozycja = document.createElement("option");
        pozycja.setAttribute('value',icPracBKD2);
        txt = document.createTextNode(labicPracBKD2);
       pozycja.appendChild(txt)
      daneKlienta.uzytktypkod.appendChild(pozycja);
        pozycja = document.createElement("option");
        pozycja.setAttribute('value',icPracBRZ);
        txt = document.createTextNode(labicPracBRZ);
       pozycja.appendChild(txt)
       daneKlienta.uzytktypkod.appendChild(pozycja);
          pozycja = document.createElement("option");
        pozycja.setAttribute('value',icHelpdesk);
        txt = document.createTextNode(labicHelpdesk);
        pozycja.appendChild(txt)
        daneKlienta.uzytktypkod.appendChild(pozycja);
        pozycja = document.createElement("option");
        pozycja.setAttribute('value',icCOK);
        txt = document.createTextNode(labicCOK);
        pozycja.appendChild(txt)
        daneKlienta.uzytktypkod.appendChild(pozycja);
        pozycja = document.createElement("option");
        pozycja.setAttribute('value',icCallCenter);
        txt = document.createTextNode(labicCallCenter);
        pozycja.appendChild(txt)
        daneKlienta.uzytktypkod.appendChild(pozycja);
        pozycja = document.createElement("option");
        pozycja.setAttribute('value',icPracMarketing);
        txt = document.createTextNode(labicPracmarketing);
        pozycja.appendChild(txt)
        daneKlienta.uzytktypkod.appendChild(pozycja);
        pozycja = document.createElement("option");
        pozycja.setAttribute('value',icPracKoloroweKarty);
        txt = document.createTextNode(labIcPracKoloroweKarty);
        pozycja.appendChild(txt)
        daneKlienta.uzytktypkod.appendChild(pozycja);
        pozycja = document.createElement("option");
        pozycja.setAttribute('value',pracowKoleiOb);
        txt = document.createTextNode(labPracKoleiOb);
        pozycja.appendChild(txt)
        daneKlienta.uzytktypkod.appendChild(pozycja);
        pozycja = document.createElement("option");
        pozycja.setAttribute('value',icDyspozytura);
        txt = document.createTextNode(labIcDyspozytura);
        pozycja.appendChild(txt);
        daneKlienta.uzytktypkod.appendChild(pozycja);
    }
    if (daneKlienta.firmaid.value>2){
       var pozycja;
       var x, q;
       for (q = document.daneKlienta.uzytktypkod.options.length; q>=0; q--) 
            document.daneKlienta.uzytktypkod.options[q]=null;
        if(AdminIC==100){
            pozycja = document.createElement("option");
            pozycja.setAttribute('value',ajentAdmin);
            var txt = document.createTextNode(labAjentFirmy);
            pozycja.appendChild(txt)
            daneKlienta.uzytktypkod.appendChild(pozycja);
        }
        if(AdminLok==ajentAdmin){
            pozycja = document.createElement("option");
            pozycja.setAttribute('value',ajentPracow);
            var txt = document.createTextNode(labAjentPracFirmy);
            pozycja.appendChild(txt)
            daneKlienta.uzytktypkod.appendChild(pozycja);
        }
    }
        if ((document.daneKlienta.uzytktypkod.value>=130 && document.daneKlienta.uzytktypkod.value<200) || document.daneKlienta.uzytktypkod.value==250){
        document.daneKlienta.adminip.disabled=false;
          if (document.daneKlienta.uzytktypkod.value==160 ){ 
              document.all.DaneCOK.style.display="block";
              document.all.DanePociagiKolejObca.style.display=(false)?"block":"none";
        }else if (document.daneKlienta.uzytktypkod.value==250 ){ 
              document.all.DanePociagiKolejObca.style.display="block";
              document.all.DaneCOK.style.display=(false)?"block":"none";
        }else
            {
           document.all.DaneCOK.style.display=(false)?"block":"none";
            }
       }
        else{
        document.daneKlienta.adminip.value="";
        document.daneKlienta.adminip.disabled=true;        
        document.all.DaneCOK.style.display=(false)?"block":"none";
        document.all.DanePociagiKolejObca.style.display=(false)?"block":"none";
        }
}

function wyborIndFirmaStart(ulica, kod, miasto) {
    document.all.firma.style.display=(false)?"block":"none";
    document.all.DaneCOK.style.display="none";
    document.all.DanePociagiKolejObca.style.display="none";
    document.daneKlienta.ulica.disabled = false;
    document.daneKlienta.kodpocztowy.disabled = false;
    document.daneKlienta.miasto.disabled = false;
    document.all.Napisy.innerHTML = "<font color=\"red\">*</font>"+ulica+":";
    document.all.Napisy1.innerHTML = "<font color=\"red\">*</font>"+kod+"/ "+miasto+":";
}

function wyborIndFirma(ulica, kod, miasto) {
    if (daneKlienta.uzytktypkod.value==990) {
        document.all.firma.style.display=(true)?"block":"none";
        document.all.DaneCOK.style.display="none";
        document.all.DanePociagiKolejObca.style.display="none";
        document.daneKlienta.ulica.disabled = true;
        document.daneKlienta.kodpocztowy.disabled = true;
        document.daneKlienta.miasto.disabled = true;
        document.daneKlienta.ulica.value="";
        document.daneKlienta.kodpocztowy.value="";
        document.daneKlienta.miasto.value="";
        document.all.Napisy.innerHTML = "<font color=\"gray\">"+ulica+":</font>";
        document.all.Napisy1.innerHTML = "<font color=\"gray\">"+kod+"/ "+miasto+":</font>";
    }
    else {
        document.all.firma.style.display=(false)?"block":"none";
        document.daneKlienta.ulica.disabled = false;
        document.daneKlienta.kodpocztowy.disabled = false;
        document.daneKlienta.miasto.disabled = false;
        document.all.Napisy.innerHTML = "<font color=\"red\">*</font>"+ulica+":";
        document.all.Napisy1.innerHTML = "<font color=\"red\">*</font>"+kod+"/ "+miasto+":";
        if ((document.daneKlienta.uzytktypkod.value>=130 && document.daneKlienta.uzytktypkod.value<200) || document.daneKlienta.uzytktypkod.value==250){            
        document.daneKlienta.adminip.disabled=false;
        if (document.daneKlienta.uzytktypkod.value==160 ){ 
              document.all.DaneCOK.style.display="block";
              document.all.DanePociagiKolejObca.style.display="none";
        }else if (document.daneKlienta.uzytktypkod.value==250 ){ 
              document.all.DanePociagiKolejObca.style.display="block";
              document.all.DaneCOK.style.display="none";
        }else
        {
         document.all.DaneCOK.style.display="none";
         document.all.DanePociagiKolejObca.style.display="none";
        }
         }
        else{
        document.daneKlienta.adminip.value="";
        document.daneKlienta.adminip.disabled=true;        
        document.all.DaneCOK.style.display="none";
        document.all.DanePociagiKolejObca.style.display="none";
        }
    }
}
function jesliToFirmaStart(ulica, kod, miasto) {
    document.all.DaneFirma.disabled= true;
    document.all.UWAGA.style.display=(false)?"block":"none";
        /*
       if(document.daneKlienta.jesliAdresWysylka.checked == true) {
         document.all.DaneKorespondencyjneFirmy.disabled=false;
         document.daneKlienta.firmaWysylka.disabled = false;
        }
        */
    document.all.Napisy.innerHTML = "<font color=\"red\">*</font>"+ulica+":";
    document.all.Napisy1.innerHTML = "<font color=\"red\">*</font>"+kod+"/ "+miasto+":";
    document.all.Napisy2.innerHTML = "<font color=\"gray\">"+ulica+":</font>";
    document.all.Napisy3.innerHTML = "<font color=\"gray\">"+kod+"/ "+miasto+":</font>";
    if (document.daneKlienta.nazwafirmy.value.length>0)
    {
    document.daneKlienta.jesliFirma.checked = true;

    }
    jesliToFirma(ulica, kod, miasto);
}

function jesliToFirma(ulica, kod, miasto) {
    if(document.daneKlienta.jesliFirma.checked == true) {
        document.daneKlienta.ulica.disabled = true;
        document.daneKlienta.kodpocztowy.disabled = true;
        document.daneKlienta.miasto.disabled = true;
        document.daneKlienta.ulica.value="";
        document.daneKlienta.kodpocztowy.value="";
        document.daneKlienta.miasto.value="";
        document.all.Napisy.innerHTML = "<font color=\"gray\">"+ulica+":</font>";
        document.all.Napisy1.innerHTML = "<font color=\"gray\">"+kod+"/ "+miasto+":</font>";
	    document.all.Napisy2.innerHTML = "<font color=\"red\">*</font>"+ulica+":";
        document.all.Napisy3.innerHTML = "<font color=\"red\">*</font>"+kod+"/ "+miasto+":";
        document.all.DaneFirma.disabled=false;
        document.all.UWAGA.style.display=(true)?"block":"none";
        document.daneKlienta.nazwafirmy.disabled = false;
        document.daneKlienta.ulicafirmy.disabled = false;
        document.daneKlienta.nipfirmy.disabled = false;
        document.daneKlienta.kodpocztowyfirmy.disabled = false;
        document.daneKlienta.miastofirmy.disabled = false;
        /*
        if(document.daneKlienta.jesliAdresWysylka.checked == true) {
                document.all.DaneKorespondencyjneFirmy.disabled=false;
                document.daneKlienta.firmaWysylka.disabled = false;
        }
        */
    }
    else {
        document.daneKlienta.ulica.disabled = false;
        document.daneKlienta.kodpocztowy.disabled = false;
        document.daneKlienta.miasto.disabled = false;
         document.all.UWAGA.style.display=(false)?"block":"none";
      document.daneKlienta.nazwafirmy.disabled = true;
        document.daneKlienta.ulicafirmy.disabled = true;
        document.daneKlienta.nipfirmy.disabled = true;
        document.daneKlienta.kodpocztowyfirmy.disabled = true;
        document.daneKlienta.miastofirmy.disabled = true;

        document.all.Napisy.innerHTML = "<font color=\"red\">*</font>"+ulica+":";
        document.all.Napisy1.innerHTML = "<font color=\"red\">*</font>"+kod+"/ "+miasto+":";
     document.all.Napisy2.innerHTML = "<font color=\"gray\">"+ulica+":</font>";
    document.all.Napisy3.innerHTML = "<font color=\"gray\">"+kod+"/ "+miasto+":</font>";
    document.all.DaneFirma.disabled=true;
    document.daneKlienta.firmaWysylka.disabled = true;
 	 document.all.DaneKorespondencyjneFirmy.disabled=true;
  
        /* 
     if(document.daneKlienta.jesliAdresWysylka.checked == true) {
       document.daneKlienta.ulicaWysylka.disabled = false;
        document.daneKlienta.kodpocztowyWysylka.disabled = false;
        document.daneKlienta.miastoWysylka.disabled = false;
 
      }
      */
    }
}
function jesliFirmaWyczysc(){
    if(document.daneKlienta.jesliFirma.checked == false){
        document.daneKlienta.nazwafirmy.value="";
        document.daneKlienta.ulicafirmy.value="";
        document.daneKlienta.nipfirmy.value="";
        document.daneKlienta.kodpocztowyfirmy.value="";
        document.daneKlienta.miastofirmy.value="";
        document.daneKlienta.firmaWysylka.value="";
       document.daneKlienta.nazwafirmy.disabled = true;
        document.daneKlienta.ulicafirmy.disabled = true;
        document.daneKlienta.nipfirmy.disabled = true;
        document.daneKlienta.kodpocztowyfirmy.disabled = true;
        document.daneKlienta.miastofirmy.disabled = true;
        document.daneKlienta.firmaWysylka.disabled = true;
    }   
}

function jesliAdresWysylkaStart(ulica, kod, miasto) {
    document.all.DaneKorespondencyjneFirmy.disabled=false;
      document.daneKlienta.firmaWysylka.disabled = false;
    document.all.DaneKorespondencyjne.disabled=false;
   if (document.daneKlienta.ulicaWysylka.value.length>0)
    {
    //document.daneKlienta.jesliAdresWysylka.checked = true;
     }
      jesliAresdoWysylki(ulica, kod, miasto);
}

function jesliAresdoWysylki(ulica, kod, miasto) {
if(document.daneKlienta.disabledData.value==0){  
    
    if(document.daneKlienta.jesliAdresWysylka.checked == true) {
  	document.all.DaneKorespondencyjne.disabled=false;
    document.daneKlienta.ulicaWysylka.disabled = false;
    document.daneKlienta.kodpocztowyWysylka.disabled = false;
    document.daneKlienta.miastoWysylka.disabled = false;

    if(document.daneKlienta.nazwafirmy.disabled == true){
    document.daneKlienta.firmaWysylka.value="";
    document.daneKlienta.firmaWysylka.disabled=true;
   document.all.DaneKorespondencyjneFirmy.disabled=true;
            }
        else
        {
        document.all.DaneKorespondencyjneFirmy.disabled=false;
         document.daneKlienta.firmaWysylka.disabled=false;
        }
     }
    else {
       document.daneKlienta.ulicaWysylka.value="";
        document.daneKlienta.kodpocztowyWysylka.value="";
        document.daneKlienta.miastoWysylka.value="";
  document.daneKlienta.ulicaWysylka.disabled = true;
    document.daneKlienta.kodpocztowyWysylka.disabled = true;
    document.daneKlienta.miastoWysylka.disabled = true;

  document.daneKlienta.firmaWysylka.value="";
    document.all.DaneKorespondencyjne.disabled=true;
        document.daneKlienta.firmaWysylka.disabled=true;
  document.all.DaneKorespondencyjneFirmy.disabled=true; 
      }
}
}


function jesliAdresWysylkaWyczysc(){
    /*
    if(document.daneKlienta.jesliAdresWysylka.checked == false){
        document.daneKlienta.ulicaWysylka.value="";
        document.daneKlienta.kodpocztowyWysylka.value="";
        document.daneKlienta.miastoWysylka.value="";
        document.daneKlienta.ulicaWysylka.disabled = true;
        document.daneKlienta.kodpocztowyWysylka.disabled = true;
        document.daneKlienta.miastoWysylka.disabled = true;

    }
    */
}

function jesliMiejsceSasiadujaceStart() {
    if(document.rkf.isMiejsceSasiadujace.checked == true) {
 	document.all.MiejsceSasiadujace.style.display=(true)?"block":"none";
    }
    else {
 	document.all.MiejsceSasiadujace.style.display=(false)?"block":"none";
    }
 }

function jesliMiejsceSasiadujace() {
    if(document.rkf.isMiejsceSasiadujace.checked == true) {
 	document.all.MiejsceSasiadujace.style.display=(true)?"block":"none";
    }
    else {
 	document.all.MiejsceSasiadujace.style.display=(false)?"block":"none";
    }
}

function jesliMiejsceSasiadujaceWyczysc(){
    if(document.rkf.isMiejsceSasiadujace.checked == false){
        document.rkf.nrWagonu.value="";
        document.rkf.nrMiejsca.value="";
    }   
}

 function jesliFaktura() {
    if(document.rkh.faktura.checked == true) {
 	document.all.TxtFaktura.style.display=(true)?"block":"none";
    }
    else {
 	document.all.TxtFaktura.style.display=(false)?"block":"none";
    }
}

 function jesliKolorowaKarta() {
    if(document.rkh.platnosc_kolorowa_karta.checked == true) {
        document.all.kolorowa_karta.style.display=(true)?"block":"none";
        document.all.dla.readOnly=false;
 
        document.all.dla.value=document.all.dla_org.value;
         }
    else {
        document.all.kolorowa_karta.style.display=(false)?"block":"none";
        document.all.dla.readOnly=false;
        document.all.numer_kolorowej_karty.value="";
    }
}

function edycjaDanych(ulica, kod, miasto){
   if(document.daneKlienta.typUsera.value==990){
        document.daneKlienta.ulica.disabled = true;
        document.daneKlienta.kodpocztowy.disabled = true;
        document.daneKlienta.miasto.disabled = true;
        document.all.Napisy.innerHTML = "<font color=\"gray\">"+ulica+":</font>";
        document.all.Napisy1.innerHTML = "<font color=\"gray\">"+kod+"/ "+miasto+":</font>";
	document.all.DaneFirma.style.display=(true)?"block":"none"; 
  }
    else{
        if(document.daneKlienta.disabledData.value==1){
            document.daneKlienta.ulica.disabled = true;
            document.daneKlienta.kodpocztowy.disabled = true;
            document.daneKlienta.miasto.disabled = true;
            document.all.Napisy.innerHTML = "<font color=\"gray\">*"+ulica+":</font>";
            document.all.Napisy1.innerHTML = "<font color=\"gray\">*"+kod+"/ "+miasto+":</font>";
            document.all.DaneFirma.style.display=(false)?"block":"none";    
             }
        else{
            document.daneKlienta.ulica.disabled = false;
            document.daneKlienta.kodpocztowy.disabled = false;
            document.daneKlienta.miasto.disabled = false;
            document.all.Napisy.innerHTML = "<font color=\"red\">*</font>"+ulica+":";
            document.all.Napisy1.innerHTML = "<font color=\"red\">*</font>"+kod+"/"+miasto+":";
            document.all.DaneFirma.style.display=(false)?"block":"none";        
        }
    }    
}
function PokazAktualnosciStart()
{
document.all.PoleAktualnosci.style.display=(false)?"block":"none";
document.all.PoleAktualnosci1.style.display=(false)?"block":"none";
document.all.PoleAktualnosci2.style.display=(false)?"block":"none";
document.all.PoleAktualnosci3.style.display=(false)?"block":"none";
}

function PokazAktualnosci()
{
document.all.p1.style.color="#FF8000";
document.all.p1.style.font=12+"px;"; 
document.all.p2.style.color="#103293";
document.all.p2.style.font=11+"px;";
document.all.p3.style.color="#103293";
document.all.p3.style.font=11+"px;";
document.all.p4.style.color="#103293";
document.all.p4.style.font=11+"px;";
document.all.PoleAktualnosci.style.display=(true)?"block":"none";
document.all.PoleAktualnosci1.style.display=(false)?"block":"none";
document.all.PoleAktualnosci2.style.display=(false)?"block":"none";
document.all.PoleAktualnosci3.style.display=(false)?"block":"none";
}

function PokazAktualnosci1()
{
document.all.p1.style.color="#103293";
document.all.p1.style.font=11+"px;"; 
document.all.p2.style.color="#FF8000";
document.all.p2.style.font=12+"px;";
document.all.p3.style.color="#103293";
document.all.p3.style.font=11+"px;";
document.all.p4.style.color="#103293";
document.all.p4.style.font=11+"px;";
document.all.PoleAktualnosci1.style.display=(true)?"block":"none";
document.all.PoleAktualnosci.style.display=(false)?"block":"none";
document.all.PoleAktualnosci2.style.display=(false)?"block":"none";
document.all.PoleAktualnosci3.style.display=(false)?"block":"none";
}

function PokazAktualnosci2()
{
document.all.p1.style.color="#103293";
document.all.p1.style.font=11+"px;"; 
document.all.p2.style.color="#103293";
document.all.p2.style.font=11+"px;";
document.all.p3.style.color="#FF8000";
document.all.p3.style.font=12+"px;";
document.all.p4.style.color="#103293";
document.all.p4.style.font=11+"px;";
document.all.PoleAktualnosci2.style.display=(true)?"block":"none";
document.all.PoleAktualnosci1.style.display=(false)?"block":"none";
document.all.PoleAktualnosci.style.display=(false)?"block":"none";
document.all.PoleAktualnosci3.style.display=(false)?"block":"none";
}

function PokazAktualnosci3()
{
document.all.p1.style.color="#103293";
document.all.p1.style.font=11+"px;"; 
document.all.p2.style.color="#103293";
document.all.p2.style.font=11+"px;";
document.all.p3.style.color="#103293";
document.all.p3.style.font=11+"px;";
document.all.p4.style.color="#FF8000";
document.all.p4.style.font=12+"px;";
document.all.PoleAktualnosci3.style.display=(true)?"block":"none";
document.all.PoleAktualnosci1.style.display=(false)?"block":"none";
document.all.PoleAktualnosci2.style.display=(false)?"block":"none";
document.all.PoleAktualnosci.style.display=(false)?"block":"none";
}

function zmien1()
{
    var temp=''; 
    temp=document.aktualnosci_zap.aktualnosci.value; 
    document.aktualnosci_zap.aktualnosci.value=document.aktualnosci_zap.aktualnosci1.value; 
    document.aktualnosci_zap.aktualnosci1.value=temp; 
    var temp1=''; 
    temp1=document.aktualnosci_zap.news_tyt.value; 
    document.aktualnosci_zap.news_tyt.value=document.aktualnosci_zap.news_tyt1.value; 
    document.aktualnosci_zap.news_tyt1.value=temp1;

    var tempa='';
    tempa=document.aktualnosci_zap.aktualnoscia.value; 
    document.aktualnosci_zap.aktualnoscia.value=document.aktualnosci_zap.aktualnosci1a.value; 
    document.aktualnosci_zap.aktualnosci1a.value=tempa; 
    var temp1a=''; 
    temp1a=document.aktualnosci_zap.news_tyta.value; 
    document.aktualnosci_zap.news_tyta.value=document.aktualnosci_zap.news_tyt1a.value; 
    document.aktualnosci_zap.news_tyt1a.value=temp1a; 

    if(document.aktualnosci_zap.news.checked==true) 
        var temp2a=1; 
    else 
        var temp2a=0; 
    if(document.aktualnosci_zap.news1.checked==true) 
        document.aktualnosci_zap.news.checked=true; 
    else 
        document.aktualnosci_zap.news.checked=false; 
    if(temp2a==1) 
        document.aktualnosci_zap.news1.checked=true; 
    else 
        document.aktualnosci_zap.news1.checked=false;
}

function zmien2()
{
    var temp=''; 
    temp=document.aktualnosci_zap.aktualnosci1.value; 
    document.aktualnosci_zap.aktualnosci1.value=document.aktualnosci_zap.aktualnosci2.value; 
    document.aktualnosci_zap.aktualnosci2.value=temp; 
    var temp1=''; 
    temp1=document.aktualnosci_zap.news_tyt1.value; 
    document.aktualnosci_zap.news_tyt1.value=document.aktualnosci_zap.news_tyt2.value; 
    document.aktualnosci_zap.news_tyt2.value=temp1;

    var tempa='';
    tempa=document.aktualnosci_zap.aktualnosci1a.value; 
    document.aktualnosci_zap.aktualnosci1a.value=document.aktualnosci_zap.aktualnosci2a.value; 
    document.aktualnosci_zap.aktualnosci2a.value=tempa; 
    var temp1a=''; 
    temp1a=document.aktualnosci_zap.news_tyt1a.value; 
    document.aktualnosci_zap.news_tyt1a.value=document.aktualnosci_zap.news_tyt2a.value; 
    document.aktualnosci_zap.news_tyt2a.value=temp1a; 

    if(document.aktualnosci_zap.news1.checked==true) 
        var temp2a=1; 
    else 
        var temp2a=0; 
    if(document.aktualnosci_zap.news2.checked==true) 
        document.aktualnosci_zap.news1.checked=true; 
    else 
        document.aktualnosci_zap.news1.checked=false; 
    if(temp2a==1) 
        document.aktualnosci_zap.news2.checked=true; 
    else 
        document.aktualnosci_zap.news2.checked=false;
}

function zmien3()
{
    var temp=''; 
    temp=document.aktualnosci_zap.aktualnosci2.value; 
    document.aktualnosci_zap.aktualnosci2.value=document.aktualnosci_zap.aktualnosci3.value; 
    document.aktualnosci_zap.aktualnosci3.value=temp; 
    var temp1=''; 
    temp1=document.aktualnosci_zap.news_tyt2.value; 
    document.aktualnosci_zap.news_tyt2.value=document.aktualnosci_zap.news_tyt3.value; 
    document.aktualnosci_zap.news_tyt3.value=temp1;

    var tempa='';
    tempa=document.aktualnosci_zap.aktualnosci2a.value; 
    document.aktualnosci_zap.aktualnosci2a.value=document.aktualnosci_zap.aktualnosci3a.value; 
    document.aktualnosci_zap.aktualnosci3a.value=tempa; 
    var temp1a=''; 
    temp1a=document.aktualnosci_zap.news_tyt2a.value; 
    document.aktualnosci_zap.news_tyt2a.value=document.aktualnosci_zap.news_tyt3a.value; 
    document.aktualnosci_zap.news_tyt3a.value=temp1a; 

    if(document.aktualnosci_zap.news2.checked==true) 
        var temp2a=1; 
    else 
        var temp2a=0; 
    if(document.aktualnosci_zap.news3.checked==true) 
        document.aktualnosci_zap.news2.checked=true; 
    else 
        document.aktualnosci_zap.news2.checked=false; 
    if(temp2a==1) 
        document.aktualnosci_zap.news3.checked=true; 
    else 
        document.aktualnosci_zap.news3.checked=false;
}






function setCookie(c_name,value,expiredays)
            {
                var exdate=new Date();
                exdate.setDate(expiredays)
                document.cookie=c_name+ "=" +escape(value)+
                ((expiredays==null) ? "" : ";expires="+exdate)                
            }

            function getCookie(c_name)
            {
                if (document.cookie.length>0)
                {
                    c_start=document.cookie.indexOf(c_name + "=")
                    if (c_start!=-1)
                    { 
                        c_start=c_start + c_name.length+1 
                        c_end=document.cookie.indexOf(";",c_start)
                        if (c_end==-1) c_end=document.cookie.length
                        return unescape(document.cookie.substring(c_start,c_end))
                    } 
                }
                return null
            } 

function kontrola(pole, maxlimit) 
{
if (pole.value.length > maxlimit)
    pole.value = pole.value.substring(0, maxlimit);
}

function eCardTransakcje_Kontrola()
{
    if(document.Szukaj.nazwa_szukaj.value.length>1 || document.Szukaj.loginMail_szukaj.value.length>5 || document.Szukaj.pesel_szukaj.value.length>8){
        if(document.Szukaj.nazwa_szukaj.value.length>1 && document.Szukaj.loginMail_szukaj.value.length<6 && document.Szukaj.loginMail_szukaj.value.length>0)
        { 
        if (document.Szukaj.pesel_szukaj.value.length>0 && document.Szukaj.pesel_szukaj.value.length<8)
        { 
                alert("Login lub e-mail minimalnie 6 znaków \n(w adresie e-mail musi wystąpić @)\nPesel minimalnie 9 znaków.");
        }else{
             alert("Login lub e-mail minimalnie 6 znaków \n(w adresie e-mail musi wystąpić @).");
        }
        }else{
            document.Szukaj.submit();
        }
    } else {
        if (document.Szukaj.pesel_szukaj.value.length>0 && document.Szukaj.pesel_szukaj.value.length<8)
        {
            alert("Imię i/lub Nazwisko minimalnie 2 znaki \nLogin lub e-mail minimalnie 6 znaków \n(w adresie e-mail musi wystąpić @)\nPesel minimalnie 9 znaków.");
        }
        else{
            alert("Imię i/lub Nazwisko minimalnie 2 znaki \nLogin lub e-mail minimalnie 6 znaków \n(w adresie e-mail musi wystąpić @).");
        }
    }
}

function formatCeny(wartosc) 
{
var cena= ""+wartosc;
var kwota = wartosc;
var jestKropa=0;
var txt="";
cenaTXT="";
groszeTXT="";
groszeTXT = ""+wartosc%100;
groszeTXT= groszeTXT.substring(0,groszeTXT.indexOf('.'));
jestKropa=cena.indexOf('.');
if (jestKropa>=0)
{
cenaTXT = cena.substring(0,jestKropa);
    if (cena.length > 2)
    {
    if ((wartosc%100) <10)
        txt =""+cenaTXT.substring(0,cenaTXT.length-2)+",0"+groszeTXT;
    else
        txt =""+cenaTXT.substring(0,cenaTXT.length-2)+","+groszeTXT;
    }
    else
    {
    if ((wartosc%100) <10)
        txt ="0,0"+groszeTXT;
    else
        txt ="0,"+groszeTXT;
    }
}
else
{
    if (cena.length > 2)
    {
    if ((wartosc%100) <10)
        txt =""+cena.substring(0,cena.length-2)+",0"+(wartosc%100);
    else
        txt =""+cena.substring(0,cena.length-2)+","+(wartosc%100);
    }
    else
    {
    if ((wartosc%100) <10)
        txt ="0,0"+(wartosc%100);
    else
        txt ="0,"+(wartosc%100);
    }

}

      return txt;
}

function obliczBilet(wartosc) 
{
var cena= 0;
var procent = document.zwrotBiletow.procBilet.value;
var txt="";
   cena = Math.round((wartosc*procent)/100);
   txt=formatCeny(cena);
    document.zwrotBiletow.zwrotBilet.value=txt;

}
function obliczMiejscowke(wartosc) 
{
var cena= 0;
var procent = document.zwrotBiletow.procRez.value;
var txt="";
   cena = Math.round((wartosc*procent)/100);
   txt=formatCeny(cena);
    document.zwrotBiletow.zwrotMiejscowka.value=txt;

}



function kompletnosc_subkontyngent(){
var pola = "";
var koniec = false;

    if(dlugosc_pol(document.zwrotBiletow.zwrotBilet.length) == 0 || cena_OK(document.zwrotBiletow.zwrotBilet.value) == 0){
        
	pola+=" -  Kwota za bilet \n";
	koniec=true;
    }

    if(document.zwrotBiletow.powodBilet.value=="" || dlugosc_pol(document.zwrotBiletow.powodBilet.length) == 0){
	pola+=" -  Powód zwrotu biletu\n";
	koniec=true;
    }
		
    if(dlugosc_pol(document.zwrotBiletow.zwrotMiejscowka.length) == 0 || cena_OK(document.zwrotBiletow.zwrotMiejscowka.value) == 0){
	pola+=" -  Kwota za rezerwację\n";
	koniec=true;
    }

    if(document.zwrotBiletow.powodMiejscowka.value=="" || dlugosc_pol(document.zwrotBiletow.powodMiejscowka.length) == 0){
	pola+=" -  Powód zwrotu rezerwacji\n";
	koniec=true;
    }

    if(!koniec){
	    document.zwrotBiletow.submit();
	}
    
    else {
	if(pola != "")
            alert("Popraw lub wypełnij pola:\n" + pola);
    }
}


function zmianaDanychBilet1(imienazwisko, poprpola){
var pola = "";
var koniec = false;

    if(document.fzmien1.podrozny.value=="" || tylko_litery(document.fzmien1.podrozny.value) == 0 || poprawna_nazwa(document.fzmien1.podrozny.value) == 0){
	pola+=" - " +  imienazwisko + "\n";
	koniec=true;
    }

    if(!koniec){
	document.fzmien1.submit();
    }
    else {
	if(pola != "")
            alert(poprpola + ":\n" + pola);
    }
}



function telefon_MMS(inf) {
var OK = 1;
var NO = 0;
var dlugosc = 0;
var nrTel48= document.wysylkaMMS.tel.value.substring(0,3);

    dlugosc = document.wysylkaMMS.tel.length;

    if(dlugosc == 0)
            return NO;

    if (tylko_cyfra1(document.wysylkaMMS.tel.value) == 0){
            alert(inf);
            document.wysylkaMMS.tel.focus();
            return NO;
    }

            if (nrTel48<480 || nrTel48>489)
            {
             alert(inf);
             document.wysylkaMMS.tel.focus();
             return NO;
             }

    return OK;
}

function sprTelMMS(telefon, inf, poprpola){
var pola = "";
var koniec = false;


    if(document.wysylkaMMS.tel.value =="" || telefon_MMS(inf) == 0){
	pola+=" - " + telefon + "\n";
	koniec=true;
    }

    if(!koniec){
        document.wysylkaMMS.submit();
    }
    else {
        if(pola != "")
            alert(poprpola );
    }
}

function getStationNameByIbnr(ibnrField, outFieldId) {
    var ibnr = document.getElementById(ibnrField).value;
    if (ibnr === "") {
        document.getElementById(outFieldId).innerHTML = "nie wybrano";
    } else if (isNaN(ibnr)) {
        document.getElementById(outFieldId).innerHTML = "<font color=red>! błędny IBNR</font>";
    } else if (ibnr <= 0) {
        document.getElementById(outFieldId).innerHTML = "<font color=red>! IBNR <= 0</font>";
    } else {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                var data = xhr.responseText;
                document.getElementById(outFieldId).innerHTML = data;
            }
        }
        xhr.open('GET', '/Utils?funkcja=NAZWA_STACJI_PO_IBNR&ibnr='+ibnr, true);
        xhr.send(null);
    }
}

function delTanszaOferta(owr_id){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var data = xhr.responseText;
            if (data.indexOf("OK") > -1) {
                for (var i = 1; i < 9; i++) {
                    document.getElementById(i + 'C' + owr_id).innerHTML = '<strike>' + document.getElementById(i + 'C' + owr_id).innerHTML + '<strike>';
                }
                document.getElementById('1B' + owr_id).setAttribute('disabled', 'disabled');
            } else {
                alert(data);
            }
        } 
    }
    xhr.open('GET', '/Utils?funkcja=USUN_TANSZA_OFERTE&owr_id=' + owr_id, true);
    xhr.send(null);
}

function validateTanszaOferta(){
    var isOk = 1;
    var text = "";
    if(document.getElementById("st_od_output").innerHTML==="nie wybrano" || document.getElementById("st_od_output").innerHTML.indexOf('!')>-1){
        isOk = 0;
        text = "Proszę uzupełnić/poprawić stację od.";
    } else if(document.getElementById("st_do_output").innerHTML==="nie wybrano" || document.getElementById("st_do_output").innerHTML.indexOf('!')>-1){
        isOk = 0;
        text = "Proszę uzupełnić/poprawić stację do.";
    } else if(document.getElementById("st_p1_output").innerHTML.indexOf('!')>-1 || document.getElementById("st_p2_output").innerHTML.indexOf('!')>-1 ||
              document.getElementById("st_p3_output").innerHTML.indexOf('!')>-1 || document.getElementById("st_p4_output").innerHTML.indexOf('!')>-1){
        isOk = 0;
        text = "Proszę poprawić stacje przez.";
    } else {
        var ibnrod = document.getElementById("st_od_input").value;
        var ibnrdo = document.getElementById("st_do_input").value;
        var ibnrp1 = document.getElementById("st_p1_input").value;
        var ibnrp2 = document.getElementById("st_p2_input").value;
        var ibnrp3 = document.getElementById("st_p3_input").value;
        var ibnrp4 = document.getElementById("st_p4_input").value;
        var stacje = new Array(ibnrod, ibnrdo, ibnrp1, ibnrp2, ibnrp3, ibnrp4);
        for (var i = 0; i < 5; i++) {
            if (stacje[i] !== '') {
                for (var j = i + 1; j < 6; j++) {
                    if (stacje[j] !== '' && stacje[i] === stacje[j]) {
                        isOk = 0;
                        text = "Stacje nie mogš się powtarzać.";
                        break;
                    }
                }
            }
            if (isOk === 0) {
                break;
            }
        }
        if (isOk === 1) {
            for (var i = 5; i > 2; i--) {
                if (stacje[i] !== '') {
                    for (var j = i - 1; j > 1; j--) {
                        if (stacje[j] === '') {
                            isOk = 0;
                            text = "Proszę uzupełnić puste stacje przez.";
                            break;
                        }
                    }
                }
                if (isOk === 0) {
                    break;
                }
            }
        }
    }
    if (isOk === 1) {
        document.saveForm.submit();
    } else {
        alert(text);
    }
}

function sprNip(nip_id){
    var ret = 0;

    if (document.getElementById(nip_id).value.length === 0) {
        ret = 0;
    } else if(eval(/^[0-9]{10}$/).test(document.getElementById(nip_id).value)){
        ret = 1;
    } else {
        alert("Nieprawidłowy NIP.\nPowinien się składać z 10 cyfr, bez znaków podziału.");
        document.getElementById(nip_id).focus();
    }
    
    if (ret==1)
    {
        if (!validatenip(document.getElementById(nip_id).value))
        {
            alert("Nieprawidłowy NIP.\nPowinien się składać z 10 cyfr, bez znaków podziału.\nSystem sprawdza cyfrę kontrolnš");
            document.getElementById(nip_id).focus();
            ret =0;
        }
    }

    return ret;
}

function sprNipValue(nip_id){
    var ret = 0;

    if(eval(/^[0-9]{10}$/).test(document.getElementById(nip_id).value)){
        ret = 1;
    }
    return ret;
}

function sprTylkoLiteryICyfry(field_id, message){
    var ret = 0;

    if (document.getElementById(field_id).value.length === 0) {
        ret = 1;
    } else if((eval(/^[A-Za-z]+[0-9]+/).test(document.getElementById(field_id).value)||eval(/^[0-9]+[A-Za-z]+/).test(document.getElementById(field_id).value))&& eval(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/).test(document.getElementById(field_id).value)){
        ret = 1;
    } else {
        alert(message);
        document.getElementById(field_id).focus();
    }

    return ret;
}

function sprNrBiletu(bil_id,msg,typ)
{
    var ret=0;
    if (tylko_cyfra1(bil_id)==0)
    {
        if (typ==0)
        {
            alert(msg)
        }         
    }
    else
    {
        ret=1;
    }
    
    return ret;
}

function sprPesel(pesel,msg,typ)
{    
    var ret=0;
    if (tylko_cyfra1(pesel)==0 || pesel.length!=11 || pesel=='00000000000')
    {
        if (typ==0)
        {
             alert(msg)
         }
    }
    else
    {
        if (!validatepesel(pesel))
        {
            alert(msg);
        }
        else
        {
            ret=1;
        }
        
    }
    
    return ret;
}

function sprDowodOsobisty(dowodOsobosty,msg,typ)
{
    var ret=0;    
    reg = /^[A-Z0-9\-\\\s\\\\\/]{9,30}$/;
    if (!dowodOsobosty.match(reg))
    {
        if (typ==0)
        {
            alert(msg)
        }
    }
    else
    {
        ret=1;
    }
    
    return ret;    
}

function sprIdentyfikator(idOption, identyfikator, msgDowod, msgPesel, typDowod, typPesel, typ){
    var ret = 0;
    if (document.getElementById(idOption).value === typPesel) {
        ret = sprPesel(identyfikator, msgPesel, typ);
    } else if (document.getElementById(idOption).value === typDowod) {
        ret = sprDowodOsobisty(identyfikator, msgDowod, typ);
    }
    return ret;
}

function sprImieNazwisko(imienazwisko,msg,typ,iloscznakow)
{
 var ret=0;    
    if (tylko_litery(imienazwisko)==0 || imienazwisko.length<iloscznakow || hasOtherThanPolishLetters(imienazwisko))
    {
        if (typ==0)
        {
            alert(msg)
        }
    }
    else
    {
        ret=1;
    }
    
    return ret;    
}

function sprEmail(email,msg,typ)
{
     var ret=0;
    if (poprawny_email(email)==0)
    {
        if (typ==0)
        {
            alert(msg)
        }
    }
    else
    {
        ret=1;
    }
    
    return ret;    
}

function kompletnoscDanychLogowanieKontoGosc(bil_id,email,msg)
{
    if (sprNrBiletu(bil_id,'',1)==0  || (email.length!=0 && sprEmail(email,'',1)==0))
    {
        alert(msg);
    }
    else
    {
        document.kontogosclogowanie.submit();        
    }
}

function validatepesel(pesel) {
    var reg = /^[0-9]{11}$/;
    if(reg.test(pesel) == false) {
    return false;}
    else
    {
        var dig = (""+pesel).split("");
        var kontrola = (1*parseInt(dig[0]) + 3*parseInt(dig[1]) + 7*parseInt(dig[2]) + 9*parseInt(dig[3]) + 1*parseInt(dig[4]) + 3*parseInt(dig[5]) + 7*parseInt(dig[6]) + 9*parseInt(dig[7]) + 1*parseInt(dig[8]) + 3*parseInt(dig[9]))%10;
        if(kontrola==0) kontrola = 10;
        kontrola = 10 - kontrola;
        if(parseInt(dig[10])==kontrola)
        return true;
        else
        return false;
    }
 
}

function validatenip(nip) {
	var nip_bez_kresek = nip.replace(/-/g,"");
	var reg = /^[0-9]{10}$/;
	if(reg.test(nip_bez_kresek) == false) {
	return false;}
	else
	{
		var dig = (""+nip_bez_kresek).split("");
		var kontrola = (6*parseInt(dig[0]) + 5*parseInt(dig[1]) + 7*parseInt(dig[2]) + 2*parseInt(dig[3]) + 3*parseInt(dig[4]) + 4*parseInt(dig[5]) + 5*parseInt(dig[6]) + 6*parseInt(dig[7]) + 7*parseInt(dig[8]))%11;
		if(parseInt(dig[9])==kontrola)
		return true;
		else
		return false;
	}
 
}


function validateregon9(regon) {
	var reg = /^[0-9]{9}$/;
	if(reg.test(regon) == false) {
	return false;}
	else
	{
		var dig = (""+regon).split("");
		var kontrola = (8*parseInt(dig[0]) + 9*parseInt(dig[1]) + 2*parseInt(dig[2]) + 3*parseInt(dig[3]) + 4*parseInt(dig[4]) + 5*parseInt(dig[5]) + 6*parseInt(dig[6]) + 7*parseInt(dig[7]))%11;
		if(kontrola == 10) kontrola = 0;
		if(parseInt(dig[8])==kontrola)
		return true;
		else
		return false;
	}
}

function convertString(stringToConvert) {
    return stringToConvert.replace(/&/g, "[#38]");
}
