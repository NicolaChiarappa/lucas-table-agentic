export interface MenuItem {
    course: string;
    dish: string;
}

export interface MenuCategory {
    id: string;
    title: string;
    price: number;
    items: MenuItem[];
}

export const menus: MenuCategory[] = [
    {
        id: 'meat',
        title: 'La Carne',
        price: 150,
        items: [
            { course: 'Amouse bouche', dish: 'Tartare di vitello, spuma di midollo mela acida' },
            { course: 'Antipasto', dish: 'Carpaccio di filetto di manzo, servito con demi glace tiepida e maionese all’acqua di pomodoro' },
            { course: 'Primo', dish: 'Tagliatella con stracotto di agnello, lime e polvere di ginepro' },
            { course: 'Secondo', dish: 'Guancette di maiale brasate, purea di patate alla francese e cipolla rossa agrodolce' },
            { course: 'Pre dessert', dish: 'Panna cotta ai piselli e coulis di fragole' },
            { course: 'Dessert', dish: 'Cioccolato bianco, caramello salato e orzo tostato' }
        ]
    },
    {
        id: 'fish',
        title: 'Il Mare',
        price: 190,
        items: [
            { course: 'Amouse bouche', dish: 'Crocchetta di gambero con cuore di cremoso di bisque e gel al limone' },
            { course: 'Antipasto', dish: 'Aragosta con emulsione di dragoncello e beurre blanc di cozze' },
            { course: 'Primo', dish: 'Orecchiette artigianali con ragù di polpo e emulsione al sedano rapa' },
            { course: 'Secondo', dish: 'Ventresca di tonno al burro nocciola, crema allo zafferano e rafano, salsa pil pil e porro fondente' },
            { course: 'Pre dessert', dish: 'Sorbetto alla mela verde e il suo estratto e brunoise di sedano' },
            { course: 'Dessert', dish: 'Ganache al caramello, arachidi e semifreddo al mascarpone' }
        ]
    },
    {
        id: 'vegetarian',
        title: 'Vegetariano',
        price: 100,
        items: [
            { course: 'Amouse bouche', dish: 'Mini “Scorpella” San Severese con ripieno di crema al caciocavallo, ananas grigliato agrodolce e polvere di anice' },
            { course: 'Antipasto', dish: 'Porro fondente, Crema al cavolfiore tostato, coulis e polvere di lamponi e olio all’erba cipollina' },
            { course: 'Primo', dish: 'Lasagna scomposta con ragù bianco vegetariano, olio al rosmarino' },
            { course: 'Secondo', dish: 'Cubo di melanzana cotta al vino rosso, la sua riduzione e spuma di salsa Bernese' },
            { course: 'Pre dessert', dish: 'Sorbetto al rabarbaro e olio al basilico' },
            { course: 'Dessert', dish: 'Macedonia di frutta(arrostita/grigliata) con crema al mascarpone e vaniglia' }
        ]
    }
];
