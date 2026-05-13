import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="w-full max-w-[352px]">
            <h3 className="mb-2 text-2xl font-semibold text-foreground">
              News & Update
            </h3>
            <p className="text-muted-foreground">
              Keep up to date with everything about our tool
            </p>
          </div>

          <div className="w-full max-w-[534px]">
            <form>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Input
                  id="newsletterEmail"
                  type="email"
                  name="newsletterEmail"
                  placeholder="Enter your Email"
                  className="w-full sm:max-w-[320px]"
                />
                <Button type="submit" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
