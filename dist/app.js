"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    initializeApp: function() {
        return initializeApp;
    },
    destroyApp: function() {
        return destroyApp;
    }
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
let app;
async function initializeApp(PORT = process.env.PORT || 3000, { logger = [
    'error',
    'warn',
    'debug',
    'log'
], abortOnError = false } = {}) {
    app = await _core.NestFactory.create(_appmodule.AppModule, {
        logger,
        abortOnError
    });
    app.enableCors();
    await app.listen(PORT);
    return app.getHttpServer().address();
}
async function destroyApp() {
    return await app.close();
}
