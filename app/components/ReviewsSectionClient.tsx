"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { submitReview } from "@/actions/reviews"

interface Review {
  id: string
  name: string
  rating: number
  comment: string
  date: string
}

export function ReviewsSectionClient({
  initialReviews,
}: {
  initialReviews: Review[]
}) {
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(5)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData()
    formData.set("name", name)
    formData.set("rating", rating.toString())
    formData.set("comment", comment)

    const result = await submitReview(formData)

    if (result?.success) {
      setName("")
      setComment("")
      setRating(5)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 5000)
    }

    setIsSubmitting(false)
  }

  const renderStars = (score: number) => {
    return (
      <div className="flex gap-1 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < score ? "currentColor" : "none"}
            className={i < score ? "text-yellow-500" : "text-gray-400"}
          />
        ))}
      </div>
    )
  }

  return (
    <section
      className="py-24 bg-[#0a2e24] relative overflow-hidden"
      id="reviews"
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl text-white text-center mb-16">
          I miei clienti
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Reviews List */}
          <div className="space-y-6 max-h-[90vh] overflow-y-auto pr-4 custom-scrollbar">
            {initialReviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-white font-medium text-lg">
                      {review.name}
                    </h4>
                    <p className="text-white/40 text-sm">{review.date}</p>
                  </div>
                  {renderStars(review.rating)}
                </div>
                <p className="text-white/80 italic">
                  &quot;{review.comment}&quot;
                </p>
              </motion.div>
            ))}
          </div>

          {/* Review Form */}
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-md border border-white/20">
            <h3 className="text-2xl text-white mb-6 font-serif">
              Lascia una recensione
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/80 mb-2 text-sm">
                  Il tuo nome
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 text-sm">
                  Valutazione
                </label>
                <div className="flex gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        size={24}
                        fill={star <= rating ? "currentColor" : "none"}
                        className={
                          star <= rating ? "text-yellow-500" : "text-gray-400"
                        }
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-white/80 mb-2 text-sm">
                  La tua esperienza
                </label>
                <textarea
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30 transition-colors h-32 resize-none"
                  placeholder="Raccontaci come è andata..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-[#0d3b2e] py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Invio in corso..." : "Invia Recensione"}
              </button>

              {showSuccess && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-center text-sm"
                >
                  Grazie per la tua recensione! Sarà visibile dopo
                  l&apos;approvazione.
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
