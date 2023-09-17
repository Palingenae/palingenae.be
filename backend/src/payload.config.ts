import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Projects from "./collections/Projects";
import { payloadCloud } from '@payloadcms/plugin-cloud';
import Medias from "./collections/Medias";

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Projects,
    Medias
  ],
  localization: {
    locales: [
        'fr',
        'en'
    ],
    defaultLocale: 'fr'
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud()
  ]
});
