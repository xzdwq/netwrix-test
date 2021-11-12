import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from '@cfg/configuration';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';
import { LocStateModule } from '@src/loc_state/loc_state.module';
import { LocCountryModule } from '@src/loc_country/loc_country.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        `.env.${process.env.NODE_ENV}`
      ],
      load: [
        configuration
      ],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ...config.get('database').netwrix,
        synchronize: config.get('mode') === 'development' ? true : false,
        logging: ['error'],
        autoLoadEntities: true
      })
    }),
    LocStateModule,
    LocCountryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
