import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignUpButton,
  SignInButton,
  SignedOut,
  SignedIn,
} from "@clerk/nextjs";
import {
  Circle,
  Loader,
  Microscope,
  Orbit,
  Satellite,
  Shell,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image className="animate-bounce-slow" src="/boy.svg" fill alt="Hero" />
        <div>
          <Circle className="h-5 w-5 text-green-500 animate-ping absolute right-[10px] bottom-[80px]" />
          <Circle className="h-5 w-5 text-green-500 animate-ping absolute left-40 bottom-100" />
          <Circle className="h-5 w-5 text-green-500 animate-ping absolute left-[10px] bottom-[10px]" />
          <Orbit className="h-5 w-5 text-green-500 animate-spin-slow absolute left-0 bottom-40" />
          <Star className="h-5 w-5 text-green-500 animate-spin-slow absolute right-0 bottom-10 lg:right-5 lg:bottom-40" />
          <Shell className="h-5 w-5 text-green-500 animate-spin-slow absolute right-0 top-2 lg:right-20 lg:top-20" />
          <Satellite className="h-5 w-5 text-green-500 animate-spin-slow absolute left-20 bottom-1 " />
        </div>
      </div>

      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480] text-center">
          Learn Science In Myanmar Language With Science Plus.
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal">
                <Button size="lg" variant="secondary" className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button size="lg" variant="primaryOutline" className="w-full">
                  Already have an account?
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
