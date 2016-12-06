import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
    opts.features["docson"] = !!siteSettings.docson_enabled;
});

function add_docson_link (text) {
    text = text || "";
    return text.replace(/\.json\b/ig, ".json XXXX");
}

export function setup(helper) {
    helper.addPreProcessor(add_docson_link);
}