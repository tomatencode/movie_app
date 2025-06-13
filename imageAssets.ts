type ImageCategory = 
    | 'dopplungen'
    | 'Dopplungen2'
    | 'ck_k' 
    | 'tz_z' 
    | 's_ss_ß' 
    | 'e_ä_eu_äu' 
    | 'komposita' 
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
        "Flte": require("./assets/images/Wordbildkarten/Dopplungen/Flte.png"),
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
    "ck_k": {
    },
    "tz_z": {
    },
    "s_ss_ß": {
    },
    "e_ä_eu_äu": {
    },
    "komposita": {
    },
    "h": {
    },
    "sch": {
    }
};

function isImageCategory(category: string): category is ImageCategory {
    return category in imageAssets;
}

export function getImagesForCategories(categories: string[]): any[] {
    return categories
        .filter(isImageCategory)
        .flatMap(category => Object.values(imageAssets[category] || {}));
}