import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarketInformationService } from './market-information.service';
import { CreateMarketInformationDto } from './dto/create-market-information.dto';
import { UpdateMarketInformationDto } from './dto/update-market-information.dto';

@Controller('market-information')
export class MarketInformationController {
  constructor(
    private readonly marketInformationService: MarketInformationService,
  ) {}

  @Post()
  create(@Body() createMarketInformationDto: CreateMarketInformationDto) {
    return this.marketInformationService.create(createMarketInformationDto);
  }

  @Get()
  findAll() {
    return this.marketInformationService.findAll();
  }

  @Get('scrapedData')
  scrapedData() {
    console.log('scraped Click');
    return this.marketInformationService.scrapedData();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.marketInformationService.findOne(name);
  }

  @Get('/scrapedData/:name')
  scrapedOneProduct(@Param('name') name: string) {
    return this.marketInformationService.scrapedSingleProductCategory(name);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMarketInformationDto: UpdateMarketInformationDto,
  ) {
    return this.marketInformationService.update(id, updateMarketInformationDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.marketInformationService.remove(id);
  // }
}
