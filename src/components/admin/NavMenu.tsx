"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";
import {
  LeaderboardIcon,
  MembersIcon,
  OverviewActiveIcon,
  OverviewIcon,
  ParticipantsIcon,
  QuizActiveIcon,
  QuizIcon,
} from "icons/dashboard";

const links = [
  {
    href: "/dashboard",
    name: "Overview",
    icon: OverviewIcon,
    ActiveIcon: OverviewActiveIcon,
  },
  {
    href: "/leaderboard",
    name: "Leaderboard",
    icon: LeaderboardIcon,
    ActiveIcon: LeaderboardIcon,
  },
  {
    href: "/members",
    name: "Members",
    icon: MembersIcon,
    ActiveIcon: MembersIcon,
  },
  {
    href: "/participants",
    name: "Participants",
    icon: ParticipantsIcon,
    ActiveIcon: ParticipantsIcon,
  },
  {
    href: "/quizzes",
    name: "Quizzes",
    icon: QuizIcon,
    ActiveIcon: QuizActiveIcon,
  },
];

export default function NavMenu() {
  const pathname = usePathname();
  //   const handleSignOutClick: MouseEventHandler<HTMLButtonElement> = async (
  //     event
  //   ) => {
  //     event.preventDefault();

  //     await signOut();
  //   };
  return (
    <nav className="mt-6 w-full flex-grow">
      <ul className="h-full flex flex-col justify-between">
        <div className="divide-y divide-ea">
          <div className="pb-4">
            {links.map((link) => {
              let isActive = pathname?.startsWith(link.href);

              //   if (link.href == "/reports/transactions") {
              //     isActive = pathname.startsWith("/reports");
              //   }
              const Icon = link.icon;
              const ActiveIcon = link.ActiveIcon;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={
                      !isActive
                        ? "flex gap-3 items-center py-4 px-2 text-text-tertiary/80"
                        : "flex gap-3 items-center py-4 px-2 bg-tertiary rounded-lg text-primary"
                    }
                  >
                    {isActive ? <ActiveIcon /> : <Icon />}

                    <span className="whitespace-nowrap">{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </div>
        </div>

        {/* <button
          className="flex items-center gap-4 border-t pt-6"
          onClick={handleSignOut}
        >
          <LogoutIcon />
          <p className="text-sm text-333 hover:font-semibold">Logout</p>
        </button> */}
      </ul>
    </nav>
  );
}
