import { mockPlayers } from '../info/into_tests';
import { ChartService } from './chart.service';

describe('ChartService', () => {
  let service: ChartService;

  beforeEach(() => {
    service = new ChartService();
  });

  describe('createDataSets', () => {
    it('should return an array of datasets based on players', () => {
      const result = service.createDataSets(mockPlayers);

      expect(result.length).toBe(mockPlayers.length);
      expect(result[0].label).toBe(mockPlayers[0].name);
      expect(result[0].data).toEqual([
        mockPlayers[0].adwardWon,
        mockPlayers[0].dribbling,
        mockPlayers[0].goalMatch,
        mockPlayers[0].goldenBall,
        mockPlayers[0].maxSpeed,
        mockPlayers[0].shotPower,
        mockPlayers[0].winMatch,
      ]);
    });

    it('should return an empty array when no players provided', () => {
      const result = service.createDataSets([]);
      expect(result).toEqual([]);
    });
  });

  describe('Private methods via createDataSets (indirect test)', () => {
    it('should transform color alpha for backgroundColor', () => {
      const result = service.createDataSets([mockPlayers[0]]);
      expect(result[0].backgroundColor).toBe('rgba(100,100,100,0.3)');
    });
  });
});
