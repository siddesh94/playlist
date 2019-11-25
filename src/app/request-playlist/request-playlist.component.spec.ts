import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPlaylistComponent } from './request-playlist.component';

describe('RequestPlaylistComponent', () => {
  let component: RequestPlaylistComponent;
  let fixture: ComponentFixture<RequestPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
