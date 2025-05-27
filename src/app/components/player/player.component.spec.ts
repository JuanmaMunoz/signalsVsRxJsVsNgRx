import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockPlayers } from '../../info/into_tests';
import { PlayerComponent } from './player.component';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;
  const player = mockPlayers[0];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    component.player = player;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should url of image to be', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img');
    expect(img?.src).toContain(player.image);
  });

  it('should to exist the next contents', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const contents = compiled.querySelectorAll('p');
    expect(contents[0].textContent).toContain(`Adwards: ${player.adwardWon}`);
    expect(contents[1].textContent).toContain(`Golden Balls: ${player.goldenBall}`);
    expect(contents[2].textContent).toContain(`Win / Match %: ${player.winMatch}`);
    expect(contents[3].textContent).toContain(`Goal / Match %: ${player.goalMatch}`);
    expect(contents[4].textContent).toContain(`Dribbling: ${player.dribbling}`);
    expect(contents[5].textContent).toContain(`Max. speed km/h: ${player.maxSpeed}`);
    expect(contents[6].textContent).toContain(`Shot power: ${player.shotPower}`);
  });
});
