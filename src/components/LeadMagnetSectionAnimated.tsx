import { useCinematicSequence, ANIMATION_PRESETS } from "@/hooks/useCinematicAnimation";
import LeadMagnetSection from "./LeadMagnetSection";

const LeadMagnetSectionAnimated = () => {
  const { ref, getAnimationClasses } = useCinematicSequence([
    { type: 'slideFromBottom', delay: 0 },
  ]);

  return (
    <div
      ref={ref}
      className={getAnimationClasses(0, { type: 'slideFromBottom', delay: 0 })}
    >
      <LeadMagnetSection />
    </div>
  );
};

export default LeadMagnetSectionAnimated;