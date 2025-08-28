import { useCinematicSequence, ANIMATION_PRESETS } from "@/hooks/useCinematicAnimation";
import AboutSection from "./AboutSection";

const AboutSectionAnimated = () => {
  const { ref, getAnimationClasses } = useCinematicSequence([
    { type: 'slideFromLeft', delay: 0 },
  ]);

  return (
    <div
      ref={ref}
      className={getAnimationClasses(0, { type: 'slideFromLeft', delay: 0 })}
    >
      <AboutSection />
    </div>
  );
};

export default AboutSectionAnimated;