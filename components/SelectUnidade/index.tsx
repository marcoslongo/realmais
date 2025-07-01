"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export function SelectUnidade() {
  const router = useRouter();

  const handleSelectChange = (value: string) => {
    router.push(`/${value}`);
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecione uma unidade" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem className="cursor-pointer" value="cabo-frio">
            Cabo Frio
          </SelectItem>
          <SelectItem className="cursor-pointer" value="curitiba">
            Curitiba
          </SelectItem>
          <SelectItem className="cursor-pointer" value="francisco-beltrao">
            Francisco Beltrão
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
