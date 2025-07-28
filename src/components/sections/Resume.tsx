"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";

import { FaChevronLeft, FaChevronRight, FaDownload, FaHome } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { BsZoomIn, BsZoomOut } from "react-icons/bs";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/CardComponent";
import { Skeleton } from "@/components/ui/Skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";

export default function Resume() {
  const router = useRouter();
  const resumeUrl = "/docs/MyResume.pdf";
  const viewerRef = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState<number>(1.5);

  const zoomPluginInstance = zoomPlugin();
  const pageNavigationPluginInstance = pageNavigationPlugin();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (viewerRef.current) {
      const style = document.createElement("style");
      style.textContent = `
        .rpv-core__inner-page,
        .rpv-core__inner-pages,
        .rpv-core__viewer {
          background-color: transparent !important;
          padding: 0 !important;
        }

        .rpv-core__inner-page canvas {
          max-width: 100% !important;
        }
      `;
      viewerRef.current.appendChild(style);
    }
  }, []);

  const handleTryAgain = () => {
    setIsLoading(true);
    setError(null);
    setTimeout(() => setIsLoading(false), 1500);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Babji's resume.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDocumentLoad = (e: any) => {
    setNumPages(e.doc.numPages);
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  return (
    <div className="flex flex-col w-full mx-auto p-4 sm:p-6">
      <Card className="overflow-hidden">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 border-b">
          <div className="flex items-center space-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" onClick={() => router.push("/")}>
                    <FaHome className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Home</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button variant="outline" onClick={handleDownload}>
              <FaDownload className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Download</span>
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleZoomOut}
                    disabled={scale <= 0.5}
                  >
                    <BsZoomOut className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Zoom Out</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="px-2 py-1 rounded text-sm min-w-14 text-center">
              {Math.round(scale * 100)}%
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleZoomIn}
                    disabled={scale >= 3}
                  >
                    <BsZoomIn className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Zoom In</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="flex items-center space-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage <= 1 || isLoading || !!error}
                  >
                    <FaChevronLeft className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Prev</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="text-sm bg-secondary px-2 py-1 rounded text-center">
              {currentPage} / {numPages || "-"}
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, numPages || 1))
                    }
                    disabled={currentPage >= (numPages || 1) || isLoading || !!error}
                  >
                    <FaChevronRight className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Next</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Viewer */}
        <div
          className="bg-slate-900 w-full"
          style={{ height: "calc(100vh - 150px)", minHeight: "600px" }}
          ref={viewerRef}
        >
          {isLoading && !error && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin w-10 h-10 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-primary animate-pulse">Loading PDF...</p>
              </div>
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-destructive font-semibold text-lg mb-2">
                Error Loading Resume
              </p>
              <p className="text-muted-foreground mb-4">{error}</p>
              <div className="flex gap-4 mt-2">
                <Button onClick={handleTryAgain} variant="default">
                  <FiRefreshCw className="h-4 w-4 mr-2" /> Try Again
                </Button>
                <Button onClick={() => router.push("/")} variant="outline">
                  <FaHome className="h-4 w-4 mr-2" /> Home
                </Button>
              </div>
            </div>
          )}

          {!isLoading && !error && (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer
                fileUrl={resumeUrl}
                plugins={[zoomPluginInstance, pageNavigationPluginInstance]}
                initialPage={currentPage - 1}
                onPageChange={(e) => setCurrentPage(e.currentPage + 1)}
                onDocumentLoad={handleDocumentLoad}
                defaultScale={scale}
              />
            </Worker>
          )}
        </div>
      </Card>
    </div>
  );
}
