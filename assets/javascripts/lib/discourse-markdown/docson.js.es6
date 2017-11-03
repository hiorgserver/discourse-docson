import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
    opts.features["docson"] = !!siteSettings.docson_enabled;
});

function add_docson_link (text) {
    text = text || "";
    return text.replace(/(https?:\/\/\S+\/\S+\.json)\b/ig, function (match, p1) {
        return p1 + ' XX<script src="' + this.siteSettings.docson_script +'" data-schema="' + p1 + '"></script>';
    });
}

export function setup(helper) {
    helper.addPreProcessor(add_docson_link);

    helper.whiteList([ 'script[href='+this.siteSettings.docson_script+']', 'script[data-schema=*]']);
}