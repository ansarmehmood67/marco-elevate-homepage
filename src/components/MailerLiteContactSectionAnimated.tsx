import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import SimplifiedContactForm from "./SimplifiedContactForm";

const MailerLiteContactSectionAnimated = () => {
  const { ref, visibleItems } = useStaggeredAnimation(3, 200);

  return (
    <div ref={ref}>
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
                Inizia la tua <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">trasformazione</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Compila il form per ricevere una consulenza personalizzata e scoprire come possiamo accelerare la crescita del tuo business.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <SimplifiedContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MailerLiteContactSectionAnimated;