"use client"

import { useState } from "react"
import { approveReview, deleteReview } from "@/actions/reviews"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Check, Trash2, Star } from "lucide-react"

interface Review {
  id: string
  name: string
  rating: number
  comment: string
  date: string
  approved: boolean
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

function ReviewCard({ review, showApprove }: { review: Review; showApprove: boolean }) {
  const [isDeleting, setIsDeleting] = useState(false)
  const [isApproving, setIsApproving] = useState(false)

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-semibold">{review.name}</span>
              <StarRating rating={review.rating} />
              <span className="text-sm text-gray-500">{review.date}</span>
              {review.approved ? (
                <Badge variant="secondary" className="bg-green-100 text-green-700">Approvata</Badge>
              ) : (
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">In attesa</Badge>
              )}
            </div>
            <p className="text-gray-700 text-sm">{review.comment}</p>
          </div>
          <div className="flex gap-2 ml-4">
            {showApprove && !review.approved && (
              <Button
                variant="outline"
                size="sm"
                className="text-green-600 hover:text-green-700"
                disabled={isApproving}
                onClick={async () => {
                  setIsApproving(true)
                  await approveReview(review.id)
                }}
              >
                <Check className="h-4 w-4 mr-1" />
                Approva
              </Button>
            )}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700" disabled={isDeleting}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Elimina Recensione</AlertDialogTitle>
                  <AlertDialogDescription>
                    Sei sicuro di voler eliminare questa recensione di &quot;{review.name}&quot;?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Annulla</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-600 hover:bg-red-700"
                    onClick={async () => {
                      setIsDeleting(true)
                      await deleteReview(review.id)
                    }}
                  >
                    Elimina
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function ReviewsTable({ reviews }: { reviews: Review[] }) {
  const pending = reviews.filter((r) => !r.approved)
  const approved = reviews.filter((r) => r.approved)

  return (
    <Tabs defaultValue="pending">
      <TabsList>
        <TabsTrigger value="pending">
          In Attesa ({pending.length})
        </TabsTrigger>
        <TabsTrigger value="approved">
          Approvate ({approved.length})
        </TabsTrigger>
      </TabsList>
      <TabsContent value="pending" className="space-y-4 mt-4">
        {pending.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Nessuna recensione in attesa.</p>
        ) : (
          pending.map((review) => (
            <ReviewCard key={review.id} review={review} showApprove />
          ))
        )}
      </TabsContent>
      <TabsContent value="approved" className="space-y-4 mt-4">
        {approved.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Nessuna recensione approvata.</p>
        ) : (
          approved.map((review) => (
            <ReviewCard key={review.id} review={review} showApprove={false} />
          ))
        )}
      </TabsContent>
    </Tabs>
  )
}
