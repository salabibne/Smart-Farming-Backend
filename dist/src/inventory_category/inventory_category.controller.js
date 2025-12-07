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
exports.InventoryCategoryController = void 0;
const common_1 = require("@nestjs/common");
const inventory_category_service_1 = require("./inventory_category.service");
const create_inventory_category_dto_1 = require("./dto/create-inventory_category.dto");
const update_inventory_category_dto_1 = require("./dto/update-inventory_category.dto");
let InventoryCategoryController = class InventoryCategoryController {
    inventoryCategoryService;
    constructor(inventoryCategoryService) {
        this.inventoryCategoryService = inventoryCategoryService;
    }
    create(createInventoryCategoryDto) {
        return this.inventoryCategoryService.create(createInventoryCategoryDto);
    }
    findAll() {
        return this.inventoryCategoryService.findAll();
    }
    findOne(id) {
        return this.inventoryCategoryService.findOne(id);
    }
    update(id, updateInventoryCategoryDto) {
        return this.inventoryCategoryService.update(+id, updateInventoryCategoryDto);
    }
    remove(id) {
        return this.inventoryCategoryService.remove(+id);
    }
};
exports.InventoryCategoryController = InventoryCategoryController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inventory_category_dto_1.CreateInventoryCategoryDto]),
    __metadata("design:returntype", void 0)
], InventoryCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InventoryCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryCategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_inventory_category_dto_1.UpdateInventoryCategoryDto]),
    __metadata("design:returntype", void 0)
], InventoryCategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryCategoryController.prototype, "remove", null);
exports.InventoryCategoryController = InventoryCategoryController = __decorate([
    (0, common_1.Controller)('inventory-category'),
    __metadata("design:paramtypes", [inventory_category_service_1.InventoryCategoryService])
], InventoryCategoryController);
//# sourceMappingURL=inventory_category.controller.js.map