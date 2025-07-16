"use client";
import Navbar from "@/components/navbar";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const mockPools = [
  {
    token: "USDC",
    chain: "Ethereum",
    liquidity: "$1.2M",
    details: "View",
  },
  {
    token: "DAI",
    chain: "Polygon",
    liquidity: "$850K",
    details: "View",
  },
  {
    token: "WBTC",
    chain: "Arbitrum",
    liquidity: "$600K",
    details: "View",
  },
];

export default function PoolPage() {
  const [search, setSearch] = useState("");

  const filtered = mockPools.filter((item) =>
    item.token.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen bg-[#151A2F] px-4 py-10 flex justify-center">
        <div className="w-full max-w-4xl bg-[#21263E] p-10 rounded-xl shadow-lg">
          <Input
            placeholder="Search name or paste address"
            className="mb-6 px-4 py-6 bg-[#21263E] border border-[#2b2e40] text-white font-medium placeholder:text-white/50 rounded-2xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Header Row */}
          <div className="grid grid-cols-4 text-white/80 text-sm font-semibold border-b border-[#2b2e40] pb-3 mb-2">
            <div>Tokens</div>
            <div className="hidden sm:block">Chains</div>
            <div>Liquidity</div>
            <div>Details</div>
          </div>

          {/* Data Rows */}
          {filtered.length === 0 ? (
            <div className="text-center text-white/40 py-10">
              No matching tokens.
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-4 py-3 border-b border-[#2b2e40] text-white/90 text-sm"
              >
                <div>{item.token}</div>
                <div className="hidden sm:block">{item.chain}</div>
                <div>{item.liquidity}</div>
                <div className="text-blue-400 hover:underline cursor-pointer">
                  {item.details}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
