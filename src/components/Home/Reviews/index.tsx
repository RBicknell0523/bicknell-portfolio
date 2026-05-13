"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import { useState } from "react";
import SingleReview from "./SingleReview";
import reviewsData from "./reviewsData";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
      <SectionTitle
        subTitle="Wall of love"
        title="What Our User Says"
        paragraph="Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."
      />

      <div
        className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ${
          !showContent ? "max-h-[900px] overflow-hidden" : ""
        }`}
      >
        <div className="space-y-5">
          {reviewsData.slice(0, 9).map((review) => (
            <SingleReview key={review.id} review={review} />
          ))}
        </div>
        <div className="hidden space-y-5 sm:block">
          {reviewsData.slice(9, 18).map((review) => (
            <SingleReview key={review.id} review={review} />
          ))}
        </div>
        <div className="hidden space-y-5 lg:block">
          {reviewsData.slice(18, 27).map((review) => (
            <SingleReview key={review.id} review={review} />
          ))}
        </div>
      </div>

      {!showContent && (
        <div className="mt-8 flex justify-center">
          <Button variant="outline" onClick={() => setShowContent(true)}>
            Show more reviews
          </Button>
        </div>
      )}
    </div>
  );
};

export default Reviews;
