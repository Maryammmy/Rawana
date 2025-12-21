import Button from "@/components/ui/Button";
import { Star, ThumbsUp } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Ahmed M.",
    rating: 5,
    date: "December 2024",
    comment:
      "Amazing place! Very clean and the host was super helpful. Would definitely stay again.",
    avatar: "AM",
  },
  {
    id: 2,
    author: "Sarah K.",
    rating: 4,
    date: "November 2024",
    comment:
      "Great location and comfortable beds. The kitchen was well-equipped. Minor issue with hot water but resolved quickly.",
    avatar: "SK",
  },
  {
    id: 3,
    author: "Mohamed H.",
    rating: 5,
    date: "November 2024",
    comment:
      "Perfect for family vacations. Spacious rooms and excellent amenities. Highly recommended!",
    avatar: "MH",
  },
];

export default function ReviewsTab() {
  const averageRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div data-aos="fade-in">
      <div className="flex flex-wrap gap-2 items-center justify-between mb-6">
        <h3 className="text-2xl font-serif font-semibold">Guest Reviews</h3>
        <div className="flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          <span className="font-bold text-foreground">{averageRating}</span>
          <span className="text-muted-foreground">
            ({reviews.length} reviews)
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-5 rounded-xl bg-card border border-border"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                {review.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {review.author}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {review.date}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < review.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-dark  "
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-foreground leading-relaxed">
                  {review.comment}
                </p>
                <Button className="flex items-center gap-1.5 mt-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ThumbsUp className="size-4 shrink-0" />
                  Helpful
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
