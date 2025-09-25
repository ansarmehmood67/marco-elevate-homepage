import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import MailerLiteContactSection from "./MailerLiteContactSection";

const MailerLiteContactSectionAnimated = () => {
  const { ref, visibleItems } = useStaggeredAnimation(3, 200);

  return (
    <div ref={ref}>
      <MailerLiteContactSection visibleItems={visibleItems} />
    </div>
  );
};

export default MailerLiteContactSectionAnimated;