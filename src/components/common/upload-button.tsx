import { Upload } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export function UploadButton() {
  return (
    <Button
      variant="secondary"
      className={cn(
        "cursor-pointer",
        "rounded-2xl",
        "bg-linear-[128.84deg,#0f6cbd_20.46%,#3c45ab_72.3%]",
        "hover:bg-linear-[128.84deg,#025caa_20.46%,#222b91_72.3%]",
      )}
    >
      <Upload />
      Upload
    </Button>
  );
}
