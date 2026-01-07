import { Injectable } from '@nestjs/common';
import { CreateMarketInformationDto } from './dto/create-market-information.dto';
import { UpdateMarketInformationDto } from './dto/update-market-information.dto';
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from '@prisma/client';
@Injectable()
export class MarketInformationService {
  constructor(private prisma: PrismaService) {}
  async create(createMarketInformationDto: CreateMarketInformationDto) {
    const marketInfo = await this.prisma.productFromMarket.create({
      data: {
        ...createMarketInformationDto,
        name: createMarketInformationDto?.name?.toLowerCase(),
      },
    });
    return {
      message: 'Market information created successfully',
      data: marketInfo,
      status: 201,
    };
  }

  async findAll() {
    const marketInfo = await this.prisma.productFromMarket.findMany();
    return {
      message: 'Market information retrieved successfully',
      data: marketInfo,
      status: 200,
    };
  }

  async findOne(name: string) {
    const marketInfo = await this.prisma.productFromMarket.findFirst({
      where: { name: name.toLowerCase() },
    });
    if (!marketInfo) {
      return {
        message: 'Market information not found',
        status: 404,
      };
    }
    return {
      message: 'Market information retrieved successfully',
      data: marketInfo,
      status: 200,
    };
  }

  async update(
    id: string,
    updateMarketInformationDto: UpdateMarketInformationDto,
  ) {
    const marketInfo = await this.prisma.productFromMarket.update({
      where: { id },
      data: updateMarketInformationDto,
    });
    if (!marketInfo) {
      return {
        message: 'Market information not found',
        status: 404,
      };
    }
    return {
      message: 'Market information updated successfully',
      data: marketInfo,
      status: 200,
    };
  }

  async scrapedData() {
    try {
      const marketInfo = await this.prisma.productpricefrommarket.findMany({
        orderBy: {
          scraped_at: 'desc',
        }
      });

      return {
        message: 'Scraped market information retrieved successfully',
        data: marketInfo,
        status: 200,
      };
    } catch (error) {
      console.error('Error fetching scraped market data:', error);

      return {
        message: 'Failed to retrieve scraped market information',
        error: error?.message ?? 'Unknown error',
        status: 500,
      };
    }
  }

  async scrapedSingleProductCategory(name: string) {
    try {
      const marketInfo = await this.prisma.productpricefrommarket.findMany({
        where: { category: name.toLowerCase() },
        orderBy: {
          scraped_at: 'desc',
        }
      });
      if(marketInfo.length === 0){
        return {
          message: 'Scraped market information not found',
          status: 404,
        };
      }

      return {
        message: 'Scraped information retrieved successfully',
        data: marketInfo,
        status: 200,
      };
    } catch (error) {
      console.error('Error fetching scraped market data:', error);

      return {
        message: 'Failed to retrieve scraped market information',
        error: error?.message ?? 'Unknown error',
        status: 500,
      };
    }
  }

  // async remove(id: number) {
  //   await this.prisma.productFromMarket.delete({
  //     where: { id },
  //   });
  //   return {
  //     message: 'Market information deleted successfully',
  //     status: 200,
  //   };
  // }
}
