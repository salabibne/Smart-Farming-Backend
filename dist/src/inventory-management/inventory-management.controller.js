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
exports.InventoryManagementController = void 0;
const common_1 = require("@nestjs/common");
const inventory_management_service_1 = require("./inventory-management.service");
const create_inventory_management_dto_1 = require("./dto/create-inventory-management.dto");
const update_inventory_management_dto_1 = require("./dto/update-inventory-management.dto");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
let InventoryManagementController = class InventoryManagementController {
    inventoryManagementService;
    constructor(inventoryManagementService) {
        this.inventoryManagementService = inventoryManagementService;
    }
    create(createInventoryManagementDto, userId) {
        console.log('User from JWT:', userId);
        return this.inventoryManagementService.create(createInventoryManagementDto, userId);
    }
    findAll(userId) {
        return this.inventoryManagementService.findAll(userId);
    }
    findOne(id) {
        return this.inventoryManagementService.findOne(+id);
    }
    update(id, updateInventoryManagementDto, userId) {
        return this.inventoryManagementService.update(id, updateInventoryManagementDto, userId);
    }
    remove(id) {
        return this.inventoryManagementService.remove(id);
    }
};
exports.InventoryManagementController = InventoryManagementController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inventory_management_dto_1.CreateInventoryManagementDto, String]),
    __metadata("design:returntype", void 0)
], InventoryManagementController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryManagementController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryManagementController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_inventory_management_dto_1.UpdateInventoryManagementDto, String]),
    __metadata("design:returntype", void 0)
], InventoryManagementController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryManagementController.prototype, "remove", null);
exports.InventoryManagementController = InventoryManagementController = __decorate([
    (0, common_1.Controller)('inventory-management'),
    __metadata("design:paramtypes", [inventory_management_service_1.InventoryManagementService])
], InventoryManagementController);
//# sourceMappingURL=inventory-management.controller.js.map