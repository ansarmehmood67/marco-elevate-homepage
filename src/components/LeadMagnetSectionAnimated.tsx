import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import LeadMagnetSection from "./LeadMagnetSection";

const LeadMagnetSectionAnimated = () => {
  const { ref, visibleItems } = useStaggeredAnimation(2, 200);

  return (
    <div ref={ref}>
      <LeadMagnetSection visibleItems={visibleItems} />
    </div>
  );
};

export default LeadMagnetSectionAnimated;