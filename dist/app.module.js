"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _default = require("@apollo/server/plugin/landingPage/default");
const _apollo = require("@nestjs/apollo");
const _common = require("@nestjs/common");
const _graphql = require("@nestjs/graphql");
const _TestScalar = require("../graphql/scalars/TestScalar");
const _applemodule = require("./apple/apple.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AppModule = class AppModule {
};
AppModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _graphql.GraphQLModule.forRoot({
                driver: _apollo.ApolloDriver,
                playground: false,
                plugins: [
                    // Install a landing page plugin based on NODE_ENV
                    process.env.NODE_ENV === 'production' ? (0, _default.ApolloServerPluginLandingPageProductionDefault)({
                        footer: false
                    }) : (0, _default.ApolloServerPluginLandingPageLocalDefault)({
                        embed: {
                            runTelemetry: false
                        }
                    })
                ],
                typePaths: [
                    './**/*/*.graphql'
                ],
                resolvers: {
                    Test: _TestScalar.TestScalar
                }
            }),
            _applemodule.AppleModule
        ]
    })
], AppModule);
