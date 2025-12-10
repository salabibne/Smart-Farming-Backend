"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInventoryTransactionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_inventory_transaction_dto_1 = require("./create-inventory-transaction.dto");
class UpdateInventoryTransactionDto extends (0, swagger_1.PartialType)(create_inventory_transaction_dto_1.CreateInventoryTransactionDto) {
}
exports.UpdateInventoryTransactionDto = UpdateInventoryTransactionDto;
//# sourceMappingURL=update-inventory-transaction.dto.js.map