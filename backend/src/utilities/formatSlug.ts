import { FieldHook } from "payload/types";

const format = (slug: string): string => slug
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase();

const formatSlug = (fallback: string): FieldHook => ({ value, originalDocument, data }) => {
    if (typeof value === 'string') {
        return format(value);
    }

    const fallbackData = (data && data[fallback]) || (originalDocument && originalDocument[fallback]);

    if (fallbackData && typeof fallbackData === 'string') {
        return format(fallbackData);
    }

    return value;
}

export default formatSlug;