import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeforeprofilePage } from './beforeprofile.page';

describe('BeforeprofilePage', () => {
  let component: BeforeprofilePage;
  let fixture: ComponentFixture<BeforeprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeforeprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
