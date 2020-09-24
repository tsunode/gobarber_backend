import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

import EthrealMailProvider from './MailProvider/implementations/EthrealMailProvider';
import IMailProvider from './MailProvider/models/IMailProvider';

container.registerSingleton<IStorageProvider>(
  'DiskStorageProvider',
  DiskStorageProvider,
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  new EthrealMailProvider(),
);
