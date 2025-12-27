"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useClerk, useUser } from "@clerk/nextjs";
import {
  LogOutIcon,
  MenuIcon,
  LayoutDashboardIcon,
  Share2Icon,
  UploadIcon,
  ImageIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { href: "/home", icon: LayoutDashboardIcon, label: "Home Page" },
  { href: "/social-share", icon: Share2Icon, label: "Social Share" },
  { href: "/video-upload", icon: UploadIcon, label: "Video Upload" },
];

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  const { user } = useUser();

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r bg-card">
        <div className="flex items-center justify-center py-4 border-b">
          <ImageIcon className="w-10 h-10 text-primary" />
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-4 px-4 py-2 rounded-lg transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="w-6 h-6" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        {user && (
          <div className="p-4 border-t">
            <Button
              onClick={handleSignOut}
              variant="outline"
              className="w-full"
            >
              <LogOutIcon className="mr-2 h-5 w-5" />
              Sign Out
            </Button>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="w-full border-b bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <MenuIcon className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-center py-4 border-b">
                      <ImageIcon className="w-10 h-10 text-primary" />
                    </div>
                    <nav className="flex-1 p-4 space-y-2">
                      {sidebarItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "flex items-center space-x-4 px-4 py-2 rounded-lg transition-colors",
                            pathname === item.href
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-accent hover:text-accent-foreground"
                          )}
                          onClick={() => setSidebarOpen(false)}
                        >
                          <item.icon className="w-6 h-6" />
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </nav>
                    {user && (
                      <div className="p-4 border-t">
                        <Button
                          onClick={handleSignOut}
                          variant="outline"
                          className="w-full"
                        >
                          <LogOutIcon className="mr-2 h-5 w-5" />
                          Sign Out
                        </Button>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
              <div className="flex-1">
                <Link href="/" onClick={handleLogoClick}>
                  <Button variant="ghost" className="text-2xl font-bold tracking-tight">
                    SnipSnap
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                {user && (
                  <>
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={user.imageUrl}
                        alt={
                          user.username || user.emailAddresses[0].emailAddress
                        }
                      />
                      <AvatarFallback>
                        {(user.username || user.emailAddresses[0].emailAddress || "U").charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm truncate max-w-xs lg:max-w-md hidden sm:inline">
                      {user.username || user.emailAddresses[0].emailAddress}
                    </span>
                    <Button
                      onClick={handleSignOut}
                      variant="ghost"
                      size="icon"
                    >
                      <LogOutIcon className="h-6 w-6" />
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>
        {/* Page content */}
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}