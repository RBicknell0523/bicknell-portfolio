import SectionTitle from "../Common/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqData from "./faqData";

const Faq = () => {
  return (
    <section className="relative overflow-hidden pb-17.5 pt-20 lg:pb-22.5 lg:pt-25 xl:pb-27.5">
      <div className="mx-auto max-w-[770px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Questions About our AI Tool?"
          title="Frequently Asked Questions"
          paragraph="Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."
        />

        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq: any) => (
            <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
