import { Container } from 'inversify';
import PinoService from '../core/logger/pino.service.js';
import RestApplication from '../app/rest.js';
import ConfigService from '../core/config/config.service.js';
import MongoClientService from '../core/database-client/mongo-client.service.js';
import { AppComponent } from '../types/app-component.enum.js';
import { LoggerInterface } from '../core/logger/logger.interface.js';
import { ConfigInterface } from '../core/config/config.interface.js';
import { DatabaseClientInterface } from '../core/database-client/database-client.interface';
import { RestSchema } from '../core/config/rest.schema.js';

export function createRestApplicationContainer() {
  const restApplicationContainer = new Container();

  restApplicationContainer.bind<RestApplication>(AppComponent.RestApplication).to(RestApplication).inSingletonScope();
  restApplicationContainer.bind<LoggerInterface>(AppComponent.LoggerInterface).to(PinoService).inSingletonScope();
  restApplicationContainer.bind<ConfigInterface<RestSchema>>(AppComponent.ConfigInterface).to(ConfigService).inSingletonScope();
  restApplicationContainer.bind<DatabaseClientInterface>(AppComponent.DatabaseClientInterface).to(MongoClientService).inSingletonScope();

  return restApplicationContainer;
}
