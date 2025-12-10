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
exports.InventoryTransactionController = void 0;
const common_1 = require("@nestjs/common");
const inventory_transaction_service_1 = require("./inventory-transaction.service");
const create_inventory_transaction_dto_1 = require("./dto/create-inventory-transaction.dto");
const update_inventory_transaction_dto_1 = require("./dto/update-inventory-transaction.dto");
let InventoryTransactionController = class InventoryTransactionController {
    inventoryTransactionService;
    constructor(inventoryTransactionService) {
        this.inventoryTransactionService = inventoryTransactionService;
    }
    stockIn(createInventoryTransactionDto) {
        return this.inventoryTransactionService.stockIn(createInventoryTransactionDto);
    }
    stockOut(createInventoryTransactionDto) {
        return this.inventoryTransactionService.stockOut(createInventoryTransactionDto);
    }
    findAll() {
        return this.inventoryTransactionService.findAll();
    }
    findOne(id) {
        return this.inventoryTransactionService.findOne(+id);
    }
    update(id, updateInventoryTransactionDto) {
        return this.inventoryTransactionService.update(+id, updateInventoryTransactionDto);
    }
    remove(id) {
        return this.inventoryTransactionService.remove(+id);
    }
};
exports.InventoryTransactionController = InventoryTransactionController;
__decorate([
    (0, common_1.Post)('stock-in'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inventory_transaction_dto_1.CreateInventoryTransactionDto]),
    __metadata("design:returntype", void 0)
], InventoryTransactionController.prototype, "stockIn", null);
__decorate([
    (0, common_1.Post)('stock-out'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inventory_transaction_dto_1.CreateInventoryTransactionDto]),
    __metadata("design:returntype", void 0)
], InventoryTransactionController.prototype, "stockOut", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InventoryTransactionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryTransactionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_inventory_transaction_dto_1.UpdateInventoryTransactionDto]),
    __metadata("design:returntype", void 0)
], InventoryTransactionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryTransactionController.prototype, "remove", null);
exports.InventoryTransactionController = InventoryTransactionController = __decorate([
    (0, common_1.Controller)('inventory-transaction'),
    __metadata("design:paramtypes", [inventory_transaction_service_1.InventoryTransactionService])
], InventoryTransactionController);
//# sourceMappingURL=inventory-transaction.controller.js.map