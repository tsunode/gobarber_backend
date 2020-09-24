import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);
