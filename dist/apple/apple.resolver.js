"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppleResolver", {
    enumerable: true,
    get: function() {
        return AppleResolver;
    }
});
const _graphql = require("@nestjs/graphql");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let AppleResolver = class AppleResolver {
    apple() {
        return {
            id: 1,
            test: 'foo'
        };
    }
    constructor(){}
};
_ts_decorate([
    (0, _graphql.Query)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], AppleResolver.prototype, "apple", null);
AppleResolver = _ts_decorate([
    (0, _graphql.Resolver)('Apple'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], AppleResolver);
