requirejs.config({
paths: {
"jquery": [
//"https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min",
// If the CDN fails, load from this local module instead
"lib/jquery2.1.3"
]
}
});

require(["widget/widget_Hello_world"]);