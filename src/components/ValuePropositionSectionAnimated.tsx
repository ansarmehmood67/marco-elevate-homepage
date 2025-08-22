import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ValuePropositionSection from "./ValuePropositionSection";

const ValuePropositionSectionAnimated = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-12'
      }`}
    >
      <ValuePropositionSection />
    </div>
  );
};

export default ValuePropositionSectionAnimated;