
export function setupViews (app) {
    app.set('views', process.cwd() + '/src/views');
    app.set('view engine', 'twig');
    app.set("twig options", {

    });
}