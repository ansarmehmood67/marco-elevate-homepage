import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  ctaText: string;
  image: string;
  backgroundClass: string;
  onCTAClick?: () => void;
}

const ServiceCard = ({ 
  title, 
  description, 
  ctaText, 
  image, 
  backgroundClass,
  onCTAClick 
}: ServiceCardProps) => {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl min-h-[600px] group cursor-pointer transition-all duration-500 hover:scale-[1.02]",
      backgroundClass
    )}>
      {/* Background Image */}
      <div className="absolute inset-0">
         <img
           src={image}
           alt={title}
           width={400}
           height={300}
           loading="lazy"
           className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
         />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-12">
        <div className="space-y-6">
          <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
            {title}
          </h3>
          
          <p className="text-lg text-gray-200 leading-relaxed max-w-lg">
            {description}
          </p>
          
          <Button 
            variant="premium" 
            size="lg"
            onClick={onCTAClick}
            className="mt-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
          >
            {ctaText}
          </Button>
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default ServiceCard;