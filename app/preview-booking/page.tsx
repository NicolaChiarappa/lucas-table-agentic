import type { Metadata } from "next";
import { BookingSection } from "../components/BookingSection";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function PreviewBooking() {
    return (
        <div className="public-site bg-[#0d3b2e]">
            <BookingSection />
        </div>
    );
}
