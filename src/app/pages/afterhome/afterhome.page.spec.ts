import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AfterhomePage } from './afterhome.page';

describe('AfterhomePage', () => {
  let component: AfterhomePage;
  let fixture: ComponentFixture<AfterhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AfterhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
