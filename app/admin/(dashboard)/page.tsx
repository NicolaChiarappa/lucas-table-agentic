import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UtensilsCrossed, Star, Clock, Image } from "lucide-react"

export default async function AdminDashboardPage() {
  const [categoriesCount, reviewsCount, pendingReviewsCount, imagesCount] =
    await Promise.all([
      prisma.menuCategory.count(),
      prisma.review.count({ where: { approved: true } }),
      prisma.review.count({ where: { approved: false } }),
      prisma.siteImage.count(),
    ])

  const stats = [
    {
      title: "Categorie Menu",
      value: categoriesCount,
      icon: UtensilsCrossed,
      description: "Categorie attive",
    },
    {
      title: "Recensioni Approvate",
      value: reviewsCount,
      icon: Star,
      description: "Visibili sul sito",
    },
    {
      title: "Recensioni in Attesa",
      value: pendingReviewsCount,
      icon: Clock,
      description: "Da approvare",
    },
    {
      title: "Immagini",
      value: imagesCount,
      icon: Image,
      description: "Caricate",
    },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
