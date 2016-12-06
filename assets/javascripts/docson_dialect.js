(function() {
    // Don't bother with this code if the new dialect system is present
    if (Discourse.dialect_deprecated) { return; }

    function add_docson_link (text) {
        text = text || "";
        return text.replace(/\.json\b/ig, ".json XXXX");
    }

    Discourse.Dialect.addPreProcessor(function(text) {
        if (Discourse.SiteSettings.docson_enabled) {
            text = add_docson_link(text);
        }
        return text;
    });
})();