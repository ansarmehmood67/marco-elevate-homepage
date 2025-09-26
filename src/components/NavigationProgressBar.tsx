import { useNavigationLoading } from '@/hooks/useNavigationLoading';

const NavigationProgressBar = () => {
  const { isNavigating } = useNavigationLoading();

  if (!isNavigating) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent">
      <div className="h-full bg-gradient-to-r from-primary to-primary-glow animate-pulse shadow-lg shadow-primary/20">
        <div className="h-full bg-gradient-to-r from-primary via-primary-glow to-primary animate-[slide-in-right_0.6s_ease-out_infinite]" />
      </div>
    </div>
  );
};

export default NavigationProgressBar;