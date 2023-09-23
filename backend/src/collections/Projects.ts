import { CollectionConfig } from "payload/types";

const Projects: CollectionConfig = {
    slug: "projects",
    admin: {
        useAsTitle: "title",
    },
    access: {
        read: () => true
    },
    fields: [
        {
            label: "Nom du projet",
            name: "title",
            type: "text",
            required: true
        },
        {
            label: "Slug",
            name: "slug",
            type: "text",
            required: true,
            unique: true
        },
        {
            label: "Année",
            name: "year",
            type: "text",
            required: true
        },
        {
            label: "Type de projet",
            name: "type",
            type: "select",
            options: [
                {
                    label: "Site web",
                    value: "Site web"
                },
                {
                    label: "API",
                    value: "API"
                }
            ],
            hasMany: false,
            required: true
        },
        {
            label: "Statut",
            name: "status",
            type: "select",
            options: [
                {
                    label: "Actif",
                    value: "Actif"
                },
                {
                    label: "Terminé",
                    value: "Terminé"
                },
            ],
            hasMany: false,
            required: true
        },
        {
            label: "Périmètre",
            name: "scope",
            type: "select",
            options: [
                {
                    label: "Design",
                    value: "Design"
                },
                {
                    label: "Design System",
                    value: "Design System"
                },
                {
                    label: "Intégration",
                    value: "Intégration"
                },
                {
                    label: "Front-End",
                    value: "Front-End"
                },
                {
                    label: "Back-End",
                    value: "Back-End"
                },
                {
                    label: "API",
                    value: "API"
                },
                {
                    label: "Hébergement",
                    value: "Hébergement"
                },
            ],
            hasMany: true,
            required: true
        },
        {
            label: "Outils",
            name: "stack",
            type: "select",
            hasMany: true,
            required: true,
            options: [
                {
                    label: "Figma",
                    value: "Figma"
                },
                {
                    label: "Astro",
                    value: "Astro"
                },
                {
                    label: "PayloadCMS",
                    value: "PayloadCMS"
                },
                {
                    label: "Sass",
                    value: "Sass"
                },
                {
                    label: "JavaScript",
                    value: "JavaScript"
                },
                {
                    label: "TypeScript",
                    value: "TypeScript"
                },
                {
                    label: "React",
                    value: "React"
                },
                {
                    label: "PHP",
                    value: "PHP"
                },
                {
                    label: "Symfony",
                    value: "Symfony"
                },
                {
                    label: "MySQL",
                    value: "MySQL"
                },
                {
                    label: "MongoDB",
                    value: "MongoDB"
                },
                {
                    label: "Docker",
                    value: "Docker"
                },
            ],
        },
        {
            label: "Contenu",
            name: "article",
            type: "richText",
            required: true,
            admin: {
                elements: [
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "link",
                    "blockquote"
                ]
            }
        },
        {
            label: "Image de couverture",
            name: "coverImage",
            type: "upload",
            relationTo: "media",
            access: {
                read: () => true
            },
            admin: {
                position: "sidebar",
            }
        },
    ]
}

export default Projects;
