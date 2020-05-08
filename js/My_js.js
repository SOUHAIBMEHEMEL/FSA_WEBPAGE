function creer_lieu_service() {
    var liste_lieu="<label for=\"lieu_service\">Centre du service</label><select name=\"#\" id=\"destination\" class=\"form-control\" onchange=\"indication_choix()\"> <option value=\"\">... </option>";
    var tab_centres=rechercher_liste_centre();
    var nb_centres=tab_centres.length;

    for (var i=0;i<nb_centres;i++ ) {
        liste_lieu+="<option class=\"options\" value="+i/2+" >"+tab_centres[i]+"</option>";
        i++;
    }
    liste_lieu+="</select>";
    document.getElementById("lieu_service").innerHTML=liste_lieu;
}

function rechercher_liste_centre() {
    var matr_wilaya=document.getElementById("wilaya").value;
    var type_service=document.getElementById("type_service_select").value;
    var choice=matr_wilaya+type_service;
    var tab_centres;
    tab_centres=listes_centres(choice).split('&');
    return tab_centres;
}
function listes_centres(choice) {
    var liste="";
    switch (choice) {
        case "011": {liste="Adrar && Akabli && Aougrout && Aoulef && Bordj Badji Mokhtar && Bouda && Charouine && Deldoul &&  Fenoughil && In Zghmir && Ksar Kaddour &&" +
            "Metarfa && Ouled Ahmed Tammi && Ouled Aissa && Ouled Said && Reggane && Sali && Sebaa && Talmin && Tamantit && Tamekten && Tamest && Timiaouine &&" +
            "Timimoun && Tinerkouk && Tit && Tsabit && Zaouiet Kounta  ";}
        break;
        case "012": {liste="aaa & www & ssss";}
        break;
        case "013": {liste= "PP Adrar & Place des MARTYRES & PP AOUGROUT & C A H AT AOUGROUT & Actel AOULEF & Hai Oumanat Centre Ville Aoulef & PP BORDJ BADJI MOKHTAR &" +
            "B B M CENTRE VILLE & Actel REGGANE & Rue Aimir AEK Reggane & Actel TIMIMOUN & Cité Hassi Ghambou Timimoune & PP ZAOUT KOUNTA & Zaouiet Kounta Centre Ville ";}
        break;

        case "021": {liste="Ain Merane && Benairia && Ben Bouateb && Beni Haoua && Beni Rached && Boukadir && Bouzaghaia && Breira && Chettia && Chlef &&" +
            "Dhahra && El Hadjadj && El Karimia && El Marsa && Harchoun && Harenfa && Labiod Madjadja && Mossaddek && Oued Fodda && Oued Ghoussine && sly &&" +
            "Ouled Abbes && Ouled Abdelkader && Ouled Fares && Oum Drou && Sendjas && Sidi Abderrahmane && Sidi Akkacha && Sobha && Tadjena && Talassa && " +
            "Taougrit && Tnes && Zeboudja ";}
        break;
        case "022":
        break;
        case "023": {liste="Actel AIN MERANE & CITE LE CAVE ROUTE PRICIPAL & PP BENI HAOUA & Route NL N & Actel CHLEF & RUE BEN BADIS& Actel CHETTIA &" +
            "ZONE A1 CHETTIA & PP H-BADR (CHORFA) & HAY BADR ZONE 02 & PP H-HOURIA & Rue ABDELI AEK RTE PRINCIPAL & PP OUED SLY & Hai EL FETH & PP OUED FODDA & CITE HAMADOUCHE AEK & Actel TENES & RUE AIT DJIDA MILOUD & PP ZEBOUDJA & Route NL N";}
        break;

        case "031": {liste=" Aflou && Ain Madhi && Ain Sidi Ali && Beidha && Bennasser Benchohra && Brida && Al Assafia && El Ghicha && El Houaita && Gheltat Sidi Saad &&" +
            "Hadj Mechri && Hassi Delaa && Hassi R'Mel && Kheneg && Ksar El Hirane && Laghouat && Oued Morra && Oued M'Zi && Sebgag && Sidi Bouzid && Sidi Makhlouf &&" +
            "Tadjemout && Tadjerouna && Taouila";}
        break;
        case "032":
        break;
        //case "033": {liste=""} //AUCUN RESULTAT A CE MOMENT

        case "041": {liste=" Ain Babouche && Ain Beida &&  Ain Diss && Ain Fakroun && Ain Kercha && Ain M'Lila && Ain Zitoun && Behir Chergui && Berriche &&" +
            "Bir Chouhahda && Dhalaa && El Amiria && El Belala && El Djazia && El Fedjouz Boughrara Saoudi && El Harmilia && Fkirina && Hanchir Toumghani &&" +
            "Ksar sbahi && Meskiana && Oued Nini && Ouled Gacem && Ouled Hamla && Ouled Zouai && Oum El Bouaghi && Rahia && Sigus && Souk Naamane && Zorg ";}
    }
    return liste;
}

function indication_choix() {
    var tab_centres=rechercher_liste_centre();
    var choice_selected=document.getElementById("destination").value;
    console.log(choice_selected);
    var value_selected=Number(choice_selected);
    value_selected=2*value_selected+1;
    var choix_information=tab_centres[value_selected];
    var info="<label>"+choix_information+"</label>";
    document.getElementById("information_centre").innerHTML=info;
}

document.getElementById("submit").onclick=function () {
    document.getElementById("validate").style.display="Block";
    document.getElementById("validate").style.backgroundColor="rgba(155,155,155,0.3)";
    document.getElementById("submit").style.display="none";
}

document.getElementById("no_submit").onclick=function () {
    document.getElementById("validate").style.display="none";
    document.getElementById("submit").style.display="Block";
}