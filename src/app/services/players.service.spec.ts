import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { mockPlayers } from '../info/into_tests';
import { PlayersService } from './players.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PlayersService', () => {
  let service: PlayersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [PlayersService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});

    service = TestBed.inject(PlayersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // No requests pending
  });

  it('should fetch players from JSON file', (done) => {
    service.getPlayers().subscribe((players) => {
      expect(players).toEqual(mockPlayers);
      done();
    });

    const req = httpMock.expectOne('assets/data/players.json');
    expect(req.request.method).toBe('GET');

    // Simulate response with mock data
    req.flush(mockPlayers);
  });
});
