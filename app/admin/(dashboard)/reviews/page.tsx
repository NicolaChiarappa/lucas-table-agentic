import { getAllReviews } from "@/actions/reviews"
import { ReviewsTable } from "@/components/admin/ReviewsTable"

export default async function AdminReviewsPage() {
  const reviews = await getAllReviews()

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Gestione Recensioni</h1>
      <ReviewsTable reviews={reviews} />
    </div>
  )
}
