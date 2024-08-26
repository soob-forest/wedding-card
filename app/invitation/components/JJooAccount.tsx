import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CopyIcon } from "lucide-react";
import { Label } from "@radix-ui/react-label";

function JJooAccount() {
  return (
    <div className="flex items-center justify-center mb-2">
      <Dialog>
        <div className="text-base font-mono tracking-widest mr-2">신부에게</div>
        <DialogTrigger
          className={`px-4 py-2 rounded text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
        >
          응원하러 가기
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>마음 표현하기</DialogTitle>
            <DialogDescription>신부 계좌 (조인혜씨) 토스뱅크</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input id="account" defaultValue="1000-1092-6256" readOnly />
            </div>
            <Button
              type="submit"
              size="sm"
              className="px-3"
              onClick={() => {
                navigator.clipboard.writeText("1000-1092-6256");
              }}
            >
              <span className="sr-only">Copy</span>
              <CopyIcon className="h-4 w-4" /> 복사
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default JJooAccount;
