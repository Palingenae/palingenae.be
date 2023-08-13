import { CollectionConfig } from "payload/types";

const Pages: CollectionConfig = {
    slug: 'pages',
    fields: [
        {
            name: 'title',
            label: 'Page Title',
            type: 'text',
            required: true,
            localized: false /* Yet */
        }
    ],
    admin: {
        useAsTitle: 'fullTitle',
        defaultColumns: [
            'fullTitle',
            'createdAt',
            'status'
        ],
        group: 'Content'
    },
    versions: {
        drafts: true
    },
    access: {
        read: () => true,
    }
}

export default Pages;