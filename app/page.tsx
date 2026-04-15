"use client";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  Sparkles,
  Upload,
  User,
  Crown,
} from "lucide-react";

const styleCards = [
  { name: "Golden Hour v4", badge: "NEW!", premium: false, color: "#8B7355" },
  { name: "Realistic v4", badge: "NEW!", premium: false, color: "#6B8E6B" },
  { name: "Botanical v4", badge: "NEW!", premium: true, color: "#9B8B3B" },
  { name: "Knitting v4", badge: "NEW!", premium: false, color: "#7B6B8B" },
  { name: "Optimistic v4", badge: "NEW!", premium: true, color: "#5B7B6B" },
  { name: "Pedestal v4", badge: "NEW!", premium: true, color: "#6B5B4B" },
];

const aspectRatios = [
  { label: "1:1", w: 28, h: 28, premium: false },
  { label: "9:16", w: 20, h: 28, premium: false },
  { label: "16:9", w: 28, h: 18, premium: true },
  { label: "3:4", w: 22, h: 28, premium: true },
  { label: "4:3", w: 28, h: 22, premium: true },
];

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [selectedRatio, setSelectedRatio] = useState("1:1");
  const [stylesExpanded, setStylesExpanded] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-[#111111]">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between px-6 py-3 border-b border-white/5">
        <h1 className="text-2xl font-serif italic text-white tracking-wide">
          Dream
        </h1>
        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              try {
                throw new Error("Create button error: Failed to initialize creation workflow");
              } catch (e) {
                console.error(e);
              }
            }}
            className="px-5 py-1.5 rounded-full bg-purple-600 text-white text-sm font-medium"
          >
            Create
          </button>
          <button
            onClick={() => {
              try {
                throw new Error("Edit button error: Edit service unavailable");
              } catch (e) {
                console.error(e);
              }
            }}
            className="px-5 py-1.5 rounded-full text-gray-400 text-sm font-medium hover:text-white transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => {
              try {
                throw new Error("Video button error: Video module failed to load");
              } catch (e) {
                console.error(e);
              }
            }}
            className="px-5 py-1.5 rounded-full text-gray-400 text-sm font-medium hover:text-white transition-colors"
          >
            Video
          </button>
          <button
            onClick={() => {
              try {
                throw new Error("Gallery button error: Could not fetch gallery data");
              } catch (e) {
                console.error(e);
              }
            }}
            className="px-5 py-1.5 rounded-full text-gray-400 text-sm font-medium hover:text-white transition-colors"
          >
            Gallery
          </button>
        </div>
        <button className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
          <User size={18} />
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-[320px] flex-shrink-0 border-r border-white/5 flex flex-col overflow-y-auto">
          <div className="p-4 flex flex-col gap-5 flex-1">
            {/* PROMPT */}
            <div>
              <label className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-2 block">
                Prompt
              </label>
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe what you want to generate"
                  maxLength={2000}
                  className="w-full h-[100px] bg-[#1a1a1a] border border-white/10 rounded-lg p-3 text-sm text-white placeholder-gray-500 resize-none focus:outline-none focus:border-purple-500/50 font-mono"
                />
                <div className="absolute bottom-2 right-2 flex items-center gap-2">
                  <span className="text-xs text-gray-500">
                    {prompt.length} / 2000
                  </span>
                  <button className="flex items-center gap-1.5 px-3 py-1 bg-[#2a2a2a] border border-white/10 rounded-md text-xs text-gray-300 hover:bg-[#333] transition-colors">
                    <Sparkles size={12} />
                    Suggest
                  </button>
                </div>
              </div>
            </div>

            {/* STYLE */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
                  Style
                </label>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a1a] border border-white/10 rounded-md text-xs text-gray-300 hover:bg-[#252525] transition-colors font-mono">
                  <Sparkles size={12} />
                  Surprise Me
                </button>
              </div>

              {/* Search styles */}
              <div className="relative mb-3">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
                <input
                  type="text"
                  placeholder="Search styles"
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
                />
              </div>

              {/* V4 Models Collapsible */}
              <button
                onClick={() => setStylesExpanded(!stylesExpanded)}
                className="flex items-center justify-between w-full px-3 py-2.5 bg-[#1a1a1a] border border-white/10 rounded-lg mb-3 hover:bg-[#1f1f1f] transition-colors"
              >
                <span className="text-sm font-medium text-white">
                  V4 Models
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">22 styles</span>
                  <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform ${stylesExpanded ? "" : "-rotate-90"}`}
                  />
                </div>
              </button>

              {/* Style Cards Grid */}
              {stylesExpanded && (
                <div className="grid grid-cols-3 gap-2">
                  {styleCards.map((style) => (
                    <div key={style.name} className="cursor-pointer group">
                      <div
                        className="relative aspect-square rounded-lg overflow-hidden mb-1"
                        style={{ backgroundColor: style.color }}
                      >
                        {/* Simulated image with gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/30" />

                        {/* Premium badge */}
                        {style.premium && (
                          <div className="absolute top-1 right-1">
                            <span className="text-[8px] font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white px-1.5 py-0.5 rounded-sm uppercase">
                              Premium
                            </span>
                            <Sparkles
                              size={8}
                              className="absolute -top-0.5 -right-0.5 text-amber-400"
                            />
                          </div>
                        )}

                        {/* NEW badge */}
                        <div className="absolute bottom-1 left-1 flex items-center gap-0.5">
                          <span className="text-[8px] font-bold bg-green-500 text-white px-1.5 py-0.5 rounded-sm uppercase">
                            NEW!
                          </span>
                          <Sparkles size={8} className="text-yellow-400" />
                        </div>
                      </div>
                      <p className="text-[11px] text-gray-300 truncate">
                        {style.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ASPECT RATIO */}
            <div>
              <label className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-3 block">
                Aspect Ratio
              </label>
              <div className="flex items-end gap-3">
                {aspectRatios.map((ratio) => (
                  <button
                    key={ratio.label}
                    onClick={() => setSelectedRatio(ratio.label)}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <div
                      className={`flex items-center justify-center rounded-md border-2 transition-colors ${
                        selectedRatio === ratio.label
                          ? "border-purple-500 bg-purple-500/20"
                          : "border-gray-600 bg-[#1a1a1a]"
                      }`}
                      style={{
                        width: `${ratio.w}px`,
                        height: `${ratio.h}px`,
                      }}
                    />
                    <div className="flex items-center gap-0.5">
                      <span
                        className={`text-[10px] ${selectedRatio === ratio.label ? "text-purple-400" : "text-gray-400"}`}
                      >
                        {ratio.label}
                      </span>
                      {ratio.premium && (
                        <Crown
                          size={10}
                          className="text-gray-500"
                        />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* REFERENCE IMAGE */}
            <div>
              <label className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-2 block">
                Reference Image{" "}
                <span className="normal-case text-gray-500 font-normal">
                  (optional)
                </span>
              </label>
              <div className="border-2 border-dashed border-white/10 rounded-lg p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-white/20 transition-colors">
                <Upload size={24} className="text-gray-500" />
                <p className="text-xs text-gray-400 text-center">
                  Drag & drop an image or click to browse
                </p>
              </div>
            </div>
          </div>

          {/* Create Button - fixed at bottom */}
          <div className="p-4 border-t border-white/5">
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-gray-400 hover:bg-[#252525] hover:text-white transition-colors">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Create</span>
            </button>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 flex flex-col overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-serif italic text-white mb-1">
              Your Creations
            </h2>
            <p className="text-sm text-gray-400">
              Start generating to see results here
            </p>
          </div>

          {/* Empty State */}
          <div className="flex-1 border border-white/5 rounded-xl flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center">
                <Sparkles size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                No generations yet
              </h3>
              <p className="text-sm text-gray-400 text-center max-w-xs">
                Enter a prompt and click generate to start creating beautiful AI
                artwork.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
