import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    service = new UtilsService();
  });

  describe('createDataSets', () => {
    it('should return false', () => {
      const result = service.isNgRxSignals;
      expect(result).toBeFalsy();
    });

    it('should return true', () => {
      service.isNgRxSignals = true;
      const result = service.isNgRxSignals;
      expect(result).toBeTrue();
    });
  });
});
