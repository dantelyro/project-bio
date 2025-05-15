import ProjectCard from "@/app/components/common/project-card";
import TotalVisits from "@/app/components/common/total-visits";
import UserCard from "@/app/components/common/user-card";
import { auth } from "@/app/lib/auth";
import { getProfileData } from "@/app/server/get-profile-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import NewProject from "./new-project";

interface Props  {
  params: Promise <{
    profileId: string;
  }>;
}

export default async function ProfilePage({ params }: Props) {
  const { profileId } = await params;

  const profileData = await getProfileData(profileId);

  if (!profileData) return notFound()

  const session = await auth()

  const isOwner = profileData.userId === session?.user?.id

  // TODO: add page view

  // if not in trial mode, direct to upgrade

  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-tertiary">
        <span>Você esta usando a versão trial</span>
        <Link href={`/${profileId}/upgrade`}>
          <button className="text-accent-green font-bold">Faça o Upgrade agora</button>
        </Link>
      </div>
      <div className="w-1/2 flex justify-center h-min">
        <UserCard />
      </div>
      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        {isOwner && <NewProject profileId={profileId} />}
      </div>
      <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
        <TotalVisits />
      </div>
    </div>
  )
}