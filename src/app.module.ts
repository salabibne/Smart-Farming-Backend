import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { WeatherModule } from './weather/weather.module';
import { InventoryCategoryModule } from './inventory_category/inventory_category.module';
import { InventoryManagementModule } from './inventory-management/inventory-management.module';
import { InventoryTransactionModule } from './inventory-transaction/inventory-transaction.module';
import { FinanceModule } from './finance/finance.module';
import { MarketInformationModule } from './market-information/market-information.module';

@Module({
  imports: [
    
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Throttling for rate limiting
    ThrottlerModule.forRoot([
      {
        ttl: 60000, // 1 minute
        limit: 100, // 100 requests per minute globally
      },
    ]),


    PrismaModule,
    AuthModule,
    WeatherModule,
    InventoryCategoryModule,
    InventoryManagementModule,
    InventoryTransactionModule,
    FinanceModule,
    MarketInformationModule,
  ],
})
export class AppModule {}
