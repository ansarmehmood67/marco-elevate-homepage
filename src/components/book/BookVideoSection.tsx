const BookVideoSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Guarda il video di presentazione
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Scopri come Sales as a Service può trasformare il tuo business in questo video esclusivo
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID"
              title="Sales as a Service - Video Presentazione"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookVideoSection;