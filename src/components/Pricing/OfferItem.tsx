import { Check } from "lucide-react";

const OfferItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-center gap-3">
      <Check className="h-5 w-5 shrink-0 text-primary" />
      <span className="text-muted-foreground">{text}</span>
    </li>
  );
};

export default OfferItem;
