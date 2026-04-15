"use client";

import { Sparkles } from "lucide-react";
import { Navbar } from "@/components/navbar";

export default function GalleryPage() {
  return (
    <div className="flex flex-col h-screen bg-[#111111]">
      <Navbar />

      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Gallery Header */}
        <div className="px-6 pt-4 pb-2">
          <h2 className="text-2xl font-serif italic text-white">Gallery</h2>
        </div>

        {/* Empty State Card */}
        <div className="flex-1 px-6 pb-6">
          <div className="h-full border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center">
                <Sparkles size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Create an account to start your gallery
              </h3>
              <p className="text-sm text-gray-400 text-center max-w-xs font-mono">
                Sign up to generate AI artwork and build your personal
                collection.
              </p>
              <button className="mt-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors">
                Create Account
              </button>
              <p className="text-sm text-gray-400">
                Already have an account?{" "}
                <button className="text-gray-300 underline hover:text-white transition-colors">
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
