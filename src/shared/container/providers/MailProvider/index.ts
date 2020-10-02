import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import mailConfig from '@config/mail';
import { container } from 'tsyringe';

import EthrealMailProvider from './implementations/EthrealMailProvider';
import SESMailProvider from './implementations/SESMailProvider';

const mailProviders = {
  ethereal: container.resolve(EthrealMailProvider),
  ses: container.resolve(SESMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  mailProviders[mailConfig.driver],
);
