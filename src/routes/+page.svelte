<script>
    let projects = [
        {
            name: "Operating System final assignment",
            description: "Simulation atom fission using processes",
            repoLink: "https://github.com/Edmi6163/Fission_Simulation",
        },
        {
            name: "Algorithm and Data Structure final assignment",
            description: "Final assignment of DSA course, using C and Java",
            repoLink: "https://github.com/Edmi6163/DSA_final_assignment",
        },
        {
            name: "Points Collision Simulation",
            description: "Personal side project to learn C++ by doing",
            repoLink:
                "https://github.com/Edmi6163/points_collision_detection",
        },
    ];
</script>

<div class="bg-night min-h-screen flex flex-col items-center py-8 text-white">
    <nav class="bg-windowLight text-black py-2 w-full">
        <div class="container mx-auto text-center">
            <p> This website will be a continous work in progress. </p>
        </div>
    </nav>
    <h1 class="text-4xl font-bold mb-4 text-windowLight-bright">
        Hi, I'm Francesco
    </h1>

    <div
        class="comic-bubble bg-night-light shadow-md rounded-lg p-6 mb-6 max-w-xl text-white relative"
    >
        <p class="text-lg">
            I'm a Computer Science student loving mixing development and
            creativty, for this reason my dream is to be a game developer (I
            think). Currently i'm trying finish my bachelor's in computer
            science and doing research on quantum machine learning. I enjoy
            tackling challenging problems and learning new technologies. Here
            are some of my projects I've completed in the last few years. <br />
            Ah, yeah I almost forgot to mention that i'm also a bike punk enjoier
            constantly listening to music, who loves going out at night. <br />
        </p>
        <div class="arrow"></div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {#each projects as project}
            <a
                href={project.repoLink}
                class="project-bubble bg-windowLight shadow-md rounded-lg overflow-hidden max-w-sm"
            >
                <div class="p-4">
                    <h2 class="text-xl font-bold text-white">{project.name}</h2>
                    <p class="text-white">{project.description}</p>
                </div>
            </a>
        {/each}
    </div>
</div>
