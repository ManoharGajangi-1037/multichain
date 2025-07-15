"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";
import { SelectContent } from "@radix-ui/react-select";

export function RouterForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <div className="grid gap-4 max-w-md">
      <Select onValueChange={setFrom}>
        <SelectContent>
          <SelectItem value="ETH">Ethereum</SelectItem>
          <SelectItem value="BNB">BNB Chain</SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={setTo}>
        <SelectContent>
          <SelectItem value="AVAX">Avalanche</SelectItem>
          <SelectItem value="POLYGON">Polygon</SelectItem>
        </SelectContent>
      </Select>

      <Input placeholder="Amount" />
      <Button>Swap</Button>
    </div>
  );
}
