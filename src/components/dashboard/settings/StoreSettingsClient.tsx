"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { uploadToCloudinary } from "@/lib/upload";
import Image from "next/image";

const schema = z.object({
  name: z.string().min(2),
  slug: z.string().min(3),
  tagline: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  whatsappNumber: z.string().optional().nullable(),
  instagramHandle: z.string().optional().nullable(),
  facebookUrl: z.string().optional().nullable(),
  youtubeUrl: z.string().optional().nullable(),
  upiId: z.string().optional().nullable(),
  isOpen: z.boolean(),
  closedMessage: z.string().optional().nullable(),
});

export function StoreSettingsClient({ store }: { store: any }) {
  const [loading, setLoading] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [qrFile, setQrFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState("general");

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: store,
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      let logoUrl = store.logoUrl;
      let upiQrUrl = store.upiQrUrl;

      if (logoFile) {
        const up = await uploadToCloudinary(logoFile, "logos");
        if (up) logoUrl = up.url;
      }
      if (qrFile) {
        const up = await uploadToCloudinary(qrFile, "qrs");
        if (up) upiQrUrl = up.url;
      }

      const res = await fetch("/api/dashboard/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, logoUrl, upiQrUrl }),
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.error);
      toast.success("Settings saved successfully!");
    } catch (e: any) {
      toast.error(e.message || "Failed to save settings");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-[#f9f6f3] selection:bg-[#f9cc61] selection:text-[#5b4400]">
      <div className="pt-2 pb-6 flex flex-col justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black font-headline text-[#2f2f2d] tracking-tight">Store Settings</h2>
          <p className="text-[#787774] mt-2 text-lg font-medium">Configure your digital storefront's identity, payments, and communication channels.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Navigation Tabs (Editorial Column) */}
          <nav className="lg:col-span-3 flex flex-col gap-4 sticky top-24">
            <button type="button" onClick={() => setActiveTab("general")} className={`flex items-center gap-4 p-6 rounded-lg transition-all text-left ${activeTab === "general" ? "bg-[#f9cc61] text-[#5b4400] shadow-[0_8px_32px_rgba(255,209,102,0.15)]" : "bg-[#f3f0ed] text-[#5c5b59] hover:bg-[#e4e2df]"}`}>
              <span className="material-symbols-outlined">tune</span>
              <span className="font-bold">General</span>
            </button>
            <button type="button" onClick={() => setActiveTab("appearance")} className={`flex items-center gap-4 p-6 rounded-lg transition-all text-left ${activeTab === "appearance" ? "bg-[#f9cc61] text-[#5b4400] shadow-[0_8px_32px_rgba(255,209,102,0.15)]" : "bg-[#f3f0ed] text-[#5c5b59] hover:bg-[#e4e2df]"}`}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
              <span className="font-bold">Appearance</span>
            </button>
            <button type="button" onClick={() => setActiveTab("whatsapp")} className={`flex items-center gap-4 p-6 rounded-lg transition-all text-left ${activeTab === "whatsapp" ? "bg-[#f9cc61] text-[#5b4400] shadow-[0_8px_32px_rgba(255,209,102,0.15)]" : "bg-[#f3f0ed] text-[#5c5b59] hover:bg-[#e4e2df]"}`}>
              <span className="material-symbols-outlined">chat</span>
              <span className="font-bold">WhatsApp & Payments</span>
            </button>
          </nav>

          {/* Settings Canvas */}
          <div className="lg:col-span-9 space-y-8">
            
            <div className={activeTab === "general" ? "block" : "hidden"}>
              <section className="bg-[#ffffff] rounded-xl p-8 shadow-[0_8px_32px_rgba(255,209,102,0.05)] space-y-10 border border-[#e4e2df]/20">
                <div className="flex items-center justify-between border-b border-[#f3f0ed] pb-6">
                  <h3 className="text-2xl font-bold font-headline text-[#2f2f2d]">Store Identity</h3>
                  <span className="px-4 py-1 bg-[#e8d1fe]/40 text-[#57456a] rounded-full text-[10px] font-black uppercase tracking-widest">Configuration</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#66547a]">Store Handle</label>
                    <div className="flex items-center bg-[#f3f0ed] rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#f9cc61] transition-all">
                       <span className="pl-4 pr-1 text-[#afadaa] text-sm font-medium">instashop.in/store/</span>
                       <input {...register("slug")} className="flex-1 px-4 py-4 bg-transparent border-none outline-none text-[#2f2f2d] font-bold" type="text"/>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#66547a]">Store Name</label>
                    <input {...register("name")} className="w-full px-6 py-4 bg-[#f3f0ed] border-none rounded-lg focus:ring-2 focus:ring-[#f9cc61] transition-all outline-none text-[#2f2f2d] font-bold" type="text"/>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#66547a]">Tagline</label>
                  <input {...register("tagline")} className="w-full px-6 py-4 bg-[#f3f0ed] border-none rounded-lg focus:ring-2 focus:ring-[#f9cc61] transition-all outline-none text-[#2f2f2d] font-medium" type="text" placeholder="A catchy phrase for your brand"/>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#66547a]">Store Description</label>
                  <textarea {...register("description")} className="w-full px-6 py-4 bg-[#f3f0ed] border-none rounded-lg focus:ring-2 focus:ring-[#f9cc61] transition-all outline-none text-[#2f2f2d] resize-none h-32" placeholder="Tell your customers about your store..." />
                </div>

                <div className="flex items-center gap-4 bg-[#f3f0ed] p-4 rounded-xl">
                   <input type="checkbox" {...register("isOpen")} className="w-6 h-6 rounded border-none bg-white text-[#745700] focus:ring-[#f9cc61]" />
                   <div>
                     <p className="font-bold text-[#2f2f2d]">Store is Open</p>
                     <p className="text-xs text-[#5c5b59]">Uncheck to temporarily pause new orders.</p>
                   </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#66547a]">Closed Message <span className="opacity-50">(if store is closed)</span></label>
                  <input {...register("closedMessage")} className="w-full px-6 py-4 bg-[#f3f0ed] border-none rounded-lg focus:ring-2 focus:ring-[#f9cc61] transition-all outline-none text-[#2f2f2d]" type="text" />
                </div>
              </section>
            </div>

            <div className={activeTab === "appearance" ? "block" : "hidden"}>
              <section className="bg-[#ffffff] rounded-xl p-8 shadow-[0_8px_32px_rgba(255,209,102,0.05)] space-y-10 border border-[#e4e2df]/20">
                <div className="flex items-center justify-between border-b border-[#f3f0ed] pb-6">
                  <h3 className="text-2xl font-bold font-headline text-[#2f2f2d]">Brand Visuals</h3>
                  <span className="px-4 py-1 bg-[#ffc2c9] text-[#920035] rounded-full text-[10px] font-black uppercase tracking-widest">Aesthetics</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#66547a]">Store Logo</label>
                    <div className="relative group">
                      <div className="w-40 h-40 rounded-xl bg-[#f3f0ed] flex items-center justify-center border-2 border-dashed border-[#afadaa] overflow-hidden relative">
                        {logoFile ? (
                           <Image src={URL.createObjectURL(logoFile)} alt="Preview" fill className="object-cover" />
                        ) : store.logoUrl ? (
                           <Image src={store.logoUrl} alt="Logo" fill className="object-cover" />
                        ) : (
                           <span className="material-symbols-outlined text-4xl text-[#afadaa]">image</span>
                        )}
                        <label className="absolute inset-0 bg-[#2f2f2d]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                          <span className="material-symbols-outlined text-white text-3xl">upload</span>
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => setLogoFile(e.target.files?.[0] || null)} />
                        </label>
                      </div>
                      <p className="text-xs text-[#787774] mt-2 italic">Recommended: 500x500px</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#66547a]">Social Links</label>
                    <div className="space-y-4">
                      <div className="flex items-center bg-[#f3f0ed] rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#f9cc61] transition-all">
                         <span className="pl-4 pr-1 text-[#afadaa] text-sm font-medium">@</span>
                         <input {...register("instagramHandle")} className="flex-1 px-4 py-3 bg-transparent border-none outline-none text-[#2f2f2d] font-bold" type="text" placeholder="Instagram"/>
                      </div>
                      <div className="flex items-center bg-[#f3f0ed] rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#f9cc61] transition-all">
                         <span className="pl-4 pr-1 text-[#afadaa] text-sm"><span className="material-symbols-outlined text-[18px]">public</span></span>
                         <input {...register("facebookUrl")} className="flex-1 px-4 py-3 bg-transparent border-none outline-none text-[#2f2f2d] font-medium" type="text" placeholder="Facebook URL"/>
                      </div>
                      <div className="flex items-center bg-[#f3f0ed] rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#f9cc61] transition-all">
                         <span className="pl-4 pr-1 text-[#afadaa] text-sm"><span className="material-symbols-outlined text-[18px]">play_circle</span></span>
                         <input {...register("youtubeUrl")} className="flex-1 px-4 py-3 bg-transparent border-none outline-none text-[#2f2f2d] font-medium" type="text" placeholder="YouTube URL"/>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className={activeTab === "whatsapp" ? "block" : "hidden"}>
              <section className="bg-[#ffffff] rounded-xl p-8 shadow-[0_8px_32px_rgba(255,209,102,0.05)] space-y-10 border border-[#e4e2df]/20">
                <div className="flex items-center gap-4 border-b border-[#f3f0ed] pb-6">
                  <div className="w-12 h-12 bg-[#25D366]/20 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#25D366]">chat</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-headline text-[#2f2f2d]">WhatsApp & Payments</h3>
                    <p className="text-sm text-[#787774]">Manage orders via WhatsApp and accept UPI.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#66547a]">Business WhatsApp Number</label>
                    <div className="flex gap-2">
                       <span className="bg-[#f3f0ed] px-4 py-4 rounded-lg font-black text-[#5c5b59]">+91</span>
                       <input {...register("whatsappNumber")} className="flex-1 bg-[#f3f0ed] border-none rounded-lg focus:ring-2 focus:ring-[#f9cc61] px-4 font-bold text-[#2f2f2d] outline-none" placeholder="9876543210" type="text"/>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#66547a]">Manual UPI ID</label>
                    <input {...register("upiId")} className="w-full bg-[#f3f0ed] border-none rounded-lg focus:ring-2 focus:ring-[#f9cc61] px-6 py-4 font-bold text-[#2f2f2d] outline-none" placeholder="yourname@upi" type="text"/>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#66547a]">UPI QR Code Image</label>
                  <div className="relative group">
                    <div className="w-40 h-40 rounded-xl bg-[#f3f0ed] flex items-center justify-center border-2 border-dashed border-[#afadaa] overflow-hidden relative">
                      {qrFile ? (
                         <Image src={URL.createObjectURL(qrFile)} alt="Preview" fill className="object-cover" />
                      ) : store.upiQrUrl ? (
                         <Image src={store.upiQrUrl} alt="UPI QR" fill className="object-cover" />
                      ) : (
                         <span className="material-symbols-outlined text-4xl text-[#afadaa]">qr_code_scanner</span>
                      )}
                      <label className="absolute inset-0 bg-[#2f2f2d]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                        <span className="material-symbols-outlined text-white text-3xl">upload</span>
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => setQrFile(e.target.files?.[0] || null)} />
                      </label>
                    </div>
                    <p className="text-xs text-[#787774] mt-2 italic">Used for manual payment verification at checkout.</p>
                  </div>
                </div>

              </section>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-4 pb-12 pt-4 sticky bottom-0 bg-[#f9f6f3]/80 backdrop-blur-md">
              <button type="submit" disabled={loading} className="px-10 py-4 flex items-center gap-2 rounded-full bg-[#745700] text-[#ffe1a6] font-black shadow-[0_8px_32px_rgba(116,87,0,0.2)] hover:bg-[#674d00] hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-widest disabled:opacity-50">
                {loading ? <span className="material-symbols-outlined animate-spin">refresh</span> : <span className="material-symbols-outlined">save</span>}
                Save Configuration
              </button>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
}
