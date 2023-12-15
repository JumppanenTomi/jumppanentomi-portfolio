export type ProjectType = {
    name: string;
    description: string;
    github: string;
    video?: string;
    download?: string;
    logo?: string;
    tags?: string[]
}

export const projects: ProjectType[] = [
    {
        name: "HandWave",
        tags: ["TypeScript", "Electronjs", "Browser"],
        description: "HandWave-desc",
        github: "https://github.com/JumppanenTomi/HandWave",
        download: "https://github.com/JumppanenTomi/HandWave/releases/tag/Latest",
        logo: "https://raw.githubusercontent.com/JumppanenTomi/HandWave/master/src/assets/handwave-logo.svg"
    },
    {
        name: "NoteSnap",
        tags: ["Kotlin", "Jetpack Compose", "Android"],
        description: "NoteSnap-desc",
        github: "https://github.com/JumppanenTomi/NoteSnap",
        download: "https://github.com/JumppanenTomi/NoteSnap/releases",
    },
    {
        name: "Parliament school project",
        tags: ["Kotlin", "Android"],
        description: "Parliament-desc",
        github: "https://github.com/JumppanenTomi/parliament-project",
        download: "https://github.com/JumppanenTomi/parliament-project/releases",
    },
]