import { ChannelTypeEnum } from '@novu/shared';
import { ICredentials } from '@novu/dal';
import { BaseSmsHandler } from './base.handler';
//  import { BulksmsSmsProvider } from '@novu/bulksms';
import { BulksmsSmsProvider } from '../../../../../../../../providers/bulksms/src/lib/bulksms.provider';

export class BulksmsSmsHandler extends BaseSmsHandler {
  constructor() {
    super('bulksms', ChannelTypeEnum.SMS);
  }

  buildProvider(credentials: ICredentials) {
    const config: {
      authKey?: string;
      sender?: string;
      route?: string;
      dltEntity?: string;
    } = {
      authKey: credentials.apiKey,
      sender: credentials.from,
      route: credentials.route,
      dltEntity: credentials.dltEntity,
    };

    this.provider = new BulksmsSmsProvider(config);
  }
}
