import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowDown, Settings } from "lucide-react";
import Image from "next/image";
export default function RouterPage() {
  return (
    <div className="min-h-screen bg-[#0e101d] ">
      {/* Header */}
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl text-white font-semibold mb-6">Crosschain</h2>

        {/* FROM Card */}
        <div className="rounded-xl border border-red-500 bg-[#21263E] p-6 mb-4 h-[182px] w-full">
          <div className="flex justify-between mb-2 text-sm text-[#979dac] p-4">
            <span>From</span>
            <span>Balance: -</span>
          </div>
          <div className="flex items-center gap-4 ">
            <input
              type="text"
              placeholder="0.0"
              className="w-full border-0 border-b border-white bg-transparent text-white placeholder:text-white/50 focus:outline-none focus:ring-0 p-6"
            />
            <div className="flex gap-2">
              <div className="flex w-full  bg-[#1f2235] text-white text-sm px-4 py-2 rounded-2xl">
                <Button
                  variant="ghost"
                  className="bg-[#1f2235] text-white text-sm px-3 py-3"
                >
                  <span className="mr-2 bg-white rounded-3xl p-2 h-10 w-10 text-black justify-center">
                    ?
                  </span>
                  Select a token...
                </Button>
              </div>
              <div className="flex w-full  bg-[#1f2235] text-white text-sm px-4 py-2 rounded-2xl">
                <Image
                  src="/ETH.svg"
                  alt="?"
                  width={40}
                  height={40}
                  className="bg-white rounded-3xl p-2"
                />
                <Button variant="ghost">Ethereum mainnet</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="relative mb-4 h-6">
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <ArrowDown className="text-white" />
          </div>
          <div className="absolute right-0 text-white text-sm cursor-pointer">
            + Send To
          </div>
        </div>

        {/* TO Card */}
        <div className="rounded-xl  bg-[#21263E] p-6 mb-4 h-[182px] w-full">
          <div className="flex justify-between mb-2 text-sm text-[#979dac] p-4">
            <span>To</span>
            <span>Balance: -</span>
          </div>
          <div className="flex items-center gap-4 ">
            <input
              type="text"
              placeholder="0.0"
              className="w-full border-0 border-b border-white bg-transparent text-white placeholder:text-white/50 focus:outline-none focus:ring-0 p-6"
            />
            <div className="flex gap-2">
              <div className="flex w-full  bg-[#1f2235] text-white text-sm px-4 py-2 rounded-2xl">
                <Button
                  variant="ghost"
                  className="bg-[#1f2235] text-white text-sm px-3 py-3"
                >
                  <span className="mr-2 bg-white rounded-3xl p-2 h-10 w-10 text-black justify-center">
                    ?
                  </span>
                  Select a token...
                </Button>
              </div>
              <div className="flex w-full  bg-[#1f2235] text-white text-sm px-4 py-2 rounded-2xl">
                <div className="mr-2 pl-4 bg-white rounded-3xl p-2 h-10 w-10 text-black justify-center items-center">
                  ?
                </div>
                <Button variant="ghost">Select Network</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Connect Wallet Button */}
        <div className="text-center">
          <Button className="bg-[#6f7bfd] hover:bg-[#5c6ae4] text-white px-6 py-2 rounded-md">
            Connect Wallet
          </Button>
        </div>
      </div>
    </div>
  );
}
