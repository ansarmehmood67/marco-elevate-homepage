import { useCinematicSequence, ANIMATION_PRESETS } from "@/hooks/useCinematicAnimation";
import FinalCTASection from "./FinalCTASection";

const FinalCTASectionAnimated = () => {
  const { ref, getAnimationClasses } = useCinematicSequence([
    { type: 'fadeInUp', delay: 0 },
  ]);

  return (
    <div
      ref={ref}
      className={getAnimationClasses(0, { type: 'fadeInUp', delay: 0 })}
    >
      <FinalCTASection />
    </div>
  );
};

export default FinalCTASectionAnimated;