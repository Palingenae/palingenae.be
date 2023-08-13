import { GlobalConfig} from "payload/types";

const MainNavigation: GlobalConfig = {
    slug: "navigation",
    fields: [
        {
            name: "routes",
            type: "array",
            required: true,
            maxRows: 6,
            fields: [
                {
                    name: "page",
                    type: "relationship",
                    relationTo: "pages",
                    required: true
                }
            ]
        }
    ]
}

export default MainNavigation;