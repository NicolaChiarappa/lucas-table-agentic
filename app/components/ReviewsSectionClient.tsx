"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { submitReview } from "@/actions/reviews";

interface Review {
    id: string;
    name: string;
    rating: number;
    comment: string;
    date: string;
}

const inputClass =
    "w-full rounded-xl border border-ls-line bg-ls-ivory/[0.05] px-4 py-3 text-ls-ivory " +
    "placeholder:text-ls-ivory/40 outline-none transition-colors duration-200 " +
    "hover:bg-ls-ivory/[0.08] focus-visible:border-ls-gold focus-visible:bg-ls-ivory/10";

function Stars({ score, label }: { score: number; label?: string }) {
    return (
        <div className="flex gap-0.5 text-ls-gold" role="img" aria-label={label ?? `${score} stelle su 5`}>
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={15}
                    aria-hidden="true"
                    fill={i < score ? "currentColor" : "none"}
                    className={i < score ? "text-ls-gold" : "text-ls-ivory/25"}
                />
            ))}
        </div>
    );
}

export function ReviewsSectionClient({ initialReviews }: { initialReviews: Review[] }) {
    const reduce = useReducedMotion();
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(5);
    const [hover, setHover] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData();
        formData.set("name", name);
        formData.set("rating", rating.toString());
        formData.set("comment", comment);

        const result = await submitReview(formData);

        if (result?.success) {
            setName("");
            setComment("");
            setRating(5);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 5000);
        }
        setIsSubmitting(false);
    };

    return (
        <section id="reviews" className="relative overflow-hidden bg-ls-green-deep py-(--space-section)">
            <div className="mx-auto max-w-6xl px-5 sm:px-6">
                <header className="mb-[clamp(3rem,2rem+4vw,5rem)] text-center">
                    <div className="mb-5 flex items-center justify-center gap-4">
                        <span className="ls-rule" aria-hidden="true" />
                        <span className="ls-label">Le voci a tavola</span>
                        <span className="ls-rule" aria-hidden="true" />
                    </div>
                    <h2>Chi si è già seduto</h2>
                </header>

                {/* Testimonianze */}
                {initialReviews.length > 0 && (
                    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {initialReviews.map((review, i) => (
                            <motion.li
                                key={review.id}
                                initial={reduce ? false : { opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-8% 0px" }}
                                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-col rounded-[3px] border border-ls-line bg-ls-ivory/[0.04] p-7"
                            >
                                <span aria-hidden="true" className="ls-display mb-2 text-4xl leading-none text-ls-gold/40">
                                    &ldquo;
                                </span>
                                <p className="ls-display m-0 flex-1 text-[1.05rem] italic leading-relaxed text-ls-ivory">
                                    {review.comment}
                                </p>
                                <div className="mt-6 flex items-center justify-between gap-3 border-t border-ls-line pt-4">
                                    <div>
                                        <div className="text-[0.95rem] font-medium text-ls-ivory">{review.name}</div>
                                        <div className="text-[0.78rem] text-ls-ivory/45">{review.date}</div>
                                    </div>
                                    <Stars score={review.rating} label={`${review.name}: ${review.rating} su 5`} />
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                )}

                {/* Form recensione */}
                <div className="mx-auto mt-[clamp(3.5rem,2rem+5vw,6rem)] max-w-xl">
                    <div className="mb-7 text-center">
                        <h3 className="mb-2">Raccontate la vostra serata</h3>
                        <p className="text-ls-ivory-dim">
                            Le parole di chi mi ha ospitato sono il mio biglietto da visita più sincero.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="review-name" className="mb-1.5 block text-sm font-medium text-ls-ivory/90">
                                Il vostro nome
                            </label>
                            <input
                                id="review-name"
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={inputClass}
                                placeholder="Mario Rossi"
                            />
                        </div>

                        <div>
                            <span className="mb-1.5 block text-sm font-medium text-ls-ivory/90">Valutazione</span>
                            <div className="flex gap-1.5" role="radiogroup" aria-label="Valutazione in stelle">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        role="radio"
                                        aria-checked={rating === star}
                                        aria-label={`${star} ${star === 1 ? "stella" : "stelle"}`}
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHover(star)}
                                        onMouseLeave={() => setHover(0)}
                                        className="rounded-md p-0.5 transition-transform hover:scale-110"
                                    >
                                        <Star
                                            size={26}
                                            fill={star <= (hover || rating) ? "currentColor" : "none"}
                                            className={star <= (hover || rating) ? "text-ls-gold" : "text-ls-ivory/25"}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="review-comment" className="mb-1.5 block text-sm font-medium text-ls-ivory/90">
                                La vostra esperienza
                            </label>
                            <textarea
                                id="review-comment"
                                required
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className={inputClass + " h-32 resize-none"}
                                placeholder="Com'è andata la serata?"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-full bg-ls-gold py-3.5 font-medium text-ls-green-night transition-colors duration-200 hover:bg-ls-gold-bright disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isSubmitting ? "Invio in corso…" : "Invia la recensione"}
                        </button>

                        {showSuccess && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                role="status"
                                className="text-center text-sm text-ls-gold-bright"
                            >
                                Grazie. La vostra recensione sarà visibile dopo l&apos;approvazione.
                            </motion.p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
