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
        tags: ["TypeScript", "Electronjs", "Selain"],
        description: "Handwave transforms your hand movements into intuitive commands, enabling you to navigate your computer, control presentations, and interact with applications without the need for traditional input devices. Leveraging MediaPipe's robust hand and face recognition capabilities, Handwave integrates gesture recognition with mouse control, presentation recording, and facial detection, making it a versatile tool for enhancing accessibility and productivity.",
        github: "https://github.com/JumppanenTomi/HandWave",
        download: "https://github.com/JumppanenTomi/HandWave/releases/tag/Latest",
        logo: "https://raw.githubusercontent.com/JumppanenTomi/HandWave/master/src/assets/handwave-logo.svg"
    },
    {
        name: "NoteSnap",
        tags: ["Kotlin", "Jetpack Compose", "Android"],
        description: "NoteSnap is an advanced note application that not only incorporates fundamental note-taking features but also offers additional functionalities such as language translation, folder organization, and integration with Google's ML Kit API for extracting text from images (currently supporting printed text only). The application is developed using Jetpack Compose and features a sleek Material 3 UI design.",
        github: "https://github.com/JumppanenTomi/NoteSnap",
        download: "https://github.com/JumppanenTomi/NoteSnap/releases",
    },
    {
        name: "Parliament school project",
        tags: ["Kotlin", "Android"],
        description: "Parliament-project is my first school project using Kotlin. Idea of of the application is that user can see all members of Finnish parliament and view some details of them. Data is fetched from json file that is hosted online. Application also works offline since it is loading all the data from json to room database and uses existing data if there is no connection to network. For images we use Glide library, web request we handle with Retrofit and json support is handled by Moshi.",
        github: "https://github.com/JumppanenTomi/parliament-project",
        download: "https://github.com/JumppanenTomi/parliament-project/releases",
    },
]