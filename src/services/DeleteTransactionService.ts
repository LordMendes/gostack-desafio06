import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionRepository);
    const transactionExists = await transactionRepository.findOne(id);

    if (!transactionExists) {
      throw new AppError('Inexistent transaction');
    }

    await transactionRepository.remove(transactionExists);
  }
}

export default DeleteTransactionService;
