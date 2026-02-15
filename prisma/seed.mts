import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

async function main() {
  const prisma = new PrismaClient()

  try {
    // Seed admin user
    const hashedPassword = await hash("LucaAdmin2024!", 12)
    await prisma.user.upsert({
      where: { email: "lucastablee@gmail.com" },
      update: {},
      create: {
        name: "Luca",
        email: "lucastablee@gmail.com",
        hashedPassword,
      },
    })
    console.log("Admin user seeded")

    // Seed menu categories and items
    const menuData = [
      {
        title: "La Carne",
        price: 150,
        sortOrder: 0,
        items: [
          { course: "Amouse bouche", dish: "Tartare di vitello, spuma di midollo mela acida", sortOrder: 0 },
          { course: "Antipasto", dish: "Carpaccio di filetto di manzo, servito con demi glace tiepida e maionese all\u2019acqua di pomodoro", sortOrder: 1 },
          { course: "Primo", dish: "Tagliatella con stracotto di agnello, lime e polvere di ginepro", sortOrder: 2 },
          { course: "Secondo", dish: "Guancette di maiale brasate, purea di patate alla francese e cipolla rossa agrodolce", sortOrder: 3 },
          { course: "Pre dessert", dish: "Panna cotta ai piselli e coulis di fragole", sortOrder: 4 },
          { course: "Dessert", dish: "Cioccolato bianco, caramello salato e orzo tostato", sortOrder: 5 },
        ],
      },
      {
        title: "Il Mare",
        price: 190,
        sortOrder: 1,
        items: [
          { course: "Amouse bouche", dish: "Crocchetta di gambero con cuore di cremoso di bisque e gel al limone", sortOrder: 0 },
          { course: "Antipasto", dish: "Aragosta con emulsione di dragoncello e beurre blanc di cozze", sortOrder: 1 },
          { course: "Primo", dish: "Orecchiette artigianali con rag\u00F9 di polpo e emulsione al sedano rapa", sortOrder: 2 },
          { course: "Secondo", dish: "Ventresca di tonno al burro nocciola, crema allo zafferano e rafano, salsa pil pil e porro fondente", sortOrder: 3 },
          { course: "Pre dessert", dish: "Sorbetto alla mela verde e il suo estratto e brunoise di sedano", sortOrder: 4 },
          { course: "Dessert", dish: "Ganache al caramello, arachidi e semifreddo al mascarpone", sortOrder: 5 },
        ],
      },
      {
        title: "Vegetariano",
        price: 100,
        sortOrder: 2,
        items: [
          { course: "Amouse bouche", dish: 'Mini "Scorpella" San Severese con ripieno di crema al caciocavallo, ananas grigliato agrodolce e polvere di anice', sortOrder: 0 },
          { course: "Antipasto", dish: "Porro fondente, Crema al cavolfiore tostato, coulis e polvere di lamponi e olio all\u2019erba cipollina", sortOrder: 1 },
          { course: "Primo", dish: "Lasagna scomposta con rag\u00F9 bianco vegetariano, olio al rosmarino", sortOrder: 2 },
          { course: "Secondo", dish: "Cubo di melanzana cotta al vino rosso, la sua riduzione e spuma di salsa Bernese", sortOrder: 3 },
          { course: "Pre dessert", dish: "Sorbetto al rabarbaro e olio al basilico", sortOrder: 4 },
          { course: "Dessert", dish: "Macedonia di frutta(arrostita/grigliata) con crema al mascarpone e vaniglia", sortOrder: 5 },
        ],
      },
    ]

    for (const category of menuData) {
      const { items, ...categoryData } = category
      const created = await prisma.menuCategory.create({
        data: {
          ...categoryData,
          items: {
            create: items,
          },
        },
      })
      console.log(`Menu category seeded: ${created.title}`)
    }

    // Seed existing reviews
    await prisma.review.create({
      data: {
        name: "Molto soddisfatti",
        rating: 4,
        comment: "Luca ci ha trattati davvero bene, un ottimo cuoco molto appassionato. La cura al dettaglio \u00E8 notevole sia nel servizio sia in cucina. I nostri ospiti hanno espresso gradimento ed \u00E8 stata una piacevole sorpresa.",
        date: "30/01/2026",
        approved: true,
      },
    })
    console.log("Reviews seeded")

    console.log("Seed completed successfully!")
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
