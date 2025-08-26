import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import TestimonialsTonyRobbins from "./TestimonialsTonyRobbins";

const TestimonialsModernAnimated = () => {
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
      <TestimonialsTonyRobbins />
    </div>
  );
};

export default TestimonialsModernAnimated;