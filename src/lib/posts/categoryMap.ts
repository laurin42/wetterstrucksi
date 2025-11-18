export const categoryMap: Record<string, string> = {
    "aktuelles-wetter": "Updates & Warnlage",
    situation: "Updates & Warnlage",
    "live-ticker-zu-unwetterlagen": "Updates & Warnlage",
    warnlage: "Updates & Warnlage",
    warntrend: "Updates & Warnlage",

    aussichten: "Aussichten",
    wetteraussichten: "Aussichten",
    wetterprognose: "Aussichten",
    "wetter-kurz-und-kompakt": "Aussichten",
    "monats-aussichten": "Aussichten",
    mittelfrist: "Aussichten",

    rueckblick: "Rückblick",

    studien: "Wissenschaft",
    astronomisches: "Wissenschaft",
    wetter: "Wissenschaft",

    allgemein: "Allgemein",
    spekulatives: "Allgemein",
    biowetter: "Allgemein",
    presseschau: "Allgemein",
    privates: "Privates",
};


export function getSlugsByCategoryDisplayName(categoryDisplayName: string): string[] {
    return Object.keys(categoryMap).filter(
        (slug) => categoryMap[slug] === categoryDisplayName
    );
}