"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { AttentionSection } from "@/components/Sections/AttentionSection";
import { EventsSection } from "@/components/Sections/EventsSection";
import { OverviewSection } from "@/components/Sections/OverviewSection";
import { ScrollArea } from "@/components/ui/scroll-area";

const DashboardPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      const newHeight = contentRef.current.offsetHeight;
      setHeight(newHeight);
    }
  }, []);

  useEffect(() => {
    updateHeight();

    const handleResize = () => {
      updateHeight();
    };

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
    };
  }, [updateHeight]);

  return (
    <div className="md:px-0 px-3 scrollbar-hide -z-50">
      <div className="grid xl:grid-cols-5 md:grid-cols-4  md:gap-4 gap-2 group">
        <section
          className="flex flex-col gap-9 col-span-4 pb-6"
          ref={contentRef}
        >
          <OverviewSection />
          <AttentionSection />
        </section>

        <div className="col-span-1  scrollbar-hide xl:block hidden">
          <ScrollArea
            className="w-full scrollbar-hide"
            style={{
              height: height ? `${height}px` : "auto",
              maxHeight: height ? `${height}px` : "100vh"
            }}
          >
            <EventsSection />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
