import { PendingTxRepository } from '@app/server/modules/pending-txs'
import { CacheRepository } from '@app/server/repositories'
import { PendingTx } from 'ethvm-common'

export interface PendingTxService {
  getPendingTxs(limit: number, page: number): Promise<PendingTx[]>
  getPendingTxsOfAddress(hash: string, limit: number, page: number): Promise<PendingTx[]>
}

export class PendingTxServiceImpl implements PendingTxService {
  constructor(private readonly pendingTxRepository: PendingTxRepository, private readonly cacheRepository: CacheRepository) {}
  public getPendingTxs(limit: number, page: number): Promise<PendingTx[]> {
    return this.pendingTxRepository.getPendingTxs(limit, page)
  }

  public getPendingTxsOfAddress(hash: string, limit: number = 10, page: number = 0): Promise<PendingTx[]> {
    return this.pendingTxRepository.getPendingTxsOfAddress(hash, limit, page)
  }
}
