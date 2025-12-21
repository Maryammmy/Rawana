import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FacilitiesTab from "./FacilitiesTab";
import PoliciesTab from "./PoliciesTab";
import HelpfulFactsTab from "./HelpfulFactsTab";
import ReviewsTab from "./ReviewsTab";
import { Sparkles, ScrollText, Lightbulb, MessageSquare } from "lucide-react";

export default function PropertyTabs() {
  return (
    <Tabs defaultValue="facilities" className="w-full" data-aos="flip-up">
      <TabsList
        className="w-full border-b border-border rounded-none p-0 h-auto flex-nowrap
    overflow-x-auto
    overflow-y-hidden
    whitespace-nowrap
    justify-start
    bg-transparent
    scrollbar-hide"
      >
        <TabsTrigger
          value="facilities"
          className="relative px-6 py-3 text-sm sm:text-base font-medium text-muted-foreground transition-all duration-200 data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-0.5 data-[state=active]:after:bg-primary data-[state=active]:after:rounded-full data-[state=active]:shadow-none shrink-0"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Facilities
        </TabsTrigger>
        <TabsTrigger
          value="policies"
          className="relative px-6 py-3 text-sm sm:text-base font-medium text-muted-foreground transition-all duration-200 data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-0.5 data-[state=active]:after:bg-primary data-[state=active]:after:rounded-full data-[state=active]:shadow-none shrink-0"
        >
          <ScrollText className="w-4 h-4 mr-2" />
          Policies
        </TabsTrigger>
        <TabsTrigger
          value="facts"
          className="relative px-6 py-3 text-sm sm:text-base font-medium text-muted-foreground transition-all duration-200 data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-0.5 data-[state=active]:after:bg-primary data-[state=active]:after:rounded-full data-[state=active]:shadow-none shrink-0"
        >
          <Lightbulb className="w-4 h-4 mr-2" />
          Helpful Facts
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="relative px-6 py-3 text-sm sm:text-base font-medium text-muted-foreground transition-all duration-200 data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-0.5 data-[state=active]:after:bg-primary data-[state=active]:after:rounded-full data-[state=active]:shadow-none shrink-0"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Reviews
        </TabsTrigger>
      </TabsList>

      <div className="mt-6">
        <TabsContent value="facilities">
          <FacilitiesTab />
        </TabsContent>
        <TabsContent value="policies">
          <PoliciesTab />
        </TabsContent>
        <TabsContent value="facts">
          <HelpfulFactsTab />
        </TabsContent>
        <TabsContent value="reviews">
          <ReviewsTab />
        </TabsContent>
      </div>
    </Tabs>
  );
}
