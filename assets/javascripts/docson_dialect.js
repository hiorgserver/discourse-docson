(function() {
    // Don't bother with this code if the new dialect system is present
    if (Discourse.dialect_deprecated) { return; }

    function add_docson_link (text) {
        text = text || "";
        return text.replace(/(https?:\/\/\S+\/\S+\.json)\b/ig, function (match, p1) {
              return p1 + ' YY<script src="' + this.siteSettings.docson_script +'" data-schema="' + p1 + '"></script>';
            });
    }

    Discourse.Dialect.addPreProcessor(function(text) {
        if (Discourse.SiteSettings.docson_enabled) {
            text = add_docson_link(text);
        }
        return text;
    });
})();