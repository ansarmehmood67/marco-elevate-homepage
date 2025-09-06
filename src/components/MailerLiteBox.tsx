import { useEffect, useRef } from "react";

export default function MailerLiteBox() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current!;
    // 1) Create the embed node AFTER mount
    wrapper.innerHTML = "";
    const target = document.createElement("div");
    target.className = "ml-embedded";
    target.setAttribute("data-form", "YqzMqi");
    target.style.minHeight = "560px"; // give space so it doesn't collapse
    wrapper.appendChild(target);

    // 2) Ensure the ML global exists and (re)init the account
    const inject = () => {
      (window as any).ml = (window as any).ml || function () {
        ((window as any).ml.q = (window as any).ml.q || []).push(arguments);
      };
      (window as any).ml("account", "851102", "eu1");
    };

    // If the universal script isn't there (some previews), add it
    const existing = document.getElementById("ml-universal") as HTMLScriptElement | null;
    if (!existing) {
      const s = document.createElement("script");
      s.id = "ml-universal";
      s.async = true;
      s.src = "https://assets.mailerlite.com/js/universal.js";
      s.onload = inject;
      document.head.appendChild(s);
    } else {
      inject();
    }
  }, []);

  return (
    <div className="p-8 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Inizia Subito</h3>
        <p className="text-gray-300">Compila il form per essere ricontattato</p>
      </div>
      <div ref={wrapperRef} />
    </div>
  );
}