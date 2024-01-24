"use client";

import { Button } from "@/common";
import { toast } from "react-hot-toast";

const DemoPage = () => {
  return (
    <div>
      <Button
        color="secondary"
        title={"Hello World"}
        onClick={() => toast.success("Hello World")}
      />
    </div>
  );
};

export default DemoPage;
