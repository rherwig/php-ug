import createApp from '../shared';

const { app } = createApp();

renderVueComponentToString(app, (err, html) => {
    print(html);
});
