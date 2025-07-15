import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowDown, Settings } from "lucide-react";

export default function RouterPage() {
  return (
    <div className="min-h-screen bg-[#0e101d] ">
      {/* Header */}
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl text-white font-semibold mb-6">Crosschain</h2>

        {/* FROM Card */}
        <div className="rounded-xl border border-red-500 bg-[#16182b] p-4 mb-4 h-[182px]">
          <div className="flex justify-between mb-2 text-sm text-[#979dac] p-4">
            <span>From</span>
            <span>Balance: -</span>
          </div>
          <div className="flex items-center gap-4 ">
            <Input
              type="text"
              placeholder="0.0"
              className="w-full border-0 border-b border-white bg-transparent text-white placeholder:text-white/50 focus:outline-none focus:ring-0 p-8"
            />
            <div className="flex gap-2">
              <Button
                variant="ghost"
                className="bg-[#1f2235] text-white text-sm px-3 py-3"
              >
                <span className="mr-2">?</span>
                Select a token...
              </Button>
              <Button
                variant="ghost"
                className="bg-[#1f2235] text-white text-sm px-3"
              >
                Ethereum mainnet
              </Button>
            </div>
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="flex justify-center mb-4">
          <ArrowDown className="text-white" />
        </div>

        {/* TO Card */}
        <div className="rounded-xl bg-[#16182b] p-4 mb-6">
          <div className="flex justify-between mb-2 text-sm text-[#979dac]">
            <span>To</span>
            <span>Balance: -</span>
          </div>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder="0.0"
              className="text-2xl font-medium text-white bg-transparent border-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <div className="flex gap-2">
              <Button
                variant="ghost"
                className="bg-[#1f2235] text-white text-sm px-3"
              >
                <span className="mr-2">?</span>
                Select a token...
              </Button>
              <Button
                variant="ghost"
                className="bg-[#1f2235] text-white text-sm px-3"
              >
                Select Network
              </Button>
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
