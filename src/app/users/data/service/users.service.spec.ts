import {TestBed} from '@angular/core/testing';

import {UsersService} from './users.service';
import {HttpClient} from "@angular/common/http";
import {User} from "../schema/users";
import {of} from "rxjs";

describe('UsersService', () => {
  const usersMockData: User[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618',
        },
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains',
      },
    },
  ];

  let service: UsersService;

  const httpServiceMock = {
    get: jest.fn()
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: HttpClient, useValue: httpServiceMock}]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data with users', () => {
    const httpSpy = jest.spyOn(httpServiceMock, "get").mockReturnValue(of(usersMockData));

    service.getUsers().subscribe(users => {
      expect(users).toBeDefined();
      expect(users.length).toBeGreaterThan(0);
      expect(Array.isArray(users)).toBeTruthy();
      expect(users).toEqual(expect.arrayContaining(usersMockData));
    });

    expect(httpSpy).toHaveBeenCalled();
    expect(httpSpy).toHaveBeenCalledTimes(1);
  })
});
