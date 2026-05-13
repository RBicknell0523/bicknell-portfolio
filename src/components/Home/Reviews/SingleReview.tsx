import { Review } from "@/types/review";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const SingleReview = ({ review }: { review: Review }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={review.userImage} alt={review.userName} />
            <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold text-foreground">
              {review.userName}
            </p>
            <p className="text-sm text-muted-foreground lowercase">
              {review.userDesignation}
            </p>
          </div>
        </div>

        <Separator className="my-4" />

        <p className="text-sm text-muted-foreground">{review.description}</p>
      </CardContent>
    </Card>
  );
};

export default SingleReview;
