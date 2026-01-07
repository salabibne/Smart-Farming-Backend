"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketInformationController = void 0;
const common_1 = require("@nestjs/common");
const market_information_service_1 = require("./market-information.service");
const create_market_information_dto_1 = require("./dto/create-market-information.dto");
const update_market_information_dto_1 = require("./dto/update-market-information.dto");
let MarketInformationController = class MarketInformationController {
    marketInformationService;
    constructor(marketInformationService) {
        this.marketInformationService = marketInformationService;
    }
    create(createMarketInformationDto) {
        return this.marketInformationService.create(createMarketInformationDto);
    }
    findAll() {
        return this.marketInformationService.findAll();
    }
    scrapedData() {
        console.log('scraped Click');
        return this.marketInformationService.scrapedData();
    }
    findOne(name) {
        return this.marketInformationService.findOne(name);
    }
    scrapedOneProduct(name) {
        return this.marketInformationService.scrapedSingleProductCategory(name);
    }
    update(id, updateMarketInformationDto) {
        return this.marketInformationService.update(id, updateMarketInformationDto);
    }
};
exports.MarketInformationController = MarketInformationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_market_information_dto_1.CreateMarketInformationDto]),
    __metadata("design:returntype", void 0)
], MarketInformationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MarketInformationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('scrapedData'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MarketInformationController.prototype, "scrapedData", null);
__decorate([
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarketInformationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/scrapedData/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarketInformationController.prototype, "scrapedOneProduct", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_market_information_dto_1.UpdateMarketInformationDto]),
    __metadata("design:returntype", void 0)
], MarketInformationController.prototype, "update", null);
exports.MarketInformationController = MarketInformationController = __decorate([
    (0, common_1.Controller)('market-information'),
    __metadata("design:paramtypes", [market_information_service_1.MarketInformationService])
], MarketInformationController);
//# sourceMappingURL=market-information.controller.js.map