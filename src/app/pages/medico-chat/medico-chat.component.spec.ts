import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoChatComponent } from './medico-chat.component';

describe('MedicoChatComponent', () => {
  let component: MedicoChatComponent;
  let fixture: ComponentFixture<MedicoChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoChatComponent]
    });
    fixture = TestBed.createComponent(MedicoChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
