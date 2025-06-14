export type ImageCategory = 
    | 'dopplungen'
    | 'Dopplungen2'
    | 'k_ck'
    | 'tz_z' 
    | 's_ss_ß' 
    | 'e_ä_eu_äu' 
    | 'Komposita'
    | 'h' 
    | 'sch';

export const imageAssets: Record<ImageCategory, { [key: string]: any }> = {
    "dopplungen": {
        "Bagger": require("./assets/images/Wordbildkarten/Dopplungen/Bagger.png"),
        "Barren": require("./assets/images/Wordbildkarten/Dopplungen/Barren.png"),
        "Besen": require("./assets/images/Wordbildkarten/Dopplungen/Besen.png"),
        "Bffelbullen": require("./assets/images/Wordbildkarten/Dopplungen/Bffelbullen.png"),
        "Blatt": require("./assets/images/Wordbildkarten/Dopplungen/Blatt.png"),
        "bogen": require("./assets/images/Wordbildkarten/Dopplungen/bogen.png"),
        "Boje": require("./assets/images/Wordbildkarten/Dopplungen/Boje.png"),
        "Braten": require("./assets/images/Wordbildkarten/Dopplungen/Braten.png"),
        "Brunnen": require("./assets/images/Wordbildkarten/Dopplungen/Brunnen.png"),
        "Butter": require("./assets/images/Wordbildkarten/Dopplungen/Butter.png"),
        "Dogge": require("./assets/images/Wordbildkarten/Dopplungen/Dogge.png"),
        "Fell": require("./assets/images/Wordbildkarten/Dopplungen/Fell.png"),
        "Fölte": require("./assets/images/Wordbildkarten/Dopplungen/Flte.png"),
        "Gewitter": require("./assets/images/Wordbildkarten/Dopplungen/Gewitter.png"),
        "Giraffe": require("./assets/images/Wordbildkarten/Dopplungen/Giraffe.png"),
        "Gitarre": require("./assets/images/Wordbildkarten/Dopplungen/Gitarre.png"),
        "Grill": require("./assets/images/Wordbildkarten/Dopplungen/Grill.png"),
        "Hummel": require("./assets/images/Wordbildkarten/Dopplungen/Hummel.png"),
        "Kabel": require("./assets/images/Wordbildkarten/Dopplungen/Kabel.png"),
        "Kamm": require("./assets/images/Wordbildkarten/Dopplungen/Kamm.png"),
        "Kanu": require("./assets/images/Wordbildkarten/Dopplungen/Kanu.png"),
        "Kappe": require("./assets/images/Wordbildkarten/Dopplungen/Kappe.png"),
        "Kartoffel": require("./assets/images/Wordbildkarten/Dopplungen/Kartoffel.png"),
        "Kegel": require("./assets/images/Wordbildkarten/Dopplungen/Kegel.png"),
        "Klippe": require("./assets/images/Wordbildkarten/Dopplungen/Klippe.png"),
        "Knppel": require("./assets/images/Wordbildkarten/Dopplungen/Knppel.png"),
        "Koffer": require("./assets/images/Wordbildkarten/Dopplungen/Koffer.png"),
        "Koralle": require("./assets/images/Wordbildkarten/Dopplungen/Koralle.png"),
        "Krabbe": require("./assets/images/Wordbildkarten/Dopplungen/Krabbe.png"),
        "Kragen": require("./assets/images/Wordbildkarten/Dopplungen/Kragen.png"),
        "Kralle": require("./assets/images/Wordbildkarten/Dopplungen/Kralle.png"),
        "Krawatte": require("./assets/images/Wordbildkarten/Dopplungen/Krawatte.png"),
        "Lamm": require("./assets/images/Wordbildkarten/Dopplungen/Lamm.png"),
        "Löffel": require("./assets/images/Wordbildkarten/Dopplungen/Löffel.png"),
        "Libelle": require("./assets/images/Wordbildkarten/Dopplungen/Libelle.png"),
        "Lippen": require("./assets/images/Wordbildkarten/Dopplungen/Lippen.png"),
        "Mofa": require("./assets/images/Wordbildkarten/Dopplungen/Mofa.png"),
        "Nadel": require("./assets/images/Wordbildkarten/Dopplungen/Nadel.png"),
        "Paddel": require("./assets/images/Wordbildkarten/Dopplungen/Paddel.png"),
        "Pfanne": require("./assets/images/Wordbildkarten/Dopplungen/Pfanne.png"),
        "Pfeil": require("./assets/images/Wordbildkarten/Dopplungen/Pfeil.png"),
        "Pudding": require("./assets/images/Wordbildkarten/Dopplungen/Pudding.png"),
        "Pudel": require("./assets/images/Wordbildkarten/Dopplungen/Pudel.png"),
        "Qualle": require("./assets/images/Wordbildkarten/Dopplungen/Qualle.png"),
        "Raben": require("./assets/images/Wordbildkarten/Dopplungen/Raben.png"),
        "Rettich": require("./assets/images/Wordbildkarten/Dopplungen/Rettich.png"),
        "Rippe": require("./assets/images/Wordbildkarten/Dopplungen/Rippe.png"),
        "Ritter": require("./assets/images/Wordbildkarten/Dopplungen/Ritter.png"),
        "Robbe": require("./assets/images/Wordbildkarten/Dopplungen/Robbe.png"),
        "Schaum": require("./assets/images/Wordbildkarten/Dopplungen/Schaum.png"),
        "Schiff": require("./assets/images/Wordbildkarten/Dopplungen/Schiff.png"),
        "Schlitten": require("./assets/images/Wordbildkarten/Dopplungen/Schlitten.png"),
        "Schmetterling": require("./assets/images/Wordbildkarten/Dopplungen/Schmetterling.png"),
        "Schnalle": require("./assets/images/Wordbildkarten/Dopplungen/Schnalle.png"),
        "Schwamm": require("./assets/images/Wordbildkarten/Dopplungen/Schwamm.png"),
        "Schwan": require("./assets/images/Wordbildkarten/Dopplungen/Schwan.png"),
        "Stall": require("./assets/images/Wordbildkarten/Dopplungen/Stall.png"),
        "Traube": require("./assets/images/Wordbildkarten/Dopplungen/Traube.png"),
        "Treppe": require("./assets/images/Wordbildkarten/Dopplungen/Treppe.png"),
        "Tunnel": require("./assets/images/Wordbildkarten/Dopplungen/Tunnel.png"),
        "Wappen": require("./assets/images/Wordbildkarten/Dopplungen/Wappen.png"),
        "Wolle": require("./assets/images/Wordbildkarten/Dopplungen/Wolle.png"),
},
    "Dopplungen2": {
        "Ampel": require("./assets/images/Wordbildkarten/Dopplungen2/Ampel.png"),
        "Anker": require("./assets/images/Wordbildkarten/Dopplungen2/Anker.png"),
        "Bank": require("./assets/images/Wordbildkarten/Dopplungen2/Bank.png"),
        "Birne": require("./assets/images/Wordbildkarten/Dopplungen2/Birne.png"),
        "Blinker": require("./assets/images/Wordbildkarten/Dopplungen2/Blinker.png"),
        "Garten": require("./assets/images/Wordbildkarten/Dopplungen2/Garten.png"),
        "Geschenk": require("./assets/images/Wordbildkarten/Dopplungen2/Geschenk.png"),
        "Harfe": require("./assets/images/Wordbildkarten/Dopplungen2/Harfe.png"),
        "Heft": require("./assets/images/Wordbildkarten/Dopplungen2/Heft.png"),
        "Herren": require("./assets/images/Wordbildkarten/Dopplungen2/Herren.png"),
        "Herz": require("./assets/images/Wordbildkarten/Dopplungen2/Herz.png"),
        "Holz": require("./assets/images/Wordbildkarten/Dopplungen2/Holz.png"),
        "Karten": require("./assets/images/Wordbildkarten/Dopplungen2/Karten.png"),
        "Kerzen": require("./assets/images/Wordbildkarten/Dopplungen2/Kerzen.png"),
        "Kranz": require("./assets/images/Wordbildkarten/Dopplungen2/Kranz.png"),
        "Mnze": require("./assets/images/Wordbildkarten/Dopplungen2/Mnze.png"),
        "Palme": require("./assets/images/Wordbildkarten/Dopplungen2/Palme.png"),
        "Pilz": require("./assets/images/Wordbildkarten/Dopplungen2/Pilz.png"),
        "Pinsel": require("./assets/images/Wordbildkarten/Dopplungen2/Pinsel.png"),
        "Ranzen": require("./assets/images/Wordbildkarten/Dopplungen2/Ranzen.png"),
        "Salz": require("./assets/images/Wordbildkarten/Dopplungen2/Salz.png"),
        "Schlange": require("./assets/images/Wordbildkarten/Dopplungen2/Schlange.png"),
        "Schrank": require("./assets/images/Wordbildkarten/Dopplungen2/Schrank.png"),
        "Schrze": require("./assets/images/Wordbildkarten/Dopplungen2/Schrze.png"),
        "Tank": require("./assets/images/Wordbildkarten/Dopplungen2/Tank.png"),
        "Tinte": require("./assets/images/Wordbildkarten/Dopplungen2/Tinte.png"),
        "Torte": require("./assets/images/Wordbildkarten/Dopplungen2/Torte.png"),
        "Warze": require("./assets/images/Wordbildkarten/Dopplungen2/Warze.png"),
        "Wolke": require("./assets/images/Wordbildkarten/Dopplungen2/Wolke.png"),
        "Zelt": require("./assets/images/Wordbildkarten/Dopplungen2/Zelt.png"),
        "Zirkus": require("./assets/images/Wordbildkarten/Dopplungen2/Zirkus.png"),
        "Zwergen": require("./assets/images/Wordbildkarten/Dopplungen2/Zwergen.png"),
    },
    "k_ck": {
        "Bank": require("./assets/images/Wordbildkarten/k_ck/Bank.png"),
        "Besteck": require("./assets/images/Wordbildkarten/k_ck/Besteck.png"),
        "Bettlaken": require("./assets/images/Wordbildkarten/k_ck/Bettlaken.png"),
        "Block": require("./assets/images/Wordbildkarten/k_ck/Block.png"),
        "Buckel": require("./assets/images/Wordbildkarten/k_ck/Buckel.png"),
        "Dackel": require("./assets/images/Wordbildkarten/k_ck/Dackel.png"),
        "Deckel": require("./assets/images/Wordbildkarten/k_ck/Deckel.png"),
        "Drucker": require("./assets/images/Wordbildkarten/k_ck/Drucker.png"),
        "Ecke": require("./assets/images/Wordbildkarten/k_ck/Ecke.png"),
        "Fackel": require("./assets/images/Wordbildkarten/k_ck/Fackel.png"),
        "Ferkel": require("./assets/images/Wordbildkarten/k_ck/Ferkel.png"),
        "Fleck": require("./assets/images/Wordbildkarten/k_ck/Fleck.png"),
        "Gecko": require("./assets/images/Wordbildkarten/k_ck/Gecko.png"),
        "Geschenk": require("./assets/images/Wordbildkarten/k_ck/Geschenk.png"),
        "Glocke": require("./assets/images/Wordbildkarten/k_ck/Glocke.png"),
        "Haken": require("./assets/images/Wordbildkarten/k_ck/Haken.png"),
        "Jacke": require("./assets/images/Wordbildkarten/k_ck/Jacke.png"),
        "Küken": require("./assets/images/Wordbildkarten/k_ck/Küken.png"),
        "Krake": require("./assets/images/Wordbildkarten/k_ck/Krake.png"),
        "Kürcke": require("./assets/images/Wordbildkarten/k_ck/Krücke.png"),
        "Locke": require("./assets/images/Wordbildkarten/k_ck/Locke.png"),
        "Mücke": require("./assets/images/Wordbildkarten/k_ck/Mücke.png"),
        "Perücke": require("./assets/images/Wordbildkarten/k_ck/Perücke.png"),
        "Pickel": require("./assets/images/Wordbildkarten/k_ck/Pickel.png"),
        "Rcken": require("./assets/images/Wordbildkarten/k_ck/Rcken.png"),
        "Sack": require("./assets/images/Wordbildkarten/k_ck/Sack.png"),
        "Schnecke": require("./assets/images/Wordbildkarten/k_ck/Schnecke.png"),
    },
    "tz_z": {
    },
    "s_ss_ß": {
    },
    "e_ä_eu_äu": {
    },
    "Komposita": {
        "Bügeleisen": require("./assets/images/Wordbildkarten/komposita/Bügeleisen.png"),
        "Birnenbaum": require("./assets/images/Wordbildkarten/komposita/Birnenbaum.png"),
        "Bratwurst": require("./assets/images/Wordbildkarten/komposita/Bratwurst.png"),
        "Eichhrnchen": require("./assets/images/Wordbildkarten/komposita/Eichhrnchen.png"),
        "Feuerwerk": require("./assets/images/Wordbildkarten/komposita/Feuerwerk.png"),
        "Fingernagel": require("./assets/images/Wordbildkarten/komposita/Fingernagel.png"),
        "Gartenschlauch": require("./assets/images/Wordbildkarten/komposita/Gartenschlauch.png"),
        "Gurkensalat": require("./assets/images/Wordbildkarten/komposita/Gurkensalat.png"),
        "Harfe": require("./assets/images/Wordbildkarten/komposita/Harfe.png"),
        "Kalender": require("./assets/images/Wordbildkarten/komposita/Kalender.png"),
        "Kaninchen": require("./assets/images/Wordbildkarten/komposita/Kaninchen.png"),
        "Kinderwagen": require("./assets/images/Wordbildkarten/komposita/Kinderwagen.png"),
        "Kirschen": require("./assets/images/Wordbildkarten/komposita/Kirschen.png"),
        "Kleiderschrank": require("./assets/images/Wordbildkarten/komposita/Kleiderschrank.png"),
        "Känguru": require("./assets/images/Wordbildkarten/komposita/Känguru.png"),
        "Knopf": require("./assets/images/Wordbildkarten/komposita/Knopf.png"),
        "Kragen": require("./assets/images/Wordbildkarten/komposita/Kragen.png"),
        "Krankenschwester": require("./assets/images/Wordbildkarten/komposita/Krankenschwester.png"),
        "Leuchtturm": require("./assets/images/Wordbildkarten/komposita/Leuchtturm.png"),
        "Lichtschalter": require("./assets/images/Wordbildkarten/komposita/Lichtschalter.png"),
        "Mandarine": require("./assets/images/Wordbildkarten/komposita/Mandarine.png"),
        "Maulwurfhgel": require("./assets/images/Wordbildkarten/komposita/Maulwurfhgel.png"),
        "Milchflasche": require("./assets/images/Wordbildkarten/komposita/Milchflasche.png"),
        "Ostereiern": require("./assets/images/Wordbildkarten/komposita/Ostereiern.png"),
        "Paprika": require("./assets/images/Wordbildkarten/komposita/Paprika.png"),
        "Pflaster": require("./assets/images/Wordbildkarten/komposita/Pflaster.png"),
        "Pinguin": require("./assets/images/Wordbildkarten/komposita/Pinguin.png"),
        "Praline": require("./assets/images/Wordbildkarten/komposita/Praline.png"),
        "Regenwolke": require("./assets/images/Wordbildkarten/komposita/Regenwolke.png"),
        "Regenwurm": require("./assets/images/Wordbildkarten/komposita/Regenwurm.png"),
        "Rutsche": require("./assets/images/Wordbildkarten/komposita/Rutsche.png"),
        "Scheibenwischer": require("./assets/images/Wordbildkarten/komposita/Scheibenwischer.png"),
        "Schnrsenkel": require("./assets/images/Wordbildkarten/komposita/Schnrsenkel.png"),
        "Taschenlampe": require("./assets/images/Wordbildkarten/komposita/Taschenlampe.png"),
        "Taschenrechner": require("./assets/images/Wordbildkarten/komposita/Taschenrechner.png"),
        "Trompete": require("./assets/images/Wordbildkarten/komposita/Trompete.png"),
        "Wespennest": require("./assets/images/Wordbildkarten/komposita/Wespennest.png"),

    },
    "h": {
    },
    "sch": {
        "Schaf": require("./assets/images/Wordbildkarten/sch/Schaf.png"),
        "Schal": require("./assets/images/Wordbildkarten/sch/Schal.png"),
        "Schale": require("./assets/images/Wordbildkarten/sch/Schale.png"),
        "Schaum": require("./assets/images/Wordbildkarten/sch/Schaum.png"),
        "Schere": require("./assets/images/Wordbildkarten/sch/Schere.png"),
        "Sple": require("./assets/images/Wordbildkarten/sch/Sple.png"),
        "Spur": require("./assets/images/Wordbildkarten/sch/Spur.png"),
        "Tafel": require("./assets/images/Wordbildkarten/sch/Tafel.png"),
        "Tal": require("./assets/images/Wordbildkarten/sch/Tal.png"),
        "Tor": require("./assets/images/Wordbildkarten/sch/Tor.png"),
        "Tren": require("./assets/images/Wordbildkarten/sch/Tren.png"),

    }
};

export function isImageCategory(category: string): category is ImageCategory {
    return category in imageAssets;
}