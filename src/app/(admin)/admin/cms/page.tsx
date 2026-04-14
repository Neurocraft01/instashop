"use client";
import { useState } from "react";

const VC = {
  surfaceLowest: "#ffffff", surfaceLow: "#f3f0ed",
  onBackground: "#2f2f2d", onSurfaceVariant: "#5c5b59",
  brandDark: "#2B1B3D", primary: "#745700",
  primaryContainer: "#f9cc61", onPrimaryFixed: "#443100"
};

export default function AdminCMSPage() {
  const [sections, setSections] = useState([
    { id: "hero", name: "Hero Section", status: "Active" },
    { id: "social-proof", name: "Social Proof Strip", status: "Active" },
    { id: "features", name: "Features Bento Grid", status: "Active" },
    { id: "steps", name: "How It Works", status: "Active" },
    { id: "testimonials", name: "Testimonials", status: "Draft" },
    { id: "pricing", name: "Pricing Teaser", status: "Active" },
    { id: "cta", name: "Final CTA", status: "Active" }
  ]);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black mb-1" style={{ color: VC.brandDark }}>Homepage CMS</h1>
          <p style={{ color: VC.onSurfaceVariant }}>Toggle, reorder, and edit content on the public homepage.</p>
        </div>
        <button className="px-6 py-2.5 rounded-xl font-bold bg-[#2B1B3D] text-[#FFD166] hover:opacity-90 transition">
          Publish Changes
        </button>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-4">
          {sections.map((section, idx) => (
            <div key={section.id} className="p-4 rounded-xl flex items-center justify-between cursor-move"
              style={{ background: VC.surfaceLowest, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-gray-400">drag_indicator</span>
                <div>
                  <span className="font-black text-sm" style={{ color: VC.brandDark }}>Section {idx + 1}: {section.name}</span>
                  <p className="text-xs mt-0.5" style={{ color: VC.onSurfaceVariant }}>Editable in code currently</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded-md text-[10px] uppercase tracking-widest font-bold"
                  style={{ background: section.status === "Active" ? "#dcfce7" : "#f1f5f9", color: section.status === "Active" ? "#166534" : "#64748b" }}>
                  {section.status}
                </span>
                <div className="w-10 h-6 rounded-full relative cursor-pointer"
                  style={{ background: section.status === "Active" ? VC.primaryContainer : VC.surfaceLow }}>
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${section.status === 'Active' ? 'right-1' : 'left-1'}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="p-6 rounded-2xl" style={{ background: VC.surfaceLowest, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
            <h3 className="font-black mb-4 text-sm" style={{ color: VC.brandDark }}>Global Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase mb-2" style={{ color: VC.onSurfaceVariant }}>Announcement Bar</label>
                <div className="w-full p-2 border rounded-xl text-sm" style={{ borderColor: VC.surfaceLow }}>
                  🎉 New feature: WhatsApp CRM integration
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
